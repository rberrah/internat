<script>
  import { base } from '$app/paths';
</script>

<article class="about">
  <p class="eyebrow">À propos</p>
  <h1>Un site pour réviser l'internat, autrement</h1>

  <p class="lede">
    Ce site rassemble des fiches courtes et interactives pour préparer le concours de
    l'internat en pharmacie. L'idée : <strong>comprendre le mécanisme</strong> avant de retenir
    la formule, avec des schémas que l'on peut manipuler.
  </p>

  <h2>Comment c'est organisé</h2>
  <ul>
    <li><strong>Disciplines</strong> — chaque grande matière du programme est un parcours.</li>
    <li><strong>Chapitres</strong> — se lisent en défilant ; un schéma manipulable accompagne le texte.</li>
    <li><strong>Exercices</strong> — QCM et calculs corrigés, par discipline et en fin de chapitre.</li>
    <li><strong>Glossaire</strong> — les termes clés, reliés depuis les chapitres.</li>
  </ul>

  <h2>Fait pour les internes</h2>
  <p>
    Ce projet est un support d'entraide, construit pour être compréhensible et honnête sur ce
    qu'il n'est pas : il <strong>ne remplace pas</strong> les référentiels officiels ni les
    ouvrages de référence. Toute erreur ou imprécision peut — et doit — être corrigée.
  </p>

  <div class="cta">
    <a class="btn btn-primary" href={`${base}/chapitres`}>Commencer à réviser</a>
  </div>
</article>

<style>
  .about { max-width: 720px; }
  h1 { font-size: var(--text-3xl); margin: var(--space-2) 0 var(--space-4); }
  h2 { font-size: var(--text-xl); margin: var(--space-8) 0 var(--space-3); }
  .lede { color: var(--text-secondary); font-size: var(--text-lg); }
  ul { color: var(--text-secondary); padding-left: 1.2em; }
  li { margin-bottom: var(--space-2); }
  p { color: var(--text-secondary); }
  .cta { margin-top: var(--space-8); }
</style>
