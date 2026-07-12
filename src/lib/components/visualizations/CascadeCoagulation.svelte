<script>
  // @ts-nocheck
  // Cascade de la coagulation : on choisit un facteur déficitaire et on lit quel test s'allonge.
  // Voie intrinsèque (XII, XI, IX, VIII) → TCA ; voie extrinsèque (VII) → TQ/INR ; voie commune (X, V, II, I) → LES DEUX.

  let sel = 'VIII';
  let act = 5; // activité résiduelle du facteur, en % de la normale

  const facteurs = [
    {
      id: 'XII', nom: 'XII — Hageman', voie: 'intrinsèque', vitK: false,
      tq: false, tca: true, ampTQ: 0, ampTCA: 2.6,
      note: "Allonge le TCA, parfois de façon majeure, mais NE SAIGNE PAS : aucun risque hémorragique, aucune substitution. Piège classique d'un TCA isolément allongé chez un sujet asymptomatique (avec le PK et le KHPM)."
    },
    {
      id: 'XI', nom: 'XI — Rosenthal', voie: 'intrinsèque', vitK: false,
      tq: false, tca: true, ampTQ: 0, ampTCA: 1.4,
      note: "Hémophilie C (autosomique, fréquente chez les Ashkénazes) : saignements modérés, surtout provoqués (chirurgie, extraction dentaire)."
    },
    {
      id: 'IX', nom: 'IX — antihémophilique B', voie: 'intrinsèque', vitK: true,
      tq: false, tca: true, ampTQ: 0, ampTCA: 1.6,
      note: "Hémophilie B, récessive liée à l'X. Sévère si activité < 1 % (hémarthroses spontanées), modérée 1–5 %, mineure 5–40 %."
    },
    {
      id: 'VIII', nom: 'VIII — antihémophilique A', voie: 'intrinsèque', vitK: false,
      tq: false, tca: true, ampTQ: 0, ampTCA: 1.7,
      note: "Hémophilie A (récessive liée à l'X, la plus fréquente) OU maladie de Willebrand : le VWF transporte et protège le VIII, donc un déficit en VWF effondre aussi le VIII et allonge le TCA."
    },
    {
      id: 'VII', nom: 'VII — proconvertine', voie: 'extrinsèque', vitK: true,
      tq: true, tca: false, ampTQ: 34, ampTCA: 0,
      note: "Le SEUL facteur dont le déficit isolé allonge le TQ/INR en laissant le TCA normal. C'est aussi celui dont la demi-vie est la plus courte (~6 h) : il baisse en premier sous AVK, en carence en vitamine K et dans l'insuffisance hépatocellulaire débutante."
    },
    {
      id: 'X', nom: 'X — Stuart', voie: 'commune', vitK: true,
      tq: true, tca: true, ampTQ: 30, ampTCA: 1.5,
      note: "Voie commune : les DEUX tests s'allongent. Cible du fondaparinux et des anti-Xa directs (rivaroxaban, apixaban)."
    },
    {
      id: 'V', nom: 'V — proaccélérine', voie: 'commune', vitK: false,
      tq: true, tca: true, ampTQ: 30, ampTCA: 1.5,
      note: "Facteur clé du diagnostic différentiel : le V n'est PAS vitamine K-dépendant. TP bas + V BAS → insuffisance hépatocellulaire. TP bas + V NORMAL → carence en vitamine K ou AVK."
    },
    {
      id: 'II', nom: 'II — prothrombine', voie: 'commune', vitK: true,
      tq: true, tca: true, ampTQ: 30, ampTCA: 1.5,
      note: "La prothrombine (II) est activée en thrombine (IIa). Vitamine K-dépendante ; cible de la dabigatran et de l'héparine (via l'antithrombine)."
    },
    {
      id: 'I', nom: 'I — fibrinogène', voie: 'commune', vitK: false,
      tq: true, tca: true, ampTQ: 32, ampTCA: 1.6,
      note: "Les deux tests s'allongent quand le fibrinogène chute sous ~1 g/L (normale 2–4 g/L). Le temps de thrombine s'allonge aussi. Causes : CIVD, fibrinolyse, insuffisance hépatocellulaire, hypofibrinogénémie constitutionnelle."
    },
    {
      id: 'XIII', nom: 'XIII — stabilisant de la fibrine', voie: 'post-cascade', vitK: false,
      tq: false, tca: false, ampTQ: 0, ampTCA: 0,
      note: "PIÈGE MAJEUR : TQ et TCA NORMAUX malgré un authentique syndrome hémorragique (retard de cicatrisation, hémorragie du cordon). Le XIII n'intervient qu'après la formation du caillot. Diagnostic : solubilité du caillot dans l'urée 5 M."
    }
  ];

  $: f = facteurs.find((x) => x.id === sel) || facteurs[0];

  // Les tests ne s'allongent en pratique qu'en dessous de ~40 % d'activité du facteur.
  $: def = Math.max(0, (40 - act) / 40);
  $: tqSec = 12 + (f.tq ? f.ampTQ * Math.pow(def, 1.6) : 0);
  $: inr = tqSec / 12; // ISI = 1, témoin 12 s
  $: tp = 100 * Math.pow(12 / tqSec, 1.8); // TP approximatif (%)
  $: tca = 1 + (f.tca ? f.ampTCA * Math.pow(def, 1.3) : 0); // ratio malade / témoin
  $: tqLong = inr > 1.2;
  $: tcaLong = tca > 1.2;

  $: verdict = tqLong && tcaLong
    ? 'TQ ET TCA allongés → voie commune'
    : tqLong
      ? 'TQ/INR allongé SEUL → voie extrinsèque (VII)'
      : tcaLong
        ? 'TCA allongé SEUL → voie intrinsèque'
        : act >= 40
          ? 'Activité ≥ 40 % : les deux tests restent normaux'
          : 'TQ ET TCA NORMAUX malgré le déficit';

  // ── schéma ──
  const W = 520, H = 350;
  const nodes = [
    { id: 'XII', l: 'XII', x: 36, y: 30, w: 56 },
    { id: 'XI', l: 'XI', x: 36, y: 66, w: 56 },
    { id: 'IX', l: 'IX', x: 36, y: 102, w: 56 },
    { id: 'VIII', l: 'VIII', x: 112, y: 102, w: 56 },
    { id: 'VII', l: 'VII + FT', x: 376, y: 52, w: 96 },
    { id: 'X', l: 'X', x: 212, y: 186, w: 56 },
    { id: 'V', l: 'V', x: 288, y: 186, w: 44 },
    { id: 'II', l: 'II → IIa', x: 180, y: 228, w: 120 },
    { id: 'I', l: 'I fibrinogène', x: 178, y: 270, w: 124 },
    { id: 'FIB', l: 'Fibrine', x: 200, y: 312, w: 80 },
    { id: 'XIII', l: 'XIII', x: 320, y: 312, w: 56 }
  ];

  const flows = [
    { d: 'M64,54 L64,66', hot: ['XII'] },
    { d: 'M64,90 L64,102', hot: ['XII', 'XI'] },
    { d: 'M64,126 L64,152 L240,152 L240,186', hot: ['XII', 'XI', 'IX', 'VIII'] },
    { d: 'M424,76 L424,152 L240,152 L240,186', hot: ['VII'] },
    { d: 'M240,210 L240,228', hot: ['X', 'V'] },
    { d: 'M240,252 L240,270', hot: ['II'] },
    { d: 'M240,294 L240,312', hot: ['I'] }
  ];
  const cofactors = [
    { d: 'M112,114 L98,114', hot: ['VIII'] },
    { d: 'M288,198 L272,198', hot: ['V'] },
    { d: 'M320,324 L286,324', hot: ['XIII'] }
  ];

  function pick(id) {
    if (id === 'FIB') return;
    sel = id;
  }
  function keyPick(e, id) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      pick(id);
    }
  }
