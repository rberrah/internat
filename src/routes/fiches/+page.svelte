<script>
  // @ts-nocheck
  import { base } from '$app/paths';
  import chapters from '$lib/content/loadChapters';
  import { tracks, chaptersByTrack } from '$lib/content/tracks';
  import { treesForChapter, arbres } from '$lib/content/decisionTrees';
  import DecisionTree from '$lib/components/ui/DecisionTree.svelte';

  const grouped = chaptersByTrack(chapters);

  // fiche = étape « À retenir » du chapitre (synthèse déjà rédigée, toujours à jour)
  function synthese(ch) {
    const s = ch.steps?.find((st) => /retenir/i.test(st.title));
    return s ? s.html : '';
  }
</script>

<header class="head">
  <p class="eyebrow">Révision express</p>
  <h1>Fiches &amp; arbres de décision</h1>
  <p class="lede">Une <strong>fiche de synthèse par cours</strong> (l'essentiel à retenir), et des <strong>arbres de décision</strong> interactifs pour s'entraîner au raisonnement des exercices et des cas cliniques.</p>
</header>

<section class="intro-trees">
  <h2>Arbres de décision ({arbres.length})</h2>
  <p class="hint">Répondez aux questions pour descendre jusqu'au diagnostic ou à la conduite. Ils sont aussi rattachés à leur cours ci-dessous.</p>
  <div class="tree-grid">
    {#each arbres as a}<DecisionTree arbre={a} />{/each}
  </div>
</section>

{#each tracks as t}
  {@const list = grouped[t.id] ?? []}
  {#if list.length}
    <details class="sec" open style={`--accent:${t.accent}`}>
      <summary><span class="slabel">{t.label}</span> {t.title} <span class="scount">· {list.length} fiches</span></summary>
      <div class="fiches">
        {#each list as c}
          <article class="fiche">
            <a class="ftitle" href={`${base}/chapitres/${c.slug}`}>{c.title}</a>
            <div class="synth">{@html synthese(c)}</div>
            {#each treesForChapter(c.slug) as a}
              <div class="embed"><DecisionTree arbre={a} /></div>
            {/each}
          </article>
        {/each}
      </div>
    </details>
  {/if}
{/each}

<style>
  .head { max-width: 760px; margin-bottom: var(--space-8); }
  h1 { font-size: var(--text-3xl); margin: var(--space-2) 0; }
  .lede { color: var(--text-secondary); font-size: var(--text-lg); }
  .intro-trees { margin-bottom: var(--space-12); }
  .intro-trees h2 { font-size: var(--text-xl); margin: 0 0 var(--space-1); }
  .hint { color: var(--text-muted); font-size: var(--text-sm); margin: 0 0 var(--space-4); }
  .tree-grid { display: grid; gap: var(--space-4); grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); align-items: start; }
  .sec { margin-bottom: var(--space-6); border-left: 3px solid var(--accent); padding-left: var(--space-4); }
  summary { cursor: pointer; font-size: var(--text-xl); font-weight: 700; padding: var(--space-2) 0; }
  .slabel { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent); }
  .scount { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); font-weight: 400; }
  .fiches { display: grid; gap: var(--space-3); grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); align-items: start; margin-top: var(--space-3); }
  .fiche { border: 1px solid var(--border-subtle); border-top: 3px solid var(--accent); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); }
  .ftitle { font-weight: 700; color: var(--text-primary); text-decoration: none; display: block; margin-bottom: var(--space-2); }
  .ftitle:hover { color: var(--accent-pk); }
  .synth :global(ul) { margin: 0; padding-left: 1.1em; }
  .synth :global(li) { font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.5; margin-bottom: 3px; }
  .synth :global(p) { font-size: var(--text-sm); color: var(--text-secondary); margin: 0 0 var(--space-2); }
  .synth :global(strong) { color: var(--text-primary); }
  .embed { margin-top: var(--space-3); }
</style>
