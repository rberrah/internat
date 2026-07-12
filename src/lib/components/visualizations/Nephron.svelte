<script>
  // @ts-nocheck
  // Sites d'action des diurétiques le long du néphron : on choisit une classe,
  // le segment cible s'illumine et les conséquences ioniques s'affichent.
  let sel = 'anse';   // classe sélectionnée
  let dfg = 75;       // DFG du patient (mL/min/1,73 m²) — conditionne l'efficacité

  const classes = [
    {
      id: 'iac',
      seg: 'tcp',
      court: 'Anhydrase carbonique',
      nom: "Inhibiteurs de l'anhydrase carbonique",
      dci: 'Acétazolamide',
      cible: "Anhydrase carbonique (bordure en brosse)",
      site: 'Tube contourné proximal',
      feNa: 4,
      puissance: 'Faible — FE Na⁺ ≈ 3-5 %',
      k: 'Hypokaliémie', kTone: 'warn',
      ca: 'Calciurie peu modifiée', caTone: 'flat',
      caNote: 'urines alcalines → lithiase phosphocalcique',
      natri: 'Faible, avec bicarbonaturie majeure',
      ab: 'Acidose métabolique hyperchlorémique (trou anionique NORMAL) — l’acidose auto-limite l’effet en 2-3 jours',
      ind: 'Glaucome, mal aigu des montagnes, alcalose métabolique',
      piege: 'Sulfamide (allergie croisée) ; CI si cirrhose (encéphalopathie) et si hypokaliémie non corrigée',
      dfgNote: "Efficacité qui s’effondre quand le DFG baisse (moins de HCO₃⁻ filtré)."
    },
    {
      id: 'anse',
      seg: 'bal',
      court: "Anse (NKCC2)",
      nom: "Diurétiques de l'anse",
      dci: 'Furosémide, bumétanide, pirétanide',
      cible: 'Co-transporteur Na⁺-K⁺-2Cl⁻ (NKCC2)',
      site: "Branche ascendante large de l'anse de Henle",
      feNa: 22,
      puissance: 'MAXIMALE — FE Na⁺ jusqu’à 20-25 % (« haut plafond »)',
      k: 'Hypokaliémie', kTone: 'warn',
      ca: 'Calciurie AUGMENTÉE', caTone: 'up',
      caNote: 'dissipation du gradient lumière-positif → fuite de Ca²⁺ et Mg²⁺',
      natri: 'Massive ; effet conservé même si DFG effondré',
      ab: 'Alcalose métabolique hypochlorémique et hypokaliémique',
      ind: 'OAP, insuffisance cardiaque, œdèmes, IRC, HYPERcalcémie, hyperkaliémie',
      piege: 'Ototoxicité (IV rapide, fortes doses), hyperuricémie, déshydratation, hypomagnésémie',
      dfgNote: "Reste actif à DFG bas : c’est LE diurétique de l’insuffisant rénal (doses majorées)."
    },
    {
      id: 'thiazide',
      seg: 'tcd',
      court: 'Thiazidiques (NCC)',
      nom: 'Thiazidiques et apparentés',
      dci: 'Hydrochlorothiazide, indapamide, ciclétanine',
      cible: 'Co-transporteur Na⁺-Cl⁻ (NCC)',
      site: 'Tube contourné distal',
      feNa: 6,
      puissance: 'Modérée — FE Na⁺ ≈ 5-8 %',
      k: 'Hypokaliémie', kTone: 'warn',
      ca: 'Calciurie DIMINUÉE', caTone: 'down',
      caNote: 'rétention de Ca²⁺ → utile dans la lithiase calcique ; risque d’hypercalcémie',
      natri: 'Modérée ; s’épuise quand le DFG chute',
      ab: 'Alcalose métabolique hypokaliémique',
      ind: 'HTA (1re intention), lithiase calcique récidivante, diabète insipide néphrogénique',
      piege: 'HYPONATRÉMIE (sujet âgé +++), hyperuricémie, hyperglycémie, hyperlipidémie',
      dfgNote: "Classiquement INEFFICACE si DFG < 30 mL/min → relais par un diurétique de l’anse."
    },
    {
      id: 'kspar',
      seg: 'cc',
      court: 'Épargneurs de K⁺',
      nom: 'Épargneurs de potassium / anti-aldostérone',
      dci: 'Spironolactone, éplérénone (anti-MR) · amiloride, triamtérène (bloqueurs ENaC)',
      cible: 'Récepteur minéralocorticoïde ou canal ENaC (cellule principale)',
      site: 'Tube collecteur cortical',
      feNa: 2,
      puissance: 'Faible — FE Na⁺ ≈ 1-3 %',
      k: 'HYPERKALIÉMIE', kTone: 'danger',
      ca: 'Calciurie peu modifiée', caTone: 'flat',
      caNote: 'amiloride : légère baisse de la calciurie',
      natri: 'Faible — surtout utilisés en association',
      ab: 'Acidose métabolique hyperchlorémique (trou anionique normal), type « acidose tubulaire de type 4 »',
      ind: 'Hyperaldostéronisme, insuffisance cardiaque (spironolactone : ↓ mortalité), ascite du cirrhotique, HTA résistante',
      piege: 'HYPERKALIÉMIE +++ si association IEC/ARA2/AINS ou IRC ; gynécomastie (spironolactone)',
      dfgNote: "Danger d’hyperkaliémie majoré quand le DFG baisse : contre-indiqué en pratique si DFG < 30."
    }
  ];

  $: cur = classes.find((c) => c.id === sel) || classes[0];
  $: seg = cur.seg;

  // Alerte liée au DFG (règles cliniques réelles)
  $: alerte = (() => {
    if (dfg >= 30) return null;
    if (sel === 'thiazide') return { t: 'danger', m: `DFG ${dfg} mL/min : thiazidique inefficace (< 30) → passer à un diurétique de l’anse.` };
    if (sel === 'kspar') return { t: 'danger', m: `DFG ${dfg} mL/min : risque majeur d’hyperkaliémie → épargneur de K⁺ contre-indiqué en pratique.` };
    if (sel === 'iac') return { t: 'warn', m: `DFG ${dfg} mL/min : efficacité de l’acétazolamide très réduite.` };
    return { t: 'ok', m: `DFG ${dfg} mL/min : le diurétique de l’anse reste efficace (doses majorées).` };
  })();

  // ── schéma ──
  const W = 540, H = 340;
  const P = {
    tcp: 'M80,92 q12,-22 24,0 t24,0 t24,0 t24,0',
    bfd: 'M174,92 C182,130 184,190 186,250',
    hair: 'M186,250 C186,282 216,282 216,250',
    bal: 'M216,250 C220,190 224,130 228,96',
    tcd: 'M228,96 q12,-22 24,0 t24,0 t24,0',
    cc: 'M300,96 C318,104 326,124 328,152 L336,320'
  };
  // points d'inhibition (calculés sur les courbes ci-dessus)
  const STOP = { tcp: [114, 103], bal: [222, 163], tcd: [264, 107], cc: [327, 144] };
  $: stop = STOP[seg];
