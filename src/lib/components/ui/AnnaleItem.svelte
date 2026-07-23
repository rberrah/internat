<script>
  // @ts-nocheck
  // Un item d'annales du concours (QCM / exercice / dossier). Sujet OFFICIEL reproduit à des
  // fins de révision : la provenance est toujours affichée, et la réponse est masquée jusqu'à
  // ce que l'étudiant choisisse de la révéler (on révise, on ne recopie pas).
  export let item;
  export let sessionLabel = '';

  let show = false;
  $: answers = (item.answer || '').split('').filter((c) => /[A-E]/.test(c));
</script>

<article class="annale">
  <header>
    <span class="tag tag-{item.type}">{item.type === 'qcm' ? 'QCM' : item.type === 'exercice' ? 'Exercice' : 'Dossier'} n°{item.n}</span>
    {#if sessionLabel}<span class="sess">{sessionLabel}</span>{/if}
  </header>

  <p class="prompt">{item.prompt}</p>

  {#if item.options?.length}
    <ol class="options">
      {#each item.options as o}
        <li class:good={show && answers.includes(o.l)}>
          <span class="l">{o.l}</span>{o.t}
        </li>
      {/each}
    </ol>
  {/if}

  <div class="foot">
    {#if item.answer || item.correction}
      <button class="reveal" on:click={() => (show = !show)}>
        {show ? 'Masquer la réponse' : 'Voir la réponse'}
      </button>
      {#if show}
        {#if item.answer}<span class="ans">Réponse{answers.length > 1 ? 's' : ''} : <strong>{answers.join(', ')}</strong></span>{/if}
        {#if item.correction}<p class="corr">{item.correction}</p>{/if}
      {/if}
    {:else}
      <span class="nokey">Réponse non fournie dans le sujet</span>
    {/if}
  </div>
</article>

<style>
  .annale { border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-4) var(--space-5); background: var(--bg-tertiary); }
  header { display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-3); }
  .tag { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; padding: 2px 8px; border-radius: 999px; font-weight: 700; }
  .tag-qcm { background: color-mix(in srgb, var(--accent-pk) 15%, var(--bg-primary)); color: var(--accent-pk); }
  .tag-exercice { background: color-mix(in srgb, var(--accent-ai) 15%, var(--bg-primary)); color: var(--accent-ai); }
  .tag-dossier { background: color-mix(in srgb, var(--accent-pd) 15%, var(--bg-primary)); color: var(--accent-pd); }
  .sess { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); }
  .prompt { margin: 0 0 var(--space-3); font-weight: 600; line-height: 1.5; }
  .options { list-style: none; margin: 0 0 var(--space-3); padding: 0; display: grid; gap: var(--space-2); }
  .options li { display: flex; gap: var(--space-2); padding: var(--space-2) var(--space-3); border: 1px solid var(--border-subtle); border-radius: var(--radius); font-size: var(--text-sm); line-height: 1.45; transition: background-color 0.15s ease, border-color 0.15s ease; }
  .options li.good { background: var(--quiz-success-bg); border-color: var(--quiz-success-text); color: var(--quiz-success-text); }
  .options .l { font-family: var(--font-mono); font-weight: 700; flex-shrink: 0; }
  .foot { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-3); }
  .reveal { font-family: var(--font-mono); font-size: var(--text-xs); font-weight: 700; color: var(--accent-pk); background: transparent; border: 1px solid var(--accent-pk); border-radius: var(--radius); padding: 4px 12px; cursor: pointer; }
  .reveal:hover { background: color-mix(in srgb, var(--accent-pk) 10%, transparent); }
  .ans { font-family: var(--font-mono); font-size: var(--text-sm); color: var(--text-primary); }
  .ans strong { color: var(--quiz-success-text); }
  .corr { flex-basis: 100%; margin: 0; font-size: var(--text-sm); line-height: 1.5; color: var(--text-secondary); white-space: pre-wrap; }
  .nokey { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); font-style: italic; }
</style>
