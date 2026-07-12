<script>
  // @ts-nocheck
  // Loi de Beer-Lambert : A = ε · l · c. Droite d'étalonnage théorique (pointillés)
  // et courbe réellement mesurée, qui s'incurve puis sature aux fortes absorbances
  // (lumière parasite du spectrophotomètre) → sous-estimation de la concentration.
  let eps = 6220;  // coefficient d'extinction molaire (L·mol⁻¹·cm⁻¹) — défaut : NADH à 340 nm
  let l = 1;       // trajet optique (cm) — cuve standard
  let c = 100;     // concentration de l'échantillon (µmol/L)

  const STRAY = 5e-3;          // fraction de lumière parasite (0,5 %) → plafond d'absorbance
  const A_MAX_INSTR = -Math.log10(STRAY); // ≈ 2,30 : au-delà, le spectro ne « voit » plus rien
  const A_LIN = 1.0;           // limite haute de la zone de mesure fiable
  const A_ALERTE = 1.5;        // au-delà : déviation nette, il faut diluer

  // absorbance théorique (loi stricte) : c en µmol/L → mol/L
  const aTheo = (cc, e, ll) => e * ll * cc * 1e-6;
  // absorbance mesurée : I/I0 réel = 10^(−A) + lumière parasite
  const aMes = (cc, e, ll) => -Math.log10(Math.pow(10, -aTheo(cc, e, ll)) + STRAY);

  $: at = aTheo(c, eps, l);
  $: am = aMes(c, eps, l);
  // concentration relue sur la droite d'étalonnage (c = A / (ε·l)) à partir de l'absorbance MESURÉE
  $: cLue = (am / (eps * l)) * 1e6;
  $: erreur = c > 0 ? ((cLue - c) / c) * 100 : 0;
  $: horsGamme = am > A_ALERTE;
  // concentration au-delà de laquelle A dépasse 1 (fin de la zone de mesure confortable)
  $: cLin = (A_LIN / (eps * l)) * 1e6;

  const W = 460, H = 250, m = { top: 14, right: 16, bottom: 36, left: 42 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  const CMAX = 300;  // µmol/L
  const AMAX = 3.0;
  $: xOf = (cc) => (cc / CMAX) * iW;
  $: yOf = (a) => iH - (Math.max(0, Math.min(a, AMAX)) / AMAX) * iH;

  // droite théorique, tronquée au bord du cadre
  $: cAt3 = (AMAX / (eps * l)) * 1e6;
  $: cEnd = Math.min(CMAX, cAt3);
  $: droite = `M${xOf(0)},${yOf(0)} L${xOf(cEnd).toFixed(1)},${yOf(aTheo(cEnd, eps, l)).toFixed(1)}`;

  // courbe mesurée
  $: courbe = Array.from({ length: 121 }, (_, i) => {
    const cc = (i / 120) * CMAX;
    return `${i ? 'L' : 'M'}${xOf(cc).toFixed(1)},${yOf(aMes(cc, eps, l)).toFixed(1)}`;
  }).join(' ');

  $: xTicks = [0, 60, 120, 180, 240, 300];
  const yTicks = [0, 0.5, 1, 1.5, 2, 2.5, 3];
</script>

<div class="viz">
  <div class="readout">
    <span class="pill">A mesurée = {am.toFixed(3)}</span>
    <span class="pill alt">A théorique = {at.toFixed(3)}</span>
    <span class="pill" class:bad={Math.abs(erreur) > 5}>c lue = {cLue.toFixed(1)} µmol/L</span>
    <span class="pill" class:bad={Math.abs(erreur) > 5}>erreur = {erreur.toFixed(1)} %</span>
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Droite d'étalonnage de Beer-Lambert et déviation aux fortes absorbances">
    <g transform={`translate(${m.left},${m.top})`}>
      <!-- zone de linéarité utile : A ≤ 1 -->
      <rect x="0" y={yOf(A_LIN)} width={iW} height={iH - yOf(A_LIN)} class="zone" />
      <text x="6" y={yOf(A_LIN) - 5} class="zonelbl">zone de mesure fiable · A ≤ 1</text>

      <line x1="0" x2={iW} y1={yOf(A_ALERTE)} y2={yOf(A_ALERTE)} class="alerte" />
      <text x={iW - 2} y={yOf(A_ALERTE) - 4} class="alertelbl">A = 1,5 · déviation</text>

      <line x1="0" x2={iW} y1={yOf(A_MAX_INSTR)} y2={yOf(A_MAX_INSTR)} class="plafond" />
      <text x={iW - 2} y={yOf(A_MAX_INSTR) - 4} class="plafondlbl">plafond instrumental ≈ {A_MAX_INSTR.toFixed(2)}</text>

      {#each yTicks as a}
        <text x="-6" y={yOf(a) + 3} class="tick end">{a.toFixed(1)}</text>
      {/each}
      {#each xTicks as cc}
        <line x1={xOf(cc)} x2={xOf(cc)} y1={iH} y2={iH + 4} class="axis" />
        <text x={xOf(cc)} y={iH + 15} class="tick">{cc}</text>
      {/each}

      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />

      <path d={droite} class="droite" />
      <path d={courbe} class="courbe" />

      <!-- échantillon : point théorique (creux) vs point mesuré (plein) -->
      <line x1={xOf(c)} x2={xOf(c)} y1={yOf(am)} y2={iH} class="guide" />
      <line x1="0" x2={xOf(c)} y1={yOf(am)} y2={yOf(am)} class="guide" />
      <circle cx={xOf(c)} cy={yOf(at)} r="4.5" class="ptheo" />
      <circle cx={xOf(c)} cy={yOf(am)} r="5.5" class="pmes" class:bad={horsGamme} />

      <text x={iW / 2} y={iH + 30} class="axlbl">Concentration (µmol/L)</text>
      <text transform={`translate(-32,${iH / 2}) rotate(-90)`} class="axlbl">Absorbance A</text>
    </g>
  </svg>

  {#if horsGamme}
    <p class="verdict bad">
      A = {am.toFixed(2)} &gt; 1,5 : hors du domaine de linéarité. La droite d'étalonnage
      <strong>sous-estime la concentration de {Math.abs(erreur).toFixed(0)} %</strong> → il faut <strong>diluer l'échantillon</strong> et refaire la lecture.
    </p>
  {:else}
    <p class="verdict ok">
      Lecture dans le domaine linéaire : A ∝ c, l'étalonnage est valide
      (écart {Math.abs(erreur).toFixed(1)} %). Limite de linéarité ici : c ≈ {cLin < CMAX ? cLin.toFixed(0) + ' µmol/L' : '> 300 µmol/L'} pour A = 1.
    </p>
  {/if}

  <div class="sliders">
    <label><span>ε (L·mol⁻¹·cm⁻¹)</span><b>{eps}</b><input type="range" min="500" max="12000" step="100" bind:value={eps} /></label>
    <label><span>Trajet optique l</span><b>{l.toFixed(1)} cm</b><input type="range" min="0.2" max="2" step="0.1" bind:value={l} /></label>
    <label><span>Concentration c</span><b>{c} µmol/L</b><input type="range" min="0" max="300" step="2" bind:value={c} /></label>
  </div>

  <p class="hint">La pente de la droite vaut <strong>ε·l</strong> : augmentez ε ou l et la même concentration donne une absorbance plus forte. Poussez c jusqu'à sortir de la zone bleutée : la courbe réelle décroche de la droite — c'est là qu'on dilue au lieu de « faire confiance » à la lecture.</p>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); }
  .readout { display: flex; flex-wrap: wrap; gap: var(--space-2); }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.alt { background: var(--bg-primary); color: var(--text-secondary); border: 1px solid var(--border-subtle); font-weight: 400; }
  .pill.bad { background: color-mix(in srgb, #c0392b 14%, var(--bg-primary)); color: #c0392b; }
  svg { width: 100%; height: auto; display: block; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .zone { fill: color-mix(in srgb, var(--accent-ai) 10%, transparent); }
  .zonelbl { fill: var(--accent-ai); font-family: var(--font-mono); font-size: 9px; }
  .alerte { stroke: #c0392b; stroke-width: 1.2; stroke-dasharray: 5 3; }
  .alertelbl { fill: #c0392b; font-family: var(--font-mono); font-size: 9px; text-anchor: end; }
  .plafond { stroke: var(--border-strong); stroke-width: 1; stroke-dasharray: 2 4; }
  .plafondlbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: end; }
  .droite { fill: none; stroke: var(--accent-ai); stroke-width: 1.6; stroke-dasharray: 6 4; }
  .courbe { fill: none; stroke: var(--accent-pk); stroke-width: 2.5; }
  .guide { stroke: var(--border-strong); stroke-width: 1; stroke-dasharray: 2 3; }
  .ptheo { fill: var(--bg-tertiary); stroke: var(--accent-ai); stroke-width: 2; }
  .pmes { fill: var(--accent-pk); stroke: var(--bg-tertiary); stroke-width: 2; }
  .pmes.bad { fill: #c0392b; }
  .tick { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }
  .tick.end { text-anchor: end; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .verdict { margin: 0; font-size: var(--text-sm); line-height: 1.55; padding: var(--space-2) var(--space-3); border-radius: var(--radius, 8px); border-left: 3px solid; background: var(--bg-primary); }
  .verdict.ok { border-color: var(--accent-pk); color: var(--text-secondary); }
  .verdict.bad { border-color: #c0392b; color: #c0392b; }
  .sliders { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 6px var(--space-4); }
  .sliders label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sliders span { color: var(--text-secondary); }
  .sliders b { color: var(--accent-pk); font-weight: 700; }
  .sliders input { grid-column: 1 / -1; width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: 0; line-height: 1.6; }
</style>
