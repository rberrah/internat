---
id: "i-12-acide-base-ph-tampons"
slug: "i-12-acide-base-ph-tampons"
title: "Ions en solution : acide-base, pH, pK, tampons et complexation"
description: "Calculer un pH, comprendre le pouvoir tampon et les équilibres de complexation par l'EDTA."
track: "section-I"
programItem: "I-12"
theme: "Méthodes analytiques"
order: 112
duration: "13 min"
tags: ["chimie analytique", "acide-base", "pH", "tampon", "complexation"]
level: "intermediate"
sources: ["skoog", "tietz"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "L'équation de Henderson-Hasselbalch s'écrit…"
    options:
      - "pH = pKa + log([base] / [acide])"
      - "pH = pKa − log([base] / [acide])"
      - "pH = pKa × log([acide] / [base])"
    correct: 0
  - prompt: "Le pouvoir tampon d'un couple est maximal lorsque…"
    options:
      - "pH = pKa (mélange équimolaire acide/base)"
      - "le pH est très éloigné du pKa du couple utilisé"
      - "la base conjuguée est en large excès sur l'acide"
    correct: 0
  - prompt: "Un dosage complexométrique par l'EDTA est d'autant plus sélectif que…"
    options:
      - "la constante de formation conditionnelle β' du complexe est élevée à ce pH"
      - "la constante de formation β des autres cations reste élevée au même pH"
      - "le pH est maintenu très bas pour dissocier les complexes formés"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
pH, tampons et complexation gouvernent la **spéciation** des ions en solution : forme dosable d'un principe actif, stabilité d'une préparation, sélectivité d'un dosage. Ce sont les bases de toute la chimie analytique en milieu aqueux.
<!-- /step -->

<!-- step:title="Acide-base et pH" -->
Selon **Brønsted**, un acide cède un proton, une base le capte : $\text{AH} \rightleftharpoons \text{A}^- + \text{H}^+$, de constante $K_a$ ($pK_a = -\log K_a$).

- Acide **fort** : $pH = -\log C$. Base **forte** : $pH = 14 + \log C$.
- Acide **faible** : $pH = \tfrac{1}{2}(pK_a - \log C)$.
- Base **faible** : $pH = 7 + \tfrac{1}{2}(pK_a + \log C)$ ($pK_a$ du couple acide conjugué / base).
- Un acide est d'autant plus fort que son $pK_a$ est **bas**.

:::key
La forme prédominante dépend du pH : à **pH = pKa**, l'acide et sa base conjuguée sont à **50/50**. À $pH < pK_a$, la forme **acide** domine ; à $pH > pK_a$, la forme **basique**.
:::
<!-- /step -->

<!-- step:title="Tampons" viz="AcideBase" -->
Un **tampon** = mélange d'un acide faible et de sa base conjuguée ; il **résiste** aux variations de pH par ajout d'acide, de base ou par dilution.

$$ pH = pK_a + \log\frac{[\text{base}]}{[\text{acide}]} \quad\text{(Henderson-Hasselbalch)} $$

:::key
Le pouvoir tampon est **maximal quand pH = pKa** (mélange équimolaire) et reste efficace dans la zone $pK_a \pm 1$. On choisit donc un couple dont le $pK_a$ est proche du pH visé.
:::

:::howto
**Comment lire le schéma.** Le schéma applique Henderson-Hasselbalch au tampon le plus important de l'organisme, le couple $\text{CO}_2 / \text{HCO}_3^-$ : $pH = 6{,}1 + \log\dfrac{[\text{HCO}_3^-]}{0{,}03 \times P_{\text{CO}_2}}$, la base au numérateur, l'acide au dénominateur. Bougez le curseur **bicarbonates** (la base) puis le curseur **PCO₂** (l'acide) et regardez le pH glisser sur l'échelle vers l'acidose ou l'alcalose. Retenez que le pH ne dépend pas des valeurs absolues mais du **rapport base/acide** : faire varier les deux dans le même sens (la compensation) ramène le pH vers la normale.
:::
<!-- /step -->

<!-- step:title="Complexation" -->
Un **complexe** associe un cation métallique et un ligand. L'**EDTA** ($Y^{4-}$) est un ligand **hexadentate** formant des complexes 1:1 très stables : $M^{n+} + Y^{4-} \rightleftharpoons MY^{(n-4)}$, de constante de formation $\beta$.

Comme $Y^{4-}$ est une base (polyacide), sa disponibilité **dépend du pH** : on raisonne sur une constante **conditionnelle** $\beta'$ qui augmente avec le pH.

:::clinical
On exploite cette dépendance pour la **sélectivité** : à pH acide (5), seuls les cations très complexants (Al³⁺, Fe³⁺) sont dosés ; à pH basique (10), les cations plus faibles (Mg²⁺, Ca²⁺) le sont aussi. Base de la dureté de l'eau et de dosages pharmaceutiques.
:::
<!-- /step -->

<!-- step:title="Piege classique" -->
:::pitfall
Ne calculez jamais le pH d'un acide faible avec la formule de l'acide fort : $pH = \tfrac{1}{2}(pK_a - \log C)$ et non $-\log C$. Et attention : $pH = pK_a$ n'est pas le pH « neutre » (7) mais le point de **demi-neutralisation**, où le pouvoir tampon est maximal.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Acide faible : $pH = \tfrac{1}{2}(pK_a - \log C)$ ; à $pH = pK_a$, formes à 50/50.
- Tampon : $pH = pK_a + \log([\text{base}]/[\text{acide}])$, efficace sur $pK_a \pm 1$.
- Pouvoir tampon **maximal** à $pH = pK_a$.
- EDTA : sélectivité pilotée par le **pH** via $\beta'$ conditionnelle.
<!-- /step -->
