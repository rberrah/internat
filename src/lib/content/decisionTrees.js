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
  }
];

/** @param {string} slug */
export function treesForChapter(slug) {
  return arbres.filter((a) => a.chapter === slug);
}
export const treeDisciplines = [...new Set(arbres.map((a) => a.discipline))];
