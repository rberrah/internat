<script>
  // @ts-nocheck
  // Mesures d'association d'un tableau 2×2 : RR, OR, différence de risque, NNT/NNH.
  // Le graphe montre pourquoi l'OR « surestime » le RR : ils ne se confondent que si
  // la maladie est RARE (rare disease assumption).

  let re = 4;      // risque chez les exposés (%)
  let r0 = 2;      // risque chez les non-exposés (%)
  let n = 2000;    // effectif de chaque groupe

  // ── tableau 2×2 (effectifs entiers : les indicateurs sont recalculés dessus) ──
  $: a = Math.round((n * re) / 100);   // exposés   malades
  $: b = n - a;                        // exposés   sains
  $: c = Math.round((n * r0) / 100);   // non exp.  malades
  $: d = n - c;                        // non exp.  sains

  $: Re = a / (a + b);   // incidence chez les exposés
  $: R0 = c / (c + d);   // incidence chez les non-exposés

  $: RR = R0 > 0 ? Re / R0 : NaN;                        // risque relatif
  $: OR = b > 0 && c > 0 ? (a * d) / (b * c) : NaN;      // odds ratio
  $: DR = Re - R0;                                       // différence de risque
  $: nnx = Math.abs(DR) > 1e-6 ? Math.abs(1 / DR) : Infinity;
  $: nocif = DR > 0;                                     // exposition délétère (facteur de risque)
  $: ecart = Number.isFinite(RR) && Number.isFinite(OR) && RR > 0 ? ((OR - RR) / RR) * 100 : 0;
  $: rare = Math.max(Re, R0) < 0.10;                     // seuil usuel : incidences < 10 %

  // ── graphe : OR et RR en fonction du risque de base, à RR CONSTANT ──
  // OR(p) = RR · (1 − p) / (1 − RR·p)  → tend vers RR quand p → 0
  const W = 460, H = 250, m = { top: 16, right: 16, bottom: 36, left: 44 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  const PMAX = 0.5; // risque de base affiché : 0 → 50 %

  $: orAt = (p) => {
    const den = 1 - RR * p;
    return den > 1e-3 ? (RR * (1 - p)) / den : NaN;
  };

  // bornes de l'axe y (log) calculées sur les valeurs réellement tracées
  $: bornes = (() => {
    const vals = [RR];
    for (let i = 0; i <= 100; i++) {
      const p = 0.002 + (i / 100) * (PMAX - 0.002);
      const v = orAt(p);
      if (Number.isFinite(v) && v > 0) vals.push(Math.min(v, RR * 6 + 1));
    }
    const ok = vals.filter((v) => Number.isFinite(v) && v > 0);
    const lo = Math.log10(Math.min(...ok, 1) * 0.75);
    const hi = Math.log10(Math.max(...ok, 1) * 1.3);
    return { lo, hi };
  })();

  $: xOf = (p) => (Math.min(Math.max(p, 0), PMAX) / PMAX) * iW;
  $: yOf = (v) => {
    const l = Math.log10(Math.min(Math.max(v, Math.pow(10, bornes.lo)), Math.pow(10, bornes.hi)));
    return iH - ((l - bornes.lo) / (bornes.hi - bornes.lo)) * iH;
  };

  $: courbeOR = (() => {
    const pts = [];
    for (let i = 0; i <= 120; i++) {
      const p = 0.002 + (i / 120) * (PMAX - 0.002);
      const v = orAt(p);
      if (!Number.isFinite(v) || v <= 0) break;   // asymptote : Re = RR·p atteindrait 100 %
      pts.push(`${pts.length ? 'L' : 'M'}${xOf(p).toFixed(1)},${yOf(v).toFixed(1)}`);
    }
    return pts.join(' ');
  })();

  const TICKS_LOG = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50];
  $: ticksY = TICKS_LOG.filter((v) => Math.log10(v) >= bornes.lo && Math.log10(v) <= bornes.hi);
  const TICKS_X = [0, 10, 20, 30, 40, 50];

  const fmt = (v) => (!Number.isFinite(v) ? '—' : v >= 10 ? v.toFixed(1) : v.toFixed(2));
</script>

