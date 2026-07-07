<script>
  // Équilibre acide-base : pH = 6,1 + log10( HCO3 / (0,03 × PCO2) ) (Henderson-Hasselbalch).
  // On règle bicarbonates et PCO2, le pH et le type de trouble s'affichent.
  let hco3 = 24;  // mmol/L (N 22-26)
  let pco2 = 40;  // mmHg  (N 38-42)

  $: ph = 6.1 + Math.log10(hco3 / (0.03 * pco2));
  $: verdict = (() => {
    const acid = ph < 7.38, alc = ph > 7.42;
    if (!acid && !alc) {
      if (hco3 < 22 && pco2 < 38) return { t: 'Compensé / mixte', c: '#34568a', d: "pH normal mais HCO3 et PCO2 déviés : trouble compensé ou mixte." };
      return { t: 'pH normal', c: '#1f7a6d', d: "Équilibre acide-base normal (pH 7,38-7,42)." };
    }
    if (acid) {
      if (hco3 < 22) return { t: 'Acidose métabolique', c: '#b23b4a', d: "HCO3 bas → acidose métabolique. Compensation attendue : hyperventilation (PCO2 ↓, formule de Winter)." };
      return { t: 'Acidose respiratoire', c: '#b23b4a', d: "PCO2 élevé → acidose respiratoire (hypoventilation). Compensation rénale : HCO3 ↑ (lente)." };
    }
    if (hco3 > 26) return { t: 'Alcalose métabolique', c: '#9c5a2b', d: "HCO3 haut → alcalose métabolique (vomissements, diurétiques). Compensation : hypoventilation (PCO2 ↑)." };
    return { t: 'Alcalose respiratoire', c: '#9c5a2b', d: "PCO2 bas → alcalose respiratoire (hyperventilation). Compensation rénale : HCO3 ↓." };
  })();

  const W = 460, H = 70, m = 30;
  const phMin = 6.9, phMax = 7.7;
  $: xOf = (/** @type {number} */ p) => m + ((p - phMin) / (phMax - phMin)) * (W - 2 * m);
</script>

<div class="viz">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Échelle de pH sanguin">
    <rect x={xOf(7.38)} y="22" width={xOf(7.42) - xOf(7.38)} height="16" class="normal" />
    <line x1={m} x2={W - m} y1="30" y2="30" class="axis" />
    {#each [6.9, 7.0, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7] as t}
      <line x1={xOf(t)} x2={xOf(t)} y1="27" y2="33" class="tick" />
      <text x={xOf(t)} y="48" class="tlbl">{t.toFixed(1)}</text>
    {/each}
    <text x={m} y="14" class="side acid">acidose</text>
    <text x={W - m} y="14" class="side alc">alcalose</text>
    <circle cx={xOf(Math.max(phMin, Math.min(phMax, ph)))} cy="30" r="7" style={`fill:${verdict.c}`} class="pt" />
  </svg>

  <div class="verdict" style={`--vc:${verdict.c}`}>
    <p class="vt">{verdict.t} — pH = {ph.toFixed(2)}</p>
    <p class="vd">{verdict.d}</p>
  </div>

  <div class="sliders">
    <label><span>Bicarbonates HCO₃⁻</span><b>{hco3} mmol/L</b><input type="range" min="6" max="45" step="1" bind:value={hco3} /></label>
    <label><span>PCO₂</span><b>{pco2} mmHg</b><input type="range" min="15" max="80" step="1" bind:value={pco2} /></label>
  </div>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); }
  svg { width: 100%; height: auto; }
  .normal { fill: color-mix(in srgb, var(--accent-pd) 25%, transparent); }
  .axis { stroke: var(--border-strong); stroke-width: 1.5; }
  .tick { stroke: var(--border-strong); stroke-width: 1; }
  .tlbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }
  .side { font-family: var(--font-mono); font-size: 10px; }
  .side.acid { fill: #b23b4a; text-anchor: start; }
  .side.alc { fill: #9c5a2b; text-anchor: end; }
  .pt { stroke: var(--bg-tertiary); stroke-width: 2; }
  .verdict { border: 1px solid var(--border-subtle); border-left: 3px solid var(--vc); border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: var(--bg-primary); }
  .vt { margin: 0 0 4px; font-family: var(--font-mono); font-weight: 700; color: var(--vc); }
  .vd { margin: 0; color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.5; }
  .sliders { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
  .sliders label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sliders span { color: var(--text-secondary); }
  .sliders b { color: var(--accent-pk); }
  .sliders input { grid-column: 1 / -1; }
</style>
