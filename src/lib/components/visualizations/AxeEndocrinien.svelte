<script>
  // @ts-nocheck
  // Rétrocontrôle des axes hypothalamo-hypophysaires (thyréotrope, corticotrope).
  // Montre pourquoi l'hormone hypophysaire ne s'interprète JAMAIS seule : c'est le
  // COUPLE (hormone hypophysaire + hormone périphérique) qui localise l'atteinte.
  let axe = 'thyreo';        // 'thyreo' | 'cortico'
  let situation = 'periph';  // 'normal' | 'periph' | 'central' | 'exo'
  let sev = 80;              // sévérité de l'atteinte / dose exogène (%)

  const AXES = {
    thyreo: {
      label: 'Axe thyréotrope',
      hypo: 'Hypothalamus', hyp: 'Antéhypophyse', gld: 'Thyroïde',
      hHormone: 'TRH', pHormone: 'TSH', gHormone: 'T4 libre',
      pUnit: 'mUI/L', gUnit: 'pmol/L',
      pNorm: [0.4, 4], gNorm: [9, 20],
      pRef: 2, gRef: 14,
      pMin: 0.01, pMax: 100, gMax: 35,
      pDec: 2, gDec: 1,
      exoName: 'L-thyroxine (exogène)',
      exoTag: 'dosée comme T4L',
      cible: 'Tissus cibles — métabolisme de base'
    },
    cortico: {
      label: 'Axe corticotrope',
      hypo: 'Hypothalamus', hyp: 'Antéhypophyse', gld: 'Corticosurrénale',
      hHormone: 'CRH', pHormone: 'ACTH', gHormone: 'Cortisol 8 h',
      pUnit: 'ng/L', gUnit: 'nmol/L',
      pNorm: [10, 50], gNorm: [250, 650],
      pRef: 25, gRef: 450,
      pMin: 1, pMax: 1000, gMax: 800,
      pDec: 0, gDec: 0,
      exoName: 'Corticoïde de synthèse',
      exoTag: 'NON dosé par le cortisol',
      cible: 'Tissus cibles — métabolisme, immunité'
    }
  };

  const SITUATIONS = [
    { id: 'normal',  label: 'Normal' },
    { id: 'periph',  label: 'Atteinte périphérique' },
    { id: 'central', label: 'Atteinte centrale' },
    { id: 'exo',     label: 'Hormone exogène' }
  ];

  $: A = AXES[axe];
  $: s = sev / 100;

  // ── Dosages attendus selon la situation ──────────────────────────────
  function dosages(a, sit, s) {
    if (a === 'thyreo') {
      if (sit === 'normal')  return { p: 2, g: 14 };
      if (sit === 'periph')  return { p: 2 * Math.pow(35, s), g: 14 - 10.5 * s };   // TSH ↑↑ + T4L ↓
      if (sit === 'central') return { p: 2 * (1 - 0.8 * s),   g: 14 - 10.5 * s };   // TSH basse/N + T4L ↓
      return { p: 2 * Math.exp(-5 * s), g: 14 + 16 * s };                            // TSH freinée + T4L ↑
    }
    if (sit === 'normal')  return { p: 25, g: 450 };
    if (sit === 'periph')  return { p: 25 * Math.pow(24, s), g: 450 - 410 * s };     // ACTH ↑↑ + cortisol ↓
    if (sit === 'central') return { p: 25 * (1 - 0.85 * s),  g: 450 - 410 * s };     // ACTH basse/N + cortisol ↓
    return { p: 25 * Math.exp(-5 * s), g: 450 * Math.exp(-3.2 * s) };                // les deux effondrés
  }
  $: d = dosages(axe, situation, s);
  $: pVal = d.p;
  $: gVal = d.g;

  // ── Statuts (bas / normal / haut) ────────────────────────────────────
  function stat(v, n) { return v < n[0] ? 'bas' : v > n[1] ? 'haut' : 'normal'; }
  function fleche(v, n) {
    if (v > n[1] * 3) return '↑↑';
    if (v > n[1]) return '↑';
    if (v < n[0] / 3) return '↓↓';
    if (v < n[0]) return '↓';
    return 'N';
  }
  $: pStat = stat(pVal, A.pNorm);
  $: gStat = stat(gVal, A.gNorm);
  $: pFleche = fleche(pVal, A.pNorm);
  $: gFleche = fleche(gVal, A.gNorm);

  const fmt = (v, dec) => v.toFixed(dec).replace('.', ',');

  // ── Jauges (log pour l'hormone hypophysaire, linéaire pour la périphérique) ──
  const clamp = (x) => Math.max(0, Math.min(100, x));
  $: pctP = (v) =>
    clamp(((Math.log(Math.max(v, A.pMin)) - Math.log(A.pMin)) / (Math.log(A.pMax) - Math.log(A.pMin))) * 100);
  $: pctG = (v) => clamp((v / A.gMax) * 100);

  // ── Épaisseur des flèches = intensité du signal ──────────────────────
  const sw = (v, ref) => Math.max(0.8, Math.min(7, 2.2 * Math.sqrt(Math.max(v, 0) / ref)));
  $: swP = sw(pVal, A.pRef);                 // TSH / ACTH
  $: swG = situation === 'exo' ? 0.8 : sw(gVal, A.gRef);  // hormone glandulaire (glande freinée si exogène)
  $: swTRH = sw(A.gRef / Math.max(gVal, 1), 1) * 1.1;     // TRH/CRH ↑ quand le rétrocontrôle est levé
  $: swFB = sw(gVal, A.gRef);                // intensité du rétrocontrôle négatif

  // ── Interprétation ───────────────────────────────────────────────────
  $: verdict = (() => {
    const K = axe === 'thyreo';
    if (situation === 'normal')
      return K
        ? { t: 'Euthyroïdie', c: 'TSH normale + T4L normale : le rétrocontrôle négatif de T4/T3 ajuste finement la TSH. La TSH est le test de 1re intention (relation log/linéaire : elle varie beaucoup pour une petite variation de T4L).' }
        : { t: 'Axe corticotrope normal', c: 'ACTH normale + cortisol à 8 h normal. Le cortisol suit un cycle nycthéméral : le dosage se fait le matin (pic), un cortisol du soir n’est pas interprétable de la même façon.' };
    if (situation === 'periph')
      return K
        ? { t: 'Hypothyroïdie primaire (périphérique)', c: 'TSH ↑↑ + T4L ↓. La glande ne répond plus : la levée du rétrocontrôle fait flamber la TSH. Causes : thyroïdite de Hashimoto, post-thyroïdectomie ou iode 131, amiodarone, lithium. Si TSH ↑ avec T4L NORMALE = hypothyroïdie fruste (infraclinique).' }
        : { t: 'Insuffisance surrénale primaire (Addison)', c: 'Cortisol ↓ + ACTH ↑↑. Mélanodermie (précurseur POMC → MSH), hyponatrémie ET hyperkaliémie (déficit associé en aldostérone), rénine ↑. Test au Synacthène® : pas de réponse. Traitement : hydrocortisone + fludrocortisone.' };
    if (situation === 'central')
      return K
        ? { t: 'Hypothyroïdie centrale (hypophysaire)', c: 'T4L ↓ avec TSH BASSE ou NORMALE : réponse inadaptée (le signal d’alarme manque). Causes : adénome hypophysaire, syndrome de Sheehan, hypophysite (anti-PD1), chirurgie/radiothérapie. Piège : la TSH seule serait faussement rassurante — le suivi se fait sur la T4L, pas sur la TSH.' }
        : { t: 'Insuffisance corticotrope (centrale)', c: 'Cortisol ↓ + ACTH basse ou normale (inadaptée). Pas de mélanodermie, PAS d’hyperkaliémie (le SRAA et l’aldostérone sont intacts) ; hyponatrémie de dilution possible. Traitement : hydrocortisone seule.' };
    return K
      ? { t: 'Surdosage en hormone exogène', c: 'TSH freinée (↓↓) + T4L ↑. La L-thyroxine EST dosée comme T4 → l’hormone périphérique est HAUTE. Thyrotoxicose factice : thyroglobuline basse et pas d’hyperfixation à la scintigraphie (contrairement à une Basedow).' }
      : { t: 'Freination par corticothérapie', c: 'ACTH ↓↓ + cortisol ↓↓ (atrophie surrénalienne). Le corticoïde de synthèse (prednisone, dexaméthasone) n’est PAS dosé par le cortisol : la cortisolémie est effondrée alors que le patient est imprégné. Ne JAMAIS arrêter brutalement → décroissance progressive (risque d’insuffisance surrénale aiguë).' };
  })();

  $: sevLabel =
    situation === 'normal' ? 'Axe intact — choisissez une atteinte'
    : situation === 'exo' ? 'Dose d’hormone exogène'
    : 'Sévérité de l’atteinte';

  // ── Géométrie du schéma ──────────────────────────────────────────────
  const W = 460, H = 300;
  const BX = 150, BW = 160, BH = 32;
  const Y1 = 8, Y2 = 94, Y3 = 180, Y4 = 254;
  const CX = 230;
