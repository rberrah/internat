// @ts-nocheck
// ARBRES DE DÉCISION (aide au raisonnement pour exercices et cas cliniques).
// Un nœud = { q, options: [{ label, node }] } ; une feuille = { result, detail }.
// `chapter` = slug du cours associé.

/** @typedef {{q?:string, options?:{label:string, node:any}[], result?:string, detail?:string}} Node */
/** @typedef {{id:string, titre:string, discipline:string, chapter?:string, tree:Node}} Arbre */

/** @type {Arbre[]} */
export const arbres = [
  {
    id: 'arbre-anemie', titre: 'Démarche devant une anémie', discipline: 'Hématologie', chapter: 'hemato-anemies',
    tree: {
      q: 'Quel est le VGM ?',
      options: [
        { label: 'Microcytaire (< 80 fL)', node: {
          q: 'Ferritine ?',
          options: [
            { label: 'Basse', node: { result: 'Carence martiale (ferriprive)', detail: "Fer ↓, CS ↓, transferrine/CTF ↑. Chercher un saignement chronique (digestif, gynéco)." } },
            { label: 'Normale ou haute', node: { result: 'Inflammation, thalassémie ou anémie sidéroblastique', detail: "CRP ↑ = inflammatoire ; électrophorèse de l'Hb si thalassémie." } }
          ]
        } },
        { label: 'Macrocytaire (> 100 fL)', node: {
          q: 'Réticulocytes ?',
          options: [
            { label: 'Bas (< 120 G/L)', node: { result: 'Carence B12 / folates (ou myélodysplasie, alcool, hypothyroïdie)', detail: 'Doser B12 et folates ; mégaloblastose.' } },
            { label: 'Élevés (> 120 G/L)', node: { result: 'Hémolyse ou hémorragie (macrocytose de régénération)', detail: 'Haptoglobine ↓, LDH ↑, bilirubine libre ↑.' } }
          ]
        } },
        { label: 'Normocytaire (80-100 fL)', node: {
          q: 'Réticulocytes ?',
          options: [
            { label: 'Bas (< 120 G/L)', node: { result: 'Origine centrale : IRC, inflammation, moelle', detail: "IRC (défaut d'EPO) ; sinon myélogramme (aplasie, envahissement)." } },
            { label: 'Élevés (> 120 G/L)', node: { result: 'Hémorragie aiguë ou hémolyse', detail: 'Bilan d\'hémolyse ; test de Coombs si origine immunologique.' } }
          ]
        } }
      ]
    }
  },
  {
    id: 'arbre-fievre-voyage', titre: 'Fièvre au retour de voyage', discipline: 'Infectiologie', chapter: 'parasito-paludisme',
    tree: {
      q: 'Frottis + goutte épaisse en urgence (réflexe systématique) : résultat ?',
      options: [
        { label: 'Positif (Plasmodium)', node: {
          q: 'Signe de gravité (OMS) ?',
          options: [
            { label: 'Oui', node: { result: 'Accès grave à P. falciparum', detail: 'Réanimation + artésunate IV.' } },
            { label: 'Non', node: { result: 'Accès palustre simple', detail: 'ACT (artéméther-luméfantrine…) ; P. vivax/ovale : + primaquine après recherche de déficit en G6PD.' } }
          ]
        } },
        { label: 'Négatif — ictère + myalgies + IRA', node: { result: 'Leptospirose probable', detail: "Contact eau douce/rongeurs ; sérologie." } },
        { label: 'Négatif — diarrhée + fièvre prolongée', node: { result: 'Fièvre typhoïde à évoquer', detail: 'Hémocultures, coproculture (Salmonella Typhi).' } },
        { label: 'Négatif — éruption + arthralgies', node: { result: 'Arbovirose (dengue, chikungunya, Zika)', detail: 'Sérologie/PCR selon la zone et le délai.' } }
      ]
    }
  },
  {
    id: 'arbre-acidobasique', titre: 'Trouble acido-basique', discipline: 'Néphrologie', chapter: 'iv-42-troubles-acidobasiques',
    tree: {
      q: 'pH artériel ?',
      options: [
        { label: '< 7,38 (acidose)', node: {
          q: 'Quel paramètre est anormal ?',
          options: [
            { label: 'HCO₃⁻ bas', node: { result: 'Acidose métabolique', detail: 'Calculer le trou anionique ; compensation = hyperventilation (formule de Winter).' } },
            { label: 'PCO₂ élevé', node: { result: 'Acidose respiratoire', detail: 'Hypoventilation ; compensation rénale (HCO₃⁻ ↑), lente.' } }
          ]
        } },
        { label: '> 7,42 (alcalose)', node: {
          q: 'Quel paramètre est anormal ?',
          options: [
            { label: 'HCO₃⁻ élevé', node: { result: 'Alcalose métabolique', detail: 'Vomissements, diurétiques ; compensation = hypoventilation.' } },
            { label: 'PCO₂ bas', node: { result: 'Alcalose respiratoire', detail: 'Hyperventilation (anxiété, hypoxie, embolie) ; compensation rénale.' } }
          ]
        } }
      ]
    }
  },
  {
    id: 'arbre-tq-tca', titre: 'Allongement du TQ et/ou du TCA', discipline: 'Hématologie', chapter: 'iv-36-allongement-tq-tca',
    tree: {
      q: 'Quel test est allongé ?',
      options: [
        { label: 'TQ (TP bas) isolé', node: { result: 'Déficit en facteur VII (voie extrinsèque)', detail: 'VII = demi-vie la plus courte : premier abaissé sous AVK / en insuffisance hépatique débutante.' } },
        { label: 'TCA isolé', node: {
          q: 'Contexte ?',
          options: [
            { label: 'Traitement par héparine', node: { result: 'Effet de l\'héparine (HNF)', detail: 'Surveillance par TCA (ou anti-Xa).' } },
            { label: 'Syndrome hémorragique', node: { result: 'Déficit VIII (hémophilie A) / IX (B) / Willebrand', detail: 'Doser les facteurs ; Willebrand = TCA allongé + trouble de l\'hémostase primaire.' } },
            { label: 'Sans saignement', node: { result: 'Déficit XII ou anticoagulant circulant (lupique)', detail: 'Souvent sans risque hémorragique.' } }
          ]
        } },
        { label: 'TQ + TCA allongés', node: {
          q: 'Contexte ?',
          options: [
            { label: 'AVK / avitaminose K', node: { result: 'Déficit des facteurs vitamine K-dépendants (II, VII, IX, X)', detail: 'INR pour surveiller les AVK.' } },
            { label: 'Insuffisance hépatique', node: { result: 'Déficit de synthèse global', detail: 'Facteur V abaissé (non vit-K-dépendant) = signe de gravité.' } },
            { label: 'Sepsis, choc', node: { result: 'CIVD', detail: 'Plaquettes ↓, fibrinogène ↓, D-dimères ↑.' } }
          ]
        } }
      ]
    }
  },
  {
    id: 'arbre-ictere', titre: 'Orientation devant un ictère', discipline: 'Hépato-gastro', chapter: 'iv-44-cholestase-cytolyse',
    tree: {
      q: 'Bilirubine prédominante ?',
      options: [
        { label: 'Libre (non conjuguée)', node: { result: 'Hémolyse ou maladie de Gilbert', detail: 'Hémolyse : haptoglobine ↓, LDH ↑, réticulocytes ↑. Gilbert : élévation isolée, bénigne.' } },
        { label: 'Conjuguée', node: {
          q: 'Échographie des voies biliaires ?',
          options: [
            { label: 'Voies dilatées', node: { result: 'Cholestase extra-hépatique (obstacle)', detail: 'Lithiase, tumeur (pancréas) ; PAL et GGT ↑.' } },
            { label: 'Voies non dilatées', node: { result: 'Cholestase intra-hépatique / cytolyse', detail: 'Hépatite, cirrhose, médicaments ; rapport de De Ritis ASAT/ALAT.' } }
          ]
        } }
      ]
    }
  },
  {
    id: 'arbre-antibio-pkpd', titre: 'Optimiser un antibiotique (PK/PD)', discipline: 'Bactériologie', chapter: 'bacterio-antibiogramme',
    tree: {
      q: 'Famille d\'antibiotique ?',
      options: [
        { label: 'Bêta-lactamines', node: { result: 'Temps-dépendant → %T > CMI', detail: 'Optimiser en fractionnant les doses ou en perfusion prolongée.' } },
        { label: 'Aminosides', node: { result: 'Concentration-dépendant → Cmax/CMI', detail: 'Dose unique journalière élevée (+ effet post-antibiotique).' } },
        { label: 'Fluoroquinolones / glycopeptides', node: { result: 'Exposition → AUC/CMI', detail: 'FQ sur BGN : AUC/CMI ≈ 125 ; vancomycine : AUC/CMI ≈ 400.' } }
      ]
    }
  },
  {
    id: 'arbre-thrombopenie', titre: 'Démarche devant une thrombopénie', discipline: 'Hématologie', chapter: 'iv-31-thrombopenies',
    tree: {
      q: 'Mécanisme (myélogramme) ?',
      options: [
        { label: 'Centrale (moelle pauvre en mégacaryocytes)', node: { result: 'Aplasie, envahissement, chimiothérapie, carence', detail: 'Autres cytopénies souvent associées.' } },
        { label: 'Périphérique (mégacaryocytes présents)', node: {
          q: 'Frottis / contexte ?',
          options: [
            { label: 'Schizocytes (MAT)', node: { result: 'PTT / SHU — urgence', detail: 'Transfusion de plaquettes CONTRE-INDIQUÉE sauf urgence vitale ; doser ADAMTS13.' } },
            { label: 'Isolée, sujet jeune', node: { result: 'PTI (purpura thrombopénique immunologique)', detail: 'Diagnostic d\'élimination ; corticoïdes / IgIV si besoin.' } },
            { label: 'Sepsis / choc', node: { result: 'CIVD', detail: 'TQ/TCA allongés, fibrinogène ↓, D-dimères ↑.' } },
            { label: 'Héparine récente', node: { result: 'TIH (thrombopénie induite par l\'héparine)', detail: 'Arrêt de l\'héparine ; risque thrombotique paradoxal.' } }
          ]
        } }
      ]
    }
  },
  {
    id: 'arbre-hyperkaliemie', titre: 'Conduite devant une hyperkaliémie', discipline: 'Néphrologie', chapter: 'iv-41-troubles-hydro-electrolytiques',
    tree: {
      q: 'Signes ECG (ondes T amples, élargissement du QRS) ?',
      options: [
        { label: 'Oui (menace)', node: { result: 'URGENCE : gluconate de calcium + insuline-glucose + β2-mimétiques (± dialyse)', detail: 'Protéger le myocarde, puis transférer et éliminer le potassium.' } },
        { label: 'Non', node: {
          q: 'Cause ?',
          options: [
            { label: 'Insuffisance rénale', node: { result: 'Défaut d\'excrétion rénale', detail: 'Restreindre les apports, résines échangeuses.' } },
            { label: 'Médicaments (IEC/ARA2, épargneurs de K, AINS)', node: { result: 'Hyperkaliémie iatrogène', detail: 'Revoir le traitement.' } },
            { label: 'Prélèvement (hémolyse, thrombocytose)', node: { result: 'Fausse hyperkaliémie', detail: 'Recontrôler le ionogramme.' } }
          ]
        } }
      ]
    }
  },
  {
    id: 'arbre-proteinurie', titre: 'Orientation devant une protéinurie', discipline: 'Néphrologie', chapter: 'iv-46-insuffisance-renale',
    tree: {
      q: 'Débit de protéinurie ?',
      options: [
        { label: '> 3 g/24 h (+ hypoalbuminémie, œdèmes)', node: { result: 'Syndrome néphrotique', detail: 'Atteinte glomérulaire ; risque thrombotique et infectieux. Chercher la cause (LGM, diabète, amylose).' } },
        { label: 'Modérée, avec hématurie / HTA', node: { result: 'Syndrome néphritique / glomérulonéphrite', detail: 'Protéinurie + hématurie + HTA + IRA : glomérulonéphrite (post-infectieuse, à IgA…).' } },
        { label: 'Faible, à l\'effort ou fébrile', node: { result: 'Protéinurie fonctionnelle (bénigne)', detail: 'Transitoire, disparaît au repos ; recontrôler.' } }
      ]
    }
  },
  {
    id: 'arbre-hyponatremie', titre: 'Démarche devant une hyponatrémie', discipline: 'Néphrologie', chapter: 'iv-41-troubles-hydro-electrolytiques',
    tree: {
      q: 'État d\'hydratation (volémie) ?',
      options: [
        { label: 'Hypovolémie (déshydratation extracellulaire)', node: { result: 'Pertes sodées (digestives, rénales, diurétiques)', detail: 'Natriurèse oriente rénal vs extra-rénal ; corriger par sérum salé.' } },
        { label: 'Normovolémie', node: { result: 'SIADH (ou hypothyroïdie, insuffisance surrénale)', detail: 'Osmolalité urinaire élevée, natriurèse conservée ; restriction hydrique.' } },
        { label: 'Hypervolémie (œdèmes)', node: { result: 'Insuffisance cardiaque, cirrhose, syndrome néphrotique', detail: 'Hyponatrémie de dilution ; restriction hydrosodée.' } }
      ]
    }
  },
  {
    id: 'arbre-adenopathie', titre: 'Orientation devant une adénopathie', discipline: 'Hématologie', chapter: 'iv-29-hyperlymphocytoses',
    tree: {
      q: 'Caractère de l\'adénopathie ?',
      options: [
        { label: 'Localisée, inflammatoire (chaude, douloureuse)', node: { result: 'Adénite infectieuse locorégionale', detail: 'Chercher la porte d\'entrée ; le plus souvent réactionnelle.' } },
        { label: 'Généralisée + fièvre/angine (sujet jeune)', node: { result: 'Syndrome mononucléosique (MNI, CMV, toxo, primo-VIH)', detail: 'Hémogramme : syndrome mononucléosique ; sérologies.' } },
        { label: 'Ferme, indolore, > 1 mois (ou sus-claviculaire)', node: { result: 'Suspicion de lymphome / métastase — biopsie', detail: 'Adénopathie suspecte : biopsie ganglionnaire (pas de simple ponction).' } }
      ]
    }
  },
  {
    id: 'arbre-monoarthrite', titre: 'Monoarthrite aiguë', discipline: 'Rhumatologie', chapter: 'iv-48-hyperuricemies',
    tree: {
      q: 'Ponction articulaire — analyse du liquide ?',
      options: [
        { label: 'Liquide purulent, germe / nombreux PNN', node: { result: 'Arthrite septique — urgence', detail: 'Ponction + hémocultures avant antibiothérapie ; drainage.' } },
        { label: 'Microcristaux d\'urate (négatifs, en aiguille)', node: { result: 'Goutte', detail: 'Crise : colchicine/AINS ; fond : allopurinol à distance.' } },
        { label: 'Microcristaux de pyrophosphate (positifs)', node: { result: 'Chondrocalcinose (pseudo-goutte)', detail: 'Sujet âgé ; liseré calcique radiologique.' } }
      ]
    }
  },
  {
    id: 'arbre-douleur-thoracique', titre: 'Douleur thoracique aiguë', discipline: 'Cardiologie', chapter: 'iv-47-sca-insuffisance-cardiaque',
    tree: {
      q: 'Caractéristiques principales ?',
      options: [
        { label: 'Constrictive, à l\'effort, troponine ↑', node: { result: 'Syndrome coronarien aigu', detail: 'ECG + troponine en urgence ; reperfusion si ST+.' } },
        { label: 'Brutale, dyspnée, facteur de risque de MTEV', node: { result: 'Embolie pulmonaire à évoquer', detail: 'Score clinique + D-dimères / angioscanner.' } },
        { label: 'Augmente à l\'inspiration, position (soulagée penché en avant)', node: { result: 'Péricardite', detail: 'ECG (sus-décalage diffus concave), frottement.' } },
        { label: 'Déchirante, migratrice, asymétrie tensionnelle', node: { result: 'Dissection aortique — urgence', detail: 'Angioscanner aortique ; contrôle tensionnel.' } }
      ]
    }
  },
  {
    id: 'arbre-hypercalcemie', titre: 'Étiologie d\'une hypercalcémie', discipline: 'Endocrinologie', chapter: 'iv-43-metabolisme-osseux',
    tree: {
      q: 'Dosage de la PTH ?',
      options: [
        { label: 'PTH élevée (ou normale haute)', node: { result: 'Hyperparathyroïdie primaire', detail: 'Adénome parathyroïdien le plus souvent ; cause n°1 en ambulatoire.' } },
        { label: 'PTH basse (freinée)', node: { result: 'Hypercalcémie maligne (myélome, métastases, PTHrp)', detail: 'Cause n°1 à l\'hôpital ; chercher un cancer.' } }
      ]
    }
  },
  {
    id: 'arbre-eosinophilie', titre: 'Orientation devant une éosinophilie', discipline: 'Parasitologie', chapter: 'iv-17-helminthoses',
    tree: {
      q: 'Contexte ?',
      options: [
        { label: 'Retour de voyage / séjour tropical', node: { result: 'Helminthose (parasitose tissulaire)', detail: 'Bilharziose, anguillulose… ; sérologies, examen parasitologique des selles.' } },
        { label: 'Terrain atopique (asthme, eczéma)', node: { result: 'Allergie / atopie', detail: 'Éosinophilie modérée ; contexte allergique.' } },
        { label: 'Prise médicamenteuse récente', node: { result: 'Éosinophilie médicamenteuse (dont DRESS)', detail: 'Arrêt du médicament ; surveiller une atteinte d\'organe.' } }
      ]
    }
  },
  {
    id: 'arbre-pancytopenie', titre: 'Démarche devant une pancytopénie', discipline: 'Hématologie', chapter: 'iv-28-leucemies-aigues-smd',
    tree: {
      q: 'Myélogramme ?',
      options: [
        { label: 'Moelle pauvre', node: { result: 'Aplasie médullaire', detail: 'Toxique, médicamenteuse ou idiopathique ; biopsie ostéo-médullaire.' } },
        { label: 'Moelle envahie (blastes)', node: { result: 'Leucémie aiguë', detail: 'Urgence : blastes médullaires >= 20 %.' } },
        { label: 'Moelle riche + carence', node: { result: 'Carence B12/folates ou myélodysplasie', detail: 'Doser les vitamines ; dysplasie sur le frottis.' } },
        { label: 'Splénomégalie volumineuse', node: { result: 'Hypersplénisme', detail: 'Séquestration splénique (cirrhose, hémopathie).' } }
      ]
    }
  },
  {
    id: 'arbre-dyspnee', titre: 'Dyspnée aiguë', discipline: 'Cardiologie', chapter: 'iv-47-sca-insuffisance-cardiaque',
    tree: {
      q: 'Orientation clinique ?',
      options: [
        { label: 'Crépitants + orthopnée + œdèmes', node: { result: 'OAP / insuffisance cardiaque', detail: 'BNP élevé ; diurétiques, dérivés nitrés.' } },
        { label: 'Douleur brutale + facteur de risque de thrombose', node: { result: 'Embolie pulmonaire', detail: 'Score clinique + D-dimères / angioscanner.' } },
        { label: 'Sibilants + terrain asthmatique', node: { result: 'Crise d\'asthme', detail: 'Bêta-2 de courte durée + corticoïdes.' } },
        { label: 'Fièvre + foyer auscultatoire', node: { result: 'Pneumopathie', detail: 'Radiographie ; antibiothérapie.' } }
      ]
    }
  },
  {
    id: 'arbre-splenomegalie', titre: 'Orientation devant une splénomégalie', discipline: 'Hématologie', chapter: 'iv-24-leucemie-myeloide-chronique',
    tree: {
      q: 'Contexte biologique ?',
      options: [
        { label: 'Hyperleucocytose + myélémie', node: { result: 'Syndrome myéloprolifératif (LMC…)', detail: 'BCR-ABL, JAK2.' } },
        { label: 'Fièvre + adénopathies (sujet jeune)', node: { result: 'Cause infectieuse (MNI…)', detail: 'Sérologies ; syndrome mononucléosique.' } },
        { label: 'Anémie hémolytique', node: { result: 'Hémolyse chronique', detail: 'Haptoglobine, test de Coombs, électrophorèse de l\'Hb.' } },
        { label: 'Signes d\'hépatopathie', node: { result: 'Hypertension portale', detail: 'Cirrhose ; échographie-doppler.' } }
      ]
    }
  },
  {
    id: 'arbre-hematurie', titre: 'Orientation devant une hématurie', discipline: 'Néphrologie', chapter: 'iv-46-insuffisance-renale',
    tree: {
      q: 'Type et contexte ?',
      options: [
        { label: 'Macroscopique avec caillots', node: { result: 'Origine urologique (tumeur, lithiase)', detail: 'Imagerie + cystoscopie ; les caillots excluent le glomérule.' } },
        { label: 'Microscopique + protéinurie + HTA', node: { result: 'Glomérulonéphrite', detail: 'Hématies déformées, cylindres ; avis néphrologique.' } },
        { label: 'Fébrile + signes urinaires', node: { result: 'Infection urinaire', detail: 'ECBU.' } }
      ]
    }
  },
  {
    id: 'arbre-purpura', titre: 'Orientation devant un purpura', discipline: 'Hématologie', chapter: 'iv-31-thrombopenies',
    tree: {
      q: 'Plaquettes et fièvre ?',
      options: [
        { label: 'Plaquettes basses', node: { result: 'Purpura thrombopénique', detail: 'Voir la démarche des thrombopénies (PTI, CIVD, central).' } },
        { label: 'Fébrile, extensif, ne s\'efface pas', node: { result: 'Purpura fulminans — URGENCE', detail: 'Méningococcémie : ceftriaxone immédiate.' } },
        { label: 'Plaquettes normales, déclive, infiltré', node: { result: 'Purpura vasculaire (à IgA…)', detail: 'Chercher une atteinte rénale et digestive.' } }
      ]
    }
  },
  {
    id: 'arbre-diarrhee', titre: 'Diarrhée aiguë', discipline: 'Infectiologie', chapter: 'iv-4-infections-digestives',
    tree: {
      q: 'Caractère des selles / contexte ?',
      options: [
        { label: 'Glairo-sanglante + fièvre (dysentérie)', node: { result: 'Colite invasive (Shigella, amibiase, Campylobacter)', detail: 'Coproculture / examen parasitologique.' } },
        { label: 'Aqueuse + vomissements (collectif)', node: { result: 'Gastro-entérite virale / toxi-infection', detail: 'Réhydratation ; le plus souvent bénin.' } },
        { label: 'Après une antibiothérapie', node: { result: 'Colite à Clostridioides difficile', detail: 'Toxines ; vancomycine PO ou fidaxomicine.' } }
      ]
    }
  },
  {
    id: 'arbre-cytolyse', titre: 'Cytolyse hépatique', discipline: 'Hépato-gastro', chapter: 'iv-44-cholestase-cytolyse',
    tree: {
      q: 'Niveau des transaminases ?',
      options: [
        { label: 'Très élevées (> 10 N), aiguës', node: { result: 'Hépatite aiguë (virale, médicamenteuse, ischémique)', detail: 'Sérologies, interrogatoire médicamenteux ; surveiller le TP.' } },
        { label: 'Modérées, ASAT > ALAT', node: { result: 'Origine alcoolique', detail: 'Rapport de De Ritis (ASAT/ALAT) > 2.' } },
        { label: 'Chroniques', node: { result: 'Hépatopathie chronique (virale, stéatose, hémochromatose)', detail: 'Bilan étiologique complet.' } }
      ]
    }
  },
  {
    id: 'arbre-coma', titre: 'Coma : premières orientations', discipline: 'Endocrinologie', chapter: 'iv-39-diabetes',
    tree: {
      q: 'Glycémie capillaire (réflexe) et contexte ?',
      options: [
        { label: 'Hypoglycémie', node: { result: 'Coma hypoglycémique', detail: 'Resucrage immédiat (G30 IV ou glucagon).' } },
        { label: 'Hyperglycémie majeure', node: { result: 'Acidocétose ou coma hyperosmolaire', detail: 'Insuline + réhydratation + potassium.' } },
        { label: 'Signe de focalisation', node: { result: 'AVC / processus intracrânien', detail: 'Imagerie cérébrale en urgence.' } },
        { label: 'Myosis + dépression respiratoire', node: { result: 'Intoxication aux opiacés', detail: 'Naloxone ; toxidrome opioïde.' } }
      ]
    }
  },
  {
    id: 'arbre-anomalie-thyroide', titre: 'Anomalie thyroïdienne', discipline: 'Endocrinologie', chapter: 'iv-51-dysthyroidie',
    tree: {
      q: 'TSH (examen de 1re intention) ?',
      options: [
        { label: 'Basse (effondrée)', node: { result: 'Hyperthyroïdie', detail: 'Doser la T4 libre ; maladie de Basedow fréquente.' } },
        { label: 'Élevée', node: { result: 'Hypothyroïdie', detail: 'Doser la T4 libre ; thyroïdite de Hashimoto fréquente.' } },
        { label: 'Normale mais nodule palpable', node: { result: 'Nodule thyroïdien', detail: 'Échographie + cytoponction selon EU-TIRADS.' } }
      ]
    }
  }
];

/** @param {string} slug */
export function treesForChapter(slug) {
  return arbres.filter((a) => a.chapter === slug);
}
export const treeDisciplines = [...new Set(arbres.map((a) => a.discipline))];
