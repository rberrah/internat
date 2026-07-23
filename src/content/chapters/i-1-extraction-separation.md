---
id: "i-1-extraction-separation"
slug: "i-1-extraction-separation"
title: "Méthodes de séparation par extraction"
description: "Extraire un analyte d'une matrice par partage entre deux phases : solide-liquide et liquide-liquide."
track: "section-I"
programItem: "I-1"
theme: "Méthodes analytiques"
order: 101
duration: "11 min"
tags: ["chimie analytique", "extraction", "partage", "liquide-liquide", "pH"]
level: "intermediate"
sources: ["skoog", "pharmacopee-eur"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Le coefficient de partage d'un soluté entre deux solvants non miscibles est…"
    options:
      - "le rapport des concentrations à l'équilibre dans les deux phases"
      - "le rapport des solubilités du soluté dans chacun des solvants purs"
      - "le rapport des volumes de solvant mis en jeu dans les deux phases"
    correct: 0
  - prompt: "Pour un rendement d'extraction donné, il vaut mieux…"
    options:
      - "fractionner le solvant en plusieurs extractions successives"
      - "utiliser la totalité du solvant en une seule extraction de grand volume"
      - "réaliser une seule extraction en agitant plus longtemps l'ampoule"
    correct: 0
  - prompt: "Pour extraire un acide faible sous forme neutre dans un solvant organique, on travaille à…"
    options:
      - "pH acide (pH < pKa, forme non ionisée)"
      - "pH basique (pH > pKa, forme ionisée A⁻)"
      - "pH voisin du pKa (mélange des deux formes)"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
Avant de doser un principe actif dans un comprimé, un plasma ou une urine, il faut souvent l'**isoler** de sa matrice. L'extraction concentre l'analyte et élimine les interférents : c'est l'étape préalable de nombreux dosages.
<!-- /step -->

<!-- step:title="Principe du partage" -->
Un soluté mis en présence de deux phases se **répartit** entre elles selon son affinité. À l'équilibre, le **coefficient de partage** est constant (loi de Nernst) :

$$ K_D = \frac{[\text{soluté}]_{\text{organique}}}{[\text{soluté}]_{\text{aqueuse}}} $$

Plus $K_D$ est grand, plus l'extraction vers la phase organique est efficace.
<!-- /step -->

<!-- step:title="Les deux grands types" -->
- **Extraction solide-liquide** : un solvant extrait l'analyte d'un solide (macération, percolation, **Soxhlet** pour l'extraction continue à chaud).
- **Extraction liquide-liquide** : partage entre deux solvants **non miscibles** (ex. eau / acétate d'éthyle) dans une **ampoule à décanter**.

:::key
À solvant total égal, **plusieurs extractions successives** de petit volume donnent un meilleur rendement qu'une seule extraction de grand volume.
:::
<!-- /step -->

<!-- step:title="Role du pH" -->
Pour les composés ionisables, seule la forme **neutre** (non ionisée) passe bien dans le solvant organique.

:::clinical
On **ajuste le pH** en conséquence : un **acide faible** s'extrait en milieu **acide** ($pH < pK_a$, forme AH neutre) ; une **base faible** en milieu **basique** ($pH > pK_a$, forme B neutre). Ce contrôle du pH permet aussi de séparer sélectivement acides, bases et neutres.
:::

En pratique, on se place à **au moins 2 unités de pH** du $pK_a$ (plus de 99 % de forme neutre) ; le **relargage** (ajout de NaCl) diminue la solubilité aqueuse et favorise le passage en phase organique.
<!-- /step -->

<!-- step:title="Piege classique" -->
:::pitfall
On extrait la forme **neutre**, donc à l'inverse de ce que l'intuition « acide → basique » suggère : un acide se piège en milieu **acide**. Pour le récupérer ensuite dans l'eau (ré-extraction), on inverse le pH pour le réioniser.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Extraction = partage entre deux phases, $K_D = C_{org}/C_{aq}$.
- Solide-liquide (Soxhlet) et liquide-liquide (ampoule à décanter).
- Fractionner le solvant améliore le rendement.
- Acide faible → pH acide ; base faible → pH basique (extraire la forme neutre).
<!-- /step -->
