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
  },
  {
    cat: 'Chimie analytique', chapter: 'i-8-pression-osmotique', type: 'num', unit: 'mOsm/L', answer: 308, tol: 0.03,
    q: "Une solution de NaCl à [[9 g/L]] (masse molaire 58,5 g/mol). Calculez son osmolarité (NaCl se dissocie en 2 ions).",
    indices: [
      { mot: '9 g/L', pourquoi: "Concentration molaire c = masse / M, puis osmolarité = c × nombre de particules dissociées." }
    ],
    explain: "c = 9 / 58,5 = 0,154 mol/L. NaCl → Na⁺ + Cl⁻ (2 particules) : osmolarité = 0,154 × 2 = 0,308 osmol/L ≈ 308 mOsm/L."
  },
  {
    cat: 'Chimie analytique', chapter: 'i-3-spectrophotometrie-uv-visible', type: 'num', unit: 'µmol/L', answer: 100, tol: 0.02,
    q: "Spectrophotométrie : absorbance A = 0,60, coefficient ε = 6000 L·mol⁻¹·cm⁻¹, trajet [[l = 1 cm]]. Calculez la concentration.",
    indices: [
      { mot: 'l = 1 cm', pourquoi: "Loi de Beer-Lambert : A = ε·l·c, donc c = A / (ε·l)." }
    ],
    explain: "c = A / (ε·l) = 0,60 / (6000 × 1) = 1,0×10⁻⁴ mol/L = 100 µmol/L."
  },
  {
    cat: 'Statistiques', chapter: 'i-16-statistique-descriptive-estimation', type: 'num', unit: '', answer: 1.96, tol: 0.03,
    q: "Moyenne 50, écart-type 10, [[n = 100]]. Quelle est la demi-largeur de l'intervalle de confiance à 95 % de la moyenne (z = 1,96) ?",
    indices: [
      { mot: 'n = 100', pourquoi: "IC95 % de la moyenne : ± 1,96 × σ / √n (l'incertitude diminue avec √n)." }
    ],
    explain: "Demi-largeur = 1,96 × σ/√n = 1,96 × 10/√100 = 1,96 × 1 = 1,96."
  },
  {
    cat: 'Néphrologie', chapter: 'iv-42-troubles-acidobasiques', type: 'num', unit: 'mmol/L', answer: 28, tol: 0.02,
    q: "Ionogramme : Na⁺ = 140, Cl⁻ = 100, [[HCO₃⁻ = 12]] mmol/L. Calculez le trou anionique.",
    indices: [
      { mot: 'HCO₃⁻ = 12', pourquoi: "Trou anionique = Na⁺ − (Cl⁻ + HCO₃⁻) ; augmenté, il oriente vers une acidose métabolique." }
    ],
    explain: "TA = Na⁺ − (Cl⁻ + HCO₃⁻) = 140 − (100 + 12) = 28 mmol/L (augmenté → acidose métabolique à trou anionique élevé)."
  },
  {
    cat: 'Néphrologie', chapter: 'iv-46-insuffisance-renale', type: 'num', unit: 'mL/min', answer: 76.5, tol: 0.05,
    q: "Homme de 60 ans, [[70 kg]], créatininémie 90 µmol/L. Estimez la clairance de la créatinine (Cockcroft, k = 1,23 chez l'homme).",
    indices: [
      { mot: '70 kg', pourquoi: "Formule de Cockcroft : (140 − âge) × poids × k / créatininémie (µmol/L)." }
    ],
    explain: "ClCr = (140 − 60) × 70 × 1,23 / 90 = 80 × 70 × 1,23 / 90 ≈ 76,5 mL/min."
  },
  {
    cat: 'Chimie analytique', chapter: 'i-12-acide-base-ph-tampons', type: 'num', unit: '', answer: 5.8, tol: 0.02,
    q: "Un tampon d'acide faible de pKa = 4,8, dans lequel [[le rapport base/acide vaut 10]]. Calculez le pH (Henderson-Hasselbalch).",
    indices: [
      { mot: 'le rapport base/acide vaut 10', pourquoi: "Henderson-Hasselbalch : pH = pKa + log([base]/[acide])." }
    ],
    explain: "pH = pKa + log([base]/[acide]) = 4,8 + log(10) = 4,8 + 1 = 5,8."
  },
  {
    cat: 'Biophysique', chapter: 'i-11-rayons-x-radio-isotopes', type: 'num', unit: 'MBq', answer: 12.5, tol: 0.02,
    q: "Un radio-isotope de période T = 6 h a une activité initiale de 100 MBq. Quelle est son activité après [[18 heures]] ?",
    indices: [
      { mot: '18 heures', pourquoi: "18 h = 3 périodes ; à chaque période l'activité est divisée par 2 : A = A₀ / 2ⁿ." }
    ],
    explain: "18 h = 3 × 6 h = 3 périodes. A = 100 / 2³ = 100 / 8 = 12,5 MBq."
  },
  {
    cat: 'Pharmacocinétique', chapter: 'pharmaco-pk-base', type: 'num', unit: 'mg/L', answer: 5, tol: 0.02,
    q: "Perfusion IV continue à débit [[R0 = 20 mg/h]], clairance CL = 4 L/h. Quelle est la concentration à l'équilibre Css ?",
    indices: [
      { mot: 'R0 = 20 mg/h', pourquoi: "À l'équilibre, entrée = sortie : Css = R0 / CL (indépendant du volume)." }
    ],
    explain: "Css = R0 / CL = 20 / 4 = 5 mg/L."
  },
  {
    cat: 'Épidémiologie', chapter: 'iii-5-methodologie-epidemiologique', type: 'num', unit: '', answer: 4, tol: 0.02,
    q: "Étude de cohorte : incidence de la maladie [[chez les exposés 20 %]], chez les non-exposés 5 %. Calculez le risque relatif (RR).",
    indices: [
      { mot: 'chez les exposés 20 %', pourquoi: "RR = incidence chez les exposés / incidence chez les non-exposés." }
    ],
    explain: "RR = 20 / 5 = 4 : les exposés ont 4 fois plus de risque (association forte)."
  },
  {
    cat: 'Épidémiologie', chapter: 'iii-5-methodologie-epidemiologique', type: 'num', unit: '', answer: 6, tol: 0.02,
    q: "Étude cas-témoins, tableau 2×2 : exposés malades a = 40, exposés sains b = 10, non-exposés malades c = 20, [[non-exposés sains d = 30]]. Calculez l'odds ratio (OR).",
    indices: [
      { mot: 'non-exposés sains d = 30', pourquoi: "OR = (a × d) / (b × c) dans une enquête cas-témoins." }
    ],
    explain: "OR = (a × d) / (b × c) = (40 × 30) / (10 × 20) = 1200 / 200 = 6."
  },
  {
    cat: 'Pharmacocinétique', chapter: 'v-3-biodisponibilite', type: 'num', unit: 'mg·h/L', answer: 10, tol: 0.02,
    q: "Dose orale = 500 mg, biodisponibilité [[F = 0,5]], clairance CL = 25 L/h. Calculez l'AUC.",
    indices: [
      { mot: 'F = 0,5', pourquoi: "AUC = F × Dose / CL (la fraction F seule atteint la circulation générale)." }
    ],
    explain: "AUC = F × Dose / CL = 0,5 × 500 / 25 = 250 / 25 = 10 mg·h/L."
  }
];

/** @param {string} slug */
export function exercisesForChapter(slug) {
  return exercises.filter((e) => e.chapter === slug);
}

/** Catégories ordonnées (pour la page /entrainement). */
export const exerciseCats = [...new Set(exercises.map((e) => e.cat))];