</script>

<div class="viz">
  <div class="picker">
    {#each facteurs as fx}
      <button class:on={sel === fx.id} on:click={() => (sel = fx.id)}>
        {fx.id}<em>{fx.voie.slice(0, 4)}.</em>
      </button>
    {/each}
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Cascade de la coagulation : voies intrinsèque, extrinsèque et commune, et tests explorateurs">
    <defs>
      <marker id="cc-a" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="var(--border-strong)" />
      </marker>
      <marker id="cc-h" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="#c0392b" />
      </marker>
    </defs>

    <!-- territoires des tests -->
    <rect x="14" y="22" width="180" height="120" rx="8" class="zone intr" class:live={tcaLong} />
    <rect x="344" y="22" width="160" height="84" rx="8" class="zone extr" class:live={tqLong} />
    <rect x="132" y="176" width="256" height="130" rx="8" class="zone comm" class:live={tqLong && tcaLong} />

    <text x="104" y="15" class="zlbl intr-t">VOIE INTRINSÈQUE · TCA</text>
    <text x="424" y="15" class="zlbl extr-t">VOIE EXTRINSÈQUE · TQ / INR</text>
    <text x="260" y="169" class="zlbl comm-t">VOIE COMMUNE · TQ + TCA</text>

    {#each flows as fl}
      <path d={fl.d} class="flow" class:hot={fl.hot.indexOf(sel) >= 0} marker-end={fl.hot.indexOf(sel) >= 0 ? 'url(#cc-h)' : 'url(#cc-a)'} />
    {/each}
    {#each cofactors as cf}
      <path d={cf.d} class="flow cof" class:hot={cf.hot.indexOf(sel) >= 0} marker-end={cf.hot.indexOf(sel) >= 0 ? 'url(#cc-h)' : 'url(#cc-a)'} />
    {/each}

    {#each nodes as n}
      {#if n.id === 'FIB'}
        <g class="node inert">
          <rect x={n.x} y={n.y} width={n.w} height="24" rx="5" />
          <text x={n.x + n.w / 2} y={n.y + 16}>{n.l}</text>
        </g>
      {:else}
        <g
          class="node"
          class:sel={sel === n.id}
          role="button"
          tabindex="0"
          aria-label={`Déficit en facteur ${n.id}`}
          on:click={() => pick(n.id)}
          on:keydown={(e) => keyPick(e, n.id)}
        >
          <rect x={n.x} y={n.y} width={n.w} height="24" rx="5" />
          <text x={n.x + n.w / 2} y={n.y + 16}>{n.l}</text>
        </g>
      {/if}
    {/each}

    <text x="285" y="248" class="tiny">thrombine</text>
    <text x="392" y="328" class="tiny">réticulation</text>
  </svg>

  <div class="tests">
    <div class="tcard" class:bad={tqLong}>
      <span>TQ / INR <em>voie extrinsèque + commune</em></span>
      <strong>{tqSec.toFixed(1)} s · INR {inr.toFixed(2)}</strong>
      <b>TP ≈ {tp.toFixed(0)} % — {tqLong ? 'ALLONGÉ' : 'normal'}</b>
    </div>
    <div class="tcard" class:bad={tcaLong}>
      <span>TCA <em>voie intrinsèque + commune</em></span>
      <strong>ratio M/T = {tca.toFixed(2)}</strong>
      <b>{tcaLong ? 'ALLONGÉ' : 'normal (ratio ≤ 1,2)'}</b>
    </div>
  </div>

  <div class="verdict">
    <p class="v" class:bad={tqLong || tcaLong}>{verdict}</p>
    <p class="nm">{f.nom}{#if f.vitK}<span class="vk">vitamine K-dépendant</span>{/if}</p>
    <p class="note">{f.note}</p>
  </div>

  <div class="sliders">
    <label>
      <span>Activité résiduelle du facteur {f.id}</span><b>{act} %</b>
      <input type="range" min="0" max="100" step="1" bind:value={act} />
    </label>
  </div>

  <p class="hint">
    Choisissez un facteur puis effondrez son activité : un déficit ne retentit sur les tests qu'en dessous de
    ~40 % d'activité. Retenez la règle : <strong>TCA seul</strong> = XII, XI, IX, VIII (et héparine) ·
    <strong>TQ seul</strong> = VII (AVK débutant, insuffisance hépatique débutante) ·
    <strong>les deux</strong> = voie commune (CIVD, insuffisance hépatocellulaire, AVK à dose efficace).
  </p>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); }
  .picker { display: flex; flex-wrap: wrap; gap: 4px; }
  .picker button { display: flex; flex-direction: column; align-items: center; min-width: 46px; padding: 4px 8px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 6px; cursor: pointer; color: var(--text-secondary); font-family: var(--font-mono); font-size: var(--text-xs); font-weight: 700; line-height: 1.2; }
  .picker button em { font-style: normal; font-weight: 400; font-size: 9px; color: var(--text-muted); }
  .picker button.on { background: var(--accent-pk); color: #fff; border-color: var(--accent-pk); }
  .picker button.on em { color: rgba(255, 255, 255, 0.85); }

  svg { width: 100%; height: auto; display: block; }
  .zone { fill: var(--bg-primary); stroke: var(--border-subtle); stroke-width: 1; }
  .intr { fill: color-mix(in srgb, var(--accent-ai) 8%, var(--bg-primary)); }
  .extr { fill: color-mix(in srgb, var(--accent-pd) 8%, var(--bg-primary)); }
  .comm { fill: color-mix(in srgb, var(--accent-pk) 8%, var(--bg-primary)); }
  .zone.live { stroke: #c0392b; stroke-width: 1.8; stroke-dasharray: 4 3; }
  .zlbl { font-family: var(--font-mono); font-size: 9px; text-anchor: middle; letter-spacing: 0.05em; font-weight: 700; }
  .intr-t { fill: var(--accent-ai); }
  .extr-t { fill: var(--accent-pd); }
  .comm-t { fill: var(--accent-pk); }

  .flow { fill: none; stroke: var(--border-strong); stroke-width: 1.6; }
  .flow.cof { stroke-dasharray: 4 3; }
  .flow.hot { stroke: #c0392b; stroke-width: 2.4; }

  .node { cursor: pointer; }
  .node.inert { cursor: default; }
  .node rect { fill: var(--bg-tertiary); stroke: var(--border-strong); stroke-width: 1.2; }
  .node text { fill: var(--text-primary); font-family: var(--font-mono); font-size: 11px; font-weight: 700; text-anchor: middle; }
  .node:hover rect { stroke: var(--accent-pk); }
  .node.sel rect { fill: color-mix(in srgb, #c0392b 16%, var(--bg-tertiary)); stroke: #c0392b; stroke-width: 2.2; }
  .node.sel text { fill: #c0392b; }
  .node.inert rect { fill: var(--bg-secondary); stroke-dasharray: 3 2; }
  .node:focus { outline: none; }
  .node:focus-visible rect { stroke: var(--accent-pk); stroke-width: 2.4; }
  .tiny { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; }

  .tests { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-2); }
  .tcard { border: 1px solid var(--border-subtle); border-radius: 8px; padding: var(--space-2) var(--space-3); background: var(--bg-primary); text-align: center; }
  .tcard span { display: block; font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; }
  .tcard span em { display: block; font-style: normal; text-transform: none; letter-spacing: 0; font-size: 9px; }
  .tcard strong { display: block; font-size: var(--text-base); color: var(--accent-pk); font-family: var(--font-mono); }
  .tcard b { font-size: 10px; color: var(--text-secondary); font-weight: 400; font-family: var(--font-mono); }
  .tcard.bad { border-color: #c0392b; background: color-mix(in srgb, #c0392b 8%, var(--bg-primary)); }
  .tcard.bad strong, .tcard.bad b { color: #c0392b; font-weight: 700; }

  .verdict { border: 1px solid var(--border-subtle); border-left: 3px solid var(--accent-pk); border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: var(--bg-primary); }
  .v { margin: 0 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-sm); font-weight: 700; color: var(--accent-pk); }
  .v.bad { color: #c0392b; }
  .nm { margin: 0 0 4px; font-size: var(--text-sm); font-weight: 700; color: var(--text-primary); }
  .vk { margin-left: var(--space-2); font-family: var(--font-mono); font-size: 9px; font-weight: 700; padding: 2px 8px; border-radius: 999px; background: color-mix(in srgb, var(--accent-pd) 18%, var(--bg-primary)); color: var(--accent-pd); }
  .note { margin: 0; font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.5; }

  .sliders { display: grid; gap: 6px; }
  .sliders label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sliders span { color: var(--text-secondary); }
  .sliders b { color: var(--accent-pk); }
  .sliders input { grid-column: 1 / -1; width: 100%; accent-color: var(--accent-pk); }

  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: 0; line-height: 1.6; }
  .hint strong { color: var(--text-secondary); }

  @media (max-width: 520px) {
    .tests { grid-template-columns: 1fr; }
  }
</style>
