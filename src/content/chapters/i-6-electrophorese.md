---
id: "i-6-electrophorese"
slug: "i-6-electrophorese"
title: Électrophorèse
description: "Séparer des solutés chargés sous un champ électrique, selon leur charge et leur taille."
track: "section-I"
programItem: "I-6"
theme: "Méthodes analytiques"
order: 106
duration: "12 min"
tags: ["chimie analytique", "électrophorèse", "SDS-PAGE", "point isoélectrique", "capillaire"]
quiz:
  - prompt: "La SDS-PAGE sépare les protéines selon…"
    options:
      - "leur masse (le SDS impose une charge négative uniforme)"
      - "leur seule charge native"
      - "leur solubilité dans l'eau"
    correct: 0
  - prompt: "Au point isoélectrique (pI) d'une protéine…"
    options:
      - "sa charge globale est nulle et elle ne migre plus"
      - "sa charge est maximale"
      - "elle migre le plus vite vers l'anode"
    correct: 0
  - prompt: "En focalisation isoélectrique (IEF), la migration s'arrête quand…"
    options:
      - "le pH local devient égal au pI du soluté"
      - "le champ électrique s'annule"
      - "le tampon est saturé"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
Électrophorèse des protéines sériques, typage des hémoglobines, transferrine de l'alcoolisme chronique : l'électrophorèse **sépare des solutés chargés** sous un champ électrique. Un principe simple, des applications cliniques quotidiennes.
<!-- /step -->

<!-- step:title="Principe" -->
Sous un champ électrique $E$, un soluté chargé se déplace à la vitesse $v = \mu\,E$, où $\mu$ est la **mobilité électrophorétique**. Elle dépend de la **charge** du soluté (donc du pH), de la **viscosité** du solvant et du **rayon de Stokes** (corrélé à la masse).

:::key
À charge égale, les petites molécules migrent plus vite ; à taille égale, les plus chargées migrent plus vite. L'ordre d'élution dépend du rapport **charge / masse**.
:::
<!-- /step -->

<!-- step:title="Point isoélectrique" -->
Pour les protéines et acides aminés (groupements ionisables), la charge globale change avec le pH.

:::note
Le **point isoélectrique** $pI$ est le pH où la charge globale est **nulle** : le soluté ne migre plus. À $pH < pI$ il est chargé positivement (migre vers la cathode), à $pH > pI$ négativement (migre vers l'anode).
:::
<!-- /step -->

<!-- step:title="Électrophorèse sur gel" -->
- **Conditions natives** : acétate de cellulose, agarose, PAGE — séparation selon charge et taille.
- **Conditions dénaturantes SDS-PAGE** : le détergent SDS confère une charge **négative proportionnelle à la masse** ; la séparation se fait alors selon la **masse** seule (masse élevée = plus freinée).
- **Focalisation isoélectrique (IEF)** : gradient de pH ; chaque protéine s'immobilise là où $pH = pI$.
- **Électrophorèse bidimensionnelle** : IEF (pI) puis SDS-PAGE (masse).
<!-- /step -->

<!-- step:title="Électrophorèse capillaire" -->
Dans un capillaire de silice sous **10 à 30 kV** : très haute **efficacité** ($10^5 < N < 10^6$ plateaux), analyse rapide, volumes de l'ordre du nanolitre. Un **flux électroosmotique** (silanolates ionisés en surface) entraîne l'ensemble des solutés vers la cathode. Détection : UV, fluorescence, ampérométrie, SM.
<!-- /step -->

<!-- step:title="Applications" -->
:::clinical
Électrophorèse capillaire en routine : protéines sériques, **hémoglobines** (dépistage des hémoglobinopathies, à confirmer par une 2ᵉ méthode), **immunoglobulines** (immunosoustraction), **transferrine désialylée** (CDT) marqueur d'alcoolisme chronique. Sur gel : lipoprotéinogramme, Western/Southern/Northern blot.

Sur l'électrophorégramme des protéines sériques (pH alcalin ≈ 8,6), les protéines sont anioniques et migrent vers l'anode : **albumine** en tête (la plus rapide), puis **α1, α2, β, γ-globulines**.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- $v = \mu\,E$ ; mobilité selon charge, viscosité, rayon de Stokes.
- $pI$ : charge nulle, pas de migration ; base de l'**IEF**.
- **SDS-PAGE** = séparation par la masse (charge uniformisée).
- Capillaire = très haute efficacité, flux électroosmotique.
<!-- /step -->
