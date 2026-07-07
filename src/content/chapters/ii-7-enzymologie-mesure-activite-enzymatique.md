---
id: "ii-7-enzymologie-mesure-activite-enzymatique"
slug: "ii-7-enzymologie-mesure-activite-enzymatique"
title: "Mesure d'une activité enzymatique"
description: "Vitesse initiale, conditions optimales, unités et dosage spectrophotométrique."
track: "section-II"
programItem: "II-7"
theme: "Enzymologie"
order: 207
duration: "12 min"
tags: ["enzymologie", "activité enzymatique", "Michaelis-Menten", "unité internationale"]
quiz:
  - prompt: "Une unité internationale (UI) d'enzyme correspond à…"
    options:
      - "la transformation d'une micromole de substrat par minute, en conditions optimales"
      - "la transformation d'une mole de substrat par seconde"
      - "la masse d'enzyme contenue dans 1 mL de réactif"
    correct: 0
  - prompt: "Pour que la vitesse mesurée reflète la quantité d'enzyme présente, on travaille…"
    options:
      - "à concentration saturante en substrat (cinétique d'ordre 0)"
      - "à très faible concentration en substrat (ordre 1)"
      - "en laissant la réaction aller jusqu'à épuisement du substrat"
    correct: 0
  - prompt: "La constante de Michaelis Km correspond à la concentration en substrat pour laquelle…"
    options:
      - "la vitesse est égale à la moitié de la vitesse maximale"
      - "la vitesse est maximale"
      - "l'enzyme est totalement dénaturée"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" viz="MichaelisMenten" -->
Doser une enzyme, ce n'est pas peser une protéine : on mesure son **activité catalytique**, c'est-à-dire la **vitesse** de la réaction qu'elle catalyse. Encore faut-il que cette vitesse soit **proportionnelle** à la quantité d'enzyme — ce qui impose des conditions précises.
<!-- /step -->

<!-- step:title="La vitesse initiale" -->
La vitesse se définit par la quantité de substrat consommé (ou de produit formé) par unité de temps :

$$ V = -\frac{d[S]}{dt} = \frac{d[P]}{dt} $$

On mesure la **vitesse initiale (Vi)**, en tout début de réaction : le substrat n'a quasiment pas diminué, il n'y a pas encore de produit inhibiteur, et la vitesse est **constante**.

:::key
Dans ces conditions, **Vi est proportionnelle à la concentration d'enzyme** : c'est ce qui permet de doser l'enzyme.
:::
<!-- /step -->

<!-- step:title="Travailler à substrat saturant" -->
La relation vitesse/substrat suit **Michaelis-Menten** :

$$ V = \frac{V_{max}\,[S]}{K_m + [S]}, \qquad K_m = [S] \text{ quand } V = \frac{V_{max}}{2} $$

- À **faible [S]** : V ∝ [S] (**ordre 1**), la vitesse dépend du substrat.
- À **[S] saturante** : V ≈ Vmax (**ordre 0**), indépendante de [S].

:::key
On mesure toujours en **excès de substrat** : la vitesse atteint **Vmax**, qui ne dépend plus que de la quantité d'enzyme. Le **Km** renseigne sur l'affinité (Km faible = forte affinité).
:::
<!-- /step -->

<!-- step:title="Contrôler les conditions" -->
L'activité dépend fortement du milieu ; on impose des **conditions optimales** :

- **Température** : l'activité croît jusqu'à un optimum (souvent 37 °C), puis chute par **dénaturation**.
- **pH** : optimum propre à chaque enzyme ; les valeurs extrêmes ionisent ou dénaturent le site actif.
- **Force ionique** et **cofacteurs / activateurs** (ions métalliques) présents en quantité adéquate.

:::pitfall
Une mesure faite hors des conditions optimales (T, pH, [S] non saturante) **sous-estime** l'activité et n'est plus proportionnelle à la quantité d'enzyme.
:::
<!-- /step -->

<!-- step:title="Les unités enzymatiques" -->
- **Unité internationale (UI)** : quantité d'enzyme transformant **1 µmol de substrat par minute** (en conditions optimales).
- **Katal (unité SI)** : quantité transformant **1 mol de substrat par seconde**.
- **Activité spécifique** : UI **par mg de protéine** — elle mesure le **degré de pureté** d'une préparation.
<!-- /step -->

<!-- step:title="Le dosage spectrophotométrique" -->
En pratique, on suit la réaction par **spectrophotométrie**, en mesurant l'absorbance selon la loi de **Beer-Lambert** :

$$ DO = \varepsilon \times C \times l $$

:::howto
La méthode la plus répandue suit l'apparition ou la disparition du **NADH**, qui absorbe à **340 nm**. On mesure la pente ΔDO/Δt, d'où l'activité :
:::

$$ A\ (\text{UI/L}) = \frac{\Delta DO}{\Delta t} \times \frac{1}{\varepsilon \cdot l} \times \frac{V_t}{V_e} \times 10^{6} $$
<!-- /step -->

<!-- step:title="À retenir" -->
- On mesure une **vitesse initiale**, proportionnelle à la quantité d'enzyme.
- Conditions : **[S] saturante** (ordre 0 → Vmax), T et pH **optimaux**.
- $V = V_{max}[S]/(K_m+[S])$ ; **Km** = [S] pour V = Vmax/2 (affinité).
- **UI** = µmol/min ; **katal** = mol/s ; activité spécifique = UI/mg (pureté).
- Dosage par **Beer-Lambert**, suivi du **NADH à 340 nm**.
<!-- /step -->
