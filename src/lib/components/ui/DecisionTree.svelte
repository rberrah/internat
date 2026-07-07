<script>
  // Arbre de décision interactif : on part d'une question racine, on choisit une
  // branche, on descend jusqu'à une feuille (résultat = diagnostic ou conduite).
  // Un nœud = { q, options: [{ label, node }] } ; une feuille = { result, detail }.
  import { base } from '$app/paths';

  /** @type {{titre:string, discipline:string, chapter?:string, tree:any}} */
  export let arbre;

  /** @type {any[]} pile de nœuds parcourus */
  let stack = [arbre.tree];
  /** @type {string[]} libellés choisis */
  let crumbs = [];
  $: current = stack[stack.length - 1];

  function choose(/** @type {any} */ opt) {
    stack = [...stack, opt.node];
    crumbs = [...crumbs, opt.label];
  }
  function back() {
    if (stack.length > 1) { stack = stack.slice(0, -1); crumbs = crumbs.slice(0, -1); }
  }
  function reset() { stack = [arbre.tree]; crumbs = []; }
</script>

<article class="tree">
  <div class="thead">
    <h3>{arbre.titre}</h3>
    <span class="disc">{arbre.discipline}</span>
  </div>

  {#if crumbs.length}
    <div class="crumbs">
      {#each crumbs as c, i}<span class="crumb">{c}</span>{#if i < crumbs.length - 1}<span class="sep">→</span>{/if}{/each}
    </div>
  {/if}

  {#if current.result}
    <div class="leaf">
      <p class="rt">→ {current.result}</p>
      {#if current.detail}<p class="rd">{current.detail}</p>{/if}
    </div>
    <div class="actions">
      <button on:click={back}>← Retour</button>
      <button class="reset" on:click={reset}>Recommencer</button>
      {#if arbre.chapter}<a class="golink" href={`${base}/chapitres/${arbre.chapter}`}>Voir le cours →</a>{/if}
    </div>
  {:else}
    <p class="q">{current.q}</p>
    <div class="opts">
      {#each current.options as opt}
        <button class="opt" on:click={() => choose(opt)}>{opt.label}</button>
      {/each}
    </div>
    {#if crumbs.length}<button class="mini" on:click={back}>← Retour</button>{/if}
  {/if}
</article>

<style>
  .tree { border: 1px solid var(--border-subtle); border-left: 3px solid var(--accent-ai); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); }
  .thead { display: flex; justify-content: space-between; align-items: baseline; gap: var(--space-2); margin-bottom: var(--space-2); }
  .thead h3 { font-size: var(--text-base); margin: 0; }
  .disc { font-family: var(--font-mono); font-size: 9px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; white-space: nowrap; }
  .crumbs { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; margin-bottom: var(--space-3); }
  .crumb { font-family: var(--font-mono); font-size: 10px; padding: 1px 8px; border-radius: 999px; background: color-mix(in srgb, var(--accent-ai) 12%, var(--bg-primary)); color: var(--accent-ai); }
  .sep { color: var(--text-muted); font-size: 10px; }
  .q { font-weight: 600; color: var(--text-primary); margin: 0 0 var(--space-3); }
  .opts { display: grid; gap: var(--space-2); }
  .opt { text-align: left; padding: var(--space-2) var(--space-3); border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: var(--radius); cursor: pointer; font-size: var(--text-sm); color: var(--text-primary); transition: border-color 0.15s, background 0.15s; }
  .opt:hover { border-color: var(--accent-ai); background: color-mix(in srgb, var(--accent-ai) 6%, var(--bg-primary)); }
  .leaf { border-radius: var(--radius); padding: var(--space-3) var(--space-4); background: color-mix(in srgb, var(--accent-pk) 8%, var(--bg-primary)); border: 1px solid color-mix(in srgb, var(--accent-pk) 30%, transparent); }
  .rt { margin: 0 0 4px; font-weight: 700; color: var(--accent-pk); }
  .rd { margin: 0; color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.5; }
  .actions { display: flex; flex-wrap: wrap; gap: var(--space-2); align-items: center; margin-top: var(--space-3); }
  .actions button, .mini { font-family: var(--font-mono); font-size: var(--text-xs); padding: 5px 11px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 999px; cursor: pointer; color: var(--text-secondary); }
  .actions .reset { background: var(--accent-ai); color: #fff; border-color: var(--accent-ai); }
  .mini { margin-top: var(--space-2); border-style: dashed; }
  .golink { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-pk); text-decoration: none; margin-left: auto; }
</style>
