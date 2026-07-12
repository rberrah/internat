<script>
  // @ts-nocheck
  // Courbe de dissociation de l'hémoglobine (sigmoïde de Hill, n ≈ 2,7).
  // Effet Bohr : acidose, hypercapnie, fièvre et 2,3-DPG ↑ déplacent la courbe à DROITE
  // (P50 ↑, affinité ↓, O2 mieux libéré aux tissus) ; l'inverse la déplace à GAUCHE.

  let ph = 7.4;    // pH artériel
  let paco2 = 40;  // PaCO2 (mmHg)
  let temp = 37;   // température (°C)
  let dpg = 5;     // 2,3-DPG (mmol/L d'érythrocytes), normale ≈ 5

  const P50_0 = 26.8; // P50 de référence (pH 7,40 · PaCO2 40 · 37 °C · 2,3-DPG 5)
  const nHill = 2.7;

  // Décalage de la P50 (formulation type Severinghaus, en log10)
  $: dLog =
    0.024 * (temp - 37) -
    0.40 * (ph - 7.4) +
    0.06 * (Math.log10(paco2) - Math.log10(40)) +
    0.028 * (dpg - 5);
  $: p50 = P50_0 * Math.pow(10, dLog);

  const sat = (/** @type {number} */ po2, /** @type {number} */ p50v) => {
    if (po2 <= 0) return 0;
    const a = Math.pow(po2, nHill);
    const b = Math.pow(p50v, nHill);
    return (100 * a) / (a + b);
  };

  // repères physiologiques
  $: saArt = sat(100, p50);        // sang artériel, PaO2 ≈ 100 mmHg
  $: saVein = sat(40, p50);        // sang veineux mêlé, PvO2 ≈ 40 mmHg
  $: extraction = saArt - saVein;  // O2 cédé aux tissus (points de saturation)
  $: extraNorm = sat(100, P50_0) - sat(40, P50_0); // ≈ 22 points en conditions normales
  $: sens = p50 > P50_0 + 0.6 ? 'droite' : p50 < P50_0 - 0.6 ? 'gauche' : 'neutre';
  $: marque = p50 > 31 || p50 < 22; // déplacement franc

  // ── graphe ──
  const W = 480, H = 280, m = { top: 14, right: 16, bottom: 38, left: 46 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  const PMAX = 120;
  $: xOf = (/** @type {number} */ p) => (p / PMAX) * iW;
  $: yOf = (/** @type {number} */ s) => iH - (s / 100) * iH;

  const path = (p50v, xf, yf) =>
    Array.from({ length: 121 }, (_, i) => {
      const p = (i / 120) * PMAX;
      const s = p <= 0 ? 0 : (100 * Math.pow(p, 2.7)) / (Math.pow(p, 2.7) + Math.pow(p50v, 2.7));
      return `${i ? 'L' : 'M'}${xf(p).toFixed(1)},${yf(s).toFixed(1)}`;
    }).join(' ');

  $: refCurve = path(P50_0, xOf, yOf);
  $: curCurve = path(p50, xOf, yOf);

  const presets = [
    { l: 'Normal', ph: 7.4, co2: 40, t: 37, d: 5 },
    { l: 'Acidose + fièvre (sepsis, effort)', ph: 7.22, co2: 55, t: 39.5, d: 5.5 },
    { l: 'Alcalose + hypothermie', ph: 7.55, co2: 25, t: 33, d: 5 },
    { l: 'Hypoxie chronique (2,3-DPG ↑)', ph: 7.42, co2: 38, t: 37, d: 7.5 },
    { l: 'Sang conservé (2,3-DPG ↓)', ph: 7.4, co2: 40, t: 37, d: 2.5 }
  ];
  function apply(p) {
    ph = p.ph; paco2 = p.co2; temp = p.t; dpg = p.d;
  }
</script>

<div class="viz">
  <div class="presets">
    {#each presets as p}
      <button on:click={() => apply(p)}>{p.l}</button>
    {/each}
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Courbe de dissociation de l'hémoglobine et déplacement par l'effet Bohr">
    <g transform={`translate(${m.left},${m.top})`}>
      <!-- grille -->
      {#each [20, 40, 60, 80, 100, 120] as p}
        <line x1={xOf(p)} x2={xOf(p)} y1="0" y2={iH} class="grid" />
        <text x={xOf(p)} y={iH + 14} class="tick">{p}</text>
      {/each}
      {#each [0, 25, 50, 75, 100] as s}
        <line x1="0" x2={iW} y1={yOf(s)} y2={yOf(s)} class="grid" />
        <text x="-6" y={yOf(s) + 3} class="tick ty">{s}</text>
      {/each}

      <!-- repère 60 / 90 -->
      <line x1={xOf(60)} x2={xOf(60)} y1={yOf(90)} y2={iH} class="ref60" />
      <line x1="0" x2={xOf(60)} y1={yOf(90)} y2={yOf(90)} class="ref60" />
      <text x={xOf(60) + 4} y={yOf(90) - 5} class="ref60t">PaO₂ 60 → SaO₂ 90 %</text>

      <!-- courbes -->
      <path d={refCurve} class="cref" />
      <path d={curCurve} class="ccur" class:shift={marque} />

      <!-- P50 -->
      <line x1={xOf(p50)} x2={xOf(p50)} y1={yOf(50)} y2={iH} class="p50l" class:shift={marque} />
      <line x1="0" x2={xOf(p50)} y1={yOf(50)} y2={yOf(50)} class="p50l" class:shift={marque} />
      <circle cx={xOf(p50)} cy={yOf(50)} r="4.5" class="p50p" class:shift={marque} />
      <text x={xOf(p50)} y={iH - 6} class="p50t" class:shift={marque}>P50</text>

      <!-- points veineux / artériel -->
      <circle cx={xOf(40)} cy={yOf(saVein)} r="4" class="pt vein" />
      <circle cx={xOf(100)} cy={yOf(saArt)} r="4" class="pt art" />
      <line x1={xOf(40)} x2={xOf(100)} y1={yOf(saVein)} y2={yOf(saVein)} class="deliv" />
      <line x1={xOf(100)} x2={xOf(100)} y1={yOf(saVein)} y2={yOf(saArt)} class="deliv" />
      <text x={xOf(100) - 4} y={yOf((saArt + saVein) / 2)} class="delivt">O₂ cédé</text>

      <!-- axes -->
      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />
      <text x={iW / 2} y={iH + 30} class="axlbl">PaO₂ (mmHg)</text>
      <text transform={`translate(-34,${iH / 2}) rotate(-90)`} class="axlbl">SaO₂ (%)</text>
    </g>
  </svg>

  <div class="stats">
    <span class="pill" class:bad={marque}>P50 = {p50.toFixed(1)} mmHg</span>
    <span class="pill alt">normale 26–27 mmHg</span>
    <span class="pill" class:bad={marque}>
      {#if sens === 'droite'}Déplacement à DROITE — affinité ↓, O₂ mieux libéré{:else if sens === 'gauche'}Déplacement à GAUCHE — affinité ↑, O₂ retenu{:else}Courbe en position normale{/if}
    </span>
    <span class="pill alt">SaO₂ artérielle (PaO₂ 100) = {saArt.toFixed(1)} %</span>
    <span class="pill alt">SvO₂ (PvO₂ 40) = {saVein.toFixed(1)} %</span>
    <span class="pill">O₂ cédé aux tissus = {extraction.toFixed(1)} pts <em>(vs {extraNorm.toFixed(1)} normal)</em></span>
  </div>

  <div class="controls">
    <label>pH <span class:bad={ph < 7.35 || ph > 7.45}>{ph.toFixed(2)}</span>
      <input type="range" min="7" max="7.6" step="0.01" bind:value={ph} /></label>
    <label>PaCO₂ (mmHg) <span class:bad={paco2 < 35 || paco2 > 45}>{paco2}</span>
      <input type="range" min="20" max="80" step="1" bind:value={paco2} /></label>
    <label>Température (°C) <span class:bad={temp < 36 || temp > 38}>{temp.toFixed(1)}</span>
      <input type="range" min="32" max="42" step="0.5" bind:value={temp} /></label>
    <label>2,3-DPG (mmol/L) <span class:bad={dpg < 4 || dpg > 6}>{dpg.toFixed(1)}</span>
      <input type="range" min="2" max="9" step="0.1" bind:value={dpg} /></label>
  </div>

  <p class="hint">
    Poussez le pH vers l'acidose, montez la PaCO₂, la température ou le 2,3-DPG : la courbe glisse à
    <strong>droite</strong>, la P50 monte, l'hémoglobine « lâche » plus facilement son O₂ aux tissus (effet Bohr) —
    la saturation artérielle bouge peu (plateau), mais la <strong>quantité d'O₂ cédée augmente</strong>. À l'inverse
    (alcalose, hypothermie, 2,3-DPG effondré du sang conservé), la courbe part à gauche : l'O₂ est capté mais mal
    délivré. Repère à connaître : <strong>PaO₂ 60 mmHg ↔ SaO₂ 90 %</strong>, au genou de la courbe.
  </p>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); }
  .presets { display: flex; flex-wrap: wrap; gap: var(--space-2); }
  .presets button { font-size: var(--text-xs); font-family: var(--font-mono); padding: 4px 10px; border: 1px solid var(--border-strong); background: var(--bg-primary); color: var(--text-secondary); border-radius: 999px; cursor: pointer; }
  .presets button:hover { border-color: var(--accent-pk); color: var(--accent-pk); }

  svg { width: 100%; height: auto; display: block; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .grid { stroke: var(--border-subtle); stroke-width: 0.6; }
  .tick { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }
  .ty { text-anchor: end; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }

  .cref { fill: none; stroke: var(--border-strong); stroke-width: 1.4; stroke-dasharray: 5 4; }
  .ccur { fill: none; stroke: var(--accent-pk); stroke-width: 2.6; }
  .ccur.shift { stroke: #c0392b; }

  .p50l { stroke: var(--accent-pk); stroke-width: 1; stroke-dasharray: 3 3; opacity: 0.8; }
  .p50l.shift { stroke: #c0392b; }
  .p50p { fill: var(--accent-pk); }
  .p50p.shift { fill: #c0392b; }
  .p50t { fill: var(--accent-pk); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; font-weight: 700; }
  .p50t.shift { fill: #c0392b; }

  .ref60 { stroke: var(--accent-ai); stroke-width: 1; stroke-dasharray: 2 3; opacity: 0.7; }
  .ref60t { fill: var(--accent-ai); font-family: var(--font-mono); font-size: 9px; }

  .pt { stroke: var(--bg-tertiary); stroke-width: 1.6; }
  .art { fill: var(--accent-ai); }
  .vein { fill: var(--accent-pd); }
  .deliv { stroke: var(--accent-pd); stroke-width: 1.2; stroke-dasharray: 4 2; }
  .delivt { fill: var(--accent-pd); font-family: var(--font-mono); font-size: 9px; text-anchor: end; }

  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill em { font-style: normal; font-weight: 400; opacity: 0.75; }
  .pill.alt { background: var(--bg-secondary); color: var(--text-secondary); font-weight: 400; }
  .pill.bad { background: color-mix(in srgb, #c0392b 15%, var(--bg-primary)); color: #c0392b; }

  .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--space-2) var(--space-4); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  label span.bad { color: #c0392b; }
  input[type='range'] { width: 100%; accent-color: var(--accent-pk); }

  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: 0; line-height: 1.6; }
  .hint strong { color: var(--text-secondary); }
</style>
