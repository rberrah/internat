# Internat Pharma

Site de révision **interactif** pour le concours de l'**internat en pharmacie**.
Fiches courtes en scrollytelling, schémas manipulables, exercices corrigés — discipline par discipline.

Construit sur la même architecture que le site de pharmacométrie (SvelteKit + adapter-static),
mais **français uniquement** et sans la tuyauterie bilingue/slides.

## Démarrage

```bash
npm install
npm run dev        # serveur local
npm run test       # validate + smoke (cohérence du contenu)
npm run check      # svelte-check (types)
npm run build      # build statique dans /build
```

## Ajouter du contenu

1. **Un chapitre** — copiez `src/content/chapters/_TEMPLATE.md`, renommez-le, remplissez le
   frontmatter (`slug`, `title`, `track`, `order`, `quiz`…) et les blocs `<!-- step … -->`.
   L'URL `/chapitres/<slug>` est générée automatiquement au build.
2. **Une discipline** — éditez `src/lib/content/tracks.js` (id, titre, couleur).
3. **Une visualisation** — déposez un composant `.svelte` dans
   `src/lib/components/visualizations/` puis référencez-le avec `viz="<NomDuFichier>"`
   dans une étape. Aucun câblage manuel (registre automatique).
4. **Des exercices / du glossaire** — `src/lib/content/exercises.js` et `glossary.js`.

Chaque chapitre s'écrit avec des encadrés : `:::key`, `:::clinical`, `:::pitfall`,
`:::howto`, `:::note`, `:::math` … `:::` (délimiteurs sur leur propre ligne).
Les formules LaTeX sont rendues au build par KaTeX (`$inline$`, `$$bloc$$`).

## Contenu de départ

- **Hématologie** — Lire un hémogramme (NFS) + viz classification des anémies.
- **Bactériologie & Virologie** — Antibiogramme, CMI et indices PK/PD + viz concentration/CMI.
- **Pharmacologie & PK** — Paramètres pharmacocinétiques de base.

Les autres disciplines (parasitologie, immunologie, biochimie, physiologie, thérapeutique,
biostatistiques, chimie analytique) sont déclarées et attendent leurs chapitres.

## Déploiement (GitHub Pages, repo « projet »)

Le site est prévu pour être servi sous `/internat`. En CI, définir `BASE_PATH=/internat`
avant `npm run build` (voir `svelte.config.js`), publier le dossier `build/`.
En local, laisser `BASE_PATH` vide.

L'identité publique du site (origine, chemin, auteur, licence) est centralisée dans
`src/lib/site.js` : c'est de là que viennent les URLs canoniques, les JSON-LD, les
citations et `sitemap.xml`. `base` ($app/paths) ne porte jamais l'origine, il ne suffit
donc pas pour écrire une URL absolue.

## Licence

- **Contenu** (textes, schémas, exercices) : [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).
  Réutilisation libre, y compris en enseignement et dans un cadre payant, à condition de
  citer l'auteur et de partager aux mêmes conditions.
- **Code** du site : licence **MIT**.

Les annales (`src/lib/content/annales.js`) reprennent des sujets officiels du CNG et ne
relèvent pas de cette licence.

> Support pédagogique — ne remplace pas les référentiels officiels.
