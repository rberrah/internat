<script>
  // @ts-nocheck
  // Cycle du Plasmodium, étape par étape : anophèle → phase hépatique (± hypnozoïtes)
  // → phase érythrocytaire (accès fébriles) → gamétocytes repris par le moustique.
  // Pour chaque étape : le signe clinique et les antipaludiques qui agissent LÀ.

  let step = 0;   // 0 → 6
  let esp = 'falciparum';

  const ESPECES = {
    falciparum: {
      label: 'P. falciparum', hypno: false, grave: true,
      fievre: 'Tierce maligne (~48 h), souvent irrégulière ou continue au début',
      incub: '7–12 j (jamais < 7 j ; > 95 % des accès dans les 2 mois du retour)',
      note: 'Espèce MORTELLE : c’est elle qui fait le neuropaludisme. PAS d’hypnozoïte → pas de rechute tardive (mais recrudescences si le traitement est insuffisant). Afrique subsaharienne +++.'
    },
    vivax: {
      label: 'P. vivax', hypno: true, grave: false,
      fievre: 'Tierce bénigne (48 h)',
      incub: '11–15 j, parfois plusieurs mois',
      note: 'HYPNOZOÏTES → rechutes (reviviscences) jusqu’à 3–5 ans. Envahit les réticulocytes et nécessite l’antigène Duffy (d’où sa rareté en Afrique de l’Ouest). Chloroquino-résistance en Océanie/Indonésie. Risque de rupture de rate.'
    },
    ovale: {
      label: 'P. ovale', hypno: true, grave: false,
      fievre: 'Tierce bénigne (48 h)',
      incub: '15 j à plusieurs mois',
      note: 'HYPNOZOÏTES → rechutes jusqu’à 5 ans. Afrique intertropicale, surtout de l’Ouest. Évolution bénigne.'
    },
    malariae: {
      label: 'P. malariae', hypno: false, grave: false,
      fievre: 'QUARTE (72 h)',
      incub: '18–21 j',
      note: 'PAS d’hypnozoïte — mais recrudescences très tardives (jusqu’à 20–40 ans) par persistance érythrocytaire à bas bruit. Complication propre : néphropathie glomérulaire (syndrome néphrotique).'
    }
  };
  $: sp = ESPECES[esp];

  $: STEPS = [
    {
      t: 'Piqûre de l’anophèle femelle',
      d: 'Seule la femelle est hématophage ; elle pique la nuit, du crépuscule à l’aube. Elle injecte avec sa salive les SPOROZOÏTES, qui ne restent que ~30 min dans le sang avant de gagner le foie.',
      c: 'Aucun symptôme — c’est le début de l’incubation.',
      m: ['Aucun médicament n’agit sur le sporozoïte circulant.', 'PRÉVENTION VECTORIELLE : moustiquaire imprégnée de pyréthrinoïdes, répulsifs cutanés (DEET), vêtements couvrants le soir.'],
      ok: true
    },
    {
      t: 'Phase hépatique (schizogonie exo-érythrocytaire)',
      d: 'Le sporozoïte pénètre l’hépatocyte et s’y multiplie en schizonte hépatique, qui libère des milliers de mérozoïtes. Durée : 7 à 15 j selon l’espèce.',
      c: `CLINIQUEMENT MUETTE : c’est l’incubation (${sp.incub}). Une fièvre survenant moins de 7 jours après l’arrivée en zone d’endémie n’est donc PAS un paludisme.`,
      m: ['SCHIZONTICIDES TISSULAIRES (prophylaxie causale) : atovaquone-proguanil, primaquine, tafénoquine.', 'Les schizonticides purement SANGUINS (chloroquine, méfloquine, doxycycline) n’agissent pas ici : c’est pourquoi il faut les poursuivre 4 semaines après le retour, contre 7 jours seulement pour l’atovaquone-proguanil.'],
      ok: true
    },
    {
      t: 'Hypnozoïtes — formes dormantes',
      d: 'Chez P. vivax et P. ovale UNIQUEMENT, une partie des parasites reste quiescente dans l’hépatocyte : ce sont les hypnozoïtes. Ils se réveillent des mois ou des années plus tard.',
      c: sp.hypno
        ? 'RECHUTES (reviviscences) tardives, longtemps après le retour de la zone d’endémie.'
        : `${sp.label} N’A PAS D’HYPNOZOÏTE → aucune rechute tardive à craindre. Cette étape n’existe pas pour cette espèce.`,
      m: sp.hypno
        ? ['CURE RADICALE ANTI-HYPNOZOÏTE : PRIMAQUINE 14 j (ou tafénoquine en dose unique).', 'DÉPISTAGE OBLIGATOIRE DU DÉFICIT EN G6PD avant de la prescrire : risque d’hémolyse aiguë.', 'Sans cure radicale, le traitement de l’accès (schizonticide sanguin) ne fait que blanchir le sang : les rechutes reviendront.']
        : ['Sans objet pour cette espèce : la primaquine n’a pas d’indication de cure radicale ici.'],
      ok: sp.hypno
    },
    {
      t: 'Passage dans le sang — invasion des hématies',
      d: 'Les mérozoïtes hépatiques sont déversés dans la circulation et pénètrent les globules rouges. C’est le début de la phase érythrocytaire, la seule qui rend malade.',
      c: 'Premiers signes : fièvre, céphalées, myalgies, troubles digestifs — un tableau « pseudo-grippal » trompeur. Toute fièvre au retour des tropiques est un paludisme jusqu’à preuve du contraire.',
      m: ['SCHIZONTICIDES SANGUINS : dérivés de l’artémisinine, chloroquine, quinine, atovaquone-proguanil.', 'DIAGNOSTIC EN URGENCE : frottis sanguin + goutte épaisse (résultat en moins de 2 h), test de diagnostic rapide (HRP2), PCR.'],
      ok: true
    },
    {
      t: 'Schizogonie érythrocytaire — l’accès fébrile',
      d: 'Dans l’hématie : trophozoïte → schizonte → éclatement du globule rouge et libération de nouveaux mérozoïtes qui réinfectent d’autres hématies. C’est l’éclatement SYNCHRONE des hématies qui donne l’accès fébrile.',
      c: `Accès palustre : frissons → chaleur → sueurs. Périodicité : ${sp.fievre}. Anémie hémolytique, THROMBOPÉNIE (quasi constante), splénomégalie, ictère.`,
      m: ['1re intention : COMBINAISON À BASE D’ARTÉMISININE (ACT) — artéméther-luméfantrine, artésunate-amodiaquine.', 'Alternatives : atovaquone-proguanil, quinine.', 'CHLOROQUINE : réservée aux espèces/zones sensibles — P. falciparum y est très largement RÉSISTANT.'],
      ok: true
    },
    {
      t: 'Accès grave — neuropaludisme',
      d: 'Propre à P. falciparum : les hématies parasitées expriment PfEMP1 et adhèrent à l’endothélium (cytoadhérence) → séquestration dans la microcirculation cérébrale.',
      c: sp.grave
        ? 'NEUROPALUDISME : troubles de conscience, coma, convulsions. Autres critères de gravité (OMS) : détresse respiratoire, acidose lactique, HYPOGLYCÉMIE, anémie sévère, insuffisance rénale, collapsus, parasitémie élevée. URGENCE VITALE.'
        : `${sp.label} ne donne pas de neuropaludisme. Seul P. falciparum le provoque.`,
      m: sp.grave
        ? ['ARTÉSUNATE IV en 1re intention — il réduit la mortalité par rapport à la quinine (essais SEAQUAMAT et AQUAMAT).', 'Quinine IV en alternative. Réanimation.', 'Surveiller l’anémie hémolytique RETARDÉE post-artésunate (entre J7 et J21).']
        : ['Sans objet : pas de forme grave neurologique pour cette espèce.'],
      ok: sp.grave
    },
    {
      t: 'Gamétocytes — retour au moustique',
      d: 'Certains mérozoïtes se différencient en gamétocytes mâles et femelles. Ils ne rendent PAS malade, mais sont ingérés par l’anophèle lors d’un repas sanguin : chez le moustique se déroule alors le cycle sexué (sporogonie) qui reconstitue des sporozoïtes dans les glandes salivaires. Le cycle est bouclé.',
      c: 'Aucun symptôme — mais le sujet est CONTAGIEUX pour le moustique : c’est le réservoir de la transmission.',
      m: ['GAMÉTOCYTOCIDE : PRIMAQUINE en dose unique faible (0,25 mg/kg) pour bloquer la transmission de P. falciparum.', 'Les dérivés de l’artémisinine réduisent aussi les gamétocytes jeunes.'],
      ok: true
    }
  ];
  $: S = STEPS[step];

  const prev = () => (step = Math.max(0, step - 1));
  const next = () => (step = Math.min(6, step + 1));

  // ── géométrie : flux linéaire + 2 branches + arc de retour (cycle bouclé) ──
  const W = 480, H = 218;
  const NODES = [
    { i: 0, x: 48, y: 62, l1: 'Anophèle', l2: 'sporozoïtes' },
    { i: 1, x: 145, y: 62, l1: 'FOIE', l2: 'schizogonie' },
    { i: 3, x: 240, y: 62, l1: 'Hématies', l2: 'invasion' },
    { i: 4, x: 335, y: 62, l1: 'Cycle éryth.', l2: 'accès fébrile' },
    { i: 6, x: 432, y: 62, l1: 'Gamétocytes', l2: 'transmission' }
  ];
  const BRANCHES = [
    { i: 2, x: 145, y: 158, l1: 'Hypnozoïtes', l2: 'rechutes' },
    { i: 5, x: 335, y: 158, l1: 'Neuropaludisme', l2: 'forme grave' }
  ];
  const NW = 82, NH = 34, BW = 96;
  // une branche est « réelle » ou non selon l'espèce
  $: live = { 2: sp.hypno, 5: sp.grave };
