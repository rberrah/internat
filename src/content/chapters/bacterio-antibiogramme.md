---
id: "bacterio-antibiogramme"
slug: "bacterio-antibiogramme"
title: "Antibiogramme, CMI et indices PK/PD"
description: "De la CMI à la catégorisation S/I/R, et pourquoi le schéma d'administration dépend de la famille."
track: "section-IV"
programItem: "IV-10"
theme: "Bactériologie"
order: 10
duration: "13 min"
tags: ["bactériologie", "antibiogramme", "CMI", "PK/PD"]
glossary: ["CMI", "Antibiogramme", "%T > CMI"]
prerequisites: ["pharmaco-pk-base"]
quiz:
  - prompt: "La CMI est…"
    options:
      - "la plus faible concentration d'antibiotique inhibant la croissance visible du germe"
      - "la concentration maximale tolérée par le patient"
      - "la dose administrée"
    correct: 0
  - prompt: "Une bêta-lactamine est un antibiotique surtout…"
    options:
      - "temps-dépendant (%T > CMI)"
      - "concentration-dépendant (Cmax/CMI)"
      - "sans relation PK/PD"
    correct: 0
  - prompt: "La catégorie S / I / R résulte de la comparaison de la CMI…"
    options:
      - "au poids du patient"
      - "aux concentrations critiques (breakpoints)"
      - "à la demi-vie"
    correct: 1
---

<!-- step:title="Pourquoi ce chapitre" -->
Prescrire un antibiotique, ce n'est pas seulement choisir **la bonne molécule** : c'est aussi choisir **le bon schéma** (dose, rythme, durée de perfusion). Les deux décisions reposent sur un même socle : la **CMI** du germe et la relation **PK/PD** de la famille.

On part de la mesure de sensibilité, on aboutit à une règle d'administration.
<!-- /step -->

<!-- step:title="CMI et catégorisation S/I/R" -->
La **CMI** (concentration minimale inhibitrice) est la plus faible concentration d'antibiotique qui **inhibe la croissance visible** du germe. On la mesure par dilutions (ou on l'estime par le **diamètre d'inhibition** en diffusion : plus le diamètre est grand, plus la CMI est basse).

On la compare ensuite aux **concentrations critiques** (breakpoints, EUCAST) pour catégoriser la souche :

- **S** — sensible (à posologie standard) ;
- **I** — sensible à **forte exposition** (posologie augmentée / site favorable) ;
- **R** — résistant (CMI au-dessus de la concentration critique supérieure).

:::key
Diamètre et CMI varient **en sens inverse** : grand diamètre = CMI basse = souche sensible. Le « S/I/R » traduit la CMI en décision clinique, il ne la remplace pas.
:::
<!-- /step -->

<!-- step:title="Temps-dépendant ou concentration-dépendant ?" viz="Antibiogramme" -->
L'efficacité d'un antibiotique se prédit par un **indice PK/PD** qui rapporte la concentration à la CMI. Trois profils :

- **%T > CMI** (temps au-dessus de la CMI) — **bêta-lactamines** : ce qui compte, c'est **le temps** passé au-dessus de la CMI ;
- **Cmax/CMI** (pic sur CMI) — **aminosides** : ce qui compte, c'est **la hauteur** du pic ;
- **AUC/CMI** (exposition sur CMI) — **fluoroquinolones**, glycopeptides.

:::howto
**Comment lire le schéma.** La courbe bleue est la concentration au cours d'un intervalle de dose ; la ligne rouge est la CMI. Choisissez une famille en haut : l'indice correspondant est mis en avant. Baissez la **demi-vie** ou allongez l'**intervalle** et regardez le **%T > CMI** chuter — c'est l'argument des **perfusions prolongées** de bêta-lactamines. Montez le **pic** pour un aminoside : le **Cmax/CMI** grimpe.
:::
<!-- /step -->

<!-- step:title="En pratique" -->
- **Bêta-lactamine** sur un germe à CMI limite : fractionner les doses ou **prolonger la perfusion** augmente le %T > CMI sans changer la dose totale.
- **Aminoside** : une **dose unique journalière** élevée maximise le Cmax/CMI et, grâce à l'effet post-antibiotique, limite la toxicité (moins de temps à concentration résiduelle).
- **Fluoroquinolone** sur un bacille à Gram négatif : cible classique **AUC/CMI ≈ 125**.
- **Glycopeptide** (vancomycine) : indice **AUC/CMI** (cible ≈ 400), d'où l'intérêt du **suivi des concentrations résiduelles**.

:::clinical
La CMI seule ne dit pas si « ça va marcher » : il faut la **concentration au site d'infection** (LCR, os, urines…) et l'état du patient. Un même germe « S » peut être un échec si le site est mal pénétré.
:::
<!-- /step -->

<!-- step:title="Piège classique" -->
« Sensible » n'est pas « efficace à tout prix ».

:::pitfall
Deux erreurs fréquentes : croire qu'**augmenter la dose** rattrape toujours une CMI élevée (faux pour un antibiotique **temps-dépendant** : il faut jouer sur le **rythme**, pas seulement la dose) ; et comparer des **CMI de familles différentes** — une CMI de 2 mg/L peut être « sensible » pour l'un et « résistant » pour l'autre, car les concentrations critiques diffèrent.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- CMI = plus faible concentration inhibant le germe ; diamètre ↔ CMI en sens inverse.
- S / I / R = CMI comparée aux concentrations critiques (breakpoints EUCAST).
- Bêta-lactamines → %T > CMI ; aminosides → Cmax/CMI ; fluoroquinolones → AUC/CMI.
- Le schéma d'administration découle de l'indice PK/PD de la famille.
<!-- /step -->
