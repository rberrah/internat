<script>
  import { base } from '$app/paths';
  import { fiches } from '$lib/content/fiches';
  import { sections, sectionById } from '$lib/content/programme';

  // regroupées par section, dans l'ordre du programme
  const bySection = sections
    .map((s) => ({ s, list: fiches.filter((f) => f.section === s.id) }))
    .filter((g) => g.list.length);
</script>

<header class="head">
  <p class="eyebrow">Révision express</p>
  <h1>Fiches</h1>
  <p class="lede">Des synthèses condensées pour la dernière ligne droite. Chaque fiche renvoie au cours détaillé.</p>
</header>

{#each bySection as g}
  <section class="grp" style={`--accent:${g.s.accent}`}>
    <div class="ghead"><span class="glabel">Section {g.s.roman}</span><h2>{g.s.titre}</h2></div>
    <div class="cards">
      {#each g.list as f}
        <article class="fiche">
          <div class="ftop">
            <h3>{f.titre}</h3>
            <span class="theme">{f.theme}</span>
          </div>
          {#each f.blocs as b}
            <div class="bloc">
              <p class="bt">{b.titre}</p>
              <ul>{#each b.points as p}<li>{p}</li>{/each}</ul>
            </div>
          {/each}
          {#if f.chapter}<a class="golink" href={`${base}/chapitres/${f.chapter}`}>Cours détaillé →</a>{/if}
        </article>
      {/each}
    </div>
  </section>
{/each}

<style>
  .head { max-width: 720px; margin-bottom: var(--space-8); }
  h1 { font-size: var(--text-3xl); margin: var(--space-2) 0; }
  .lede { color: var(--text-secondary); font-size: var(--text-lg); }
  .grp { margin-bottom: var(--space-12); border-left: 3px solid var(--accent); padding-left: var(--space-6); }
  .ghead { margin-bottom: var(--space-4); }
  .glabel { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); font-weight: 700; }
  .ghead h2 { font-size: var(--text-xl); margin: var(--space-1) 0 0; }
  .cards { display: grid; gap: var(--space-4); grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); }
  .fiche { border: 1px solid var(--border-subtle); border-top: 4px solid var(--accent); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); }
  .ftop { display: flex; justify-content: space-between; align-items: baseline; gap: var(--space-2); margin-bottom: var(--space-2); }
  .ftop h3 { font-size: var(--text-base); margin: 0; }
  .theme { font-family: var(--font-mono); font-size: 9px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; }
  .bloc { margin-bottom: var(--space-3); }
  .bt { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.04em; color: var(--accent-pk); margin: 0 0 4px; }
  .bloc ul { margin: 0; padding-left: 1.1em; }
  .bloc li { font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.5; margin-bottom: 2px; }
  .golink { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-pk); text-decoration: none; }
  .golink:hover { text-decoration: underline; }
</style>
