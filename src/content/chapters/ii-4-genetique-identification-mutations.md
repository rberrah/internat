---
id: "ii-4-genetique-identification-mutations"
slug: "ii-4-genetique-identification-mutations"
title: "Méthodes d'identification des mutations délétères"
description: "PCR, séquençage de Sanger, hybridation (Southern, Northern, FISH), CGH-array et diagnostic direct ou indirect."
track: "section-II"
programItem: "II-4"
theme: "Génétique"
order: 204
duration: "13 min"
tags: ["génétique", "PCR", "séquençage", "diagnostic moléculaire"]
level: "intermediate"
sources: ["genetique-college", "tietz", "acmg-richards"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "La réaction de polymérisation en chaîne (PCR) repose sur…"
    options:
      - "une ADN polymérase thermostable (Taq), deux amorces et des dNTP, sur des cycles dénaturation-hybridation-élongation"
      - "une ADN ligase et une seule amorce circulaire"
      - "une transcriptase qui copie l'ADN en ARN"
    correct: 0
  - prompt: "Le séquençage selon Sanger utilise, comme terminateurs de chaîne…"
    options:
      - "des didésoxyribonucléotides (ddNTP) dépourvus de groupement 3'OH"
      - "des désoxyribonucléotides diphosphates"
      - "des enzymes de restriction bactériennes"
    correct: 0
  - prompt: "La CGH-array (hybridation génomique comparative) permet de détecter…"
    options:
      - "les variations quantitatives d'ADN (aneuploïdies, délétions, duplications, CNV), mais pas les translocations équilibrées"
      - "toutes les anomalies de structure, y compris les translocations réciproques équilibrées"
      - "uniquement les mutations ponctuelles de type SNP"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
Devant une maladie héréditaire monogénique, identifier la **mutation délétère** repose sur une boîte à outils de biologie moléculaire. Chaque technique répond à une question : amplifier une région, lire sa séquence, repérer une anomalie de quantité ou choisir un diagnostic direct ou indirect.
<!-- /step -->

<!-- step:title="Amplifier par PCR" -->
La **PCR** (polymerase chain reaction) amplifie in vitro une courte séquence encadrée par **deux amorces** (oligonucléotides d'environ 20 nucléotides, extrémité 3'OH libre), grâce à une **ADN polymérase thermostable** (Taq), en présence de dNTP et de Mg²⁺.

Chaque cycle comporte trois étapes :

- **dénaturation** par la chaleur (séparation des deux brins) ;
- **hybridation** des amorces sur les séquences flanquantes ;
- **élongation** dans le sens 5'→3'.

L'amplification est exponentielle. On peut amplifier de l'ARN après **transcription inverse** (RT-PCR).

:::key
Les deux amorces sont incorporées au produit et fixent sa taille. La PCR étudie aussi bien des séquences codantes que non codantes.
:::
<!-- /step -->

<!-- step:title="Séquencer selon Sanger" -->
La méthode enzymatique de **Sanger** synthétise, à partir d'un ADN simple brin et d'une amorce, de nouveaux brins en présence de dNTP et d'une faible quantité de **ddNTP** (didésoxyribonucléotides, dépourvus de groupement 3'OH). L'incorporation d'un ddNTP **arrête** l'élongation.

On obtient une collection de fragments de tailles croissantes, séparés à un nucléotide près par électrophorèse. Les ddNTP sont marqués par **quatre fluorochromes**, lus par un laser sous forme d'**électrophorégramme**. C'est la référence pour détecter substitutions, petites délétions et insertions.

Le **séquençage haut débit (NGS)** analyse en parallèle de nombreux gènes (panels, exome, génome entier) et complète aujourd'hui largement Sanger, réservé à la validation ciblée.
<!-- /step -->

<!-- step:title="Hybrider : Southern, Northern et FISH" -->
Toutes ces techniques reposent sur l'**hybridation moléculaire** d'une sonde marquée avec sa séquence complémentaire.

- **Southern blot** : analyse d'un fragment d'**ADN** au sein du génome, après digestion par des **enzymes de restriction** (endonucléases bactériennes), électrophorèse, transfert sur membrane et hybridation. Met en évidence délétions, insertions, remaniements.
- **Northern blot** : dérivé, adapté à l'analyse d'un **ARN messager** (taille des transcrits, épissage alternatif).
- **FISH** (hybridation in situ fluorescente) : sonde fluorescente repérant une séquence sur un **chromosome** (chromosome entier, bras, bande ou locus).
<!-- /step -->

<!-- step:title="Révéler les polymorphismes et les CNV" -->
- **Microsatellites** (CA)n : multi-alléliques, étudiés par **PCR** puis électrophorèse.
- **SNP** : étudiés par PCR/RFLP (digestion par une enzyme de restriction créant ou abolissant un site), PCR spécifique d'allèle ou PCR/séquençage.
- **CGH-array** : analyse globale du génome détectant les **variations quantitatives** d'ADN (aneuploïdies, délétions, duplications, CNV). Elle ne détecte **pas** les translocations réciproques ni les inversions équilibrées (pas de gain ni de perte).
<!-- /step -->

<!-- step:title="Diagnostic direct et diagnostic indirect" -->
- **Diagnostic direct** : recherche directement la mutation dans le gène. Conditions : gène identifié. Résultat de quasi-certitude, possible même pour un cas sporadique.
- **Diagnostic indirect** : suit la **ségrégation** de marqueurs polymorphes (microsatellites) liés au locus morbide. Réservé aux **formes familiales**, avec diagnostic clinique certain ; résultat probabiliste, limité par l'informativité des marqueurs et les recombinaisons.

:::note
Le diagnostic indirect dépanne quand la mutation reste introuvable ou en situation d'urgence, à condition de disposer de plusieurs méioses informatives.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- PCR : Taq thermostable, deux amorces, cycles dénaturation-hybridation-élongation ; RT-PCR pour l'ARN.
- Sanger : ddNTP terminateurs, lecture par fluorescence, détecte substitutions et petits indels.
- Southern (ADN), Northern (ARN), FISH (chromosome) reposent sur l'hybridation moléculaire.
- CGH-array : anomalies quantitatives et CNV, mais pas les remaniements équilibrés.
- Diagnostic direct (mutation) versus indirect (marqueurs liés, formes familiales).
<!-- /step -->
