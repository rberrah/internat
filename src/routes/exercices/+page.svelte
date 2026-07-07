<script>
  import chapters from '$lib/content/loadChapters';
  import { trackById } from '$lib/content/tracks';
  import { exercises, exerciseCats } from '$lib/content/exercises';
  import { casCliniques, casDisciplines } from '$lib/content/casCliniques';
  import ExerciseBlock from '$lib/components/ui/ExerciseBlock.svelte';
  import Quiz from '$lib/components/ui/Quiz.svelte';
  import CasClinique from '$lib/components/ui/CasClinique.svelte';
  import DecisionTree from '$lib/components/ui/DecisionTree.svelte';
  import { arbres, treeDisciplines } from '$lib/content/decisionTrees';

  const tabs = [
    { id: 'qcm', label: 'QCM', sub: 'Épreuve 1 · 60 QCM' },
    { id: 'exo', label: "Exercices d'application", sub: 'Épreuve 2 · exercices' },
    { id: 'cas', label: 'Dossiers cliniques', sub: 'Épreuve 3 · dossiers' },
    { id: 'arbres', label: 'Arbres de décision', sub: 'Raisonnement diagnostique' }
  ];
  let tab = 'qcm';

  // QCM : quiz des chapitres, regroupés par parcours
  const qcmByTrack = (() => {
    const withQcm = chapters.filter((c) => c.quiz?.length);
    /** @type {Record<string, any[]>} */
    const g = {};
    for (const c of withQcm) (g[c.track] ??= []).push(c);
    return Object.entries(g);
  })();
  // Exercices : par catégorie
  const exoByCat = exerciseCats.map((cat) => ({ cat, items: exercises.filter((e) => e.cat === cat) }));
  // Dossiers : par discipline
  const casByDisc = casDisciplines.map((d) => ({ d, items: casCliniques.filter((c) => c.discipline === d) }));
  // Arbres de décision : par discipline
  const treesByDisc = treeDisciplines.map((d) => ({ d, items: arbres.filter((a) => a.discipline === d) }));
</script>

<header class="head">
  <p class="eyebrow">S'entraîner</p>
  <h1>Entraînement</h1>
  <p class="lede">Les trois épreuves du concours, séparées : <strong>QCM</strong> de connaissances, <strong>exercices d'application</strong>, et <strong>dossiers cliniques & biologiques</strong>.</p>
</header>

<div class="tabs">
  {#each tabs as t}
    <button class:on={tab === t.id} on:click={() => (tab = t.id)}>
      <strong>{t.label}</strong><span>{t.sub}</span>
    </button>
  {/each}
</div>

{#if tab === 'qcm'}
  {#each qcmByTrack as [track, list]}
    <section class="grp">
      <h2>{trackById(track)?.title ?? track}</h2>
      {#each list as c}<Quiz title={c.title} questions={c.quiz} />{/each}
    </section>
  {/each}
{:else if tab === 'exo'}
  {#each exoByCat as g}
    <section class="grp"><h2>{g.cat}</h2><ExerciseBlock items={g.items} /></section>
  {/each}
{:else if tab === 'cas'}
  {#each casByDisc as g}
    <section class="grp"><h2>{g.d}</h2><div class="caslist">{#each g.items as c}<CasClinique cas={c} />{/each}</div></section>
  {/each}
{:else}
  {#each treesByDisc as g}
    <section class="grp"><h2>{g.d}</h2><div class="treelist">{#each g.items as a}<DecisionTree arbre={a} />{/each}</div></section>
  {/each}
{/if}

<style>
  .head { max-width: 720px; margin-bottom: var(--space-6); }
  h1 { font-size: var(--text-3xl); margin: var(--space-2) 0; }
  .lede { color: var(--text-secondary); font-size: var(--text-lg); }
  .tabs { display: flex; flex-wrap: wrap; gap: var(--space-2); margin-bottom: var(--space-8); border-bottom: 1px solid var(--border-subtle); padding-bottom: var(--space-3); }
  .tabs button { display: flex; flex-direction: column; align-items: flex-start; padding: 8px 14px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 10px; cursor: pointer; color: var(--text-secondary); }
  .tabs button strong { font-size: var(--text-sm); }
  .tabs button span { font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); }
  .tabs button.on { background: var(--accent-pk); border-color: var(--accent-pk); color: #fff; }
  .tabs button.on span { color: rgba(255,255,255,0.85); }
  .grp { margin-bottom: var(--space-12); max-width: 820px; display: grid; gap: var(--space-4); }
  .grp h2 { font-size: var(--text-xl); margin: 0; }
  .caslist { display: grid; gap: var(--space-4); }
  .treelist { display: grid; gap: var(--space-4); grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); align-items: start; }
</style>