</script>

<div class="viz">
  <div class="fams">
    {#each classes as c}
      <button class:on={sel === c.id} on:click={() => (sel = c.id)}>{c.court}</button>
    {/each}
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Néphron et sites d'action des diurétiques">
    <!-- médullaire -->
    <rect x="0" y="160" width={W} height={H - 160} class="medulla" />
    <line x1="8" x2={W - 8} y1="160" y2="160" class="cmline" />
    <text x="12" y="152" class="zone">CORTEX</text>
    <text x="12" y="174" class="zone">MÉDULLAIRE</text>

    <!-- glomérule -->
    <line x1="14" x2="38" y1="80" y2="86" class="vessel" />
    <line x1="14" x2="38" y1="104" y2="98" class="vessel" />
    <circle cx="58" cy="92" r="24" class="bowman" />
    <circle cx="58" cy="92" r="13" class="tuft" />
    <path d="M47,92 q5,-8 11,0 t11,0" class="tuftline" />
    <text x="58" y="136" class="seglbl">Glomérule</text>
    <text x="58" y="148" class="pct">filtration</text>

    <!-- tubules (fond) -->
    <path d={P.bfd} class="tube" />
    <path d={P.hair} class="tube" />
    <path d={P.cc} class="tube duct" class:dim={seg !== 'cc'} />
    <path d={P.tcp} class="tube" class:dim={seg !== 'tcp'} />
    <path d={P.bal} class="tube" class:dim={seg !== 'bal'} />
    <path d={P.tcd} class="tube" class:dim={seg !== 'tcd'} />

    <!-- segment actif : halo + surbrillance -->
    <path d={P[seg]} class="glow" />
    <path d={P[seg]} class="active" class:wide={seg === 'cc'} />

    <!-- marqueur d'inhibition -->
    <circle cx={stop[0]} cy={stop[1]} r="9" class="stop" />
    <line x1={stop[0] - 4} x2={stop[0] + 4} y1={stop[1] - 4} y2={stop[1] + 4} class="stopx" />
    <line x1={stop[0] - 4} x2={stop[0] + 4} y1={stop[1] + 4} y2={stop[1] - 4} class="stopx" />

    <!-- tube proximal -->
    <rect x="68" y="24" width="116" height="20" rx="10" class="badge" class:on={seg === 'tcp'} />
    <text x="126" y="38" class="btxt" class:on={seg === 'tcp'}>Anhydrase carbonique</text>
    <text x="126" y="58" class="seglbl">Tube contourné proximal</text>
    <text x="126" y="70" class="pct">≈ 65 % du Na⁺ filtré</text>

    <!-- tube distal -->
    <rect x="240" y="24" width="48" height="20" rx="10" class="badge" class:on={seg === 'tcd'} />
    <text x="264" y="38" class="btxt" class:on={seg === 'tcd'}>NCC</text>
    <text x="264" y="58" class="seglbl">Tube contourné distal</text>
    <text x="264" y="70" class="pct">≈ 5 % du Na⁺</text>

    <!-- anse de Henle -->
    <line x1="225" x2="246" y1="190" y2="190" class="lead" />
    <text x="277" y="174" class="pct">branche ascendante</text>
    <rect x="246" y="180" width="62" height="20" rx="10" class="badge" class:on={seg === 'bal'} />
    <text x="277" y="194" class="btxt" class:on={seg === 'bal'}>NKCC2</text>
    <text x="201" y="306" class="seglbl">Anse de Henle</text>
    <text x="201" y="318" class="pct">≈ 25 % du Na⁺</text>

    <!-- canal collecteur -->
    <line x1="326" x2="348" y1="126" y2="126" class="lead" />
    <rect x="348" y="116" width="120" height="20" rx="10" class="badge" class:on={seg === 'cc'} />
    <text x="408" y="130" class="btxt" class:on={seg === 'cc'}>ENaC · R. minéralo.</text>
    <line x1="336" x2="358" y1="280" y2="280" class="lead" />
    <text x="362" y="284" class="seglbl left">Canal collecteur</text>
    <text x="362" y="296" class="pct left">≈ 3 % du Na⁺ — réglage fin</text>
  </svg>

  <div class="effects">
    <div class="card" data-tone={cur.kTone}>
      <span>Kaliémie</span>
      <strong>{cur.kTone === 'danger' ? '↑' : '↓'} {cur.k}</strong>
    </div>
    <div class="card" data-tone={cur.caTone}>
      <span>Calciurie</span>
      <strong>{cur.caTone === 'up' ? '↑' : cur.caTone === 'down' ? '↓' : '≈'} {cur.ca}</strong>
      <em>{cur.caNote}</em>
    </div>
    <div class="card" data-tone="flat">
      <span>Natriurèse</span>
      <strong>{cur.puissance}</strong>
      <em>{cur.natri}</em>
    </div>
  </div>

  <div class="power">
    {#each classes as c}
      <div class="prow" class:on={sel === c.id}>
        <span class="plbl">{c.court}</span>
        <span class="pbar"><i style={`width:${(c.feNa / 25) * 100}%`}></i></span>
        <span class="pval">{c.feNa} %</span>
      </div>
    {/each}
    <p class="pcap">Fraction d'excrétion maximale du Na⁺ sous traitement</p>
  </div>

  <div class="detail">
    <p class="dnom">{cur.nom}</p>
    <dl>
      <dt>Molécules</dt><dd>{cur.dci}</dd>
      <dt>Cible</dt><dd>{cur.cible} — {cur.site}</dd>
      <dt>Acide-base</dt><dd>{cur.ab}</dd>
      <dt>Indications</dt><dd>{cur.ind}</dd>
      <dt>Pièges</dt><dd>{cur.piege}</dd>
    </dl>
  </div>

  {#if alerte}
    <p class="alert" data-tone={alerte.t}>{alerte.m}</p>
  {/if}

  <div class="sliders">
    <label>
      <span>DFG du patient</span><b>{dfg} mL/min</b>
      <input type="range" min="5" max="120" step="5" bind:value={dfg} />
    </label>
  </div>

  <p class="hint">
    Choisissez une classe : le transporteur bloqué s'illumine. Puis descendez le DFG sous 30 mL/min —
    seul le diurétique de l'anse reste utilisable.
  </p>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); }
  .fams { display: flex; flex-wrap: wrap; gap: var(--space-2); }
  .fams button { font-size: var(--text-xs); padding: 5px 10px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 8px; cursor: pointer; color: var(--text-secondary); font-family: var(--font-mono); }
  .fams button.on { background: var(--accent-pk); color: var(--bg-tertiary); border-color: var(--accent-pk); }
  svg { width: 100%; height: auto; }

  .medulla { fill: color-mix(in srgb, var(--accent-ai) 7%, var(--bg-primary)); }
  .cmline { stroke: var(--border-subtle); stroke-width: 1; stroke-dasharray: 4 4; }
  .zone { fill: var(--text-muted); font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.08em; }
  .vessel { stroke: var(--border-strong); stroke-width: 2.5; stroke-linecap: round; }
  .bowman { fill: var(--bg-secondary); stroke: var(--border-strong); stroke-width: 1.5; }
  .tuft { fill: color-mix(in srgb, var(--accent-ai) 30%, var(--bg-tertiary)); stroke: var(--accent-ai); stroke-width: 1.2; }
  .tuftline { fill: none; stroke: var(--accent-ai); stroke-width: 1.2; }

  .tube { fill: none; stroke: var(--border-strong); stroke-width: 6; stroke-linecap: round; }
  .tube.duct { stroke-width: 10; }
  .tube.dim { opacity: 0.45; }
  .glow { fill: none; stroke: color-mix(in srgb, var(--accent-pk) 28%, transparent); stroke-width: 18; stroke-linecap: round; }
  .active { fill: none; stroke: var(--accent-pk); stroke-width: 6; stroke-linecap: round; }
  .active.wide { stroke-width: 10; }

  .stop { fill: #c0392b; }
  .stopx { stroke: var(--bg-tertiary); stroke-width: 1.8; stroke-linecap: round; }

  .badge { fill: var(--bg-secondary); stroke: var(--border-subtle); stroke-width: 1; }
  .badge.on { fill: var(--accent-pk); stroke: var(--accent-pk); }
  .btxt { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }
  .btxt.on { fill: var(--bg-tertiary); font-weight: 700; }
  .seglbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .pct { fill: var(--text-muted); font-family: var(--font-mono); font-size: 8px; text-anchor: middle; }
  .seglbl.left, .pct.left { text-anchor: start; }
  .lead { stroke: var(--border-subtle); stroke-width: 1; }

  .effects { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2); }
  .card { border: 1px solid var(--border-subtle); border-radius: 8px; padding: var(--space-2); background: var(--bg-primary); }
  .card span { display: block; font-family: var(--font-mono); font-size: 9px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }
  .card strong { display: block; font-size: var(--text-xs); line-height: 1.35; margin-top: 2px; }
  .card em { display: block; font-style: normal; font-size: 9px; color: var(--text-muted); line-height: 1.35; margin-top: 2px; }
  .card[data-tone='danger'] { border-color: #c0392b; }
  .card[data-tone='danger'] strong { color: #c0392b; }
  .card[data-tone='warn'] strong { color: var(--accent-pd); }
  .card[data-tone='up'] strong, .card[data-tone='down'] strong { color: var(--accent-ai); }
  .card[data-tone='flat'] strong { color: var(--text-secondary); }

  .power { display: grid; gap: 3px; }
  .prow { display: grid; grid-template-columns: 110px 1fr 34px; align-items: center; gap: var(--space-2); font-family: var(--font-mono); font-size: 9px; color: var(--text-muted); }
  .prow.on { color: var(--accent-pk); font-weight: 700; }
  .pbar { height: 7px; background: var(--bg-secondary); border-radius: 999px; overflow: hidden; }
  .pbar i { display: block; height: 100%; background: var(--border-strong); border-radius: 999px; }
  .prow.on .pbar i { background: var(--accent-pk); }
  .pval { text-align: right; }
  .pcap { margin: 2px 0 0; font-size: 9px; color: var(--text-muted); font-family: var(--font-mono); text-align: center; }

  .detail { border: 1px solid var(--border-subtle); border-left: 3px solid var(--accent-pk); border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: var(--bg-primary); }
  .dnom { margin: 0 0 var(--space-2); font-family: var(--font-mono); font-weight: 700; color: var(--accent-pk); font-size: var(--text-sm); }
  dl { margin: 0; display: grid; grid-template-columns: auto 1fr; gap: 2px var(--space-3); font-size: var(--text-xs); }
  dt { font-family: var(--font-mono); color: var(--text-muted); font-size: 9px; text-transform: uppercase; letter-spacing: 0.04em; padding-top: 2px; }
  dd { margin: 0; color: var(--text-secondary); line-height: 1.45; }

  .alert { margin: 0; padding: var(--space-2) var(--space-3); border-radius: var(--radius); font-size: var(--text-xs); font-family: var(--font-mono); line-height: 1.45; }
  .alert[data-tone='danger'] { background: color-mix(in srgb, #c0392b 12%, var(--bg-primary)); color: #c0392b; border: 1px solid color-mix(in srgb, #c0392b 45%, transparent); }
  .alert[data-tone='warn'] { background: color-mix(in srgb, var(--accent-pd) 12%, var(--bg-primary)); color: var(--accent-pd); border: 1px solid color-mix(in srgb, var(--accent-pd) 40%, transparent); }
  .alert[data-tone='ok'] { background: color-mix(in srgb, var(--accent-pk) 10%, var(--bg-primary)); color: var(--accent-pk); border: 1px solid color-mix(in srgb, var(--accent-pk) 35%, transparent); }

  .sliders { display: grid; gap: 6px; }
  .sliders label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sliders span { color: var(--text-secondary); }
  .sliders b { color: var(--accent-pk); }
  .sliders input { grid-column: 1 / -1; width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: 0; text-align: center; line-height: 1.5; }
</style>
