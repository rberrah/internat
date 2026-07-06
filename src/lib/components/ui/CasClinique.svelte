<script>
  // Dossier / cas clinique interactif : on lit l'énoncé, on « souligne les indices »
  // (les termes-clés marqués [[...]] s'allument, avec leur signification), puis on
  // révèle la réponse et le raisonnement.
  import { parseMarks } from '$lib/content/marks';
  import { base } from '$app/paths';

  /** @type {{titre:string, discipline:string, enonce:string, indices:{mot:string,pourquoi:string}[], question:string, reponse:string, raisonnement:string, chapter?:string}} */
  export let cas;

  let showIndices = false;
  let showRep = false;

  $: segments = parseMarks(cas.enonce);
  $: whyOf = Object.fromEntries((cas.indices ?? []).map((i) => [i.mot, i.pourquoi]));
</script>

<article class="cas">
  <div class="chead">
    <h3>{cas.titre}</h3>
    <span class="disc">{cas.discipline}</span>
  </div>

  <p class="enonce">
    {#each segments as seg}{#if seg.key}<span class="term" class:on={showIndices} title={showIndices ? whyOf[seg.text] : ''}>{seg.text}</span>{:else}{seg.text}{/if}{/each}
  </p>

  <div class="actions">
    <button class:on={showIndices} on:click={() => (showIndices = !showIndices)}>
      {showIndices ? 'Masquer les indices' : 'Souligner les indices'}
    </button>
    <button class="rep" class:on={showRep} on:click={() => (showRep = !showRep)}>
      {showRep ? 'Masquer la réponse' : 'Voir la réponse'}
    </button>
  </div>

  {#if showIndices}
    <ul class="indices">
      {#each cas.indices ?? [] as i}<li><strong>{i.mot}</strong> — {i.pourquoi}</li>{/each}
    </ul>
  {/if}

  <p class="question">{cas.question}</p>

  {#if showRep}
    <div class="reponse">
      <p class="rt">{cas.reponse}</p>
      <p class="rr">{cas.raisonnement}</p>
      {#if cas.chapter}<a class="golink" href={`${base}/chapitres/${cas.chapter}`}>Voir le cours →</a>{/if}
    </div>
  {/if}
</article>

<style>
  .cas { border: 1px solid var(--border-subtle); border-left: 3px solid var(--accent-ai); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); }
  .chead { display: flex; justify-content: space-between; align-items: baseline; gap: var(--space-2); margin-bottom: var(--space-2); }
  .chead h3 { font-size: var(--text-base); margin: 0; }
  .disc { font-family: var(--font-mono); font-size: 9px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; white-space: nowrap; }
  .enonce { color: var(--text-secondary); line-height: 1.6; margin: 0 0 var(--space-3); }
  .term { transition: background 0.15s, box-shadow 0.15s; border-radius: 3px; }
  .term.on { background: color-mix(in srgb, var(--accent-pk) 18%, transparent); box-shadow: 0 1px 0 var(--accent-pk); color: var(--text-primary); font-weight: 600; cursor: help; }
  .actions { display: flex; flex-wrap: wrap; gap: var(--space-2); margin-bottom: var(--space-2); }
  .actions button { font-family: var(--font-mono); font-size: var(--text-xs); padding: 5px 11px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 999px; cursor: pointer; color: var(--text-secondary); }
  .actions button.on { background: var(--accent-pk); color: #fff; border-color: var(--accent-pk); }
  .actions .rep.on { background: var(--accent-ai); border-color: var(--accent-ai); }
  .indices { margin: 0 0 var(--space-3); padding-left: 1.1em; display: grid; gap: 3px; }
  .indices li { font-size: var(--text-sm); color: var(--text-secondary); }
  .indices strong { color: var(--accent-pk); }
  .question { font-weight: 600; color: var(--text-primary); margin: var(--space-2) 0; }
  .reponse { border-top: 1px solid var(--border-subtle); padding-top: var(--space-3); margin-top: var(--space-2); }
  .rt { margin: 0 0 var(--space-2); font-weight: 700; color: var(--accent-ai); }
  .rr { margin: 0 0 var(--space-2); color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.55; }
  .golink { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-pk); text-decoration: none; }
</style>
