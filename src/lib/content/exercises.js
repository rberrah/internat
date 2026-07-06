// @ts-nocheck
// EXERCICES D'APPLICATION (épreuve 2 : exercices numériques ou non).
// Distincts des QCM (frontmatter `quiz` des chapitres) et des dossiers/cas cliniques.
// Dans `q`, les termes qui « indiquent la méthode » sont marqués [[...]] et détaillés
// dans `indices` ({mot, pourquoi}) — révélables à la demande.

/** @typedef {{cat:string, chapter:string, type:'num', q:string, unit?:string, answer:number, tol?:number, indices?:{mot:string,pourquoi:string}[], explain:string}} Exercise */

/** @type {Exercise[]} */
export const exercises = [
  {
    cat: 'Hématologie', chapter: 'hemato-hemogramme', type: 'num', unit: 'fL', answer: 90, tol: 0.02,
    q: "[[Hématocrite = 0,36]] (36 %) et [[hématies = 4,0 T/L]] (10¹²/L). Calculez le VGM.",
    indices: [
      { mot: 'Hématocrite = 0,36', pourquoi: "Le VGM se calcule à partir de l'hématocrite." },
      { mot: 'hématies = 4,0 T/L', pourquoi: "VGM = Ht / nombre d'hématies." }
    ],
    explain: "VGM = Ht / hématies = 0,36 / 4,0×10¹² L⁻¹ = 90×10⁻¹⁵ L = 90 fL (normocytaire)."
  },
  {
    cat: 'Hématologie', chapter: 'hemato-anemies', type: 'num', unit: '%', answer: 5, tol: 0.05,
    q: "Fer sérique = 5 µmol/L, [[transferrine = 4 g/L]]. Calculez le coefficient de saturation (CS).",
    indices: [
      { mot: 'transferrine = 4 g/L', pourquoi: "CTF = transferrine × 25 = 100 µmol/L, puis CS = fer / CTF × 100." }
    ],
    explain: "CTF = 4 × 25 = 100 µmol/L. CS = 5 / 100 × 100 = 5 % (effondré → carence martiale)."
  },
  {
    cat: 'Pharmacocinétique', chapter: 'pharmaco-pk-base', type: 'num', unit: 'h', answer: 3.47, tol: 0.03,
    q: "CL = 6 L/h et V = 30 L. Calculez la [[demi-vie]] d'élimination.",
    indices: [
      { mot: 'demi-vie', pourquoi: "t½ = ln2·V/CL = 0,693 × V / CL." }
    ],
    explain: "t½ = 0,693 × 30 / 6 ≈ 3,47 h."
  },
  {
    cat: 'Pharmacocinétique', chapter: 'pharmaco-pk-base', type: 'num', unit: 'mg/L', answer: 5, tol: 0.02,
    q: "Bolus IV de 100 mg, [[volume de distribution V = 20 L]]. Concentration initiale C₀ ?",
    indices: [
      { mot: 'volume de distribution V = 20 L', pourquoi: "Après un bolus IV, C₀ = Dose / V." }
    ],
    explain: "C₀ = Dose / V = 100 / 20 = 5 mg/L."
  }
];

/** @param {string} slug */
export function exercisesForChapter(slug) {
  return exercises.filter((e) => e.chapter === slug);
}

/** Catégories ordonnées (pour la page /entrainement). */
export const exerciseCats = [...new Set(exercises.map((e) => e.cat))];
