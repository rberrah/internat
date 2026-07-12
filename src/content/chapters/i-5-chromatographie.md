---
id: "i-5-chromatographie"
slug: "i-5-chromatographie"
title: "Méthodes chromatographiques : CPG et CL"
description: "Séparer les constituants d'un mélange par partage entre phase mobile et phase stationnaire, puis quantifier la qualité de la séparation."
track: "section-I"
programItem: "I-5"
theme: "Méthodes analytiques"
order: 105
duration: "13 min"
tags: ["chimie analytique", "chromatographie", "CPG", "CLHP", "séparation"]
level: "intermediate"
sources: ["programme-internat", "skoog", "pharmacopee-eur", "ich-q2"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Le facteur de rétention k' d'un composé se calcule par…"
    options:
      - "(tR − t0) / t0"
      - "tR / (tR − t0)"
      - "t0 / tR"
    correct: 0
  - prompt: "La résolution Rs entre deux pics augmente surtout quand…"
    options:
      - "le nombre de plateaux théoriques N augmente"
      - "la largeur des pics augmente"
      - "le facteur de rétention devient nul"
    correct: 0
  - prompt: "La CPG s'adresse préférentiellement à des composés…"
    options:
      - "volatils et thermostables"
      - "ioniques et thermolabiles"
      - "de très haut poids moléculaire"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
La chromatographie est **la** méthode de séparation de la chimie analytique : elle isole les constituants d'un mélange avant de les identifier et de les doser. CPG et CLHP reposent sur le **même principe** et les **mêmes paramètres** — les comprendre une fois suffit.
<!-- /step -->

<!-- step:title="Principe" -->
Les composés se répartissent entre une **phase mobile** (gaz en CPG, liquide en CL) qui les entraîne et une **phase stationnaire** qui les retient. Plus un soluté interagit avec la phase stationnaire, plus il est **retardé** : il sort de la colonne à un **temps de rétention** $t_R$ propre.

:::key
Le temps mort $t_0$ correspond à un composé non retenu (vitesse de la phase mobile). La rétention se mesure par le **facteur de rétention** :
$$ k' = \frac{t_R - t_0}{t_0} $$
Grandeur sans dimension, elle permet de comparer la rétention entre systèmes différents.
:::
<!-- /step -->

<!-- step:title="Sélectivité et efficacité" -->
- **Sélectivité** $\alpha = k'_2 / k'_1$ (avec $\alpha > 1$) : écart **thermodynamique** entre deux pics adjacents.
- **Efficacité** $N$ (nombre de plateaux théoriques) : finesse des pics, paramètre **cinétique**.

$$ N = 5{,}54 \left(\frac{t_R}{\delta}\right)^2 = 16\left(\frac{t_R}{w}\right)^2 $$

où $\delta$ est la largeur à mi-hauteur et $w$ la largeur à la base. En pratique, on recherche un $k'$ compris entre **1 et 10** (compromis entre résolution et durée d'analyse).
<!-- /step -->

<!-- step:title="Résolution" viz="Chromatographie" -->
La **résolution** $R_s$ mesure la qualité de séparation de deux pics :

$$ R_s = \frac{2\,(t_{R2}-t_{R1})}{w_1 + w_2} = \frac{\sqrt{N}}{4}\cdot\frac{\alpha-1}{\alpha}\cdot\frac{k'_2}{1+k'_2} $$

:::key
$R_s \geq 1{,}5$ = séparation dite « de base ». On l'améliore en jouant sur trois leviers : **N** (colonne plus longue/efficace), **α** (nature des phases) et **k'** (composition de l'éluant, température).
:::

L'efficacité optimale correspond au minimum de la courbe de **van Deemter** : $H = A + \dfrac{B}{u} + C\,u$ (hauteur de plateau en fonction de la vitesse $u$).

:::howto
**Comment lire le schéma.** Le chromatogramme montre trois solutés élués et la résolution calculée entre les pics voisins. Augmentez le **facteur de rétention $k'$ du soluté B** pour éloigner son sommet des autres, puis le nombre de **plateaux $N$** pour affiner les pics. Vous constaterez que les deux leviers font monter $R_s$, mais différemment : $k'$ (et $\alpha$) écarte les sommets, $N$ resserre les pics — et il faut $R_s \geq 1{,}5$ pour une séparation de base.
:::
<!-- /step -->

<!-- step:title="CPG contre CL" -->
- **CPG** : phase mobile = gaz vecteur, colonnes **capillaires**, composés **volatils et thermostables**, détection (FID, SM).
- **CLHP** : phase mobile = liquide sous pression, colonnes remplies de fines particules, composés **non volatils ou thermolabiles**. Phase **inverse** (C18) la plus courante : les composés apolaires sont les plus retenus.
<!-- /step -->

<!-- step:title="Piege classique" -->
:::pitfall
Ne confondez pas les paramètres : $\alpha$ éloigne les **sommets** (thermodynamique), $N$ **affine** les pics (cinétique). Une résolution insuffisante peut être corrigée par l'un OU l'autre. Augmenter $N$ (colonne plus longue) coûte du temps d'analyse ; agir sur $\alpha$ est souvent plus efficace.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Séparation par **partage** entre phase mobile et phase stationnaire.
- $k' = (t_R - t_0)/t_0$ ; $\alpha = k'_2/k'_1$ ; $N = 16\,(t_R/w)^2$.
- Résolution $R_s$ = pilotée par $N$, $\alpha$ et $k'$ ; $R_s \geq 1{,}5$ visé.
- CPG = volatils/thermostables ; CLHP = non volatils/thermolabiles.
<!-- /step -->
