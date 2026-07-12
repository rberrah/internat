<script>
  // @ts-nocheck
  // Hémostase primaire en 3 temps (adhésion → activation → agrégation) : on sélectionne
  // une pathologie ou un antiplaquettaire, le schéma montre l'étape bloquée et le
  // retentissement biologique (numération, PFA-100, ristocétine, temps de saignement).

  let cond = 'normal';
  let plaq = 250; // numération plaquettaire (G/L) — normale 150–400

  // step : 0 = adhésion, 1 = activation, 2 = agrégation, null = aucune, 'nb' = défaut quantitatif
  const CONDS = [
    {
      id: 'normal', label: 'Normal', step: null, plaq: 250,
      cible: '—',
      risto: 'normale', epi: 'N', adp: 'N', sev: 0,
      meca: 'Les trois temps se déroulent : le facteur Willebrand ancre la plaquette (GPIb) au collagène sous-endothélial, la plaquette s’active et sécrète ADP + TXA₂, puis GPIIb/IIIa lie le fibrinogène et forme le clou plaquettaire.'
    },
    {
      id: 'thrombopenie', label: 'Thrombopénie', step: 'nb', plaq: 30,
      cible: 'nombre de plaquettes',
      risto: 'normale', epi: 'NI', adp: 'NI', sev: 0,
      meca: 'Les plaquettes sont qualitativement normales mais trop peu nombreuses : le clou plaquettaire ne peut pas se constituer. Le PFA-100 n’est pas interprétable sous 100 G/L. Purpura pétéchial, saignement cutanéo-muqueux.'
    },
    {
      id: 'willebrand', label: 'Maladie de Willebrand', step: 0, plaq: 250,
      cible: 'facteur Willebrand (ligand de GPIb)',
      risto: 'DIMINUÉE', epi: '↑↑', adp: '↑↑', sev: 2,
      meca: 'Le vWF manque : la plaquette ne peut plus s’ancrer au sous-endothélium via GPIb. Maladie hémorragique constitutionnelle la plus fréquente (autosomique). Le vWF transportant le FVIII, celui-ci baisse aussi → TCA parfois allongé. Agrégation à la ristocétine diminuée. Traitement : desmopressine (type 1) ou concentrés de vWF.'
    },
    {
      id: 'thrombopathie', label: 'Thrombopathie (Glanzmann)', step: 2, plaq: 250,
      cible: 'GPIIb/IIIa (déficit constitutionnel)',
      risto: 'normale', epi: '↑↑', adp: '↑↑', sev: 3,
      meca: 'Déficit constitutionnel en GPIIb/IIIa : plaquettes normales en nombre, mais agrégation ABOLIE avec tous les agonistes (ADP, collagène, acide arachidonique) — SAUF l’agglutination à la ristocétine, conservée car GPIb est intact. C’est le signe qui la distingue du Willebrand. (À l’inverse, le Bernard-Soulier touche GPIb → défaut d’ADHÉSION, avec thrombopénie et plaquettes géantes.)'
    },
    {
      id: 'aspirine', label: 'Aspirine (COX-1)', step: 1, plaq: 250,
      cible: 'cyclo-oxygénase 1 → TXA₂',
      risto: 'normale', epi: '↑', adp: 'N', sev: 1,
      meca: 'Acétylation IRRÉVERSIBLE de la COX-1 : plus de thromboxane A₂, donc défaut d’amplification de l’activation. La plaquette étant anucléée, l’effet dure toute sa vie (7–10 j) → arrêt 5–7 j avant une chirurgie. Agrégation à l’acide arachidonique abolie. PFA-100 : collagène/épinéphrine allongé, collagène/ADP normal.'
    },
    {
      id: 'clopidogrel', label: 'Clopidogrel (P2Y12)', step: 1, plaq: 250,
      cible: 'récepteur P2Y12 de l’ADP',
      risto: 'normale', epi: 'N', adp: 'N', sev: 1,
      meca: 'Blocage IRRÉVERSIBLE du récepteur P2Y12 : l’ADP libéré par les granules denses ne peut plus amplifier l’activation. PRODROGUE activée par le CYP2C19 → les métaboliseurs lents sont non-répondeurs (et interaction avec l’oméprazole). Le PFA-100 est PEU SENSIBLE au clopidogrel : on l’explore par agrégométrie à l’ADP ou test VASP. Alternatives : prasugrel (irréversible), ticagrelor (réversible, non prodrogue).'
    },
    {
      id: 'antigp', label: 'Anti-GPIIb/IIIa', step: 2, plaq: 250,
      cible: 'GPIIb/IIIa (voie finale commune)',
      risto: 'normale', epi: '↑↑', adp: '↑↑', sev: 3,
      meca: 'Abciximab, eptifibatide, tirofiban : blocage de la VOIE FINALE COMMUNE — l’agrégation est abolie quel que soit l’agoniste. Administration IV, en SCA / angioplastie. Effet immédiat et puissant. Risque de thrombopénie aiguë (surtout abciximab) : contrôler la numération dans les heures qui suivent.'
    }
  ];

  $: C = CONDS.find((c) => c.id === cond);
  const pick = (c) => { cond = c.id; plaq = c.plaq; };

  // ── retentissement biologique ──
  // Le PFA-100 n'est pas interprétable en dessous de 100 G/L de plaquettes.
  $: pfaOk = plaq >= 100;
  $: epi = pfaOk ? C.epi : 'NI';
  $: adp = pfaOk ? C.adp : 'NI';

  // Le temps de saignement s'allonge quand les plaquettes chutent sous ~100 G/L
  // ET/OU en cas d'anomalie fonctionnelle : on retient la plus sévère des deux.
  $: sevNb = plaq >= 100 ? 0 : plaq >= 50 ? 1 : plaq >= 20 ? 2 : 3;
  $: sev = Math.max(sevNb, C.sev);
  const TS = ['normal (4–8 min)', 'modérément allongé', 'allongé', 'très allongé'];
  $: tsTxt = TS[sev];

  $: risque =
    plaq >= 150 ? { txt: 'numération normale (150–400 G/L)', cls: 'ok' }
    : plaq >= 50 ? { txt: 'thrombopénie — pas de saignement spontané', cls: 'warn' }
    : plaq >= 20 ? { txt: 'saignement provoqué — transfuser avant un geste invasif (seuil 50 G/L)', cls: 'warn' }
    : { txt: 'RISQUE HÉMORRAGIQUE SPONTANÉ — transfusion prophylactique (seuil 10–20 G/L)', cls: 'bad' };

  // étape bloquée
  $: blocked = C.step;
  const isKo = (i, b) => b === 'nb' || b === i;          // étape elle-même touchée
  const isOff = (i, b) => b !== null && b !== 'nb' && i > b; // étapes en aval, jamais atteintes

  // nombre de plaquettes dessinées dans le clou (reflète la numération)
  $: nPlt = Math.max(1, Math.min(5, Math.round(plaq / 60)));

  // ── géométrie ──
  const W = 480, H = 250;
  const COLW = 150, GAP = 12;
  const colX = (i) => 6 + i * (COLW + GAP);
  const WALL = 196; // ligne du sous-endothélium
  const STEPS = [
    { t: '1. Adhésion', s: 'GPIb — vWF — collagène' },
    { t: '2. Activation', s: 'ADP (P2Y12) · TXA₂ (COX-1)' },
    { t: '3. Agrégation', s: 'GPIIb/IIIa — fibrinogène' }
  ];
  // plaquette activée : contour étoilé (émission de pseudopodes)
  const spiky = (cx, cy, r) =>
    Array.from({ length: 12 }, (_, i) => {
      const a = (i / 12) * Math.PI * 2;
      const rr = i % 2 ? r * 1.5 : r;
      return `${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`;
    }).join(' ');
