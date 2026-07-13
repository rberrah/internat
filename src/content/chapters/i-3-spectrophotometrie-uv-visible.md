---
id: "i-3-spectrophotometrie-uv-visible"
slug: "i-3-spectrophotometrie-uv-visible"
title: Spectrophotométrie UV-visible
description: "Doser une molécule en solution par la lumière qu'elle absorbe, selon la loi de Beer-Lambert."
track: "section-I"
programItem: "I-3"
theme: "Méthodes analytiques"
order: 103
duration: "12 min"
tags: ["chimie analytique", "spectrophotométrie", "Beer-Lambert", "absorbance", "UV-visible"]
level: "beginner"
sources: ["pharmacopee-eur", "skoog"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "La loi de Beer-Lambert relie l'absorbance à…"
    options:
      - "A = ε l C (proportionnelle à la concentration)"
      - "A = C / (ε l)"
      - "A = ε l / C"
    correct: 0
  - prompt: "Pour une mesure dans l'UV, la cuve doit être en…"
    options:
      - "quartz (le verre absorbe l'UV)"
      - "verre ordinaire"
      - "polystyrène"
    correct: 0
  - prompt: "La méthode des ajouts dosés sert surtout à…"
    options:
      - "s'affranchir d'un effet de matrice"
      - "augmenter la longueur d'onde"
      - "mesurer un temps de rétention"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
Doser un principe actif, le fer sérique, un phénol : la spectrophotométrie d'**absorption moléculaire** est la méthode quantitative la plus répandue. Un seul outil, une seule loi — **Beer-Lambert** — que l'on décline à l'infini.
<!-- /step -->

<!-- step:title="Principe" viz="BeerLambert" -->
Un faisceau d'intensité $I_0$ traverse la solution ; l'échantillon en transmet $I$. Les molécules absorbent grâce à leurs **chromophores** (doubles liaisons conjuguées, cycles aromatiques). L'UV va de 200 à 400 nm, le visible de 400 à 800 nm.

:::key
Loi de Beer-Lambert :
$$ A = \log\frac{I_0}{I} = -\log T = \varepsilon\,l\,C $$
$A$ absorbance (sans dimension), $\varepsilon$ coefficient d'extinction molaire (L·mol⁻¹·cm⁻¹), $l$ trajet optique (cm), $C$ concentration (mol·L⁻¹), $T = I/I_0$ transmittance.
:::

Conditions de validité : **lumière monochromatique**, **solution diluée** et absence d'interaction chimique (association, dimérisation, fluorescence).

:::howto
**Comment lire le schéma.** Le graphique trace l'absorbance en fonction de la concentration : la loi de Beer-Lambert prédit une **droite** passant par l'origine, de pente $\varepsilon\,l$. Faites varier le coefficient $\varepsilon$ et le trajet optique $l$ : seule la **pente** change, jamais la linéarité. Poussez ensuite la **concentration** vers le haut du domaine : la courbe s'infléchit sous la droite idéale — c'est la déviation aux fortes absorbances, qui impose de diluer et de rester dans le domaine de linéarité.
:::
<!-- /step -->

<!-- step:title="Coefficients d absorption" -->
- **Molaire** $\varepsilon$ : concentration en mol·L⁻¹.
- **Spécifique** $E$ (L·g⁻¹·cm⁻¹) : concentration en g·L⁻¹, avec $E = \varepsilon / M_r$.
- $E^{1\%}_{1cm}$ : absorbance d'une solution à 1 g pour 100 mL sous 1 cm.

Pour un mélange d'espèces absorbantes, les absorbances **s'additionnent** :
$$ A = l\sum_i \varepsilon_i\,C_i $$
Le **point isosbestique** est la longueur d'onde où deux formes (acide/base) ont le même $\varepsilon$ : l'absorbance y est indépendante du pH.
<!-- /step -->

<!-- step:title="Quantification" -->
On construit une **gamme d'étalonnage** (droite $A = f(C)$) dans son **domaine de linéarité** (au-delà, saturation vers $A \approx 1$). Un **effet de matrice** fausse la gamme externe.

:::note
La **méthode des ajouts dosés** surcharge l'échantillon par des quantités croissantes connues d'analyte ; l'extrapolation à $A = 0$ donne la concentration inconnue, en s'affranchissant de la matrice.
:::
<!-- /step -->

<!-- step:title="Instrumentation" -->
Source (deutérium en UV, tungstène en visible), monochromateur, cuve, détecteur. La **cuve** est en **quartz** dans l'UV (le verre absorbe en dessous de 350 nm), en verre ou plastique dans le visible.
<!-- /step -->

<!-- step:title="Piege classique" -->
:::pitfall
Absorbance et transmittance ne sont pas proportionnelles : $A = -\log T$. Doubler la concentration **double l'absorbance** mais ne divise pas la transmittance par deux. Et la loi n'est linéaire que pour $A$ modéré : à forte concentration, la droite se courbe.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- $A = \varepsilon\,l\,C = -\log T$ ; $A$ proportionnelle à $C$.
- $E = \varepsilon / M_r$ ; absorbances additives pour un mélange.
- Cuve **quartz** en UV ; domaine de linéarité limité.
- Ajouts dosés = parade à l'effet de matrice.
<!-- /step -->
