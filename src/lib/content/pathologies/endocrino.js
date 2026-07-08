// @ts-nocheck
// Pathologies du domaine (endocrinologie, métabolisme, néphrologie) — voir lexique.js pour le format.
export const pathologies = [
  // ─── Endocrinologie — diabète et urgences glycémiques ───
  { id: 'coma-hyperosmolaire', nom: 'Coma hyperosmolaire', discipline: 'Endocrinologie', chapter: 'iv-39-diabetes',
    cles: ['sujet âgé', 'hyperglycémie', 'polyurie', 'polydipsie', 'troubles de conscience', 'déshydratation', 'hyperosmolarité'],
    orientation: "Sujet âgé diabétique de type 2 : hyperglycémie majeure (> 6 g/L) + déshydratation + troubles de conscience SANS cétose = coma hyperosmolaire." },
  { id: 'hypoglycemie', nom: 'Hypoglycémie', discipline: 'Endocrinologie', chapter: 'iv-39-diabetes',
    cles: ['hypoglycémie', 'tremblements', 'sueurs', 'tachycardie', 'troubles de conscience', 'palpitations'],
    orientation: "Sueurs + tremblements + troubles de conscience régressant après resucrage = hypoglycémie (triade de Whipple) ; sulfamides/insuline chez le diabétique." },

  // ─── Métabolisme — lipides ───
  { id: 'hyperlipidemie', nom: 'Hyperlipidémie (dyslipidémie)', discipline: 'Métabolisme', chapter: 'iv-40-hyperlipoproteinemies',
    cles: ['terrain vasculaire', 'xanthomes', 'arc cornéen', 'hypercholestérolémie', 'hypertriglycéridémie', 'athérome'],
    orientation: "Dépôts lipidiques (xanthomes, arc cornéen) + antécédents cardiovasculaires précoces = dyslipidémie : bilan lipidique à jeun (LDL, TG)." },

  // ─── Métabolisme — troubles hydro-électrolytiques ───
  { id: 'hyperkaliemie', nom: 'Hyperkaliémie', discipline: 'Métabolisme', chapter: 'iv-41-troubles-hydro-electrolytiques',
    cles: ['hyperkaliémie', 'créatinine élevée', 'bradycardie', 'troubles du rythme', 'insuffisance rénale', 'faiblesse musculaire'],
    orientation: "Kaliémie > 6 mmol/L + anomalies ECG (ondes T amples, QRS large) = urgence : insuffisance rénale, IEC/ARA2, épargneurs de potassium." },
  { id: 'siadh', nom: 'Hyponatrémie par SIADH', discipline: 'Métabolisme', chapter: 'iv-41-troubles-hydro-electrolytiques',
    cles: ['hyponatrémie', 'troubles de conscience', 'nausées', 'euvolémie', 'natriurèse élevée', 'osmolarité urinaire élevée'],
    orientation: "Hyponatrémie euvolémique + urines concentrées + natriurèse conservée = SIADH ; chercher cancer (poumon), médicaments, pathologie du SNC." },
  { id: 'diabete-insipide', nom: 'Diabète insipide', discipline: 'Néphrologie', chapter: 'iv-41-troubles-hydro-electrolytiques',
    cles: ['polyurie', 'polydipsie', 'hypernatrémie', 'urines diluées', 'soif intense', 'déshydratation'],
    orientation: "Polyurie hypotonique massive + polydipsie + urines diluées malgré la restriction hydrique = diabète insipide (central ou néphrogénique) : test de restriction." },

  // ─── Métabolisme — équilibre acido-basique ───
  { id: 'acidose-lactique', nom: 'Acidose lactique', discipline: 'Métabolisme', chapter: 'iv-42-troubles-acidobasiques',
    cles: ['troubles de conscience', 'polypnée', 'hyperkaliémie', 'insuffisance rénale', 'lactates élevés', 'alcool'],
    orientation: "Acidose métabolique à trou anionique augmenté + lactates élevés = acidose lactique ; metformine + insuffisance rénale, état de choc, intoxication à l'alcool." },

  // ─── Métabolisme / endocrinologie — métabolisme osseux ───
  { id: 'hypercalcemie', nom: 'Hypercalcémie', discipline: 'Métabolisme', chapter: 'iv-43-metabolisme-osseux',
    cles: ['hypercalcémie', 'asthénie', 'polyurie', 'polydipsie', 'constipation', 'troubles de conscience', 'douleurs osseuses'],
    orientation: "Asthénie + polyuro-polydipsie + troubles digestifs + confusion = hypercalcémie ; deux causes dominent : hyperparathyroïdie primaire et cancers." },
  { id: 'hypocalcemie', nom: 'Hypocalcémie', discipline: 'Métabolisme', chapter: 'iv-43-metabolisme-osseux',
    cles: ['hypocalcémie', 'paresthésies', 'tétanie', 'crampes', 'signe de Chvostek', 'allongement du QT'],
    orientation: "Paresthésies péribuccales + crampes + signe de Chvostek/Trousseau = hypocalcémie ; post-chirurgie thyroïdienne (hypoparathyroïdie), carence en vitamine D." },
  { id: 'hyperparathyroidie-primaire', nom: 'Hyperparathyroïdie primaire', discipline: 'Endocrinologie', chapter: 'iv-43-metabolisme-osseux',
    cles: ['hypercalcémie', 'douleurs osseuses', 'lithiase urinaire', 'asthénie', 'hypophosphorémie', 'PTH élevée'],
    orientation: "Hypercalcémie + PTH élevée (ou non freinée) + hypophosphorémie = hyperparathyroïdie primaire (adénome) : « pierres, os, douleurs abdominales »." },
  { id: 'osteoporose', nom: 'Ostéoporose', discipline: 'Métabolisme', chapter: 'iv-43-metabolisme-osseux',
    cles: ['sujet âgé', 'fracture', 'douleurs osseuses', 'tassement vertébral', 'ménopause', 'perte de taille'],
    orientation: "Fracture à basse énergie (poignet, col fémoral, tassement vertébral) chez la femme ménopausée = ostéoporose : ostéodensitométrie (T-score ≤ −2,5)." },

  // ─── Métabolisme — surcharge en fer ───
  { id: 'hemochromatose', nom: 'Hémochromatose', discipline: 'Métabolisme', chapter: 'iv-45-metabolisme-fer',
    cles: ['asthénie', 'mélanodermie', 'arthralgies', 'hépatomégalie', 'diabète', 'coefficient de saturation élevé', 'hyperferritinémie'],
    orientation: "Asthénie + mélanodermie + arthralgies + diabète = hémochromatose : coefficient de saturation de la transferrine > 45 %, gène HFE (C282Y)." },

  // ─── Néphrologie ───
  { id: 'insuffisance-renale-chronique', nom: 'Insuffisance rénale chronique', discipline: 'Néphrologie', chapter: 'iv-46-insuffisance-renale',
    cles: ['créatinine élevée', 'anémie', 'hypertension', 'œdèmes', 'asthénie', 'protéinurie', 'hyperkaliémie'],
    orientation: "Baisse chronique du DFG + reins de petite taille + anémie normochrome + hypocalcémie/hyperphosphorémie = IRC ; stades KDIGO selon le DFG." },
  { id: 'glomerulonephrite-aigue', nom: 'Glomérulonéphrite aiguë', discipline: 'Néphrologie', chapter: 'iv-46-insuffisance-renale',
    cles: ['hématurie', 'protéinurie', 'œdèmes', 'hypertension', 'oligurie', 'créatinine élevée'],
    orientation: "Syndrome néphritique : hématurie + protéinurie + HTA + œdèmes + IRA, souvent post-streptococcique (2-3 semaines après une angine)." },
  { id: 'lithiase-urinaire', nom: 'Lithiase urinaire (colique néphrétique)', discipline: 'Néphrologie',
    cles: ['douleur lombaire', 'hématurie', 'nausées', 'agitation', 'hyperuricémie', 'colique néphrétique'],
    orientation: "Douleur lombaire unilatérale brutale, intense, sans position antalgique, irradiant vers les organes génitaux + hématurie = colique néphrétique (lithiase)." },

  // ─── Endocrinologie — surrénale ───
  { id: 'pheochromocytome', nom: 'Phéochromocytome', discipline: 'Endocrinologie', chapter: 'iv-50-corticosurrenale',
    cles: ['hypertension', 'tachycardie', 'sueurs', 'céphalées', 'palpitations', 'amaigrissement', 'triade de Ménard'],
    orientation: "HTA paroxystique + triade céphalées-sueurs-palpitations (Ménard) = phéochromocytome : dosage des métanéphrines urinaires/plasmatiques." },
  { id: 'hyperaldosteronisme-conn', nom: 'Hyperaldostéronisme primaire (Conn)', discipline: 'Endocrinologie', chapter: 'iv-50-corticosurrenale',
    cles: ['hypertension', 'hypokaliémie', 'asthénie', 'crampes', 'rénine basse', 'aldostérone élevée'],
    orientation: "HTA + hypokaliémie spontanée (crampes, faiblesse musculaire) = hyperaldostéronisme primaire (Conn) : rapport aldostérone/rénine élevé." },

  // ─── Endocrinologie — hypophyse ───
  { id: 'acromegalie', nom: 'Acromégalie', discipline: 'Endocrinologie',
    cles: ['syndrome dysmorphique', 'sueurs', 'céphalées', 'hypertension', 'diabète', 'macroglossie', 'élargissement des extrémités'],
    orientation: "Élargissement progressif des extrémités (mains, pieds, traits du visage) + sueurs + céphalées = acromégalie (adénome à GH) : IGF-1, freinage au glucose." },
  { id: 'insuffisance-antehypophysaire', nom: 'Insuffisance antéhypophysaire', discipline: 'Endocrinologie',
    cles: ['asthénie', 'amaigrissement', 'pâleur', 'hypoglycémie', 'hyponatrémie', 'bradycardie', 'dépilation'],
    orientation: "Asthénie + pâleur « cireuse » + dépilation + hypoglycémie/hyponatrémie = panhypopituitarisme : déficit combiné (TSH, ACTH, GH, gonadotrophines)." },

  // ─── Endocrinologie — thyroïde ───
  { id: 'hypothyroidie-fruste', nom: 'Hypothyroïdie fruste (infraclinique)', discipline: 'Endocrinologie', chapter: 'iv-51-dysthyroidie',
    cles: ['asthénie', 'prise de poids', 'frilosité', 'bradycardie', 'constipation', 'TSH élevée'],
    orientation: "TSH élevée avec T4 libre normale + signes discrets (asthénie, frilosité, prise de poids) = hypothyroïdie fruste : anticorps anti-TPO, surveillance." },

  // ─── Métabolisme — nutrition ───
  { id: 'denutrition', nom: 'Dénutrition', discipline: 'Métabolisme', chapter: 'iv-52-denutrition',
    cles: ['amaigrissement', 'asthénie', 'sujet âgé', 'hypoalbuminémie', 'fonte musculaire', 'anémie'],
    orientation: "Perte de poids involontaire + IMC bas + hypoalbuminémie chez le sujet âgé = dénutrition : dosage albumine/préalbumine, évaluation des apports." },
];
