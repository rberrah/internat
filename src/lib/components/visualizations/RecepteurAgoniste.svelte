<script>
  // @ts-nocheck
  // Pharmacologie des récepteurs : courbes dose-réponse en semi-log (modèle d'occupation, Hill = 1).
  // Compare l'agoniste entier seul, l'antagonisme compétitif (surmontable, CE50 ↑),
  // l'antagonisme non compétitif (insurmontable, Emax ↓) et l'agoniste partiel (α < 1).

  const EMAX = 100;   // effet maximal du système (% de la réponse maximale)
  const EC50 = 10;    // CE50 de l'agoniste entier (nmol/L)

  let mode = 'seul';        // 'seul' | 'comp' | 'noncomp' | 'partiel'
  let rapport = 9;          // [B]/Ki : concentration d'antagoniste rapportée à son Ki
  let alpha = 0.4;          // activité intrinsèque de l'agoniste partiel (0–1)
  let logC = 1;             // log10 de la concentration d'agoniste testée (nmol/L)

  const modes = [
    { id: 'seul',    label: 'Agoniste seul',      tag: 'référence' },
    { id: 'comp',    label: '+ antag. compétitif', tag: 'surmontable' },
    { id: 'noncomp', label: '+ antag. non compétitif', tag: 'insurmontable' },
    { id: 'partiel', label: 'Agoniste partiel',   tag: 'α < 1' }
  ];

  // ── paramètres apparents ──────────────────────────────────────────────
  // Compétitif : même site → la CE50 est multipliée par le rapport de dose (1 + [B]/Ki), Emax inchangé.
  // Non compétitif : site allostérique / liaison irréversible → Emax divisé par (1 + [B]/Ki), CE50 inchangée.
  // Agoniste partiel : même CE50 (même affinité) mais plafond = α · Emax.
  $: doseRatio = 1 + rapport;
  $: ec50app = mode === 'comp' ? EC50 * doseRatio : EC50;
  $: emaxapp = mode === 'noncomp' ? EMAX / doseRatio : mode === 'partiel' ? EMAX * alpha : EMAX;
  $: insurmontable = emaxapp < EMAX - 0.5;

  $: eOf = (c) => (emaxapp * c) / (ec50app + c);          // courbe active
  const eRef = (c) => (EMAX * c) / (EC50 + c);            // agoniste seul (référence)

  $: cTest = Math.pow(10, logC);
  $: eTest = eOf(cTest);
  $: eTestRef = eRef(cTest);

  // ── géométrie ─────────────────────────────────────────────────────────
  const W = 460, H = 260, m = { top: 14, right: 16, bottom: 36, left: 44 };
  const LO = -2, HI = 4;   // décades de concentration : 0,01 → 10 000 nmol/L
  const YTOP = 112;
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  const xOf = (lc) => ((lc - LO) / (HI - LO)) * (W - m.left - m.right);
  const yOf = (e) => (H - m.top - m.bottom) - (e / YTOP) * (H - m.top - m.bottom);
  const decades = [-2, -1, 0, 1, 2, 3, 4];
  const decLabel = ['0,01', '0,1', '1', '10', '100', '1000', '10⁴'];

  const trace = (f) =>
    Array.from({ length: 141 }, (_, i) => {
      const lc = LO + (i / 140) * (HI - LO);
      return `${i ? 'L' : 'M'}${xOf(lc).toFixed(1)},${yOf(f(Math.pow(10, lc))).toFixed(1)}`;
    }).join(' ');

  $: curve = trace(eOf);
  const curveRef = trace(eRef);
</script>

