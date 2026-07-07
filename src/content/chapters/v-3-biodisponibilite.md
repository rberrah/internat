---
id: "v-3-biodisponibilite"
slug: "v-3-biodisponibilite"
title: "Biodisponibilité"
description: "La fraction de dose qui atteint réellement la circulation générale, et comment on la mesure."
track: "section-V"
programItem: "V-3"
theme: "Devenir du médicament dans l'organisme"
order: 503
duration: "11 min"
tags: ["pharmacocinétique", "biodisponibilité", "AUC", "bioéquivalence"]
quiz:
  - prompt: "La biodisponibilité absolue d'une forme intraveineuse vaut…"
    options:
      - "1 (soit 100 %)"
      - "0"
      - "elle dépend du poids du patient"
    correct: 0
  - prompt: "Un fort effet de premier passage hépatique…"
    options:
      - "diminue la biodisponibilité orale"
      - "augmente la biodisponibilité orale"
      - "n'a aucun effet sur la biodisponibilité"
    correct: 0
  - prompt: "Deux spécialités sont bioéquivalentes si l'intervalle de confiance à 90 % du rapport des AUC est compris dans…"
    options:
      - "80 – 125 %"
      - "50 – 150 %"
      - "95 – 105 %"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
Administrer une dose ne garantit pas qu'elle agisse en totalité. La **biodisponibilité (F)** est la **fraction de la dose administrée qui atteint la circulation générale sous forme inchangée**.

C'est le pont entre la dose prescrite et l'exposition réelle : elle explique pourquoi les doses orales et intraveineuses d'une même molécule diffèrent.
<!-- /step -->

<!-- step:title="Définition et calcul" -->
Par définition, la voie **intraveineuse** est la référence : $F = 1$ (toute la dose est dans le sang).

La **biodisponibilité absolue** compare l'exposition (aire sous la courbe, AUC) d'une voie extravasculaire à celle de la voie IV, à dose corrigée :

$$ F = \frac{\text{AUC}_{\text{orale}}}{\text{AUC}_{\text{IV}}} \times \frac{\text{Dose}_{\text{IV}}}{\text{Dose}_{\text{orale}}} $$

:::key
L'AUC mesure l'**exposition** totale. À clairance constante, elle est proportionnelle à la **dose biodisponible** : $\text{AUC} = F \cdot \text{Dose} / CL$.
:::
<!-- /step -->

<!-- step:title="Ce qui abaisse la biodisponibilité" -->
Deux grands obstacles réduisent F par voie orale :

- une **absorption incomplète** (dissolution lente, faible solubilité, transporteurs d'efflux comme la P-glycoprotéine) ;
- l'**effet de premier passage** intestinal et **hépatique** : le médicament est métabolisé avant d'atteindre la circulation générale.

:::clinical
Certains médicaments (dérivés nitrés, propranolol, morphine) ont un premier passage si intense que la dose orale doit être bien supérieure à la dose IV pour un même effet.
:::

Les voies **sublinguale, transdermique et rectale** (en partie) **contournent le premier passage hépatique** et améliorent la biodisponibilité (ex. trinitrine sublinguale).
<!-- /step -->

<!-- step:title="Bioéquivalence et génériques" -->
La **biodisponibilité relative** compare deux formes non intraveineuses (ex. un générique et le princeps).

Deux spécialités sont **bioéquivalentes** si l'intervalle de confiance à 90 % du rapport des **AUC** et des **Cmax** est compris entre **80 % et 125 %**. C'est la base de l'interchangeabilité des génériques.
<!-- /step -->

<!-- step:title="Piège classique" -->
Une forte biodisponibilité ne signifie pas un effet rapide.

:::pitfall
F décrit **combien** de médicament arrive, pas **à quelle vitesse**. Une gélule à libération prolongée peut avoir la même biodisponibilité qu'une forme immédiate mais un pic bien plus tardif et plus bas. Ne confondez pas **quantité absorbée (F)** et **vitesse d'absorption (Tmax, Cmax)**.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- F = fraction de la dose atteignant la circulation sous forme inchangée ; **F = 1 en IV**.
- Biodisponibilité absolue = rapport des AUC (orale / IV), corrigé des doses.
- Elle est abaissée par l'absorption incomplète et le **premier passage hépatique**.
- Bioéquivalence des génériques : AUC et Cmax dans **80 – 125 %**.
<!-- /step -->
