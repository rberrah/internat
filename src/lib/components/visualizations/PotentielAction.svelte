<script>
  // @ts-nocheck
  // Potentiel d'action : modèle de Hodgkin-Huxley (calé sur repos −70 mV, seuil ≈ −55 mV).
  // Montre le tout-ou-rien, les conductances gNa (rapide) / gK (retardée), la période
  // réfractaire, et l'effet d'un blocage des canaux Na+ (classe I) ou K+ (classe III).

  let stim = 30;      // intensité du stimulus S1 (µA/cm²)
  let naBlock = 0;    // % de canaux Na+ bloqués (anesthésiques locaux, antiarythmiques Ia/Ib/Ic)
  let kBlock = 0;     // % de canaux K+ bloqués (classe III : amiodarone, sotalol)
  let s2on = false;   // second stimulus (test de la période réfractaire)
  let s2delay = 6;    // délai S1 → S2 (ms)

  // ── constantes du modèle (mS/cm², mV, µF/cm²) ──
  const C = 1;
  const ENa = 50, EK = -85;          // potentiels d'équilibre (Nernst)
  const GNA = 100, GK = 36, gL = 1;  // conductances maximales
  const V0 = -70;                    // potentiel de repos
  const VTHR = -55;                  // seuil de déclenchement
  const T = 40, DT = 0.01;           // durée simulée (ms) et pas d'intégration
  const TS1 = 4, PULSE = 1;          // instant et durée du stimulus (ms)

  // cinétiques des portes (Hodgkin-Huxley)
  const am = (v) => (Math.abs(v + 40) < 1e-6 ? 1 : (0.1 * (v + 40)) / (1 - Math.exp(-(v + 40) / 10)));
  const bm = (v) => 4 * Math.exp(-(v + 65) / 18);
  const ah = (v) => 0.07 * Math.exp(-(v + 65) / 20);
  const bh = (v) => 1 / (1 + Math.exp(-(v + 35) / 10));
  const an = (v) => (Math.abs(v + 55) < 1e-6 ? 0.1 : (0.01 * (v + 55)) / (1 - Math.exp(-(v + 55) / 10)));
  const bn = (v) => 0.125 * Math.exp(-(v + 65) / 80);

  const M0 = am(V0) / (am(V0) + bm(V0));
  const H0 = ah(V0) / (ah(V0) + bh(V0));
  const N0 = an(V0) / (an(V0) + bn(V0));
  // EL choisi pour que le courant net soit nul à −70 mV (repos stable)
  const EL = V0 + (GNA * M0 ** 3 * H0 * (V0 - ENa) + GK * N0 ** 4 * (V0 - EK)) / gL;
  const REST = { V: V0, m: M0, h: H0, n: N0 };

  function dVdt(s, I, na, k) {
    const gNa = GNA * na * s.m ** 3 * s.h;
    const gK = GK * k * s.n ** 4;
    return { d: (I - gNa * (s.V - ENa) - gK * (s.V - EK) - gL * (s.V - EL)) / C, gNa, gK };
  }
  function step(s, I, na, k) {
    const v = s.V;
    const { d } = dVdt(s, I, na, k);
    return {
      V: v + DT * d,
      m: s.m + DT * (am(v) * (1 - s.m) - bm(v) * s.m),
      h: s.h + DT * (ah(v) * (1 - s.h) - bh(v) * s.h),
      n: s.n + DT * (an(v) * (1 - s.n) - bn(v) * s.n)
    };
  }

  // Un PA est REGENERATIF : après la fin du stimulus (I = 0), le potentiel continue
  // de monter — seul le courant Na+ entrant peut le faire. Ce critère élimine
  // la simple charge passive de la membrane par un courant injecté trop fort.
  function fires(st, amp, na, k) {
    let s = { ...st };
    for (let i = 0; i * DT < PULSE; i++) s = step(s, amp, na, k);
    let maxd = -1e9, peak = -1e9;
    for (let i = 0; i * DT <= 12; i++) {
      const { d } = dVdt(s, 0, na, k);
      if (d > maxd) maxd = d;
      s = step(s, 0, na, k);
      if (s.V > peak) peak = s.V;
    }
    return maxd > 10 && peak > -20;
  }
  // Plus petite intensité déclenchant un PA. Balayage CROISSANT en 2 passes (pas de 5
  // puis affinage) : au-delà de E_Na la réponse n'est plus monotone, une dichotomie
  // conclurait à tort qu'un stimulus énorme « ne déclenche rien ».
  function rheobase(na, k) {
    let c = -1;
    for (let a = 5; a <= 250; a += 5) if (fires(REST, a, na, k)) { c = a; break; }
    if (c < 0) return Infinity;
    for (let a = c - 4; a < c; a++) if (fires(REST, a, na, k)) return a;
    return c;
  }
  // « Aucun stimulus, si intense soit-il » : on sonde PLUSIEURS intensités.
  // Une amplitude unique trop forte dépasserait E_Na et échapperait au critère.
  const firesAny = (st, na, k, amps) => amps.some((a) => fires(st, a, na, k));

  // simulation principale, avec sauvegarde des états (pour sonder la réfractarité)
  function simulate(amp, na, k, useS2, dly) {
    let s = { ...REST };
    const V = [], gNa = [], gK = [], states = [];
    let peak = -200, trough = 0, upstroke = 0, spikes = 0, prevV = V0;
    const N = Math.round(T / DT);
    for (let i = 0; i <= N; i++) {
      const t = i * DT;
      const inS1 = t >= TS1 && t < TS1 + PULSE;
      const inS2 = useS2 && t >= TS1 + dly && t < TS1 + dly + PULSE;
      const I = inS1 || inS2 ? amp : 0;
      const g = dVdt(s, I, na, k);
      states.push({ t, ...s });
      if (i % 4 === 0) { V.push([t, s.V]); gNa.push([t, g.gNa]); gK.push([t, g.gK]); }
      if (t > TS1) {
        if (s.V > peak) peak = s.V;
        if (!inS1 && !inS2 && g.d > upstroke) upstroke = g.d;
        if (t > TS1 + 3 && s.V < trough) trough = s.V;
        if (prevV < 0 && s.V >= 0) spikes++;
      }
      prevV = s.V;
      s = step(s, I, na, k);
    }
    const above = states.filter((p) => p.t > TS1 && p.V > VTHR);
    const dur = above.length ? above[above.length - 1].t - above[0].t : 0;
    return { V, gNa, gK, states, peak, trough, upstroke, spikes, dur };
  }

  // Périodes réfractaires : on repart d'un état sauvegardé et on teste un 2e stimulus.
  // PRA : même un stimulus supramaximal (×6) échoue → canaux Na+ inactivés (porte h fermée).
  // PRR : le stimulus habituel redevient efficace.
  function refractory(states, i0, na, k) {
    if (!isFinite(i0)) return { pra: null, prr: null };
    const up = states.find((p) => p.t > TS1 && p.V > VTHR);
    if (!up) return { pra: null, prr: null };
    const t0 = up.t;
    const strong = [i0 * 1.5, i0 * 2.5, i0 * 4, i0 * 6];
    let pra = null, prr = null;
    for (let d = 0.5; d <= 22; d += 0.5) {
      const st = states[Math.round((t0 + d) / DT)];
      if (!st) continue;
      if (pra === null && firesAny(st, na, k, strong)) pra = d;
      if (pra !== null && prr === null && fires(st, i0 * 2, na, k)) { prr = d; break; }
    }
    return { pra, prr, t0 };
  }

  $: na = 1 - naBlock / 100;
  $: k = 1 - kBlock / 100;
  $: thr = rheobase(na, k);
  $: sim = simulate(stim, na, k, s2on, s2delay);
  $: ref = refractory(simulate(Math.max(stim, isFinite(thr) ? thr * 2 : stim), na, k, false, 0).states, thr, na, k);
  $: fired = sim.spikes >= 1;
  $: fired2 = sim.spikes >= 2;

  // statut du 2e stimulus — « inexcitable » se juge sur le SEUIL (thr), pas sur ref.pra :
  // une cellule peut très bien être excitable et avoir des bornes réfractaires non mesurées.
  $: s2status = !s2on
    ? null
    : !isFinite(thr)
      ? { txt: 'Cellule INEXCITABLE : le blocage des canaux Na⁺ est tel qu’aucun potentiel d’action n’est possible, même avec S1.', cls: 'bad' }
      : ref.pra === null
        ? { txt: 'Bornes réfractaires non mesurables dans ces conditions.', cls: 'warn' }
        : s2delay < ref.pra
          ? { txt: `Période réfractaire ABSOLUE (< ${ref.pra} ms) — aucun stimulus, si intense soit-il, ne déclenche de PA : les canaux Na⁺ sont inactivés (porte h fermée).`, cls: 'bad' }
          : ref.prr !== null && s2delay < ref.prr
            ? { txt: `Période réfractaire RELATIVE (${ref.pra}–${ref.prr} ms) — il faut un stimulus plus intense, et le PA obtenu est d’amplitude réduite.`, cls: 'warn' }
            : { txt: 'Excitabilité normale récupérée — un 2ᵉ PA identique est possible.', cls: 'ok' };

  // ── géométrie ──
  const W = 480, H = 330;
  const m = { top: 14, right: 14, bottom: 30, left: 44 };
  const H1 = 178;                     // hauteur du panneau Vm
  const GAP = 26;
  $: iW = W - m.left - m.right;
  $: H2 = H - m.top - m.bottom - H1 - GAP;
  const VMIN = -95, VMAX = 55;
  $: xOf = (t) => (t / T) * iW;
  $: yV = (v) => H1 - ((v - VMIN) / (VMAX - VMIN)) * H1;
  $: gMax = Math.max(10, ...sim.gNa.map((p) => p[1]), ...sim.gK.map((p) => p[1]));
  $: yG = (g) => H2 - (g / gMax) * H2;
  const path = (pts, fx, fy) => pts.map((p, i) => `${i ? 'L' : 'M'}${fx(p[0]).toFixed(1)},${fy(p[1]).toFixed(1)}`).join(' ');
  $: pV = path(sim.V, xOf, yV);
  $: pNa = path(sim.gNa, xOf, yG);
  $: pK = path(sim.gK, xOf, yG);
