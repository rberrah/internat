<script>
  import { base } from '$app/paths';
  import { pathologies, allKeywords, keywordCat } from '$lib/content/lexique';
  import { casLexique } from '$lib/content/casCliniques';
  import CasClinique from '$lib/components/ui/CasClinique.svelte';

  /** @type {string[]} mots-clés sélectionnés */
  let sel = [];
  const has = (/** @type {string} */ m) => sel.includes(m);
  function toggle(/** @type {string} */ m) {
    sel = has(m) ? sel.filter((x) => x !== m) : [...sel, m];
  }
  function reset() { sel = []; }

  // mots-clés groupés par catégorie (entrée « 1er sens » : mot → pathologies)
  const groups = (() => {
    /** @type {Record<string, string[]>} */
    const g = {};
    for (const m of allKeywords) (g[keywordCat(m)] ??= []).push(m);
    return Object.entries(g);
  })();

  // tri différentiel : pathologies réunissant TOUS les mots sélectionnés
  $: strict = sel.length ? pathologies.filter((p) => sel.every((m) => p.cles.includes(m))) : pathologies;
  // repli : si aucune ne réunit tout, les plus proches (recouvrement partiel)
  $: fallback = sel.length && strict.length === 0
    ? pathologies.map((p) => ({ p, n: sel.filter((m) => p.cles.includes(m)).length })).filter((x) => x.n > 0).sort((a, b) => b.n - a.n).slice(0, 6)
    : [];
  $: shown = strict.length ? strict.map((p) => ({ p, n: sel.filter((m) => p.cles.includes(m)).length })) : fallback;

  // suggestions pour affiner (mots présents dans les résultats, non encore choisis)
  $: suggest = (() => {
    const pool = (strict.length ? strict : pathologies).flatMap((p) => p.cles).filter((m) => !sel.includes(m));
    /** @type {Record<string, number>} */
    const count = {};
    for (const m of pool) count[m] = (count[m] ?? 0) + 1;
    return Object.entries(count).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([m]) => m);
  })();
</script>

<header class="head">
  <p class="eyebrow">Raisonnement</p>
  <h1>Lexique clinique</h1>
  <p class="lede">
    Les mots-clés qui trahissent une pathologie — dans les <strong>deux sens</strong>. Cliquez un
    signe pour voir toutes les maladies concernées ; combinez-en plusieurs pour <strong>faire
    fondre le diagnostic différentiel</strong>. Ex. <em>fièvre + retour de voyage + Afrique
    subsaharienne → paludisme</em>.
  </p>
</header>

