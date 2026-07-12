<script>
  // @ts-nocheck
  // Ionogramme et trou anionique : TA = Na⁺ − (Cl⁻ + HCO₃⁻), normale 8-16 mmol/L.
  // Le diagramme de Gamble rend visible le « trou » = les anions indosés.
  let na = 132;
  let cl = 95;
  let hco3 = 8;
  let alb = 40; // albuminémie (g/L) — corrige le TA

  const PRESETS = [
    { id: 'norm', lbl: 'Normal', na: 140, cl: 104, hco3: 24, alb: 40 },
    { id: 'dka', lbl: 'Acidocétose', na: 132, cl: 95, hco3: 8, alb: 40 },
    { id: 'lact', lbl: 'Acidose lactique', na: 138, cl: 100, hco3: 10, alb: 25 },
    { id: 'diar', lbl: 'Diarrhée', na: 138, cl: 114, hco3: 14, alb: 40 },
    { id: 'irc', lbl: 'Insuffisance rénale', na: 138, cl: 104, hco3: 15, alb: 38 },
    { id: 'eg', lbl: 'Éthylène-glycol', na: 140, cl: 100, hco3: 6, alb: 40 }
  ];
  function load(p) {
    na = p.na; cl = p.cl; hco3 = p.hco3; alb = p.alb;
  }

  $: ta = na - (cl + hco3);
  // Correction : le TA mesuré baisse de 2,5 mmol/L par 10 g/L d'albumine en moins
  $: taCorr = ta + 0.25 * (40 - alb);
  $: nonPhysio = ta < 0;
  $: acidose = hco3 < 22;
  $: alcalose = hco3 > 26;
  $: taHaut = taCorr > 16;
  $: taBas = taCorr < 8;

  // Delta ratio (uniquement si acidose à TA augmenté) : ΔTA / ΔHCO₃⁻
  $: deltaRatio = acidose && taHaut && hco3 < 24 ? (taCorr - 12) / (24 - hco3) : null;
  $: deltaTxt =
    deltaRatio === null
      ? ''
      : deltaRatio < 1
        ? 'acidose MIXTE (à TA élevé + hyperchlorémique)'
        : deltaRatio <= 2
          ? 'acidose à TA élevé PURE'
          : 'alcalose métabolique associée';

  $: verdict = (() => {
    if (nonPhysio)
      return {
        t: 'Combinaison non physiologique',
        c: '#c0392b',
        d: "Cl⁻ + HCO₃⁻ dépasse le Na⁺ : le trou anionique serait négatif, ce qui viole l'électroneutralité. Vérifiez les valeurs (ou pensez à une erreur de dosage, une hyperprotidémie type myélome, une intoxication au bromure/lithium).",
        causes: []
      };
    if (acidose && taHaut)
      return {
        t: 'Acidose métabolique à TROU ANIONIQUE AUGMENTÉ',
        c: '#c0392b',
        d: "Des anions indosés (cétones, lactate, sulfates, anions toxiques) remplacent les HCO₃⁻ consommés : le Cl⁻ reste normal (acidose normochlorémique).",
        causes: [
          'Acidocétose : diabétique, alcoolique, de jeûne',
          'Acidose lactique : choc, sepsis, hypoxie, metformine, biguanides',
          'Insuffisance rénale : rétention de sulfates et de phosphates',
          'Intoxications : méthanol, éthylène-glycol (→ calculer le TROU OSMOLAIRE), salicylés'
        ]
      };
    if (acidose)
      return {
        t: 'Acidose métabolique à TROU ANIONIQUE NORMAL (hyperchlorémique)',
        c: 'var(--accent-pd)',
        d: "Les HCO₃⁻ perdus sont remplacés mole à mole par du Cl⁻ : le trou anionique ne bouge pas. Étape suivante : le TROU ANIONIQUE URINAIRE = (Na⁺ + K⁺) − Cl⁻ urinaires — NÉGATIF si perte digestive (NH₄⁺ éliminé), POSITIF si acidose tubulaire rénale.",
        causes: [
          'Pertes digestives de HCO₃⁻ : diarrhée +++, fistule',
          'Acidoses tubulaires rénales (types 1, 2 et 4)',
          'Acétazolamide, épargneurs de K⁺',
          "Apport massif de NaCl (acidose de dilution)"
        ]
      };
    if (alcalose)
      return {
        t: 'Alcalose métabolique',
        c: 'var(--accent-ai)',
        d: "HCO₃⁻ élevé. Causes : vomissements, aspiration gastrique, diurétiques (anse, thiazidiques), hyperaldostéronisme, hypokaliémie. Le trou anionique peut être discrètement augmenté.",
        causes: []
      };
    if (taHaut)
      return {
        t: 'Trou anionique augmenté sans acidose franche',
        c: 'var(--accent-pd)',
        d: "HCO₃⁻ encore normal mais anions indosés présents : trouble débutant ou trouble MIXTE (acidose à TA élevé + alcalose métabolique). Le delta ratio aide à trancher.",
        causes: []
      };
    if (taBas)
      return {
        t: 'Trou anionique bas',
        c: 'var(--accent-ai)',
        d: "Rare. Évoquer d'abord une HYPOALBUMINÉMIE (à corriger : voir le TA corrigé), sinon une hyperprotidémie cationique (myélome à chaînes légères), une hypercalcémie/hypermagnésémie sévère, une intoxication au lithium ou au bromure.",
        causes: []
      };
    return {
      t: 'Ionogramme normal',
      c: 'var(--accent-pk)',
      d: "Trou anionique dans la norme (8-16 mmol/L) et bicarbonates normaux (22-26 mmol/L).",
      causes: []
    };
  })();

  // ── diagramme de Gamble ──
  const W = 460, H = 262, m = { top: 16, right: 14, bottom: 38, left: 40 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  const YMAX = 170;
  const XC = 70, XA = 230, BW = 90;
  $: yOf = (v) => iH - (Math.max(0, Math.min(v, YMAX)) / YMAX) * iH;
  $: hOf = (v) => (Math.max(0, v) / YMAX) * iH;
</script>

<div class="viz">
  <div class="presets">
    {#each PRESETS as p}
      <button
        class:on={na === p.na && cl === p.cl && hco3 === p.hco3 && alb === p.alb}
        on:click={() => load(p)}>{p.lbl}</button>
    {/each}
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Diagramme de Gamble : cations et anions plasmatiques, trou anionique">
    <defs>
      <pattern id="hatchTA" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="6" class="hl warn" />
      </pattern>
      <pattern id="hatchTAd" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="6" class="hl bad" />
      </pattern>
    </defs>

    <g transform={`translate(${m.left},${m.top})`}>
      {#each [0, 50, 100, 150] as t}
        <line x1="0" x2={iW} y1={yOf(t)} y2={yOf(t)} class="grid" />
        <text x="-6" y={yOf(t) + 3} class="tlbl end">{t}</text>
      {/each}
      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />
      <text transform={`translate(-30,${iH / 2}) rotate(-90)`} class="axlbl">mmol/L</text>

      <!-- colonne CATIONS -->
      <rect x={XC} y={yOf(na)} width={BW} height={hOf(na)} class="blk na" />
      <text x={XC + BW / 2} y={yOf(na / 2) + 4} class="inlbl">Na⁺ {na}</text>
      <text x={XC + BW / 2} y={iH + 16} class="collbl">CATION</text>

      <!-- colonne ANIONS -->
      <rect x={XA} y={yOf(cl)} width={BW} height={hOf(cl)} class="blk cl" />
      <rect x={XA} y={yOf(cl + hco3)} width={BW} height={hOf(hco3)} class="blk hco3" />
      {#if ta > 0}
        <rect
          x={XA}
          y={yOf(na)}
          width={BW}
          height={hOf(ta)}
          class="blk gap"
          class:bad={taHaut}
          fill={taHaut ? 'url(#hatchTAd)' : 'url(#hatchTA)'} />
        <text x={XA + BW / 2} y={yOf(cl + hco3 + ta / 2) + 3} class="inlbl gaptxt" class:bad={taHaut}>TA</text>
      {/if}
      <text x={XA + BW / 2} y={iH + 16} class="collbl">ANIONS</text>

      <!-- étiquettes latérales -->
      <text x={XA - 8} y={yOf(cl / 2) + 3} class="sidelbl">Cl⁻ {cl}</text>
      <text x={XA - 8} y={yOf(cl + hco3 / 2) + 3} class="sidelbl">HCO₃⁻ {hco3}</text>
      {#if ta > 0}
        <text x={XA + BW + 8} y={yOf(cl + hco3 + ta / 2) + 3} class="sidelbl start" class:bad={taHaut}>
          anions indosés = {ta}
        </text>
      {/if}

      <!-- électroneutralité -->
      <line x1={XC} x2={XA + BW} y1={yOf(na)} y2={yOf(na)} class="neutral" />
      <text x={iW} y={yOf(na) - 5} class="ntxt">électroneutralité</text>

      {#if nonPhysio}
        <line x1={XA} x2={XA + BW} y1={yOf(cl + hco3)} y2={yOf(cl + hco3)} class="over" />
        <text x={XA + BW + 8} y={yOf(cl + hco3) + 3} class="sidelbl start bad">excès d'anions !</text>
      {/if}
    </g>
  </svg>

  <div class="stats">
    <span class="pill" class:bad={taHaut} class:low={taBas}>TA = {na} − ({cl} + {hco3}) = {ta} mmol/L</span>
    <span class="pill" class:bad={taHaut} class:low={taBas}>TA corrigé = {taCorr.toFixed(1)} mmol/L</span>
    <span class="pill muted">normale 8-16</span>
    {#if deltaRatio !== null}
      <span class="pill muted">Δ ratio = {deltaRatio.toFixed(1)} → {deltaTxt}</span>
    {/if}
  </div>

  {#if alb < 35 && !nonPhysio}
    <p class="note">
      Albumine à {alb} g/L : l'albumine est le principal anion indosé. Une hypoalbuminémie
      ABAISSE le TA mesuré et peut masquer une acidose à TA augmenté → toujours corriger
      (+ 0,25 × (40 − albuminémie), soit +{(0.25 * (40 - alb)).toFixed(1)} mmol/L ici).
    </p>
  {/if}

  <div class="verdict" style={`--vc:${verdict.c}`}>
    <p class="vt">{verdict.t}</p>
    <p class="vd">{verdict.d}</p>
    {#if verdict.causes.length}
      <ul>{#each verdict.causes as c}<li>{c}</li>{/each}</ul>
    {/if}
  </div>

  <div class="sliders">
    <label><span>Na⁺</span><b>{na} mmol/L</b><input type="range" min="120" max="160" step="1" bind:value={na} /></label>
    <label><span>Cl⁻</span><b>{cl} mmol/L</b><input type="range" min="80" max="125" step="1" bind:value={cl} /></label>
    <label><span>HCO₃⁻</span><b>{hco3} mmol/L</b><input type="range" min="4" max="40" step="1" bind:value={hco3} /></label>
    <label><span>Albumine</span><b>{alb} g/L</b><input type="range" min="15" max="50" step="1" bind:value={alb} /></label>
  </div>

  <p class="hint">
    Chargez un cas, puis faites monter le Cl⁻ : à Na⁺ et HCO₃⁻ constants, le trou anionique se referme —
    c'est toute la différence entre une acidose par perte de bicarbonates (diarrhée) et une acidose par
    ajout d'acides (cétones, lactate, toxiques).
  </p>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); }
  .presets { display: flex; flex-wrap: wrap; gap: var(--space-2); }
  .presets button { font-size: var(--text-xs); padding: 4px 10px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 8px; cursor: pointer; color: var(--text-secondary); font-family: var(--font-mono); }
  .presets button.on { background: var(--accent-pk); color: var(--bg-tertiary); border-color: var(--accent-pk); }
  svg { width: 100%; height: auto; }

  .hl { stroke-width: 3; }
  .hl.warn { stroke: var(--accent-pd); }
  .hl.bad { stroke: #c0392b; }
  .grid { stroke: var(--border-subtle); stroke-width: 0.5; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .blk { stroke: var(--bg-tertiary); stroke-width: 1; }
  .na { fill: color-mix(in srgb, var(--accent-ai) 55%, var(--bg-tertiary)); }
  .cl { fill: color-mix(in srgb, var(--accent-pk) 45%, var(--bg-tertiary)); }
  .hco3 { fill: color-mix(in srgb, var(--accent-pk) 18%, var(--bg-tertiary)); }
  .gap { stroke: var(--accent-pd); stroke-width: 1.2; }
  .gap.bad { stroke: #c0392b; stroke-width: 1.6; }
  .neutral { stroke: var(--text-primary); stroke-width: 1.2; stroke-dasharray: 4 3; }
  .over { stroke: #c0392b; stroke-width: 2; }
  .ntxt { fill: var(--text-muted); font-family: var(--font-mono); font-size: 8px; text-anchor: end; }
  .inlbl { fill: var(--bg-tertiary); font-family: var(--font-mono); font-size: 11px; font-weight: 700; text-anchor: middle; }
  .gaptxt { fill: var(--accent-pd); font-size: 9px; }
  .gaptxt.bad { fill: #c0392b; }
  .sidelbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 9px; text-anchor: end; }
  .sidelbl.start { text-anchor: start; }
  .sidelbl.bad { fill: #c0392b; font-weight: 700; }
  .collbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; letter-spacing: 0.08em; }
  .tlbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }
  .tlbl.end { text-anchor: end; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }

  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.bad { background: color-mix(in srgb, #c0392b 13%, var(--bg-primary)); color: #c0392b; }
  .pill.low { background: color-mix(in srgb, var(--accent-ai) 15%, var(--bg-primary)); color: var(--accent-ai); }
  .pill.muted { background: var(--bg-secondary); color: var(--text-muted); font-weight: 400; }

  .note { margin: 0; padding: var(--space-2) var(--space-3); border-radius: var(--radius); background: color-mix(in srgb, var(--accent-pd) 10%, var(--bg-primary)); border: 1px solid color-mix(in srgb, var(--accent-pd) 35%, transparent); color: var(--accent-pd); font-size: var(--text-xs); line-height: 1.5; }

  .verdict { border: 1px solid var(--border-subtle); border-left: 3px solid var(--vc); border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: var(--bg-primary); }
  .vt { margin: 0 0 4px; font-family: var(--font-mono); font-weight: 700; color: var(--vc); font-size: var(--text-sm); line-height: 1.35; }
  .vd { margin: 0; color: var(--text-secondary); font-size: var(--text-xs); line-height: 1.55; }
  .verdict ul { margin: var(--space-2) 0 0; padding-left: 1.1em; color: var(--text-secondary); font-size: var(--text-xs); line-height: 1.45; }
  .verdict li { margin-bottom: 2px; }

  .sliders { display: grid; gap: 6px; grid-template-columns: 1fr 1fr; }
  .sliders label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sliders span { color: var(--text-secondary); }
  .sliders b { color: var(--accent-pk); }
  .sliders input { grid-column: 1 / -1; width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: 0; text-align: center; line-height: 1.5; }
</style>
