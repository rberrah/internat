<script>
  // Courbe effet-dose (modèle Emax / Hill) : E = E0 + Emax·C^h / (EC50^h + C^h).
  // Illustre EC50 (= DE50), l'effet maximal, le coefficient de Hill et la
  // fenêtre thérapeutique (seuil d'efficacité vs seuil toxique).
  let emax = 100;  // effet maximal
  let ec50 = 8;    // concentration produisant 50 % de l'effet
  let hill = 1.5;  // pente de Hill
  let seuilTox = 85; // seuil d'effet toxique (% de l'axe)

  const E0 = 0, Cmax = 40;
  const W = 460, H = 250, m = { top: 14, right: 14, bottom: 34, left: 44 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  $: yTop = E0 + emax * 1.05;
  $: xOf = (/** @type {number} */ c) => (c / Cmax) * iW;
  $: yOf = (/** @type {number} */ e) => iH - (e / yTop) * iH;
  $: eOf = (/** @type {number} */ c) => E0 + (emax * c ** hill) / (ec50 ** hill + c ** hill);
  $: curve = Array.from({ length: 121 }, (_, i) => {
    const c = (i / 120) * Cmax;
    return `${i ? 'L' : 'M'}${xOf(c).toFixed(1)},${yOf(eOf(c)).toFixed(1)}`;
  }).join(' ');
  // concentration au seuil toxique (résolution inverse de l'Emax)
  $: cTox = (() => {
    const eT = (seuilTox / 100) * emax;
    if (eT >= emax) return null;
    return ec50 * (eT / (emax - eT)) ** (1 / hill);
  })();
</script>

<div class="viz">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Courbe effet-dose (Emax)">
    <g transform={`translate(${m.left},${m.top})`}>
      <!-- fenêtre thérapeutique -->
      {#if cTox}<rect x={xOf(ec50)} y="0" width={Math.max(0, xOf(cTox) - xOf(ec50))} height={iH} class="window" />{/if}

      <!-- EC50 / DE50 -->
      <line x1={xOf(ec50)} x2={xOf(ec50)} y1={iH} y2={yOf(E0 + emax / 2)} class="ref2" />
      <line x1="0" x2={xOf(ec50)} y1={yOf(E0 + emax / 2)} y2={yOf(E0 + emax / 2)} class="ref2" />
      <text x={xOf(ec50) + 3} y={iH - 4} class="lbl2">EC50</text>
      <text x="2" y={yOf(E0 + emax / 2) - 4} class="lbl2">50 %</text>

      <!-- Emax -->
      <line x1="0" x2={iW} y1={yOf(emax)} y2={yOf(emax)} class="ref" />
      <text x={iW - 2} y={yOf(emax) - 4} class="reflbl">Emax</text>
      <!-- seuil toxique -->
      <line x1="0" x2={iW} y1={yOf((seuilTox / 100) * emax)} y2={yOf((seuilTox / 100) * emax)} class="tox" />
      <text x={iW - 2} y={yOf((seuilTox / 100) * emax) + 11} class="toxlbl">seuil toxique</text>

      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />
      <path d={curve} class="curve" />
      <text x={iW / 2} y={iH + 26} class="axlbl">Concentration (ou dose)</text>
      <text transform={`translate(-32,${iH / 2}) rotate(-90)`} class="axlbl">Effet</text>
    </g>
  </svg>

  <p class="note">
    La <strong>fenêtre thérapeutique</strong> (zone verte) sépare l'effet utile du seuil toxique.
    Une pente de Hill élevée resserre la relation dose-effet ; un index thérapeutique étroit
    (fenêtre étroite) impose une surveillance.
  </p>

  <div class="sliders">
    <label><span>Emax</span><b>{emax}</b><input type="range" min="20" max="120" step="5" bind:value={emax} /></label>
    <label><span>EC50 (DE50)</span><b>{ec50}</b><input type="range" min="2" max="24" step="0.5" bind:value={ec50} /></label>
    <label><span>Hill (pente)</span><b>{hill}</b><input type="range" min="0.5" max="5" step="0.1" bind:value={hill} /></label>
    <label><span>Seuil toxique</span><b>{seuilTox} %</b><input type="range" min="55" max="98" step="1" bind:value={seuilTox} /></label>
  </div>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); }
  svg { width: 100%; height: auto; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .curve { fill: none; stroke: var(--accent-pk); stroke-width: 2.5; }
  .window { fill: color-mix(in srgb, var(--accent-pd) 12%, transparent); }
  .ref { stroke: var(--text-muted); stroke-width: 1; stroke-dasharray: 4 3; }
  .ref2 { stroke: var(--accent-ai); stroke-width: 1; stroke-dasharray: 3 3; }
  .tox { stroke: #b23b4a; stroke-width: 1.2; stroke-dasharray: 5 3; }
  .reflbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 10px; text-anchor: end; }
  .toxlbl { fill: #b23b4a; font-family: var(--font-mono); font-size: 9px; text-anchor: end; }
  .lbl2 { fill: var(--accent-ai); font-family: var(--font-mono); font-size: 10px; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .note { margin: 0; font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.5; }
  .sliders { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
  .sliders label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sliders span { color: var(--text-secondary); }
  .sliders b { color: var(--accent-pk); }
  .sliders input { grid-column: 1 / -1; }
</style>
