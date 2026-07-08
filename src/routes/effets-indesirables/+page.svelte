<script>
  // @ts-nocheck
  import { base } from '$app/paths';
  import { medicaments } from '$lib/content/effetsIndesirables';

  let query = '';
  const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  $: q = norm(query.trim());
  // filtre : une classe est retenue si la requête touche son nom, ses exemples,
  // un effet indésirable ou son mécanisme.
  $: liste = q
    ? medicaments.filter((m) =>
        norm(m.classe + ' ' + m.exemples).includes(q) ||
        m.effets.some((e) => norm(e.ei + ' ' + e.mecanisme).includes(q)))
    : medicaments;
  const totalEffets = medicaments.reduce((n, m) => n + m.effets.length, 0);
</script>

<header class="head">
  <p class="eyebrow">Pharmacologie</p>
  <h1>Médicaments &amp; effets indésirables</h1>
  <p class="lede">
    Non pas une liste à apprendre par cœur, mais le <strong>« pourquoi »</strong> physiologique de chaque
    effet indésirable. Comprendre le mécanisme (<em>l'IEC bloque la dégradation de la bradykinine → toux</em>)
    ancre l'effet bien mieux qu'un tableau. {medicaments.length} classes, {totalEffets} effets expliqués.
  </p>
</header>

<div class="tools">
  <input class="search" type="search" placeholder="Rechercher un médicament, une classe ou un effet… (ex. toux, hyperkaliémie, tendinopathie, amiodarone)" bind:value={query} />
  <span class="count">{liste.length} classe{liste.length > 1 ? 's' : ''}</span>
</div>

{#if !liste.length}
  <p class="empty">Aucun résultat pour « {query} ».</p>
{/if}

<div class="grid">
  {#each liste as m (m.id)}
    <article class="med">
      <div class="mhead">
        <div>
          <h2>{m.classe}</h2>
          <p class="ex">{m.exemples}</p>
        </div>
        {#if m.chapter}<a class="golink" href={`${base}/chapitres/${m.chapter}`}>Cours →</a>{/if}
      </div>
      <ul class="effets">
        {#each m.effets as e}
          <li>
            <span class="ei">{e.ei}</span>
            <span class="mec">{e.mecanisme}</span>
          </li>
        {/each}
      </ul>
    </article>
  {/each}
</div>

<style>
  .head { margin-bottom: var(--space-6); }
  .eyebrow { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-pk); margin: 0 0 var(--space-2); }
  h1 { margin: 0 0 var(--space-3); }
  .lede { color: var(--text-secondary); max-width: 60ch; line-height: 1.6; }

  .tools { display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-5); }
  .search { flex: 1; padding: var(--space-3) var(--space-4); border: 1px solid var(--border-strong); border-radius: var(--radius); background: var(--bg-primary); color: var(--text-primary); font-size: var(--text-base); }
  .count { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); white-space: nowrap; }
  .empty { color: var(--text-muted); }

  .grid { display: grid; gap: var(--space-4); }
  @media (min-width: 900px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: start; } }

  .med { border: 1px solid var(--border-subtle); border-left: 3px solid var(--accent-pk); border-radius: var(--radius); padding: var(--space-4) var(--space-5); background: var(--bg-tertiary); }
  .mhead { display: flex; justify-content: space-between; align-items: flex-start; gap: var(--space-3); margin-bottom: var(--space-3); }
  .med h2 { font-size: var(--text-base); margin: 0; }
  .ex { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); margin: 2px 0 0; }
  .golink { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-pk); text-decoration: none; white-space: nowrap; }
  .golink:hover { text-decoration: underline; }

  .effets { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--space-2); }
  .effets li { padding: var(--space-2) 0; border-top: 1px solid var(--border-subtle); }
  .effets li:first-child { border-top: none; }
  .ei { display: block; font-weight: 600; font-size: var(--text-sm); color: var(--text-primary); margin-bottom: 2px; }
  .ei::before { content: '⚠ '; color: var(--accent-pk); }
  .mec { display: block; font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.55; }
</style>
