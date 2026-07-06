<script>
  // Indices PK/PD des antibiotiques : concentration au cours du temps vs CMI.
  // Illustre %T>CMI (temps-dépendant), Cmax/CMI (concentration-dépendant),
  // AUC/CMI (exposition). Décroissance mono-exponentielle après un pic.
  let cmax = 40;   // pic de concentration (mg/L)
  let thalf = 2;   // demi-vie (h)
  let mic = 2;     // CMI du germe (mg/L)
  let tau = 8;     // intervalle entre deux doses (h)
  let famille = 'temps'; // 'temps' | 'conc' | 'auc'

  const familles = [
    { id: 'temps', label: 'Bêta-lactamines', idx: '%T>CMI', hint: 'temps-dépendant' },
    { id: 'conc',  label: 'Aminosides',      idx: 'Cmax/CMI', hint: 'concentration-dépendant' },
    { id: 'auc',   label: 'Fluoroquinolones', idx: 'AUC/CMI', hint: 'exposition' }
  ];

  // ── indices (fonctions pures des paramètres, référencés textuellement) ──
  $: ke = 0.693 / thalf;
  $: tOver = cmax > mic ? Math.min(Math.log(cmax / mic) / ke, tau) : 0;
  $: pctT = (tOver / tau) * 100;
  $: ratioCmax = cmax / mic;
  $: aucTau = (cmax / ke) * (1 - Math.exp(-ke * tau));
  $: auc24 = aucTau * (24 / tau);
  $: aucMic = auc24 / mic;

  // ── graphe ──
  const W = 460, H = 260, m = { top: 14, right: 14, bottom: 34, left: 42 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  $: yMax = Math.max(cmax * 1.1, mic * 1.4, 1);
  $: xOf = (/** @type {number} */ t) => (t / tau) * iW;
  $: yOf = (/** @type {number} */ c) => iH - (c / yMax) * iH;
  $: curve = Array.from({ length: 121 }, (_, i) => {
    const t = (i / 120) * tau;
    const c = cmax * Math.exp(-ke * t);
    return `${i ? 'L' : 'M'}${xOf(t).toFixed(1)},${yOf(c).toFixed(1)}`;
  }).join(' ');
  // zone C > CMI (remplissage sous la courbe, au-dessus de la CMI)
  $: fillOver = (() => {
    if (cmax <= mic) return '';
    const pts = [];
    for (let i = 0; i <= 120; i++) {
      const t = (i / 120) * tau;
      const c = cmax * Math.exp(-ke * t);
      if (c >= mic) pts.push(`${xOf(t).toFixed(1)},${yOf(c).toFixed(1)}`);
    }
    if (!pts.length) return '';
    const xEnd = xOf(tOver).toFixed(1);
    return `M${pts[0]} L${pts.join(' L')} L${xEnd},${yOf(mic).toFixed(1)} L${xOf(0).toFixed(1)},${yOf(mic).toFixed(1)} Z`;
  })();
</script>

<div class="viz">
  <div class="fams">
    {#each familles as f}
      <button class:on={famille === f.id} on:click={() => (famille = f.id)}>
        {f.label}<em>{f.idx}</em>
      </button>
    {/each}
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Concentration antibiotique au cours du temps par rapport à la CMI">
    <g transform={`translate(${m.left},${m.top})`}>
      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />
      {#if fillOver}<path d={fillOver} class="over" class:active={famille === 'temps'} />{/if}
      <path d={curve} class="curve" />
      <line x1="0" x2={iW} y1={yOf(mic)} y2={yOf(mic)} class="mic" />
      <text x={iW - 2} y={yOf(mic) - 5} class="miclbl">CMI = {mic} mg/L</text>
      <text x={iW / 2} y={iH + 26} class="axlbl">Temps sur l'intervalle τ = {tau} h</text>
      <text transform={`translate(-32,${iH / 2}) rotate(-90)`} class="axlbl">C (mg/L)</text>
    </g>
  </svg>

  <div class="idx">
    <div class="card" class:hi={famille === 'temps'}><span>%T&gt;CMI</span><strong>{pctT.toFixed(0)} %</strong><em>temps-dépendant</em></div>
    <div class="card" class:hi={famille === 'conc'}><span>Cmax/CMI</span><strong>{ratioCmax.toFixed(1)}</strong><em>concentration-dép.</em></div>
    <div class="card" class:hi={famille === 'auc'}><span>AUC₂₄/CMI</span><strong>{aucMic.toFixed(0)}</strong><em>exposition</em></div>
  </div>

  <div class="sliders">
    <label><span>Pic Cmax</span><b>{cmax} mg/L</b><input type="range" min="4" max="80" step="1" bind:value={cmax} /></label>
    <label><span>Demi-vie</span><b>{thalf} h</b><input type="range" min="0.5" max="8" step="0.5" bind:value={thalf} /></label>
    <label><span>CMI du germe</span><b>{mic} mg/L</b><input type="range" min="0.25" max="16" step="0.25" bind:value={mic} /></label>
    <label><span>Intervalle τ</span><b>{tau} h</b><input type="range" min="4" max="24" step="1" bind:value={tau} /></label>
  </div>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); }
  .fams { display: flex; flex-wrap: wrap; gap: var(--space-2); }
  .fams button { display: flex; flex-direction: column; align-items: flex-start; font-size: var(--text-xs); padding: 5px 10px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 8px; cursor: pointer; color: var(--text-secondary); font-family: var(--font-mono); }
  .fams button em { font-style: normal; color: var(--text-muted); font-size: 10px; }
  .fams button.on { background: var(--accent-pk); color: #fff; border-color: var(--accent-pk); }
  .fams button.on em { color: rgba(255,255,255,0.85); }
  svg { width: 100%; height: auto; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .curve { fill: none; stroke: var(--accent-ai); stroke-width: 2.5; }
  .mic { stroke: #b23b4a; stroke-width: 1.6; stroke-dasharray: 5 3; }
  .miclbl { fill: #b23b4a; font-family: var(--font-mono); font-size: 10px; text-anchor: end; }
  .over { fill: color-mix(in srgb, var(--accent-pk) 18%, transparent); stroke: none; }
  .over.active { fill: color-mix(in srgb, var(--accent-pk) 34%, transparent); }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .idx { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2); }
  .card { border: 1px solid var(--border-subtle); border-radius: 8px; padding: var(--space-2) var(--space-3); text-align: center; background: var(--bg-primary); }
  .card.hi { border-color: var(--accent-pk); background: color-mix(in srgb, var(--accent-pk) 8%, var(--bg-primary)); }
  .card span { display: block; font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; }
  .card strong { display: block; font-size: var(--text-lg); color: var(--accent-pk); }
  .card em { font-style: normal; font-size: 9px; color: var(--text-muted); }
  .sliders { display: grid; gap: 6px; grid-template-columns: 1fr 1fr; }
  .sliders label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sliders span { color: var(--text-secondary); }
  .sliders b { color: var(--accent-pk); }
  .sliders input { grid-column: 1 / -1; }
</style>
