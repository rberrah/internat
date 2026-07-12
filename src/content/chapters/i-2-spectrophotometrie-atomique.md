---
id: "i-2-spectrophotometrie-atomique"
slug: "i-2-spectrophotometrie-atomique"
title: "Spectrophotométries d'émission et d'absorption atomiques"
description: "Doser les éléments métalliques par absorption ou émission de la lumière par des atomes libres."
track: "section-I"
programItem: "I-2"
theme: "Méthodes analytiques"
order: 102
duration: "11 min"
tags: ["chimie analytique", "SAA", "émission atomique", "métaux", "flamme"]
level: "intermediate"
sources: ["programme-internat", "skoog", "pharmacopee-eur", "baud-garnier"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "En spectrophotométrie d'absorption atomique (SAA), on mesure…"
    options:
      - "la lumière absorbée par les atomes à l'état fondamental"
      - "la lumière émise par des atomes excités"
      - "la fluorescence des molécules"
    correct: 0
  - prompt: "L'étape d'atomisation a pour but de…"
    options:
      - "transformer l'échantillon en atomes libres à l'état gazeux"
      - "ioniser totalement le solvant"
      - "former des complexes colorés"
    correct: 0
  - prompt: "La spécificité de la SAA repose sur…"
    options:
      - "des raies d'absorption caractéristiques de chaque élément"
      - "un large spectre continu"
      - "la masse molaire de l'élément"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
Doser le calcium, le fer, le plomb ou le lithium : les spectrophotométries atomiques sont les méthodes de référence des **éléments métalliques** en biologie et en toxicologie. Absorption et émission sont deux faces d'un même phénomène.
<!-- /step -->

<!-- step:title="Atomisation" -->
Commune aux deux techniques : l'échantillon est porté à haute température pour libérer des **atomes libres à l'état gazeux**.

- **Flamme** (air-acétylène) : simple, courante.
- **Four graphite** : plus sensible (traces), petit volume.
- **Plasma (ICP)** : très haute température, multi-élémentaire.
<!-- /step -->

<!-- step:title="Absorption (SAA)" viz="BeerLambert" -->
Les atomes à l'état **fondamental** absorbent la lumière d'une **lampe à cathode creuse** émettant les raies de l'élément recherché. On mesure l'absorbance, qui suit **Beer-Lambert** ($A = k\,C$).

:::key
La spécificité vient des **raies caractéristiques** : chaque élément absorbe à des longueurs d'onde propres. La lampe est spécifique de l'élément dosé.
:::

:::howto
**Comment lire le schéma.** Le graphique montre la droite d'étalonnage $A = f(C)$ qui fonde le dosage en SAA : l'absorbance des atomes libres croît proportionnellement à la concentration de l'élément ($A = k\,C$). Faites varier le coefficient d'absorption et le trajet optique pour voir la **pente** — donc la sensibilité du dosage — augmenter, puis poussez la concentration : la droite se courbe. Retenez qu'un point situé hors du domaine linéaire doit être **dilué**, jamais extrapolé.
:::
<!-- /step -->

<!-- step:title="Emission (SEA)" -->
Les atomes portés à un état **excité** reviennent au fondamental en **émettant** de la lumière à leurs longueurs d'onde caractéristiques ; l'intensité émise est proportionnelle à la concentration.

:::clinical
La **photométrie de flamme** dose facilement Na⁺, K⁺, Li⁺ (éléments facilement excitables). L'**ICP-OES / ICP-MS** est aujourd'hui la référence multi-élémentaire.
:::
<!-- /step -->

<!-- step:title="Piege classique" -->
:::pitfall
Absorption = atomes **fondamentaux** qui absorbent une source externe ; émission = atomes **excités** qui rayonnent. Les éléments à basse énergie d'excitation (alcalins) se prêtent bien à l'émission ; la majorité des métaux se dosent en absorption.

À la température des flammes, la **grande majorité des atomes reste à l'état fondamental** (loi de Boltzmann) : l'absorption est donc en général plus sensible et moins dépendante de la température que l'émission.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Étape clé commune : **atomisation** (flamme, four, plasma).
- SAA : atomes fondamentaux absorbent une raie caractéristique ; $A = kC$.
- SEA : atomes excités émettent ; intensité proportionnelle à $C$.
- Applications : dosage des métaux et oligoéléments.
<!-- /step -->
