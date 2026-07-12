<script>
  // @ts-nocheck
  // Fenêtre thérapeutique et index thérapeutique : deux courbes dose-réponse quantales
  // (% de patients répondeurs / % de patients toxiques). Montre pourquoi un médicament
  // à marge étroite (digoxine, lithium, phénytoïne, aminosides) impose un suivi (STP).
  let it = 2;        // index thérapeutique = DT50 / DE50
  let hill = 4;      // pente des courbes (coefficient de Hill)
  let logd = 0.25;   // dose administrée (log10, en multiples de la DE50)

  const DE50 = 1;                 // référence : l'axe est gradué en multiples de la DE50
  const DMIN = 0.1, DMAX = 300;

  const PRESETS = [
    { id: 'dig', label: 'Digoxine',     it: 2,   h: 4, note: 'Zone thérapeutique 0,5–0,9 µg/L (IC systolique) ; signes de toxicité au-delà de 2 µg/L. Hypokaliémie = facteur favorisant majeur.' },
    { id: 'li',  label: 'Lithium',      it: 2.2, h: 5, note: 'Lithiémie à 12 h : 0,5–0,8 mmol/L (formes LI) ou 0,8–1,2 mmol/L (formes LP). Toxicité ≥ 1,2 mmol/L, grave > 2 mmol/L.' },
    { id: 'phe', label: 'Phénytoïne',   it: 2.5, h: 6, note: 'Zone 10–20 mg/L. Nystagmus 20–30 mg/L, ataxie 30–40, coma > 40. Cinétique non linéaire (saturable) : un petit ⬆ de dose peut faire exploser la concentration.' },
    { id: 'gen', label: 'Gentamicine',  it: 3,   h: 3, note: 'Dose unique journalière : pic 30–40 mg/L (efficacité, concentration-dépendante), résiduelle < 0,5 mg/L (néphro/ototoxicité, temps-dépendante).' },
    { id: 'amx', label: 'Amoxicilline', it: 25,  h: 3, note: 'Marge large : pas de suivi des concentrations en routine. La dose est guidée par la CMI du germe, pas par la toxicité.' }
  ];
  const applique = (p) => { it = p.it; hill = p.h; };
  const proche = (a, b) => Math.abs(a - b) < 0.05;
  $: actif = PRESETS.find((p) => proche(p.it, it) && proche(p.h, hill));

  // ── Courbes quantales : % de patients = 100 / (1 + (D50/d)^h) ────────
  $: dt50 = DE50 * it;
  const pct = (d, d50, h) => 100 / (1 + Math.pow(d50 / d, h));
  const dAt = (p, d50, h) => d50 * Math.pow(p / (100 - p), 1 / h); // dose atteignant p % des patients

  $: de90 = dAt(90, DE50, hill);   // dose efficace chez 90 % des patients
  $: dt10 = dAt(10, dt50, hill);   // dose toxique chez 10 % des patients
  $: de99 = dAt(99, DE50, hill);
  $: dt1 = dAt(1, dt50, hill);
  $: fsc = dt1 / de99;             // facteur de sécurité certain (DT1 / DE99)
  $: fenetre = dt10 > de90;        // la fenêtre existe-t-elle ?

  $: dose = Math.pow(10, logd);
  $: pE = pct(dose, DE50, hill);
  $: pT = pct(dose, dt50, hill);

  $: zone = (() => {
    const sous = dose < de90;
    const tox = dose > dt10;
    if (sous && tox) return { t: 'Zone de chevauchement', c: 'À cette dose, l’effet n’est pas encore obtenu chez 90 % des patients alors que plus de 10 % sont déjà toxiques : il n’existe AUCUNE dose à la fois efficace et sûre pour toute la population.', bad: true };
    if (sous) return { t: 'Zone sous-thérapeutique', c: 'Dose insuffisante : l’effet n’est pas obtenu chez la majorité des patients (échec thérapeutique, résistance apparente).', bad: true };
    if (tox) return { t: 'Zone toxique', c: 'Plus de 10 % des patients présentent l’effet toxique : surdosage.', bad: true };
    return { t: 'Fenêtre thérapeutique', c: 'Dose efficace chez ≥ 90 % des patients et toxique chez < 10 % : c’est la cible du traitement.', bad: false };
  })();

  $: marge =
    it < 3 ? { t: 'Marge thérapeutique ÉTROITE', c: 'Suivi thérapeutique pharmacologique (STP) indispensable : dosages plasmatiques, adaptation posologique, vigilance sur les interactions et l’insuffisance rénale.', bad: true }
    : it < 10 ? { t: 'Marge intermédiaire', c: 'Surveillance clinique ; dosages utiles dans certaines situations (insuffisance rénale, sujet âgé, interactions, échec ou suspicion de surdosage).', bad: false }
    : { t: 'Marge large', c: 'Pas de suivi des concentrations en routine : la dose standard est sûre pour la quasi-totalité des patients.', bad: false };

  // ── Graphe (axe des doses logarithmique) ─────────────────────────────
  const W = 460, H = 250, m = { top: 14, right: 16, bottom: 42, left: 44 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  const L10 = Math.log10 || ((x) => Math.log(x) / Math.LN10);
  $: xOf = (d) => ((L10(d) - L10(DMIN)) / (L10(DMAX) - L10(DMIN))) * iW;
  $: yOf = (p) => iH - (p / 100) * iH;
  $: xClamp = (d) => Math.max(0, Math.min(iW, xOf(d)));

  const N = 180;
  $: doses = Array.from({ length: N + 1 }, (_, k) =>
    Math.pow(10, L10(DMIN) + (k / N) * (L10(DMAX) - L10(DMIN)))
  );
  $: cEff = doses.map((d, k) => `${k ? 'L' : 'M'}${xOf(d).toFixed(1)},${yOf(pct(d, DE50, hill)).toFixed(1)}`).join(' ');
  $: cTox = doses.map((d, k) => `${k ? 'L' : 'M'}${xOf(d).toFixed(1)},${yOf(pct(d, dt50, hill)).toFixed(1)}`).join(' ');

  const TICKS = [0.1, 0.3, 1, 3, 10, 30, 100, 300];
  const f1 = (v) => v.toFixed(1).replace('.', ',');
  const f2 = (v) => v.toFixed(2).replace('.', ',');
  const ftick = (v) => (v >= 1 ? String(v) : String(v).replace('.', ','));
</script>

<div class="viz">
  <div class="tabs">
    {#each PRESETS as p}
      <button class:on={actif && actif.id === p.id} on:click={() => applique(p)}>{p.label}</button>
    {/each}
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img"
       aria-label="Courbes dose-réponse d'efficacité et de toxicité, fenêtre thérapeutique">
    <g transform={`translate(${m.left},${m.top})`}>
      <!-- zones -->
      <rect x="0" y="0" width={xClamp(de90)} height={iH} class="z-sous" />
      <rect x={xClamp(dt10)} y="0" width={Math.max(0, iW - xClamp(dt10))} height={iH} class="z-tox" />
      {#if fenetre}
        <rect x={xClamp(de90)} y="0" width={Math.max(0, xClamp(dt10) - xClamp(de90))} height={iH} class="z-fen" />
        <text x={(xClamp(de90) + xClamp(dt10)) / 2} y="12" class="zlbl fen">FENÊTRE</text>
      {/if}

      <!-- courbes -->
      <path d={cEff} class="c-eff" />
      <path d={cTox} class="c-tox" />

      <!-- DE50 / DT50 -->
      <line x1={xOf(DE50)} x2={xOf(DE50)} y1={yOf(50)} y2={iH} class="ref eff" />
      <text x={xOf(DE50)} y={iH + 26} class="d50 eff">DE50</text>
      <line x1={xClamp(dt50)} x2={xClamp(dt50)} y1={yOf(50)} y2={iH} class="ref tox" />
      <text x={xClamp(dt50)} y={iH + 26} class="d50 tox">DT50</text>

      <!-- dose administrée -->
      <line x1={xClamp(dose)} x2={xClamp(dose)} y1="0" y2={iH} class="cur" />
      <circle cx={xClamp(dose)} cy={yOf(pE)} r="4.5" class="dot eff" />
      <circle cx={xClamp(dose)} cy={yOf(pT)} r="4.5" class="dot tox" />

      <!-- axes -->
      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />
      {#each TICKS as tk}
        <line x1={xOf(tk)} x2={xOf(tk)} y1={iH} y2={iH + 4} class="axis" />
        <text x={xOf(tk)} y={iH + 14} class="tick">{ftick(tk)}</text>
      {/each}
      {#each [0, 50, 100] as pk}
        <line x1="-4" x2="0" y1={yOf(pk)} y2={yOf(pk)} class="axis" />
        <text x="-7" y={yOf(pk) + 3} class="tick ty">{pk}</text>
      {/each}
      <text x={iW / 2} y={iH + 38} class="axlbl">Dose (multiples de la DE50 — échelle log)</text>
      <text transform={`translate(-34,${iH / 2}) rotate(-90)`} class="axlbl">% de patients</text>
    </g>
  </svg>

  <div class="leg">
    <span class="k eff">Effet thérapeutique (répondeurs)</span>
    <span class="k tox">Effet toxique</span>
  </div>

  <div class="idx">
    <div class="card" class:bad={it < 3}>
      <span>Index thérapeutique</span><strong>{f1(it)}</strong><em>DT50 / DE50</em>
    </div>
    <div class="card" class:bad={fsc < 1}>
      <span>Facteur de sécurité</span><strong>{f2(fsc)}</strong><em>DT1 / DE99 — sûr si &gt; 1</em>
    </div>
    <div class="card" class:bad={!fenetre}>
      <span>Fenêtre</span>
      <strong>{fenetre ? `${f1(de90)} – ${f1(dt10)}` : 'aucune'}</strong>
      <em>{fenetre ? 'DE90 → DT10' : 'DT10 < DE90 : chevauchement'}</em>
    </div>
  </div>

  <div class="dose-read">
    <span class="pill">dose = {f2(dose)} × DE50</span>
    <span class="pill eff">{f1(pE)} % de répondeurs</span>
    <span class="pill tox" class:hot={pT >= 10}>{f1(pT)} % de patients toxiques</span>
  </div>

  <div class="verdict" class:bad={zone.bad}>
    <p class="vt">{zone.t}</p>
    <p class="vc">{zone.c}</p>
  </div>

  <div class="verdict" class:bad={marge.bad}>
    <p class="vt">{marge.t}</p>
    <p class="vc">{marge.c}</p>
    {#if actif}<p class="vn">{actif.label} — {actif.note}</p>{/if}
  </div>

  <div class="sliders">
    <label><span>Dose administrée</span><b>{f2(dose)} × DE50</b>
      <input type="range" min="-1" max="2.47" step="0.01" bind:value={logd} /></label>
    <label><span>Index thérapeutique</span><b>{f1(it)}</b>
      <input type="range" min="1.2" max="30" step="0.1" bind:value={it} /></label>
    <label><span>Pente des courbes (Hill)</span><b>{f1(hill)}</b>
      <input type="range" min="1" max="8" step="0.1" bind:value={hill} /></label>
  </div>

  <p class="hint">
    Rapprochez les deux courbes (index thérapeutique → 2, comme la digoxine ou le lithium) : la fenêtre
    se referme puis <strong>disparaît</strong> — une dose efficace pour presque tous devient toxique pour
    certains. Aplatissez la pente : les courbes s'étalent et se chevauchent, même avec un IT correct.
    C'est pourquoi les médicaments à marge étroite se pilotent sur la <strong>concentration plasmatique</strong>
    (STP) et non sur la dose seule.
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
  .tick.ty { text-anchor: end; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }

  .z-sous { fill: color-mix(in srgb, var(--text-muted) 14%, transparent); }
  .z-fen { fill: color-mix(in srgb, var(--accent-pk) 16%, transparent); }
  .z-tox { fill: color-mix(in srgb, #c0392b 12%, transparent); }
  .zlbl { font-family: var(--font-mono); font-size: 9px; text-anchor: middle; letter-spacing: 0.08em; }
  .zlbl.fen { fill: var(--accent-pk); font-weight: 700; }

  .c-eff { fill: none; stroke: var(--accent-pk); stroke-width: 2.6; }
  .c-tox { fill: none; stroke: #c0392b; stroke-width: 2.6; }
  .ref { stroke-width: 1; stroke-dasharray: 3 3; }
  .ref.eff { stroke: var(--accent-pk); }
  .ref.tox { stroke: #c0392b; }
  .d50 { font-family: var(--font-mono); font-size: 9px; text-anchor: middle; font-weight: 700; }
  .d50.eff { fill: var(--accent-pk); }
  .d50.tox { fill: #c0392b; }
  .cur { stroke: var(--accent-ai); stroke-width: 1.4; }
  .dot { stroke: var(--bg-tertiary); stroke-width: 1.5; }
  .dot.eff { fill: var(--accent-pk); }
  .dot.tox { fill: #c0392b; }

  .leg { display: flex; flex-wrap: wrap; gap: var(--space-4); font-family: var(--font-mono); font-size: 10px; }
  .k { display: inline-flex; align-items: center; gap: 5px; color: var(--text-muted); }
  .k::before { content: ''; width: 14px; height: 3px; border-radius: 2px; background: currentColor; }
  .k.eff { color: var(--accent-pk); }
  .k.tox { color: #c0392b; }

  .idx { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2); }
  .card { border: 1px solid var(--border-subtle); border-radius: 8px; padding: var(--space-2) var(--space-3); text-align: center; background: var(--bg-primary); }
  .card.bad { border-color: #c0392b; background: color-mix(in srgb, #c0392b 7%, var(--bg-primary)); }
  .card span { display: block; font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; }
  .card strong { display: block; font-size: var(--text-lg); color: var(--accent-pk); }
  .card.bad strong { color: #c0392b; }
  .card em { font-style: normal; font-size: 9px; color: var(--text-muted); }

  .dose-read { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: var(--bg-secondary); color: var(--text-secondary); font-weight: 700; }
  .pill.eff { background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); }
  .pill.tox { background: var(--bg-secondary); color: var(--text-muted); }
  .pill.tox.hot { background: color-mix(in srgb, #c0392b 15%, var(--bg-primary)); color: #c0392b; }

  .verdict { border: 1px solid var(--border-subtle); border-left: 3px solid var(--accent-pk); border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: var(--bg-primary); }
  .verdict.bad { border-left-color: #c0392b; }
  .vt { margin: 0 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-sm); font-weight: 700; color: var(--accent-pk); }
  .verdict.bad .vt { color: #c0392b; }
  .vc { margin: 0; font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.55; }
  .vn { margin: var(--space-2) 0 0; font-size: var(--text-xs); color: var(--text-muted); line-height: 1.5; font-family: var(--font-mono); }

  .sliders { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px var(--space-4); }
  .sliders label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sliders span { color: var(--text-secondary); }
  .sliders b { color: var(--accent-pk); }
  .sliders input { grid-column: 1 / -1; width: 100%; accent-color: var(--accent-pk); }

  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: 0; line-height: 1.55; }
  .hint strong { color: var(--text-secondary); }

  @media (max-width: 520px) {
    .idx, .sliders { grid-template-columns: 1fr; }
  }
</style>
