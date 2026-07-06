// Tests de fumée : cohérence contenu ↔ code, sans navigateur.
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import matter from 'gray-matter';

const root = path.dirname(url.fileURLToPath(import.meta.url)) + '/..';
const chaptersDir = path.join(root, 'src/content/chapters');
const vizDir = path.join(root, 'src/lib/components/visualizations');

const fail = [];
const ok = (m) => console.log('  ✓ ' + m);
const check = (cond, m) => (cond ? ok(m) : fail.push(m));

// chapitres
const files = fs.readdirSync(chaptersDir).filter((f) => f.endsWith('.md') && !f.startsWith('_'));
const chapters = files.map((f) => {
  const { data, content } = matter(fs.readFileSync(path.join(chaptersDir, f), 'utf8'));
  return { f, data, content };
});
const slugs = chapters.map((c) => c.data.slug);

// disciplines & exercices & glossaire
const { tracks } = await import(url.pathToFileURL(path.join(root, 'src/lib/content/tracks.js')));
const { exercises, exercisesForChapter } = await import(url.pathToFileURL(path.join(root, 'src/lib/content/exercises.js')));
const { glossary } = await import(url.pathToFileURL(path.join(root, 'src/lib/content/glossary.js')));

// 1. slugs uniques
check(new Set(slugs).size === slugs.length, `${slugs.length} slugs uniques`);

// 2. disciplines des chapitres connues
const trackIds = new Set(tracks.map((t) => t.id));
check(chapters.every((c) => trackIds.has(c.data.track)), `disciplines valides (${trackIds.size} définies)`);

// 3. prérequis résolus
const slugSet = new Set(slugs);
const badPrereq = chapters.flatMap((c) => (c.data.prerequisites ?? []).filter((p) => !slugSet.has(p)));
check(badPrereq.length === 0, `prérequis tous résolus`);

// 4. viz référencées résolvent
const vizKeys = new Set();
for (const f of fs.readdirSync(vizDir).filter((f) => f.endsWith('.svelte'))) {
  const stem = f.replace(/\.svelte$/, '');
  vizKeys.add(stem);
  vizKeys.add(stem.replace(/^\d+[_-]/, ''));
}
const vizRefs = chapters.flatMap((c) => [...c.content.matchAll(/viz="([^"]*)"/g)].map((m) => m[1]));
const badViz = vizRefs.filter((v) => !vizKeys.has(v));
check(badViz.length === 0, `${vizRefs.length} références viz résolvent (${vizKeys.size} clés)`);

// 5. exercices : chapitre existant + structure
const badExChapter = exercises.filter((e) => !slugSet.has(e.chapter));
check(badExChapter.length === 0, `${exercises.length} exercices rattachés à un chapitre existant`);
const badExStruct = exercises.filter((e) =>
  e.type === 'mcq' ? !(Array.isArray(e.options) && Number.isInteger(e.correct)) : !Number.isFinite(e.answer)
);
check(badExStruct.length === 0, `structure des exercices (mcq/num) valide`);

// 6. chaque chapitre a au moins un exercice OU un quiz (entraînement)
const noTrain = chapters.filter((c) => !(c.data.quiz?.length) && exercisesForChapter(c.data.slug).length === 0);
check(noTrain.length === 0, `chaque chapitre a un quiz ou des exercices`);

// 7. glossaire : termes référencés par les chapitres définis
const glossTerms = new Set(glossary.map((g) => g.term));
const badGloss = chapters.flatMap((c) => (c.data.glossary ?? []).filter((t) => !glossTerms.has(t)));
check(badGloss.length === 0, `termes de glossaire référencés tous définis`);

if (fail.length) {
  console.error('\nSmoke tests ÉCHOUÉS :\n' + fail.map((m) => '  ✗ ' + m).join('\n'));
  process.exit(1);
}
console.log('\nSmoke tests OK : contenu cohérent.');
