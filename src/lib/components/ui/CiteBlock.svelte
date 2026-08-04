<script>
  // « Citer cette page » : une page de cours se cite comme n'importe quelle ressource
  // en ligne. On donne la forme rédigée et le BibTeX correspondant, tous deux
  // construits sur l'URL canonique RÉELLE de la page (voir $lib/site).
  //
  // Aucune balise meta `citation_*` (Highwire) n'est posée sur ce site : les règles
  // d'indexation de Google Scholar excluent le matériel de cours, et les poser
  // exposerait à un rejet. La citabilité passe par le texte, pas par un balisage
  // détourné.
  import { onDestroy } from 'svelte';
  import { page } from '$app/stores';
  import { AUTHOR, COURSE_NAME, LICENSE_LABEL, SITE_YEAR, canonicalUrl } from '$lib/site';

  /** @type {string} — titre de la page citée (titre du chapitre). */
  export let title = '';
  /** @type {string} — identifiant stable, sert de clé BibTeX (slug du chapitre). */
  export let id = '';
  /** @type {number} — année de la citation (année de dernière révision si connue). */
  export let year = SITE_YEAR;

  $: url = canonicalUrl($page.url.pathname);
  $: citation = `${AUTHOR.citationName} ${title}. ${COURSE_NAME}, ${year}. ${url}`;
  $: bibKey = `berrah-${(id || 'page').replace(/[^a-z0-9-]/gi, '-')}-${year}`;
  $: bibtex = [
    `@misc{${bibKey},`,
    `  author       = {${AUTHOR.bibtexName}},`,
    `  title        = {${title}},`,
    `  howpublished = {${COURSE_NAME} — cours en ligne},`,
    `  year         = {${year}},`,
    `  url          = {${url}},`,
    `  note         = {Licence ${LICENSE_LABEL}}`,
    '}'
  ].join('\n');

  /** Bloc dont la copie vient d'être confirmée ('' = aucun). */
  let copied = '';
  /** @type {ReturnType<typeof setTimeout> | undefined} */
  let timer;

  /**
   * Copie dans le presse-papiers. Repli SILENCIEUX : si l'API est absente (contexte
   * non sécurisé, navigateur ancien) ou refusée, on ne montre aucune erreur — le
   * texte reste sélectionnable à la main.
   * @param {string} text
   * @param {string} which
   */
  async function copy(text, which) {
    try {
      await navigator.clipboard.writeText(text);
      copied = which;
      clearTimeout(timer);
      timer = setTimeout(() => (copied = ''), 2000);
    } catch {
      /* repli silencieux */
    }
  }

  onDestroy(() => clearTimeout(timer));
</script>

<section class="cite">
  <h3>Citer cette page</h3>

  <div class="block">
    <p class="ref">{citation}</p>
    <button type="button" class="copy" aria-live="polite" on:click={() => copy(citation, 'ref')}>
      {copied === 'ref' ? 'Copié' : 'Copier'}
    </button>
  </div>

  <div class="block">
    <pre class="bib">{bibtex}</pre>
    <button type="button" class="copy" aria-live="polite" on:click={() => copy(bibtex, 'bib')}>
      {copied === 'bib' ? 'Copié' : 'Copier le BibTeX'}
    </button>
  </div>
</section>

<style>
  .cite { margin-top: var(--space-8); }
  .cite h3 { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); margin: 0 0 var(--space-3); }
  .block { display: flex; align-items: flex-start; gap: var(--space-3); margin-bottom: var(--space-3); }
  .ref { flex: 1; margin: 0; font-size: var(--text-sm); line-height: 1.6; color: var(--text-secondary); overflow-wrap: anywhere; }
  .bib {
    flex: 1; margin: 0; padding: var(--space-3) var(--space-4);
    background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: var(--radius);
    font-family: var(--font-mono); font-size: var(--text-xs); line-height: 1.7; color: var(--text-secondary);
    overflow-x: auto; white-space: pre;
  }
  .copy {
    flex: none; cursor: pointer; white-space: nowrap;
    font-family: var(--font-mono); font-size: var(--text-xs);
    padding: 4px 10px; border-radius: 999px;
    border: 1px solid var(--border-subtle); background: var(--bg-tertiary); color: var(--text-secondary);
    transition: border-color 0.2s ease, color 0.2s ease;
  }
  .copy:hover { border-color: var(--accent-pk); color: var(--accent-pk); }
  @media (max-width: 560px) {
    .block { flex-direction: column; }
    .bib, .ref { width: 100%; }
  }
</style>
