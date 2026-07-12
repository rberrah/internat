<script>
  // @ts-nocheck
  // Indices PK/PD des antibiotiques : concentrations à l'état d'équilibre sur 24 h face à la CMI.
  // À DOSE JOURNALIÈRE CONSTANTE, on fait varier le fractionnement : le %T>CMI monte quand on
  // fractionne (bêta-lactamines), alors que le Cmax/CMI s'effondre (aminosides → une seule injection).
  // L'AUC24, elle, ne dépend que de la dose journalière et de la clairance : elle ne bouge pas.

  let type = 'temps';   // 'temps' | 'conc' | 'auc'
  let dj = 3000;        // dose journalière (mg)
  let nIdx = 2;         // index du nombre d'injections/24 h
  let cIdx = 4;         // index de la CMI

  const NS = [1, 2, 3, 4, 6];                                  // injections / 24 h
  const CMIS = [0.125, 0.25, 0.5, 1, 2, 4, 8, 16, 32];         // mg/L (gamme des CA-SFM)

  const TYPES = [
    {
      id: 'temps', label: 'Bêta-lactamines', idx: '%T > CMI', tag: 'temps-dépendant',
      V: 20, thalf: 1, cible: 50, unite: '%', ex: 'amoxicilline, céfotaxime, pipéracilline, méropénème'
    },
    {
      id: 'conc', label: 'Aminosides', idx: 'Cmax / CMI', tag: 'concentration-dépendant',
      V: 15, thalf: 2.5, cible: 8, unite: '', ex: 'gentamicine, amikacine, tobramycine'
    },
    {
      id: 'auc', label: 'Fluoroquinolones', idx: 'AUC24 / CMI', tag: 'exposition (AUC)',
      V: 90, thalf: 7, cible: 125, unite: '', ex: 'lévofloxacine, ciprofloxacine'
    }
  ];
  const DEFAUTS = {
    temps: { dj: 3000, nIdx: 2, cIdx: 4 },  // amoxicilline 1 g × 3 ; CMI 2 mg/L
    conc: { dj: 400, nIdx: 0, cIdx: 4 },    // gentamicine 6 mg/kg en 1 injection ; CMI 2 mg/L
    auc: { dj: 750, nIdx: 0, cIdx: 2 }      // lévofloxacine 750 mg × 1 ; CMI 0,5 mg/L (BGN)
  };
  function choisir(id) {
    type = id;
    dj = DEFAUTS[id].dj;
    nIdx = DEFAUTS[id].nIdx;
    cIdx = DEFAUTS[id].cIdx;
  }

  // ── PK : bolus IV répétés, 1 compartiment, état d'équilibre ───────────
  $: T = TYPES.find((t) => t.id === type);
  $: n = NS[nIdx];
  $: cmi = CMIS[cIdx];
  $: tau = 24 / n;                       // intervalle (h)
  $: dose = dj / n;                      // dose unitaire (mg)
  $: ke = 0.693 / T.thalf;               // /h
  $: cl = ke * T.V;                      // L/h
  $: cmax = dose / T.V / (1 - Math.exp(-ke * tau));   // Cmax à l'équilibre (mg/L)
  $: cmin = cmax * Math.exp(-ke * tau);               // résiduelle (mg/L)
  $: auc24 = dj / cl;                                 // mg·h/L — indépendante du fractionnement

  $: tOver = cmax <= cmi ? 0 : Math.min(Math.log(cmax / cmi) / ke, tau);
  $: pctT = (tOver / tau) * 100;
  $: rCmax = cmax / cmi;
  $: rAuc = auc24 / cmi;

  $: valeur = type === 'temps' ? pctT : type === 'conc' ? rCmax : rAuc;
  $: atteint = valeur >= T.cible;
  // résiduelle des aminosides : cible < 0,5 mg/L (gentamicine) pour limiter la néphro/ototoxicité
  $: residuelleHaute = type === 'conc' && cmin > 0.5;

  // ── géométrie ─────────────────────────────────────────────────────────
  const W = 460, H = 250, m = { top: 14, right: 16, bottom: 36, left: 46 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  $: yMax = Math.max(cmax * 1.15, cmi * 1.6, 1);
  $: xOf = (t) => (t / 24) * iW;
  $: yOf = (c) => iH - (c / yMax) * iH;

  $: curve = (() => {
    let d = '';
    for (let k = 0; k < n; k++) {
      const t0 = k * tau;
      for (let i = 0; i <= 40; i++) {
        const t = t0 + (i / 40) * tau;
        const c = cmax * Math.exp(-ke * (t - t0));
        d += `${d ? 'L' : 'M'}${xOf(t).toFixed(1)},${yOf(c).toFixed(1)} `;
      }
    }
    return d;
  })();

  // zones où C > CMI (une par intervalle)
  $: zones = (() => {
    if (cmax <= cmi) return [];
    const out = [];
    for (let k = 0; k < n; k++) {
      const t0 = k * tau;
      let d = `M${xOf(t0).toFixed(1)},${yOf(cmi).toFixed(1)} `;
      for (let i = 0; i <= 30; i++) {
        const t = t0 + (i / 30) * tOver;
        d += `L${xOf(t).toFixed(1)},${yOf(cmax * Math.exp(-ke * (t - t0))).toFixed(1)} `;
      }
      d += `L${xOf(t0 + tOver).toFixed(1)},${yOf(cmi).toFixed(1)} Z`;
      out.push(d);
    }
    return out;
  })();

  const heures = [0, 4, 8, 12, 16, 20, 24];
</script>

<div class="viz">
  <div class="modes">
    {#each TYPES as t}
      <button class:on={type === t.id} on:click={() => choisir(t.id)}>
        {t.label}<em>{t.tag} · {t.idx}</em>
      </button>
    {/each}
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Concentration d'antibiotique sur 24 heures à l'équilibre, comparée à la CMI du germe">
    <g transform={`translate(${m.left},${m.top})`}>
      {#each zones as z}
        <path d={z} class="zone" class:active={type === 'temps'} />
      {/each}

      <path d={curve} class="curve" />

      <line x1="0" x2={iW} y1={yOf(cmi)} y2={yOf(cmi)} class="cmi" />
      <text x={iW - 2} y={yOf(cmi) - 5} class="cmilbl">CMI = {cmi} mg/L</text>

      {#if type === 'conc'}
        <line x1="0" x2={iW} y1={yOf(cmax)} y2={yOf(cmax)} class="peak" />
        <text x="2" y={yOf(cmax) - 4} class="peaklbl">Cmax = {cmax.toFixed(1)} mg/L</text>
      {/if}

      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />
      {#each heures as h}
        <line x1={xOf(h)} x2={xOf(h)} y1={iH} y2={iH + 4} class="axis" />
        <text x={xOf(h)} y={iH + 15} class="tick">{h}</text>
      {/each}
      <text x={iW / 2} y={iH + 30} class="axlbl">Temps (h) — {n} injection{n > 1 ? 's' : ''} / 24 h (τ = {tau} h)</text>
      <text transform={`translate(-34,${iH / 2}) rotate(-90)`} class="axlbl">C (mg/L)</text>
    </g>
  </svg>

  <div class="idx">
    <div class="card" class:hi={type === 'temps'}>
      <span>%T &gt; CMI</span><strong>{pctT.toFixed(0)} %</strong><em>cible ≥ 50 %</em>
    </div>
    <div class="card" class:hi={type === 'conc'}>
      <span>Cmax / CMI</span><strong>{rCmax.toFixed(1)}</strong><em>cible ≥ 8–10</em>
    </div>
    <div class="card" class:hi={type === 'auc'}>
      <span>AUC24 / CMI</span><strong>{rAuc.toFixed(0)}</strong><em>cible ≥ 125</em>
    </div>
  </div>

  <div class="stats">
    <span class="pill">dose unitaire = {dose.toFixed(0)} mg / {tau} h</span>
    <span class="pill alt">AUC24 = {auc24.toFixed(0)} mg·h/L</span>
    <span class="pill alt" class:warn={residuelleHaute}>résiduelle = {cmin.toFixed(2)} mg/L</span>
    <span class="pill" class:warn={!atteint}>
      {atteint ? 'objectif PK/PD atteint' : 'objectif PK/PD NON atteint'}
    </span>
  </div>

  <div class="controls">
    <label>Dose journalière <span>{dj} mg</span>
      <input type="range" min="100" max="6000" step="50" bind:value={dj} /></label>
    <label>Injections / 24 h <span>{n} (τ = {tau} h)</span>
      <input type="range" min="0" max="4" step="1" bind:value={nIdx} /></label>
    <label>CMI du germe <span>{cmi} mg/L</span>
      <input type="range" min="0" max="8" step="1" bind:value={cIdx} /></label>
  </div>

  <div class="risk" class:bad={!atteint || residuelleHaute}>
    {#if type === 'temps'}
      <strong>Bêta-lactamines = temps-dépendantes</strong> ({T.ex}). La bactéricidie dépend du <strong>temps passé
      au-dessus de la CMI</strong>, pas du pic : au-delà de 4–5 × CMI, monter plus haut n'apporte rien.
      Objectif : <strong>T &gt; CMI ≥ 40–50 %</strong> de l'intervalle pour les pénicillines (≈ 60–70 % pour les
      céphalosporines, ≈ 40 % pour les carbapénèmes ; <strong>100 % en réanimation</strong>).
      À dose journalière constante, augmentez le nombre d'injections : le <em>%T&gt;CMI monte</em> alors que l'AUC24 ne
      change pas → c'est pourquoi on <strong>fractionne</strong> (voire perfusion continue après dose de charge).
    {:else if type === 'conc'}
      <strong>Aminosides = concentration-dépendants</strong> ({T.ex}), avec un <strong>effet post-antibiotique</strong>
      prolongé. La bactéricidie dépend du <strong>pic</strong> : objectif <strong>Cmax/CMI ≥ 8–10</strong>
      (pic cible 30–40 mg/L pour la gentamicine, 60–80 mg/L pour l'amikacine).
      La toxicité rénale et cochléaire dépend au contraire du <em>temps de contact</em> : il faut une
      <strong>résiduelle basse</strong> (&lt; 0,5 mg/L pour la gentamicine{residuelleHaute ? " — ce n'est pas le cas ici" : ''}).
      Fractionnez à dose journalière constante : le pic s'effondre et la résiduelle remonte →
      <strong>moins efficace ET plus toxique</strong>. D'où l'<strong>injection unique journalière</strong>, en 30 min.
    {:else}
      <strong>Fluoroquinolones = exposition (AUC)</strong> ({T.ex}). L'indice est l'<strong>AUC24/CMI</strong>
      (≥ 125 pour les bacilles à Gram négatif ; ≥ 30–40 pour le pneumocoque), avec aussi un Cmax/CMI ≥ 8–10 qui limite la
      sélection de mutants résistants. L'AUC24 = dose journalière / clairance : elle <em>ne dépend pas</em> du
      fractionnement — seule la <strong>dose totale</strong> compte (fractionnez : l'AUC24/CMI ne bouge pas).
      D'où la prise unique quotidienne, à dose suffisante (lévofloxacine 750 mg × 1/j, ou 500 mg × 2/j).
    {/if}
  </div>

  <p class="hint">
    Gardez la dose journalière fixe et déplacez « injections / 24 h » : vous verrez que fractionner améliore le
    %T&gt;CMI, écrase le Cmax/CMI et laisse l'AUC24 inchangée. Tout le raisonnement PK/PD est là.
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
  .curve { fill: none; stroke: var(--accent-ai); stroke-width: 2.2; }
  .zone { fill: color-mix(in srgb, var(--accent-pk) 16%, transparent); }
  .zone.active { fill: color-mix(in srgb, var(--accent-pk) 34%, transparent); }
  .cmi { stroke: #c0392b; stroke-width: 1.5; stroke-dasharray: 5 3; }
  .cmilbl { fill: #c0392b; font-family: var(--font-mono); font-size: 10px; text-anchor: end; }
  .peak { stroke: var(--accent-pd); stroke-width: 1.2; stroke-dasharray: 4 3; }
  .peaklbl { fill: var(--accent-pd); font-family: var(--font-mono); font-size: 9px; }
  .tick { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .idx { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2); }
  .card { border: 1px solid var(--border-subtle); border-radius: 8px; padding: var(--space-2) var(--space-3); text-align: center; background: var(--bg-primary); }
  .card.hi { border-color: var(--accent-pk); background: color-mix(in srgb, var(--accent-pk) 8%, var(--bg-primary)); }
  .card span { display: block; font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; }
  .card strong { display: block; font-size: var(--text-lg); color: var(--accent-pk); }
  .card em { font-style: normal; font-size: 9px; color: var(--text-muted); }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; margin: 0; }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.alt { background: color-mix(in srgb, var(--accent-ai) 15%, var(--bg-primary)); color: var(--accent-ai); }
  .pill.warn { background: color-mix(in srgb, #c0392b 14%, var(--bg-primary)); color: #c0392b; }
  .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--space-2) var(--space-4); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  input[type='range'] { width: 100%; accent-color: var(--accent-pk); }
  .risk { font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.6; border: 1px solid var(--border-subtle); border-left: 3px solid var(--accent-pk); border-radius: 6px; padding: var(--space-2) var(--space-3); background: var(--bg-primary); }
  .risk.bad { border-left-color: #c0392b; }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: 0; text-align: center; line-height: 1.5; }
</style>
