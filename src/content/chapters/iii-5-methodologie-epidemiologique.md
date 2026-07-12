---
id: "iii-5-methodologie-epidemiologique"
slug: "iii-5-methodologie-epidemiologique"
title: "Méthodologie épidémiologique"
description: "Descriptive, étiologique, évaluative, dépistage : types d'enquêtes et mesures de risque."
track: "section-III"
programItem: "III-5"
theme: "Santé publique"
order: 305
duration: "16 min"
tags: ["santé publique", "épidémiologie", "risque relatif", "odds ratio", "dépistage"]
level: "intermediate"
sources: ["ancelle", "schwartz", "altman", "spf"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Une enquête cas-témoins fournit comme mesure d'association…"
    options:
      - "un odds ratio"
      - "un risque relatif"
      - "une incidence"
    correct: 0
  - prompt: "Pour étudier une maladie rare, l'enquête la plus adaptée est…"
    options:
      - "l'enquête cas-témoins"
      - "l'enquête de cohorte prospective"
      - "l'enquête transversale"
    correct: 0
  - prompt: "Chez les exposés, la fraction étiologique du risque vaut…"
    options:
      - "(RR − 1) / RR"
      - "RR − 1"
      - "RR / (RR − 1)"
    correct: 0
---

<!-- step:title="Les quatre épidémiologies" -->
- **Descriptive** : décrit l'état de santé d'une population (incidence, prévalence, mortalité) — le *qui, où, quand*.
- **Étiologique** : recherche et quantifie les **causes** et **facteurs de risque** (le *pourquoi*).
- **Évaluative** : mesure l'**efficacité** des interventions (essais, dépistage, programmes).
- **Dépistage** : détecte une maladie à un stade précoce dans une population apparemment saine.

:::key
Vocabulaire clé : le **danger** est intrinsèque à un agent ; le **risque** est une **probabilité** (de maladie) ; l'**exposition** est le contact avec le facteur.
:::
<!-- /step -->

<!-- step:title="Les enquetes epidemiologiques" -->
- **Cohorte** — longitudinale : on suit des sujets **exposés vs non exposés** initialement indemnes → **incidence**, **risque relatif**. Prospective (longue, coûteuse) ou rétrospective. Peu adaptée aux maladies rares.
- **Cas-témoins** — on compare l'exposition **passée** de malades (cas) et de non-malades (témoins) → **odds ratio**. Rétrospective, rapide, idéale pour maladies **rares**.
- **Transversale** — population à un instant donné → **prévalence** (ne prouve pas la chronologie exposition-maladie) ; rappel : **prévalence ≈ incidence × durée** de la maladie.
<!-- /step -->

<!-- step:title="Mesures d association" viz="RisqueRelatifOR" -->
Elles quantifient la **force** du lien facteur-maladie par un **rapport de fréquences** :

$$ RR = \frac{P(M/E^+)}{P(M/E^-)}, \qquad OR = \frac{a \cdot d}{b \cdot c} $$

:::math
Dans un tableau 2×2 (a = exposés malades, b = exposés sains, c = non-exposés malades, d = non-exposés sains), le **RR** exige une incidence (cohorte). L'**OR** s'obtient en cas-témoins et **approche le RR** quand la maladie est rare.
:::

:::howto
**Comment lire le schéma.** Le schéma affiche le **tableau 2×2** (a, b, c, d) et recalcule en direct le **RR** et l'**OR**. Modifiez les effectifs de malades pour rendre la maladie de plus en plus **rare**, et surveillez l'écart entre les deux indices : il se réduit jusqu'à les confondre. C'est la démonstration visuelle de la règle d'internat — l'**OR approche le RR quand la maladie est rare**, et il s'en éloigne (en le surestimant) dès qu'elle devient fréquente.
:::

Un rapport **> 1** signale un facteur de risque, **< 1** un facteur protecteur, **= 1** l'absence d'association (à confirmer par l'intervalle de confiance à 95 %).
<!-- /step -->

<!-- step:title="Mesures d impact" -->
Elles répondent aux **questions de santé publique** : combien de cas éviterait-on ?

- **Risque attribuable** (excès de risque) : $ RA = P(M/E^+) - P(M/E^-) $.
- **Fraction étiologique du risque (FER)** : proportion de cas dus au facteur.

$$ FER_{\text{exposés}} = \frac{RR - 1}{RR}, \qquad FER_{\text{population}} = \frac{P_E(RR-1)}{P_E(RR-1)+1} $$

Ces mesures **n'ont de sens que si le lien est causal** et dépendent de la **prévalence de l'exposition**.
<!-- /step -->

<!-- step:title="Causalité (critères de Hill)" -->
Une association statistique n'est pas une preuve de cause. On l'argumente par les **critères de Hill** :

- **Temporalité** (la cause précède l'effet) — le seul indispensable ;
- **Force** de l'association, **relation dose-réponse** ;
- **Constance** (reproductibilité), **spécificité** ;
- **Plausibilité biologique** et **cohérence expérimentale** ;
- réversibilité : la suppression du facteur **diminue** l'incidence.
<!-- /step -->

<!-- step:title="Dépistage" -->
Un test de dépistage se juge sur ses **qualités intrinsèques** et son **rendement** :

:::key
**Sensibilité (Se)** = proportion de malades bien détectés ; **Spécificité (Sp)** = proportion de sains bien classés. La **VPP** et la **VPN** dépendent en plus de la **prévalence** dans la population.
:::

Un bon test de dépistage est **très sensible** (peu de faux négatifs) ; la confirmation diagnostique repose ensuite sur un test **spécifique**.
<!-- /step -->

<!-- step:title="À retenir" -->
- Cohorte → **incidence** et **RR** ; cas-témoins → **OR** (maladies rares) ; transversale → **prévalence**.
- $OR \approx RR$ quand la maladie est rare ; toujours interpréter avec l'**IC 95 %**.
- Impact : risque attribuable et **FER** = $(RR-1)/RR$ chez l'exposé, causalité requise.
- Causalité argumentée par **Hill** (temporalité, force, dose-réponse, plausibilité).
- Dépistage : Se/Sp intrinsèques ; VPP/VPN dépendent de la prévalence.
<!-- /step -->
