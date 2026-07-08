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
    orientation: "Ictère + urines foncées + selles décolorées + prurit = cholestase : échographie des voies biliaires." },

  // ─── Infections (suite) ───
  { id: 'angine', nom: 'Angine à streptocoque A', discipline: 'Infectiologie', chapter: 'iv-5-infections-orl-respiratoires',
    cles: ['fièvre', 'angine', 'adénopathies', 'absence de toux', 'sujet jeune'],
    orientation: "Angine érythémateuse fébrile sans toux (score de Mac Isaac) : TDR streptocoque ; amoxicilline si positif." },
  { id: 'gastro-enterite', nom: 'Gastro-entérite / TIAC', discipline: 'Infectiologie', chapter: 'iv-4-infections-digestives',
    cles: ['diarrhée', 'vomissements', 'fièvre', 'douleur abdominale', 'contage'],
    orientation: "Diarrhée aiguë + contexte alimentaire/collectif : le plus souvent virale/toxinique ; réhydratation, coproculture si signes de gravité." },
  { id: 'colite-cdiff', nom: 'Colite à Clostridioides difficile', discipline: 'Infectiologie', chapter: 'iv-4-infections-digestives',
    cles: ['diarrhée', 'fièvre', 'antibiotique récent', 'douleur abdominale'],
    orientation: "Diarrhée après antibiothérapie récente : rechercher les toxines de C. difficile ; vancomycine PO ou fidaxomicine." },
  { id: 'cystite', nom: 'Cystite aiguë simple', discipline: 'Infectiologie', chapter: 'iv-3-infections-urinaires',
    cles: ['brûlures mictionnelles', 'pollakiurie', 'apyrexie', 'bandelette urinaire positive'],
    orientation: "Signes urinaires bas SANS fièvre ni douleur lombaire = cystite : BU ; traitement court (fosfomycine)." },
  { id: 'syphilis', nom: 'Syphilis', discipline: 'Infectiologie', chapter: 'iv-6-ist',
    cles: ['chancre', 'adénopathies', 'éruption', 'comportement à risque'],
    orientation: "Chancre induré indolore puis éruption : sérologies (TPHA/VDRL) ; pénicilline G ; dépister/traiter le partenaire." },
  { id: 'primo-vih', nom: 'Primo-infection VIH', discipline: 'Infectiologie', chapter: 'iv-9-immunodeprime',
    cles: ['fièvre', 'adénopathies', 'éruption', 'angine', 'comportement à risque'],
    orientation: "Syndrome pseudo-grippal + adénopathies + éruption après exposition : sérologie VIH + charge virale (antigénémie p24 précoce)." },
  { id: 'hepatite-aigue', nom: 'Hépatite virale aiguë', discipline: 'Virologie', chapter: 'iv-8-hepatites-virales',
    cles: ['ictère', 'asthénie', 'cytolyse', 'nausées', 'contage'],
    orientation: "Ictère + cytolyse (ALAT très élevées) : sérologies virales (A, B, C) ; surveiller le TP (gravité)." },
  { id: 'toxoplasmose', nom: 'Toxoplasmose', discipline: 'Parasitologie', chapter: 'iv-15-toxoplasmose',
    cles: ['fièvre', 'adénopathies', 'asthénie', 'terrain immunodéprimé'],
    orientation: "Immunocompétent : adénopathies fébriles bénignes. Immunodéprimé/grossesse : formes graves (cérébrale, congénitale)." },
  { id: 'amibiase', nom: 'Amibiase intestinale', discipline: 'Parasitologie', chapter: 'iv-12-protozooses-intestinales',
    cles: ['diarrhée', 'retour de voyage', 'douleur abdominale', 'selles glairo-sanglantes'],
    orientation: "Diarrhée glairo-sanglante au retour des tropiques : examen parasitologique des selles ; métronidazole." },

  // ─── Hématologie / immunologie (suite) ───
  { id: 'drepanocytose', nom: 'Drépanocytose (crise)', discipline: 'Hématologie', chapter: 'iv-26-hemoglobinopathies',
    cles: ['douleurs osseuses', 'anémie', 'hémolyse', 'origine africaine', 'fièvre'],
    orientation: "Terrain + anémie hémolytique + crises douloureuses : électrophorèse de l'Hb (HbS). Crise : hydratation, antalgiques, O2." },
  { id: 'lmc', nom: 'Leucémie myéloïde chronique', discipline: 'Hématologie', chapter: 'iv-24-leucemie-myeloide-chronique',
    cles: ['splénomégalie', 'hyperleucocytose', 'myélémie', 'asthénie'],
    orientation: "Splénomégalie + hyperleucocytose avec myélémie : transcrit BCR-ABL (Philadelphie) ; inhibiteurs de tyrosine kinase." },
  { id: 'myelome', nom: 'Myélome multiple', discipline: 'Hématologie', chapter: 'iv-27-myelome-dysglobulinemies',
    cles: ['douleurs osseuses', 'anémie', 'insuffisance rénale', 'hypercalcémie', 'pic monoclonal'],
    orientation: "CRAB (Calcémie, Rein, Anémie, os) + pic monoclonal : immunofixation, myélogramme, Bence-Jones." },
  { id: 'llc', nom: 'Leucémie lymphoïde chronique', discipline: 'Hématologie', chapter: 'iv-29-hyperlymphocytoses',
    cles: ['hyperlymphocytose', 'adénopathies', 'splénomégalie', 'sujet âgé'],
    orientation: "Hyperlymphocytose chronique du sujet âgé : immunophénotypage (score de Matutes) ; souvent surveillance." },
  { id: 'vaquez', nom: 'Polyglobulie de Vaquez', discipline: 'Hématologie', chapter: 'iv-23-polyglobulies',
    cles: ['érythrose', 'prurit aquagénique', 'thrombose', 'splénomégalie'],
    orientation: "Polyglobulie vraie + prurit à l'eau + thrombose : mutation JAK2 V617F ; risque thrombotique (saignées, aspirine)." },
  { id: 'civd', nom: 'Coagulation intravasculaire disséminée', discipline: 'Hématologie', chapter: 'iv-36-allongement-tq-tca',
    cles: ['saignements', 'thrombopénie', 'fièvre', 'troubles de conscience'],
    orientation: "Sepsis/choc + saignements diffus : TP/TCA allongés, fibrinogène bas, D-dimères élevés = CIVD ; traiter la cause." },
  { id: 'hemophilie', nom: 'Hémophilie', discipline: 'Hématologie', chapter: 'iv-25-hemophilies-willebrand',
    cles: ['hémarthroses', 'saignements', 'garçon', 'antécédents familiaux'],
    orientation: "Hémarthroses + hérédité liée à l'X + TCA allongé isolé : doser VIII (A) / IX (B) ; éviter IM et aspirine." },
  { id: 'lupus', nom: 'Lupus érythémateux systémique', discipline: 'Immunologie', chapter: 'iv-33-maladies-auto-immunes',
    cles: ['polyarthralgies', 'éruption', 'asthénie', 'anticorps antinucléaires', 'photosensibilité'],
    orientation: "Femme jeune : atteinte cutanéo-articulaire + AAN + atteinte rénale = lupus (anti-ADN natif spécifiques)." },

  // ─── Endocrinologie / métabolisme (suite) ───
  { id: 'hypothyroidie', nom: 'Hypothyroïdie', discipline: 'Endocrinologie', chapter: 'iv-51-dysthyroidie',
    cles: ['asthénie', 'prise de poids', 'frilosité', 'bradycardie', 'constipation'],
    orientation: "Asthénie + prise de poids + frilosité + bradycardie : TSH élevée (primaire) ; lévothyroxine." },
  { id: 'insuffisance-surrenale', nom: 'Insuffisance surrénale', discipline: 'Endocrinologie', chapter: 'iv-50-corticosurrenale',
    cles: ['hypotension', 'asthénie', 'hyponatrémie', 'hyperkaliémie', 'mélanodermie'],
    orientation: "Hypotension + hyponatrémie + hyperkaliémie (± mélanodermie) : insuffisance surrénale ; urgence = hydrocortisone IV + NaCl." },
  { id: 'cushing', nom: 'Syndrome de Cushing', discipline: 'Endocrinologie', chapter: 'iv-50-corticosurrenale',
    cles: ['obésité facio-tronculaire', 'vergetures pourpres', 'hypertension', 'hyperglycémie', 'ecchymoses'],
    orientation: "Obésité facio-tronculaire + vergetures + HTA + diabète : hypercortisolisme (freinage minute, cortisol libre urinaire)." },
  { id: 'goutte', nom: 'Goutte', discipline: 'Rhumatologie', chapter: 'iv-48-hyperuricemies',
    cles: ['monoarthrite', 'gros orteil', 'hyperuricémie', 'terrain vasculaire'],
    orientation: "Monoarthrite aiguë du gros orteil : microcristaux d'urate ; crise = colchicine/AINS, fond = allopurinol à distance." },

  // ─── Cardio / respiratoire / néphro / digestif (suite) ───
  { id: 'insuffisance-cardiaque', nom: 'Insuffisance cardiaque', discipline: 'Cardiologie', chapter: 'iv-47-sca-insuffisance-cardiaque',
    cles: ['dyspnée', "douleur à l'effort", 'œdèmes', 'orthopnée', 'terrain vasculaire'],
    orientation: "Dyspnée d'effort + œdèmes des membres inférieurs + crépitants : BNP élevé, échocardiographie." },
  { id: 'embolie-pulmonaire', nom: 'Embolie pulmonaire', discipline: 'Cardiologie', chapter: 'iv-47-sca-insuffisance-cardiaque',
    cles: ['dyspnée', 'douleur thoracique', 'tachycardie', 'immobilisation', 'facteur de risque de thrombose'],
    orientation: "Dyspnée + douleur thoracique brutale + facteur de risque de MTEV : score clinique + D-dimères / angioscanner." },
  { id: 'syndrome-nephrotique', nom: 'Syndrome néphrotique', discipline: 'Néphrologie', chapter: 'iv-46-insuffisance-renale',
    cles: ['œdèmes', 'protéinurie', 'hypoalbuminémie', 'prise de poids'],
    orientation: "Œdèmes + protéinurie > 3 g/24 h + hypoalbuminémie : chercher la néphropathie ; risque thrombotique/infectieux." },
  { id: 'insuffisance-renale-aigue', nom: 'Insuffisance rénale aiguë', discipline: 'Néphrologie', chapter: 'iv-46-insuffisance-renale',
    cles: ['oligurie', 'créatinine élevée', 'hyperkaliémie', 'œdèmes'],
    orientation: "Élévation rapide de la créatinine : distinguer pré-rénale (fonctionnelle), rénale et post-rénale (obstacle, échographie)." },
  { id: 'pancreatite', nom: 'Pancréatite aiguë', discipline: 'Hépato-gastro', chapter: 'iv-49-pancreatite-aigue',
    cles: ['douleur abdominale', 'vomissements', 'lipase élevée', 'alcool'],
    orientation: "Douleur épigastrique transfixiante + lipase > 3 N : alcool/lithiase ; gravité = CRP à 48 h, scanner (Balthazar)." },
  { id: 'cirrhose', nom: 'Cirrhose décompensée', discipline: 'Hépato-gastro', chapter: 'iv-44-cholestase-cytolyse',
    cles: ['ictère', 'ascite', 'angiomes stellaires', 'troubles de conscience', 'alcool'],
    orientation: "Ictère + ascite + signes d'IHC : cirrhose ; complications = hémorragie, encéphalopathie, infection du liquide d'ascite." },

  // ─── Toxicologie ───
  { id: 'intoxication-co', nom: 'Intoxication au monoxyde de carbone', discipline: 'Toxicologie', chapter: 'iii-14-poisons-hemoglobine',
    cles: ['céphalées', 'nausées', 'troubles de conscience', 'contexte hivernal', 'intoxication collective'],
    orientation: "Symptômes collectifs en hiver + SpO2 faussement normale : doser l'HbCO ; oxygène 100 %." }
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
  terrain: ['retour de voyage', 'afrique subsaharienne', 'sujet jeune', 'sujet âgé', 'tabac', 'alcool', 'contage', 'contact eau douce', 'terrain immunodéprimé', 'terrain vasculaire', 'porte d\'entrée dentaire', 'saignement chronique', "douleur à l'effort", 'origine africaine', 'garçon', 'antécédents familiaux', 'comportement à risque', 'antibiotique récent', 'immobilisation', 'facteur de risque de thrombose', 'contexte hivernal', 'intoxication collective'],
  bio: ['thrombopénie', 'anémie', 'microcytose', 'macrocytose', 'ferritine basse', 'hyperglycémie', 'hémocultures positives', 'bandelette urinaire positive', 'schizocytes', 'blastes', 'foyer de crépitants', 'cytolyse', 'lipase élevée', 'créatinine élevée', 'hyperuricémie', 'hypoalbuminémie', 'pic monoclonal', 'anticorps antinucléaires', 'hyperleucocytose', 'hyperlymphocytose', 'protéinurie', 'myélémie']
};
/** @param {string} mot */
export function keywordCat(mot) {
  if (CAT.terrain.includes(mot)) return 'Terrain / contexte';
  if (CAT.bio.includes(mot)) return 'Biologie / paraclinique';
  return 'Signe / symptôme';
}
