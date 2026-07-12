<script>
  // @ts-nocheck
  // Régulation de la glycémie : boucle insuline / glucagon après un repas.
  // Compare un sujet normal à un patient (fonction bêta + insulinosensibilité réglables),
  // avec les seuils diagnostiques et les flux (production hépatique vs captation musculaire).
  let carbs = 75;   // apport glucidique du repas (g)
  let beta = 100;   // fonction bêta-pancréatique (% du normal)
  let sens = 100;   // insulinosensibilité (% du normal)
  let tCur = 120;   // temps d'observation (min)

  const PRESETS = [
    { id: 'norm', label: 'Sujet normal',        b: 100, s: 100 },
    { id: 'pre',  label: 'Prédiabète / insulinorésistance', b: 80, s: 60 },
    { id: 'dt2',  label: 'Diabète de type 2',   b: 70,  s: 45 },
    { id: 'dt1',  label: 'Diabète de type 1',   b: 5,   s: 100 }
  ];
  const applique = (p) => { beta = p.b; sens = p.s; carbs = 75; };
  $: presetActif = PRESETS.find((p) => p.b === beta && p.s === sens);

  // ── Modèle minimal (Bergman) — déterministe, aucun aléa ─────────────
  // dG/dt = -(p1 + X)·G + p1·G0 + Ra(t)/V   (glucose, mg/dL)
  // dX/dt = -p2·X + p3·(I - Ib)             (action de l'insuline)
  // dI/dt = sécrétion(G, t) - n·(I - Ib)    (insuline, µU/mL)
  const V = 135, P1 = 0.020, P2 = 0.022, P3 = 2.2e-5, NI = 0.14;
  const GAM = 0.006, HSEUIL = 92, KA = 0.020, FABS = 0.90, SECMAX = 14, IB = 10;
  const TMAX = 240, DT = 1;

  function simule(dose, b100, s100) {
    const b = b100 / 100, si = s100 / 100;
    // glycémie à jeun : monte quand la sécrétion et/ou la sensibilité s'effondrent
    const G0 = Math.min(3.2, Math.max(0.7, 0.9 / (Math.pow(b, 0.42) * Math.pow(si, 0.28)))) * 100;
    const p1 = P1 * (0.25 + 0.75 * si);
    const p3 = P3 * Math.pow(si, 3);          // insulinorésistance = effondrement de l'action
    const gam = GAM * Math.pow(b, 1.4);
    const cap = SECMAX * b * (1 + 0.9 * (1 - si)); // capacité bêta max (hyperinsulinisme compensateur)
    let G = G0, X = 0, I = IB;
    const pts = [];
    for (let t = 0; t <= TMAX; t += DT) {
      pts.push({ t, g: G / 100, i: I, x: X, ra: dose * 1000 * FABS * KA * KA * t * Math.exp(-KA * t) });
      const Ra = dose * 1000 * FABS * KA * KA * t * Math.exp(-KA * t);
      const sec = Math.min(gam * Math.max(G - HSEUIL, 0) * t, cap);
      const dG = -(p1 + X) * G + p1 * G0 + Ra / V;
      const dX = -P2 * X + p3 * (I - IB);
      const dI = sec - NI * (I - IB);
      G += dG * DT; X += dX * DT; I += dI * DT;
      if (G < 40) G = 40;
    }
    return { pts, G0: G0 / 100 };
  }

  $: pat = simule(carbs, beta, sens);
  $: ref = simule(carbs, 100, 100);
  $: idx = Math.min(Math.round(tCur / DT), pat.pts.length - 1);
  $: now = pat.pts[idx];

  // ── Repères diagnostiques ────────────────────────────────────────────
  $: gJeun = pat.G0;                       // glycémie à jeun (g/L)
  $: g120 = pat.pts[Math.round(120 / DT)].g; // glycémie à 2 h
  const MMOL = 5.551;                      // g/L -> mmol/L (glucose, PM 180)

  $: dxJeun =
    gJeun >= 1.26 ? { t: 'Diabète (à jeun ≥ 1,26 g/L)', bad: true }
    : gJeun >= 1.1 ? { t: 'Hyperglycémie modérée à jeun (1,10–1,25)', bad: true }
    : { t: 'Glycémie à jeun normale (< 1,10 g/L)', bad: false };
  $: dx120 =
    g120 >= 2.0 ? { t: 'Diabète (2 h ≥ 2,00 g/L)', bad: true }
    : g120 >= 1.4 ? { t: 'Intolérance au glucose (1,40–1,99)', bad: true }
    : { t: 'Tolérance normale (2 h < 1,40 g/L)', bad: false };

  // ── Flux à l'instant t ───────────────────────────────────────────────
  // production hépatique (glycogénolyse + néoglucogenèse), freinée par l'insuline
  $: kmHep = 25 / Math.max(sens / 100, 0.2);
  $: hep = 100 * (kmHep / (kmHep + Math.max(0, now.i - IB)));   // % du basal
  // captation insulino-dépendante (muscle, tissu adipeux) : X·G
  $: capt = 100 + (now.x * now.g * 100) / (P1 * 0.9) * 0.55;    // % du basal (100 = basal)
  $: captAff = Math.min(capt, 600);
  // glucagon : freiné par l'hyperglycémie, mais freination défaillante si carence bêta
  // (hyperglucagonémie relative « paradoxale » du diabète)
  $: glu = Math.max(
    25,
    Math.min(170, 100 * (1 - 0.55 / (1 + Math.exp(-(now.g - 1.25) * 6))) * (1 + 0.45 * (1 - beta / 100)))
  );

  // ── Graphe ───────────────────────────────────────────────────────────
  const W = 460, H = 250, m = { top: 14, right: 40, bottom: 34, left: 44 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  $: yMax = Math.max(2.4, Math.ceil(Math.max(...pat.pts.map((p) => p.g)) * 2) / 2 + 0.2);
  $: iMax = Math.max(60, Math.ceil(Math.max(...pat.pts.map((p) => p.i)) / 20) * 20);
  $: xOf = (t) => (t / TMAX) * iW;
  $: yOf = (g) => iH - (Math.min(g, yMax) / yMax) * iH;
  $: yIns = (i) => iH - (Math.min(i, iMax) / iMax) * iH;
  const path = (pts, fx, fy) =>
    pts.map((p, k) => `${k ? 'L' : 'M'}${fx(p).toFixed(1)},${fy(p).toFixed(1)}`).join(' ');
  $: cPat = path(pat.pts, (p) => xOf(p.t), (p) => yOf(p.g));
  $: cRef = path(ref.pts, (p) => xOf(p.t), (p) => yOf(p.g));
  $: cIns = path(pat.pts, (p) => xOf(p.t), (p) => yIns(p.i));

  const f2 = (v) => v.toFixed(2).replace('.', ',');
  const f1 = (v) => v.toFixed(1).replace('.', ',');
  const f0 = (v) => v.toFixed(0);
</script>

<div class="viz">
  <div class="tabs">
    {#each PRESETS as p}
      <button class:on={presetActif && presetActif.id === p.id} on:click={() => applique(p)}>{p.label}</button>
    {/each}
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img"
       aria-label="Glycémie au cours du temps après un repas, sujet normal contre patient">
    <g transform={`translate(${m.left},${m.top})`}>
      <!-- zones diagnostiques -->
      <rect x="0" y={yOf(yMax)} width={iW} height={Math.max(0, yOf(2.0) - yOf(yMax))} class="zone tox" />
      <line x1="0" x2={iW} y1={yOf(2.0)} y2={yOf(2.0)} class="thr tox" />
      <text x="2" y={yOf(2.0) - 3} class="thrlbl tox">2,00 g/L — seuil diabète à 2 h (HGPO)</text>
      <line x1="0" x2={iW} y1={yOf(1.26)} y2={yOf(1.26)} class="thr" />
      <text x="2" y={yOf(1.26) - 3} class="thrlbl">1,26 g/L — seuil diabète à jeun</text>

      <!-- courbes -->
      <path d={cIns} class="ins" />
      <path d={cRef} class="ref" />
      <path d={cPat} class="pat" />

      <!-- curseur temps -->
      <line x1={xOf(tCur)} x2={xOf(tCur)} y1="0" y2={iH} class="cur" />
      <circle cx={xOf(tCur)} cy={yOf(now.g)} r="4.5" class="dot" />
      <circle cx={xOf(tCur)} cy={yIns(now.i)} r="3.5" class="dotins" />

      <!-- axes -->
      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />
      {#each [0, 60, 120, 180, 240] as tk}
        <line x1={xOf(tk)} x2={xOf(tk)} y1={iH} y2={iH + 4} class="axis" />
        <text x={xOf(tk)} y={iH + 15} class="tick">{tk}</text>
      {/each}
      <text x={iW / 2} y={iH + 28} class="axlbl">Temps après le repas (min)</text>
      <text transform={`translate(-34,${iH / 2}) rotate(-90)`} class="axlbl">Glycémie (g/L)</text>
      <text transform={`translate(${iW + 30},${iH / 2}) rotate(-90)`} class="axlbl ins">Insuline (µU/mL)</text>
    </g>
  </svg>

  <div class="leg">
    <span class="k pat">Patient</span>
    <span class="k ref">Sujet normal (référence)</span>
    <span class="k ins">Insuline</span>
  </div>

  <!-- ── flux à l'instant t ── -->
  <div class="flux">
    <div class="fh">Flux à t = {tCur} min · glycémie {f2(now.g)} g/L ({f1(now.g * MMOL)} mmol/L)</div>
    <div class="fr">
      <span class="fn">Insuline</span>
      <div class="fbar"><div class="fill ins" style={`width:${Math.min(100, (now.i / 120) * 100)}%`}></div></div>
      <span class="fv">{f0(now.i)} µU/mL</span>
    </div>
    <div class="fr">
      <span class="fn">Glucagon</span>
      <div class="fbar"><div class="fill glu" style={`width:${Math.min(100, (glu / 170) * 100)}%`}></div></div>
      <span class="fv">{f0(glu)} % du basal</span>
    </div>
    <div class="fr">
      <span class="fn">Production hépatique<em>glycogénolyse + néoglucogenèse</em></span>
      <div class="fbar"><div class="fill hep" style={`width:${Math.min(100, hep)}%`}></div></div>
      <span class="fv">{f0(hep)} % du basal</span>
    </div>
    <div class="fr">
      <span class="fn">Captation musculaire<em>GLUT4, insulino-dépendante</em></span>
      <div class="fbar"><div class="fill cap" style={`width:${Math.min(100, (captAff / 600) * 100)}%`}></div></div>
      <span class="fv">×{f1(captAff / 100)} le basal</span>
    </div>
  </div>

  <div class="dx">
    <div class="card" class:bad={dxJeun.bad}>
      <span>Glycémie à jeun</span>
      <strong>{f2(gJeun)} g/L</strong>
      <em>{f1(gJeun * MMOL)} mmol/L — {dxJeun.t}</em>
    </div>
    <div class="card" class:bad={dx120.bad}>
      <span>Glycémie à 2 h</span>
      <strong>{f2(g120)} g/L</strong>
      <em>{f1(g120 * MMOL)} mmol/L — {dx120.t}</em>
    </div>
  </div>

  <div class="sliders">
    <label><span>Apport glucidique</span><b>{carbs} g</b>
      <input type="range" min="0" max="120" step="5" bind:value={carbs} /></label>
    <label><span>Temps d'observation</span><b>{tCur} min</b>
      <input type="range" min="0" max="240" step="5" bind:value={tCur} /></label>
    <label><span>Fonction bêta-pancréatique</span><b>{beta} %</b>
      <input type="range" min="5" max="100" step="5" bind:value={beta} /></label>
    <label><span>Insulinosensibilité</span><b>{sens} %</b>
      <input type="range" min="25" max="120" step="5" bind:value={sens} /></label>
  </div>

  <p class="hint">
    Baissez la <strong>fonction bêta</strong> (type 1 = insulinopénie) ou l'<strong>insulinosensibilité</strong>
    (type 2 = résistance) : le pic monte plus haut, le retour à la normale est plus lent, et la glycémie à jeun
    dérive. Sans insuline, le foie ne freine plus sa production et le muscle ne capte plus.
    Les seuils à 2 h ne valent stricto sensu que pour l'<strong>HGPO à 75 g</strong> ; le diagnostic de diabète
    exige 2 glycémies à jeun ≥ 1,26 g/L (ou une glycémie ≥ 2 g/L avec signes, ou HbA1c ≥ 6,5 %).
  </p>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); }
  .tabs { display: flex; flex-wrap: wrap; gap: var(--space-2); }
  .tabs button {
    font-size: var(--text-xs); padding: 5px 10px; border: 1px solid var(--border-strong);
    background: var(--bg-primary); border-radius: 8px; cursor: pointer;
    color: var(--text-secondary); font-family: var(--font-mono);
  }
  .tabs button.on { background: var(--accent-pk); color: #fff; border-color: var(--accent-pk); }
  svg { width: 100%; height: auto; display: block; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .tick { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .axlbl.ins { fill: var(--accent-ai); }
  .zone.tox { fill: color-mix(in srgb, #c0392b 8%, transparent); }
  .thr { stroke: var(--accent-pd); stroke-width: 1.2; stroke-dasharray: 5 3; }
  .thr.tox { stroke: #c0392b; }
  .thrlbl { fill: var(--accent-pd); font-family: var(--font-mono); font-size: 9px; }
  .thrlbl.tox { fill: #c0392b; }
  .pat { fill: none; stroke: var(--accent-pk); stroke-width: 2.6; }
  .ref { fill: none; stroke: var(--text-muted); stroke-width: 1.6; stroke-dasharray: 5 4; }
  .ins { fill: none; stroke: var(--accent-ai); stroke-width: 1.6; opacity: 0.85; }
  .cur { stroke: var(--border-strong); stroke-width: 1; stroke-dasharray: 2 3; }
  .dot { fill: var(--accent-pk); stroke: var(--bg-tertiary); stroke-width: 1.5; }
  .dotins { fill: var(--accent-ai); stroke: var(--bg-tertiary); stroke-width: 1.5; }

  .leg { display: flex; flex-wrap: wrap; gap: var(--space-4); font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); }
  .k { display: inline-flex; align-items: center; gap: 5px; }
  .k::before { content: ''; width: 14px; height: 3px; border-radius: 2px; background: currentColor; }
  .k.pat { color: var(--accent-pk); }
  .k.ref { color: var(--text-muted); }
  .k.ins { color: var(--accent-ai); }

  .flux { border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-3); background: var(--bg-primary); display: grid; gap: 6px; }
  .fh { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-pk); font-weight: 700; margin-bottom: 2px; }
  .fr { display: grid; grid-template-columns: 150px 1fr 88px; align-items: center; gap: var(--space-2); }
  .fn { font-family: var(--font-mono); font-size: 10px; color: var(--text-secondary); display: flex; flex-direction: column; }
  .fn em { font-style: normal; font-size: 8px; color: var(--text-muted); }
  .fbar { height: 9px; background: var(--bg-secondary); border-radius: 999px; overflow: hidden; }
  .fill { height: 100%; border-radius: 999px; }
  .fill.ins { background: var(--accent-ai); }
  .fill.glu { background: var(--accent-pd); }
  .fill.hep { background: var(--accent-pd); }
  .fill.cap { background: var(--accent-pk); }
  .fv { font-family: var(--font-mono); font-size: 10px; color: var(--text-secondary); text-align: right; }

  .dx { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-2); }
  .card { border: 1px solid var(--border-subtle); border-radius: 8px; padding: var(--space-2) var(--space-3); text-align: center; background: var(--bg-primary); }
  .card.bad { border-color: #c0392b; background: color-mix(in srgb, #c0392b 7%, var(--bg-primary)); }
  .card span { display: block; font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; }
  .card strong { display: block; font-size: var(--text-lg); color: var(--accent-pk); }
  .card.bad strong { color: #c0392b; }
  .card em { font-style: normal; font-size: 9px; color: var(--text-muted); }

  .sliders { display: grid; grid-template-columns: 1fr 1fr; gap: 6px var(--space-4); }
  .sliders label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sliders span { color: var(--text-secondary); }
  .sliders b { color: var(--accent-pk); }
  .sliders input { grid-column: 1 / -1; width: 100%; accent-color: var(--accent-pk); }

  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: 0; line-height: 1.55; }
  .hint strong { color: var(--text-secondary); }

  @media (max-width: 520px) {
    .dx, .sliders { grid-template-columns: 1fr; }
    .fr { grid-template-columns: 110px 1fr 76px; }
  }
</style>
