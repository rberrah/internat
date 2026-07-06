// @ts-nocheck
// PROGRAMME OFFICIEL du concours de l'internat en pharmacie.
// Source : Arrêté du 12 avril 2012 (annexe), Légifrance JORFTEXT000025753008.
// Structure de référence du site : 5 sections, avec leurs items numérotés.
// Un chapitre se rattache à un item via son frontmatter `programItem` (ex. "IV-14").
//
// Épreuves : Épreuve 1 = 60 QCM (/120) ; Épreuve 2 = 5 exercices d'application (/40) ;
// Épreuve 3 = 5 dossiers thérapeutiques et biologiques (/60, sections II à V).

/** @typedef {{n:string, l:string}} Item */
/** @typedef {{titre?:string, items:Item[]}} Groupe */
/** @typedef {{id:string, roman:string, titre:string, tagline:string, accent:string, groupes:Groupe[]}} Section */

/** @type {Section[]} */
export const sections = [
  {
    id: 'I', roman: 'I', titre: 'Sciences mathématiques, physiques et chimiques', accent: '#4d4d5c',
    tagline: "Méthodes séparatives et spectrales, électrochimie, ions en solution, validation, statistiques.",
    groupes: [{ items: [
      { n: '1', l: 'Méthodes de séparation par extraction (solide-liquide, liquide-liquide)' },
      { n: '2', l: "Spectrophotométries d'émission et d'absorption atomiques" },
      { n: '3', l: "Spectrophotométrie d'absorption moléculaire UV-visible" },
      { n: '4', l: 'Spectrofluorimétrie moléculaire' },
      { n: '5', l: 'Méthodes chromatographiques (CPG, CL)' },
      { n: '6', l: 'Méthodes électrophorétiques' },
      { n: '7', l: 'Méthodes redox électrochimiques (potentiométrie, ampérométrie)' },
      { n: '8', l: 'Pression osmotique : osmolarité, osmolalité' },
      { n: '9', l: 'Analyse des composés chiraux' },
      { n: '10', l: 'Propriétés des fonctions organiques ; stéréo-isoméries' },
      { n: '11', l: 'Rayons X et rayonnements des radio-isotopes (in vivo, in vitro)' },
      { n: '12', l: 'Ions en solution : acide-base, pH, pK, tampons ; complexation' },
      { n: '13', l: 'Protométrie en milieu non aqueux' },
      { n: '14', l: "Critères de validité d'une méthode d'analyse" },
      { n: '15', l: 'Méthodes utilisant la réaction antigène-anticorps' },
      { n: '16', l: 'Statistique descriptive : estimation, intervalle de confiance' },
      { n: '17', l: 'Tests paramétriques de comparaison' },
      { n: '18', l: 'Tests de liaison : régression, corrélation, chi-deux' }
    ] }]
  },
  {
    id: 'II', roman: 'II', titre: 'Sciences de la vie', accent: '#b23b4a',
    tagline: "Génétique, métabolisme, physiologie des grands systèmes, hématologie, immunologie (hors pathologie).",
    groupes: [{ items: [
      { n: '1', l: 'Structure et dynamique du génome humain' },
      { n: '2', l: "Régulation de l'expression des gènes (eucaryotes)" },
      { n: '3', l: 'Transmission des maladies héréditaires monogéniques' },
      { n: '4', l: 'Identification des mutations délétères' },
      { n: '5', l: 'Mécanismes et conséquences des mutations délétères' },
      { n: '6', l: 'Caryotype et anomalies chromosomiques constitutionnelles' },
      { n: '7', l: "Mesure d'une activité enzymatique, applications" },
      { n: '8', l: 'Ammoniogenèse et uréogenèse' },
      { n: '9', l: 'Structure, biosynthèse et catabolisme des hémoglobines' },
      { n: '10', l: 'Acides nucléiques, lipoprotéines' },
      { n: '11', l: 'Régulation de la glycémie' },
      { n: '12', l: 'Métabolisme des AG, TG, cholestérol, lipoprotéines' },
      { n: '13', l: 'Cétogenèse' },
      { n: '14', l: 'Neurotransmetteurs' },
      { n: '15', l: 'Physiologie cardiovasculaire' },
      { n: '16', l: 'Physiologie de la respiration' },
      { n: '17', l: 'Physiologie digestive' },
      { n: '18', l: 'Physiologie rénale' },
      { n: '19', l: 'Physiologie des corticosurrénales' },
      { n: '20', l: 'Physiologie de la thyroïde' },
      { n: '21', l: 'Cycle menstruel et physiologie de la grossesse' },
      { n: '22', l: 'Physiologie de la douleur' },
      { n: '23', l: 'Physiologie osseuse, calcémie et phosphatémie' },
      { n: '24', l: 'Physiologie des lignées myéloïdes' },
      { n: '25', l: 'Groupes sanguins ABO, Rhésus, Kell' },
      { n: '26', l: 'Hémostase primaire, coagulation, fibrinolyse' },
      { n: '27', l: 'Structure et propriétés des immunoglobulines' },
      { n: '28', l: 'Immunité innée et inflammation' },
      { n: '29', l: "CMH et présentation de l'antigène" },
      { n: '30', l: 'Organes et cellules de la réponse immunitaire' },
      { n: '31', l: 'Réponses immunitaires humorales et cellulaires' }
    ] }]
  },
  {
    id: 'III', roman: 'III', titre: 'Santé publique et environnement', accent: '#2f7d54',
    tagline: "Vigilances, prévention, vaccination, épidémiologie, toxicologie environnementale.",
    groupes: [{ items: [
      { n: '1', l: 'Surveillance sanitaire et vigilances' },
      { n: '2', l: 'Prévention et promotion de la santé' },
      { n: '3', l: 'Politique vaccinale' },
      { n: '4', l: 'Conduites addictives : prévention et prise en charge' },
      { n: '5', l: 'Méthodologie épidémiologique (descriptive, étiologique, évaluative)' },
      { n: '6', l: 'Médicaments et DM : définitions, statuts, socio-économie hospitalière' },
      { n: '7', l: 'Établissements de santé, PUI' },
      { n: '8', l: 'Droits des patients' },
      { n: '9', l: 'Risque iatrogène, risque nosocomial' },
      { n: '10', l: 'Risques sanitaires liés aux eaux' },
      { n: '11', l: "Toxicologie de l'éthanol, méthanol, éthylène-glycol" },
      { n: '12', l: 'Toxicologie des hydrocarbures aromatiques, solvants chlorés, dioxines' },
      { n: '13', l: 'Toxicologie des produits phytosanitaires (organophosphorés, carbamates)' },
      { n: '14', l: "Poisons hémolytiques et de l'hémoglobine (CO, plomb, méthémoglobinisants)" },
      { n: '15', l: 'Toxicologie des radioéléments' },
      { n: '16', l: 'Toxicomanies (opiacés, LSD, cocaïne, amphétamines, cannabis)' }
    ] }]
  },
  {
    id: 'IV', roman: 'IV', titre: 'Séméiologie et pathologie — Biologie appliquée à la clinique', accent: '#1f7a6d',
    tagline: "Infections, parasitoses/mycoses, hématologie et immunologie cliniques, autres affections, génétique médicale.",
    groupes: [
      { titre: 'Infections bactériennes et virales', items: [
        { n: '1', l: 'Infections du système nerveux central' },
        { n: '2', l: 'Bactériémies et endocardites' },
        { n: '3', l: 'Infections urinaires' },
        { n: '4', l: 'Infections du tube digestif' },
        { n: '5', l: 'Infections ORL et bronchopulmonaires' },
        { n: '6', l: 'Infections sexuellement transmissibles' },
        { n: '7', l: 'Infections et grossesse' },
        { n: '8', l: 'Infections virales hépatiques' },
        { n: '9', l: "Infections de l'immunodéprimé" },
        { n: '10', l: 'Sensibilité et résistance aux agents anti-infectieux' },
        { n: '11', l: 'Mécanismes de résistance aux anti-infectieux' }
      ] },
      { titre: 'Parasitoses et mycoses', items: [
        { n: '12', l: 'Protozooses intestinales (amibiase, giardiose)' },
        { n: '13', l: 'Trichomonose urogénitale' },
        { n: '14', l: 'Paludisme' },
        { n: '15', l: 'Toxoplasmose' },
        { n: '16', l: 'Leishmaniose à Leishmania infantum' },
        { n: '17', l: 'Helminthoses intestinales et hépatiques' },
        { n: '18', l: 'Infections à levures (Candida, Cryptococcus)' },
        { n: '19', l: 'Infections à Aspergillus fumigatus' },
        { n: '20', l: 'Dermatophytes' },
        { n: '21', l: 'Pneumocystose à Pneumocystis jirovecii' }
      ] },
      { titre: 'Hématologie et immunologie', items: [
        { n: '22', l: 'Anémies carentielles. Anémies hémolytiques' },
        { n: '23', l: 'Polyglobulies' },
        { n: '24', l: 'Leucémie myéloïde chronique' },
        { n: '25', l: 'Hémophilies. Maladie de Willebrand' },
        { n: '26', l: 'Hémoglobinopathies : drépanocytose, thalassémies' },
        { n: '27', l: 'Myélome et dysglobulinémies monoclonales' },
        { n: '28', l: 'Leucémies aiguës et syndromes myélodysplasiques' },
        { n: '29', l: 'Hyperlymphocytoses (syndromes mononucléosiques, LLC, lymphomes)' },
        { n: '30', l: 'Cytopénies médicamenteuses' },
        { n: '31', l: 'Thrombopénies' },
        { n: '32', l: 'Asthme et allergies' },
        { n: '33', l: 'Maladies auto-immunes (polyarthrite rhumatoïde, lupus)' },
        { n: '34', l: 'Déficits immunitaires congénitaux' },
        { n: '35', l: 'Exploration des réactions inflammatoires' },
        { n: '36', l: "Allongement du TQ et/ou du TCA : diagnostic" },
        { n: '37', l: 'Surveillance des héparines et AVK' },
        { n: '38', l: 'Produits sanguins labiles, conduite prétransfusionnelle' }
      ] },
      { titre: 'Autres affections', items: [
        { n: '39', l: 'Diabètes de types 1 et 2' },
        { n: '40', l: 'Hyperlipoprotéinémies' },
        { n: '41', l: "Troubles de l'équilibre hydro-électrolytique" },
        { n: '42', l: "Troubles de l'équilibre acidobasique" },
        { n: '43', l: 'Troubles du métabolisme osseux' },
        { n: '44', l: 'Cholestase, cytolyse hépatique, insuffisance hépatocellulaire' },
        { n: '45', l: 'Troubles du métabolisme du fer' },
        { n: '46', l: 'Insuffisances rénales, syndrome néphrotique' },
        { n: '47', l: 'Accidents coronariens aigus, insuffisance cardiaque' },
        { n: '48', l: 'Hyperuricémies' },
        { n: '49', l: 'Pancréatite aiguë' },
        { n: '50', l: 'Dysfonctionnements corticosurrénaliens' },
        { n: '51', l: 'Dysfonctionnements thyroïdiens' },
        { n: '52', l: 'Dénutrition protéino-énergétique' },
        { n: '53', l: 'Affections neurologiques et neurodégénératives' }
      ] },
      { titre: 'Génétique', items: [
        { n: '54', l: "Examen des caractéristiques génétiques à des fins médicales" },
        { n: '55', l: 'Diagnostic prénatal des maladies génétiques' }
      ] }
    ]
  },
  {
    id: 'V', roman: 'V', titre: 'Sciences du médicament', accent: '#34568a',
    tagline: "Devenir du médicament, effet-dose, classes thérapeutiques, toxicité, galénique, biotechnologies.",
    groupes: [
      { titre: 'Devenir du médicament dans l\'organisme', items: [
        { n: '1', l: 'Étapes : résorption, distribution, biotransformation, excrétion' },
        { n: '2', l: 'Facteurs influençant le sort des principes actifs' },
        { n: '3', l: 'Biodisponibilité : définition, méthodes, variations' },
        { n: '4', l: 'Principaux paramètres pharmacocinétiques' },
        { n: '5', l: 'Cibles des médicaments, liaisons aux récepteurs' },
        { n: '6', l: 'Courbe effet-dose, DE50, marge thérapeutique' }
      ] },
      { titre: 'Classes thérapeutiques', items: [
        { n: '7', l: 'Médicaments des affections neurologiques et neurodégénératives' },
        { n: '8', l: 'Antalgiques' },
        { n: '9', l: 'Antipsychotiques' },
        { n: '10', l: 'Anxiolytiques et médicaments du sommeil' },
        { n: '11', l: 'Antidépresseurs, normothymiques' },
        { n: '12', l: "Médicaments de l'insuffisance cardiaque" },
        { n: '13', l: 'Anti-angoreux' },
        { n: '14', l: 'Antihypertenseurs' },
        { n: '15', l: 'Diurétiques' },
        { n: '16', l: "Médicaments de l'hémostase (anticoagulants, antiagrégants, thrombolytiques)" },
        { n: '17', l: 'Solutés de remplissage vasculaire' },
        { n: '18', l: 'Médicaments des troubles du rythme' },
        { n: '19', l: 'Antiasthmatiques et antiallergiques' },
        { n: '20', l: 'Anti-inflammatoires' },
        { n: '21', l: 'Médicaments de la goutte' },
        { n: '22', l: 'Antidiabétiques (oraux et insulines)' },
        { n: '23', l: 'Sulfamides antibactériens et associations' },
        { n: '24', l: 'Bêta-lactames' },
        { n: '25', l: 'Macrolides et apparentés' },
        { n: '26', l: 'Cyclines' },
        { n: '27', l: 'Aminosides' },
        { n: '28', l: 'Glycopeptides' },
        { n: '29', l: 'Quinolones' },
        { n: '30', l: 'Antituberculeux' },
        { n: '31', l: 'Antirétroviraux' },
        { n: '32', l: 'Antiviraux (hépatites, grippe, herpès)' },
        { n: '33', l: 'Antifongiques par voie générale' },
        { n: '34', l: 'Antiprotozoaires et anthelminthiques intestinaux' },
        { n: '35', l: 'Antimalariques' },
        { n: '36', l: "Médicaments de l'ulcère gastro-duodénal" },
        { n: '37', l: 'Antiémétiques' },
        { n: '38', l: 'Immunosuppresseurs' },
        { n: '39', l: 'Facteurs de croissance hématopoïétiques, cytokines' },
        { n: '40', l: 'Médicaments des dysfonctionnements thyroïdiens' },
        { n: '41', l: 'Normolipémiants' },
        { n: '42', l: 'Anticancéreux : classification et mécanismes' },
        { n: '43', l: "Médicaments de l'ostéoporose" }
      ] },
      { titre: 'Effets toxiques des médicaments', items: [
        { n: '44', l: "Méthodes d'évaluation de la toxicité" },
        { n: '45', l: 'Toxicologie systémique (héma, hépato, rénale, cardio, pulmonaire)' },
        { n: '46', l: 'Toxicologie des psychotropes' },
        { n: '47', l: 'Toxicologie des antalgiques (salicylés, paracétamol, morphiniques)' },
        { n: '48', l: 'Médicaments cardiotoxiques (digoxine, chloroquine)' },
        { n: '49', l: 'Traitement des intoxications, antidotes' }
      ] },
      { titre: 'Mise en forme et valorisation', items: [
        { n: '50', l: 'Stérilisation et conditionnement aseptique' },
        { n: '51', l: 'Formes à libération conventionnelle (orale, parentérale)' },
        { n: '52', l: 'Formes à libération/distribution modifiées' },
        { n: '53', l: 'Préparations de nutrition parentérale' },
        { n: '54', l: 'Formes nasale et pulmonaire' },
        { n: '55', l: 'Formes cutanée (transdermique) et oculaire' },
        { n: '56', l: 'Médicaments dérivés du plasma' },
        { n: '57', l: 'Vaccins (hépatite B, ROR, tétanos, grippe)' },
        { n: '58', l: 'Anticorps monoclonaux' },
        { n: '59', l: 'Cellules souches hématopoïétiques' }
      ] }
    ]
  }
];

/** index rapide : "IV-14" → item + section */
export const itemIndex = (() => {
  /** @type {Record<string, {section:Section, item:Item}>} */
  const idx = {};
  for (const s of sections) for (const g of s.groupes) for (const it of g.items) idx[`${s.id}-${it.n}`] = { section: s, item: it };
  return idx;
})();

export function sectionById(id) {
  return sections.find((s) => s.id === id);
}
