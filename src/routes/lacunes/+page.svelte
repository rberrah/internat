<script>
  // @ts-nocheck
  // « Mes lacunes » — on ne lit pas un site de prépa, on boucle sur ses points faibles.
  // Tout est calculé LOCALEMENT depuis localStorage : aucun compte, aucun serveur.
  import { base } from '$app/paths';
  import chapters from '$lib/content/loadChapters';
  import { tracks, trackById } from '$lib/content/tracks';
  import { progress, chapterState, STATE_LABEL, resetProgress } from '$lib/stores/progress';

  const ORDER = ['lacune', 'fragile', 'non-vu', 'vu', 'acquis'];

  // état de chaque chapitre, recalculé dès que la progression change
  $: states = chapters.map((c) => ({ c, st: chapterState($progress, c.slug) }));
  $: counts = ORDER.reduce((acc, s) => ({ ...acc, [s]: states.filter((x) => x.st === s).length }), {});
  $: total = chapters.length;
  $: done = counts.acquis + counts.fragile + counts.lacune; // QCM tentés
  $: pct = total ? Math.round(((counts.acquis + counts.vu + counts.fragile + counts.lacune) / total) * 100) : 0;

  // À retravailler en priorité : QCM raté, puis fragile
  $: priorite = states
    .filter((x) => x.st === 'lacune' || x.st === 'fragile')
    .sort((a, b) => (a.st === b.st ? a.c.order - b.c.order : a.st === 'lacune' ? -1 : 1));

  // Couverture par section (miroir du programme officiel)
  $: parSection = tracks.map((t) => {
    const list = states.filter((x) => x.c.track === t.id);
    return {
      t,
      n: list.length,
      lacune: list.filter((x) => x.st === 'lacune').length,
      fragile: list.filter((x) => x.st === 'fragile').length,
      acquis: list.filter((x) => x.st === 'acquis').length,
      nonVu: list.filter((x) => x.st === 'non-vu').length
    };
  }).filter((s) => s.n);

  let showAll = false;
</script>

<header class="head">
  <p class="eyebrow">Progression</p>
  <h1>Mes lacunes</h1>
  <p class="lede">
    On ne révise pas un concours en lisant tout dans l'ordre : on <strong>boucle sur ses points
    faibles</strong>. Cette page suit les chapitres que vous avez ouverts et vos scores aux QCM, puis
    vous renvoie <strong>directement</strong> vers ce qu'il faut retravailler.
  </p>
  <p class="privacy">
    🔒 Tout est stocké <strong>dans votre navigateur</strong> (localStorage). Aucun compte, aucun
    serveur, aucun suivi — vos données ne partent nulle part.
  </p>
</header>

