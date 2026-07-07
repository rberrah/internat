// @ts-nocheck
// Dossiers / cas cliniques (épreuve 3 : dossiers thérapeutiques et biologiques).
// Dans `enonce`, les termes-clés sont marqués [[ainsi]] ; chaque terme marqué doit
// avoir une entrée correspondante dans `indices` ({mot, pourquoi}). `lexique: true`
// = affiché aussi comme sujet d'entraînement dans le Lexique clinique.

/** @typedef {{id:string, titre:string, discipline:string, chapter?:string, lexique?:boolean, enonce:string, indices:{mot:string,pourquoi:string}[], question:string, reponse:string, raisonnement:string}} Cas */

/** @type {Cas[]} */
export const casCliniques = [
  {
    id: 'cas-paludisme', titre: 'Fièvre au retour du Mali', discipline: 'Parasitologie', chapter: 'parasito-paludisme', lexique: true,
    enonce: "Un homme de 34 ans consulte pour une [[fièvre]] à 39,5 °C avec [[frissons]], apparue 8 jours après un [[retour du Mali]] (séjour de 3 semaines, sans chimioprophylaxie). La biologie montre une [[thrombopénie]] à 78 G/L et une [[anémie]] à 10 g/dL.",
    indices: [
      { mot: 'fièvre', pourquoi: "Toute fièvre au retour des tropiques impose d'éliminer un paludisme en urgence." },
      { mot: 'frissons', pourquoi: "Frissons/sueurs accompagnent classiquement les accès fébriles palustres." },
      { mot: 'retour du Mali', pourquoi: "Afrique subsaharienne = zone de forte endémie à P. falciparum ; l'absence de prophylaxie aggrave le risque." },
      { mot: 'thrombopénie', pourquoi: "Signe biologique très évocateur de paludisme." },
      { mot: 'anémie', pourquoi: "Anémie hémolytique fréquente au cours de l'accès palustre." }
    ],
    question: "Quel diagnostic évoquez-vous en priorité et quel examen demandez-vous en urgence ?",
    reponse: "Accès palustre (P. falciparum probable) — urgence.",
    raisonnement: "Fièvre + retour de zone d'endémie = paludisme jusqu'à preuve du contraire. Diagnostic en urgence (< 2 h) : frottis sanguin + goutte épaisse (± TDR). La thrombopénie et l'anémie renforcent. On recherche d'emblée des signes de gravité (neuropaludisme, parasitémie élevée)."
  },
  {
    id: 'cas-ferriprive', titre: 'Asthénie et pâleur chez une femme jeune', discipline: 'Hématologie', chapter: 'hemato-anemies', lexique: false,
    enonce: "Une femme de 28 ans présente une [[asthénie]] et une [[pâleur]] progressives. NFS : Hb 9 g/dL, [[VGM 68 fL]], CCMH abaissée. Elle signale des [[règles abondantes]]. La [[ferritine est effondrée]].",
    indices: [
      { mot: 'asthénie', pourquoi: "Signe fonctionnel d'anémie, d'installation progressive donc bien tolérée." },
      { mot: 'pâleur', pourquoi: "Pâleur cutanéo-muqueuse = signe clinique d'anémie." },
      { mot: 'VGM 68 fL', pourquoi: "Microcytose (< 80 fL) → explorer le fer en premier." },
      { mot: 'règles abondantes', pourquoi: "Cause de saignement chronique gynécologique = étiologie majeure de carence martiale chez la femme jeune." },
      { mot: 'ferritine est effondrée', pourquoi: "Ferritine basse = réserves en fer vides : carence martiale confirmée." }
    ],
    question: "Quel est le diagnostic et quel principe de traitement proposez-vous ?",
    reponse: "Anémie ferriprive (carence martiale) par saignement gynécologique.",
    raisonnement: "Anémie microcytaire hypochrome + ferritine effondrée = carence martiale. Étiologie ici : ménorragies. Traitement : sels ferreux per os 100–200 mg/j pendant 4–6 mois + prise en charge de la cause (gynécologique)."
  },
  {
    id: 'cas-b12', titre: 'Anémie macrocytaire et fourmillements', discipline: 'Hématologie', chapter: 'hemato-anemies', lexique: false,
    enonce: "Un homme de 66 ans a une anémie à 10 g/dL, [[VGM 118 fL]], réticulocytes bas. Il décrit des [[paresthésies des membres inférieurs]]. La [[vitamine B12 est basse]] et il existe des [[anticorps anti-facteur intrinsèque]].",
    indices: [
      { mot: 'VGM 118 fL', pourquoi: "Macrocytose (> 100 fL) arégénérative → doser B12 et folates." },
      { mot: 'paresthésies des membres inférieurs', pourquoi: "Atteinte neurologique évocatrice de carence en B12 (sclérose combinée de la moelle)." },
      { mot: 'vitamine B12 est basse', pourquoi: "Confirme la carence en B12." },
      { mot: 'anticorps anti-facteur intrinsèque', pourquoi: "Signe la maladie de Biermer (gastrite atrophique auto-immune)." }
    ],
    question: "Quel diagnostic retenez-vous ?",
    reponse: "Anémie de Biermer (carence en B12 par gastrite auto-immune).",
    raisonnement: "Anémie macrocytaire arégénérative + signes neurologiques + B12 basse + anticorps anti-facteur intrinsèque = maladie de Biermer. Traitement : supplémentation en vitamine B12 (souvent parentérale)."
  },
  {
    id: 'cas-meningite', titre: 'Céphalées fébriles et purpura', discipline: 'Infectiologie', lexique: true,
    enonce: "Un étudiant de 19 ans présente depuis quelques heures une [[fièvre]] élevée, des [[céphalées]] intenses, une [[raideur de nuque]] et l'apparition de quelques taches de [[purpura]] ne s'effaçant pas à la vitropression.",
    indices: [
      { mot: 'fièvre', pourquoi: "Syndrome infectieux." },
      { mot: 'céphalées', pourquoi: "Composante du syndrome méningé." },
      { mot: 'raideur de nuque', pourquoi: "Syndrome méningé franc." },
      { mot: 'purpura', pourquoi: "Purpura fébrile ne s'effaçant pas = purpura fulminans possible : urgence absolue." }
    ],
    question: "Quelle est la conduite à tenir immédiate ?",
    reponse: "Suspicion de purpura fulminans (méningococcémie) — antibiothérapie immédiate.",
    raisonnement: "Fièvre + syndrome méningé + purpura = urgence vitale. Devant un purpura fébrile, l'antibiothérapie (ceftriaxone) doit être administrée IMMÉDIATEMENT, avant tout transfert et avant la ponction lombaire. Déclaration obligatoire, prophylaxie de l'entourage."
  },
  {
    id: 'cas-pyelo', titre: 'Fièvre et douleur lombaire', discipline: 'Infectiologie', lexique: true,
    enonce: "Une femme de 40 ans a une [[fièvre]] à 39 °C avec [[frissons]], des [[brûlures mictionnelles]], une [[pollakiurie]] et une [[douleur lombaire]] droite. La bandelette urinaire est positive (leucocytes, nitrites).",
    indices: [
      { mot: 'fièvre', pourquoi: "Signe une atteinte du haut appareil (parenchyme rénal), pas une simple cystite." },
      { mot: 'frissons', pourquoi: "Évoque un possible passage bactériémique." },
      { mot: 'brûlures mictionnelles', pourquoi: "Signes fonctionnels urinaires bas." },
      { mot: 'pollakiurie', pourquoi: "Signe fonctionnel urinaire." },
      { mot: 'douleur lombaire', pourquoi: "Oriente vers le haut appareil urinaire (pyélonéphrite)." }
    ],
    question: "Quel diagnostic et quel examen microbiologique clé ?",
    reponse: "Pyélonéphrite aiguë — ECBU indispensable.",
    raisonnement: "Fièvre + signes urinaires + douleur lombaire = pyélonéphrite (E. coli le plus souvent). ECBU avec antibiogramme avant antibiothérapie probabiliste, adaptée ensuite. Imagerie si signe de gravité ou évolution défavorable."
  },
  {
    id: 'cas-endocardite', titre: 'Fièvre prolongée et souffle', discipline: 'Infectiologie', lexique: true,
    enonce: "Un homme de 55 ans consulte pour une [[fièvre]] traînante depuis 3 semaines, un [[amaigrissement]] et une asthénie. L'examen retrouve un [[souffle cardiaque]] nouveau. Des soins [[dentaires]] récents sont notés. Les [[hémocultures sont positives]] à streptocoque.",
    indices: [
      { mot: 'fièvre', pourquoi: "Fièvre prolongée inexpliquée : penser endocardite." },
      { mot: 'amaigrissement', pourquoi: "Signe d'infection subaiguë (endocardite d'Osler)." },
      { mot: 'souffle cardiaque', pourquoi: "Souffle nouveau = atteinte valvulaire." },
      { mot: 'dentaires', pourquoi: "Porte d'entrée classique des streptocoques oraux." },
      { mot: 'hémocultures sont positives', pourquoi: "Critère majeur de Duke : bactériémie à germe typique." }
    ],
    question: "Quel diagnostic évoquez-vous et quels examens confirment ?",
    reponse: "Endocardite infectieuse (streptocoque, porte d'entrée dentaire).",
    raisonnement: "Fièvre prolongée + souffle + hémocultures positives = endocardite (critères de Duke). Confirmation : hémocultures répétées + échocardiographie (végétations). Antibiothérapie prolongée adaptée."
  },
  {
    id: 'cas-acidocetose', titre: 'Diabétique de type 1 essoufflée', discipline: 'Endocrinologie', chapter: 'iv-39-diabetes', lexique: true,
    enonce: "Une femme de 24 ans, diabétique de type 1, présente depuis 24 h des [[nausées]], une [[douleur abdominale]], une [[polyurie]] et une [[polydipsie]]. Elle a une [[respiration ample et rapide]]. La glycémie capillaire est [[très élevée]] et la bandelette urinaire montre une [[cétonurie]].",
    indices: [
      { mot: 'nausées', pourquoi: "Signe digestif fréquent de l'acidose." },
      { mot: 'douleur abdominale', pourquoi: "Peut simuler un abdomen chirurgical au cours de l'acidocétose." },
      { mot: 'polyurie', pourquoi: "Glycosurie osmotique." },
      { mot: 'polydipsie', pourquoi: "Compense les pertes hydriques." },
      { mot: 'respiration ample et rapide', pourquoi: "Dyspnée de Kussmaul = compensation de l'acidose métabolique." },
      { mot: 'très élevée', pourquoi: "Hyperglycémie franche." },
      { mot: 'cétonurie', pourquoi: "Cétose : signe la carence en insuline." }
    ],
    question: "Quel diagnostic et quelle prise en charge urgente ?",
    reponse: "Acidocétose diabétique.",
    raisonnement: "Hyperglycémie + cétose + acidose (dyspnée de Kussmaul) = acidocétose. Urgence : réhydratation, insulinothérapie IV, apport de potassium (attention à la kaliémie), recherche du facteur déclenchant (infection, arrêt d'insuline)."
  },
  {
    id: 'cas-sca', titre: 'Douleur thoracique chez un fumeur', discipline: 'Cardiologie', chapter: 'iv-47-sca-insuffisance-cardiaque', lexique: true,
    enonce: "Un homme de 60 ans, [[tabagique]] et [[hypertendu]], présente depuis 1 h une [[douleur thoracique constrictive]] rétrosternale avec [[irradiation dans le bras gauche]] et des [[sueurs]]. La [[troponine est élevée]].",
    indices: [
      { mot: 'tabagique', pourquoi: "Facteur de risque cardiovasculaire majeur." },
      { mot: 'hypertendu', pourquoi: "Facteur de risque cardiovasculaire." },
      { mot: 'douleur thoracique constrictive', pourquoi: "Douleur angineuse typique." },
      { mot: 'irradiation dans le bras gauche', pourquoi: "Irradiation évocatrice d'origine coronarienne." },
      { mot: 'sueurs', pourquoi: "Signe neurovégétatif accompagnant le SCA." },
      { mot: 'troponine est élevée', pourquoi: "Marque la nécrose myocardique (infarctus)." }
    ],
    question: "Quel diagnostic et quels examens immédiats ?",
    reponse: "Syndrome coronarien aigu (infarctus).",
    raisonnement: "Douleur thoracique typique + terrain à risque + troponine élevée = SCA. ECG immédiat (recherche d'un sus-décalage ST) + troponine. Prise en charge en urgence : reperfusion (angioplastie) si ST+, antiagrégants, anticoagulant."
  },
  {
    id: 'cas-paracetamol', titre: 'Ingestion volontaire de paracétamol', discipline: 'Toxicologie', chapter: 'v-47-toxicologie-antalgiques', lexique: false,
    enonce: "Un adolescent est amené 6 h après une [[ingestion volontaire de paracétamol]] à forte dose. Il est encore [[asymptomatique]]. On prélève une [[paracétamolémie]].",
    indices: [
      { mot: 'ingestion volontaire de paracétamol', pourquoi: "Le paracétamol en surdosage forme le NAPQI, hépatotoxique." },
      { mot: 'asymptomatique', pourquoi: "Piège : la phase initiale est silencieuse, avant la cytolyse (24-72 h)." },
      { mot: 'paracétamolémie', pourquoi: "Reportée sur le nomogramme (Rumack) selon l'heure d'ingestion pour décider du traitement." }
    ],
    question: "Quel est le risque et l'antidote ?",
    reponse: "Hépatotoxicité (NAPQI) — antidote : N-acétylcystéine.",
    raisonnement: "Le risque est l'hépatite cytolytique retardée. On administre la N-acétylcystéine (précurseur du glutathion) selon le nomogramme, sans attendre les signes de cytolyse. Ne pas se laisser rassurer par la phase asymptomatique."
  },
  {
    id: 'cas-avk', titre: 'INR élevé sous AVK', discipline: 'Hématologie', chapter: 'iv-37-surveillance-heparines-avk', lexique: false,
    enonce: "Un patient sous [[AVK]] pour fibrillation atriale a un [[INR à 6]] sans [[saignement]]. Il a récemment débuté un [[antibiotique]].",
    indices: [
      { mot: 'AVK', pourquoi: "Anticoagulant à marge étroite, surveillé par l'INR." },
      { mot: 'INR à 6', pourquoi: "Surdosage (cible habituelle 2-3) : risque hémorragique." },
      { mot: 'saignement', pourquoi: "Son absence oriente vers une conduite sans antidote lourd." },
      { mot: 'antibiotique', pourquoi: "Interaction fréquente potentialisant les AVK (explique le surdosage)." }
    ],
    question: "Quelle conduite tenir ?",
    reponse: "Surdosage asymptomatique en AVK — adapter selon l'INR.",
    raisonnement: "INR 6 sans saignement : sauter une prise, contrôler l'INR, vitamine K orale à faible dose selon le protocole. Rechercher la cause (interaction avec l'antibiotique). En cas d'hémorragie grave : CCP (concentré de complexe prothrombinique) + vitamine K."
  },
  {
    id: 'cas-drepano', titre: 'Crise douloureuse chez un enfant', discipline: 'Hématologie', chapter: 'iv-26-hemoglobinopathies', lexique: false,
    enonce: "Un enfant [[originaire d'Afrique]] présente des [[douleurs osseuses]] intenses lors d'un épisode fébrile. Il a une [[anémie]] connue avec [[hémolyse]] chronique.",
    indices: [
      { mot: 'originaire d\'Afrique', pourquoi: "Terrain évocateur d'hémoglobinopathie (drépanocytose)." },
      { mot: 'douleurs osseuses', pourquoi: "Crise vaso-occlusive : occlusion de la microcirculation par les hématies falciformes." },
      { mot: 'anémie', pourquoi: "Anémie hémolytique chronique de la drépanocytose." },
      { mot: 'hémolyse', pourquoi: "Les hématies falciformes ont une durée de vie raccourcie." }
    ],
    question: "Quel diagnostic et quel examen confirme ?",
    reponse: "Crise vaso-occlusive drépanocytaire.",
    raisonnement: "Terrain + anémie hémolytique + crises douloureuses osseuses = drépanocytose. Crise vaso-occlusive : hydratation, antalgiques (parfois morphiniques), oxygène, recherche d'un facteur déclenchant (infection). Diagnostic : électrophorèse de l'hémoglobine (HbS)."
  },
  {
    id: 'cas-basedow', titre: 'Amaigrissement et palpitations', discipline: 'Endocrinologie', chapter: 'iv-51-dysthyroidie', lexique: true,
    enonce: "Une femme de 35 ans a [[maigri]] malgré un appétit conservé, avec [[palpitations]], [[tremblements]] et [[thermophobie]]. La [[TSH est effondrée]].",
    indices: [
      { mot: 'maigri', pourquoi: "Amaigrissement malgré un appétit conservé = hypermétabolisme." },
      { mot: 'palpitations', pourquoi: "Tachycardie de la thyrotoxicose." },
      { mot: 'tremblements', pourquoi: "Signe d'hyperactivité adrénergique." },
      { mot: 'thermophobie', pourquoi: "Intolérance à la chaleur de la thyrotoxicose." },
      { mot: 'TSH est effondrée', pourquoi: "TSH basse = hyperthyroïdie (rétrocontrôle)." }
    ],
    question: "Quel diagnostic biologique et étiologie la plus fréquente ?",
    reponse: "Thyrotoxicose (maladie de Basedow chez la femme jeune).",
    raisonnement: "Amaigrissement + palpitations + tremblements + thermophobie + TSH effondrée = thyrotoxicose. Cause la plus fréquente chez la femme jeune : maladie de Basedow (anticorps anti-récepteur de la TSH). Traitement : antithyroïdiens de synthèse, bêtabloquant symptomatique."
  }
];

/** @param {string} slug */
export function casForChapter(slug) {
  return casCliniques.filter((c) => c.chapter === slug);
}
export const casLexique = casCliniques.filter((c) => c.lexique);
export const casDisciplines = [...new Set(casCliniques.map((c) => c.discipline))];
