---
id: "transversal-demi-vie"
slug: "transversal-demi-vie"
title: "La demi-vie : une seule loi, plusieurs disciplines"
description: "Décroissance exponentielle en radioactivité, en cinétique chimique et en pharmacocinétique — la même formule."
track: "transversal"
order: 10
duration: "11 min"
tags: ["transversal", "demi-vie", "exponentielle", "cinétique"]
glossary: ["Demi-vie"]
quiz:
  - prompt: "La demi-vie d'un phénomène de décroissance exponentielle vaut…"
    options:
      - "ln(2) / λ"
      - "λ / 2"
      - "2 × λ"
    correct: 0
  - prompt: "Après 5 demi-vies, il reste environ…"
    options:
      - "3 % de la quantité initiale"
      - "50 %"
      - "0 % exactement"
    correct: 0
  - prompt: "En pharmacocinétique, la constante d'élimination ke est reliée à la demi-vie par…"
    options:
      - "t½ = 0,693 / ke"
      - "t½ = ke"
      - "t½ = ke²"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
Radioactivité, cinétique chimique, pharmacocinétique : trois cours différents, **une seule mathématique**. Dès qu'une quantité **disparaît à une vitesse proportionnelle à ce qui reste**, on obtient une **décroissance exponentielle** et une **demi-vie**.

Comprendre cette loi une fois, c'est la reconnaître partout — et gagner du temps à l'internat.
<!-- /step -->

<!-- step:title="La loi commune" viz="DecroissanceExpo" -->
Si la vitesse de disparition est proportionnelle à la quantité présente ($\frac{dN}{dt} = -\lambda N$), alors :

$$ N(t) = N_0\, e^{-\lambda t}, \qquad t_{1/2} = \frac{\ln 2}{\lambda} \approx \frac{0{,}693}{\lambda} $$

:::key
La **demi-vie** est le temps pour diviser la quantité par 2. Elle ne dépend **que** de $\lambda$, pas de la quantité de départ. Après ~5 demi-vies, il reste ~3 % : on considère le phénomène « éteint ».
:::

:::howto
**Comment lire le schéma.** Changez le contexte (radioactivité / chimie / PK) : la courbe est identique, seules les étiquettes changent. Chaque demi-vie divise la hauteur par 2 (50 %, 25 %, 12,5 %…).
:::
<!-- /step -->

<!-- step:title="La même chose, trois fois" -->
- **Biophysique / radioactivité** : $N(t) = N_0 e^{-\lambda t}$, $\lambda$ = constante radioactive, **période** $T = \ln 2/\lambda$. L'activité $A = \lambda N$ décroît de la même façon.
- **Cinétique chimique (ordre 1)** : $[A] = [A_0] e^{-kt}$, $k$ = constante de vitesse. Le temps de demi-réaction $t_{1/2} = \ln 2/k$ est **indépendant** de la concentration initiale (signature de l'ordre 1).
- **Pharmacocinétique** : $C = C_0 e^{-k_e t}$, avec $k_e = CL/V$. D'où $t_{1/2} = \ln 2 \cdot V / CL$.

:::note
Même équation, seul le nom de la constante change ($\lambda$, $k$, $k_e$). Reconnaître cette structure évite de « réapprendre » trois fois la même chose.
:::
<!-- /step -->

<!-- step:title="À quoi ça sert" -->
- **Radioactivité** : dater (carbone 14), choisir un radiopharmaceutique (période adaptée à l'examen), gérer la radioprotection (décroissance des déchets).
- **PK** : prévoir le temps pour atteindre l'**état d'équilibre** (~5 t½) ou pour éliminer un médicament (~5 t½), et fixer l'**intervalle** entre deux prises.

:::clinical
En administration répétée, on atteint le plateau (steady state) après **~5 demi-vies**, quel que soit le rythme. Même règle, dans l'autre sens, pour le temps de « wash-out » à l'arrêt.
:::
<!-- /step -->

<!-- step:title="Piège classique" -->
:::pitfall
La demi-vie **ne dépend pas** de la dose ni de la quantité initiale — uniquement de la constante ($\lambda$, $k_e$). En PK, une demi-vie allongée vient d'un $V$ plus grand **ou** d'une clairance plus basse. Et attention : cette loi ne vaut que pour l'**ordre 1** ; si l'élimination sature (ordre 0, cf. Michaelis-Menten), la « demi-vie » n'est plus constante.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Décroissance exponentielle ⇔ vitesse proportionnelle à ce qui reste : $N = N_0 e^{-\lambda t}$.
- $t_{1/2} = \ln 2 / \lambda$, **indépendante** de la quantité initiale (ordre 1).
- Radioactivité (période), chimie ($k$), PK ($k_e = CL/V$) : la même loi.
- ~5 demi-vies pour atteindre le plateau ou éliminer un produit.
<!-- /step -->
