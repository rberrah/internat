// @ts-nocheck
// LEXIQUE CLINIQUE — mots-clés ⇄ pathologies (bidirectionnel).
// Chaque pathologie liste ses mots-clés (`cles`). L'index inverse (mot → pathologies)
// et le module de tri différentiel (sélection de mots → possibilités qui se réduisent)
// sont DÉRIVÉS automatiquement : pas de double saisie, pas de désynchronisation.
//
// Extensible : ajoutez une pathologie avec ses `cles`, tout le reste suit.
// `chapter` (optionnel) = slug d'un chapitre du site pour naviguer vers le cours.

/** @typedef {{id:string, nom:string, discipline:string, cles:string[], orientation:string, chapter?:string}} Pathologie */

/** @type {Pathologie[]} */
export const pathologies = [
  // ─── Infectiologie / parasitologie ───
  { id: 'paludisme', nom: 'Paludisme', discipline: 'Parasitologie', chapter: 'parasito-paludisme',
    cles: ['fièvre', 'frissons', 'retour de voyage', 'afrique subsaharienne', 'thrombopénie', 'anémie', 'splénomégalie', 'ictère'],
    orientation: "Toute fièvre au retour d'une zone d'endémie = paludisme jusqu'à preuve du contraire : frottis + goutte épaisse en URGENCE (< 2 h)." },
  { id: 'meningite-bacterienne', nom: 'Méningite bactérienne (méningocoque)', discipline: 'Infectiologie', chapter: 'iv-1-infections-snc',
    cles: ['fièvre', 'raideur de nuque', 'céphalées', 'purpura', 'photophobie', 'troubles de conscience'],
    orientation: "Fièvre + syndrome méningé + purpura = urgence absolue (purpura fulminans) : antibiothérapie immédiate avant la PL si purpura." },
  { id: 'pneumonie', nom: 'Pneumonie aiguë (pneumocoque)', discipline: 'Infectiologie', chapter: 'iv-5-infections-orl-respiratoires',
    cles: ['fièvre', 'toux', 'douleur thoracique', 'dyspnée', 'foyer de crépitants', 'expectoration'],
    orientation: "Fièvre élevée brutale + foyer de condensation + douleur thoracique = pneumonie franche lobaire aiguë (pneumocoque)." },
  { id: 'pyelonephrite', nom: 'Pyélonéphrite aiguë', discipline: 'Infectiologie', chapter: 'iv-3-infections-urinaires',
    cles: ['fièvre', 'brûlures mictionnelles', 'pollakiurie', 'douleur lombaire', 'bandelette urinaire positive'],
    orientation: "Fièvre + signes urinaires + douleur lombaire = pyélonéphrite (E. coli le plus souvent) : ECBU + antibiothérapie." },
  { id: 'endocardite', nom: 'Endocardite infectieuse', discipline: 'Infectiologie', chapter: 'iv-2-bacteriemies-endocardites',
    cles: ['fièvre', 'souffle cardiaque', 'hémocultures positives', 'amaigrissement', 'porte d\'entrée dentaire'],
    orientation: "Fièvre prolongée + souffle + hémocultures positives = endocardite : écho cœur + hémocultures répétées (critères de Duke)." },
  { id: 'tuberculose', nom: 'Tuberculose', discipline: 'Infectiologie',
    cles: ['fièvre', 'sueurs nocturnes', 'amaigrissement', 'toux', 'toux chronique', 'hémoptysie', 'terrain immunodéprimé'],
    orientation: "Toux > 3 semaines + AEG + sueurs nocturnes = tuberculose : recherche de BAAR (crachats), radiographie thoracique." },
  { id: 'mni', nom: 'Mononucléose infectieuse (EBV)', discipline: 'Infectiologie', chapter: 'iv-29-hyperlymphocytoses',
    cles: ['fièvre', 'angine', 'adénopathies', 'splénomégalie', 'asthénie', 'sujet jeune'],
    orientation: "Sujet jeune : angine + adénopathies + splénomégalie + asthénie prolongée = MNI (EBV) ; syndrome mononucléosique, MNI-test." },
  { id: 'leptospirose', nom: 'Leptospirose', discipline: 'Infectiologie',
    cles: ['fièvre', 'ictère', 'myalgies', 'insuffisance rénale', 'contact eau douce', 'thrombopénie'],
    orientation: "Fièvre + ictère + myalgies + IRA après contact avec de l'eau douce/rongeurs = leptospirose." },
  { id: 'grippe', nom: 'Grippe saisonnière', discipline: 'Virologie',
    cles: ['fièvre', 'myalgies', 'céphalées', 'toux', 'asthénie', 'contage'],
    orientation: "Début brutal en période épidémique : fièvre + myalgies + céphalées + signes respiratoires = grippe." },

  // ─── Hématologie ───
  { id: 'anemie-ferriprive', nom: 'Anémie ferriprive', discipline: 'Hématologie', chapter: 'hemato-anemies',
    cles: ['pâleur', 'asthénie', 'anémie', 'microcytose', 'ferritine basse', 'saignement chronique'],
    orientation: "Anémie microcytaire hypochrome + ferritine effondrée = carence martiale : chercher un saignement (digestif, gynéco)." },
  { id: 'anemie-b12', nom: 'Anémie par carence en B12 (Biermer)', discipline: 'Hématologie', chapter: 'hemato-anemies',
    cles: ['pâleur', 'asthénie', 'anémie', 'macrocytose', 'signes neurologiques', 'glossite'],
    orientation: "Anémie macrocytaire arégénérative + signes neurologiques = carence en B12 (maladie de Biermer si gastrite auto-immune)." },
  { id: 'leucemie-aigue', nom: 'Leucémie aiguë', discipline: 'Hématologie', chapter: 'iv-28-leucemies-aigues-smd',
    cles: ['fièvre', 'purpura', 'thrombopénie', 'anémie', 'adénopathies', 'asthénie', 'blastes'],
    orientation: "Pancytopénie (anémie + thrombopénie + neutropénie) + blastes circulants = leucémie aiguë : myélogramme en urgence." },
  { id: 'ptt', nom: 'Purpura thrombotique thrombocytopénique (PTT)', discipline: 'Hématologie', chapter: 'iv-31-thrombopenies',
    cles: ['fièvre', 'thrombopénie', 'anémie', 'schizocytes', 'troubles de conscience', 'insuffisance rénale'],
    orientation: "Anémie hémolytique + thrombopénie + schizocytes (MAT) = urgence : PTT/SHU, doser ADAMTS13." },

  // ─── Endocrinologie / métabolisme ───
  { id: 'diabete', nom: 'Diabète sucré', discipline: 'Endocrinologie', chapter: 'iv-39-diabetes',
    cles: ['polyurie', 'polydipsie', 'amaigrissement', 'hyperglycémie', 'asthénie'],
    orientation: "Syndrome polyuro-polydipsique + amaigrissement + hyperglycémie = diabète (glycémie à jeun, HbA1c)." },
  { id: 'acidocetose', nom: 'Acidocétose diabétique', discipline: 'Endocrinologie', chapter: 'iv-39-diabetes',
    cles: ['polyurie', 'polydipsie', 'douleur abdominale', 'dyspnée', 'hyperglycémie', 'troubles de conscience'],
    orientation: "Hyperglycémie + cétose + acidose (dyspnée de Kussmaul) = acidocétose : urgence métabolique." },
  { id: 'hyperthyroidie', nom: 'Hyperthyroïdie', discipline: 'Endocrinologie', chapter: 'iv-51-dysthyroidie',
    cles: ['amaigrissement', 'tachycardie', 'tremblements', 'thermophobie', 'diarrhée', 'asthénie'],
    orientation: "Amaigrissement + tachycardie + tremblements + thermophobie = thyrotoxicose : TSH effondrée." },

  // ─── Cardio / uro / digestif (transversal clinique) ───
  { id: 'sca', nom: 'Syndrome coronarien aigu', discipline: 'Cardiologie', chapter: 'iv-47-sca-insuffisance-cardiaque',
    cles: ['douleur thoracique', 'douleur à l\'effort', 'irradiation bras gauche', 'dyspnée', 'sueurs', 'terrain vasculaire'],
    orientation: "Douleur thoracique constrictive + irradiation + terrain à risque = SCA : ECG + troponine en urgence." },
  { id: 'cancer-bronchique', nom: 'Cancer bronchique', discipline: 'Oncologie',
    cles: ['hémoptysie', 'toux chronique', 'amaigrissement', 'tabac', 'dyspnée', 'douleur thoracique'],
    orientation: "Tabagisme + toux/hémoptysie + AEG = cancer bronchique jusqu'à preuve du contraire : imagerie thoracique." },
  { id: 'cholestase', nom: 'Ictère cholestatique', discipline: 'Hépato-gastro', chapter: 'iv-44-cholestase-cytolyse',
    cles: ['ictère', 'urines foncées', 'selles décolorées', 'prurit', 'douleur abdominale'],
    orientation: "Ictère + urines foncées + selles décolorées + prurit = cholestase : échographie des voies biliaires." }
];