</script>

<div class="viz">
  <div class="tabs">
    {#each Object.entries(AXES) as [id, a]}
      <button class:on={axe === id} on:click={() => (axe = id)}>{a.label}</button>
    {/each}
  </div>

  <div class="tabs sit">
    {#each SITUATIONS as st}
      <button class:on={situation === st.id} on:click={() => (situation = st.id)}>{st.label}</button>
    {/each}
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img"
       aria-label={`Rétrocontrôle de l'${A.label} : ${verdict.t}`}>
    <defs>
      <marker id="ax-stim" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse"
              markerWidth="10" markerHeight="10" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" class="m-stim" />
      </marker>
      <marker id="ax-fb" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse"
              markerWidth="9" markerHeight="9" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" class="m-fb" />
      </marker>
      <marker id="ax-exo" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse"
              markerWidth="9" markerHeight="9" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" class="m-exo" />
      </marker>
    </defs>

    <!-- ══ rétrocontrôle négatif (trajet de droite) ══ -->
    <path d={`M310,${Y3 + BH / 2} H392 V${Y2 + BH / 2} H318`} class="fb"
          style={`stroke-width:${swFB}`} marker-end="url(#ax-fb)" />
    <path d={`M392,${Y2 + BH / 2} V${Y1 + BH / 2} H318`} class="fb"
          style={`stroke-width:${swFB}`} marker-end="url(#ax-fb)" />
    <circle cx="352" cy={Y2 + BH / 2} r="7" class="minus" />
    <text x="352" y={Y2 + BH / 2 + 4} class="minuslbl">−</text>
    <circle cx="352" cy={Y1 + BH / 2} r="7" class="minus" />
    <text x="352" y={Y1 + BH / 2 + 4} class="minuslbl">−</text>
    <text transform={`translate(${414},${(Y1 + Y3) / 2 + BH / 2}) rotate(-90)`} class="fblbl">
      rétrocontrôle négatif
    </text>

    <!-- ══ source exogène ══ -->
    {#if situation === 'exo'}
      <rect x="8" y={Y3} width="112" height={BH} rx="6" class="box exo" />
      <text x="64" y={Y3 + 13} class="boxttl exo">{A.exoName.split(' (')[0]}</text>
      <text x="64" y={Y3 + 25} class="boxsub">apport exogène</text>
      <text x="64" y={Y3 + 48} class="exotag">{A.exoTag}</text>
      <!-- freine l'hypophyse ET l'hypothalamus -->
      <path d={`M64,${Y3} V${Y2 + BH / 2} H144`} class="fb exo-fb"
            style={`stroke-width:${1 + 4 * s}`} marker-end="url(#ax-fb)" />
      <path d={`M64,${Y2 + BH / 2} V${Y1 + BH / 2} H144`} class="fb exo-fb"
            style={`stroke-width:${1 + 4 * s}`} marker-end="url(#ax-fb)" />
      <!-- rejoint la circulation vers les tissus cibles -->
      <path d={`M120,${Y3 + BH / 2} C160,${Y3 + BH / 2} 180,${Y4 - 16} 216,${Y4 - 8}`}
            class="exoflow" marker-end="url(#ax-exo)" />
    {/if}

    <!-- ══ flèches de stimulation ══ -->
    <line x1={CX} y1={Y1 + BH} x2={CX} y2={Y2 - 4} class="stim"
          style={`stroke-width:${swTRH}`} marker-end="url(#ax-stim)" />
    <text x={CX - 8} y={(Y1 + BH + Y2) / 2 + 1} class="hlbl">{A.hHormone}</text>

    <line x1={CX} y1={Y2 + BH} x2={CX} y2={Y3 - 4} class="stim"
          style={`stroke-width:${swP}`} marker-end="url(#ax-stim)" />
    <text x={CX - 8} y={(Y2 + BH + Y3) / 2 - 4} class="hlbl">{A.pHormone}</text>
    <text x={CX - 8} y={(Y2 + BH + Y3) / 2 + 9} class="hval" class:alert={pStat !== 'normal'}>
      {fmt(pVal, A.pDec)} {A.pUnit}
    </text>

    <line x1={CX} y1={Y3 + BH} x2={CX} y2={Y4 - 4} class="stim"
          style={`stroke-width:${swG}`} marker-end="url(#ax-stim)" />
    <text x={CX - 8} y={(Y3 + BH + Y4) / 2 - 3} class="hlbl">{A.gHormone}</text>
    <text x={CX - 8} y={(Y3 + BH + Y4) / 2 + 10} class="hval" class:alert={gStat !== 'normal'}>
      {fmt(gVal, A.gDec)} {A.gUnit}
    </text>

    <!-- ══ boîtes ══ -->
    <rect x={BX} y={Y1} width={BW} height={BH} rx="6" class="box" />
    <text x={CX} y={Y1 + 20} class="boxttl">{A.hypo}</text>

    <rect x={BX} y={Y2} width={BW} height={BH} rx="6" class="box"
          class:lesion={situation === 'central'} />
    <text x={CX} y={Y2 + 20} class="boxttl">{A.hyp}</text>

    <rect x={BX} y={Y3} width={BW} height={BH} rx="6" class="box"
          class:lesion={situation === 'periph'} class:freinee={situation === 'exo'} />
    <text x={CX} y={Y3 + 20} class="boxttl">{A.gld}</text>

    <rect x={BX} y={Y4} width={BW} height="26" rx="6" class="box cible" />
    <text x={CX} y={Y4 + 17} class="ciblelbl">{A.cible}</text>

    <!-- ══ croix de lésion ══ -->
    {#if situation === 'central' || situation === 'periph'}
      {@const yy = situation === 'central' ? Y2 : Y3}
      <line x1={BX + 12} y1={yy + 8} x2={BX + 28} y2={yy + 24} class="cross" />
      <line x1={BX + 28} y1={yy + 8} x2={BX + 12} y2={yy + 24} class="cross" />
    {/if}
  </svg>

  <!-- ══ le COUPLE de dosages ══ -->
  <div class="gauges">
    <div class="g">
      <div class="gh">
        <span class="gn">{A.pHormone}</span>
        <span class="gv" class:alert={pStat !== 'normal'}>
          {fmt(pVal, A.pDec)} {A.pUnit} <b>{pFleche}</b>
        </span>
      </div>
      <div class="track">
        <div class="band" style={`left:${pctP(A.pNorm[0])}%; width:${pctP(A.pNorm[1]) - pctP(A.pNorm[0])}%`}></div>
        <div class="mk" class:alert={pStat !== 'normal'} style={`left:${pctP(pVal)}%`}></div>
      </div>
      <div class="gf">hormone hypophysaire · normes {fmt(A.pNorm[0], A.pDec)}–{fmt(A.pNorm[1], A.pDec)} (éch. log)</div>
    </div>

    <div class="g">
      <div class="gh">
        <span class="gn">{A.gHormone}</span>
        <span class="gv" class:alert={gStat !== 'normal'}>
          {fmt(gVal, A.gDec)} {A.gUnit} <b>{gFleche}</b>
        </span>
      </div>
      <div class="track">
        <div class="band" style={`left:${pctG(A.gNorm[0])}%; width:${pctG(A.gNorm[1]) - pctG(A.gNorm[0])}%`}></div>
        <div class="mk" class:alert={gStat !== 'normal'} style={`left:${pctG(gVal)}%`}></div>
      </div>
      <div class="gf">hormone périphérique · normes {fmt(A.gNorm[0], A.gDec)}–{fmt(A.gNorm[1], A.gDec)}</div>
    </div>
  </div>

  <div class="verdict" class:bad={situation !== 'normal'}>
    <p class="vt">{verdict.t}</p>
    <p class="vc">{verdict.c}</p>
  </div>

  <div class="controls">
    <label>
      <span>{sevLabel}</span><b>{situation === 'normal' ? '—' : sev + ' %'}</b>
      <input type="range" min="10" max="100" step="5" bind:value={sev}
             disabled={situation === 'normal'} />
    </label>
  </div>

  <p class="hint">
    Changez d'axe et de situation : l'hormone hypophysaire (TSH, ACTH) ne s'interprète
    <strong>jamais seule</strong>. C'est le <strong>couple</strong> qui localise l'atteinte —
    hormone périphérique basse + hormone hypophysaire HAUTE = glande (périphérique) ;
    hormone périphérique basse + hormone hypophysaire basse ou normale = hypophyse (centrale).
  </p>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); }
  .tabs { display: flex; flex-wrap: wrap; gap: var(--space-2); }
  .tabs button {
    font-size: var(--text-xs); padding: 5px 10px; border: 1px solid var(--border-strong);
    background: var(--bg-primary); border-radius: 8px; cursor: pointer;
    color: var(--text-secondary); font-family: var(--font-mono);
  }
  .tabs button.on { background: var(--accent-pk); color: #fff; border-color: var(--accent-pk); }
  .tabs.sit button.on { background: var(--accent-ai); border-color: var(--accent-ai); }
  svg { width: 100%; height: auto; display: block; }

  .box { fill: var(--bg-primary); stroke: var(--border-strong); stroke-width: 1.2; }
  .box.lesion { stroke: #c0392b; stroke-width: 2; fill: color-mix(in srgb, #c0392b 8%, var(--bg-primary)); }
  .box.freinee { stroke-dasharray: 4 3; stroke: var(--text-muted); }
  .box.exo { stroke: var(--accent-pd); fill: color-mix(in srgb, var(--accent-pd) 10%, var(--bg-primary)); }
  .box.cible { fill: var(--bg-secondary); stroke: var(--border-subtle); }
  .boxttl { fill: var(--text-primary); font-family: var(--font-mono); font-size: 12px; text-anchor: middle; font-weight: 700; }
  .boxttl.exo { fill: var(--accent-pd); font-size: 10px; }
  .boxsub { fill: var(--text-muted); font-family: var(--font-mono); font-size: 8px; text-anchor: middle; }
  .exotag { fill: var(--accent-pd); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; font-weight: 700; }
  .ciblelbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }

  .stim { stroke: var(--accent-pk); }
  .m-stim { fill: var(--accent-pk); }
  .fb { stroke: var(--accent-pd); fill: none; stroke-dasharray: 5 3; }
  .m-fb { fill: var(--accent-pd); }
  .exo-fb { stroke: var(--accent-pd); }
  .exoflow { stroke: var(--accent-pd); stroke-width: 2; fill: none; stroke-dasharray: 3 2; }
  .m-exo { fill: var(--accent-pd); }
  .minus { fill: var(--bg-tertiary); stroke: var(--accent-pd); stroke-width: 1.2; }
  .minuslbl { fill: var(--accent-pd); font-family: var(--font-mono); font-size: 12px; font-weight: 700; text-anchor: middle; }
  .fblbl { fill: var(--accent-pd); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }

  .hlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 11px; text-anchor: end; font-weight: 700; }
  .hval { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: end; }
  .hval.alert { fill: #c0392b; font-weight: 700; }
  .cross { stroke: #c0392b; stroke-width: 2.5; stroke-linecap: round; }

  .gauges { display: grid; gap: var(--space-3); grid-template-columns: 1fr 1fr; }
  .g { border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-2) var(--space-3); background: var(--bg-primary); }
  .gh { display: flex; justify-content: space-between; align-items: baseline; gap: var(--space-2); }
  .gn { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-secondary); font-weight: 700; }
  .gv { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-pk); font-weight: 700; }
  .gv.alert { color: #c0392b; }
  .gv b { font-size: var(--text-sm); }
  .track { position: relative; height: 8px; margin: 6px 0 4px; background: var(--bg-secondary); border-radius: 999px; }
  .band { position: absolute; top: 0; height: 100%; background: color-mix(in srgb, var(--accent-pk) 35%, var(--bg-secondary)); border-radius: 999px; }
  .mk { position: absolute; top: -3px; width: 4px; height: 14px; margin-left: -2px; border-radius: 2px; background: var(--accent-pk); }
  .mk.alert { background: #c0392b; }
  .gf { font-family: var(--font-mono); font-size: 9px; color: var(--text-muted); }

  .verdict { border: 1px solid var(--border-subtle); border-left: 3px solid var(--accent-pk); border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: var(--bg-primary); }
  .verdict.bad { border-left-color: #c0392b; }
  .vt { margin: 0 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-sm); font-weight: 700; color: var(--accent-pk); }
  .verdict.bad .vt { color: #c0392b; }
  .vc { margin: 0; font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.55; }

  .controls { display: grid; }
  label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  label span { color: var(--text-secondary); }
  label b { color: var(--accent-pk); }
  input[type='range'] { grid-column: 1 / -1; width: 100%; accent-color: var(--accent-pk); }
  input[type='range']:disabled { opacity: 0.4; }

  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: 0; line-height: 1.55; }
  .hint strong { color: var(--text-secondary); }

  @media (max-width: 520px) { .gauges { grid-template-columns: 1fr; } }
</style>