</script>

<div class="viz">
  <div class="picker">
    {#each Object.entries(ESPECES) as [k, v]}
      <button class:on={esp === k} on:click={() => (esp = k)}>{v.label}</button>
    {/each}
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Cycle du Plasmodium : anophèle, phase hépatique, hypnozoïtes, phase érythrocytaire, neuropaludisme, gamétocytes">
    <!-- arc de retour : le cycle se boucle chez le moustique -->
    <path d="M432,44 L432,26 Q432,16 422,16 L58,16 Q48,16 48,26 L48,40" class="loop" />
    <path d="M44,40 L52,40 L48,48 Z" class="loophead" />
    <text x="240" y="12" class="looplbl">sporogonie chez l’anophèle → nouveaux sporozoïtes</text>

    <!-- flèches entre les nœuds principaux -->
    {#each [[89, 104], [186, 199], [281, 294], [376, 391]] as [a, b]}
      <line x1={a} y1="62" x2={b - 5} y2="62" class="arr" />
      <path d={`M${b - 6},58 L${b},62 L${b - 6},66 Z`} class="arrh" />
    {/each}

    <!-- connecteurs vers les branches -->
    {#each BRANCHES as br}
      <line x1={br.x} y1="79" x2={br.x} y2={br.y - 17} class="arr br" class:dead={!live[br.i]} />
      <path d={`M${br.x - 4},${br.y - 18} L${br.x + 4},${br.y - 18} L${br.x},${br.y - 12} Z`} class="arrh" class:dead={!live[br.i]} />
    {/each}

    {#each [...NODES, ...BRANCHES] as n}
      {@const isBr = n.i === 2 || n.i === 5}
      {@const w = isBr ? BW : NW}
      {@const dead = isBr && !live[n.i]}
      <g class="node" class:cur={step === n.i} class:dead>
        <rect x={n.x - w / 2} y={n.y - NH / 2} width={w} height={NH} rx="7" />
        <text x={n.x} y={n.y - 2} class="nl1">{n.l1}</text>
        <text x={n.x} y={n.y + 10} class="nl2">{dead ? 'absent' : n.l2}</text>
        <circle cx={n.x - w / 2} cy={n.y - NH / 2} r="8" class="num" />
        <text x={n.x - w / 2} y={n.y - NH / 2 + 3} class="numtxt">{n.i + 1}</text>
      </g>
    {/each}
  </svg>

  <div class="nav">
    <button on:click={prev} disabled={step === 0}>◀ Précédent</button>
    <span class="counter">Étape {step + 1} / 7</span>
    <button on:click={next} disabled={step === 6}>Suivant ▶</button>
  </div>

  <div class="controls">
    <label>Avancer dans le cycle <span>étape {step + 1}</span>
      <input type="range" min="0" max="6" step="1" bind:value={step} /></label>
  </div>

  <div class="detail" class:na={!S.ok}>
    <h4>{S.t}</h4>
    <p class="d">{S.d}</p>
    <p class="c" class:alert={!S.ok || step === 5}><strong>Clinique :</strong> {S.c}</p>
    <div class="drugs">
      <span class="dh">Antipaludiques actifs à cette étape</span>
      <ul>{#each S.m as x}<li>{x}</li>{/each}</ul>
    </div>
  </div>

  <div class="stats">
    <span class="pill">{sp.label}</span>
    <span class="pill" class:alert={!sp.hypno}>hypnozoïte : {sp.hypno ? 'OUI → rechutes' : 'NON → pas de rechute'}</span>
    <span class="pill" class:alert={sp.grave}>{sp.grave ? 'neuropaludisme possible' : 'pas de forme neurologique grave'}</span>
    <span class="pill">fièvre : {sp.fievre.split('(')[0].trim()}</span>
  </div>
  <p class="esp">{sp.note}</p>

  <p class="hint">Avancez étape par étape, puis changez d’espèce : comparez P. falciparum (pas d’hypnozoïte, donc pas de rechute tardive — mais le neuropaludisme) et P. vivax / P. ovale (hypnozoïtes dormants dans le foie, donc rechutes, d’où la primaquine après contrôle de la G6PD).</p>
</div>

<style>
  .viz { border: 1px solid var(--border-subtle); border-radius: var(--radius, 8px); padding: var(--space-4); background: var(--bg-tertiary); }
  svg { width: 100%; height: auto; display: block; }
  .picker { display: flex; flex-wrap: wrap; gap: var(--space-2); margin-bottom: var(--space-3); }
  .picker button { font-family: var(--font-mono); font-size: var(--text-xs); padding: 4px 12px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 999px; cursor: pointer; color: var(--text-secondary); font-style: italic; }
  .picker button:hover { border-color: var(--accent-pk); color: var(--accent-pk); }
  .picker button.on { background: var(--accent-pk); color: #fff; border-color: var(--accent-pk); font-weight: 700; }
  .loop { fill: none; stroke: var(--border-strong); stroke-width: 1.4; stroke-dasharray: 4 3; }
  .loophead { fill: var(--border-strong); }
  .looplbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 8.5px; text-anchor: middle; }
  .arr { stroke: var(--border-strong); stroke-width: 1.4; }
  .arrh { fill: var(--border-strong); }
  .arr.br { stroke-dasharray: 3 3; }
  .arr.dead, .arrh.dead { stroke: var(--border-subtle); fill: var(--border-subtle); }
  .node rect { fill: var(--bg-primary); stroke: var(--border-strong); stroke-width: 1.2; }
  .node .nl1 { fill: var(--text-primary); font-family: var(--font-mono); font-size: 10px; font-weight: 700; text-anchor: middle; }
  .node .nl2 { fill: var(--text-muted); font-family: var(--font-mono); font-size: 8px; text-anchor: middle; }
  .node .num { fill: var(--border-strong); }
  .node .numtxt { fill: var(--bg-primary); font-family: var(--font-mono); font-size: 9px; font-weight: 700; text-anchor: middle; }
  .node.cur rect { fill: color-mix(in srgb, var(--accent-pk) 16%, var(--bg-primary)); stroke: var(--accent-pk); stroke-width: 2; }
  .node.cur .nl1 { fill: var(--accent-pk); }
  .node.cur .num { fill: var(--accent-pk); }
  .node.dead rect { stroke: var(--border-subtle); stroke-dasharray: 4 3; }
  .node.dead .nl1, .node.dead .nl2 { fill: var(--text-muted); }
  .node.dead .num { fill: var(--border-subtle); }
  .node.cur.dead rect { stroke: #c0392b; stroke-width: 2; fill: color-mix(in srgb, #c0392b 8%, var(--bg-primary)); }
  .node.cur.dead .nl1 { fill: #c0392b; }
  .node.cur.dead .num { fill: #c0392b; }
  .nav { display: flex; align-items: center; justify-content: center; gap: var(--space-4); margin: var(--space-3) 0 var(--space-2); }
  .nav button { font-family: var(--font-mono); font-size: var(--text-xs); padding: 5px 12px; border: 1px solid var(--border-strong); background: var(--bg-primary); color: var(--text-secondary); border-radius: var(--radius); cursor: pointer; }
  .nav button:hover:not(:disabled) { border-color: var(--accent-pk); color: var(--accent-pk); }
  .nav button:disabled { opacity: 0.35; cursor: default; }
  .counter { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-pk); font-weight: 700; }
  .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--space-2) var(--space-4); margin-top: var(--space-2); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  input[type='range'] { width: 100%; accent-color: var(--accent-pk); }
  .detail { margin-top: var(--space-3); border: 1px solid var(--border-subtle); border-left: 3px solid var(--accent-pk); border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: var(--bg-primary); }
  .detail.na { border-left-color: #c0392b; }
  .detail h4 { margin: 0 0 var(--space-2); font-size: var(--text-base); color: var(--accent-pk); }
  .detail.na h4 { color: #c0392b; }
  .detail .d { margin: 0 0 var(--space-2); font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.55; }
  .detail .c { margin: 0 0 var(--space-3); font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.55; padding: var(--space-2) var(--space-3); background: var(--bg-secondary); border-radius: var(--radius); }
  .detail .c.alert { color: #c0392b; background: color-mix(in srgb, #c0392b 8%, var(--bg-primary)); }
  .detail .c strong { color: var(--text-primary); }
  .detail .c.alert strong { color: #c0392b; }
  .dh { display: block; font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 4px; }
  .drugs ul { margin: 0; padding-left: 1.1em; }
  .drugs li { font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.5; margin-bottom: 3px; }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; margin: var(--space-3) 0 var(--space-2); }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.alert { background: color-mix(in srgb, #c0392b 15%, var(--bg-primary)); color: #c0392b; }
  .esp { font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.55; margin: 0; padding: var(--space-2) var(--space-3); border: 1px dashed var(--border-subtle); border-radius: var(--radius); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: var(--space-3) 0 0; text-align: center; line-height: 1.5; }
</style>