</script>

<div class="viz">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Potentiel d'action : potentiel de membrane et conductances sodique et potassique au cours du temps">
    <g transform={`translate(${m.left},${m.top})`}>
      <!-- ── panneau 1 : potentiel de membrane ── -->
      {#if ref.pra !== null && ref.t0 !== undefined}
        <rect x={xOf(ref.t0)} y="0" width={xOf(ref.pra)} height={H1} class="band pra" />
        <text x={xOf(ref.t0) + 3} y="11" class="bandlbl pralbl">PRA</text>
        {#if ref.prr !== null}
          <rect x={xOf(ref.t0 + ref.pra)} y="0" width={xOf(ref.prr - ref.pra)} height={H1} class="band prr" />
          <text x={xOf(ref.t0 + ref.pra) + 3} y="11" class="bandlbl prrlbl">PRR</text>
        {/if}
      {/if}

      <line x1="0" x2={iW} y1={yV(V0)} y2={yV(V0)} class="ref" />
      <text x={iW - 2} y={yV(V0) - 4} class="reflbl">repos −70 mV</text>
      <line x1="0" x2={iW} y1={yV(VTHR)} y2={yV(VTHR)} class="thr" />
      <text x={iW - 2} y={yV(VTHR) - 4} class="thrlbl">seuil −55 mV</text>
      <line x1="0" x2={iW} y1={yV(0)} y2={yV(0)} class="zero" />

      <path d={pV} class="vm" class:sub={!fired} />

      <!-- marques des stimulus -->
      <line x1={xOf(TS1)} x2={xOf(TS1)} y1={H1} y2={H1 - 14} class="stim" />
      <text x={xOf(TS1)} y={H1 - 17} class="stimlbl">S1</text>
      {#if s2on}
        <line x1={xOf(TS1 + s2delay)} x2={xOf(TS1 + s2delay)} y1={H1} y2={H1 - 14} class="stim s2" />
        <text x={xOf(TS1 + s2delay)} y={H1 - 17} class="stimlbl s2lbl">S2</text>
      {/if}

      <line x1="0" x2="0" y1="0" y2={H1} class="axis" />
      <line x1="0" x2={iW} y1={H1} y2={H1} class="axis" />
      <text transform={`translate(-33,${H1 / 2}) rotate(-90)`} class="axlbl">Vm (mV)</text>
      <text x="-6" y={yV(40) + 3} class="tick">+40</text>
      <text x="-6" y={yV(-90) + 3} class="tick">−90</text>

      <!-- ── panneau 2 : conductances ── -->
      <g transform={`translate(0,${H1 + GAP})`}>
        <path d={pNa} class="gna" />
        <path d={pK} class="gk" />
        <line x1="0" x2="0" y1="0" y2={H2} class="axis" />
        <line x1="0" x2={iW} y1={H2} y2={H2} class="axis" />
        <text transform={`translate(-33,${H2 / 2}) rotate(-90)`} class="axlbl">g (mS/cm²)</text>
        <text x={iW / 2} y={H2 + 24} class="axlbl">Temps (ms)</text>
        <text x={iW - 2} y="10" class="glbl gnalbl">gNa⁺ rapide</text>
        <text x={iW - 2} y="22" class="glbl gklbl">gK⁺ retardée</text>
      </g>
    </g>
  </svg>

  <div class="stats">
    <span class="pill" class:alert={!fired}>{fired ? 'PA déclenché' : 'sous le seuil — pas de PA'}</span>
    <span class="pill">seuil = {isFinite(thr) ? thr + ' µA/cm²' : '∞'}</span>
    <span class="pill">pic = {fired ? sim.peak.toFixed(0) : '—'} mV</span>
    <span class="pill">hyperpol. = {fired ? sim.trough.toFixed(0) : '—'} mV</span>
    <span class="pill">durée = {fired ? sim.dur.toFixed(1) : '—'} ms</span>
    <span class="pill">dV/dt max = {fired ? sim.upstroke.toFixed(0) : '—'} mV/ms</span>
  </div>

  {#if s2status}
    <p class="verdict {s2status.cls}">
      <strong>S2 à {s2delay} ms :</strong> {fired2 ? '2ᵉ PA déclenché.' : 'pas de 2ᵉ PA.'} {s2status.txt}
    </p>
  {/if}

  <div class="controls">
    <label>Intensité du stimulus <span>{stim} µA/cm²</span>
      <input type="range" min="5" max="120" step="1" bind:value={stim} /></label>
    <label>Blocage canaux Na⁺ (classe I) <span>{naBlock} %</span>
      <input type="range" min="0" max="95" step="5" bind:value={naBlock} /></label>
    <label>Blocage canaux K⁺ (classe III) <span>{kBlock} %</span>
      <input type="range" min="0" max="95" step="5" bind:value={kBlock} /></label>
    <label>Délai du 2ᵉ stimulus <span>{s2delay} ms</span>
      <input type="range" min="1" max="20" step="0.5" bind:value={s2delay} disabled={!s2on} /></label>
  </div>

  <label class="check"><input type="checkbox" bind:checked={s2on} /> Appliquer un 2ᵉ stimulus (tester la période réfractaire)</label>

  <div class="notes">
    <p><strong>Tout ou rien.</strong> Sous le seuil (−55 mV) : rien. Au-dessus : le PA part toujours avec la même amplitude — augmenter l'intensité ne le rend pas plus grand.</p>
    <p><strong>Blocage Na⁺</strong> (anesthésiques locaux : lidocaïne ; antiarythmiques de classe I : flécaïnide) → le seuil s'élève, la vitesse de dépolarisation (dV/dt max) chute — <em>ralentissement de conduction, élargissement du QRS</em> — puis le PA est aboli.</p>
    <p><strong>Blocage K⁺</strong> (classe III : amiodarone, sotalol) → la repolarisation traîne : le PA s'allonge et la période réfractaire aussi — <em>allongement du QT, risque de torsades de pointes</em>. (Principe transposé : le PA cardiaque comporte en plus un plateau calcique.)</p>
  </div>

  <p class="hint">Montez l'intensité pas à pas pour trouver le seuil, puis bloquez les canaux Na⁺ ou K⁺ ; cochez le 2ᵉ stimulus et rapprochez-le du premier pour buter sur la période réfractaire.</p>
</div>

<style>
  .viz { border: 1px solid var(--border-subtle); border-radius: var(--radius, 8px); padding: var(--space-4); background: var(--bg-tertiary); }
  svg { width: 100%; height: auto; display: block; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .tick { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: end; }
  .vm { fill: none; stroke: var(--accent-pk); stroke-width: 2.4; }
  .vm.sub { stroke: var(--text-muted); stroke-dasharray: 4 3; }
  .gna { fill: none; stroke: var(--accent-pd); stroke-width: 2; }
  .gk { fill: none; stroke: var(--accent-ai); stroke-width: 2; }
  .glbl { font-family: var(--font-mono); font-size: 9px; text-anchor: end; font-weight: 700; }
  .gnalbl { fill: var(--accent-pd); }
  .gklbl { fill: var(--accent-ai); }
  .ref { stroke: var(--border-subtle); stroke-width: 1; stroke-dasharray: 3 3; }
  .reflbl { fill: var(--text-muted); font-family: var(--font-mono); font-size: 9px; text-anchor: end; }
  .thr { stroke: var(--accent-pd); stroke-width: 1.2; stroke-dasharray: 5 3; }
  .thrlbl { fill: var(--accent-pd); font-family: var(--font-mono); font-size: 9px; text-anchor: end; font-weight: 700; }
  .zero { stroke: var(--border-subtle); stroke-width: 0.6; }
  .stim { stroke: var(--accent-pk); stroke-width: 2; }
  .stim.s2 { stroke: var(--accent-ai); }
  .stimlbl { fill: var(--accent-pk); font-family: var(--font-mono); font-size: 9px; text-anchor: middle; font-weight: 700; }
  .stimlbl.s2lbl { fill: var(--accent-ai); }
  .band { stroke: none; }
  .pra { fill: color-mix(in srgb, #c0392b 14%, transparent); }
  .prr { fill: color-mix(in srgb, var(--accent-pd) 12%, transparent); }
  .bandlbl { font-family: var(--font-mono); font-size: 9px; font-weight: 700; }
  .pralbl { fill: #c0392b; }
  .prrlbl { fill: var(--accent-pd); }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; margin: var(--space-3) 0 var(--space-2); }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.alert { background: color-mix(in srgb, #c0392b 15%, var(--bg-primary)); color: #c0392b; }
  .verdict { font-size: var(--text-xs); line-height: 1.5; margin: 0 0 var(--space-2); padding: var(--space-2) var(--space-3); border-radius: var(--radius); border-left: 3px solid var(--border-strong); background: var(--bg-primary); color: var(--text-secondary); }
  .verdict.bad { border-left-color: #c0392b; }
  .verdict.warn { border-left-color: var(--accent-pd); }
  .verdict.ok { border-left-color: var(--accent-pk); }
  .verdict strong { color: var(--text-primary); }
  .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--space-2) var(--space-4); margin-top: var(--space-2); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  input[type='range'] { width: 100%; accent-color: var(--accent-pk); }
  input[type='range']:disabled { opacity: 0.45; }
  .check { flex-direction: row; align-items: center; gap: var(--space-2); margin-top: var(--space-3); cursor: pointer; }
  .check input { accent-color: var(--accent-pk); }
  .notes { margin: var(--space-3) 0 0; display: grid; gap: 4px; }
  .notes p { margin: 0; font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.5; }
  .notes strong { color: var(--accent-pk); }
  .notes em { color: var(--text-primary); font-style: normal; font-weight: 600; }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: var(--space-3) 0 0; text-align: center; line-height: 1.5; }
</style>
