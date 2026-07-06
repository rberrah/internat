<script>
  // Michaelis-Menten : la même courbe de saturation en enzymologie ET en
  // pharmacocinétique (élimination saturable). v = Vmax·S / (Km + S).
  let vmax = 100; // vitesse (ou capacité) maximale
  let km = 4;     // constante de Michaelis (= S à v = Vmax/2)

  const Smax = 40;
  const W = 460, H = 250, m = { top: 14, right: 16, bottom: 34, left: 46 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  $: xOf = (/** @type {number} */ s) => (s / Smax) * iW;
  $: yOf = (/** @type {number} */ v) => iH - (v / (vmax * 1.1)) * iH;
  $: curve = Array.from({ length: 121 }, (_, i) => {
    const s = (i / 120) * Smax;
    const v = (vmax * s) / (km + s);
    return `${i ? 'L' : 'M'}${xOf(s).toFixed(1)},${yOf(v).toFixed(1)}`;
  }).join(' ');
</script>

<div class="viz">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Courbe de Michaelis-Menten">
    <g transform={`translate(${m.left},${m.top})`}>
      <!-- régimes -->
      <rect x="0" y="0" width={xOf(km)} height={iH} class="zone lin" />
      <rect x={xOf(3 * km)} y="0" width={iW - xOf(3 * km)} height={iH} class="zone sat" />
      <text x={xOf(km) / 2} y={iH - 6} class="zlbl">ordre 1</text>
      <text x={(xOf(3 * km) + iW) / 2} y="14" class="zlbl">ordre 0</text>

      <!-- Vmax et Vmax/2 -->
      <line x1="0" x2={iW} y1={yOf(vmax)} y2={yOf(vmax)} class="ref" />
      <text x={iW - 2} y={yOf(vmax) - 4} class="reflbl">Vmax</text>
      <line x1="0" x2={xOf(km)} y1={yOf(vmax / 2)} y2={yOf(vmax / 2)} class="ref2" />
      <line x1={xOf(km)} x2={xOf(km)} y1={iH} y2={yOf(vmax / 2)} class="ref2" />
      <text x={xOf(km) + 3} y={iH - 4} class="kmlbl">Km</text>

      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />
      <path d={curve} class="curve" />
      <text x={iW / 2} y={iH + 26} class="axlbl">[S] (substrat) ou concentration</text>
      <text transform={`translate(-34,${iH / 2}) rotate(-90)`} class="axlbl">v (vitesse / élimination)</text>
    </g>
  </svg>

  <div class="two">
    <div class="col"><span class="ct">Enzymologie</span><p>v = vitesse de la réaction ; Km = affinité (petit Km = forte affinité) ; Vmax = enzyme saturée.</p></div>
    <div class="col"><span class="ct">Pharmacocinétique</span><p>v = vitesse d'élimination ; à forte concentration l'enzyme sature → cinétique d'<strong>ordre 0</strong> (phénytoïne, éthanol).</p></div>
  </div>

  <div class="sliders">
    <label><span>Vmax</span><b>{vmax}</b><input type="range" min="20" max="150" step="5" bind:value={vmax} /></label>
    <label><span>Km</span><b>{km}</b><input type="range" min="1" max="20" step="0.5" bind:value={km} /></label>
  </div>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); }
  svg { width: 100%; height: auto; }
  .zone.lin { fill: color-mix(in srgb, var(--accent-ai) 8%, transparent); }
  .zone.sat { fill: color-mix(in srgb, var(--accent-pd) 10%, transparent); }
  .zlbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .curve { fill: none; stroke: var(--accent-pk); stroke-width: 2.5; }
  .ref { stroke: var(--text-muted); stroke-width: 1; stroke-dasharray: 4 3; }
  .ref2 { stroke: var(--accent-ai); stroke-width: 1; stroke-dasharray: 3 3; }
  .reflbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 10px; text-anchor: end; }
  .kmlbl { fill: var(--accent-ai); font-family: var(--font-mono); font-size: 10px; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .two { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-2); }
  .col { border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-2) var(--space-3); background: var(--bg-primary); }
  .ct { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--accent-pk); }
  .col p { margin: 2px 0 0; font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.45; }
  .sliders { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
  .sliders label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sliders span { color: var(--text-secondary); }
  .sliders b { color: var(--accent-pk); }
  .sliders input { grid-column: 1 / -1; }
</style>
