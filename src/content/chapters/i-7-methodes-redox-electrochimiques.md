---
id: "i-7-methodes-redox-electrochimiques"
slug: "i-7-methodes-redox-electrochimiques"
title: Méthodes redox électrochimiques
description: "Potentiométrie et ampérométrie : doser en mesurant un potentiel à courant nul ou un courant à potentiel imposé."
track: "section-I"
programItem: "I-7"
theme: "Méthodes analytiques"
order: 107
duration: "12 min"
tags: ["chimie analytique", "potentiométrie", "ampérométrie", "Nernst", "électrodes"]
quiz:
  - prompt: "Le potentiel pris par une électrode redox suit l'équation…"
    options:
      - "E = E° + (0,06/n) log ([Ox]/[Red]) (Nernst)"
      - "E = E° − n log ([Red]/[Ox])"
      - "E = R T / n F"
    correct: 0
  - prompt: "La potentiométrie mesure un potentiel…"
    options:
      - "à courant nul (I = 0)"
      - "à potentiel imposé variable"
      - "à charge électrique constante"
    correct: 0
  - prompt: "L'ampérométrie consiste à mesurer…"
    options:
      - "l'intensité du courant à potentiel imposé"
      - "la quantité totale d'électricité"
      - "la masse de l'électrode"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
Mesure du pH, ionogramme, détection en CLHP, dosages redox : les méthodes électrochimiques exploitent l'échange d'électrons. Deux familles à distinguer nettement — la **potentiométrie** (on mesure un potentiel) et l'**ampérométrie** (on mesure un courant).
<!-- /step -->

<!-- step:title="Potentiométrie" -->
On mesure la force électromotrice **à courant nul** ($I = 0$) entre une électrode indicatrice (potentiel variable) et une électrode de référence (potentiel fixe).

:::key
Le potentiel de l'électrode indicatrice suit l'**équation de Nernst** :
$$ E = E^0 + \frac{0{,}06}{n}\log\frac{[\text{Ox}]}{[\text{Red}]} $$
à 298 K, en assimilant activités et concentrations. Pour un couple faisant intervenir $H^+$, apparaît un terme en $pH$.
:::
<!-- /step -->

<!-- step:title="Les électrodes" -->
- **Référence** (potentiel fixe) : au **calomel** (Hg₂Cl₂) ou **Ag/AgCl** (≈ 0,20 V vs ENH). L'Ag/AgCl remplace le calomel (sels de mercure).
- **Indicatrices** : métalliques (**Pt** redox, **Ag** argentométrie), **électrode de verre** (pH), électrodes à **membrane sélective** (ions : F⁻, K⁺…) et à enzymes (glucose-oxydase).

On suit ainsi une **titrimétrie potentiométrique** : le point d'équivalence correspond au saut de potentiel. L'électrode de verre a une réponse **nernstienne** : son potentiel varie de ≈ **−59 mV par unité de pH** à 25 °C.
<!-- /step -->

<!-- step:title="Ampérométrie" -->
On impose un **potentiel fixe** à l'électrode indicatrice et on mesure l'**intensité** du courant d'oxydation ou de réduction (2 électrodes).

:::note
Applications : **détection du point d'équivalence** d'un dosage redox, et surtout **détecteur** en CLHP et électrophorèse capillaire pour les substances électroactives (phénols, catécholamines, sucres) — par micro-électrolyse au voisinage de l'électrode.
:::
<!-- /step -->

<!-- step:title="Coulométrie et voltampérométrie" -->
- **Coulométrie** : on mesure la **quantité d'électricité** consommée. $Q = n_{mole}\,n_{e^-}\,F$ (Faraday $F = 96\,485$ C). Si $n_{e^-}$ est connu, $Q$ donne le nombre de moles.
- **Voltampérométrie** : on trace $I = f(E)$ avec 3 électrodes ; la **polarographie** (goutte de mercure) dose les cations métalliques traces ; la voltampérométrie cyclique caractérise la réversibilité ($\Delta E_p = 0{,}059/n$).
<!-- /step -->

<!-- step:title="Piege classique" -->
:::pitfall
Ne confondez pas les mesures : la **potentiométrie** se fait à **courant nul** (on lit $E$) ; l'**ampérométrie** impose $E$ et lit **$I$** ; la **coulométrie** intègre le courant ($Q$). Trois grandeurs, trois méthodes.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Potentiométrie : $I = 0$, équation de **Nernst**, électrode de verre pour le pH.
- Références : calomel, Ag/AgCl (≈ 0,20 V vs ENH).
- Ampérométrie : mesure de $I$ à $E$ imposé (détecteur CLHP/EC).
- Coulométrie : $Q = n\,n_{e^-}\,F$.
<!-- /step -->