<div class="viz">
  <div class="tab">
    <table>
      <thead>
        <tr><th></th><th>Malades</th><th>Sains</th><th>Total</th></tr>
      </thead>
      <tbody>
        <tr><th>Exposés</th><td class="cell a">a = {a}</td><td class="cell b">b = {b}</td><td class="tot">{n}</td></tr>
        <tr><th>Non exposés</th><td class="cell c">c = {c}</td><td class="cell d">d = {d}</td><td class="tot">{n}</td></tr>
      </tbody>
    </table>
    <div class="risques">
      <p><b>Risque chez les exposés</b> R₁ = a/(a+b) = {(Re * 100).toFixed(2)} %</p>
      <p><b>Risque chez les non-exposés</b> R₀ = c/(c+d) = {(R0 * 100).toFixed(2)} %</p>
    </div>
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Odds ratio et risque relatif en fonction du risque de base">
    <g transform={`translate(${m.left},${m.top})`}>
      <!-- zone « maladie rare » : R₀ < 10 % -->
      <rect x="0" y="0" width={xOf(0.10)} height={iH} class="rarezone" />
      <text x={xOf(0.10) - 4} y="12" class="rarelbl">maladie rare → OR ≈ RR</text>

      {#each ticksY as t}
        <line x1="0" x2={iW} y1={yOf(t)} y2={yOf(t)} class="grid" />
        <text x="-6" y={yOf(t) + 3} class="tick ty">{t}</text>
      {/each}
      {#each TICKS_X as t}
        <text x={xOf(t / 100)} y={iH + 14} class="tick">{t}</text>
      {/each}

      <!-- RR : constant par construction -->
      {#if Number.isFinite(RR)}
        <line x1="0" x2={iW} y1={yOf(RR)} y2={yOf(RR)} class="rr" />
        <text x="4" y={yOf(RR) - 5} class="rrlbl">RR = {fmt(RR)}</text>
      {/if}

      <!-- OR : s'écarte du RR quand la maladie devient fréquente -->
      {#if courbeOR}<path d={courbeOR} class="or" />{/if}

      <!-- position actuelle -->
      <line x1={xOf(R0)} x2={xOf(R0)} y1="0" y2={iH} class="cur" />
      {#if Number.isFinite(OR)}<circle cx={xOf(R0)} cy={yOf(OR)} r="5" class="ptor" />{/if}
      {#if Number.isFinite(RR)}<circle cx={xOf(R0)} cy={yOf(RR)} r="4" class="ptrr" />{/if}

      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />
      <text x={iW / 2} y={iH + 30} class="axlbl">Risque de base R₀ chez les non-exposés (%)</text>
      <text transform={`translate(-34,${iH / 2}) rotate(-90)`} class="axlbl">Mesure d’association (log)</text>
    </g>
  </svg>

  <div class="stats">
    <span class="pill">RR = {fmt(RR)}</span>
    <span class="pill or">OR = {fmt(OR)}</span>
    <span class="pill">DR = {(DR * 100).toFixed(2)} points</span>
    <span class="pill" class:alert={nocif}>
      {nocif ? 'NNH' : 'NNT'} = {Number.isFinite(nnx) ? Math.ceil(nnx) : '∞'}
    </span>
    <span class="pill" class:alert={!rare}>écart OR/RR = {ecart >= 0 ? '+' : ''}{ecart.toFixed(0)} %</span>
  </div>

  <div class="verdict" class:grave={!rare}>
    {#if nocif}
      <p class="vt">Exposition délétère (facteur de risque)</p>
      <p class="vl">
        Excès absolu de risque = {(DR * 100).toFixed(2)} points → il suffit d’exposer
        <strong>{Number.isFinite(nnx) ? Math.ceil(nnx) : '—'}</strong> sujets pour provoquer 1 cas supplémentaire (NNH,
        <em>number needed to harm</em>).
      </p>
    {:else if DR < 0}
      <p class="vt">Exposition protectrice (traitement efficace)</p>
      <p class="vl">
        Réduction absolue du risque (RAR) = {(-DR * 100).toFixed(2)} points → il faut traiter
        <strong>{Number.isFinite(nnx) ? Math.ceil(nnx) : '—'}</strong> sujets pour éviter 1 événement (NNT).
        Réduction relative du risque (RRR) = {Number.isFinite(RR) ? ((1 - RR) * 100).toFixed(0) : '—'} %.
      </p>
    {:else}
      <p class="vt">Aucune association</p>
      <p class="vl">R₁ = R₀ → RR = 1 et OR = 1 : l’exposition ne change rien. Le NNT est infini.</p>
    {/if}
    <p class="vl small">
      {#if rare}
        Incidences &lt; 10 % : <strong>maladie rare, OR ≈ RR</strong> — l’odds ratio est ici une bonne approximation du risque relatif.
      {:else}
        Incidences ≥ 10 % : <strong>maladie fréquente, OR ≠ RR</strong> — l’OR s’éloigne de 1 bien plus vite que le RR et
        <strong>exagère l’effet</strong>. Ne jamais lire un OR comme un RR dans ce cas.
      {/if}
    </p>
  </div>

  <div class="note">
    <p><b>Cohorte</b> (exposés vs non-exposés suivis dans le temps) : les incidences R₁ et R₀ sont mesurables → le <strong>RR</strong> est calculable (et l’OR aussi).</p>
    <p><b>Cas-témoins</b> (on part de la maladie et on remonte à l’exposition) : le nombre de malades est fixé par l’enquêteur, l’incidence n’est donc pas estimable → <strong>seul l’OR</strong> est calculable ; il n’approche le RR que si la maladie est rare.</p>
    <p><b>Essai clinique</b> : c’est la RAR et le <strong>NNT</strong> qui donnent la portée clinique — un RR de 0,5 sur un risque de base de 0,2 % ne fait gagner que 0,1 point (NNT = 1000).</p>
  </div>

  <div class="controls">
    <label>Risque chez les exposés R₁ <span>{re.toFixed(1)} %</span>
      <input type="range" min="0.2" max="80" step="0.2" bind:value={re} /></label>
    <label>Risque chez les non-exposés R₀ <span>{r0.toFixed(1)} %</span>
      <input type="range" min="0.2" max="50" step="0.2" bind:value={r0} /></label>
    <label>Effectif par groupe <span>{n}</span>
      <input type="range" min="1000" max="10000" step="500" bind:value={n} /></label>
  </div>

  <p class="hint">
    Gardez R₁ = 2 × R₀ (RR = 2 constant) et faites glisser R₀ : à 1 % l’OR vaut 2,02 — confondu avec le RR ;
    à 10 % il vaut 2,25 ; à 30 % il atteint 3,5 et à 40 % il explose à 6,0, pour un risque toujours seulement doublé.
    C’est la <strong>rare disease assumption</strong> : l’OR n’approxime le RR que si la maladie est rare. Quand elle est
    fréquente, l’OR s’écarte de 1 <strong>toujours plus que le RR</strong> — dans les deux sens (il exagère aussi bien un
    facteur de risque qu’un effet protecteur).
  </p>
</div>

<style>
  .viz { border: 1px solid var(--border-subtle); border-radius: var(--radius, 8px); padding: var(--space-4); background: var(--bg-tertiary); }
  svg { width: 100%; height: auto; display: block; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .grid { stroke: var(--border-subtle); stroke-width: 1; opacity: 0.6; }
  .tick { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; }
  .tick.ty { text-anchor: end; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .rarezone { fill: color-mix(in srgb, var(--accent-pk) 10%, transparent); }
  .rarelbl { fill: var(--accent-pk); font-family: var(--font-mono); font-size: 9px; text-anchor: end; }
  .rr { stroke: var(--accent-pk); stroke-width: 2; stroke-dasharray: 6 3; }
  .rrlbl { fill: var(--accent-pk); font-family: var(--font-mono); font-size: 10px; }
  .or { fill: none; stroke: var(--accent-pd); stroke-width: 2.4; }
  .cur { stroke: var(--border-strong); stroke-width: 1; stroke-dasharray: 2 3; }
  .ptor { fill: var(--accent-pd); stroke: var(--bg-tertiary); stroke-width: 1.5; }
  .ptrr { fill: var(--accent-pk); stroke: var(--bg-tertiary); stroke-width: 1.5; }

  .tab { display: grid; grid-template-columns: 1fr; gap: var(--space-2); margin-bottom: var(--space-3); }
  table { border-collapse: collapse; width: 100%; font-family: var(--font-mono); font-size: var(--text-xs); }
  th { color: var(--text-muted); font-weight: 400; text-align: left; padding: 4px 8px; }
  thead th { text-align: center; }
  td { text-align: center; padding: 6px 8px; border: 1px solid var(--border-subtle); background: var(--bg-primary); font-weight: 700; }
  .cell.a, .cell.c { color: var(--accent-pd); }
  .cell.b, .cell.d { color: var(--text-secondary); }
  .tot { color: var(--text-muted); font-weight: 400; border: none; background: transparent; }
  .risques p { margin: 0; font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-secondary); }
  .risques b { color: var(--text-muted); font-weight: 400; }

  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; margin: var(--space-3) 0 var(--space-2); }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.or { background: color-mix(in srgb, var(--accent-pd) 15%, var(--bg-primary)); color: var(--accent-pd); }
  .pill.alert { background: color-mix(in srgb, #c0392b 15%, var(--bg-primary)); color: #c0392b; }

  .verdict { border: 1px solid var(--border-subtle); border-left: 3px solid var(--accent-pk); border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: var(--bg-primary); margin-bottom: var(--space-3); }
  .verdict.grave { border-left-color: #c0392b; }
  .vt { margin: 0 0 4px; font-family: var(--font-mono); font-size: var(--text-sm); font-weight: 700; color: var(--accent-pk); }
  .verdict.grave .vt { color: #c0392b; }
  .vl { margin: 0 0 4px; font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.5; }
  .vl.small { font-size: var(--text-xs); color: var(--text-muted); margin: 6px 0 0; }
  .vl strong { color: var(--text-secondary); }

  .note { border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: var(--bg-secondary); margin-bottom: var(--space-3); }
  .note p { margin: 0 0 4px; font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.5; }
  .note p:last-child { margin-bottom: 0; }
  .note b { font-family: var(--font-mono); color: var(--accent-pk); margin-right: 4px; }

  .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--space-2) var(--space-4); margin-top: var(--space-2); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  input[type=range] { width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: var(--space-3) 0 0; text-align: center; line-height: 1.6; }
  .hint strong { color: var(--text-secondary); }
</style>
