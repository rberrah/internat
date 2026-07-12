---
id: "i-14-validation-methode-analyse"
slug: "i-14-validation-methode-analyse"
title: "Critères de validité d'une méthode d'analyse"
description: "Spécificité, linéarité, justesse, fidélité, limites de détection et de quantification : garantir la fiabilité d'un dosage."
track: "section-I"
programItem: "I-14"
theme: "Méthodes analytiques"
order: 114
duration: "12 min"
tags: ["chimie analytique", "validation", "étalonnage", "justesse", "fidélité"]
level: "intermediate"
sources: ["programme-internat", "ich-q2", "sfstp", "pharmacopee-eur"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "La justesse (exactitude) d'une méthode traduit…"
    options:
      - "l'écart entre la valeur mesurée moyenne et la valeur vraie (biais)"
      - "la dispersion des mesures répétées"
      - "la plus petite quantité détectable"
    correct: 0
  - prompt: "La limite de quantification (LOQ) est classiquement estimée par…"
    options:
      - "10 × écart-type du blanc / pente de la droite"
      - "3,3 × pente / écart-type"
      - "la moyenne des blancs"
    correct: 0
  - prompt: "La méthode des ajouts dosés est particulièrement utile pour…"
    options:
      - "corriger un effet de matrice"
      - "augmenter la sensibilité du détecteur"
      - "supprimer le besoin d'un étalon"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
Un résultat analytique n'a de valeur que si la méthode est **validée**. La validation démontre, chiffres à l'appui, que la méthode est fiable pour l'usage prévu — exigence de la **pharmacopée** et des dossiers d'AMM.
<!-- /step -->

<!-- step:title="Les criteres de validation" viz="ValidationMethode" -->
- **Spécificité / sélectivité** : mesurer l'analyte sans interférence de la matrice.
- **Linéarité** : réponse proportionnelle à la concentration sur un domaine défini.
- **Justesse (exactitude)** : proximité entre valeur mesurée moyenne et valeur vraie (= **biais**).
- **Fidélité** : dispersion des mesures répétées — **répétabilité** (mêmes conditions) et **reproductibilité** (conditions changées).
- **LOD / LOQ** : limites de détection et de quantification.
- **Robustesse** : insensibilité à de petites variations opératoires.

:::key
Ne confondez pas **justesse** (proche de la vraie valeur, notion de biais) et **fidélité** (mesures resserrées, notion de dispersion). L'**exactitude** globale exige les deux.
:::

:::howto
**Comment lire le schéma.** Chaque point compare une valeur **mesurée** à la valeur **attendue** ; la méthode idéale place tous les points sur la première bissectrice (pente 1, ordonnée à l'origine 0). Jouez d'abord sur le **biais constant** (le nuage se translate : décalage identique à toute concentration) puis sur le **biais proportionnel** (le nuage pivote : erreur croissante avec la concentration) — ce sont deux défauts de **justesse**. Augmentez enfin le **CV de répétabilité** : le nuage s'épaissit sans se déplacer, c'est une perte de **fidélité**. Vous verrez qu'un nuage serré peut rester entièrement décalé : fidèle mais faux.
:::
<!-- /step -->

<!-- step:title="Limites de detection et quantification" -->
À partir de l'écart-type du signal du blanc $\sigma$ et de la pente $a$ de la droite d'étalonnage :

$$ \text{LOD} = \frac{3{,}3\,\sigma}{a}, \qquad \text{LOQ} = \frac{10\,\sigma}{a} $$

La **LOD** est la plus petite quantité **détectable** (signal distinct du bruit) ; la **LOQ** la plus petite quantité **dosable** avec une fidélité acceptable.
<!-- /step -->

<!-- step:title="Les etalonnages" -->
- **Étalonnage externe** : gamme d'étalons de concentration connue → droite $A = f(C)$.
- **Étalonnage interne** : ajout d'un étalon interne à concentration fixe dans tous les tubes ; on trace le **rapport** des réponses → corrige les biais de volume et d'extraction.
- **Ajouts dosés** : on ajoute des quantités croissantes d'analyte à la matrice elle-même → **corrige l'effet de matrice**, la concentration inconnue se lit par extrapolation.

:::clinical
En bioanalyse (plasma, urines), l'étalon interne et les ajouts dosés sont incontournables car la matrice modifie fortement le signal. On évalue aussi le **rendement d'extraction (recouvrement)** et la **stabilité** de l'analyte dans la matrice.
:::
<!-- /step -->

<!-- step:title="Piege classique" -->
:::pitfall
Une méthode peut être très **fidèle** (résultats reproductibles) tout en étant **fausse** (biais systématique) : penser à une cible criblée de flèches groupées mais loin du centre. Fidélité ≠ justesse. Vérifiez toujours les **deux**.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Critères : spécificité, linéarité, justesse, fidélité, LOD/LOQ, robustesse.
- Justesse = biais ; fidélité = dispersion ; exactitude = les deux.
- $\text{LOD} = 3{,}3\,\sigma/a$ ; $\text{LOQ} = 10\,\sigma/a$.
- Ajouts dosés = correction de l'effet de matrice.
<!-- /step -->
