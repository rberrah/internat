---
id: "transversal-ph-pka"
slug: "transversal-ph-pka"
title: "pH, pKa et ionisation : une équation partout"
description: "Henderson-Hasselbalch relie chimie, gaz du sang et devenir des médicaments."
track: "transversal"
order: 30
duration: "12 min"
tags: ["transversal", "pH", "pKa", "ionisation"]
prerequisites: []
glossary: []
quiz:
  - prompt: "La relation de Henderson-Hasselbalch s'écrit…"
    options:
      - "pH = pKa + log([base]/[acide])"
      - "pH = pKa × [acide]"
      - "pH = pKa − [base]"
    correct: 0
  - prompt: "Un acide faible est d'autant plus ionisé que…"
    options:
      - "le pH est supérieur à son pKa"
      - "le pH est inférieur à son pKa"
      - "sa masse molaire est grande"
    correct: 0
  - prompt: "Pour accélérer l'élimination urinaire d'un acide faible (aspirine, phénobarbital), on…"
    options:
      - "alcalinise les urines (bicarbonate)"
      - "acidifie les urines"
      - "réduit la diurèse"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
La même équation, **Henderson-Hasselbalch**, sert en chimie analytique (tampons, titrages), en physiologie (gaz du sang) et en pharmacocinétique (absorption des médicaments). La comprendre une fois, c'est la reconnaître partout.
<!-- /step -->

<!-- step:title="La formule unique" viz="AcideBase" -->
Pour un couple acide/base faible :

$$ \text{pH} = \text{pK}_a + \log\frac{[\text{base}]}{[\text{acide}]} $$

:::key
Quand **[base] = [acide]**, pH = pKa : c'est le point de **pouvoir tampon maximal**. Un tampon amortit les variations de pH autour de son pKa (± 1 unité).
:::
<!-- /step -->

<!-- step:title="Ionisation des molecules" -->
Une molécule existe sous forme **ionisée** (chargée, hydrophile) ou **non ionisée** (neutre, lipophile) selon le pH :

- un **acide faible** est **d'autant plus ionisé que le pH est haut** (pH > pKa) ;
- une **base faible** est **d'autant plus ionisée que le pH est bas** (pH < pKa).

:::note
Seule la forme **non ionisée** (lipophile) traverse facilement les membranes : c'est le principe du **partage selon le pH** (pH-partition).
:::
<!-- /step -->

<!-- step:title="En pharmacocinetique" -->
Le pH gouverne l'**absorption** et l'**élimination** :

- un acide faible est mieux **absorbé** là où il est peu ionisé (estomac acide) ; une base faible dans l'intestin ;
- à l'inverse, pour **piéger** un toxique dans l'urine et l'éliminer, on ionise sa forme urinaire.

:::clinical
Intoxication par un **acide faible** (aspirine, phénobarbital) : on **alcalinise les urines** (bicarbonate) → le médicament s'ionise, ne peut plus être réabsorbé, et son élimination augmente.
:::
<!-- /step -->

<!-- step:title="En clinique : les gaz du sang" -->
La régulation du pH sanguin obéit à la même loi, appliquée au couple **bicarbonate / CO2** :

$$ \text{pH} = 6{,}1 + \log\frac{[\text{HCO}_3^-]}{0{,}03 \times \text{PCO}_2} $$

Le **rein** ajuste le HCO3 (métabolique, lent) et le **poumon** la PCO2 (respiratoire, rapide). C'est la clé des troubles acido-basiques.
<!-- /step -->

<!-- step:title="A retenir" -->
- Henderson-Hasselbalch : pH = pKa + log([base]/[acide]) — tampon maximal à pH = pKa.
- Acide faible : ionisé si pH > pKa ; base faible : ionisée si pH < pKa.
- Seule la forme **non ionisée** franchit les membranes (pH-partition).
- Alcaliniser les urines accélère l'élimination des **acides faibles** (aspirine).
- Gaz du sang : même équation, couple HCO3/PCO2 (rein lent, poumon rapide).
<!-- /step -->
