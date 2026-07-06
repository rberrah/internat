<script>
  import { base } from '$app/paths';
  import chapters from '$lib/content/loadChapters';
  import { tracks, chaptersByTrack } from '$lib/content/tracks';

  const grouped = chaptersByTrack(chapters);
</script>

<header class="head">
  <p class="eyebrow">Programme</p>
  <h1>Disciplines</h1>
  <p class="lede">Choisissez une discipline puis un chapitre. Chaque chapitre se lit en défilant, avec un schéma manipulable à droite.</p>
</header>

{#each tracks as t}
  {@const list = grouped[t.id] ?? []}
  <section class="disc" style={`--accent:${t.accent}`}>
    <div class="disc-head">
      <span class="tlabel">{t.label}</span>
      <h2>{t.title}</h2>
      <p class="tag">{t.tagline}</p>
    </div>
    {#if list.length}
      <ol class="chaps">
        {#each list as c, i}
          <li>
            <a href={`${base}/chapitres/${c.slug}`}>
              <span class="num">{String(i + 1).padStart(2, '0')}</span>
              <span class="body">
                <strong>{c.title}</strong>
                <em>{c.description}</em>
              </span>
              {#if c.duration}<span class="dur">{c.duration}</span>{/if}
            </a>
          </li>
        {/each}
      </ol>
    {:else}
      <p class="soon">Chapitres à venir — cette discipline attend vos supports de cours.</p>
    {/if}
  </section>
{/each}

<style>
  .head { max-width: 720px; margin-bottom: var(--space-12); }
  h1 { font-size: var(--text-3xl); margin: var(--space-2) 0; }
  .lede { color: var(--text-secondary); font-size: var(--text-lg); }
  .disc { margin-bottom: var(--space-12); border-left: 3px solid var(--accent); padding-left: var(--space-6); }
  .disc-head { margin-bottom: var(--space-4); }
  .tlabel { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); font-weight: 700; }
  .disc-head h2 { font-size: var(--text-2xl); margin: var(--space-1) 0; }
  .tag { color: var(--text-secondary); font-size: var(--text-sm); margin: 0; }
  .chaps { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--space-2); }
  .chaps a { display: flex; align-items: center; gap: var(--space-4); text-decoration: none; color: inherit; padding: var(--space-3) var(--space-4); border: 1px solid var(--border-subtle); border-radius: var(--radius); background: var(--bg-tertiary); transition: border-color 0.2s ease, transform 0.15s ease; }
  .chaps a:hover { border-color: var(--accent); transform: translateX(3px); }
  .num { font-family: var(--font-mono); font-size: var(--text-lg); color: var(--text-muted); }
  .body { display: flex; flex-direction: column; flex: 1; }
  .body strong { color: var(--text-primary); }
  .body em { font-style: normal; color: var(--text-secondary); font-size: var(--text-sm); }
  .dur { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); white-space: nowrap; }
  .soon { color: var(--text-muted); font-style: italic; }
</style>
