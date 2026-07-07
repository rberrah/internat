<script>
  // Équation de Nernst (25 °C) : E = E0 + (0,059 / n) · log10( [Ox] / [Red] ).
  // On règle le potentiel standard, le nombre d'électrons et le rapport Ox/Red.
  let e0 = 0.77;   // potentiel standard (V) — ex. Fe3+/Fe2+
  let n = 1;       // électrons échangés
  let logr = 0;    // log10([Ox]/[Red])

  const K = 0.059;
  $: pente = K / n;
  $: E = e0 + pente * logr;

  const W = 460, H = 220, m = { top: 14, right: 14, bottom: 34, left: 46 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  const lmin = -4, lmax = 4;
  $: eAt = (/** @type {number} */ l) => e0 + pente * l;
  $: emin = Math.min(eAt(lmin), eAt(lmax));
  $: emax = Math.max(eAt(lmin), eAt(lmax));
  $: span = (emax - emin) || 1;
  $: xOf = (/** @type {number} */ l) => ((l - lmin) / (lmax - lmin)) * iW;
  $: yOf = (/** @type {number} */ e) => iH - ((e - emin) / span) * iH;
  $: line = `M${xOf(lmin).toFixed(1)},${yOf(eAt(lmin)).toFixed(1)} L${xOf(lmax).toFixed(1)},${yOf(eAt(lmax)).toFixed(1)}`;
</script>

<div class="viz">
  <div class="readout">Potentiel <strong>E = {E.toFixed(3)} V</strong> · pente <strong>{(pente * 1000).toFixed(0)} mV/décade</strong></div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Droite de Nernst">
    <g transform={`translate(${m.left},${m.top})`}>
      <line x1={xOf(0)} x2={xOf(0)} y1="0" y2={iH} class="grid" />
      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />
      <path d={line} class="curve" />
      <circle cx={xOf(logr)} cy={yOf(E)} r="6" class="pt" />
      <text x={iW / 2} y={iH + 26} class="axlbl">log₁₀([Ox]/[Red])</text>
      <text transform={`translate(-34,${iH / 2}) rotate(-90)`} class="axlbl">E (V)</text>
      <text x={xOf(0) + 4} y="12" class="e0lbl">E = E0 quand [Ox] = [Red]</text>
    </g>
  </svg>

  <p class="note">
    À <strong>[Ox] = [Red]</strong> (log = 0), E = E0. La droite monte de <strong>59/n mV</strong> par
    décade : plus n est grand, plus la pente est faible. C'est le principe de la
    <strong>potentiométrie</strong> (électrode de verre : ≈ −59 mV/unité de pH).
  </p>

  <div class="sliders">
    <label><span>E0 (V)</span><b>{e0.toFixed(2)}</b><input type="range" min="-1" max="1.5" step="0.01" bind:value={e0} /></label>
    <label><span>n (électrons)</span><b>{n}</b><input type="range" min="1" max="4" step="1" bind:value={n} /></label>
    <label><span>log([Ox]/[Red])</span><b>{logr}</b><input type="range" min="-4" max="4" step="0.2" bind:value={logr} /></label>
  </div>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); }
  .readout { font-family: var(--font-mono); font-size: var(--text-sm); color: var(--text-secondary); }
  .readout strong { color: var(--accent-pk); }
  svg { width: 100%; height: auto; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .grid { stroke: var(--border-subtle); stroke-width: 1; stroke-dasharray: 3 3; }
  .curve { fill: none; stroke: var(--accent-ai); stroke-width: 2.5; }
  .pt { fill: var(--accent-pk); stroke: var(--bg-tertiary); stroke-width: 2; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .e0lbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; }
  .note { margin: 0; font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.5; }
  .sliders { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px; }
  .sliders label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sliders span { color: var(--text-secondary); }
  .sliders b { color: var(--accent-pk); }
  .sliders input { grid-column: 1 / -1; }
</style>
