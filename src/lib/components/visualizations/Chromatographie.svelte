<script>
  // @ts-nocheck
  // Séparation chromatographique : 3 pics gaussiens sur un chromatogramme.
  // On règle la rétention du pic 2 (k') et l'efficacité de la colonne (N plateaux)
  // pour voir la résolution Rs franchir — ou non — le seuil de 1,5.
  let kp2 = 2.5;   // facteur de rétention k' du soluté 2
  let N = 2500;    // nombre de plateaux théoriques

  const t0 = 1.0;        // temps mort (min)
  const kp1 = 2.0;       // k' du soluté 1 (fixe, référence)
  const L = 150;         // longueur de colonne (mm) — pour la HEPT
  const SQ2PI = Math.sqrt(2 * Math.PI);

  $: kp3 = kp2 + 3.0;    // soluté 3, plus retenu

  // temps de rétention : tR = t0 (1 + k')
  $: tR1 = t0 * (1 + kp1);
  $: tR2 = t0 * (1 + kp2);
  $: tR3 = t0 * (1 + kp3);

  // efficacité : N = 16 (tR/w)² avec w = 4σ  →  σ = tR / √N
  $: sg1 = tR1 / Math.sqrt(N);
  $: sg2 = tR2 / Math.sqrt(N);
  $: sg3 = tR3 / Math.sqrt(N);

  // résolution : Rs = 2 (tR_b − tR_a) / (w_a + w_b), w = 4σ
  $: rs12 = (2 * (tR2 - tR1)) / (4 * sg1 + 4 * sg2);
  $: rs23 = (2 * (tR3 - tR2)) / (4 * sg2 + 4 * sg3);
  $: alpha = kp2 / kp1;                 // sélectivité α = k'2 / k'1
  $: hept = (L * 1000) / N;             // HEPT en µm : H = L / N
  $: critique = Math.min(rs12, rs23);   // paire critique

  // aires égales (même quantité injectée) → h = A / (σ√2π) : N ↑ ⇒ pics fins ET hauts
  $: peaks = [
    { tR: tR1, sg: sg1, h: 1 / (sg1 * SQ2PI), cls: 'p1', lbl: 'A' },
    { tR: tR2, sg: sg2, h: 1 / (sg2 * SQ2PI), cls: 'p2', lbl: 'B' },
    { tR: tR3, sg: sg3, h: 1 / (sg3 * SQ2PI), cls: 'p3', lbl: 'C' }
  ];

  const W = 460, H = 250, m = { top: 16, right: 14, bottom: 36, left: 40 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;

  $: tMax = Math.max(tR3 + 5 * sg3, tR3 * 1.12);
  $: yMax = Math.max(...peaks.map((p) => p.h)) * 1.15;
  $: xOf = (t) => (t / tMax) * iW;
  $: yOf = (y) => iH - (y / yMax) * iH;

  const gauss = (t, p) => p.h * Math.exp(-((t - p.tR) ** 2) / (2 * p.sg * p.sg));
  const NPTS = 240;

  // aire sous chaque pic (remplissage léger)
  $: areas = peaks.map((p) => {
    const pts = [];
    for (let i = 0; i <= NPTS; i++) {
      const t = (i / NPTS) * tMax;
      pts.push(`${xOf(t).toFixed(1)},${yOf(gauss(t, p)).toFixed(1)}`);
    }
    return { cls: p.cls, d: `M0,${iH.toFixed(1)} L${pts.join(' L')} L${iW.toFixed(1)},${iH.toFixed(1)} Z` };
  });

  // signal réellement vu par le détecteur = somme des 3 gaussiennes
  $: signal = Array.from({ length: NPTS + 1 }, (_, i) => {
    const t = (i / NPTS) * tMax;
    const y = peaks.reduce((s, p) => s + gauss(t, p), 0);
    return `${i ? 'L' : 'M'}${xOf(t).toFixed(1)},${yOf(y).toFixed(1)}`;
  }).join(' ');

  $: ticks = Array.from({ length: 6 }, (_, i) => (i / 5) * tMax);
</script>

<div class="viz">
  <div class="readout">
    <span class="pill" class:bad={rs12 < 1.5}>Rs(A/B) = {rs12.toFixed(2)}</span>
    <span class="pill" class:bad={rs23 < 1.5}>Rs(B/C) = {rs23.toFixed(2)}</span>
    <span class="pill alt">α = {alpha.toFixed(2)}</span>
    <span class="pill alt">HEPT = {hept.toFixed(0)} µm</span>
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Chromatogramme de trois solutés et résolution entre les pics">
    <g transform={`translate(${m.left},${m.top})`}>
      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />

      {#each ticks as t}
        <line x1={xOf(t)} x2={xOf(t)} y1={iH} y2={iH + 4} class="axis" />
        <text x={xOf(t)} y={iH + 15} class="tick">{t.toFixed(1)}</text>
      {/each}

      <line x1={xOf(t0)} x2={xOf(t0)} y1="0" y2={iH} class="t0" />
      <text x={xOf(t0) + 3} y="10" class="t0lbl">t₀</text>

      {#each areas as a}<path d={a.d} class={`area ${a.cls}`} />{/each}
      <path d={signal} class="signal" />

      {#each peaks as p}
        <line x1={xOf(p.tR)} x2={xOf(p.tR)} y1={yOf(p.h)} y2={iH} class={`stem ${p.cls}`} />
        <text x={xOf(p.tR)} y={yOf(p.h) - 5} class={`plbl ${p.cls}`}>{p.lbl}</text>
      {/each}

      <text x={iW / 2} y={iH + 30} class="axlbl">Temps de rétention (min)</text>
      <text transform={`translate(-28,${iH / 2}) rotate(-90)`} class="axlbl">Signal</text>
    </g>
  </svg>

  {#if critique < 1.0}
    <p class="verdict bad">Rs &lt; 1 : les pics se <strong>chevauchent</strong> — intégration faussée, quantification impossible.</p>
  {:else if critique < 1.5}
    <p class="verdict bad">1 ≤ Rs &lt; 1,5 : séparation <strong>incomplète</strong> (les pics ne reviennent pas à la ligne de base).</p>
  {:else}
    <p class="verdict ok">Rs ≥ 1,5 : séparation <strong>à la ligne de base</strong> — critère retenu pour une quantification fiable.</p>
  {/if}

  <p class="eq">Rs = (√N / 4) · ((α − 1) / α) · (k′ / (1 + k′)) — trois leviers : <strong>efficacité</strong> (N), <strong>sélectivité</strong> (α), <strong>rétention</strong> (k′).</p>

  <div class="sliders">
    <label><span>k′ du soluté B</span><b>{kp2.toFixed(2)}</b><input type="range" min="2.1" max="8" step="0.05" bind:value={kp2} /></label>
    <label><span>Plateaux N</span><b>{N}</b><input type="range" min="400" max="20000" step="100" bind:value={N} /></label>
  </div>

  <p class="hint">Augmentez <strong>N</strong> : les pics s'affinent (σ = tR/√N) et Rs grimpe — mais Rs ne croît qu'en √N. Jouez sur <strong>k′</strong> (donc α) : c'est le levier le plus rentable.</p>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); }
  .readout { display: flex; flex-wrap: wrap; gap: var(--space-2); }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.alt { background: var(--bg-primary); color: var(--text-secondary); border: 1px solid var(--border-subtle); font-weight: 400; }
  .pill.bad { background: color-mix(in srgb, #c0392b 14%, var(--bg-primary)); color: #c0392b; }
  svg { width: 100%; height: auto; display: block; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .t0 { stroke: var(--border-subtle); stroke-width: 1; stroke-dasharray: 3 3; }
  .t0lbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; }
  .signal { fill: none; stroke: var(--text-secondary); stroke-width: 2.2; }
  .area { stroke: none; }
  .area.p1 { fill: color-mix(in srgb, var(--accent-pk) 26%, transparent); }
  .area.p2 { fill: color-mix(in srgb, var(--accent-pd) 26%, transparent); }
  .area.p3 { fill: color-mix(in srgb, var(--accent-ai) 26%, transparent); }
  .stem { stroke-width: 1; stroke-dasharray: 2 3; }
  .stem.p1 { stroke: var(--accent-pk); }
  .stem.p2 { stroke: var(--accent-pd); }
  .stem.p3 { stroke: var(--accent-ai); }
  .plbl { font-family: var(--font-mono); font-size: 10px; font-weight: 700; text-anchor: middle; }
  .plbl.p1 { fill: var(--accent-pk); }
  .plbl.p2 { fill: var(--accent-pd); }
  .plbl.p3 { fill: var(--accent-ai); }
  .tick { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .verdict { margin: 0; font-size: var(--text-sm); line-height: 1.5; padding: var(--space-2) var(--space-3); border-radius: var(--radius, 8px); border-left: 3px solid; background: var(--bg-primary); }
  .verdict.ok { border-color: var(--accent-pk); color: var(--text-secondary); }
  .verdict.bad { border-color: #c0392b; color: #c0392b; }
  .eq { margin: 0; font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); line-height: 1.6; }
  .eq strong { color: var(--text-secondary); }
  .sliders { display: grid; grid-template-columns: 1fr 1fr; gap: 6px var(--space-4); }
  .sliders label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sliders span { color: var(--text-secondary); }
  .sliders b { color: var(--accent-pk); font-weight: 700; }
  .sliders input { grid-column: 1 / -1; width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: 0; line-height: 1.6; }
</style>
