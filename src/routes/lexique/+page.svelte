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

  // Recherche de mots-clés (au lieu d'afficher les 400+ d'un coup).
  let query = '';
  const norm = (/** @type {string} */ s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  $: q = norm(query.trim());
  $: matches = q ? allKeywords.filter((m) => norm(m).includes(q)).slice(0, 40) : [];
  // mots-clés les plus fréquents, proposés à l'état initial
  const common = (() => {
    /** @type {Record<string, number>} */
    const count = {};
    for (const p of pathologies) for (const m of p.cles) count[m] = (count[m] ?? 0) + 1;
    return Object.entries(count).sort((a, b) => b[1] - a[1]).slice(0, 22).map(([m]) => m);
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
    <h2>Recherchez un signe clinique</h2>
    {#if sel.length}<button class="reset" on:click={reset}>Réinitialiser ({sel.length})</button>{/if}
  </div>

  {#if sel.length}
    <div class="chips selected">
      {#each sel as m}<button class="kw on" on:click={() => toggle(m)}>{m} ✕</button>{/each}
    </div>
  {/if}

  <input class="search" type="search" placeholder="Rechercher un signe, un terrain, une biologie… (ex. fièvre, ictère, thrombopénie)" bind:value={query} />

  {#if query.trim()}
    <div class="chips">
      {#each matches as m}<button class="kw" class:on={has(m)} on:click={() => toggle(m)}>{m} <em>{keywordCat(m).split(' ')[0]}</em></button>{/each}
      {#if !matches.length}<span class="hint">Aucun mot-clé ne correspond à « {query} ».</span>{/if}
    </div>
  {:else}
    <p class="hint">Tapez un mot-clé, ou partez de l'un des signes les plus fréquents :</p>
    <div class="chips">
      {#each common as m}<button class="kw" class:on={has(m)} on:click={() => toggle(m)}>{m}</button>{/each}
    </div>
  {/if}
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
  .search { width: 100%; padding: var(--space-3) var(--space-4); border: 1px solid var(--border-strong); border-radius: var(--radius); background: var(--bg-primary); color: var(--text-primary); font-size: var(--text-base); margin-bottom: var(--space-3); }
  .selected { margin-bottom: var(--space-3); }
  .hint { color: var(--text-muted); font-size: var(--text-sm); margin: 0 0 var(--space-2); }
  .chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .kw { font-size: var(--text-xs); padding: 4px 10px; border: 1px solid var(--border-subtle); background: var(--bg-primary); border-radius: 999px; cursor: pointer; color: var(--text-secondary); }
  .kw em { font-style: normal; color: var(--text-muted); font-size: 9px; text-transform: uppercase; letter-spacing: 0.03em; }
  .kw:hover { border-color: var(--accent-pk); }
  .kw.on { background: var(--accent-pk); color: #fff; border-color: var(--accent-pk); }
  .kw.on em { color: rgba(255,255,255,0.8); }

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