<section class="picker">
  <div class="picker-head">
    <h2>Sélectionnez des mots-clés</h2>
    {#if sel.length}<button class="reset" on:click={reset}>Réinitialiser ({sel.length})</button>{/if}
  </div>
  {#each groups as [cat, mots]}
    <div class="group">
      <span class="glabel">{cat}</span>
      <div class="chips">
        {#each mots as m}
          <button class="kw" class:on={has(m)} on:click={() => toggle(m)}>{m}</button>
        {/each}
      </div>
    </div>
  {/each}
</section>

<section class="results">
  <div class="rhead">
    <h2>
      {#if !sel.length}Toutes les pathologies ({pathologies.length})
      {:else if strict.length}{strict.length} pathologie{strict.length > 1 ? 's' : ''} réuni{strict.length > 1 ? 'ssent' : 't'} ces {sel.length} signe{sel.length > 1 ? 's' : ''}
      {:else}Aucune ne réunit tout — les plus proches{/if}
    </h2>
    {#if suggest.length && sel.length}
      <div class="affiner">
        <span>Affiner :</span>
        {#each suggest as m}<button class="mini" on:click={() => toggle(m)}>+ {m}</button>{/each}
      </div>
    {/if}
  </div>

  <div class="cards">
    {#each shown as { p, n }}
      <article class="pcard" class:hit={sel.length && n === sel.length}>
        <div class="ptop">
          <h3>{p.nom}</h3>
          <span class="disc">{p.discipline}</span>
        </div>
        <p class="orient">{p.orientation}</p>
        <div class="pcles">
          {#each p.cles as m}
            <button class="tag" class:sel={has(m)} on:click={() => toggle(m)}>{m}</button>
          {/each}
        </div>
        {#if p.chapter}<a class="golink" href={`${base}/chapitres/${p.chapter}`}>Voir le cours →</a>{/if}
      </article>
    {/each}
  </div>
</section>

<section class="sujets">
  <h2>Sujets d'entraînement</h2>
  <p class="shint">Lisez l'énoncé, <strong>soulignez les indices</strong> (les termes qui orientent), puis <strong>révélez la réponse</strong>.</p>
  <div class="caslist">
    {#each casLexique as c}<CasClinique cas={c} />{/each}
  </div>
</section>

<style>
  .head { max-width: 760px; margin-bottom: var(--space-8); }
  h1 { font-size: var(--text-3xl); margin: var(--space-2) 0; }
  .lede { color: var(--text-secondary); font-size: var(--text-lg); }
  .lede em { color: var(--text-primary); font-style: italic; }

  .picker { background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: 12px; padding: var(--space-4) var(--space-6); margin-bottom: var(--space-6); }
  .picker-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-3); }
  .picker-head h2 { font-size: var(--text-sm); font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-secondary); margin: 0; }
  .reset { font-family: var(--font-mono); font-size: var(--text-xs); padding: 4px 10px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 999px; cursor: pointer; color: var(--text-secondary); }
  .group { margin-bottom: var(--space-3); }
  .glabel { display: block; font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); margin-bottom: 4px; }
  .chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .kw { font-size: var(--text-xs); padding: 4px 10px; border: 1px solid var(--border-subtle); background: var(--bg-primary); border-radius: 999px; cursor: pointer; color: var(--text-secondary); }
  .kw:hover { border-color: var(--accent-pk); }
  .kw.on { background: var(--accent-pk); color: #fff; border-color: var(--accent-pk); }

  .results { margin-top: var(--space-2); }
  .rhead { margin-bottom: var(--space-4); }
  .rhead h2 { font-size: var(--text-lg); margin: 0 0 var(--space-2); }
  .affiner { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
  .affiner span { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); }
  .mini { font-family: var(--font-mono); font-size: var(--text-xs); padding: 2px 8px; border: 1px dashed var(--border-strong); background: transparent; border-radius: 999px; cursor: pointer; color: var(--accent-ai); }
  .mini:hover { background: color-mix(in srgb, var(--accent-ai) 10%, transparent); }

  .cards { display: grid; gap: var(--space-3); grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); }
  .pcard { border: 1px solid var(--border-subtle); border-left: 3px solid var(--border-strong); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); display: flex; flex-direction: column; gap: var(--space-2); }
  .pcard.hit { border-left-color: var(--accent-pk); box-shadow: 0 2px 10px rgba(31,122,109,0.08); }
  .ptop { display: flex; justify-content: space-between; align-items: baseline; gap: var(--space-2); }
  .ptop h3 { font-size: var(--text-base); margin: 0; }
  .disc { font-family: var(--font-mono); font-size: 9px; color: var(--text-muted); white-space: nowrap; text-transform: uppercase; letter-spacing: 0.04em; }
  .orient { margin: 0; color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.5; }
  .pcles { display: flex; flex-wrap: wrap; gap: 4px; margin-top: auto; }
  .tag { font-family: var(--font-mono); font-size: 10px; padding: 1px 7px; border-radius: 999px; border: 1px solid var(--border-subtle); background: var(--bg-primary); color: var(--text-muted); cursor: pointer; }
  .tag:hover { border-color: var(--accent-pk); color: var(--accent-pk); }
  .tag.sel { background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); border-color: var(--accent-pk); }
  .golink { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-pk); text-decoration: none; }
  .golink:hover { text-decoration: underline; }
  .sujets { margin-top: var(--space-16); border-top: 1px solid var(--border-subtle); padding-top: var(--space-8); }
  .sujets h2 { font-size: var(--text-xl); margin: 0 0 var(--space-2); }
  .shint { color: var(--text-secondary); font-size: var(--text-sm); margin: 0 0 var(--space-4); }
  .caslist { display: grid; gap: var(--space-4); max-width: 820px; }
</style>
