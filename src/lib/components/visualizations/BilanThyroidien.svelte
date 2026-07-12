<script>
  // @ts-nocheck
  // Lecture d'un bilan thyroïdien : plan TSH (échelle log) × T4 libre. Le couple TSH/T4L
  // suffit à nommer la situation — la rétrocontrôle hypophysaire explique chaque quadrant.

  // Valeurs usuelles (adulte, dépendent de la technique de dosage)
  const TSH_MIN = 0.4, TSH_MAX = 4.0;   // mUI/L
  const T4_MIN = 10, T4_MAX = 20;       // pmol/L  (≈ 0,8–1,6 ng/dL)

  let logTsh = 0;   // curseur en log10 : TSH = 10^logTsh
  let t4 = 15;      // pmol/L

  $: tsh = Math.pow(10, logTsh);
  $: tshTxt = tsh < 0.1 ? tsh.toFixed(3) : tsh < 1 ? tsh.toFixed(2) : tsh.toFixed(1);

  $: tshBas = tsh < TSH_MIN;
  $: tshHaut = tsh > TSH_MAX;
  $: t4Bas = t4 < T4_MIN;
  $: t4Haut = t4 > T4_MAX;

  // ── logique diagnostique : on lit la T4L en premier, la TSH tranche l'origine ──
  $: dx = (() => {
    if (t4Bas) {
      if (tshHaut)
        return {
          nom: 'Hypothyroïdie primaire (périphérique) patente',
          mec: 'La thyroïde ne produit plus assez de T4 → levée du rétrocontrôle négatif → l’hypophyse s’emballe et la TSH monte.',
          eti: 'Thyroïdite de Hashimoto (anti-TPO +), post-thyroïdectomie / iode 131, carence iodée, iatrogène (amiodarone, lithium, anti-tyrosine-kinase).',
          cat: 'Lévothyroxine (LT4) à vie, titrée sur la TSH (cible 0,4–4 mUI/L), contrôle 6–8 semaines après chaque changement de dose.',
          grave: true
        };
      return {
        nom: 'Hypothyroïdie centrale (secondaire / tertiaire)',
        mec: 'T4L basse SANS élévation de la TSH : le pilote hypophysaire est en panne. Une TSH « normale » face à une T4L basse est un résultat INADAPTÉ, donc pathologique.',
        eti: 'Adénome hypophysaire, syndrome de Sheehan, hypophysite, chirurgie/radiothérapie hypophysaire, atteinte hypothalamique.',
        cat: 'Explorer les autres axes hypophysaires (cortisol +++ : substituer l’hydrocortisone AVANT la LT4) et imager l’hypophyse. Ici le suivi ne se fait PAS sur la TSH mais sur la T4L.',
        grave: true
      };
    }
    if (t4Haut) {
      if (tshBas)
        return {
          nom: 'Hyperthyroïdie primaire patente',
          mec: 'Excès d’hormones thyroïdiennes → rétrocontrôle négatif maximal → TSH freinée, souvent effondrée (< 0,1 mUI/L).',
          eti: 'Maladie de Basedow (anticorps anti-récepteur de la TSH), goitre multinodulaire toxique, adénome toxique, thyroïdite (phase initiale), surcharge iodée (amiodarone).',
          cat: 'Antithyroïdiens de synthèse (carbimazole, thiamazole, PTU) — surveiller la NFS : risque d’agranulocytose (toute fièvre/angine = NFS en urgence). Bêtabloquant sur les symptômes.',
          grave: true
        };
      return {
        nom: 'Situation rare : T4L haute sans TSH freinée',
        mec: 'TSH normale ou élevée alors que la T4L est haute : le rétrocontrôle ne fonctionne pas — profil « inapproprié ».',
        eti: 'Adénome hypophysaire thyréotrope, résistance aux hormones thyroïdiennes… mais d’abord une INTERFÉRENCE de dosage (anticorps hétérophiles, biotine) : redoser sur une autre technique.',
        cat: 'Ne pas traiter sur ce seul résultat : recontrôler, avec T3L, sur une technique différente.',
        grave: true
      };
    }
    // T4L normale
    if (tshHaut)
      return {
        nom: 'Hypothyroïdie fruste (infraclinique)',
        mec: 'La TSH monte pour maintenir la T4L dans la norme : le rétrocontrôle compense encore. Anomalie purement biologique.',
        eti: 'Le plus souvent Hashimoto débutant (doser les anti-TPO).',
        cat: 'Confirmer sur un 2ᵉ dosage à 1–3 mois. Traiter si TSH > 10 mUI/L, ou si TSH entre 4 et 10 avec anti-TPO +, symptômes, grossesse (ou désir) ou risque cardiovasculaire.',
        grave: false
      };
    if (tshBas)
      return {
        nom: 'Hyperthyroïdie fruste (infraclinique)',
        mec: 'TSH freinée alors que la T4L reste normale : forme débutante ou a minima.',
        eti: 'Goitre multinodulaire, adénome, surdosage en LT4 (cause n°1 — vérifier l’ordonnance !).',
        cat: 'Doser la T3L : elle peut être isolément élevée (hyperthyroïdie à T3). Contrôler à 3 mois. Traiter surtout si TSH < 0,1 mUI/L chez un sujet âgé ou cardiaque (risque de fibrillation atriale, d’ostéoporose).',
        grave: false
      };
    return {
      nom: 'Euthyroïdie',
      mec: 'TSH et T4L dans les valeurs usuelles : l’axe hypothalamo-hypophyso-thyroïdien est à l’équilibre.',
      eti: '—',
      cat: 'En dépistage, la TSH seule suffit : si elle est normale, la T4L est inutile.',
      grave: false
    };
  })();

  // ── graphe : x = log(TSH), y = T4L ──
  const W = 460, H = 290, m = { top: 16, right: 16, bottom: 38, left: 48 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  const LMIN = -2, LMAX = 2;            // TSH de 0,01 à 100 mUI/L
  const T4VMIN = 2, T4VMAX = 40;        // pmol/L
  $: xOf = (l) => ((Math.min(Math.max(l, LMIN), LMAX) - LMIN) / (LMAX - LMIN)) * iW;
  $: xOfTsh = (v) => xOf(Math.log10(v));
  $: yOf = (v) => iH - ((Math.min(Math.max(v, T4VMIN), T4VMAX) - T4VMIN) / (T4VMAX - T4VMIN)) * iH;
  const XT = [0.01, 0.1, 1, 10, 100];
  const YT = [5, 10, 15, 20, 25, 30, 35];

  // bornes des bandes
  $: xLo = xOfTsh(TSH_MIN);
  $: xHi = xOfTsh(TSH_MAX);
  $: yLo = yOf(T4_MIN);   // attention : yLo est PLUS BAS à l'écran (valeur y grande)
  $: yHi = yOf(T4_MAX);

  const ZONES = [
    // col: 0 = TSH basse, 1 = normale, 2 = haute | row: 0 = T4L haute, 1 = normale, 2 = basse
    { col: 0, row: 0, t: 'Hyperthyroïdie primaire', k: 'hyper' },
    { col: 0, row: 1, t: 'Hyperthyr. fruste', k: 'fruste' },
    { col: 0, row: 2, t: 'Hypothyr. centrale', k: 'hypo' },
    { col: 1, row: 0, t: 'Profil inapproprié', k: 'rare' },
    { col: 1, row: 1, t: 'EUTHYROÏDIE', k: 'eu' },
    { col: 1, row: 2, t: 'Hypothyr. centrale', k: 'hypo' },
    { col: 2, row: 0, t: 'Profil inapproprié', k: 'rare' },
    { col: 2, row: 1, t: 'Hypothyr. fruste', k: 'fruste' },
    { col: 2, row: 2, t: 'Hypothyroïdie primaire', k: 'hypo' }
  ];
  $: colX = [0, xLo, xHi, iW];
  $: rowY = [0, yHi, yLo, iH];
  $: curCol = tshBas ? 0 : tshHaut ? 2 : 1;
  $: curRow = t4Haut ? 0 : t4Bas ? 2 : 1;
</script>

<div class="viz">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Plan TSH en échelle logarithmique contre T4 libre, avec les zones diagnostiques">
    <g transform={`translate(${m.left},${m.top})`}>
      {#each ZONES as z}
        <rect
          x={colX[z.col]} y={rowY[z.row]}
          width={colX[z.col + 1] - colX[z.col]}
          height={rowY[z.row + 1] - rowY[z.row]}
          class="zone {z.k}"
          class:on={z.col === curCol && z.row === curRow}
        />
        <text
          x={(colX[z.col] + colX[z.col + 1]) / 2}
          y={(rowY[z.row] + rowY[z.row + 1]) / 2 + 3}
          class="zlbl" class:onlbl={z.col === curCol && z.row === curRow}>{z.t}</text>
      {/each}

      <!-- bornes des normes -->
      <line x1={xLo} x2={xLo} y1="0" y2={iH} class="norm" />
      <line x1={xHi} x2={xHi} y1="0" y2={iH} class="norm" />
      <line x1="0" x2={iW} y1={yLo} y2={yLo} class="norm" />
      <line x1="0" x2={iW} y1={yHi} y2={yHi} class="norm" />

      <!-- graduations -->
      {#each XT as t}
        <text x={xOfTsh(t)} y={iH + 14} class="tick">{t}</text>
      {/each}
      {#each YT as t}
        <text x="-6" y={yOf(t) + 3} class="tick ty">{t}</text>
      {/each}

      <!-- axes -->
      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />
      <text x={iW / 2} y={iH + 31} class="axlbl">TSH (mUI/L) — échelle logarithmique</text>
      <text transform={`translate(-38,${iH / 2}) rotate(-90)`} class="axlbl">T4 libre (pmol/L)</text>

      <!-- patient -->
      <line x1={xOfTsh(tsh)} x2={xOfTsh(tsh)} y1={yOf(t4)} y2={iH} class="lead" />
      <line x1="0" x2={xOfTsh(tsh)} y1={yOf(t4)} y2={yOf(t4)} class="lead" />
      <circle cx={xOfTsh(tsh)} cy={yOf(t4)} r="7" class="pt" class:alert={dx.grave} />
    </g>
  </svg>

  <div class="stats">
    <span class="pill" class:alert={tshBas || tshHaut}>TSH = {tshTxt} mUI/L {tshBas ? '↓' : tshHaut ? '↑' : ''}</span>
    <span class="pill" class:alert={t4Bas || t4Haut}>T4L = {t4.toFixed(1)} pmol/L {t4Bas ? '↓' : t4Haut ? '↑' : ''}</span>
    <span class="pill ref">réf. TSH {TSH_MIN}–{TSH_MAX} mUI/L</span>
    <span class="pill ref">réf. T4L {T4_MIN}–{T4_MAX} pmol/L</span>
  </div>

  <div class="verdict" class:grave={dx.grave}>
    <p class="vt">{dx.nom}</p>
    <p class="vl"><b>Mécanisme</b> {dx.mec}</p>
    {#if dx.eti !== '—'}<p class="vl"><b>Étiologies</b> {dx.eti}</p>{/if}
    <p class="vl"><b>Conduite</b> {dx.cat}</p>
  </div>

  <div class="controls">
    <label>TSH <span>{tshTxt} mUI/L</span>
      <input type="range" min="-2" max="2" step="0.02" bind:value={logTsh} /></label>
    <label>T4 libre <span>{t4.toFixed(1)} pmol/L</span>
      <input type="range" min="2" max="40" step="0.5" bind:value={t4} /></label>
  </div>

  <p class="hint">
    Déplacez le point : la <strong>TSH</strong> dit d’où vient le problème (elle varie en sens INVERSE de la thyroïde quand
    l’atteinte est périphérique), la <strong>T4L</strong> dit s’il est patent ou fruste. Le piège : une TSH normale
    ou basse avec une T4L basse n’est pas rassurante — c’est une atteinte <strong>centrale</strong>.
    Les valeurs usuelles affichées sont indicatives : elles dépendent de la technique de dosage et de l’âge
    (la TSH monte physiologiquement chez le sujet âgé, et s’abaisse au 1<sup>er</sup> trimestre de grossesse).
  </p>
</div>

<style>
  .viz { border: 1px solid var(--border-subtle); border-radius: var(--radius, 8px); padding: var(--space-4); background: var(--bg-tertiary); }
  svg { width: 100%; height: auto; display: block; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .zone { opacity: 0.35; stroke: var(--bg-tertiary); stroke-width: 1; }
  .zone.on { opacity: 0.9; }
  .eu { fill: color-mix(in srgb, var(--accent-pk) 45%, var(--bg-primary)); }
  .fruste { fill: color-mix(in srgb, var(--accent-pd) 35%, var(--bg-primary)); }
  .hypo { fill: color-mix(in srgb, var(--accent-ai) 45%, var(--bg-primary)); }
  .hyper { fill: color-mix(in srgb, #c0392b 40%, var(--bg-primary)); }
  .rare { fill: color-mix(in srgb, var(--text-muted) 30%, var(--bg-primary)); }
  .zlbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 8px; text-anchor: middle; pointer-events: none; }
  .zlbl.onlbl { fill: var(--text-primary, var(--text-secondary)); font-weight: 700; font-size: 9px; }
  .norm { stroke: var(--border-strong); stroke-width: 1; stroke-dasharray: 4 3; }
  .tick { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }
  .tick.ty { text-anchor: end; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .lead { stroke: var(--accent-pk); stroke-width: 1; stroke-dasharray: 2 3; opacity: 0.7; }
  .pt { fill: var(--accent-pk); stroke: var(--bg-tertiary); stroke-width: 2; }
  .pt.alert { fill: #c0392b; }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; margin: var(--space-3) 0 var(--space-2); }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.alert { background: color-mix(in srgb, #c0392b 15%, var(--bg-primary)); color: #c0392b; }
  .pill.ref { background: var(--bg-primary); color: var(--text-muted); font-weight: 400; border: 1px solid var(--border-subtle); }
  .verdict { border: 1px solid var(--border-subtle); border-left: 3px solid var(--accent-pk); border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: var(--bg-primary); margin-bottom: var(--space-3); }
  .verdict.grave { border-left-color: #c0392b; }
  .vt { margin: 0 0 6px; font-family: var(--font-mono); font-size: var(--text-sm); font-weight: 700; color: var(--accent-pk); }
  .verdict.grave .vt { color: #c0392b; }
  .vl { margin: 0 0 4px; font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.5; }
  .vl b { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted); margin-right: 6px; }
  .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--space-2) var(--space-4); margin-top: var(--space-2); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  input[type=range] { width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: var(--space-3) 0 0; text-align: center; line-height: 1.6; }
  .hint strong { color: var(--text-secondary); }
</style>
