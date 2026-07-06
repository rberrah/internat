<script>
  // Interprétation du bilan martial : ferritine, coefficient de saturation (CS)
  // et CRP → carence martiale absolue / anémie inflammatoire / carence
  // fonctionnelle. D'après la démarche du cours (E. Pautas, Ann. Biol. Clin. 2015).
  let ferritine = 8;  // µg/L
  let cs = 12;        // coefficient de saturation de la transferrine (%)
  let crp = 4;        // mg/L

  $: inflammation = crp >= 10;

  $: verdict = (() => {
    if (ferritine < 30)
      return { t: 'Carence martiale absolue', c: '#b23b4a', d: 'Réserves vides : ferritine effondrée. Fer ↓, CS ↓, transferrine/CTF ↑. → chercher un saignement (digestif, gynéco).' };
    if (inflammation) {
      if (cs < 20)
        return { t: 'Inflammation ± carence fonctionnelle', c: '#9c5a2b', d: 'Ferritine normale/haute (protéine de l’inflammation) mais CS bas : le fer est « séquestré » (hepcidine ↑). Le RsTfR aide à démasquer une carence associée.' };
      return { t: 'Anémie inflammatoire', c: '#9c5a2b', d: 'Ferritine normale/↑, CRP ↑, fer ↓, transferrine ↓. Anémie souvent normochrome normocytaire, puis microcytaire si l’inflammation persiste.' };
    }
    if (ferritine > 300 && cs > 45)
      return { t: 'Surcharge martiale ?', c: '#34568a', d: 'Ferritine et CS élevés sans inflammation : évoquer une surcharge (hémochromatose, transfusions).' };
    return { t: 'Bilan martial non contributif', c: '#1f7a6d', d: 'Réserves conservées sans inflammation : chercher une autre cause à l’anémie (thalassémie si microcytaire, etc.).' };
  })();

  // trois jauges : valeur, plage de référence, et si « bas »/« haut » est pathologique
  $: gauges = [
    { label: 'Ferritine', val: ferritine, unit: 'µg/L', max: 400, lo: 30, hi: 300, bad: ferritine < 30 || ferritine > 300 },
    { label: 'Coeff. saturation', val: cs, unit: '%', max: 60, lo: 20, hi: 40, bad: cs < 20 || cs > 45 },
    { label: 'CRP', val: crp, unit: 'mg/L', max: 100, lo: 0, hi: 10, bad: crp >= 10 }
  ];
</script>

<div class="viz">
  <div class="gauges">
    {#each gauges as g}
      <div class="g">
        <div class="grow"><span class="gl">{g.label}</span><span class="gv" class:bad={g.bad}>{g.val} {g.unit}</span></div>
        <div class="track">
          <div class="ref" style={`left:${(g.lo / g.max) * 100}%; width:${((g.hi - g.lo) / g.max) * 100}%`}></div>
          <div class="fill" class:bad={g.bad} style={`width:${Math.min(100, (g.val / g.max) * 100)}%`}></div>
        </div>
        <div class="rng"><span>0</span><span>réf. {g.lo}–{g.hi}</span><span>{g.max}</span></div>
      </div>
    {/each}
  </div>

  <div class="verdict" style={`--vc:${verdict.c}`}>
    <p class="vt">{verdict.t}</p>
    <p class="vd">{verdict.d}</p>
  </div>

  <div class="sliders">
    <label><span>Ferritine</span><b>{ferritine} µg/L</b><input type="range" min="3" max="400" step="1" bind:value={ferritine} /></label>
    <label><span>Coeff. saturation</span><b>{cs} %</b><input type="range" min="2" max="60" step="1" bind:value={cs} /></label>
    <label><span>CRP</span><b>{crp} mg/L</b><input type="range" min="0" max="100" step="1" bind:value={crp} /></label>
  </div>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); }
  .gauges { display: grid; gap: var(--space-3); }
  .g { display: grid; gap: 3px; }
  .grow { display: flex; justify-content: space-between; align-items: baseline; font-family: var(--font-mono); font-size: var(--text-xs); }
  .gl { color: var(--text-secondary); }
  .gv { color: var(--accent-pk); font-weight: 700; }
  .gv.bad { color: #b23b4a; }
  .track { position: relative; height: 12px; background: var(--bg-secondary); border-radius: 6px; overflow: hidden; }
  .ref { position: absolute; top: 0; bottom: 0; background: color-mix(in srgb, var(--accent-pk) 22%, transparent); }
  .fill { position: absolute; top: 0; bottom: 0; left: 0; background: var(--accent-pk); opacity: 0.85; border-radius: 6px 0 0 6px; }
  .fill.bad { background: #b23b4a; }
  .rng { display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 9px; color: var(--text-muted); }
  .verdict { border: 1px solid var(--border-subtle); border-left: 3px solid var(--vc); border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: var(--bg-primary); }
  .vt { margin: 0 0 4px; font-family: var(--font-mono); font-weight: 700; color: var(--vc); }
  .vd { margin: 0; color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.5; }
  .sliders { display: grid; gap: 6px; }
  .sliders label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sliders span { color: var(--text-secondary); }
  .sliders b { color: var(--accent-pk); }
  .sliders input { grid-column: 1 / -1; }
</style>
