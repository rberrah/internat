<script>
  // Signature d'auteur en tête de chapitre : qui a écrit la page, dans quel cours,
  // et quand elle a été revue pour la dernière fois. Volontairement discrète —
  // une ligne de texte, pas d'encadré, pas de photo.
  // La date vient du frontmatter (`reviewed_on`) : si le champ manque, la mention
  // n'est PAS affichée (on n'invente pas une date de révision).
  import { AUTHOR, COURSE_NAME, formatDateFr } from '$lib/site';

  /** @type {string} — date ISO de dernière révision ; vide = mention masquée. */
  export let reviewedOn = '';
</script>

<p class="byline">
  <a class="who" href={AUTHOR.url}>{AUTHOR.name}</a>, {AUTHOR.credential}
  <span class="sep" aria-hidden="true">·</span>
  {COURSE_NAME}
  {#if reviewedOn}
    <span class="sep" aria-hidden="true">·</span>
    Dernière révision : {formatDateFr(reviewedOn)}
  {/if}
  <span class="sep" aria-hidden="true">·</span>
  <a class="orcid" href={AUTHOR.orcid} target="_blank" rel="noopener noreferrer me">ORCID</a>
</p>

<style>
  .byline {
    margin: var(--space-2) 0 0;
    font-size: var(--text-sm);
    line-height: 1.5;
    color: var(--text-muted);
  }
  .byline a { color: var(--text-secondary); text-decoration: none; border-bottom: 1px solid var(--border-subtle); }
  .byline a:hover { color: var(--accent-pk); border-color: var(--accent-pk); }
  .orcid { font-family: var(--font-mono); font-size: var(--text-xs); letter-spacing: 0.04em; }
  .sep { color: var(--border-strong); }
</style>
