// @ts-nocheck
// Parcours du site = les 5 SECTIONS du programme officiel (voir programme.js)
// + un parcours « Transversal » (notions communes à plusieurs sections).
// Chaque chapitre porte `track: "section-IV"` (etc.) dans son frontmatter, et
// `programItem: "IV-14"` pour se rattacher à l'item officiel correspondant.
import { sections } from './programme.js';

export const tracks = [
  {
    id: 'transversal', label: 'Transversal', title: 'Notions transversales',
    tagline: "Les concepts qui reviennent partout : demi-vie (biophysique ↔ PK), Michaelis-Menten (enzymo ↔ PK), pH/pKa, ordres de réaction.",
    accent: '#3730a3', status: 'available'
  },
  ...sections.map((s) => ({
    id: `section-${s.id}`,
    label: `Section ${s.roman}`,
    title: s.titre,
    tagline: s.tagline,
    accent: s.accent,
    status: 'available'
  }))
];

export function trackById(id) {
  return tracks.find((t) => t.id === id);
}

/**
 * Regroupe une liste de chapitres (ordonnée) par parcours (champ `track`).
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
