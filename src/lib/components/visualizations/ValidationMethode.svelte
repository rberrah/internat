<script>
  // @ts-nocheck
  // Validation d'une méthode analytique (ICH Q2 / SFSTP) : valeurs mesurées vs valeurs
  // attendues. On dissocie la JUSTESSE (biais → la droite s'écarte de y = x) de la
  // FIDÉLITÉ (dispersion → le nuage s'élargit autour de la droite).

  let biaisConst = 0;   // biais constant (mg/L)  → ordonnée à l'origine
  let biaisProp = 0;    // biais proportionnel (%) → pente
  let cv = 2;           // CV de répétabilité (%) → dispersion

  // Gamme d'étalonnage : 5 niveaux × 3 répétitions
  const NIVEAUX = [10, 25, 50, 75, 100]; // mg/L
  const NREP = 3;
  const CMID = 50; // niveau médian, référence pour le recouvrement

  // ── aléa SEEDÉ (mulberry32 + Box-Muller) : figé au chargement, identique SSR/client ──
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const Z = (() => {
    const rnd = mulberry32(20260712);
    const out = [];
    for (let i = 0; i < NIVEAUX.length * NREP; i++) {
      const u1 = Math.max(rnd(), 1e-9), u2 = rnd();
      out.push(Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2));
    }
    return out; // écarts réduits fixes : les sliders déforment le nuage, ils ne le retirent pas
  })();

  // ── génération des points (modèle : mesuré = b0 + b1·attendu + bruit) ──
  $: penteVraie = 1 + biaisProp / 100;
  $: points = NIVEAUX.flatMap((c, i) =>
    Array.from({ length: NREP }, (_, j) => {
      const sd = (cv / 100) * c;                       // écart-type de répétabilité au niveau c
      const y = biaisConst + penteVraie * c + Z[i * NREP + j] * sd;
      return { x: c, y: Math.max(y, 0), lvl: i };
    })
  );

  // ── régression linéaire des moindres carrés sur le nuage ──
  $: reg = (() => {
    const n = points.length;
    const mx = points.reduce((s, p) => s + p.x, 0) / n;
    const my = points.reduce((s, p) => s + p.y, 0) / n;
    let sxy = 0, sxx = 0, syy = 0;
    for (const p of points) {
      sxy += (p.x - mx) * (p.y - my);
      sxx += (p.x - mx) ** 2;
      syy += (p.y - my) ** 2;
    }
    const pente = sxy / sxx;
    const ord = my - pente * mx;
    const r = syy > 0 && sxx > 0 ? sxy / Math.sqrt(sxx * syy) : 1;
    // écart-type résiduel sy/x = √(SCE résiduelle / (n − 2))
    const sce = points.reduce((s, p) => s + (p.y - (ord + pente * p.x)) ** 2, 0);
    const syx = Math.sqrt(sce / (n - 2));
    return { pente, ord, r, syx };
  })();

  // ── critères ICH Q2 ──
  // LOD = 3,3 · σ/pente   ·   LOQ = 10 · σ/pente   (σ estimé par l'écart-type résiduel sy/x)
  $: lod = reg.pente > 0.05 ? (3.3 * reg.syx) / reg.pente : NaN;
  $: loq = reg.pente > 0.05 ? (10 * reg.syx) / reg.pente : NaN;

  // Justesse : recouvrement au niveau médian (valeur prédite / valeur vraie)
  $: recouvrement = ((biaisConst + penteVraie * CMID) / CMID) * 100;
  $: biaisPct = recouvrement - 100;
  $: juste = Math.abs(biaisPct) <= 5;   // critère usuel : recouvrement 100 % ± 5 %
  $: fidele = cv <= 5;                  // critère usuel : CV de répétabilité ≤ 5 %

  $: verdict = juste
    ? fidele
      ? { t: 'Méthode JUSTE et FIDÈLE — exacte', d: 'Nuage serré, centré sur y = x : c’est la cible.', ok: true }
      : { t: 'JUSTE mais peu FIDÈLE', d: 'Nuage large mais centré sur y = x : pas de biais, mais l’imprécision rend une mesure isolée peu fiable.', ok: false }
    : fidele
      ? { t: 'FIDÈLE mais FAUSSE', d: 'Nuage serré mais décalé de y = x : les résultats sont reproductibles… et tous faux. Le piège classique.', ok: false }
      : { t: 'Ni juste ni fidèle', d: 'Nuage large ET décalé : méthode à rejeter.', ok: false };

  // ── graphe ──
  const W = 460, H = 300, m = { top: 14, right: 16, bottom: 36, left: 46 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  const AXMAX = 130; // mg/L, identique sur les deux axes
  $: xOf = (v) => (Math.min(Math.max(v, 0), AXMAX) / AXMAX) * iW;
  $: yOf = (v) => iH - (Math.min(Math.max(v, 0), AXMAX) / AXMAX) * iH;
  $: droiteReg = (() => {
    const y0 = reg.ord, y1 = reg.ord + reg.pente * AXMAX;
    return `M${xOf(0)},${yOf(y0)} L${xOf(AXMAX)},${yOf(y1)}`;
  })();
  const TICKS = [0, 25, 50, 75, 100, 125];
</script>

<div class="viz">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Nuage de points valeurs mesurées contre valeurs attendues, droite de régression et droite d'identité">
    <g transform={`translate(${m.left},${m.top})`}>
      <!-- grille -->
      {#each TICKS as t}
        <line x1={xOf(t)} x2={xOf(t)} y1="0" y2={iH} class="grid" />
        <line x1="0" x2={iW} y1={yOf(t)} y2={yOf(t)} class="grid" />
        <text x={xOf(t)} y={iH + 14} class="tick">{t}</text>
        <text x="-6" y={yOf(t) + 3} class="tick ty">{t}</text>
      {/each}

      <!-- droite d'identité y = x (la vérité) -->
      <line x1={xOf(0)} y1={yOf(0)} x2={xOf(AXMAX)} y2={yOf(AXMAX)} class="ident" />
      <text x={xOf(AXMAX) - 4} y={yOf(AXMAX) + 14} class="identlbl">y = x</text>

      <!-- droite de régression -->
      <path d={droiteReg} class="reg" class:bad={!juste} />

      <!-- LOQ : borne basse de la gamme quantifiable -->
      {#if Number.isFinite(loq) && loq < AXMAX}
        <line x1={xOf(loq)} x2={xOf(loq)} y1="0" y2={iH} class="loq" />
        <text x={xOf(loq) + 3} y="12" class="loqlbl">LOQ</text>
      {/if}

      <!-- nuage -->
      {#each points as p}
        <circle cx={xOf(p.x)} cy={yOf(p.y)} r="4" class="pt" />
      {/each}

      <!-- axes -->
      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />
      <text x={iW / 2} y={iH + 30} class="axlbl">Valeur attendue (mg/L)</text>
      <text transform={`translate(-36,${iH / 2}) rotate(-90)`} class="axlbl">Valeur mesurée (mg/L)</text>
    </g>
  </svg>

  <div class="stats">
    <span class="pill">pente = {reg.pente.toFixed(3)}</span>
    <span class="pill">ord. origine = {reg.ord.toFixed(2)} mg/L</span>
    <span class="pill">r = {reg.r.toFixed(4)}</span>
    <span class="pill">sy/x = {reg.syx.toFixed(2)} mg/L</span>
    <span class="pill">LOD = {Number.isFinite(lod) ? lod.toFixed(2) : '—'} mg/L</span>
    <span class="pill">LOQ = {Number.isFinite(loq) ? loq.toFixed(2) : '—'} mg/L</span>
    <span class="pill" class:alert={!juste}>recouvrement = {recouvrement.toFixed(1)} %</span>
  </div>

  <div class="verdict" class:ok={verdict.ok}>
    <p class="vt">{verdict.t}</p>
    <p class="vd">{verdict.d}</p>
    <p class="vc">
      Justesse : biais {biaisPct >= 0 ? '+' : ''}{biaisPct.toFixed(1)} % au niveau {CMID} mg/L
      (critère : 100 % ± 5 %) · Fidélité : CV = {cv.toFixed(1)} % (critère : ≤ 5 %)
    </p>
  </div>

  <div class="controls">
    <label>Biais constant → ordonnée à l’origine <span>{biaisConst.toFixed(1)} mg/L</span>
      <input type="range" min="-15" max="15" step="0.5" bind:value={biaisConst} /></label>
    <label>Biais proportionnel → pente <span>{biaisProp >= 0 ? '+' : ''}{biaisProp.toFixed(0)} %</span>
      <input type="range" min="-30" max="30" step="1" bind:value={biaisProp} /></label>
    <label>Dispersion — CV de répétabilité <span>{cv.toFixed(1)} %</span>
      <input type="range" min="0.5" max="20" step="0.5" bind:value={cv} /></label>
  </div>

  <p class="hint">
    Mettez le CV à 15 % avec un biais nul : nuage large mais centré sur y = x — méthode <strong>juste mais peu
    fidèle</strong> ; le r chute et le LOQ explose. Puis CV à 1 % avec un biais constant de +10 mg/L : nuage serré, mais
    toute la droite est décalée — méthode <strong>fidèle et pourtant fausse</strong>, avec un recouvrement à 120 %…
    et un <strong>r = 0,9999</strong>. C’est le piège de la validation : <strong>un excellent coefficient de corrélation
    ne prouve jamais la justesse</strong> — il ne juge que l’alignement des points, pas leur position par rapport à y = x.
  </p>
</div>

<style>
  .viz { border: 1px solid var(--border-subtle); border-radius: var(--radius, 8px); padding: var(--space-4); background: var(--bg-tertiary); }
  svg { width: 100%; height: auto; display: block; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .grid { stroke: var(--border-subtle); stroke-width: 1; opacity: 0.5; }
  .tick { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }
  .tick.ty { text-anchor: end; }
  .ident { stroke: var(--text-muted); stroke-width: 1.4; stroke-dasharray: 5 3; }
  .identlbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 10px; text-anchor: end; }
  .reg { fill: none; stroke: var(--accent-pk); stroke-width: 2.4; }
  .reg.bad { stroke: #c0392b; }
  .loq { stroke: var(--accent-pd); stroke-width: 1.2; stroke-dasharray: 3 3; }
  .loqlbl { fill: var(--accent-pd); font-family: var(--font-mono); font-size: 9px; }
  .pt { fill: color-mix(in srgb, var(--accent-ai) 75%, transparent); stroke: var(--bg-tertiary); stroke-width: 1; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; margin: var(--space-3) 0 var(--space-2); }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.alert { background: color-mix(in srgb, #c0392b 15%, var(--bg-primary)); color: #c0392b; }
  .verdict { border: 1px solid var(--border-subtle); border-left: 3px solid #c0392b; border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: var(--bg-primary); margin-bottom: var(--space-3); }
  .verdict.ok { border-left-color: var(--accent-pk); }
  .vt { margin: 0 0 4px; font-family: var(--font-mono); font-size: var(--text-sm); font-weight: 700; color: #c0392b; }
  .verdict.ok .vt { color: var(--accent-pk); }
  .vd { margin: 0 0 6px; font-size: var(--text-sm); color: var(--text-secondary); }
  .vc { margin: 0; font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); }
  .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--space-2) var(--space-4); margin-top: var(--space-2); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  input[type=range] { width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: var(--space-3) 0 0; text-align: center; line-height: 1.6; }
  .hint strong { color: var(--text-secondary); }
</style>
