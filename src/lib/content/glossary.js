// @ts-nocheck
// Glossaire (français). Termes réutilisables dans les chapitres via le champ
// `glossary:` du frontmatter (liens vers /glossaire?q=terme).

/** @typedef {{term:string, def:string, tags?:string[]}} GlossaryEntry */

/** @type {GlossaryEntry[]} */
export const glossary = [
  { term: 'VGM', def: "Volume Globulaire Moyen : taille moyenne des hématies (fL). < 80 microcytaire, 80–100 normocytaire, > 100 macrocytaire.", tags: ['hemato'] },
  { term: 'Réticulocytes', def: "Hématies jeunes. Leur nombre (usuel 20–80 G/L) juge le caractère régénératif d'une anémie : seuil de régénération ≈ 120 G/L.", tags: ['hemato'] },
  { term: 'Ferritine', def: "Protéine de réserve du fer ; reflète les réserves. Effondrée = carence martiale. Mais c'est aussi une protéine de l'inflammation : elle peut être faussement normale/haute.", tags: ['hemato'] },
  { term: 'Coefficient de saturation', def: "CS = fer sérique / capacité totale de fixation de la transferrine × 100 (%). Bas dans la carence martiale ; aide à distinguer carence et inflammation.", tags: ['hemato'] },
  { term: 'CMI', def: "Concentration Minimale Inhibitrice : plus faible concentration d'antibiotique inhibant la croissance visible du germe.", tags: ['bacterio'] },
  { term: 'Antibiogramme', def: "Test de sensibilité d'une souche aux antibiotiques ; catégorise en S (sensible), I (sensible à forte exposition), R (résistant).", tags: ['bacterio'] },
  { term: '%T > CMI', def: "Fraction de l'intervalle de dose pendant laquelle la concentration reste au-dessus de la CMI. Indice clé des antibiotiques temps-dépendants.", tags: ['bacterio'] },
  { term: 'Clairance', def: "Volume de plasma totalement épuré du médicament par unité de temps (L/h). Paramètre d'élimination fondamental : AUC = Dose/CL.", tags: ['pharmaco'] },
  { term: 'Volume de distribution', def: "Volume théorique (V) reliant la quantité dans l'organisme à la concentration plasmatique : C = A/V.", tags: ['pharmaco'] },
  { term: 'Demi-vie', def: "Temps nécessaire pour que la concentration diminue de moitié : t½ = ln(2)·V/CL.", tags: ['pharmaco'] },
  { term: 'Biodisponibilité', def: "Fraction F de la dose administrée qui atteint la circulation générale (F = 1 en IV).", tags: ['pharmaco'] }
];
