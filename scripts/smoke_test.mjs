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
const { pathologies, allKeywords, keywordToPathologies } = await import(url.pathToFileURL(path.join(root, 'src/lib/content/lexique.js')));
const { itemIndex } = await import(url.pathToFileURL(path.join(root, 'src/lib/content/programme.js')));
const { casCliniques } = await import(url.pathToFileURL(path.join(root, 'src/lib/content/casCliniques.js')));
const { fiches } = await import(url.pathToFileURL(path.join(root, 'src/lib/content/fiches.js')));
const { markedTerms } = await import(url.pathToFileURL(path.join(root, 'src/lib/content/marks.js')));
const { arbres } = await import(url.pathToFileURL(path.join(root, 'src/lib/content/decisionTrees.js')));

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

// 8. lexique clinique : structure + index inverse + liens vers chapitres
const badPatho = pathologies.filter((p) => !p.id || !p.nom || !p.orientation || !Array.isArray(p.cles) || p.cles.length === 0);
check(badPatho.length === 0, `${pathologies.length} pathologies du lexique : structure valide`);
const uniqPathoId = new Set(pathologies.map((p) => p.id));
check(uniqPathoId.size === pathologies.length, `identifiants de pathologies uniques`);
// index inverse cohérent (chaque mot-clé pointe vers ≥ 1 pathologie qui le contient)
const revOk = allKeywords.every((m) => keywordToPathologies[m]?.length && keywordToPathologies[m].every((p) => p.cles.includes(m)));
check(revOk, `${allKeywords.length} mots-clés : index inverse bidirectionnel cohérent`);
// liens chapitre du lexique résolus
const badLexChap = pathologies.filter((p) => p.chapter && !slugSet.has(p.chapter));
check(badLexChap.length === 0, `liens chapitre du lexique tous résolus`);

// 9. programme officiel : chaque chapitre pointe vers un item existant
const badItem = chapters.filter((c) => c.data.programItem && !itemIndex[c.data.programItem]);
check(badItem.length === 0, `chapitres → items du programme officiel tous résolus`);

// 10. cas cliniques : marques [[...]] ⇔ indices, liens chapitre résolus
let casMarkOk = true;
for (const c of casCliniques) {
  const marks = new Set(markedTerms(c.enonce));
  const idx = new Set((c.indices ?? []).map((i) => i.mot));
  for (const m of marks) if (!idx.has(m)) casMarkOk = false;
  for (const i of idx) if (!marks.has(i)) casMarkOk = false;
  if (!c.reponse || !c.question) casMarkOk = false;
}
check(casMarkOk, `${casCliniques.length} cas cliniques : marques [[...]] ⇔ indices cohérentes`);
const badCasChap = casCliniques.filter((c) => c.chapter && !slugSet.has(c.chapter));
check(badCasChap.length === 0, `liens chapitre des cas cliniques tous résolus`);

// 11. exercices : marques [[...]] ⇔ indices (quand présents)
let exoMarkOk = true;
for (const e of exercises) {
  const marks = new Set(markedTerms(e.q));
  const idx = new Set((e.indices ?? []).map((i) => i.mot));
  for (const i of idx) if (!marks.has(i)) exoMarkOk = false;
}
check(exoMarkOk, `indices des exercices cohérents avec les marques du sujet`);

// 12. fiches : structure + liens chapitre
const badFiche = fiches.filter((f) => !f.titre || !f.section || !Array.isArray(f.blocs) || !f.blocs.length);
check(badFiche.length === 0, `${fiches.length} fiches : structure valide`);
const badFicheChap = fiches.filter((f) => f.chapter && !slugSet.has(f.chapter));
check(badFicheChap.length === 0, `liens chapitre des fiches tous résolus`);

// 13. arbres de décision : structure récursive + liens chapitre
function nodeOk(n) {
  if (!n || typeof n !== 'object') return false;
  if (n.result) return typeof n.result === 'string';
  if (!n.q || !Array.isArray(n.options) || n.options.length === 0) return false;
  return n.options.every((o) => o && typeof o.label === 'string' && nodeOk(o.node));
}
const badTree = arbres.filter((a) => !a.id || !a.titre || !nodeOk(a.tree));
check(badTree.length === 0, `${arbres.length} arbres de décision : structure valide`);
check(new Set(arbres.map((a) => a.id)).size === arbres.length, `identifiants d'arbres uniques`);
const badTreeChap = arbres.filter((a) => a.chapter && !slugSet.has(a.chapter));
check(badTreeChap.length === 0, `liens chapitre des arbres de décision tous résolus`);

if (fail.length) {
  console.error('\nSmoke tests ÉCHOUÉS :\n' + fail.map((m) => '  ✗ ' + m).join('\n'));
  process.exit(1);
}
console.log('\nSmoke tests OK : contenu cohérent.');
