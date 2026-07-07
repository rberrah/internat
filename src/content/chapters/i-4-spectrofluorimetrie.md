---
id: "i-4-spectrofluorimetrie"
slug: "i-4-spectrofluorimetrie"
title: Spectrofluorimétrie
description: "Mesurer la lumière réémise par une molécule excitée : une méthode très sensible et sélective."
track: "section-I"
programItem: "I-4"
theme: "Méthodes analytiques"
order: 104
duration: "10 min"
tags: ["chimie analytique", "fluorescence", "spectrofluorimétrie", "Stokes", "sensibilité"]
quiz:
  - prompt: "En fluorimétrie, la longueur d'onde d'émission est…"
    options:
      - "supérieure à celle d'excitation (déplacement de Stokes)"
      - "inférieure à celle d'excitation"
      - "toujours égale à celle d'excitation"
    correct: 0
  - prompt: "Le détecteur de fluorescence est placé…"
    options:
      - "à 90° du faisceau d'excitation"
      - "dans l'axe du faisceau d'excitation"
      - "avant la cuve"
    correct: 0
  - prompt: "Comparée à l'absorption UV, la fluorimétrie est…"
    options:
      - "plus sensible (détection sur fond noir)"
      - "moins sensible"
      - "de sensibilité identique"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
Certaines molécules, après avoir absorbé de la lumière, en **réémettent** une partie : elles fluorescent. Mesurer cette émission est **beaucoup plus sensible** que mesurer une absorption — d'où l'usage de la fluorimétrie pour les traces et l'immunoanalyse.
<!-- /step -->

<!-- step:title="Principe" -->
La molécule absorbe un photon d'excitation et passe à un état **excité**. Elle perd d'abord un peu d'énergie sans rayonner (relaxation vibrationnelle), puis retombe à l'état fondamental en **émettant** un photon.

:::key
Le photon émis est **moins énergétique** que le photon absorbé : la longueur d'onde d'émission est **supérieure** à celle d'excitation. C'est le **déplacement de Stokes** ($\lambda_{em} > \lambda_{exc}$).
:::
<!-- /step -->

<!-- step:title="Intensité et sensibilité" -->
Pour une solution diluée, l'intensité de fluorescence est proportionnelle à la concentration **et** à l'intensité de la source :
$$ F = k\,\Phi\,I_0\,\varepsilon\,l\,C $$
$\Phi$ est le **rendement quantique** (photons émis / absorbés).

:::note
On mesure un signal **sur fond noir** (en l'absence d'analyte, pas de lumière) et on peut l'amplifier en augmentant $I_0$ : la fluorimétrie est **plus sensible** que l'absorption, où l'on cherche une petite différence entre $I$ et $I_0$.
:::
<!-- /step -->

<!-- step:title="Appareillage" -->
Source intense (lampe xénon), **monochromateur d'excitation**, cuve, puis **monochromateur d'émission** et détecteur placés à **90°** du faisceau incident (pour ne pas recevoir la lumière transmise). Deux monochromateurs, donc double sélectivité : $\lambda_{exc}$ et $\lambda_{em}$.
<!-- /step -->

<!-- step:title="Facteurs et limites" -->
- **Fluorophores** : molécules rigides, planes, aromatiques conjuguées (quinine, fluorescéine).
- **Extinction (quenching)** : collisions, oxygène, température ; à forte concentration, **auto-extinction** qui rompt la linéarité.
- **Milieu** : le pH, la polarité du solvant et la viscosité modifient l'intensité et le spectre de fluorescence.
- Applications : dosage de traces, **immunoessais** fluorescents, détection en CLHP et électrophorèse capillaire, analyse chirale après dérivation fluorescente.
<!-- /step -->

<!-- step:title="Piege classique" -->
:::pitfall
La linéarité $F = f(C)$ n'existe qu'en **solution diluée** : à forte concentration, l'auto-absorption et l'auto-extinction font **chuter** le signal. Une fluorescence faible peut donc traduire une concentration trop élevée, pas trop faible.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Excitation puis émission ; $\lambda_{em} > \lambda_{exc}$ (Stokes).
- $F$ proportionnelle à $C$ et à $I_0$ ; méthode **très sensible**.
- Détection à **90°**, deux monochromateurs.
- Linéarité limitée aux solutions diluées (auto-extinction).
<!-- /step -->
