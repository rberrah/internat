---
id: "pharmaco-pk-base"
slug: "pharmaco-pk-base"
title: "Paramètres pharmacocinétiques de base"
description: "Clairance, volume de distribution, demi-vie et biodisponibilité : les quatre chiffres qui gouvernent une dose."
track: "pharmaco"
order: 10
duration: "12 min"
tags: ["pharmacologie", "pharmacocinétique", "clairance", "demi-vie"]
glossary: ["Clairance", "Volume de distribution", "Demi-vie", "Biodisponibilité"]
quiz:
  - prompt: "La clairance (CL) représente…"
    options:
      - "le volume de plasma totalement épuré par unité de temps"
      - "la quantité totale de médicament dans le corps"
      - "la vitesse d'absorption"
    correct: 0
  - prompt: "La demi-vie d'élimination dépend…"
    options:
      - "de la clairance seule"
      - "du volume seul"
      - "à la fois du volume et de la clairance"
    correct: 2
  - prompt: "La biodisponibilité absolue F d'une forme orale se calcule en comparant…"
    options:
      - "son AUC à l'AUC de la voie IV"
      - "sa Cmax à la CMI"
      - "le volume au poids corporel"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
Derrière chaque adaptation de posologie se cachent quatre paramètres : **clairance**, **volume de distribution**, **demi-vie** et **biodisponibilité**. Les comprendre, c'est pouvoir raisonner une dose plutôt que la mémoriser.

C'est aussi le socle de la PK/PD des anti-infectieux, des adaptations en insuffisance rénale, et du suivi thérapeutique.
<!-- /step -->

<!-- step:title="Les quatre paramètres" -->
- **Clairance (CL)** — le volume de plasma **totalement épuré** du médicament par unité de temps (L/h). C'est le paramètre d'**élimination**.
- **Volume de distribution (V)** — un volume **théorique** reliant la quantité dans le corps à la concentration plasmatique : $C = A/V$. Grand V = molécule qui « part » dans les tissus.
- **Demi-vie (t½)** — le temps pour que la concentration **diminue de moitié**.
- **Biodisponibilité (F)** — la **fraction** de la dose qui atteint la circulation générale ($F = 1$ en IV).

:::key
Deux paramètres **indépendants et primaires** : CL (élimination) et V (distribution). La demi-vie, elle, en **découle** — elle n'est pas primaire.
:::
<!-- /step -->

<!-- step:title="Comment ils se combinent" -->
Après un bolus intraveineux, la concentration part de $C_0 = \text{Dose}/V$ puis décroît. La constante d'élimination et la demi-vie s'écrivent :

$$ k_e = \frac{CL}{V}, \qquad t_{1/2} = \frac{\ln 2 \cdot V}{CL} \approx \frac{0{,}693\,V}{CL} $$

L'**exposition** totale ne dépend que de la clairance :

$$ \text{AUC} = \frac{F \cdot \text{Dose}}{CL} $$

:::math
Lisez la demi-vie comme un **rapport** : elle **augmente** si le volume grandit **ou** si la clairance baisse. Une t½ allongée en insuffisance rénale vient d'une **CL** effondrée, pas d'un volume qui change.
:::
<!-- /step -->

<!-- step:title="En pratique" -->
- CL = 6 L/h, V = 30 L → $t_{1/2} = 0{,}693 \times 30 / 6 \approx 3{,}5$ h.
- Doubler la dose **double l'AUC** (CL inchangée) mais **ne change pas** la demi-vie.
- En insuffisance rénale, un médicament à élimination rénale voit sa **CL chuter** → AUC et t½ augmentent → il faut **réduire la dose** ou **espacer** les prises.

:::clinical
Pour atteindre vite l'équilibre, on utilise parfois une **dose de charge** (elle dépend du **volume** : $\text{Dose de charge} = C_{cible} \times V / F$), puis une **dose d'entretien** (elle dépend de la **clairance**).
:::
<!-- /step -->

<!-- step:title="Piège classique" -->
La demi-vie n'est pas une propriété « magique ».

:::pitfall
Une même demi-vie peut cacher des situations opposées : grand volume **ou** faible clairance. Avant d'interpréter une t½, demandez-vous **quel paramètre primaire** a changé — c'est lui qui guide l'adaptation (la clairance pour l'entretien, le volume pour la charge).
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- CL et V sont **primaires** et indépendants ; la demi-vie en **découle** ($t_{1/2} = 0{,}693\,V/CL$).
- L'exposition ne dépend que de la clairance : $\text{AUC} = F\cdot\text{Dose}/CL$.
- Dose de charge ← volume ; dose d'entretien ← clairance.
- En insuffisance d'organe, c'est la **clairance** qui commande l'adaptation.
<!-- /step -->
