<script>
  // Décroissance exponentielle : la même loi en radioactivité, en cinétique
  // chimique d'ordre 1 et en pharmacocinétique. N(t) = N0·e^(−λt), t½ = ln2/λ.
  let thalf = 4; // demi-vie / période (unités arbitraires)
  let ctx = 'pk'; // 'radio' | 'chimie' | 'pk'

  /** @type {Record<string, {label:string, y:string, t:string, unit:string}>} */
  const contexts = {
    radio: { label: 'Radioactivité', y: "Nombre de noyaux N", t: 'Période T', unit: '' },
    chimie: { label: 'Cinétique ordre 1', y: "Concentration [A]", t: 'Temps de demi-réaction', unit: '' },
    pk: { label: 'Pharmacocinétique', y: "Concentration C", t: 'Demi-vie t½', unit: '' }
  };

  const N0 = 100, W = 460, H = 250, m = { top: 14, right: 14, bottom: 34, left: 44 };
  $: iH = H - m.top - m.bottom;
  $: iW = W - m.left - m.right;
  $: lambda = 0.693 / thalf;
  $: Tmax = thalf * 5.2;
  $: xOf = (/** @type {number} */ t) => (t / Tmax) * iW;
  $: yOf = (/** @type {number} */ n) => iH - (n / (N0 * 1.05)) * iH;
  $: curve = Array.from({ length: 121 }, (_, i) => {
    const t = (i / 120) * Tmax;
    return `${i ? 'L' : 'M'}${xOf(t).toFixed(1)},${yOf(N0 * Math.exp(-lambda * t)).toFixed(1)}`;
  }).join(' ');
  // repères aux demi-vies successives : N0/2, N0/4, N0/8...
  $: marks = [1, 2, 3, 4].map((k) => ({ t: k * thalf, n: N0 / 2 ** k, k }));
</script>

<div class="viz">
  <div class="ctx">
    {#each Object.entries(contexts) as [id, c]}
      <button class:on={ctx === id} on:click={() => (ctx = id)}>{c.label}</button>
    {/each}
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Décroissance exponentielle et demi-vies">
    <g transform={`translate(${m.left},${m.top})`}>
      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />
      <path d={curve} class="curve" />
      {#each marks as mk}
        <line x1={xOf(mk.t)} x2={xOf(mk.t)} y1={iH} y2={yOf(mk.n)} class="mk" />
        <line x1="0" x2={xOf(mk.t)} y1={yOf(mk.n)} y2={yOf(mk.n)} class="mk" />
        <circle cx={xOf(mk.t)} cy={yOf(mk.n)} r="3" class="dot" />
        <text x={xOf(mk.t)} y={iH + 12} class="tick">{mk.k}·t½</text>
      {/each}
      <text x={xOf(marks[0].t) + 4} y={yOf(50) - 4} class="half">50 %</text>
      <text transform={`translate(-32,${iH / 2}) rotate(-90)`} class="axlbl">{contexts[ctx].y}</text>
    </g>
  </svg>

  <p class="note">
    Même loi partout : chaque <strong>{contexts[ctx].t}</strong> divise la quantité par 2.
    Après ~5 demi-vies, il reste ~3 % (≈ « éteint », ou plateau atteint en administration répétée).
  </p>

  <div class="sliders">
    <label><span>Demi-vie t½</span><b>{thalf}</b><input type="range" min="1" max="10" step="0.5" bind:value={thalf} /></label>
  </div>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); }
  .ctx { display: flex; flex-wrap: wrap; gap: var(--space-2); }
  .ctx button { font-family: var(--font-mono); font-size: var(--text-xs); padding: 5px 10px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 999px; cursor: pointer; color: var(--text-secondary); }
  .ctx button.on { background: var(--accent-pk); color: #fff; border-color: var(--accent-pk); }
  svg { width: 100%; height: auto; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .curve { fill: none; stroke: var(--accent-pk); stroke-width: 2.5; }
  .mk { stroke: var(--border-strong); stroke-width: 1; stroke-dasharray: 3 3; }
  .dot { fill: var(--accent-ai); }
  .tick { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }
  .half { fill: var(--accent-ai); font-family: var(--font-mono); font-size: 10px; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .note { margin: 0; font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.5; }
  .sliders label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sliders span { color: var(--text-secondary); }
  .sliders b { color: var(--accent-pk); }
  .sliders input { grid-column: 1 / -1; }
</style>
