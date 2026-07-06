// @ts-nocheck
// Exercices interactifs (français). Chaque exercice porte un champ `chapter` (slug) :
// il s'affiche sur la page /exercices (groupé par `cat`) ET à la fin du chapitre.
// type "num" : réponse numérique (tolérance relative tol) ; type "mcq" : choix.

/** @typedef {{cat:string, chapter:string, type:'num'|'mcq', q:string, unit?:string, answer?:number, tol?:number, options?:string[], correct?:number, explain:string}} Exercise */

/** @type {Exercise[]} */
export const exercises = [
  // ─── Hématologie ───
  {
    cat: 'Hématologie', chapter: 'hemato-hemogramme', type: 'mcq', correct: 0,
    q: "Une anémie microcytaire (VGM = 68 fL) arégénérative oriente en premier lieu vers…",
    options: ['une carence martiale', 'une hémolyse aiguë', 'une carence en vitamine B12'],
    explain: "Microcytaire + arégénérative = d'abord carence en fer (puis thalassémie, inflammation). La B12 donne une macrocytose ; l'hémolyse est régénérative."
  },
  {
    cat: 'Hématologie', chapter: 'hemato-hemogramme', type: 'num', unit: 'fL', answer: 90, tol: 0.02,
    q: "Hématocrite = 0,36 (36 %) et hématies = 4,0 T/L (10¹²/L). Quel est le VGM ?",
    explain: "VGM = Ht / nombre d'hématies = 0,36 / 4,0×10¹² L⁻¹ = 90×10⁻¹⁵ L = 90 fL (normocytaire)."
  },
  {
    cat: 'Hématologie', chapter: 'hemato-hemogramme', type: 'mcq', correct: 1,
    q: "Le caractère régénératif d'une anémie se juge sur…",
    options: ['le VGM', 'le taux de réticulocytes', 'le taux de plaquettes'],
    explain: "Réticulocytes > ~150 G/L = régénérative (moelle qui répond : hémolyse, hémorragie). En dessous = arégénérative (origine centrale)."
  },

  // ─── Bactériologie ───
  {
    cat: 'Bactériologie & Virologie', chapter: 'bacterio-antibiogramme', type: 'mcq', correct: 0,
    q: "Pour une bêta-lactamine, l'indice PK/PD prédictif d'efficacité est…",
    options: ['%T > CMI (temps au-dessus de la CMI)', 'Cmax/CMI', 'la simple dose totale'],
    explain: "Les bêta-lactamines sont temps-dépendantes : l'efficacité dépend du temps passé au-dessus de la CMI (d'où l'intérêt des perfusions prolongées)."
  },
  {
    cat: 'Bactériologie & Virologie', chapter: 'bacterio-antibiogramme', type: 'mcq', correct: 2,
    q: "Une souche est catégorisée « R » sur l'antibiogramme lorsque…",
    options: ["la CMI est basse", "le diamètre d'inhibition est grand", "la CMI dépasse la concentration critique supérieure"],
    explain: "S/I/R résulte de la comparaison de la CMI (ou du diamètre) aux concentrations critiques (breakpoints EUCAST). CMI élevée → petit diamètre → catégorie R."
  },
  {
    cat: 'Bactériologie & Virologie', chapter: 'bacterio-antibiogramme', type: 'mcq', correct: 1,
    q: "Les aminosides sont surtout…",
    options: ['temps-dépendants', 'concentration-dépendants (Cmax/CMI)', 'sans relation PK/PD'],
    explain: "Aminosides : concentration-dépendants avec effet post-antibiotique → une dose unique journalière élevée maximise Cmax/CMI tout en limitant la toxicité."
  },

  // ─── Pharmacologie / PK ───
  {
    cat: 'Pharmacologie & PK', chapter: 'pharmaco-pk-base', type: 'num', unit: 'h', answer: 3.47, tol: 0.03,
    q: "Un médicament a CL = 6 L/h et V = 30 L. Quelle est sa demi-vie d'élimination ?",
    explain: "t½ = ln(2)·V/CL = 0,693 × 30 / 6 ≈ 3,47 h."
  },
  {
    cat: 'Pharmacologie & PK', chapter: 'pharmaco-pk-base', type: 'num', unit: 'mg/L', answer: 5, tol: 0.02,
    q: "Bolus IV de 100 mg, volume de distribution V = 20 L. Concentration initiale C₀ ?",
    explain: "C₀ = Dose / V = 100 / 20 = 5 mg/L."
  },
  {
    cat: 'Pharmacologie & PK', chapter: 'pharmaco-pk-base', type: 'mcq', correct: 0,
    q: "La biodisponibilité absolue F compare…",
    options: ["l'AUC par voie orale à l'AUC IV (même dose)", 'la Cmax à la CMI', 'le volume au poids'],
    explain: "F = (AUC_orale / AUC_IV) × (Dose_IV / Dose_orale). Elle quantifie la fraction de dose atteignant la circulation générale."
  }
];

/** @param {string} slug */
export function exercisesForChapter(slug) {
  return exercises.filter((e) => e.chapter === slug);
}

/** Catégories ordonnées (pour la page /exercices). */
export const exerciseCats = [...new Set(exercises.map((e) => e.cat))];
