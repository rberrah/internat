<script>
  // @ts-nocheck
  // Interactions médicamenteuses par les cytochromes P450 (CYP3A4).
  // Simulation de la concentration moyenne à l'équilibre d'un médicament « victime »
  // (100 mg × 2/j) auquel on associe, à J5, un inducteur ou un inhibiteur enzymatique.
  // Le modèle rend le DÉLAI : l'induction demande la synthèse de novo de l'enzyme
  // (t½ du CYP3A4 ≈ 36 h → effet maximal en ~1 semaine), l'inhibition est immédiate.

  let mode = 'aucun';   // 'aucun' | 'inducteur' | 'inhibiteur'
  let force = 4;        // puissance de l'interaction (facteur sur la clairance)
  let jArret = 21;      // jour d'arrêt du médicament associé (21 = poursuivi)

  // ── PK du médicament victime ──────────────────────────────────────────
  const D = 100;              // mg par prise
  const TAU = 12;             // h entre 2 prises
  const V = 60;               // L (volume de distribution)
  const CL0 = 3;              // L/h → t½ ≈ 14 h
  const R0 = D / TAU;         // mg/h : débit d'entrée moyen
  const SEUIL_EFF = 1.5;      // mg/L : seuil d'efficacité (Cmin utile)
  const SEUIL_TOX = 6;        // mg/L : seuil de toxicité
  const J_INTRO = 5;          // jour d'introduction du médicament associé
  const DUREE = 21;           // jours simulés
  const KDEG = 0.693 / 36;    // /h : dégradation du CYP3A4 (t½ ≈ 36 h) → cinétique de l'induction
  const KINH = 0.693 / 6;     // /h : montée de l'inhibiteur à son équilibre (t½ ≈ 6 h)

  const modes = [
    { id: 'aucun',      label: 'Pas d’interaction', tag: 'référence' },
    { id: 'inducteur',  label: 'Inducteur',              tag: 'clairance ↑' },
    { id: 'inhibiteur', label: 'Inhibiteur',             tag: 'clairance ↓' }
  ];

  // ── simulation (Euler, dt = 0,2 h) ────────────────────────────────────
  // Deux horloges différentes, c'est tout l'intérêt :
  //  • l'ACTIVITÉ DE L'ENZYME : lente à l'induction (synthèse de novo), immédiate à l'inhibition ;
  //  • la CONCENTRATION DU VICTIME : elle suit avec sa propre demi-vie (≈ 5 t½ pour le nouvel équilibre).
  $: sim = (() => {
    const dt = 0.2;
    const n = Math.round((DUREE * 24) / dt);
    const css0 = R0 / CL0;                       // 2,78 mg/L à l'équilibre sans interaction
    const cible =
      mode === 'inducteur' ? css0 / force : mode === 'inhibiteur' ? css0 * force : css0;
    const clCible =
      mode === 'inducteur' ? CL0 * force : mode === 'inhibiteur' ? CL0 / force : CL0;
    let C = css0, E = 1, O = 0;
    let tEnz = null, tConc = null, cmax = css0, actMax = 1;
    const pts = [], act = [];
    const actif = mode !== 'aucun' && force > 1.05;
    for (let i = 0; i <= n; i++) {
      const t = i * dt;
      const j = t / 24;
      const present = mode !== 'aucun' && j >= J_INTRO && j < jArret;
      // induction : synthèse enzymatique de novo → E relaxe vers `force` avec le t½ de l'enzyme
      E += KDEG * ((mode === 'inducteur' && present ? force : 1) - E) * dt;
      // inhibition : occupation directe de l'enzyme, suit la montée en concentration de l'inhibiteur
      O += KINH * ((mode === 'inhibiteur' && present ? 1 : 0) - O) * dt;
      const CL = (CL0 * E) / (1 + (mode === 'inhibiteur' ? (force - 1) * O : 0));
      C += (R0 / V - (CL / V) * C) * dt;
      if (C > cmax) cmax = C;
      if (CL / CL0 > actMax) actMax = CL / CL0;
      if (i % 10 === 0) { pts.push([j, C]); act.push([j, CL / CL0]); }
      if (actif && present && tEnz === null && Math.abs(CL - CL0) >= 0.9 * Math.abs(clCible - CL0))
        tEnz = j - J_INTRO;
      if (actif && present && tConc === null && Math.abs(C - css0) >= 0.9 * Math.abs(cible - css0))
        tConc = j - J_INTRO;
    }
    return { pts, act, css0, cible, tEnz, tConc, cmax, actMax };
  })();

  // ── indices ───────────────────────────────────────────────────────────
  $: ratioAUC = mode === 'inducteur' ? 1 / force : mode === 'inhibiteur' ? force : 1;
  $: classe = (() => {
    if (mode === 'aucun' || force < 1.25) return 'négligeable';
    if (force >= 5) return 'puissant';
    if (force >= 2) return 'modéré';
    return 'faible';
  })();
  $: danger = mode !== 'aucun' && force >= 2;
  $: echec = mode === 'inducteur' && sim.cible < SEUIL_EFF;
  $: surdosage = mode === 'inhibiteur' && sim.cible > SEUIL_TOX;

  // ── géométrie ─────────────────────────────────────────────────────────
  const W = 460, H = 250, m = { top: 14, right: 16, bottom: 36, left: 46 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  $: yMax = Math.max(SEUIL_TOX * 1.2, sim.cmax * 1.1);
  $: xOf = (j) => (j / DUREE) * iW;
  $: yOf = (c) => iH - (Math.min(c, yMax) / yMax) * iH;
  $: curve = sim.pts
    .map(([j, c], i) => `${i ? 'L' : 'M'}${xOf(j).toFixed(1)},${yOf(c).toFixed(1)}`)
    .join(' ');
  const jours = [0, 3, 6, 9, 12, 15, 18, 21];

  // bandeau « activité du CYP3A4 » (× la normale), même axe des temps
  const HS = 76, ms = { top: 16, right: 16, bottom: 16, left: 46 };
  $: iHs = HS - ms.top - ms.bottom;
  $: aMax = Math.max(1.25, sim.actMax * 1.1);
  $: yAct = (r) => iHs - (r / aMax) * iHs;
  $: curveAct = sim.act
    .map(([j, r], i) => `${i ? 'L' : 'M'}${xOf(j).toFixed(1)},${yAct(r).toFixed(1)}`)
    .join(' ');
</script>

<div class="viz">
  <div class="modes">
    {#each modes as mo}
      <button class:on={mode === mo.id} on:click={() => (mode = mo.id)}>
        {mo.label}<em>{mo.tag}</em>
      </button>
    {/each}
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Concentration du médicament victime avant et après association d'un inducteur ou d'un inhibiteur enzymatique">
    <g transform={`translate(${m.left},${m.top})`}>
      <!-- fenêtre thérapeutique -->
      <rect x="0" y={yOf(SEUIL_TOX)} width={iW} height={Math.max(0, yOf(SEUIL_EFF) - yOf(SEUIL_TOX))} class="window" />
      <line x1="0" x2={iW} y1={yOf(SEUIL_TOX)} y2={yOf(SEUIL_TOX)} class="lim tox" />
      <text x={iW - 2} y={yOf(SEUIL_TOX) - 4} class="limlbl tox">seuil toxique {SEUIL_TOX} mg/L</text>
      <line x1="0" x2={iW} y1={yOf(SEUIL_EFF)} y2={yOf(SEUIL_EFF)} class="lim" />
      <text x={iW - 2} y={yOf(SEUIL_EFF) + 11} class="limlbl">seuil d'efficacité {SEUIL_EFF} mg/L</text>

      <!-- introduction / arrêt du médicament associé -->
      {#if mode !== 'aucun'}
        <line x1={xOf(J_INTRO)} x2={xOf(J_INTRO)} y1="0" y2={iH} class="event" />
        <text x={xOf(J_INTRO) + 3} y="10" class="evlbl">J{J_INTRO} : association</text>
        {#if jArret < DUREE}
          <line x1={xOf(jArret)} x2={xOf(jArret)} y1="0" y2={iH} class="event stop" />
          <text x={xOf(jArret) + 3} y="22" class="evlbl">J{jArret} : arrêt</text>
        {/if}
      {/if}

      <path d={curve} class="curve" />

      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />
      {#each jours as j}
        <line x1={xOf(j)} x2={xOf(j)} y1={iH} y2={iH + 4} class="axis" />
        <text x={xOf(j)} y={iH + 15} class="tick">{j}</text>
      {/each}
      <text x={iW / 2} y={iH + 30} class="axlbl">Temps (jours)</text>
      <text transform={`translate(-34,${iH / 2}) rotate(-90)`} class="axlbl">C moyenne (mg/L)</text>
    </g>
  </svg>

  <svg viewBox={`0 0 ${W} ${HS}`} role="img" aria-label="Activité du CYP3A4 au cours du temps">
    <g transform={`translate(${ms.left},${ms.top})`}>
      <text x="0" y="-5" class="striplbl">Activité du CYP3A4 (× la normale)</text>
      <line x1="0" x2={iW} y1={yAct(1)} y2={yAct(1)} class="lim" />
      {#if mode !== 'aucun'}
        <line x1={xOf(J_INTRO)} x2={xOf(J_INTRO)} y1="0" y2={iHs} class="event" />
        {#if jArret < DUREE}
          <line x1={xOf(jArret)} x2={xOf(jArret)} y1="0" y2={iHs} class="event stop" />
        {/if}
      {/if}
      <path d={curveAct} class="curve act" />
      <line x1="0" x2="0" y1="0" y2={iHs} class="axis" />
      <line x1="0" x2={iW} y1={iHs} y2={iHs} class="axis" />
      <text x="-4" y={yAct(1) + 3} class="striptick">× 1</text>
    </g>
  </svg>

  <div class="stats">
    <span class="pill" class:warn={danger}>AUC relative = × {ratioAUC.toFixed(2)}</span>
    <span class="pill alt">C équilibre = {sim.cible.toFixed(2)} mg/L</span>
    {#if mode !== 'aucun'}
      <span class="pill alt">{classe}</span>
      <span class="pill alt">enzyme : 90 % de l'effet en {sim.tEnz !== null ? sim.tEnz.toFixed(1) + ' j' : '—'}</span>
      <span class="pill alt">concentration : 90 % en {sim.tConc !== null ? sim.tConc.toFixed(1) + ' j' : '— (arrêt trop tôt)'}</span>
    {/if}
  </div>

  <div class="controls">
    <label class:off={mode === 'aucun'}>Puissance (facteur sur la clairance) <span>× {force.toFixed(2)}</span>
      <input type="range" min="1" max="8" step="0.25" bind:value={force} disabled={mode === 'aucun'} /></label>
    <label class:off={mode === 'aucun'}>Arrêt du médicament associé <span>{jArret >= DUREE ? 'poursuivi' : 'J' + jArret}</span>
      <input type="range" min="8" max="21" step="1" bind:value={jArret} disabled={mode === 'aucun'} /></label>
  </div>

  <div class="risk" class:bad={echec || surdosage}>
    {#if mode === 'aucun'}
      <strong>Référence.</strong> Le médicament victime est à l'équilibre dans sa fenêtre thérapeutique
      (C = {sim.css0.toFixed(2)} mg/L). Associez un inducteur ou un inhibiteur du CYP3A4 pour voir la courbe bouger.
    {:else if mode === 'inducteur'}
      <strong>Inducteur enzymatique</strong> (rifampicine, rifabutine, carbamazépine, phénytoïne, phénobarbital,
      millepertuis, éfavirenz). Il augmente la <em>synthèse</em> du CYP3A4 (et de la P-gp) → clairance ×{force.toFixed(1)},
      <strong>AUC ÷ {force.toFixed(1)}</strong>. La courbe s'écrase
      {#if echec}<b class="alert">sous le seuil d'efficacité → échec thérapeutique</b>{:else}vers le bas{/if} :
      grossesse sous contraceptif oral, chute de l'INR sous AVK (thrombose), rejet de greffe sous ciclosporine/tacrolimus,
      échappement virologique.
      <br /><em>Délai :</em> l'activité enzymatique monte <strong>progressivement sur 5 à 15 jours</strong> — il faut
      synthétiser l'enzyme (bandeau du bas). La concentration, elle, chute un peu plus vite : la clairance ayant augmenté,
      la demi-vie du victime <em>raccourcit</em>. Après l'arrêt de l'inducteur, retour à la normale en 1 à 2 semaines →
      risque de <strong>surdosage retardé</strong> si la dose du victime avait été augmentée (ex. AVK) : faites glisser le
      jour d'arrêt.
    {:else}
      <strong>Inhibiteur enzymatique</strong> (macrolides sauf spiramycine et azithromycine, azolés : kétoconazole,
      itraconazole, voriconazole ; ritonavir/cobicistat, amiodarone, vérapamil, jus de <em>pamplemousse</em> — qui inhibe
      surtout le CYP3A4 <em>intestinal</em> et augmente la biodisponibilité). Clairance ÷ {force.toFixed(1)},
      <strong>AUC × {force.toFixed(1)}</strong>. La concentration grimpe
      {#if surdosage}<b class="alert">au-dessus du seuil toxique → surdosage</b>{:else}rapidement{/if} :
      rhabdomyolyse (statines), toxicité médullaire de la colchicine (association contre-indiquée), hémorragie sous AVK,
      torsades de pointes.
      <br /><em>Délai :</em> le blocage de l'enzyme est <strong>immédiat</strong> (compétition directe, pas de synthèse à
      attendre) : maximal en 24–48 h, le temps que l'inhibiteur atteigne son propre équilibre (bandeau du bas). Mais le
      victime, dont la demi-vie est maintenant <em>allongée</em>, met encore ~5 nouvelles demi-vies à s'accumuler → le
      <strong>surdosage peut apparaître avec quelques jours de retard</strong>. Réversible dès l'arrêt (plus lentement
      pour les inhibiteurs irréversibles « suicides », ex. clarithromycine).
    {/if}
  </div>

  <p class="hint">
    Comparez les deux bandeaux : l'<strong>enzyme</strong> (bas) réagit lentement à un inducteur et instantanément à un
    inhibiteur ; la <strong>concentration</strong> (haut) suit ensuite avec la demi-vie du médicament victime. Inducteur
    → la courbe s'écrase (échec thérapeutique) ; inhibiteur → elle grimpe (surdosage).
  </p>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); border: 1px solid var(--border-subtle); border-radius: var(--radius, 8px); padding: var(--space-4); background: var(--bg-tertiary); }
  .modes { display: flex; flex-wrap: wrap; gap: var(--space-2); }
  .modes button { display: flex; flex-direction: column; align-items: flex-start; font-size: var(--text-xs); padding: 5px 10px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 8px; cursor: pointer; color: var(--text-secondary); font-family: var(--font-mono); line-height: 1.3; }
  .modes button em { font-style: normal; color: var(--text-muted); font-size: 10px; }
  .modes button.on { background: var(--accent-pk); color: #fff; border-color: var(--accent-pk); }
  .modes button.on em { color: rgba(255, 255, 255, 0.85); }
  svg { width: 100%; height: auto; display: block; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .curve { fill: none; stroke: var(--accent-pk); stroke-width: 2.5; }
  .curve.act { stroke: var(--accent-pd); stroke-width: 2; }
  .striplbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 9px; }
  .striptick { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: end; }
  .window { fill: color-mix(in srgb, var(--accent-pd) 12%, transparent); }
  .lim { stroke: var(--border-strong); stroke-width: 1.2; stroke-dasharray: 5 3; }
  .lim.tox { stroke: #c0392b; }
  .limlbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: end; }
  .limlbl.tox { fill: #c0392b; }
  .event { stroke: var(--accent-ai); stroke-width: 1.2; stroke-dasharray: 4 3; }
  .event.stop { stroke: var(--text-muted); }
  .evlbl { fill: var(--accent-ai); font-family: var(--font-mono); font-size: 9px; }
  .tick { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; margin: 0; }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.alt { background: color-mix(in srgb, var(--accent-ai) 15%, var(--bg-primary)); color: var(--accent-ai); }
  .pill.warn { background: color-mix(in srgb, #c0392b 14%, var(--bg-primary)); color: #c0392b; }
  .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--space-2) var(--space-4); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  label.off { opacity: 0.35; }
  input[type='range'] { width: 100%; accent-color: var(--accent-pk); }
  .risk { font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.6; border: 1px solid var(--border-subtle); border-left: 3px solid var(--accent-pk); border-radius: 6px; padding: var(--space-2) var(--space-3); background: var(--bg-primary); }
  .risk.bad { border-left-color: #c0392b; }
  .alert { color: #c0392b; }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: 0; text-align: center; line-height: 1.5; }
</style>
