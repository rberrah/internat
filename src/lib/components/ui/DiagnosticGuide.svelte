<script>
  // @ts-nocheck
  // Arbre diagnostique GÉNÉRAL : on sélectionne des mots-clés cliniques au fur et à
  // mesure ; à chaque étape l'outil propose les signes les plus DISCRIMINANTS
  // (les « branches ») et réduit la liste des diagnostics compatibles.
  import { base } from '$app/paths';
  import { pathologies, keywordCat } from '$lib/content/lexique';

  /** @type {string[]} */
  let sel = [];
  const has = (m) => sel.includes(m);
  function pick(m) { sel = has(m) ? sel.filter((x) => x !== m) : [...sel, m]; }
  function reset() { sel = []; }

  // diagnostics compatibles avec TOUS les signes choisis
  $: strict = sel.length ? pathologies.filter((p) => sel.every((m) => p.cles.includes(m))) : pathologies;
  // repli : si plus rien ne réunit tout, les plus proches (recouvrement partiel)
  $: fallback = sel.length && strict.length === 0
    ? pathologies.map((p) => ({ p, n: sel.filter((m) => p.cles.includes(m)).length })).filter((x) => x.n > 0).sort((a, b) => b.n - a.n).slice(0, 6).map((x) => x.p)
    : [];
  $: candidats = strict.length ? strict : fallback;

  // prochaines « branches » : signes qui séparent le mieux les candidats restants
  $: suggestions = (() => {
    const pop = strict.length ? strict : pathologies;
    const n = pop.length;
    /** @type {Record<string, number>} */
    const freq = {};
    for (const p of pop) for (const m of p.cles) if (!sel.includes(m)) freq[m] = (freq[m] ?? 0) + 1;
    return Object.entries(freq)
      .map(([m, f]) => ({ m, f, disc: Math.min(f, n - f) }))
      .sort((a, b) => b.disc - a.disc || b.f - a.f)
      .slice(0, 15)
      .map((x) => x.m);
  })();
  // groupées par catégorie
  $: suggByCat = (() => {
    /** @type {Record<string, string[]>} */
    const g = {};
    for (const m of suggestions) (g[keywordCat(m)] ??= []).push(m);
    return Object.entries(g);
  })();
</script>

<div class="guide">
  <div class="path">
    <span class="step">Étape {sel.length + 1}</span>
    {#if sel.length}
      {#each sel as m}<button class="chosen" on:click={() => pick(m)}>{m} ✕</button>{/each}
      <button class="reset" on:click={reset}>Recommencer</button>
    {:else}
      <span class="hint">Choisissez un premier signe ci-dessous.</span>
    {/if}
  </div>

  <div class="cols">
    <div class="branches">
      <p class="blabel">{sel.length ? 'Affiner : choisissez un signe qui distingue' : 'Signes / contexte'}</p>
      {#each suggByCat as [cat, mots]}
        <div class="grp"><span class="glabel">{cat}</span>
          <div class="chips">{#each mots as m}<button class="kw" on:click={() => pick(m)}>{m}</button>{/each}</div>
        </div>
      {/each}
      {#if !suggestions.length}<p class="hint">Aucun autre signe ne distingue les diagnostics restants.</p>{/if}
    </div>

    <div class="results">
      <p class="rlabel">
        {#if !sel.length}{pathologies.length} diagnostics
        {:else if strict.length}{strict.length} diagnostic{strict.length > 1 ? 's' : ''} compatible{strict.length > 1 ? 's' : ''}
        {:else}Aucun ne réunit tout — les plus proches{/if}
      </p>
      <div class="dx">
        {#each candidats as p}
          <article class="card" class:solo={strict.length === 1}>
            <div class="ctop"><strong>{p.nom}</strong><span class="disc">{p.discipline}</span></div>
            <p class="orient">{p.orientation}</p>
            <div class="pcles">{#each p.cles as m}<button class="tag" class:on={has(m)} on:click={() => pick(m)}>{m}</button>{/each}</div>
            {#if p.chapter}<a class="golink" href={`${base}/chapitres/${p.chapter}`}>Voir le cours →</a>{/if}
          </article>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .guide { display: grid; gap: var(--space-4); }
  .path { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; padding: var(--space-3); background: var(--bg-secondary); border-radius: 10px; }
  .step { font-family: var(--font-mono); font-size: var(--text-xs); font-weight: 700; color: var(--accent-ai); text-transform: uppercase; letter-spacing: 0.06em; }
  .hint { color: var(--text-muted); font-size: var(--text-sm); }
  .chosen { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; border: 1px solid var(--accent-pk); background: color-mix(in srgb, var(--accent-pk) 14%, var(--bg-primary)); color: var(--accent-pk); cursor: pointer; }
  .reset { margin-left: auto; font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 999px; cursor: pointer; color: var(--text-secondary); }
  .cols { display: grid; gap: var(--space-4); }
  @media (min-width: 860px) { .cols { grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr); align-items: start; } }
  .branches { background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: 10px; padding: var(--space-4); }
  .blabel { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent-ai); margin: 0 0 var(--space-3); font-weight: 700; }
  .grp { margin-bottom: var(--space-3); }
  .glabel { display: block; font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); margin-bottom: 4px; }
  .chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .kw { font-size: var(--text-xs); padding: 5px 11px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 999px; cursor: pointer; color: var(--text-secondary); }
  .kw:hover { border-color: var(--accent-ai); color: var(--accent-ai); background: color-mix(in srgb, var(--accent-ai) 8%, var(--bg-primary)); }
  .rlabel { font-family: var(--font-mono); font-size: var(--text-sm); color: var(--text-secondary); margin: 0 0 var(--space-3); }
  .dx { display: grid; gap: var(--space-3); }
  .card { border: 1px solid var(--border-subtle); border-left: 3px solid var(--border-strong); border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: var(--bg-tertiary); }
  .card.solo { border-left-color: var(--accent-pk); box-shadow: 0 2px 12px rgba(31,122,109,0.1); }
  .ctop { display: flex; justify-content: space-between; align-items: baseline; gap: var(--space-2); }
  .ctop strong { font-size: var(--text-base); }
  .disc { font-family: var(--font-mono); font-size: 9px; color: var(--text-muted); text-transform: uppercase; white-space: nowrap; }
  .orient { margin: var(--space-1) 0 var(--space-2); color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.5; }
  .pcles { display: flex; flex-wrap: wrap; gap: 4px; }
  .tag { font-family: var(--font-mono); font-size: 10px; padding: 1px 7px; border-radius: 999px; border: 1px solid var(--border-subtle); background: var(--bg-primary); color: var(--text-muted); cursor: pointer; }
  .tag.on { background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); border-color: var(--accent-pk); }
  .golink { display: inline-block; margin-top: var(--space-2); font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-pk); text-decoration: none; }
</style>