<section class="summary">
  <div class="bar" role="img" aria-label={`Progression : ${pct} %`}>
    <div class="fill" style={`width:${pct}%`}></div>
  </div>
  <p class="barlbl">{pct} % du programme abordé · {done} QCM tentés sur {total} chapitres</p>
  <div class="chips">
    {#each ORDER as s}
      <span class={`chip ${s}`}>{STATE_LABEL[s]} · <strong>{counts[s]}</strong></span>
    {/each}
  </div>
</section>

{#if !done && !counts.vu}
  <section class="empty">
    <h2>Rien à afficher — pour l'instant</h2>
    <p>
      Ouvrez un chapitre et répondez à son QCM : dès qu'un QCM est complété, son score atterrit ici.
      Les chapitres ratés remontent automatiquement en tête de cette page.
    </p>
    <a class="btn btn-primary" href={`${base}/chapitres`}>Parcourir le programme →</a>
  </section>
{:else}
  <section class="prio">
    <h2>À retravailler en priorité</h2>
    {#if !priorite.length}
      <p class="none">Aucun QCM raté pour l'instant. 👏 Continuez à en tenter d'autres pour affiner le diagnostic.</p>
    {:else}
      <ul class="list">
        {#each (showAll ? priorite : priorite.slice(0, 12)) as { c, st }}
          {@const q = $progress.quiz?.[c.slug]}
          <li>
            <span class={`badge ${st}`}>{STATE_LABEL[st]}</span>
            <a href={`${base}/chapitres/${c.slug}`}>{c.title}</a>
            <span class="meta">
              {trackById(c.track)?.label ?? ''}{c.programItem ? ` · ${c.programItem}` : ''}
              {#if q} · <strong>{q.ok}/{q.total}</strong> au QCM{/if}
            </span>
          </li>
        {/each}
      </ul>
      {#if priorite.length > 12}
        <button class="more" on:click={() => (showAll = !showAll)}>
          {showAll ? 'Réduire' : `Voir les ${priorite.length - 12} autres`}
        </button>
      {/if}
    {/if}
  </section>
{/if}

<section class="sections">
  <h2>Couverture par section</h2>
  <div class="grid">
    {#each parSection as s}
      <article class="sec" style={`--accent:${s.t.accent}`}>
        <div class="stop">
          <span class="slabel">{s.t.label}</span>
          <span class="scount">{s.n} ch.</span>
        </div>
        <h3>{s.t.title}</h3>
        <div class="mini">
          <div class="seg acquis" style={`flex:${s.acquis}`}></div>
          <div class="seg fragile" style={`flex:${s.fragile}`}></div>
          <div class="seg lacune" style={`flex:${s.lacune}`}></div>
          <div class="seg nonvu" style={`flex:${s.nonVu}`}></div>
        </div>
        <p class="legend">
          {#if s.lacune}<span class="l">{s.lacune} lacune{s.lacune > 1 ? 's' : ''}</span>{/if}
          {#if s.fragile}<span class="f">{s.fragile} fragile{s.fragile > 1 ? 's' : ''}</span>{/if}
          {#if s.acquis}<span class="a">{s.acquis} acquis</span>{/if}
          <span class="n">{s.nonVu} non vu{s.nonVu > 1 ? 's' : ''}</span>
        </p>
      </article>
    {/each}
  </div>
</section>

<section class="reset">
  <button on:click={() => { if (confirm('Effacer toute votre progression ? Cette action est irréversible.')) resetProgress(); }}>
    Effacer ma progression
  </button>
</section>

<style>
  .head { max-width: 760px; margin-bottom: var(--space-8); }
  .eyebrow { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-pk); margin: 0 0 var(--space-2); }
  h1 { font-size: var(--text-3xl); margin: 0 0 var(--space-3); }
  .lede { color: var(--text-secondary); font-size: var(--text-lg); line-height: 1.6; }
  .privacy { font-size: var(--text-sm); color: var(--text-muted); background: var(--bg-secondary); padding: var(--space-3) var(--space-4); border-radius: var(--radius); }

  .summary { max-width: 760px; margin-bottom: var(--space-12); }
  .bar { height: 10px; background: var(--bg-secondary); border-radius: 999px; overflow: hidden; }
  .fill { height: 100%; background: var(--accent-pk); transition: width 0.3s ease; }
  .barlbl { font-family: var(--font-mono); font-size: var(--text-sm); color: var(--text-secondary); margin: var(--space-2) 0 var(--space-3); }
  .chips { display: flex; flex-wrap: wrap; gap: var(--space-2); }
  .chip { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: var(--bg-secondary); color: var(--text-secondary); }
  .chip.lacune { background: color-mix(in srgb, #c0392b 14%, var(--bg-primary)); color: #c0392b; }
  .chip.fragile { background: color-mix(in srgb, #b8860b 16%, var(--bg-primary)); color: #8a6508; }
  .chip.acquis { background: color-mix(in srgb, var(--accent-pk) 16%, var(--bg-primary)); color: var(--accent-pk); }

  .empty { max-width: 640px; background: var(--bg-tertiary); border: 1px dashed var(--border-strong); border-radius: 12px; padding: var(--space-6); }
  .empty h2 { margin-top: 0; }
  .empty p { color: var(--text-secondary); }

  .prio { max-width: 820px; margin-bottom: var(--space-12); }
  h2 { font-size: var(--text-xl); margin: 0 0 var(--space-4); }
  .none { color: var(--text-secondary); }
  .list { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--space-2); }
  .list li { display: flex; align-items: baseline; gap: var(--space-3); flex-wrap: wrap; padding: var(--space-3); border: 1px solid var(--border-subtle); border-radius: 8px; background: var(--bg-tertiary); }
  .badge { font-family: var(--font-mono); font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.04em; }
  .badge.lacune { background: color-mix(in srgb, #c0392b 15%, var(--bg-primary)); color: #c0392b; }
  .badge.fragile { background: color-mix(in srgb, #b8860b 18%, var(--bg-primary)); color: #8a6508; }
  .list a { font-weight: 600; color: var(--text-primary); text-decoration: none; }
  .list a:hover { color: var(--accent-pk); }
  .meta { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); margin-left: auto; }
  .more { margin-top: var(--space-3); font-family: var(--font-mono); font-size: var(--text-xs); padding: 5px 12px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 999px; cursor: pointer; color: var(--text-secondary); }

  .sections { margin-bottom: var(--space-12); }
  .grid { display: grid; gap: var(--space-4); grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
  .sec { border: 1px solid var(--border-subtle); border-top: 3px solid var(--accent); border-radius: 10px; padding: var(--space-4); background: var(--bg-tertiary); }
  .stop { display: flex; justify-content: space-between; align-items: baseline; }
  .slabel { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent); font-weight: 700; text-transform: uppercase; }
  .scount { font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); }
  .sec h3 { font-size: var(--text-base); margin: var(--space-2) 0 var(--space-3); }
  .mini { display: flex; height: 8px; border-radius: 999px; overflow: hidden; background: var(--bg-secondary); }
  .seg { min-width: 0; }
  .seg.acquis { background: var(--accent-pk); }
  .seg.fragile { background: #b8860b; }
  .seg.lacune { background: #c0392b; }
  .seg.nonvu { background: var(--border-subtle); }
  .legend { display: flex; flex-wrap: wrap; gap: var(--space-2); font-family: var(--font-mono); font-size: 10px; margin: var(--space-2) 0 0; }
  .legend .l { color: #c0392b; }
  .legend .f { color: #8a6508; }
  .legend .a { color: var(--accent-pk); }
  .legend .n { color: var(--text-muted); }

  .reset button { font-family: var(--font-mono); font-size: var(--text-xs); padding: 6px 14px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 999px; cursor: pointer; color: var(--text-muted); }
  .reset button:hover { color: #c0392b; border-color: #c0392b; }
</style>
