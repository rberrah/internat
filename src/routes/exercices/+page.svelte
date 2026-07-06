<script>
  import { base } from '$app/paths';
  import { exercises, exerciseCats } from '$lib/content/exercises';
  import chapters from '$lib/content/loadChapters';
  import ExerciseBlock from '$lib/components/ui/ExerciseBlock.svelte';

  const chapMeta = new Map(chapters.map((c) => [c.slug, c]));
  const byCat = exerciseCats.map((cat) => ({
    cat,
    items: exercises.filter((e) => e.cat === cat)
  }));
</script>

<header class="head">
  <p class="eyebrow">S'entraîner</p>
  <h1>Exercices</h1>
  <p class="lede">QCM et calculs corrigés, regroupés par discipline. Les mêmes exercices apparaissent à la fin de chaque chapitre concerné.</p>
</header>

{#each byCat as group}
  <section class="cat">
    <h2>{group.cat}</h2>
    <ExerciseBlock items={group.items} />
  </section>
{/each}

<style>
  .head { max-width: 720px; margin-bottom: var(--space-12); }
  h1 { font-size: var(--text-3xl); margin: var(--space-2) 0; }
  .lede { color: var(--text-secondary); font-size: var(--text-lg); }
  .cat { margin-bottom: var(--space-12); max-width: 760px; }
  .cat h2 { font-size: var(--text-xl); margin-bottom: var(--space-4); }
</style>
