// Plan du site (sitemap.xml), généré au build à partir du chargeur de chapitres :
// ajouter un chapitre Markdown suffit pour qu'il y figure, sans liste à maintenir.
//
// `trailingSlash: 'never'` est explicite : un fichier nommé « sitemap.xml » ne doit
// jamais devenir « sitemap.xml/ », contrairement aux pages (`+layout.js`).
import chapters from '$lib/content/loadChapters';
import { SITE_ORIGIN, SITE_BASE } from '$lib/site';

export const prerender = true;
export const trailingSlash = 'never';

// Pages fixes du site, dans l'ordre de la navigation. Chemins logiques : le préfixe
// public (/internat) est ajouté par `absolute()`.
const PAGES_FIXES = [
  '/',
  '/chapitres/',
  '/fiches/',
  '/exercices/',
  '/annales/',
  '/lacunes/',
  '/lexique/',
  '/effets-indesirables/',
  '/glossaire/',
  '/references/',
  '/a-propos/'
];

/**
 * URL publique absolue d'une route logique (barre oblique finale comprise).
 * @param {string} route
 * @returns {string}
 */
function absolute(route) {
  return `${SITE_ORIGIN}${SITE_BASE}${route}`;
}

/**
 * Échappe les caractères réservés de XML.
 * @param {string} s
 * @returns {string}
 */
function xml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Une entrée <url>. `lastmod` n'est écrit que si une date de révision existe
 * réellement dans le frontmatter : aucune date n'est inventée.
 * @param {string} loc
 * @param {string} [lastmod]
 * @returns {string}
 */
function urlEntry(loc, lastmod) {
  const date = /^\d{4}-\d{2}-\d{2}$/.test(String(lastmod ?? '')) ? String(lastmod) : '';
  return (
    '  <url>\n' +
    `    <loc>${xml(loc)}</loc>\n` +
    (date ? `    <lastmod>${date}</lastmod>\n` : '') +
    '  </url>'
  );
}

export function GET() {
  const entries = [
    ...PAGES_FIXES.map((route) => urlEntry(absolute(route))),
    ...chapters.map((/** @type {any} */ c) =>
      urlEntry(absolute(`/chapitres/${c.slug}/`), c.reviewed_on)
    )
  ];

  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries.join('\n') +
    '\n</urlset>\n';

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
}
