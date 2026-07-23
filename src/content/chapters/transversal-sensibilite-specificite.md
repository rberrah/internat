---
id: "transversal-sensibilite-specificite"
slug: "transversal-sensibilite-specificite"
title: "Sensibilité, spécificité, VPP/VPN"
description: "Les qualités d'un test, du dépistage statistique au diagnostic biologique."
track: "transversal"
order: 60
duration: "11 min"
tags: ["transversal", "sensibilité", "spécificité", "dépistage"]
prerequisites: []
glossary: []
level: "beginner"
sources: ["ancelle", "altman", "remic"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "La sensibilité d'un test est la proportion de…"
    options:
      - "malades correctement détectés (peu de faux négatifs)"
      - "sujets sains correctement classés (peu de faux positifs)"
      - "sujets testés positifs réellement atteints"
    correct: 0
  - prompt: "La valeur prédictive positive (VPP) dépend, en plus du test, de…"
    options:
      - "la prévalence de la maladie dans la population"
      - "la sensibilité seule, indépendamment de la prévalence"
      - "le nombre de nouveaux cas sur la période"
    correct: 0
  - prompt: "Un bon test de dépistage doit être avant tout…"
    options:
      - "très sensible (ne pas manquer de malades)"
      - "très spécifique (ne pas générer de faux positifs)"
      - "doté d'une forte valeur prédictive positive"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
Évaluer un test — de dépistage, de diagnostic biologique ou d'un marqueur — repose sur quatre notions : **sensibilité, spécificité, VPP, VPN**. Les confondre fait commettre des contresens fréquents.
<!-- /step -->

<!-- step:title="Le tableau 2x2" -->
On croise le **test** (positif/négatif) et la **maladie** (présente/absente) :

- **VP** vrais positifs, **FN** faux négatifs, **VN** vrais négatifs, **FP** faux positifs.

:::key
**Sensibilité** = VP / (VP + FN) : proportion de **malades détectés**. **Spécificité** = VN / (VN + FP) : proportion de **sains bien classés**. Ce sont des qualités **intrinsèques** du test (indépendantes de la prévalence).
:::
<!-- /step -->

<!-- step:title="Valeurs predictives" viz="ValeursPredictives" -->
Elles répondent à la vraie question du clinicien : *ce résultat, que vaut-il ?*

- **VPP** = VP / (VP + FP) : probabilité d'être malade si le test est **positif** ;
- **VPN** = VN / (VN + FN) : probabilité d'être sain si le test est **négatif**.

:::pitfall
Contrairement à Se/Sp, la **VPP et la VPN dépendent de la prévalence** : un test très spécifique appliqué à une maladie rare donne beaucoup de **faux positifs** relatifs (VPP basse). C'est le piège du dépistage de masse.
:::

:::howto
**Comment lire le schéma.** Le tableau applique le test à 1 000 sujets. Laissez **Se et Sp à 95 %** — un excellent test — et faites descendre la **prévalence** : Se et Sp ne bougent pas (elles sont *intrinsèques*), mais la **VPP s'effondre**. À une prévalence de 1 ‰, moins de 2 % des tests positifs correspondent à un vrai malade. C'est exactement le piège dénoncé ci-dessus.
:::
<!-- /step -->

<!-- step:title="Depistage ou confirmation" -->
- Un **test de dépistage** doit être **très sensible** (ne pas manquer de malades) — quitte à générer des faux positifs.
- Un **test de confirmation** doit être **très spécifique** (éliminer les faux positifs).

:::clinical
Exemple : le VIH se **dépiste** par un test combiné très sensible (ELISA), puis se **confirme** par un test spécifique (Western blot).
:::
<!-- /step -->

<!-- step:title="A retenir" -->
- Sensibilité = malades détectés ; spécificité = sains bien classés (qualités intrinsèques).
- VPP/VPN = valeur d'un résultat, **dépendantes de la prévalence**.
- Dépistage → **sensible** ; confirmation → **spécifique**.
- Maladie rare : beaucoup de faux positifs relatifs malgré une bonne spécificité.
<!-- /step -->
