---
id: "v-6-effet-dose-marge-therapeutique"
slug: "v-6-effet-dose-marge-therapeutique"
title: "Courbe effet-dose, DE50 et marge thérapeutique"
description: "Puissance, efficacité, index thérapeutique : lire une relation dose-effet et comprendre pourquoi certains médicaments se surveillent."
track: "section-V"
programItem: "V-6"
theme: "Devenir du médicament dans l'organisme"
order: 506
duration: "11 min"
tags: ["pharmacodynamie", "dose-effet", "DE50", "marge thérapeutique"]
level: "beginner"
sources: ["cnpm", "goodman-gilman", "rowland-tozer"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "L'index thérapeutique se définit par le rapport…"
    options:
      - "DL50 / DE50"
      - "DE50 / DL50"
      - "Cmax / CMI"
    correct: 0
  - prompt: "La DE50 d'un médicament reflète…"
    options:
      - "sa puissance (dose produisant 50 % de l'effet maximal)"
      - "son efficacité maximale (Emax)"
      - "sa demi-vie d'élimination"
    correct: 0
  - prompt: "Un médicament à marge thérapeutique étroite (digoxine, lithium, AVK) justifie…"
    options:
      - "un suivi thérapeutique pharmacologique"
      - "aucune surveillance particulière"
      - "une dose unique à vie"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" viz="DoseEffet" -->
Augmenter la dose augmente l'effet… jusqu'à un plafond, puis fait apparaître la toxicité. La **relation dose-effet** décrit ce compromis.

Elle fournit trois notions clés de l'internat : **puissance**, **efficacité** et **index thérapeutique** — indispensables pour comprendre pourquoi certains médicaments se dosent dans le sang.
<!-- /step -->

<!-- step:title="La courbe dose-effet" -->
Quand on porte l'effet en fonction de la dose (en échelle logarithmique), on obtient une **courbe sigmoïde** : l'effet croît, puis atteint un plateau (**Emax**).

- La **DE50** (dose efficace 50) est la dose produisant **la moitié de l'effet maximal**.
- La **DL50** (dose létale 50) est la dose mortelle pour 50 % des sujets.

:::key
La DE50 se lit sur l'axe des doses, l'Emax sur l'axe des effets : ce sont deux informations différentes.
:::
<!-- /step -->

<!-- step:title="Puissance et efficacité" -->
Deux médicaments peuvent atteindre le même effet maximal à des doses très différentes.

- La **puissance** = position de la courbe sur l'axe des doses : plus la **DE50 est basse**, plus le médicament est puissant.
- L'**efficacité** = hauteur du plateau (**Emax**) : c'est l'effet maximal atteignable.

:::note
Un médicament très puissant (faible DE50) n'est pas forcément le plus efficace : un antalgique de palier 3 est plus efficace qu'un palier 1, indépendamment de sa puissance.
:::
<!-- /step -->

<!-- step:title="Index et marge thérapeutique" -->
La sécurité d'un médicament se mesure par l'écart entre dose efficace et dose toxique. L'**index thérapeutique** :

$$ IT = \frac{DL_{50}}{DE_{50}} $$

Plus l'index est **grand**, plus le médicament est maniable. Une **marge thérapeutique étroite** (index faible) signifie que la dose efficace est proche de la dose toxique.

:::clinical
Médicaments à marge étroite : **digoxine, lithium, AVK, aminosides, théophylline, immunosuppresseurs**. Ils justifient un **suivi thérapeutique pharmacologique** (dosages plasmatiques).
:::

En clinique, on raisonne plutôt en **fenêtre thérapeutique** : l'écart entre concentration minimale efficace et concentration toxique.
<!-- /step -->

<!-- step:title="Piège classique" -->
Puissance et efficacité ne se déduisent pas l'une de l'autre.

:::pitfall
Un médicament « à faible dose » n'est pas « plus fort » au sens de l'effet maximal : une faible DE50 traduit la **puissance**, pas l'**efficacité**. À l'inverse, une marge thérapeutique étroite n'a rien à voir avec la puissance : elle décrit la proximité entre effet et toxicité.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Courbe dose-effet **sigmoïde** avec plateau (**Emax**).
- **DE50** = puissance ; **Emax** = efficacité.
- **Index thérapeutique = DL50 / DE50** ; plus il est grand, plus le médicament est sûr.
- Marge étroite (digoxine, lithium, AVK…) → **suivi thérapeutique pharmacologique**.
<!-- /step -->
