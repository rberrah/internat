<script>
  // @ts-nocheck
  // Poisons de l'hémoglobine : HbCO (monoxyde de carbone) et méthémoglobine.
  // Double mécanisme : (1) baisse de la capacité de transport en O2 (Hb fonctionnelle ↓)
  // et (2) déplacement à GAUCHE de la courbe de l'Hb restante → O2 encore moins bien délivré.

  let toxique = 'CO'; // 'CO' | 'MET'
  let pct = 30;       // % de HbCO ou de metHb sur l'Hb totale
  let hb = 15;        // hémoglobine totale (g/dL)

  const P50_0 = 26.8;
  const nHill = 2.7;
  const PAO2 = 95;  // PaO2 artérielle : NORMALE dans les deux intoxications
  const PTIS = 30;  // PO2 capillaire/tissulaire de référence

  $: frac = pct / 100;
  // Effet allostérique : le CO déplace fortement la courbe à gauche, la metHb plus modérément.
  $: kShift = toxique === 'CO' ? 0.75 : 0.35;
  $: p50 = Math.max(8, P50_0 * (1 - kShift * frac));

  const sat = (po2, p50v) => {
    if (po2 <= 0) return 0;
    const a = Math.pow(po2, nHill);
    return (100 * a) / (a + Math.pow(p50v, nHill));
  };

  // contenu en O2 exprimé en % de la capacité normale de transport
  const contToxic = (po2, frc, p50v) => (1 - frc) * sat(po2, p50v);
  const contAnemie = (po2, frc) => (1 - frc) * sat(po2, P50_0);

  $: capacite = (1 - frac) * 100;                       // Hb fonctionnelle (% du total)
  $: saO2vraie = (1 - frac) * sat(PAO2, p50);           // SaO2 mesurée au CO-oxymètre (fraction de l'Hb TOTALE)
  $: caO2 = 1.34 * hb * (saO2vraie / 100) + 0.003 * PAO2; // contenu artériel en O2 (mL/dL)
  $: caO2n = 1.34 * hb * (sat(PAO2, P50_0) / 100) + 0.003 * PAO2;

  // Saturomètre de pouls (2 longueurs d'onde) : il ne distingue pas les dyshémoglobines
  $: spo2 =
    toxique === 'CO'
      ? Math.min(100, (1 - frac) * sat(PAO2, p50) + frac * 100) // lit HbCO comme de l'HbO2
      : 85 + (98 - 85) * Math.exp(-frac / 0.12);                // tend vers ~85 % (« saturation gap »)

  // O2 réellement cédé aux tissus (entre PaO2 95 et PO2 tissulaire 30)
  $: delivNorm = sat(PAO2, P50_0) - sat(PTIS, P50_0);
  $: delivAnem = contAnemie(PAO2, frac) - contAnemie(PTIS, frac);
  $: delivTox = contToxic(PAO2, frac, p50) - contToxic(PTIS, frac, p50);
  $: perteAffinite = delivAnem - delivTox; // part imputable au seul déplacement à gauche

  $: grave = toxique === 'CO' ? pct >= 20 : pct >= 20;

  const seuilsCO = [
    { max: 2, t: 'Normal chez le non-fumeur (< 2 %). Un fumeur est habituellement à 5–10 %.' },
    { max: 10, t: 'Zone du fumeur / exposition faible : le plus souvent asymptomatique.' },
    { max: 20, t: 'Céphalées, nausées, asthénie — le tableau « pseudo-grippal » qui fait manquer le diagnostic.' },
    { max: 30, t: 'Céphalées pulsatiles, vertiges, troubles visuels, nausées/vomissements.' },
    { max: 40, t: 'Confusion, syncope, tachycardie, dyspnée : intoxication sévère.' },
    { max: 60, t: 'Coma, convulsions, ischémie myocardique : pronostic vital engagé.' },
    { max: 101, t: 'Défaillance cardio-respiratoire, décès.' }
  ];
  const seuilsMet = [
    { max: 2, t: 'Normal (< 1–2 % de methémoglobine).' },
    { max: 15, t: 'Le plus souvent asymptomatique ; la cyanose apparaît dès ~1,5 g/dL de metHb.' },
    { max: 20, t: 'Cyanose « ardoisée » grise, sang couleur chocolat, NE CÈDE PAS à l\'oxygène.' },
    { max: 30, t: 'Céphalées, asthénie, dyspnée d\'effort, tachycardie.' },
    { max: 50, t: 'Confusion, arythmies, acidose lactique : intoxication sévère.' },
    { max: 70, t: 'Coma, convulsions, collapsus.' },
    { max: 101, t: 'Généralement létal.' }
  ];
  $: seuils = toxique === 'CO' ? seuilsCO : seuilsMet;
  $: msg = (seuils.find((s) => pct < s.max) || seuils[seuils.length - 1]).t;

  $: nomTox = toxique === 'CO' ? 'HbCO (carboxyhémoglobine)' : 'Méthémoglobine (Hb Fe³⁺)';
  $: causes =
    toxique === 'CO'
      ? 'Chauffage/moteur en milieu clos, incendie (+ cyanure), narguilé. Traitement : O₂ normobare 100 % au masque haute concentration (demi-vie de l\'HbCO ≈ 4–5 h en air ambiant, ≈ 60–90 min sous FiO₂ 1) ; oxygénothérapie hyperbare si perte de connaissance, signes neurologiques, ischémie myocardique ou GROSSESSE (l\'HbCO fœtale est plus élevée et plus lente à s\'éliminer).'
      : 'Nitrites et nitrates (eau de puits chez le nourrisson, poppers), dapsone, sulfamides, prilocaïne/benzocaïne, métoclopramide fortes doses, déficit en cytochrome-b5 réductase, Hb M. Traitement : bleu de méthylène 1–2 mg/kg IV — INEFFICACE et dangereux (hémolyse) en cas de déficit en G6PD, où l\'on recourt à l\'acide ascorbique ou à l\'exsanguino-transfusion.';

  // ── graphe : contenu en O2 (% de la capacité normale) vs PO2 ──
  const W = 480, H = 280, m = { top: 14, right: 16, bottom: 38, left: 48 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  const PMAX = 120;
  $: xOf = (p) => (p / PMAX) * iW;
  $: yOf = (c) => iH - (c / 100) * iH;

  $: cNormal = Array.from({ length: 121 }, (_, i) => {
    const p = (i / 120) * PMAX;
    return `${i ? 'L' : 'M'}${xOf(p).toFixed(1)},${yOf(sat(p, P50_0)).toFixed(1)}`;
  }).join(' ');
  $: cAnemie = Array.from({ length: 121 }, (_, i) => {
    const p = (i / 120) * PMAX;
    return `${i ? 'L' : 'M'}${xOf(p).toFixed(1)},${yOf(contAnemie(p, frac)).toFixed(1)}`;
  }).join(' ');
  $: cToxic = Array.from({ length: 121 }, (_, i) => {
    const p = (i / 120) * PMAX;
    return `${i ? 'L' : 'M'}${xOf(p).toFixed(1)},${yOf(contToxic(p, frac, p50)).toFixed(1)}`;
  }).join(' ');
</script>

<div class="viz">
  <div class="tabs">
    <button class:on={toxique === 'CO'} on:click={() => (toxique = 'CO')}>
      Monoxyde de carbone<em>HbCO</em>
    </button>
    <button class:on={toxique === 'MET'} on:click={() => (toxique = 'MET')}>
      Méthémoglobinémie<em>metHb</em>
    </button>
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Contenu en oxygène du sang en fonction de la PO2 : effet du monoxyde de carbone et de la méthémoglobine">
    <g transform={`translate(${m.left},${m.top})`}>
      {#each [20, 40, 60, 80, 100, 120] as p}
        <line x1={xOf(p)} x2={xOf(p)} y1="0" y2={iH} class="grid" />
        <text x={xOf(p)} y={iH + 14} class="tick">{p}</text>
      {/each}
      {#each [0, 25, 50, 75, 100] as c}
        <line x1="0" x2={iW} y1={yOf(c)} y2={yOf(c)} class="grid" />
        <text x="-6" y={yOf(c) + 3} class="tick ty">{c}</text>
      {/each}

      <!-- zone tissulaire → artérielle -->
      <line x1={xOf(PTIS)} x2={xOf(PTIS)} y1="0" y2={iH} class="mark" />
      <text x={xOf(PTIS) + 3} y="10" class="markt">PO₂ tissu ≈ 30</text>
      <line x1={xOf(PAO2)} x2={xOf(PAO2)} y1="0" y2={iH} class="mark" />
      <text x={xOf(PAO2) - 3} y="10" class="markt end">PaO₂ ≈ 95</text>

      <path d={cNormal} class="c-norm" />
      <path d={cAnemie} class="c-anem" />
      <path d={cToxic} class="c-tox" />

      <!-- O2 délivré par le sang intoxiqué -->
      <line
        x1={xOf(PAO2)} x2={xOf(PAO2)}
        y1={yOf(contToxic(PAO2, frac, p50))} y2={yOf(contToxic(PTIS, frac, p50))}
        class="deliv"
      />
      <circle cx={xOf(PAO2)} cy={yOf(contToxic(PAO2, frac, p50))} r="3.5" class="dot" />
      <circle cx={xOf(PTIS)} cy={yOf(contToxic(PTIS, frac, p50))} r="3.5" class="dot" />

      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />
      <text x={iW / 2} y={iH + 30} class="axlbl">PO₂ (mmHg)</text>
      <text transform={`translate(-36,${iH / 2}) rotate(-90)`} class="axlbl">Contenu en O₂ (% capacité normale)</text>
    </g>
  </svg>

  <div class="legend">
    <span><i class="k-norm"></i>Sang normal</span>
    <span><i class="k-anem"></i>Anémie équivalente (même Hb utile, affinité normale)</span>
    <span><i class="k-tox"></i>Sang intoxiqué ({toxique === 'CO' ? 'HbCO' : 'metHb'}) — courbe décalée à GAUCHE</span>
  </div>

  <div class="stats">
    <span class="pill" class:bad={grave}>{toxique === 'CO' ? 'HbCO' : 'metHb'} = {pct} %</span>
    <span class="pill" class:bad={grave}>Capacité de transport = {capacite.toFixed(0)} %</span>
    <span class="pill" class:bad={grave}>P50 = {p50.toFixed(1)} mmHg <em>(normale 26–27)</em></span>
    <span class="pill alt">CaO₂ = {caO2.toFixed(1)} mL/dL <em>(normal {caO2n.toFixed(1)})</em></span>
  </div>

  <div class="gauges">
    <div class="g">
      <span>PaO₂ (gaz du sang)</span><strong>{PAO2} mmHg</strong><em>NORMALE — l'O₂ dissous n'est pas touché</em>
    </div>
    <div class="g" class:trap={toxique === 'CO' && pct >= 10}>
      <span>SpO₂ (saturomètre de pouls)</span>
      <strong>{spo2.toFixed(0)} %</strong>
      <em>
        {#if toxique === 'CO'}FAUSSEMENT NORMALE : l'oxymètre lit l'HbCO comme de l'HbO₂
        {:else}Plafonne vers ~85 % : « saturation gap » indépendant de la PaO₂{/if}
      </em>
    </div>
    <div class="g" class:bad={saO2vraie < 90}>
      <span>SaO₂ vraie (CO-oxymétrie)</span><strong>{saO2vraie.toFixed(0)} %</strong>
      <em>La seule mesure fiable : elle rapporte l'HbO₂ à l'Hb TOTALE</em>
    </div>
  </div>

  <div class="deliv-box">
    <p class="dtitle">O₂ réellement cédé aux tissus (entre PaO₂ 95 et PO₂ 30 mmHg)</p>
    <div class="bars">
      <div class="bar"><span>Sang normal</span><div class="track"><div class="fill n" style={`width:${(delivNorm / delivNorm) * 100}%`}></div></div><b>{delivNorm.toFixed(1)}</b></div>
      <div class="bar"><span>Anémie équivalente</span><div class="track"><div class="fill a" style={`width:${(delivAnem / delivNorm) * 100}%`}></div></div><b>{delivAnem.toFixed(1)}</b></div>
      <div class="bar"><span>{toxique === 'CO' ? 'HbCO' : 'metHb'} {pct} %</span><div class="track"><div class="fill t" style={`width:${(delivTox / delivNorm) * 100}%`}></div></div><b>{delivTox.toFixed(1)}</b></div>
    </div>
    <p class="dnote">
      Le sang intoxiqué délivre <strong>{perteAffinite.toFixed(1)} points d'O₂ de moins</strong> qu'une anémie de même
      sévérité : c'est le <strong>second mécanisme</strong>, le déplacement à gauche. L'hémoglobine restante fixe
      l'O₂ mais refuse de le lâcher.
    </p>
  </div>

  <div class="verdict" class:bad={grave}>
    <p class="nm">{nomTox} — {pct} %</p>
    <p class="msg">{msg}</p>
    <p class="cause">{causes}</p>
  </div>

  <div class="controls">
    <label>{toxique === 'CO' ? 'HbCO' : 'metHb'} (% de l'Hb totale) <span class:bad={grave}>{pct} %</span>
      <input type="range" min="0" max="70" step="1" bind:value={pct} /></label>
    <label>Hémoglobine totale <span class:bad={hb < 12}>{hb} g/dL</span>
      <input type="range" min="7" max="18" step="0.5" bind:value={hb} /></label>
  </div>

  <p class="hint">
    Montez le pourcentage de toxique : la courbe rouge s'effondre (moins d'Hb utile) <em>et</em> glisse vers la
    gauche (l'Hb restante retient l'O₂) — comparez-la à la courbe « anémie équivalente » pour isoler ce second coup.
    Pendant ce temps, PaO₂ et SpO₂ restent trompeusement rassurantes : dans l'intoxication au CO, seul le
    <strong>CO-oxymètre</strong> (ou le dosage d'HbCO) fait le diagnostic.
  </p>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); }

  .tabs { display: flex; flex-wrap: wrap; gap: var(--space-2); }
  .tabs button { display: flex; flex-direction: column; align-items: flex-start; font-size: var(--text-xs); padding: 5px 12px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 8px; cursor: pointer; color: var(--text-secondary); font-family: var(--font-mono); }
  .tabs button em { font-style: normal; color: var(--text-muted); font-size: 10px; }
  .tabs button.on { background: var(--accent-pk); color: #fff; border-color: var(--accent-pk); }
  .tabs button.on em { color: rgba(255, 255, 255, 0.85); }

  svg { width: 100%; height: auto; display: block; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .grid { stroke: var(--border-subtle); stroke-width: 0.6; }
  .tick { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }
  .ty { text-anchor: end; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .mark { stroke: var(--border-strong); stroke-width: 0.8; stroke-dasharray: 2 3; }
  .markt { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; }
  .markt.end { text-anchor: end; }

  .c-norm { fill: none; stroke: var(--border-strong); stroke-width: 1.6; stroke-dasharray: 5 4; }
  .c-anem { fill: none; stroke: var(--accent-ai); stroke-width: 1.8; stroke-dasharray: 2 3; }
  .c-tox { fill: none; stroke: #c0392b; stroke-width: 2.6; }
  .deliv { stroke: #c0392b; stroke-width: 2; opacity: 0.5; }
  .dot { fill: #c0392b; stroke: var(--bg-tertiary); stroke-width: 1.4; }

  .legend { display: flex; flex-wrap: wrap; gap: var(--space-3); font-family: var(--font-mono); font-size: 10px; color: var(--text-secondary); }
  .legend span { display: flex; align-items: center; gap: 5px; }
  .legend i { width: 16px; height: 0; border-top-width: 2.4px; border-top-style: solid; display: inline-block; }
  .k-norm { border-top-color: var(--border-strong); border-top-style: dashed !important; }
  .k-anem { border-top-color: var(--accent-ai); border-top-style: dotted !important; }
  .k-tox { border-top-color: #c0392b; }

  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill em { font-style: normal; font-weight: 400; opacity: 0.75; }
  .pill.alt { background: var(--bg-secondary); color: var(--text-secondary); font-weight: 400; }
  .pill.bad { background: color-mix(in srgb, #c0392b 15%, var(--bg-primary)); color: #c0392b; }

  .gauges { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2); }
  .g { border: 1px solid var(--border-subtle); border-radius: 8px; padding: var(--space-2) var(--space-3); background: var(--bg-primary); text-align: center; }
  .g span { display: block; font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; }
  .g strong { display: block; font-size: var(--text-lg); color: var(--accent-pk); font-family: var(--font-mono); }
  .g em { font-style: normal; font-size: 9px; color: var(--text-muted); line-height: 1.4; display: block; }
  .g.trap { border-color: #c0392b; background: color-mix(in srgb, #c0392b 8%, var(--bg-primary)); }
  .g.trap strong { color: #c0392b; }
  .g.trap em { color: #c0392b; font-weight: 700; }
  .g.bad strong { color: #c0392b; }

  .deliv-box { border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: var(--bg-primary); }
  .dtitle { margin: 0 0 var(--space-2); font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); }
  .bars { display: grid; gap: 5px; }
  .bar { display: grid; grid-template-columns: 130px 1fr 40px; align-items: center; gap: var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-secondary); }
  .track { height: 10px; background: var(--bg-secondary); border-radius: 999px; overflow: hidden; }
  .fill { height: 100%; border-radius: 999px; }
  .fill.n { background: var(--border-strong); }
  .fill.a { background: var(--accent-ai); }
  .fill.t { background: #c0392b; }
  .bar b { text-align: right; color: var(--text-primary); }
  .dnote { margin: var(--space-3) 0 0; font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.6; }
  .dnote strong { color: #c0392b; }

  .verdict { border: 1px solid var(--border-subtle); border-left: 3px solid var(--accent-pk); border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: var(--bg-primary); }
  .verdict.bad { border-left-color: #c0392b; }
  .nm { margin: 0 0 4px; font-family: var(--font-mono); font-size: var(--text-sm); font-weight: 700; color: var(--accent-pk); }
  .verdict.bad .nm { color: #c0392b; }
  .msg { margin: 0 0 var(--space-2); font-size: var(--text-sm); color: var(--text-primary); }
  .cause { margin: 0; font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.6; }

  .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--space-2) var(--space-4); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  label span.bad { color: #c0392b; }
  input[type='range'] { width: 100%; accent-color: var(--accent-pk); }

  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: 0; line-height: 1.6; }
  .hint strong { color: var(--text-secondary); }
  .hint em { font-style: italic; }

  @media (max-width: 560px) {
    .gauges { grid-template-columns: 1fr; }
    .bar { grid-template-columns: 100px 1fr 36px; }
  }
</style>
