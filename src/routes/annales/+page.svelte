<script>
  // @ts-nocheck
  import { base } from '$app/paths';
  import { annalesSessions, allAnnales, annalesStats } from '$lib/content/annales';
  import chapters from '$lib/content/loadChapters';
  import AnnaleItem from '$lib/components/ui/AnnaleItem.svelte';

  const stats = annalesStats();
  const total = allAnnales.length;

  // Titre d'un chapitre a partir de son slug (pour les liens de rattachement).
  const titleOf = (slug) => chapters.find((c) => c.slug === slug)?.title ?? slug;

  // Filtres : session + type + recherche plein-texte.
  let session = 'all';
  let type = 'all';
  let query = '';

  $: q = query.trim().toLowerCase();
  $: items = allAnnales.filter((it) => {
    if (session !== 'all' && it.session !== session) return false;
    if (type !== 'all' && it.type !== type) return false;
    if (q) {
      const hay = (it.prompt + ' ' + (it.options || []).map((o) => o.t).join(' ')).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
</script>

<svelte:head><title>Annales du concours — Internat Pharma</title></svelte:head>

<header class="head">
  <p class="eyebrow">Sujets officiels du concours</p>
  <h1>Annales de l'internat</h1>
  <p class="lede">
    Les <strong>{total} questions</strong> des sujets officiels du concours d'internat en pharmacie,
    reproduites pour la révision et <strong>reliées à chaque chapitre</strong> du cours. Chaque cours
    renvoie de son côté vers les annales tombées sur son thème.
  </p>
  <p class="prov">
    Sujets officiels organisés par le <strong>Centre National de Gestion (CNG)</strong>
    (<a href="https://www.cng.sante.fr/annales" target="_blank" rel="noopener noreferrer">cng.sante.fr/annales</a>).
    Ils restent la propriété de leur émetteur et ne sont pas couverts par la licence du site.
  </p>
</header>

<div class="controls">
  <div class="seg">
    <button class:on={session === 'all'} on:click={() => (session = 'all')}>Toutes sessions</button>
    {#each stats as s}
      <button class:on={session === s.key} on:click={() => (session = s.key)}>{s.label}</button>
    {/each}
  </div>
  <div class="seg">
    <button class:on={type === 'all'} on:click={() => (type = 'all')}>Tout</button>
    <button class:on={type === 'qcm'} on:click={() => (type = 'qcm')}>QCM</button>
    <button class:on={type === 'exercice'} on:click={() => (type = 'exercice')}>Exercices</button>
    <button class:on={type === 'dossier'} on:click={() => (type = 'dossier')}>Dossiers</button>
  </div>
  <input type="search" bind:value={query} placeholder="Rechercher un mot-clé…" aria-label="Rechercher dans les annales" />
</div>

<p class="count">{items.length} question{items.length > 1 ? 's' : ''}</p>

<div class="list">
  {#each items as it (it.session + it.type + it.n)}
    <div class="wrap">
      <AnnaleItem item={it} sessionLabel={it.sessionLabel} />
      {#if it.chapterSlugs?.length}
        <p class="links">
          Cours&nbsp;:
          {#each it.chapterSlugs as slug, i}<a href={`${base}/chapitres/${slug}`}>{titleOf(slug)}</a>{#if i < it.chapterSlugs.length - 1}, {/if}{/each}
        </p>
      {/if}
    </div>
  {/each}
</div>

<style>
  .head { max-width: 760px; margin-bottom: var(--space-8); }
  .eyebrow { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-pk); margin: 0 0 var(--space-2); }
  h1 { font-size: var(--text-3xl); margin: 0 0 var(--space-3); }
  .lede { color: var(--text-secondary); font-size: var(--text-lg); line-height: 1.6; }
  .prov { margin-top: var(--space-4); font-size: var(--text-sm); color: var(--text-muted); background: var(--bg-secondary); padding: var(--space-3) var(--space-4); border-radius: var(--radius); line-height: 1.5; }
  .controls { display: flex; flex-wrap: wrap; gap: var(--space-3); align-items: center; margin-bottom: var(--space-4); }
  .seg { display: inline-flex; flex-wrap: wrap; gap: 4px; background: var(--bg-secondary); padding: 4px; border-radius: var(--radius); }
  .seg button { font-family: var(--font-mono); font-size: var(--text-xs); font-weight: 600; padding: 5px 11px; border: none; border-radius: calc(var(--radius) - 2px); background: transparent; color: var(--text-secondary); cursor: pointer; }
  .seg button.on { background: var(--bg-tertiary); color: var(--accent-pk); box-shadow: var(--shadow-soft, 0 1px 2px rgba(0,0,0,.08)); }
  input[type='search'] { flex: 1; min-width: 180px; padding: var(--space-2) var(--space-3); border: 1px solid var(--border-strong); border-radius: var(--radius); background: var(--bg-tertiary); color: var(--text-primary); font: inherit; }
  .count { font-family: var(--font-mono); font-size: var(--text-sm); color: var(--text-muted); margin: 0 0 var(--space-4); }
  .list { display: grid; gap: var(--space-5); max-width: 820px; }
  .links { margin: var(--space-2) 0 0 var(--space-4); font-size: var(--text-sm); color: var(--text-muted); }
  .links a { color: var(--accent-pk); text-decoration: none; border-bottom: 1px solid var(--border-strong); }
  .links a:hover { border-color: var(--accent-pk); }
</style>