<div class="viz">
  <div class="modes">
    {#each modes as mo}
      <button class:on={mode === mo.id} on:click={() => (mode = mo.id)}>
        {mo.label}<em>{mo.tag}</em>
      </button>
    {/each}
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Courbes dose-réponse : agoniste seul, antagoniste compétitif, non compétitif, agoniste partiel">
    <g transform={`translate(${m.left},${m.top})`}>
      <!-- repères -->
      <line x1="0" x2={iW} y1={yOf(100)} y2={yOf(100)} class="ref" />
      <text x={iW - 2} y={yOf(100) - 4} class="reflbl">Emax du système (100 %)</text>
      <line x1="0" x2={iW} y1={yOf(50)} y2={yOf(50)} class="ref" />
      <text x="2" y={yOf(50) - 4} class="reflbl2">50 %</text>

      <!-- courbe de référence (agoniste seul) -->
      {#if mode !== 'seul'}
        <path d={curveRef} class="curve ghost" />
      {/if}

      <!-- plafond effectif + CE50 apparente -->
      {#if mode !== 'seul'}
        <line x1="0" x2={iW} y1={yOf(emaxapp)} y2={yOf(emaxapp)} class="plafond" class:bad={insurmontable} />
      {/if}
      <line
        x1={xOf(Math.log10(ec50app))} x2={xOf(Math.log10(ec50app))}
        y1={iH} y2={yOf(emaxapp / 2)} class="ec50" />
      <text x={xOf(Math.log10(ec50app)) + 3} y={iH - 5} class="ec50lbl">CE50</text>

      <!-- courbe active -->
      <path d={curve} class="curve" />

      <!-- point à la concentration testée -->
      <line x1={xOf(logC)} x2={xOf(logC)} y1={iH} y2={yOf(eTest)} class="probe" />
      <circle cx={xOf(logC)} cy={yOf(eTest)} r="4.5" class="dot" />
      {#if mode !== 'seul'}
        <circle cx={xOf(logC)} cy={yOf(eTestRef)} r="3" class="dotghost" />
      {/if}

      <!-- axes -->
      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />
      {#each decades as d, i}
        <line x1={xOf(d)} x2={xOf(d)} y1={iH} y2={iH + 4} class="axis" />
        <text x={xOf(d)} y={iH + 15} class="tick">{decLabel[i]}</text>
      {/each}
      <text x={iW / 2} y={iH + 30} class="axlbl">log [agoniste] (nmol/L)</text>
      <text transform={`translate(-33,${iH / 2}) rotate(-90)`} class="axlbl">Effet (%)</text>
    </g>
  </svg>

  <div class="stats">
    <span class="pill">CE50 = {ec50app < 100 ? ec50app.toFixed(1) : ec50app.toFixed(0)} nmol/L</span>
    <span class="pill" class:warn={insurmontable}>Emax = {emaxapp.toFixed(0)} %</span>
    {#if mode === 'comp'}<span class="pill">rapport de dose = {doseRatio.toFixed(0)} ×</span>{/if}
    {#if mode === 'partiel'}<span class="pill">activité intrinsèque α = {alpha.toFixed(2)}</span>{/if}
    <span class="pill alt">effet à {cTest < 1 ? cTest.toFixed(2) : cTest.toFixed(0)} nmol/L = {eTest.toFixed(0)} %</span>
  </div>

  <div class="controls">
    <label>[agoniste] testée <span>{cTest < 1 ? cTest.toFixed(2) : cTest.toFixed(0)} nmol/L</span>
      <input type="range" min="-2" max="4" step="0.05" bind:value={logC} /></label>
    <label class:off={mode !== 'comp' && mode !== 'noncomp'}>[antagoniste] / Ki <span>{rapport.toFixed(0)}</span>
      <input type="range" min="0" max="30" step="1" bind:value={rapport}
        disabled={mode !== 'comp' && mode !== 'noncomp'} /></label>
    <label class:off={mode !== 'partiel'}>Activité intrinsèque α <span>{alpha.toFixed(2)}</span>
      <input type="range" min="0.05" max="1" step="0.05" bind:value={alpha}
        disabled={mode !== 'partiel'} /></label>
  </div>

  <p class="hint">
    {#if mode === 'seul'}
      Courbe sigmoïde en semi-log : la <strong>CE50</strong> mesure la <em>puissance</em> (affinité apparente),
      l'<strong>Emax</strong> mesure l'<em>efficacité</em> maximale. Faites glisser la dose testée pour lire l'effet obtenu.
    {:else if mode === 'comp'}
      L'antagoniste <strong>compétitif</strong> se fixe sur le <em>même site</em> que l'agoniste : la courbe est
      déplacée <strong>vers la droite, parallèlement</strong> (CE50 × {doseRatio.toFixed(0)}), mais l'Emax reste
      atteignable → antagonisme <strong>surmontable</strong> en augmentant la dose (ex. naloxone sur les récepteurs µ,
      atropine sur les récepteurs muscariniques).
    {:else if mode === 'noncomp'}
      L'antagoniste <strong>non compétitif</strong> (site allostérique ou liaison irréversible) <strong>abaisse
      l'Emax</strong> sans déplacer la CE50 : augmenter la dose d'agoniste ne rattrape rien → antagonisme
      <strong>insurmontable</strong> (ex. phénoxybenzamine sur les récepteurs α, kétamine sur le NMDA).
    {:else}
      L'<strong>agoniste partiel</strong> a une activité intrinsèque α &lt; 1 : même en occupant <em>tous</em> les
      récepteurs il plafonne sous l'Emax du système. En présence d'un agoniste entier, il se comporte comme un
      <strong>antagoniste</strong> (ex. buprénorphine sur les récepteurs µ, aripiprazole sur D2).
    {/if}
  </p>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); border: 1px solid var(--border-subtle); border-radius: var(--radius, 8px); padding: var(--space-4); background: var(--bg-tertiary); }
  .modes { display: flex; flex-wrap: wrap; gap: var(--space-2); }
  .modes button { display: flex; flex-direction: column; align-items: flex-start; font-size: var(--text-xs); padding: 5px 10px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 8px; cursor: pointer; color: var(--text-secondary); font-family: var(--font-mono); line-height: 1.3; }
  .modes button em { font-style: normal; color: var(--text-muted); font-size: 10px; }
  .modes button.on { background: var(--accent-pk); color: #fff; border-color: var(--accent-pk); }
  .modes button.on em { color: rgba(255, 255, 255, 0.85); }
  svg { width: 100%; height: auto; display: block; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .curve { fill: none; stroke: var(--accent-pk); stroke-width: 2.5; }
  .curve.ghost { stroke: var(--text-muted); stroke-width: 1.4; stroke-dasharray: 4 3; }
  .ref { stroke: var(--border-subtle); stroke-width: 1; stroke-dasharray: 3 3; }
  .reflbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: end; }
  .reflbl2 { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; }
  .plafond { stroke: var(--accent-pd); stroke-width: 1.4; stroke-dasharray: 6 3; }
  .plafond.bad { stroke: #c0392b; }
  .ec50 { stroke: var(--accent-ai); stroke-width: 1; stroke-dasharray: 3 3; }
  .ec50lbl { fill: var(--accent-ai); font-family: var(--font-mono); font-size: 10px; }
  .probe { stroke: var(--accent-pk); stroke-width: 1; opacity: 0.45; }
  .dot { fill: var(--accent-pk); stroke: var(--bg-tertiary); stroke-width: 1.5; }
  .dotghost { fill: var(--text-muted); }
  .tick { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; margin: 0; }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.alt { background: color-mix(in srgb, var(--accent-ai) 15%, var(--bg-primary)); color: var(--accent-ai); }
  .pill.warn { background: color-mix(in srgb, #c0392b 14%, var(--bg-primary)); color: #c0392b; }
  .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--space-2) var(--space-4); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  label.off { opacity: 0.35; }
  input[type='range'] { width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: 0; line-height: 1.6; }
  .hint strong { color: var(--text-secondary); }
</style>
