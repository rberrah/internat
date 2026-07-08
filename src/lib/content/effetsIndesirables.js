// @ts-nocheck
// MÉDICAMENTS & EFFETS INDÉSIRABLES — expliqués PHYSIOLOGIQUEMENT (le « pourquoi »).
// Chaque classe : effets indésirables classiques, chacun avec son mécanisme.
// `chapter` (optionnel) = slug du cours de pharmacologie associé.

/** @typedef {{ei:string, mecanisme:string}} Effet */
/** @typedef {{id:string, classe:string, exemples:string, chapter?:string, effets:Effet[]}} Medicament */

/** @type {Medicament[]} */
export const medicaments = [
  {
    id: 'iec', classe: 'Inhibiteurs de l\'enzyme de conversion (IEC)', exemples: 'énalapril, ramipril, périndopril', chapter: 'v-14-antihypertenseurs',
    effets: [
      { ei: 'Toux sèche', mecanisme: "L'IEC bloque aussi la dégradation de la bradykinine, qui s'accumule et irrite les voies respiratoires." },
      { ei: 'Angio-œdème', mecanisme: "Accumulation de bradykinine (vasodilatatrice, augmente la perméabilité) — urgence, arrêt définitif." },
      { ei: 'Hyperkaliémie', mecanisme: "Moins d'angiotensine II → moins d'aldostérone → le rein retient le potassium." },
      { ei: 'Insuffisance rénale fonctionnelle', mecanisme: "L'angiotensine II maintient la filtration en contractant l'artériole efférente ; la bloquer fait chuter la pression de filtration (grave si sténose bilatérale des artères rénales)." },
      { ei: 'Tératogénicité', mecanisme: "Toxicité rénale fœtale : contre-indiqués pendant la grossesse." }
    ]
  },
  {
    id: 'ara2', classe: 'Antagonistes des récepteurs de l\'angiotensine II (ARA2/sartans)', exemples: 'losartan, valsartan, candésartan', chapter: 'v-14-antihypertenseurs',
    effets: [
      { ei: 'Pas de toux (contrairement aux IEC)', mecanisme: "Ils bloquent le récepteur AT1 sans toucher à la bradykinine — d'où l'absence de toux." },
      { ei: 'Hyperkaliémie', mecanisme: "Même voie : moins d'effet de l'angiotensine II → moins d'aldostérone." },
      { ei: 'Insuffisance rénale fonctionnelle', mecanisme: "Perte de la vasoconstriction de l'artériole efférente." },
      { ei: 'Tératogénicité', mecanisme: "Comme les IEC : contre-indiqués pendant la grossesse." }
    ]
  },
  {
    id: 'betabloquants', classe: 'Bêta-bloquants', exemples: 'aténolol, bisoprolol, propranolol', chapter: 'v-14-antihypertenseurs',
    effets: [
      { ei: 'Bronchospasme', mecanisme: "Blocage des récepteurs β2 bronchiques (bronchodilatateurs) → bronchoconstriction ; prudence/CI dans l'asthme." },
      { ei: 'Bradycardie, bloc auriculo-ventriculaire', mecanisme: "Blocage des récepteurs β1 cardiaques → ralentissement de la fréquence et de la conduction." },
      { ei: 'Masque l\'hypoglycémie', mecanisme: "Les signes d'alerte (tremblements, tachycardie) sont adrénergiques β : ils disparaissent sous bêta-bloquant." },
      { ei: 'Extrémités froides', mecanisme: "Perte de la vasodilatation β2 → vasoconstriction périphérique." },
      { ei: 'Effet rebond à l\'arrêt brutal', mecanisme: "Up-regulation des récepteurs β : leur re-stimulation brutale majore le risque coronarien." }
    ]
  },
  {
    id: 'thiazidiques', classe: 'Diurétiques thiazidiques', exemples: 'hydrochlorothiazide, indapamide', chapter: 'v-15-diuretiques',
    effets: [
      { ei: 'Hypokaliémie', mecanisme: "Plus de sodium arrive au tube distal → il est échangé contre du potassium, qui est éliminé." },
      { ei: 'Hyponatrémie', mecanisme: "Perte de sodium ; fréquente chez le sujet âgé." },
      { ei: 'Hyperuricémie (goutte)', mecanisme: "Compétition avec l'acide urique pour la sécrétion tubulaire → il est moins éliminé." },
      { ei: 'Hyperglycémie', mecanisme: "L'hypokaliémie réduit la sécrétion d'insuline." },
      { ei: 'Hypercalcémie', mecanisme: "Les thiazidiques diminuent la calciurie (à l'inverse des diurétiques de l'anse)." }
    ]
  },
  {
    id: 'anse', classe: 'Diurétiques de l\'anse', exemples: 'furosémide, bumétanide', chapter: 'v-15-diuretiques',
    effets: [
      { ei: 'Hypokaliémie', mecanisme: "Même mécanisme distal que les thiazidiques (échange Na/K accru)." },
      { ei: 'Hypocalcémie', mecanisme: "Ils augmentent la calciurie (bloquent la réabsorption du calcium dans l'anse)." },
      { ei: 'Ototoxicité', mecanisme: "À forte dose/perfusion rapide, atteinte de l'oreille interne (souvent réversible)." },
      { ei: 'Déshydratation, alcalose métabolique', mecanisme: "Diurèse puissante avec pertes de H+ et de chlore." }
    ]
  },
  {
    id: 'epargneurs-k', classe: 'Anti-aldostérone / épargneurs de potassium', exemples: 'spironolactone, éplérénone, amiloride', chapter: 'v-15-diuretiques',
    effets: [
      { ei: 'Hyperkaliémie', mecanisme: "Blocage de l'aldostérone → le rein retient le potassium (danger si associé aux IEC/ARA2)." },
      { ei: 'Gynécomastie (spironolactone)', mecanisme: "Effet anti-androgène de la spironolactone sur les récepteurs stéroïdiens." }
    ]
  },
  {
    id: 'ains', classe: 'Anti-inflammatoires non stéroïdiens (AINS)', exemples: 'ibuprofène, kétoprofène, diclofénac', chapter: 'v-20-anti-inflammatoires',
    effets: [
      { ei: 'Ulcère gastroduodénal', mecanisme: "Blocage de COX-1 → moins de prostaglandines qui protègent la muqueuse gastrique (mucus, bicarbonates)." },
      { ei: 'Insuffisance rénale aiguë', mecanisme: "Les prostaglandines dilatent l'artériole afférente ; les bloquer fait chuter la filtration (surtout si déshydratation, IEC associés)." },
      { ei: 'Rétention hydrosodée, HTA, œdèmes', mecanisme: "Moins de prostaglandines rénales → rétention de sodium et d'eau." },
      { ei: 'Risque cardiovasculaire (thrombotique)', mecanisme: "Déséquilibre entre thromboxane (pro-agrégant) et prostacycline (anti-agrégant)." },
      { ei: 'Bronchospasme (asthme à l\'aspirine)', mecanisme: "Le blocage de COX dévie l'acide arachidonique vers les leucotriènes bronchoconstricteurs." }
    ]
  },
  {
    id: 'corticoides', classe: 'Corticoïdes (systémiques)', exemples: 'prednisone, prednisolone, dexaméthasone', chapter: 'v-20-anti-inflammatoires',
    effets: [
      { ei: 'Diabète cortico-induit', mecanisme: "Stimulation de la néoglucogenèse hépatique et insulinorésistance → hyperglycémie." },
      { ei: 'Ostéoporose', mecanisme: "Inhibition des ostéoblastes et diminution de l'absorption du calcium → perte osseuse." },
      { ei: 'HTA, œdèmes, hypokaliémie', mecanisme: "Effet minéralocorticoïde résiduel : rétention de sodium/eau, fuite de potassium." },
      { ei: 'Infections', mecanisme: "Immunosuppression (baisse de l'immunité cellulaire) : réactivation d'infections latentes." },
      { ei: 'Syndrome cushingoïde, amyotrophie', mecanisme: "Excès de cortisol : obésité facio-tronculaire, catabolisme musculaire." },
      { ei: 'Insuffisance surrénale à l\'arrêt brutal', mecanisme: "Le cortisol exogène freine l'axe corticotrope ; l'arrêt brutal démasque une insuffisance surrénale (décroissance progressive obligatoire)." }
    ]
  },
  {
    id: 'opioides', classe: 'Opioïdes', exemples: 'morphine, oxycodone, fentanyl', chapter: 'v-8-antalgiques',
    effets: [
      { ei: 'Dépression respiratoire', mecanisme: "Agonisme des récepteurs µ du tronc cérébral → baisse de la sensibilité au CO2 (antidote : naloxone)." },
      { ei: 'Constipation', mecanisme: "Récepteurs µ du tube digestif : ralentissement du transit (pas de tolérance : constipation persistante)." },
      { ei: 'Myosis', mecanisme: "Stimulation du noyau parasympathique de l'oculomoteur." },
      { ei: 'Nausées, vomissements', mecanisme: "Stimulation de la zone gâchette chémoréceptrice." },
      { ei: 'Dépendance et tolérance', mecanisme: "Adaptation des récepteurs à l'exposition répétée." }
    ]
  },
  {
    id: 'paracetamol', classe: 'Paracétamol', exemples: 'paracétamol', chapter: 'v-47-toxicologie-antalgiques',
    effets: [
      { ei: 'Hépatotoxicité (en surdosage)', mecanisme: "En excès, la voie normale sature et un métabolite toxique (NAPQI) s'accumule ; il épuise le glutathion et détruit les hépatocytes (antidote : N-acétylcystéine)." }
    ]
  },
  {
    id: 'statines', classe: 'Statines', exemples: 'atorvastatine, rosuvastatine, simvastatine', chapter: 'v-41-normolipemiants',
    effets: [
      { ei: 'Myalgies, rhabdomyolyse', mecanisme: "Atteinte du muscle strié (baisse de la synthèse de coenzyme Q10) ; risque majoré par les inhibiteurs du CYP3A4." },
      { ei: 'Cytolyse hépatique', mecanisme: "Élévation des transaminases dose-dépendante (surveillance)." }
    ]
  },
  {
    id: 'metformine', classe: 'Metformine (biguanide)', exemples: 'metformine', chapter: 'v-22-antidiabetiques',
    effets: [
      { ei: 'Troubles digestifs', mecanisme: "Effet local intestinal (diarrhée, nausées) ; introduction progressive." },
      { ei: 'Acidose lactique', mecanisme: "Inhibition de la néoglucogenèse hépatique → accumulation de lactate ; rare mais grave si insuffisance rénale ou hypoxie (à arrêter avant une injection de produit de contraste)." },
      { ei: 'Carence en vitamine B12', mecanisme: "Diminution de l'absorption iléale de la B12." }
    ]
  },
  {
    id: 'sulfamides-hypo', classe: 'Sulfamides hypoglycémiants', exemples: 'glibenclamide, gliclazide', chapter: 'v-22-antidiabetiques',
    effets: [
      { ei: 'Hypoglycémie', mecanisme: "Stimulation de la sécrétion d'insuline indépendante du glucose → risque même à jeun (surtout sujet âgé, insuffisance rénale)." },
      { ei: 'Prise de poids', mecanisme: "Effet anabolisant de l'insuline sécrétée." }
    ]
  },
  {
    id: 'gliflozines', classe: 'Gliflozines (inhibiteurs de SGLT2)', exemples: 'dapagliflozine, empagliflozine', chapter: 'v-22-antidiabetiques',
    effets: [
      { ei: 'Infections génito-urinaires (mycoses)', mecanisme: "La glycosurie provoquée crée un milieu sucré favorable aux micro-organismes." },
      { ei: 'Acidocétose euglycémique', mecanisme: "Bascule vers la lipolyse et la cétogenèse malgré une glycémie peu élevée." },
      { ei: 'Déshydratation, hypotension', mecanisme: "Effet diurétique osmotique de la glycosurie." }
    ]
  },
  {
    id: 'aminosides', classe: 'Aminosides', exemples: 'gentamicine, amikacine, tobramycine', chapter: 'v-27-aminosides',
    effets: [
      { ei: 'Néphrotoxicité', mecanisme: "Accumulation dans les cellules du tube proximal (souvent réversible) ; surveillance de la fonction rénale." },
      { ei: 'Ototoxicité', mecanisme: "Accumulation dans l'endolymphe et atteinte des cellules ciliées cochléo-vestibulaires (souvent irréversible)." },
      { ei: 'Bloc neuromusculaire', mecanisme: "Diminution de la libération d'acétylcholine → contre-indiqués dans la myasthénie." }
    ]
  },
  {
    id: 'beta-lactames', classe: 'Bêta-lactamines', exemples: 'amoxicilline, céfotaxime, imipénème', chapter: 'v-24-beta-lactames',
    effets: [
      { ei: 'Allergie (jusqu\'au choc anaphylactique)', mecanisme: "Hypersensibilité IgE-dépendante ; allergie parfois croisée pénicillines/céphalosporines." },
      { ei: 'Éruption à l\'amoxicilline dans la MNI', mecanisme: "Éruption maculopapuleuse non allergique lors d'une mononucléose (EBV) — piège classique." },
      { ei: 'Diarrhée, colite à C. difficile', mecanisme: "Déséquilibre de la flore intestinale (dysbiose)." },
      { ei: 'Convulsions (fortes doses)', mecanisme: "Effet pro-convulsivant, surtout à forte dose et en insuffisance rénale (accumulation)." }
    ]
  },
  {
    id: 'glycopeptides', classe: 'Glycopeptides', exemples: 'vancomycine, teicoplanine', chapter: 'v-28-glycopeptides',
    effets: [
      { ei: 'Red man syndrome', mecanisme: "Libération d'histamine si la perfusion est trop rapide (érythème, prurit) — ralentir la perfusion." },
      { ei: 'Néphrotoxicité', mecanisme: "Toxicité tubulaire dose-dépendante (suivi des concentrations résiduelles)." },
      { ei: 'Ototoxicité', mecanisme: "Atteinte cochléaire à forte exposition." }
    ]
  },
  {
    id: 'quinolones', classe: 'Fluoroquinolones', exemples: 'ciprofloxacine, lévofloxacine, ofloxacine', chapter: 'v-29-quinolones',
    effets: [
      { ei: 'Tendinopathie, rupture du tendon d\'Achille', mecanisme: "Toxicité sur le collagène tendineux (risque majoré par les corticoïdes, l'âge)." },
      { ei: 'Photosensibilité', mecanisme: "La molécule photosensibilise la peau exposée au soleil." },
      { ei: 'Allongement du QT', mecanisme: "Blocage des canaux potassiques cardiaques → risque de torsades de pointes." },
      { ei: 'Anévrisme/dissection aortique', mecanisme: "Fragilisation du tissu conjonctif de la paroi aortique (mise en garde)." },
      { ei: 'Contre-indication enfant/grossesse', mecanisme: "Toxicité sur le cartilage de croissance." }
    ]
  },
  {
    id: 'cyclines', classe: 'Cyclines', exemples: 'doxycycline, minocycline', chapter: 'v-26-cyclines',
    effets: [
      { ei: 'Coloration/hypoplasie dentaire', mecanisme: "Chélation du calcium et dépôt dans l'os et les dents en formation → contre-indiquées chez l'enfant < 8 ans et la femme enceinte." },
      { ei: 'Photosensibilité', mecanisme: "Photosensibilisation cutanée." },
      { ei: 'Troubles digestifs, œsophagite', mecanisme: "Irritation locale (à prendre avec un grand verre d'eau, en position assise)." }
    ]
  },
  {
    id: 'macrolides', classe: 'Macrolides', exemples: 'azithromycine, clarithromycine, érythromycine', chapter: 'v-25-macrolides',
    effets: [
      { ei: 'Allongement du QT', mecanisme: "Blocage des canaux potassiques → risque de torsades de pointes." },
      { ei: 'Interactions médicamenteuses', mecanisme: "Inhibition du CYP3A4 → augmentation des concentrations d'autres médicaments (statines, immunosuppresseurs…)." },
      { ei: 'Troubles digestifs', mecanisme: "Agonisme des récepteurs de la motiline (surtout érythromycine) → accélération du transit." }
    ]
  },
  {
    id: 'antituberculeux', classe: 'Antituberculeux', exemples: 'isoniazide, rifampicine, éthambutol, pyrazinamide', chapter: 'v-30-antituberculeux',
    effets: [
      { ei: 'Isoniazide → neuropathie périphérique', mecanisme: "Interférence avec la vitamine B6 (pyridoxine) → supplémentation préventive." },
      { ei: 'Rifampicine → coloration orange, inducteur enzymatique', mecanisme: "Colore les sécrétions (urines, larmes) ; induit les CYP → baisse d'efficacité des contraceptifs, AVK, etc." },
      { ei: 'Éthambutol → névrite optique', mecanisme: "Atteinte du nerf optique (dyschromatopsie rouge-vert) → surveillance ophtalmologique." },
      { ei: 'Pyrazinamide → hyperuricémie', mecanisme: "Diminution de l'élimination rénale de l'acide urique ; hépatotoxique aussi." }
    ]
  },
  {
    id: 'antipsychotiques', classe: 'Antipsychotiques (neuroleptiques)', exemples: 'halopéridol, rispéridone, olanzapine, clozapine', chapter: 'v-9-antipsychotiques',
    effets: [
      { ei: 'Syndrome extrapyramidal', mecanisme: "Blocage des récepteurs D2 de la voie nigrostriée (motricité) → syndrome parkinsonien, dyskinésies." },
      { ei: 'Hyperprolactinémie', mecanisme: "Blocage D2 de la voie tubéro-infundibulaire : la dopamine freine normalement la prolactine." },
      { ei: 'Syndrome métabolique (atypiques)', mecanisme: "Prise de poids, diabète, dyslipidémie (surtout olanzapine, clozapine)." },
      { ei: 'Syndrome malin des neuroleptiques', mecanisme: "Réaction idiosyncrasique : hyperthermie, rigidité, CPK élevées — urgence." },
      { ei: 'Agranulocytose (clozapine)', mecanisme: "Toxicité médullaire imposant une surveillance de la NFS." }
    ]
  },
  {
    id: 'lithium', classe: 'Lithium (thymorégulateur)', exemples: 'carbonate de lithium', chapter: 'v-11-antidepresseurs-normothymiques',
    effets: [
      { ei: 'Marge thérapeutique étroite (surdosage)', mecanisme: "Tremblements, troubles digestifs puis neurologiques ; suivi de la lithémie indispensable." },
      { ei: 'Hypothyroïdie', mecanisme: "Inhibition de la synthèse et de la libération des hormones thyroïdiennes." },
      { ei: 'Diabète insipide néphrogénique', mecanisme: "Résistance du rein à l'ADH → polyurie." },
      { ei: 'Tératogénicité', mecanisme: "Risque de malformation cardiaque (anomalie d'Ebstein)." }
    ]
  },
  {
    id: 'anticoagulants', classe: 'Anticoagulants (héparines, AVK)', exemples: 'héparine, énoxaparine, warfarine, fluindione', chapter: 'v-16-hemostase',
    effets: [
      { ei: 'Hémorragie', mecanisme: "Effet pharmacologique excessif ; surveillance (TCA/anti-Xa pour l'héparine, INR pour les AVK)." },
      { ei: 'TIH (thrombopénie induite par l\'héparine)', mecanisme: "Anticorps anti-PF4 activant les plaquettes → thromboses paradoxales ; arrêt de l'héparine." },
      { ei: 'AVK : tératogénicité', mecanisme: "Embryopathie ; contre-indiqués pendant la grossesse (relais par héparine)." },
      { ei: 'AVK : nécrose cutanée', mecanisme: "À l'instauration, baisse initiale de la protéine C (anticoagulante) avant les facteurs procoagulants." }
    ]
  },
  {
    id: 'amiodarone', classe: 'Amiodarone (antiarythmique)', exemples: 'amiodarone', chapter: 'v-18-antiarythmiques',
    effets: [
      { ei: 'Dysthyroïdie (hypo ou hyper)', mecanisme: "Molécule très riche en iode, qui perturbe la fonction thyroïdienne." },
      { ei: 'Fibrose pulmonaire', mecanisme: "Toxicité pulmonaire (dépôts) ; toux, dyspnée à surveiller." },
      { ei: 'Dépôts cornéens, photosensibilité (peau ardoisée)', mecanisme: "Accumulation tissulaire (molécule lipophile à très longue demi-vie)." },
      { ei: 'Allongement du QT, bradycardie', mecanisme: "Effet de classe III (blocage des canaux potassiques)." }
    ]
  },
  {
    id: 'digoxine', classe: 'Digitaliques (digoxine)', exemples: 'digoxine', chapter: 'v-48-cardiotoxiques',
    effets: [
      { ei: 'Troubles du rythme et de la conduction', mecanisme: "Marge thérapeutique étroite ; l'hypokaliémie augmente la fixation de la digoxine et sa toxicité." },
      { ei: 'Troubles digestifs et visuels (dyschromatopsie)', mecanisme: "Signes précoces de surdosage (nausées, vision colorée en jaune-vert)." }
    ]
  },
  {
    id: 'methotrexate', classe: 'Méthotrexate', exemples: 'méthotrexate', chapter: 'v-42-anticancereux',
    effets: [
      { ei: 'Toxicité hématologique et muqueuse', mecanisme: "Antifolique : blocage de la synthèse de l'ADN dans les cellules à renouvellement rapide (moelle, muqueuses) ; sauvetage par acide folinique." },
      { ei: 'Hépatotoxicité, pneumopathie', mecanisme: "Toxicité d'organe cumulative (surveillance)." },
      { ei: 'Tératogénicité', mecanisme: "Contre-indiqué pendant la grossesse (antifolique)." }
    ]
  },
  {
    id: 'antithyroidiens', classe: 'Antithyroïdiens de synthèse', exemples: 'carbimazole, thiamazole, propylthiouracile', chapter: 'v-40-dysthyroidie',
    effets: [
      { ei: 'Agranulocytose', mecanisme: "Toxicité médullaire brutale → toute fièvre/angine impose une NFS en urgence et l'arrêt." },
      { ei: 'Hépatotoxicité', mecanisme: "Atteinte hépatique possible (surveillance)." }
    ]
  },
  {
    id: 'anticalcineurines', classe: 'Immunosuppresseurs (anticalcineurines)', exemples: 'ciclosporine, tacrolimus', chapter: 'v-38-immunosuppresseurs',
    effets: [
      { ei: 'Néphrotoxicité', mecanisme: "Vasoconstriction rénale → surveillance de la fonction rénale et des concentrations." },
      { ei: 'HTA, tremblements', mecanisme: "Effets neuro-vasculaires de classe." },
      { ei: 'Hypertrophie gingivale, hirsutisme (ciclosporine)', mecanisme: "Effets tissulaires propres à la ciclosporine." },
      { ei: 'Diabète (tacrolimus)', mecanisme: "Toxicité sur la cellule bêta pancréatique." }
    ]
  }
];

/** @param {string} slug */
export function medicamentsForChapter(slug) {
  return medicaments.filter((m) => m.chapter === slug);
}