</script>

<div class="viz">
  <div class="picker">
    {#each CONDS as c}
      <button class:on={cond === c.id} on:click={() => pick(c)}>{c.label}</button>
    {/each}
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Les trois temps de l'hémostase primaire et l'étape bloquée selon la pathologie ou le médicament">
    {#each STEPS as st, i}
      <g class:off={isOff(i, blocked)}>
        <rect x={colX(i)} y="24" width={COLW} height={168} rx="8" class="panel" class:pko={isKo(i, blocked)} />
        <text x={colX(i) + COLW / 2} y="15" class="steptitle">{st.t}</text>
        <text x={colX(i) + COLW / 2} y="40" class="stepsub">{st.s}</text>

        <!-- paroi : sous-endothélium (collagène) exposé par la brèche -->
        <rect x={colX(i) + 8} y={WALL - 6} width={COLW - 16} height="14" rx="2" class="subendo" />
        <text x={colX(i) + COLW / 2} y={WALL + 18} class="wall">sous-endothélium (collagène)</text>

        {#if i === 0}
          <!-- vWF en pont entre le collagène et GPIb -->
          <path d={`M${colX(i) + 40},${WALL - 6} C${colX(i) + 46},${WALL - 26} ${colX(i) + 62},${WALL - 30} ${colX(i) + 70},${WALL - 44}`} class="vwf" />
          <text x={colX(i) + 30} y={WALL - 34} class="tag vwftag">vWF</text>
          <ellipse cx={colX(i) + 78} cy={WALL - 52} rx="17" ry="11" class="plt" />
          <text x={colX(i) + 108} y={WALL - 50} class="tag">GPIb</text>
        {:else if i === 1}
          <!-- plaquette activée : changement de forme + sécrétion des granules -->
          <polygon points={spiky(colX(i) + 74, WALL - 44, 11)} class="plt act" />
          <circle cx={colX(i) + 44} cy={WALL - 76} r="3.5" class="gran adp" />
          <circle cx={colX(i) + 62} cy={WALL - 88} r="3.5" class="gran adp" />
          <circle cx={colX(i) + 100} cy={WALL - 80} r="3.5" class="gran txa" />
          <circle cx={colX(i) + 114} cy={WALL - 66} r="3.5" class="gran txa" />
          <text x={colX(i) + 40} y={WALL - 96} class="tag adptag">ADP</text>
          <text x={colX(i) + 108} y={WALL - 92} class="tag txatag">TXA₂</text>
        {:else}
          <!-- clou plaquettaire : ponts de fibrinogène entre GPIIb/IIIa -->
          {#each Array.from({ length: nPlt }) as _, j}
            {@const cx = colX(i) + 34 + (j % 3) * 34}
            {@const cy = WALL - 30 - Math.floor(j / 3) * 34}
            {#if j > 0}
              <line
                x1={colX(i) + 34 + ((j - 1) % 3) * 34}
                y1={WALL - 30 - Math.floor((j - 1) / 3) * 34}
                x2={cx} y2={cy} class="fg" />
            {/if}
            <polygon points={spiky(cx, cy, 9)} class="plt act" />
          {/each}
          <text x={colX(i) + COLW / 2} y={WALL - 96} class="tag fgtag">fibrinogène</text>
        {/if}

        {#if isKo(i, blocked)}
          <g class="cross">
            <line x1={colX(i) + 34} y1="58" x2={colX(i) + COLW - 34} y2="180" />
            <line x1={colX(i) + COLW - 34} y1="58" x2={colX(i) + 34} y2="180" />
          </g>
          <rect x={colX(i) + 22} y="108" width={COLW - 44} height="22" rx="5" class="kobadge" />
          <text x={colX(i) + COLW / 2} y="123" class="kotxt">
            {blocked === 'nb' ? 'PLAQUETTES ↓' : 'BLOQUÉ'}
          </text>
        {/if}
      </g>
      {#if i < 2}
        <path d={`M${colX(i) + COLW + 1},108 l9,5 l-9,5 z`} class="arrow" class:dim={blocked !== null && blocked !== 'nb' && i >= blocked} />
      {/if}
    {/each}
  </svg>

  <div class="stats">
    <span class="pill" class:alert={plaq < 50}>plaquettes = {plaq} G/L</span>
    <span class="pill" class:alert={sev >= 2}>temps de saignement : {tsTxt}</span>
    <span class="pill" class:alert={epi === '↑↑'}>PFA coll/épi : {epi === 'N' ? 'normal (84–160 s)' : epi === 'NI' ? 'non interprétable' : epi}</span>
    <span class="pill" class:alert={adp === '↑↑'}>PFA coll/ADP : {adp === 'N' ? 'normal (68–121 s)' : adp === 'NI' ? 'non interprétable' : adp}</span>
    <span class="pill" class:alert={C.risto !== 'normale'}>ristocétine : {C.risto}</span>
  </div>

  <p class="verdict {risque.cls}"><strong>Numération :</strong> {risque.txt}</p>
  <p class="meca"><strong>Cible : {C.cible}.</strong> {C.meca}</p>

  <div class="controls">
    <label>Numération plaquettaire <span>{plaq} G/L</span>
      <input type="range" min="5" max="400" step="5" bind:value={plaq} /></label>
  </div>

  <p class="hint">Choisissez une pathologie ou un antiplaquettaire : l’étape bloquée est barrée et tout ce qui est en aval ne se produit plus. Descendez ensuite la numération pour retrouver les seuils 50 G/L (geste invasif) et 20 G/L (saignement spontané).</p>
</div>

<style>
  .viz { border: 1px solid var(--border-subtle); border-radius: var(--radius, 8px); padding: var(--space-4); background: var(--bg-tertiary); }
  svg { width: 100%; height: auto; display: block; }
  .picker { display: flex; flex-wrap: wrap; gap: var(--space-2); margin-bottom: var(--space-3); }
  .picker button { font-family: var(--font-mono); font-size: var(--text-xs); padding: 4px 10px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 999px; cursor: pointer; color: var(--text-secondary); }
  .picker button:hover { border-color: var(--accent-pk); color: var(--accent-pk); }
  .picker button.on { background: var(--accent-pk); color: #fff; border-color: var(--accent-pk); font-weight: 700; }
  .panel { fill: var(--bg-primary); stroke: var(--border-subtle); stroke-width: 1; }
  .panel.pko { stroke: #c0392b; stroke-width: 1.6; }
  g.off { opacity: 0.28; }
  .steptitle { fill: var(--text-primary); font-family: var(--font-mono); font-size: 11px; font-weight: 700; text-anchor: middle; }
  .stepsub { fill: var(--text-muted); font-family: var(--font-mono); font-size: 8.5px; text-anchor: middle; }
  .subendo { fill: color-mix(in srgb, var(--accent-pd) 45%, var(--bg-tertiary)); stroke: var(--accent-pd); stroke-width: 1; }
  .wall { fill: var(--text-muted); font-family: var(--font-mono); font-size: 8px; text-anchor: middle; }
  .plt { fill: color-mix(in srgb, var(--accent-pk) 55%, var(--bg-tertiary)); stroke: var(--accent-pk); stroke-width: 1.4; }
  .plt.act { fill: color-mix(in srgb, var(--accent-pk) 30%, var(--bg-tertiary)); }
  .vwf { fill: none; stroke: var(--accent-ai); stroke-width: 2.4; stroke-linecap: round; }
  .fg { stroke: var(--accent-ai); stroke-width: 2.6; stroke-linecap: round; }
  .gran { stroke: none; }
  .gran.adp { fill: var(--accent-ai); }
  .gran.txa { fill: var(--accent-pd); }
  .tag { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 8.5px; font-weight: 700; text-anchor: middle; }
  .vwftag, .fgtag, .adptag { fill: var(--accent-ai); }
  .txatag { fill: var(--accent-pd); }
  .arrow { fill: var(--border-strong); }
  .arrow.dim { fill: var(--border-subtle); }
  .cross line { stroke: #c0392b; stroke-width: 3; stroke-linecap: round; opacity: 0.75; }
  .kobadge { fill: #c0392b; }
  .kotxt { fill: #fff; font-family: var(--font-mono); font-size: 9.5px; font-weight: 700; text-anchor: middle; letter-spacing: 0.04em; }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; margin: var(--space-3) 0 var(--space-2); }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.alert { background: color-mix(in srgb, #c0392b 15%, var(--bg-primary)); color: #c0392b; }
  .verdict { font-size: var(--text-xs); line-height: 1.5; margin: 0 0 var(--space-2); padding: var(--space-2) var(--space-3); border-radius: var(--radius); border-left: 3px solid var(--accent-pk); background: var(--bg-primary); color: var(--text-secondary); font-family: var(--font-mono); }
  .verdict.warn { border-left-color: var(--accent-pd); }
  .verdict.bad { border-left-color: #c0392b; color: #c0392b; }
  .verdict strong { color: var(--text-primary); }
  .verdict.bad strong { color: #c0392b; }
  .meca { font-size: var(--text-sm); line-height: 1.55; color: var(--text-secondary); margin: 0; padding: var(--space-3) var(--space-4); border: 1px solid var(--border-subtle); border-radius: var(--radius); background: var(--bg-primary); }
  .meca strong { color: var(--accent-pk); }
  .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--space-2) var(--space-4); margin-top: var(--space-3); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  input[type='range'] { width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: var(--space-3) 0 0; text-align: center; line-height: 1.5; }
</style>
