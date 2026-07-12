---
id: "i-18-tests-liaison-regression-correlation-chi2"
slug: "i-18-tests-liaison-regression-correlation-chi2"
title: "Tests de liaison : régression, corrélation et chi-deux"
description: "Mesurer et tester une liaison entre deux variables, quantitatives (régression, corrélation) ou qualitatives (chi-deux)."
track: "section-I"
programItem: "I-18"
theme: "Statistiques"
order: 118
duration: "12 min"
tags: ["statistiques", "corrélation", "régression", "chi-deux", "liaison"]
level: "intermediate"
sources: ["schwartz", "altman", "ancelle"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Le coefficient de corrélation de Pearson r…"
    options:
      - "varie entre −1 et +1 et mesure une liaison linéaire"
      - "est toujours positif"
      - "mesure une relation de cause à effet"
    correct: 0
  - prompt: "Le nombre de degrés de liberté d'un test du chi-deux d'indépendance sur un tableau l × c est…"
    options:
      - "(l − 1) × (c − 1)"
      - "l × c"
      - "n − 1"
    correct: 0
  - prompt: "La statistique du chi-deux se calcule par…"
    options:
      - "Σ (O − E)² / E, avec O observés et E effectifs théoriques"
      - "Σ (O − E)"
      - "Σ O² / n"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
Deux variables sont-elles **liées** ? La réponse dépend de leur nature : deux variables **quantitatives** appellent corrélation et régression ; deux variables **qualitatives**, le test du chi-deux. Trois outils, une même question de **liaison**.
<!-- /step -->

<!-- step:title="Correlation lineaire" -->
Le **coefficient de corrélation de Pearson** $r$ mesure l'intensité de la liaison **linéaire** entre deux variables quantitatives :

$$ r = \frac{\text{cov}(x,y)}{s_x\,s_y}, \qquad -1 \leq r \leq 1 $$

- $r$ proche de $\pm 1$ : liaison linéaire forte ; $r \approx 0$ : pas de liaison linéaire.
- Le signe donne le sens (croissante ou décroissante).
- Un test permet de juger si $r$ diffère significativement de 0.
- Liaison **monotone non linéaire** ou variables **ordinales** → corrélation des rangs de **Spearman** (non paramétrique).
<!-- /step -->

<!-- step:title="Regression lineaire" -->
La **régression** ajuste la droite $y = a x + b$ par la méthode des **moindres carrés** (minimise la somme des carrés des résidus). La pente $a$ quantifie la variation de $y$ par unité de $x$.

:::key
Le **coefficient de détermination** $r^2$ (carré de $r$) est la **part de variance** de $y$ expliquée par $x$. Ex. $r = 0{,}9 \Rightarrow r^2 = 0{,}81$ : 81 % de la variabilité est expliquée par le modèle.
:::
<!-- /step -->

<!-- step:title="Test du chi-deux" -->
Pour deux variables **qualitatives**, on croise les effectifs dans un **tableau de contingence** et on compare effectifs **observés** $O$ et **théoriques** $E$ (attendus sous H0 d'indépendance) :

$$ \chi^2 = \sum \frac{(O - E)^2}{E}, \qquad ddl = (l-1)(c-1) $$

On rejette l'indépendance si $\chi^2$ calculé dépasse le quantile de la table.

:::key
Condition de validité : effectifs théoriques $E \geq 5$ dans chaque case (sinon regroupement ou test exact de Fisher) ; pour un tableau **2 × 2**, on applique la **correction de continuité de Yates**. Le chi-deux existe aussi en version **conformité / ajustement** (comparer une distribution observée à une distribution théorique).
:::
<!-- /step -->

<!-- step:title="Piege classique" -->
:::pitfall
Corrélation **n'est pas causalité** : un $r$ élevé peut refléter un facteur de confusion. De plus $r$ ne détecte que le **linéaire** — une relation en U forte peut donner $r \approx 0$. Toujours regarder le **nuage de points**.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Quanti/quanti → corrélation ($r \in [-1;1]$) et régression ($y = ax+b$, moindres carrés).
- $r^2$ = part de variance expliquée.
- Quali/quali → chi-deux : $\chi^2 = \sum (O-E)^2/E$, $ddl = (l-1)(c-1)$, $E \geq 5$.
- Corrélation ≠ causalité ; $r$ ne voit que le linéaire.
<!-- /step -->
