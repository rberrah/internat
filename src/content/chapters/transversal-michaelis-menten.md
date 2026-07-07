---
id: "transversal-michaelis-menten"
slug: "transversal-michaelis-menten"
title: "Michaelis-Menten : de l'enzyme à la pharmacocinétique"
description: "La cinétique de saturation, la même en enzymologie et pour une élimination saturable."
track: "transversal"
order: 20
duration: "12 min"
tags: ["transversal", "michaelis-menten", "enzymologie", "saturation"]
prerequisites: ["transversal-demi-vie"]
glossary: ["Demi-vie"]
quiz:
  - prompt: "Dans l'équation de Michaelis-Menten, Km correspond à…"
    options:
      - "la concentration de substrat pour laquelle v = Vmax/2"
      - "la vitesse maximale"
      - "la concentration à saturation totale"
    correct: 0
  - prompt: "Quand [S] est très supérieur à Km, la vitesse…"
    options:
      - "atteint un plateau (Vmax) : cinétique d'ordre 0"
      - "augmente indéfiniment"
      - "devient nulle"
    correct: 0
  - prompt: "Un médicament dont l'élimination sature (phénytoïne) a une PK…"
    options:
      - "non linéaire : l'AUC augmente plus que proportionnellement à la dose"
      - "strictement linéaire"
      - "sans aucun risque de surdosage"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
On rencontre la courbe de **Michaelis-Menten** en enzymologie… puis on la retrouve, identique, en pharmacocinétique pour une **élimination saturable**, et encore pour les **transporteurs** membranaires.

Le point commun : un **nombre limité de sites** (enzyme, transporteur) qui finissent par **saturer**.
<!-- /step -->

<!-- step:title="Une hyperbole de saturation" viz="MichaelisMenten" -->
La vitesse dépend de la concentration selon une **hyperbole** :

$$ v = \frac{V_{max}\,[S]}{K_m + [S]} $$

- **Vmax** : vitesse maximale (tous les sites occupés) ;
- **Km** : la concentration pour laquelle $v = V_{max}/2$ ; c'est une mesure d'**affinité** (petit Km = forte affinité).

:::howto
**Comment lire le schéma.** Quand $[S] \ll K_m$, la courbe est quasi **linéaire** : la vitesse est proportionnelle à $[S]$ (**ordre 1**). Quand $[S] \gg K_m$, elle **plafonne** à Vmax (**ordre 0**). Faites varier Km : il déplace le « coude » de la courbe.
:::
<!-- /step -->

<!-- step:title="La même chose, deux fois" -->
- **Enzymologie** : $v$ = vitesse de la réaction enzymatique. Km et Vmax caractérisent l'enzyme ; l'inhibition compétitive **augmente Km** (sans changer Vmax), l'inhibition non compétitive **abaisse Vmax**. En pratique, Km et Vmax se déterminent par **linéarisation** (double inverse de **Lineweaver-Burk** : $1/v$ en fonction de $1/[S]$).
- **Pharmacocinétique** : la vitesse d'**élimination** d'un médicament métabolisé par une enzyme suit la même loi. La clairance devient $CL = \dfrac{V_{max}}{K_m + C}$ : elle **diminue** quand la concentration monte.

:::key
À faible concentration ($C \ll K_m$), l'élimination est d'**ordre 1** (demi-vie constante, PK linéaire). À forte concentration ($C \gg K_m$), elle est d'**ordre 0** (vitesse fixe, la « demi-vie » n'a plus de sens).
:::
<!-- /step -->

<!-- step:title="Le danger clinique" -->
Trois médicaments classiques ont une élimination **saturable** : la **phénytoïne**, l'**éthanol** (ordre 0 dès de faibles doses), l'**aspirine** à forte dose.

:::clinical
Conséquence : quand l'enzyme sature, une **petite** augmentation de dose provoque une **grande** augmentation de concentration (l'AUC croît plus que proportionnellement). Le risque de **surdosage** est majeur — d'où le suivi thérapeutique de la phénytoïne.
:::
<!-- /step -->

<!-- step:title="Piège classique" -->
:::pitfall
Ne confondez pas les deux régimes. On calcule une demi-vie et on double une dose « comme d'habitude »… sauf que si l'élimination est saturée (ordre 0), la concentration s'envole. La linéarité de la PK n'est **pas** garantie : elle suppose $C \ll K_m$.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Michaelis-Menten = cinétique de saturation : $v = V_{max}[S]/(K_m + [S])$.
- Km = $[S]$ à demi-Vmax (affinité) ; $[S] \ll K_m$ → ordre 1 ; $[S] \gg K_m$ → ordre 0.
- Enzymo et PK : la même loi ; l'élimination saturable donne une **PK non linéaire**.
- Phénytoïne, éthanol, aspirine : risque de surdosage à la saturation.
<!-- /step -->