// ── index dérivés ────────────────────────────────────────────────────────────
/** union de tous les mots-clés utilisés, triée */
export const allKeywords = [...new Set(pathologies.flatMap((p) => p.cles))].sort((a, b) => a.localeCompare(b, 'fr'));

/** index inverse : mot-clé → liste de pathologies (le « deuxième sens ») */
export const keywordToPathologies = (() => {
  /** @type {Record<string, Pathologie[]>} */
  const idx = {};
  for (const mot of allKeywords) idx[mot] = pathologies.filter((p) => p.cles.includes(mot));
  return idx;
})();

export const pathologyById = Object.fromEntries(pathologies.map((p) => [p.id, p]));

// Catégorie d'affichage d'un mot-clé (pour grouper les puces sélectionnables).
const CAT = {
  terrain: ['retour de voyage', 'afrique subsaharienne', 'sujet jeune', 'tabac', 'contage', 'contact eau douce', 'terrain immunodéprimé', 'terrain vasculaire', 'porte d\'entrée dentaire', 'saignement chronique', "douleur à l'effort"],
  bio: ['thrombopénie', 'anémie', 'microcytose', 'macrocytose', 'ferritine basse', 'hyperglycémie', 'hémocultures positives', 'bandelette urinaire positive', 'schizocytes', 'blastes', 'foyer de crépitants']
};
/** @param {string} mot */
export function keywordCat(mot) {
  if (CAT.terrain.includes(mot)) return 'Terrain / contexte';
  if (CAT.bio.includes(mot)) return 'Biologie / paraclinique';
  return 'Signe / symptôme';
}
