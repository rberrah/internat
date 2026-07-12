<script>
  // @ts-nocheck
  // Estimation du DFG : Cockcroft-Gault (mL/min, adaptation posologique) vs CKD-EPI
  // (mL/min/1,73 m², stades KDIGO). Montre qu'une créatinine « normale » chez le
  // sujet âgé et maigre masque souvent une insuffisance rénale chronique.
  let creat = 90;    // créatininémie (µmol/L)
  let age = 82;      // ans
  let poids = 48;    // kg
  let homme = false; // sexe

  // Valeurs usuelles de créatininémie (µmol/L)
  $: creatMax = homme ? 110 : 90;
  $: creatMin = homme ? 60 : 45;
  $: creatNormale = creat >= creatMin && creat <= creatMax;
  $: scrMg = creat / 88.4; // µmol/L → mg/dL

  // Cockcroft-Gault : ClCr = k × (140 − âge) × poids / créat(µmol/L) ; k = 1,23 H / 1,04 F
  function cockcroftAt(a, cr, p, h) {
    return ((140 - a) * p * (h ? 1.23 : 1.04)) / cr;
  }
  // CKD-EPI 2021 (créatinine, sans variable ethnique), déjà indexé sur 1,73 m²
  function ckdepiAt(a, cr, h) {
    const scr = cr / 88.4;
    const kap = h ? 0.9 : 0.7;
    const alp = h ? -0.302 : -0.241;
    const r = scr / kap;
    return (
      142 *
      Math.pow(Math.min(r, 1), alp) *
      Math.pow(Math.max(r, 1), -1.2) *
      Math.pow(0.9938, a) *
      (h ? 1 : 1.012)
    );
  }

  $: cock = cockcroftAt(age, creat, poids, homme);
  $: epi = ckdepiAt(age, creat, homme);

  // Stades KDIGO (sur le DFG indexé)
  const STAGES = [
    { id: 'G5', min: 0, max: 15, lbl: 'insuffisance rénale terminale', col: '#c0392b', mix: 72 },
    { id: 'G4', min: 15, max: 30, lbl: 'DFG sévèrement diminué', col: '#c0392b', mix: 42 },
    { id: 'G3b', min: 30, max: 45, lbl: 'DFG modérément à sévèrement diminué', col: 'var(--accent-pd)', mix: 62 },
    { id: 'G3a', min: 45, max: 60, lbl: 'DFG légèrement à modérément diminué', col: 'var(--accent-pd)', mix: 36 },
    { id: 'G2', min: 60, max: 90, lbl: 'DFG légèrement diminué', col: 'var(--accent-pk)', mix: 38 },
    { id: 'G1', min: 90, max: 999, lbl: 'DFG normal ou augmenté', col: 'var(--accent-pk)', mix: 20 }
  ];
  $: stade = STAGES.find((s) => epi >= s.min && epi < s.max) || STAGES[5];
  $: irc = epi < 60;
  $: masquee = creatNormale && irc; // le piège du sujet âgé maigre

  // ── échelle KDIGO ──
  const W = 520, H = 172, m = { top: 44, right: 22, bottom: 50, left: 24 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  const SMAX = 120;
  $: xOf = (v) => (Math.max(0, Math.min(v, SMAX)) / SMAX) * iW;
  $: clampTxt = (x) => Math.max(34, Math.min(x, iW - 34));

  // ── courbe DFG en fonction de l'âge ──
  const W2 = 520, H2 = 196, m2 = { top: 14, right: 16, bottom: 34, left: 46 };
  $: iW2 = W2 - m2.left - m2.right;
  $: iH2 = H2 - m2.top - m2.bottom;
  const A0 = 20, A1 = 95;
  $: ages = Array.from({ length: 76 }, (_, i) => A0 + i);
  $: serieEpi = ages.map((a) => ckdepiAt(a, creat, homme));
  $: serieCock = ages.map((a) => cockcroftAt(a, creat, poids, homme));
  $: yMax = Math.min(300, Math.max(120, Math.ceil(Math.max(...serieEpi, ...serieCock) / 30) * 30));
  $: xOf2 = (a) => ((a - A0) / (A1 - A0)) * iW2;
  $: yOf2 = (v) => iH2 - (Math.max(0, Math.min(v, yMax)) / yMax) * iH2;
  $: pathEpi = serieEpi.map((v, i) => `${i ? 'L' : 'M'}${xOf2(ages[i]).toFixed(1)},${yOf2(v).toFixed(1)}`).join(' ');
  $: pathCock = serieCock.map((v, i) => `${i ? 'L' : 'M'}${xOf2(ages[i]).toFixed(1)},${yOf2(v).toFixed(1)}`).join(' ');
  $: ticksY = Array.from({ length: yMax / 30 + 1 }, (_, i) => i * 30);
</script>

<div class="viz">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Échelle des stades KDIGO de la maladie rénale chronique">
    <g transform={`translate(${m.left},${m.top})`}>
      {#each STAGES as s}
        <rect
          x={xOf(s.min)}
          y="0"
          width={xOf(Math.min(s.max, SMAX)) - xOf(s.min)}
          height={iH}
          style={`fill: color-mix(in srgb, ${s.col} ${s.mix}%, var(--bg-tertiary))`}
          class="band"
          class:on={stade.id === s.id}
        />
        <text x={(xOf(s.min) + xOf(Math.min(s.max, SMAX))) / 2} y={iH / 2 + 4} class="blbl">{s.id}</text>
      {/each}

      {#each [0, 15, 30, 45, 60, 90, 120] as t}
        <line x1={xOf(t)} x2={xOf(t)} y1={iH} y2={iH + 5} class="tick" />
        <text x={xOf(t)} y={iH + 17} class="tlbl">{t}</text>
      {/each}
      <text x={iW / 2} y={iH + 34} class="axlbl">DFG estimé (mL/min/1,73 m²)</text>

      <!-- CKD-EPI : le stade KDIGO -->
      <path d={`M${xOf(epi)},-6 l-6,-9 l12,0 Z`} class="mk epi" />
      <text x={clampTxt(xOf(epi))} y={-20} class="mlbl epi">CKD-EPI {epi.toFixed(0)}</text>

      <!-- Cockcroft : la posologie -->
      <circle cx={xOf(cock)} cy={iH + 40} r="5" class="mk cock" />
      <text x={clampTxt(xOf(cock))} y={iH + 40 + 4} class="mlbl cock" text-anchor={xOf(cock) > iW - 70 ? 'end' : 'start'} dx={xOf(cock) > iW - 70 ? -10 : 10}>Cockcroft {cock.toFixed(0)} mL/min</text>
    </g>
  </svg>

  <div class="verdict" style={`--vc:${stade.col}`}>
    <p class="vt">Stade {stade.id} — {stade.lbl}</p>
    <p class="vd">
      DFG (CKD-EPI) = <b>{epi.toFixed(0)} mL/min/1,73 m²</b> · ClCr (Cockcroft-Gault) =
      <b>{cock.toFixed(0)} mL/min</b> · créatininémie {creat} µmol/L ({scrMg.toFixed(2)} mg/dL) —
      <span class:norm={creatNormale} class:high={!creatNormale}>
        {creatNormale ? `dans les valeurs usuelles (${creatMin}-${creatMax})` : creat > creatMax ? 'au-dessus des valeurs usuelles' : 'basse'}
      </span>
    </p>
  </div>

  {#if masquee}
    <p class="alert">
      Créatininémie NORMALE mais DFG à {epi.toFixed(0)} : insuffisance rénale chronique MASQUÉE.
      Chez le sujet âgé, maigre ou dénutri, la faible masse musculaire produit peu de créatinine :
      la créatininémie reste « normale » alors que le DFG est effondré. Ne jamais juger la fonction
      rénale sur la seule créatininémie.
    </p>
  {/if}

  <svg viewBox={`0 0 ${W2} ${H2}`} role="img" aria-label="DFG estimé en fonction de l'âge, à créatininémie constante">
    <g transform={`translate(${m2.left},${m2.top})`}>
      <rect x="0" y={yOf2(60)} width={iW2} height={iH2 - yOf2(60)} class="zoneirc" />
      {#each ticksY as t}
        <line x1="0" x2={iW2} y1={yOf2(t)} y2={yOf2(t)} class="grid" />
        <text x="-6" y={yOf2(t) + 3} class="tlbl end">{t}</text>
      {/each}
      <line x1="0" x2={iW2} y1={yOf2(60)} y2={yOf2(60)} class="thr" />
      <text x={iW2 - 2} y={yOf2(60) - 5} class="thrlbl">60 — seuil de maladie rénale chronique</text>

      <line x1={xOf2(age)} x2={xOf2(age)} y1="0" y2={iH2} class="agel" />
      <path d={pathCock} class="curve cock" />
      <path d={pathEpi} class="curve epi" />
      <circle cx={xOf2(age)} cy={yOf2(serieCock[age - A0] ?? 0)} r="4.5" class="dot cock" />
      <circle cx={xOf2(age)} cy={yOf2(serieEpi[age - A0] ?? 0)} r="4.5" class="dot epi" />

      <line x1="0" x2="0" y1="0" y2={iH2} class="axis" />
      <line x1="0" x2={iW2} y1={iH2} y2={iH2} class="axis" />
      {#each [20, 40, 60, 80, 95] as a}
        <text x={xOf2(a)} y={iH2 + 14} class="tlbl">{a}</text>
      {/each}
      <text x={iW2 / 2} y={iH2 + 30} class="axlbl">Âge (ans) — à créatininémie et poids CONSTANTS</text>
      <text transform={`translate(-36,${iH2 / 2}) rotate(-90)`} class="axlbl">DFG</text>
    </g>
  </svg>

  <div class="legend">
    <span class="pill epi">CKD-EPI — stades KDIGO</span>
    <span class="pill cock">Cockcroft-Gault — posologies</span>
  </div>

  <div class="sliders">
    <label><span>Créatininémie</span><b>{creat} µmol/L</b><input type="range" min="40" max="600" step="5" bind:value={creat} /></label>
    <label><span>Âge</span><b>{age} ans</b><input type="range" min="20" max="95" step="1" bind:value={age} /></label>
    <label><span>Poids</span><b>{poids} kg</b><input type="range" min="35" max="120" step="1" bind:value={poids} /></label>
    <div class="sexe">
      <span>Sexe</span>
      <span class="btns">
        <button class:on={homme} on:click={() => (homme = true)}>Homme</button>
        <button class:on={!homme} on:click={() => (homme = false)}>Femme</button>
      </span>
    </div>
  </div>

  <ul class="pieges">
    <li><b>Cockcroft</b> dépend du POIDS (donc de la masse musculaire) et n'est pas indexé : il reste la référence de nombreux RCP pour l'adaptation posologique (AOD, aminosides, metformine contre-indiquée si DFG &lt; 30).</li>
    <li><b>CKD-EPI</b> est indexé sur 1,73 m² : c'est lui qui définit les stades KDIGO. G1 et G2 ne sont une maladie rénale que s'il existe un marqueur d'atteinte rénale (albuminurie…) persistant &gt; 3 mois.</li>
    <li>Dénutrition, sarcopénie, amputation → créatinine basse → DFG <b>surestimé</b>. Obésité → Cockcroft <b>surestime</b> (utiliser un poids ajusté). Sujet jeune très musclé → créatinine haute sans insuffisance rénale.</li>
  </ul>

  <p class="hint">
    Partez d'une femme de 82 ans, 48 kg, créatinine 90 µmol/L (« normale ») : le DFG est déjà au stade G3a.
    Montez ensuite le poids ou baissez l'âge : à créatinine identique, la clairance double.
  </p>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); }
  svg { width: 100%; height: auto; }
  .band { stroke: var(--bg-tertiary); stroke-width: 1; }
  .band.on { stroke: var(--text-primary); stroke-width: 1.5; }
  .blbl { fill: var(--text-primary); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; font-weight: 700; }
  .tick { stroke: var(--border-strong); stroke-width: 1; }
  .tlbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }
  .tlbl.end { text-anchor: end; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .mk.epi { fill: var(--accent-pk); }
  .mk.cock { fill: var(--accent-ai); stroke: var(--bg-tertiary); stroke-width: 1.5; }
  .mlbl { font-family: var(--font-mono); font-size: 10px; font-weight: 700; }
  .mlbl.epi { fill: var(--accent-pk); text-anchor: middle; }
  .mlbl.cock { fill: var(--accent-ai); }

  .verdict { border: 1px solid var(--border-subtle); border-left: 3px solid var(--vc); border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: var(--bg-primary); }
  .vt { margin: 0 0 4px; font-family: var(--font-mono); font-weight: 700; color: var(--vc); }
  .vd { margin: 0; color: var(--text-secondary); font-size: var(--text-xs); line-height: 1.6; }
  .vd b { color: var(--text-primary); font-family: var(--font-mono); }
  .vd .norm { color: var(--accent-pk); font-weight: 700; }
  .vd .high { color: #c0392b; font-weight: 700; }

  .alert { margin: 0; padding: var(--space-3) var(--space-4); border-radius: var(--radius); background: color-mix(in srgb, #c0392b 10%, var(--bg-primary)); border: 1px solid color-mix(in srgb, #c0392b 45%, transparent); color: #c0392b; font-size: var(--text-xs); line-height: 1.55; }

  .zoneirc { fill: color-mix(in srgb, #c0392b 7%, transparent); }
  .grid { stroke: var(--border-subtle); stroke-width: 0.5; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .thr { stroke: var(--accent-pd); stroke-width: 1.4; stroke-dasharray: 5 3; }
  .thrlbl { fill: var(--accent-pd); font-family: var(--font-mono); font-size: 9px; text-anchor: end; }
  .agel { stroke: var(--border-strong); stroke-width: 1; stroke-dasharray: 3 3; }
  .curve { fill: none; stroke-width: 2.5; }
  .curve.epi { stroke: var(--accent-pk); }
  .curve.cock { stroke: var(--accent-ai); stroke-dasharray: 6 3; stroke-width: 2; }
  .dot { stroke: var(--bg-tertiary); stroke-width: 2; }
  .dot.epi { fill: var(--accent-pk); }
  .dot.cock { fill: var(--accent-ai); }

  .legend { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; }
  .pill { font-family: var(--font-mono); font-size: 9px; padding: 3px 10px; border-radius: 999px; font-weight: 700; }
  .pill.epi { background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); }
  .pill.cock { background: color-mix(in srgb, var(--accent-ai) 15%, var(--bg-primary)); color: var(--accent-ai); }

  .sliders { display: grid; gap: 6px; grid-template-columns: 1fr 1fr; }
  .sliders label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sliders span { color: var(--text-secondary); }
  .sliders b { color: var(--accent-pk); }
  .sliders input { grid-column: 1 / -1; width: 100%; accent-color: var(--accent-pk); }
  .sliders .sexe { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sexe .btns { grid-column: 1 / -1; display: flex; gap: 4px; margin-top: 2px; }
  .sexe button { flex: 1; font-size: 10px; padding: 3px 6px; border: 1px solid var(--border-strong); background: var(--bg-primary); color: var(--text-secondary); border-radius: 6px; cursor: pointer; font-family: var(--font-mono); }
  .sexe button.on { background: var(--accent-pk); color: var(--bg-tertiary); border-color: var(--accent-pk); }

  .pieges { margin: 0; padding-left: 1.1em; color: var(--text-secondary); font-size: var(--text-xs); line-height: 1.5; }
  .pieges li { margin-bottom: 4px; }
  .pieges b { color: var(--text-primary); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: 0; text-align: center; line-height: 1.5; }
</style>
