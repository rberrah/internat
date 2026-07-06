<script>
  // Démarche diagnostique d'une anémie : VGM (micro/normo/macrocytaire) croisé
  // avec la réticulocytose (régénérative vs arégénérative).
  let vgm = 72;    // volume globulaire moyen (fL)
  let retic = 45;  // réticulocytes (G/L)

  $: micro = vgm < 80;
  $: macro = vgm > 100;
  $: regen = retic >= 120; // seuil de régénération (programme internat)

  $: categorie = micro ? 'Microcytaire' : macro ? 'Macrocytaire' : 'Normocytaire';
  $: regenLabel = regen ? 'régénérative' : 'arégénérative';

  $: causes = (() => {
    if (micro) return ['Carence martiale (ferritine ↓) — la + fréquente', 'Anémie inflammatoire (ferritine N/↑, CRP ↑)', 'Thalassémie · anémie sidéroblastique'];
    if (macro)
      return regen
        ? ['Hémolyse ou hémorragie (réticulocytose)', '(macrocytose « de régénération »)']
        : ['Carence B12 / folates (mégaloblastose)', 'Myélodysplasie', 'Alcool, hypothyroïdie, antifoliques'];
    // normocytaire
    return regen
      ? ['Hémorragie aiguë', 'Hémolyse (bili. libre ↑, haptoglobine ↓)']
      : ['Insuffisance rénale (défaut d’EPO)', 'Inflammation chronique', 'Envahissement / aplasie médullaire', 'Chimiothérapie'];
  })();

  const W = 440, H = 250, m = { top: 12, right: 14, bottom: 32, left: 44 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  const VMIN = 60, VMAX = 120, RMAX = 300;
  $: xOf = (/** @type {number} */ v) => ((v - VMIN) / (VMAX - VMIN)) * iW;
  $: yOf = (/** @type {number} */ r) => iH - (Math.min(r, RMAX) / RMAX) * iH;
</script>

<div class="viz">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Classification d'une anémie selon VGM et réticulocytes">
    <g transform={`translate(${m.left},${m.top})`}>
      <!-- bandes VGM -->
      <rect x="0" y="0" width={xOf(80)} height={iH} class="zone micro" />
      <rect x={xOf(80)} y="0" width={xOf(100) - xOf(80)} height={iH} class="zone normo" />
      <rect x={xOf(100)} y="0" width={iW - xOf(100)} height={iH} class="zone macro" />
      <text x={xOf(70)} y="14" class="zlbl">Micro</text>
      <text x={(xOf(80) + xOf(100)) / 2} y="14" class="zlbl">Normo</text>
      <text x={(xOf(100) + iW) / 2} y="14" class="zlbl">Macro</text>

      <!-- seuil régénération -->
      <line x1="0" x2={iW} y1={yOf(120)} y2={yOf(120)} class="thr" />
      <text x="2" y={yOf(120) - 4} class="thrlbl">120 G/L — seuil de régénération</text>

      <!-- axes -->
      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />
      <text x={iW / 2} y={iH + 26} class="axlbl">VGM (fL)</text>
      <text transform={`translate(-34,${iH / 2}) rotate(-90)`} class="axlbl">Réticulocytes (G/L)</text>

      <!-- patient -->
      <circle cx={xOf(vgm)} cy={yOf(retic)} r="7" class="pt" />
    </g>
  </svg>

  <div class="verdict">
    <p class="cat"><strong>{categorie}</strong> · {regenLabel}</p>
    <ul>{#each causes as c}<li>{c}</li>{/each}</ul>
  </div>

  <div class="sliders">
    <label><span>VGM</span><b>{vgm} fL</b><input type="range" min="60" max="120" step="1" bind:value={vgm} /></label>
    <label><span>Réticulocytes</span><b>{retic} G/L</b><input type="range" min="5" max="300" step="5" bind:value={retic} /></label>
  </div>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); }
  svg { width: 100%; height: auto; }
  .zone { opacity: 0.5; }
  .micro { fill: color-mix(in srgb, #b23b4a 12%, var(--bg-tertiary)); }
  .normo { fill: color-mix(in srgb, var(--accent-pk) 10%, var(--bg-tertiary)); }
  .macro { fill: color-mix(in srgb, var(--accent-ai) 12%, var(--bg-tertiary)); }
  .zlbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .thr { stroke: var(--accent-pd); stroke-width: 1.4; stroke-dasharray: 5 3; }
  .thrlbl { fill: var(--accent-pd); font-family: var(--font-mono); font-size: 9px; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .pt { fill: var(--accent-pk); stroke: var(--bg-tertiary); stroke-width: 2; }
  .verdict { border: 1px solid var(--border-subtle); border-left: 3px solid var(--accent-pk); border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: var(--bg-primary); }
  .cat { margin: 0 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-sm); }
  .cat strong { color: var(--accent-pk); }
  .verdict ul { margin: 0; padding-left: 1.1em; color: var(--text-secondary); font-size: var(--text-sm); }
  .verdict li { margin-bottom: 2px; }
  .sliders { display: grid; gap: 6px; grid-template-columns: 1fr 1fr; }
  .sliders label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sliders span { color: var(--text-secondary); }
  .sliders b { color: var(--accent-pk); }
  .sliders input { grid-column: 1 / -1; }
</style>
