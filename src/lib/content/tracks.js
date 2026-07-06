// @ts-nocheck
// Parcours (disciplines) de l'internat en pharmacie. Chaque chapitre porte un
// champ `track` dans son frontmatter ; le regroupement se fait sur ce champ.
// Édition libre : ajoutez/retirez des disciplines selon votre programme.

export const tracks = [
  { id: 'transversal',   label: 'Transversal',   title: 'Notions transversales',          tagline: "Les concepts qui reviennent partout : demi-vie (biophysique ↔ PK), Michaelis-Menten (enzymo ↔ PK), pH/pKa, ordres de réaction.", accent: '#3730a3', status: 'available' },
  { id: 'hemato',        label: 'Discipline 1',  title: 'Hématologie',                    tagline: "Hémogramme, anémies, hémostase, hémopathies et transfusion.",                         accent: '#b23b4a', status: 'available' },
  { id: 'bacterio',      label: 'Discipline 2',  title: 'Bactériologie & Virologie',      tagline: "Diagnostic microbiologique, antibiogramme, résistances et principaux agents.",         accent: '#1f7a6d', status: 'available' },
  { id: 'parasito',      label: 'Discipline 3',  title: 'Parasitologie & Mycologie',      tagline: "Paludisme, parasitoses digestives, mycoses et diagnostic direct.",                    accent: '#2f7d54', status: 'planned' },
  { id: 'immuno',        label: 'Discipline 4',  title: 'Immunologie',                    tagline: "Réponse immunitaire, hypersensibilités, auto-immunité et exploration.",               accent: '#7b5aa6', status: 'planned' },
  { id: 'biochimie',     label: 'Discipline 5',  title: 'Biochimie',                      tagline: "Équilibre hydro-électrolytique, enzymologie, marqueurs et interprétation.",           accent: '#9c5a2b', status: 'planned' },
  { id: 'pharmaco',      label: 'Discipline 6',  title: 'Pharmacologie & Pharmacocinétique', tagline: "Cibles, effet, PK/PD, interactions et paramètres pharmacocinétiques.",             accent: '#34568a', status: 'available' },
  { id: 'physio',        label: 'Discipline 7',  title: 'Physiologie & Physiopathologie', tagline: "Grands systèmes, régulations et mécanismes des maladies.",                             accent: '#3f7d8c', status: 'planned' },
  { id: 'therapeutique', label: 'Discipline 8',  title: 'Thérapeutique & Sémiologie',     tagline: "Du signe clinique au traitement : stratégies et bon usage.",                          accent: '#6a5a8c', status: 'planned' },
  { id: 'biostat',       label: 'Discipline 9',  title: 'Méthodologie & Biostatistiques', tagline: "Lecture critique d'article, tests, épidémiologie et pièges statistiques.",            accent: '#8a7d3a', status: 'planned' },
  { id: 'analyse',       label: 'Discipline 10', title: 'Chimie analytique & Contrôle',   tagline: "Séparations, spectrométries, dosages et contrôle qualité.",                           accent: '#4d4d5c', status: 'planned' }
];

export function trackById(id) {
  return tracks.find((t) => t.id === id);
}

/**
 * Regroupe une liste de chapitres (ordonnée) par discipline.
 * @param {{track?:string}[]} chapters
 * @returns {Record<string, any[]>}
 */
export function chaptersByTrack(chapters) {
  /** @type {Record<string, any[]>} */
  const grouped = {};
  for (const t of tracks) grouped[t.id] = [];
  for (const c of chapters) {
    const id = grouped[c.track] ? c.track : tracks[0].id;
    grouped[id].push(c);
  }
  return grouped;
}
