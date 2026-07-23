---
id: "i-17-tests-parametriques"
slug: "i-17-tests-parametriques"
title: "Tests paramétriques de comparaison"
description: "Comparer des moyennes ou des variances : hypothèses, risques, choix de la statistique (Student, Fisher, Z)."
track: "section-I"
programItem: "I-17"
theme: "Statistiques"
order: 117
duration: "13 min"
tags: ["statistiques", "test d'hypothèse", "Student", "Fisher", "comparaison"]
level: "intermediate"
sources: ["schwartz", "ancelle", "altman"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Le risque alpha (première espèce) d'un test correspond à…"
    options:
      - "rejeter H0 alors qu'elle est vraie (faux positif)"
      - "conserver H0 alors qu'elle est fausse (faux négatif)"
      - "détecter une différence réelle quand elle existe (puissance)"
    correct: 0
  - prompt: "Pour comparer les moyennes de deux petits échantillons indépendants (variances égales), on utilise…"
    options:
      - "le test t de Student à n1 + n2 − 2 degrés de liberté"
      - "le test Z sur la loi normale, valable même à petit effectif"
      - "le test t de Student apparié sur les différences de paires"
    correct: 0
  - prompt: "La comparaison de deux variances repose sur…"
    options:
      - "le test F de Fisher (rapport des variances)"
      - "le test t de Student (différence des moyennes)"
      - "le test du chi-deux (comparaison des dispersions)"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
Un nouveau traitement change-t-il vraiment la moyenne d'un paramètre, ou l'écart observé n'est-il que du hasard ? Les **tests paramétriques** répondent à cette question en confrontant les données à une **hypothèse nulle**.
<!-- /step -->

<!-- step:title="Hypotheses et risques" -->
- **H0** (hypothèse nulle) : « pas de différence » (ex. $\mu_1 = \mu_2$).
- **H1** (alternative) : différence, **bilatérale** ($\neq$) ou **unilatérale** ($>$ ou $<$).

:::key
Deux risques d'erreur :
- **α** (première espèce) : rejeter H0 vraie = **faux positif** (souvent 5 %).
- **β** (seconde espèce) : conserver H0 fausse. La **puissance** = $1 - \beta$.

On rejette H0 si la **p-value** $< \alpha$, ou si la réalisation du test tombe dans la **zone de rejet**.
:::
<!-- /step -->

<!-- step:title="Conditions et demarche" -->
Tests paramétriques → variable suivant une **loi normale** dans chaque population, échantillons **indépendants**. Si $n_1 \geq 30$ et $n_2 \geq 30$, l'approximation normale est admise.

Démarche : poser H0/H1 → vérifier les conditions → choisir la statistique et sa loi sous H0 → calculer la réalisation → comparer au quantile lu dans la table → conclure.
<!-- /step -->

<!-- step:title="Choisir le bon test" -->
- **Comparer deux variances** → test **F de Fisher** : $F = s_1^2/s_2^2$ (grande variance au numérateur), loi de Fisher à $(n_1-1, n_2-1)$ ddl. Souvent un préalable au test de moyennes.
- **Comparer deux moyennes**, petits échantillons, variances égales → test **t de Student** à $n_1+n_2-2$ ddl (variance commune $s^2$).
- **Grands échantillons** ou variances connues → test **Z** (loi normale centrée réduite).
- **Séries appariées** (avant/après chez les mêmes sujets) → test $t$ sur les **différences**.
- **Plus de deux moyennes** → **analyse de variance (ANOVA)**, qui évite l'inflation du risque α des comparaisons multiples.
<!-- /step -->

<!-- step:title="Piege classique" -->
:::pitfall
Test **bilatéral** : le risque α est **réparti** aux deux extrémités (α/2 de chaque côté). Test **unilatéral** : tout le risque d'un seul côté → on lit la table à la colonne correspondante. Ne pas mélanger. Et « non-significatif » **ne prouve pas** H0 : cela peut refléter un manque de puissance (n trop faible).
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- H0 = absence de différence ; α = faux positif ; puissance = $1-\beta$.
- Rejet si p-value $< \alpha$.
- Variances → **Fisher** ; moyennes petits n → **Student** ($n_1+n_2-2$ ddl) ; grands n → **Z**.
- Bilatéral (α/2 de chaque côté) vs unilatéral.
<!-- /step -->
