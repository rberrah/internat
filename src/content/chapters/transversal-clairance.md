---
id: "transversal-clairance"
slug: "transversal-clairance"
title: "La clairance : du rein au médicament"
description: "Un même concept d'épuration, de la fonction rénale à la pharmacocinétique."
track: "transversal"
order: 40
duration: "11 min"
tags: ["transversal", "clairance", "rein", "pharmacocinétique"]
prerequisites: ["transversal-demi-vie"]
glossary: ["Clairance"]
quiz:
  - prompt: "La clairance d'une substance représente…"
    options:
      - "le volume de plasma totalement épuré par unité de temps"
      - "la quantité totale de la substance"
      - "sa concentration plasmatique"
    correct: 0
  - prompt: "L'exposition (AUC) d'un médicament dépend surtout de…"
    options:
      - "sa clairance (AUC = F·Dose/CL)"
      - "sa seule demi-vie"
      - "sa masse molaire"
    correct: 0
  - prompt: "La clairance de la créatinine sert à estimer…"
    options:
      - "le débit de filtration glomérulaire (DFG)"
      - "la volémie"
      - "la kaliémie"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
« Clairance » revient en physiologie rénale, en biologie médicale et en pharmacocinétique. C'est toujours la **même idée** : le volume de plasma **totalement épuré** d'une substance par unité de temps.
<!-- /step -->

<!-- step:title="La definition commune" -->
$$ CL = \frac{\text{quantité éliminée par unité de temps}}{\text{concentration plasmatique}} $$

:::key
La clairance est un **débit** (mL/min ou L/h). Elle mesure une **capacité d'épuration**, indépendamment de la quantité présente. Elle s'additionne par voie : $CL_{tot} = CL_{rénale} + CL_{hépatique} + \dots$
:::
<!-- /step -->

<!-- step:title="La clairance renale" -->
Le rein épure le plasma par **filtration glomérulaire** (± sécrétion − réabsorption). La **clairance de la créatinine** estime le **DFG** car la créatinine est surtout filtrée :

- formule de **Cockcroft** : $(140 - \text{âge}) \times \text{poids} \times k / \text{créatininémie}$ ;
- ou CKD-EPI (référence actuelle).

:::clinical
Un DFG abaissé impose d'**adapter la posologie** des médicaments à élimination rénale (aminosides, certains anticoagulants).
:::
<!-- /step -->

<!-- step:title="La clairance dun medicament" -->
Pour un médicament, la clairance relie la constante d'élimination au volume, et gouverne l'**exposition** :

$$ k_e = \frac{CL}{V}, \qquad \text{AUC} = \frac{F \cdot \text{Dose}}{CL} $$

:::math
L'AUC (exposition) ne dépend **que** de la clairance et de la dose biodisponible. La demi-vie, elle, dépend **aussi** du volume ($t_{1/2} = 0{,}693\,V/CL$).
:::
<!-- /step -->

<!-- step:title="Notion dextraction hepatique" -->
Au niveau d'un organe, la clairance est une **capacité d'extraction** : $CL_{organe} = Q \times E$ (débit sanguin × coefficient d'extraction).

- **forte extraction** (E proche de 1) → clairance limitée par le **débit** (effet de premier passage marqué) ;
- **faible extraction** → clairance limitée par l'**enzyme** et la **fraction libre**.
<!-- /step -->

<!-- step:title="A retenir" -->
- Clairance = volume de plasma épuré par unité de temps (un débit), additive par voie.
- Clairance de la créatinine ≈ **DFG** (Cockcroft, CKD-EPI) → adapter les doses.
- Médicament : $k_e = CL/V$ ; **AUC = F·Dose/CL** (l'exposition ne dépend que de CL).
- Au niveau d'un organe : CL = débit × coefficient d'extraction.
<!-- /step -->
