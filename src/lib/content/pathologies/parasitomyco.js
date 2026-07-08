// @ts-nocheck
// Pathologies du domaine — voir lexique.js pour le format.
// Parasitoses & mycoses (hors paludisme, toxoplasmose, amibiase : déjà dans lexique.js).
export const pathologies = [
  // ─── Protozooses intestinales (iv-12) ───
  { id: 'giardiose', nom: 'Giardiose (Giardia intestinalis)', discipline: 'Parasitologie', chapter: 'iv-12-protozooses-intestinales',
    cles: ['diarrhée', 'douleur abdominale', 'ballonnements', 'retour de voyage', 'selles graisseuses', 'amaigrissement'],
    orientation: "Diarrhée chronique + ballonnements + selles graisseuses (malabsorption) au retour de voyage : giardiose ; examen parasitologique des selles répété (3 prélèvements), métronidazole." },
  { id: 'cryptosporidiose', nom: 'Cryptosporidiose (Cryptosporidium)', discipline: 'Parasitologie', chapter: 'iv-12-protozooses-intestinales',
    cles: ['diarrhée', 'terrain immunodéprimé', 'douleur abdominale', 'amaigrissement', 'fièvre', 'contact eau douce'],
    orientation: "Diarrhée hydrique profuse et prolongée chez l'immunodéprimé (VIH/SIDA) : cryptosporidiose ; recherche d'oocystes (Ziehl modifié), restaurer l'immunité." },

  // ─── Trichomonose urogénitale (iv-13) ───
  { id: 'trichomonose-urogenitale', nom: 'Trichomonose urogénitale (Trichomonas vaginalis)', discipline: 'Parasitologie', chapter: 'iv-13-trichomonose',
    cles: ['leucorrhées', 'prurit', 'brûlures mictionnelles', 'dyspareunie', 'comportement à risque', 'partenaire à traiter'],
    orientation: "Leucorrhées verdâtres spumeuses malodorantes + prurit vulvaire + brûlures : trichomonose (IST) ; prélèvement vaginal, métronidazole, traiter le partenaire." },

  // ─── Leishmaniose (iv-16) ───
  { id: 'leishmaniose-viscerale', nom: 'Leishmaniose viscérale (kala-azar)', discipline: 'Parasitologie', chapter: 'iv-16-leishmaniose',
    cles: ['fièvre', 'splénomégalie', 'hépatomégalie', 'anémie', 'amaigrissement', 'retour de voyage', 'pancytopénie'],
    orientation: "Fièvre irrégulière + splénomégalie majeure + pancytopénie + AEG (pourtour méditerranéen, tropiques) : leishmaniose viscérale ; myélogramme (corps de Leishman), amphotéricine B liposomale." },
  { id: 'leishmaniose-cutanee', nom: 'Leishmaniose cutanée (bouton d\'Orient)', discipline: 'Parasitologie', chapter: 'iv-16-leishmaniose',
    cles: ['ulcération cutanée', 'lésion indolore', 'retour de voyage', 'éruption', 'piqûre de phlébotome'],
    orientation: "Ulcération cutanée chronique indolore (« bouton d'Orient ») au point de piqûre du phlébotome, au retour d'une zone d'endémie : leishmaniose cutanée ; frottis/biopsie de la lésion." },

  // ─── Helminthoses (iv-17) ───
  { id: 'bilharziose', nom: 'Bilharziose (schistosomose)', discipline: 'Parasitologie', chapter: 'iv-17-helminthoses',
    cles: ['hématurie', 'contact eau douce', 'retour de voyage', 'afrique subsaharienne', 'hyperéosinophilie', 'douleur abdominale', 'prurit'],
    orientation: "Hématurie terminale (S. haematobium) ou atteinte hépato-intestinale après baignade en eau douce en Afrique, avec hyperéosinophilie : bilharziose ; recherche d'œufs (urines/selles), praziquantel." },
  { id: 'teniasis', nom: 'Téniasis (Taenia saginata / solium)', discipline: 'Parasitologie', chapter: 'iv-17-helminthoses',
    cles: ['douleur abdominale', 'anneaux dans les selles', 'amaigrissement', 'prurit anal', 'hyperéosinophilie', 'consommation de viande'],
    orientation: "Émission d'anneaux mobiles dans les sous-vêtements/selles + troubles digestifs après viande peu cuite (bœuf/porc) : téniasis ; scotch-test/EPS, praziquantel ou niclosamide." },
  { id: 'hydatidose', nom: 'Hydatidose (kyste hydatique)', discipline: 'Parasitologie', chapter: 'iv-17-helminthoses',
    cles: ['hépatomégalie', 'douleur abdominale', 'masse kystique', 'ictère', 'hyperéosinophilie', 'contact chien'],
    orientation: "Masse kystique hépatique (parfois pulmonaire) chez un sujet exposé aux chiens en zone d'élevage : kyste hydatique ; sérologie + imagerie, ne jamais ponctionner (risque anaphylactique)." },
  { id: 'oxyurose', nom: 'Oxyurose (Enterobius vermicularis)', discipline: 'Parasitologie', chapter: 'iv-17-helminthoses',
    cles: ['prurit anal', 'prurit', 'troubles du sommeil', 'enfant', 'hyperéosinophilie'],
    orientation: "Prurit anal à recrudescence nocturne, surtout chez l'enfant : oxyurose ; scotch-test anal le matin, traiter toute la famille (flubendazole/pyrantel)." },
  { id: 'anguillulose', nom: 'Anguillulose (Strongyloides stercoralis)', discipline: 'Parasitologie', chapter: 'iv-17-helminthoses',
    cles: ['diarrhée', 'douleur abdominale', 'hyperéosinophilie', 'terrain immunodéprimé', 'retour de voyage', 'larva currens'],
    orientation: "Troubles digestifs + hyperéosinophilie oscillante + « larva currens », parfois des années après un séjour tropical : anguillulose ; risque d'anguillulose maligne sous corticoïdes (dépister avant immunosuppression), ivermectine." },
  { id: 'ascaridiose', nom: 'Ascaridiose (Ascaris lumbricoides)', discipline: 'Parasitologie', chapter: 'iv-17-helminthoses',
    cles: ['douleur abdominale', 'toux', 'hyperéosinophilie', 'retour de voyage', 'occlusion', 'syndrome de Löffler'],
    orientation: "Toux fébrile transitoire avec hyperéosinophilie (syndrome de Löffler) puis troubles digestifs/occlusion en zone d'endémie : ascaridiose ; œufs dans les selles, albendazole." },
  { id: 'trichinellose', nom: 'Trichinellose (Trichinella)', discipline: 'Parasitologie', chapter: 'iv-17-helminthoses',
    cles: ['fièvre', 'myalgies', 'œdème du visage', 'hyperéosinophilie', 'consommation de viande', 'éruption'],
    orientation: "Fièvre + myalgies diffuses + œdème palpébral + hyperéosinophilie majeure après consommation de viande peu cuite (porc/sanglier) : trichinellose ; sérologie, albendazole." },

  // ─── Levures : candidoses, cryptococcose (iv-18) ───
  { id: 'candidose-invasive', nom: 'Candidose invasive (candidémie)', discipline: 'Mycologie', chapter: 'iv-18-levures',
    cles: ['fièvre', 'terrain immunodéprimé', 'hémocultures positives', 'cathéter', 'antibiothérapie large spectre', 'neutropénie'],
    orientation: "Fièvre résistant aux antibiotiques chez un patient de réanimation/neutropénique porteur d'un cathéter : candidose invasive ; hémocultures (Candida), échinocandine, ablation du cathéter." },
  { id: 'candidose-muqueuse', nom: 'Candidose muqueuse (muguet, vulvo-vaginite)', discipline: 'Mycologie', chapter: 'iv-18-levures',
    cles: ['terrain immunodéprimé', 'muguet', 'dysphagie', 'prurit', 'leucorrhées', 'antibiothérapie large spectre'],
    orientation: "Muguet oropharyngé/œsophagien (dépôts blanchâtres, dysphagie) chez l'immunodéprimé, ou candidose vulvo-vaginale (leucorrhées caillebottées + prurit) : candidose muqueuse ; antifongiques locaux ou azolés." },
  { id: 'cryptococcose', nom: 'Cryptococcose (Cryptococcus neoformans)', discipline: 'Mycologie', chapter: 'iv-18-levures',
    cles: ['fièvre', 'céphalées', 'terrain immunodéprimé', 'syndrome méningé', 'troubles de conscience', 'toux'],
    orientation: "Méningo-encéphalite subaiguë (céphalées fébriles, troubles de conscience) chez l'immunodéprimé (VIH, CD4 bas) : cryptococcose ; antigène cryptococcique (LCR/sang), encre de Chine, amphotéricine B + flucytosine." },

  // ─── Aspergillose (iv-19) ───
  { id: 'aspergillose', nom: 'Aspergillose pulmonaire invasive', discipline: 'Mycologie', chapter: 'iv-19-aspergillose',
    cles: ['fièvre', 'toux', 'terrain immunodéprimé', 'hémoptysie', 'neutropénie', 'douleur thoracique'],
    orientation: "Fièvre + signes respiratoires (hémoptysie) chez le neutropénique/greffé : aspergillose pulmonaire invasive ; TDM thoracique (signe du halo), antigène galactomannane, voriconazole." },

  // ─── Dermatophytes (iv-20) ───
  { id: 'dermatophytose', nom: 'Dermatophytose (teigne, herpès circiné)', discipline: 'Mycologie', chapter: 'iv-20-dermatophytes',
    cles: ['prurit', 'éruption', 'alopécie', 'lésion annulaire', 'enfant', 'contact animal'],
    orientation: "Plaques alopéciques squameuses du cuir chevelu chez l'enfant (teigne) ou lésion annulaire prurigineuse à bordure active (herpès circiné) : dermatophytose ; lumière de Wood, prélèvement mycologique, terbinafine/griséofulvine." },

  // ─── Pneumocystose (iv-21) ───
  { id: 'pneumocystose', nom: 'Pneumocystose (Pneumocystis jirovecii)', discipline: 'Mycologie', chapter: 'iv-21-pneumocystose',
    cles: ['toux', 'dyspnée', 'fièvre', 'terrain immunodéprimé', 'hypoxémie', 'amaigrissement'],
    orientation: "Toux sèche + dyspnée d'aggravation progressive + hypoxémie chez l'immunodéprimé (VIH, CD4 < 200) : pneumocystose ; LBA (Pneumocystis jirovecii), cotrimoxazole (+ corticoïdes si hypoxémie sévère)." },

  // ─── Ectoparasitose : gale (pas de chapitre dédié → chapter omis) ───
  { id: 'gale', nom: 'Gale (Sarcoptes scabiei)', discipline: 'Parasitologie',
    cles: ['prurit', 'prurit nocturne', 'éruption', 'sillons', 'contage', 'lésions interdigitales'],
    orientation: "Prurit diffus à recrudescence nocturne épargnant le visage, avec atteinte familiale et sillons interdigitaux : gale ; traiter le patient, l'entourage et le linge (perméthrine ou ivermectine)." },
];
