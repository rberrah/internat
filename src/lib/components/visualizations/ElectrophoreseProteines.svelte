<script>
  // @ts-nocheck
  // Électrophorèse des protéines sériques : profil densitométrique en 5 fractions
  // (albumine, α1, α2, β, γ). On choisit un profil pathologique et on fait monter
  // la sévérité pour voir le tracé se déformer à partir du profil normal.
  let profil = 'normal';
  let sev = 100;   // sévérité de l'anomalie (%) — 0 = tracé normal

  // Chaque profil = 6 gaussiennes (x = migration 0 anode → 1 cathode, s = largeur, a = aire en % des protides).
  // La 6e (gM) est le pic monoclonal : aire nulle sauf dans le myélome.
  const NORMAL = {
    pt: 72,
    g: [
      { x: 0.10, s: 0.050, a: 60 },  // albumine
      { x: 0.28, s: 0.035, a: 3 },   // α1 (α1-antitrypsine)
      { x: 0.42, s: 0.045, a: 9 },   // α2 (haptoglobine, α2-macroglobuline)
      { x: 0.60, s: 0.050, a: 11 },  // β (transferrine, C3)
      { x: 0.82, s: 0.095, a: 17 },  // γ polyclonale (Ig)
      { x: 0.80, s: 0.020, a: 0 }    // pic monoclonal
    ]
  };

  const PROFILS = [
    {
      id: 'normal',
      nom: 'Normal',
      pt: 72,
      g: NORMAL.g,
      txt: 'Albumine dominante (55–65 %), fractions globulines discrètes, γ en dôme large et polyclonal. Protides totaux 65–80 g/L.'
    },
    {
      id: 'inflam',
      nom: 'Sd inflammatoire',
      pt: 70,
      g: [
        { x: 0.10, s: 0.050, a: 50 },
        { x: 0.28, s: 0.035, a: 5 },
        { x: 0.42, s: 0.048, a: 16 },
        { x: 0.60, s: 0.050, a: 11 },
        { x: 0.82, s: 0.095, a: 18 },
        { x: 0.80, s: 0.020, a: 0 }
      ],
      txt: 'Élévation des α1 et surtout des α2 (haptoglobine, α2-macroglobuline, céruloplasmine = protéines positives de l’inflammation) avec albumine abaissée (protéine négative). Protides totaux normaux. Aigu ↔ CRP ↑.'
    },
    {
      id: 'cirrhose',
      nom: 'Cirrhose',
      pt: 70,
      g: [
        { x: 0.10, s: 0.050, a: 40 },
        { x: 0.28, s: 0.035, a: 3 },
        { x: 0.42, s: 0.045, a: 6 },
        { x: 0.60, s: 0.065, a: 14 },
        { x: 0.76, s: 0.130, a: 37 },
        { x: 0.80, s: 0.020, a: 0 }
      ],
      txt: 'Hypoalbuminémie (défaut de synthèse hépatique) + hypergammaglobulinémie polyclonale large. La vallée entre β et γ est comblée par les IgA : c’est le BLOC β-γ, très évocateur de cirrhose.'
    },
    {
      id: 'myelome',
      nom: 'Myélome',
      pt: 95,
      g: [
        { x: 0.10, s: 0.050, a: 35 },
        { x: 0.28, s: 0.035, a: 2 },
        { x: 0.42, s: 0.045, a: 7 },
        { x: 0.60, s: 0.050, a: 11 },
        { x: 0.84, s: 0.095, a: 5 },
        { x: 0.78, s: 0.020, a: 40 }
      ],
      txt: 'PIC MONOCLONAL : bande étroite, à base fine, en zone γ (le clone plasmocytaire sécrète UNE seule Ig). Le reste des γ polyclonales est effondré (immunoparésie) et les protides totaux montent. Confirmation obligatoire par IMMUNOFIXATION (typage de la chaîne lourde et de la chaîne légère).'
    },
    {
      id: 'nephro',
      nom: 'Sd néphrotique',
      pt: 50,
      g: [
        { x: 0.10, s: 0.050, a: 32 },
        { x: 0.28, s: 0.035, a: 4 },
        { x: 0.42, s: 0.048, a: 28 },
        { x: 0.60, s: 0.055, a: 22 },
        { x: 0.82, s: 0.095, a: 14 },
        { x: 0.80, s: 0.020, a: 0 }
      ],
      txt: 'Albumine EFFONDRÉE (fuite urinaire) et hypoprotidémie. Les grosses protéines ne passent pas le glomérule et s’accumulent : α2-macroglobuline (α2 ↑↑) et β-lipoprotéines (β ↑). Les γ (IgG) fuient aussi → γ abaissées.'
    }
  ];

  const FRACTIONS = [
    { nom: 'Albumine', pctLo: 55, pctHi: 65, gLo: 38, gHi: 48 },
    { nom: 'α1',       pctLo: 2,  pctHi: 4,  gLo: 1,  gHi: 4 },
    { nom: 'α2',       pctLo: 7,  pctHi: 12, gLo: 5,  gHi: 9 },
    { nom: 'β',        pctLo: 8,  pctHi: 14, gLo: 6,  gHi: 11 },
    { nom: 'γ',        pctLo: 11, pctHi: 20, gLo: 8,  gHi: 14 }
  ];

  const SQ2PI = Math.sqrt(2 * Math.PI);
  const mix = (a, b, f) => a + (b - a) * f;

  $: cible = PROFILS.find((p) => p.id === profil) ?? PROFILS[0];
  $: f = sev / 100;
  // interpolation continue normal → profil choisi
  $: gauss = NORMAL.g.map((n, i) => ({
    x: mix(n.x, cible.g[i].x, f),
    s: mix(n.s, cible.g[i].s, f),
    a: mix(n.a, cible.g[i].a, f)
  }));
  $: pt = mix(NORMAL.pt, cible.pt, f);

  // fractions affichées : γ = polyclonale + monoclonal
  $: pcts = [gauss[0].a, gauss[1].a, gauss[2].a, gauss[3].a, gauss[4].a + gauss[5].a];
  $: lignes = FRACTIONS.map((fr, i) => {
    const gl = (pcts[i] / 100) * pt;
    return { ...fr, pct: pcts[i], gl, bad: gl < fr.gLo || gl > fr.gHi };
  });
  $: monoPct = gauss[5].a;
  $: monoGl = (monoPct / 100) * pt;
  $: picMono = monoPct > 3;
  $: ptBad = pt < 65 || pt > 80;

  const W = 460, H = 210, m = { top: 14, right: 12, bottom: 40, left: 34 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;

  const dens = (x, gs) => gs.reduce((s, g) => s + (g.a / (g.s * SQ2PI)) * Math.exp(-((x - g.x) ** 2) / (2 * g.s * g.s)), 0);
  const NPTS = 220;
  $: samples = Array.from({ length: NPTS + 1 }, (_, i) => dens(i / NPTS, gauss));
  $: yMax = Math.max(...samples) * 1.1;
  $: xOf = (x) => x * iW;
  $: yOf = (y) => iH - (y / yMax) * iH;
  $: pts = samples.map((y, i) => `${xOf(i / NPTS).toFixed(1)},${yOf(y).toFixed(1)}`);
  $: trace = `M${pts.join(' L')}`;
  $: aire = `M0,${iH.toFixed(1)} L${pts.join(' L')} L${iW.toFixed(1)},${iH.toFixed(1)} Z`;

  // gel simulé : intensité de la bande ∝ densité optique locale
  const NBANDS = 76;
  $: bands = Array.from({ length: NBANDS }, (_, i) => {
    const x = (i + 0.5) / NBANDS;
    return { x: (i / NBANDS) * iW, w: iW / NBANDS + 0.5, o: Math.min(1, dens(x, gauss) / (yMax / 1.1)) };
  });

  // bornes des 5 zones de lecture
  const BORNES = [0.19, 0.35, 0.51, 0.70];
  const CENTRES = [0.095, 0.27, 0.43, 0.605, 0.85];
  const NOMS = ['Alb', 'α1', 'α2', 'β', 'γ'];
</script>

<div class="viz">
  <div class="tabs">
    {#each PROFILS as p}
      <button class:on={profil === p.id} on:click={() => (profil = p.id)}>{p.nom}</button>
    {/each}
  </div>

  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Profil électrophorétique des protéines sériques : ${cible.nom}`}>
    <g transform={`translate(${m.left},${m.top})`}>
      {#each BORNES as b}
        <line x1={xOf(b)} x2={xOf(b)} y1="0" y2={iH} class="sep" />
      {/each}

      <path d={aire} class="aire" />
      <path d={trace} class="trace" />

      {#if picMono}
        <line x1={xOf(gauss[5].x)} x2={xOf(gauss[5].x)} y1="0" y2={iH} class="mono" />
        <text x={xOf(gauss[5].x)} y="10" class="monolbl">pic monoclonal</text>
      {/if}

      <line x1="0" x2="0" y1="0" y2={iH} class="axis" />
      <line x1="0" x2={iW} y1={iH} y2={iH} class="axis" />

      <!-- gel simulé -->
      {#each bands as b}
        <rect x={b.x} y={iH + 6} width={b.w} height="12" class="band" opacity={b.o} />
      {/each}
      <rect x="0" y={iH + 6} width={iW} height="12" class="gelbox" />

      {#each CENTRES as cx, i}
        <text x={xOf(cx)} y={iH + 31} class="zlbl">{NOMS[i]}</text>
      {/each}
      <text x="0" y={iH + 31} class="pole">+</text>
      <text x={iW} y={iH + 31} class="pole">−</text>
      <text transform={`translate(-24,${iH / 2}) rotate(-90)`} class="axlbl">D.O.</text>
    </g>
  </svg>

  <div class="grid">
    <div class="hd"><span>Fraction</span><span>%</span><span>g/L</span><span>Réf. (g/L)</span></div>
    {#each lignes as r}
      <div class="row"><span class="n">{r.nom}</span><span class="v">{r.pct.toFixed(1)}</span><span class="v" class:bad={r.bad}>{r.gl.toFixed(1)}</span><span class="ref">{r.gLo}–{r.gHi}</span></div>
    {/each}
    <div class="row tot"><span class="n">Protides totaux</span><span class="v">—</span><span class="v" class:bad={ptBad}>{pt.toFixed(0)}</span><span class="ref">65–80</span></div>
  </div>

  {#if picMono}
    <p class="alerte">Pic monoclonal ≈ {monoGl.toFixed(1)} g/L en zone γ — base étroite, aspect « en clocher ». Immunofixation + dosage des chaînes légères libres indispensables.</p>
  {/if}

  <p class="interp"><strong>{cible.nom}{sev < 100 && profil !== 'normal' ? ` (sévérité ${sev} %)` : ''} —</strong> {cible.txt}</p>

  <div class="sliders">
    <label><span>Sévérité de l'anomalie</span><b>{sev} %</b><input type="range" min="0" max="100" step="1" bind:value={sev} /></label>
  </div>

  <p class="hint">Choisissez un profil puis ramenez la sévérité à 0 : le tracé revient au normal. Remontez-la et regardez CE QUI BOUGE — c'est la déformation, pas la valeur absolue, qui fait le diagnostic (α2 dans l'inflammation, bloc β-γ dans la cirrhose, pic étroit dans le myélome).</p>
</div>

<style>
  .viz { display: grid; gap: var(--space-3); }
  .tabs { display: flex; flex-wrap: wrap; gap: var(--space-2); }
  .tabs button { font-family: var(--font-mono); font-size: var(--text-xs); padding: 4px 10px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 8px; cursor: pointer; color: var(--text-secondary); }
  .tabs button.on { background: var(--accent-pk); color: var(--bg-primary); border-color: var(--accent-pk); font-weight: 700; }
  svg { width: 100%; height: auto; display: block; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .sep { stroke: var(--border-subtle); stroke-width: 1; stroke-dasharray: 3 3; }
  .aire { fill: color-mix(in srgb, var(--accent-pk) 18%, transparent); stroke: none; }
  .trace { fill: none; stroke: var(--accent-pk); stroke-width: 2.2; }
  .mono { stroke: #c0392b; stroke-width: 1.2; stroke-dasharray: 4 3; }
  .monolbl { fill: #c0392b; font-family: var(--font-mono); font-size: 9px; text-anchor: middle; font-weight: 700; }
  .band { fill: var(--text-secondary); }
  .gelbox { fill: none; stroke: var(--border-subtle); stroke-width: 1; }
  .zlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .pole { fill: var(--text-muted); font-family: var(--font-mono); font-size: 11px; text-anchor: middle; font-weight: 700; }
  .axlbl { fill: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; text-anchor: middle; }
  .grid { display: grid; gap: 2px; font-family: var(--font-mono); font-size: var(--text-xs); }
  .hd, .row { display: grid; grid-template-columns: 1.5fr 0.8fr 0.8fr 1fr; gap: var(--space-2); align-items: baseline; }
  .hd { color: var(--text-muted); font-size: 9px; text-transform: uppercase; letter-spacing: 0.04em; border-bottom: 1px solid var(--border-subtle); padding-bottom: 2px; }
  .hd span:not(:first-child), .row span:not(:first-child) { text-align: right; }
  .row .n { color: var(--text-secondary); }
  .row .v { color: var(--accent-pk); font-weight: 700; }
  .row .v.bad { color: #c0392b; }
  .row .ref { color: var(--text-muted); font-size: 9px; }
  .row.tot { border-top: 1px solid var(--border-subtle); padding-top: 3px; margin-top: 2px; }
  .alerte { margin: 0; font-size: var(--text-sm); line-height: 1.5; padding: var(--space-2) var(--space-3); border-radius: var(--radius, 8px); border-left: 3px solid #c0392b; background: var(--bg-primary); color: #c0392b; }
  .interp { margin: 0; font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.55; padding: var(--space-2) var(--space-3); border-radius: var(--radius, 8px); border-left: 3px solid var(--accent-pk); background: var(--bg-primary); }
  .interp strong { color: var(--accent-pk); }
  .sliders { display: grid; gap: 6px; }
  .sliders label { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 0 var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); }
  .sliders span { color: var(--text-secondary); }
  .sliders b { color: var(--accent-pk); font-weight: 700; }
  .sliders input { grid-column: 1 / -1; width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: 0; line-height: 1.6; }
</style>
