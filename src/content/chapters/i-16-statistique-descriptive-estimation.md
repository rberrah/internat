---
id: "i-16-statistique-descriptive-estimation"
slug: "i-16-statistique-descriptive-estimation"
title: "Statistique descriptive : estimation et intervalle de confiance"
description: "Décrire un échantillon, estimer un paramètre de population et l'encadrer par un intervalle de confiance."
track: "section-I"
programItem: "I-16"
theme: "Statistiques"
order: 116
duration: "12 min"
tags: ["statistiques", "estimation", "intervalle de confiance", "moyenne", "proportion"]
level: "beginner"
sources: ["schwartz", "ancelle", "altman"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "L'intervalle de confiance d'une moyenne (grand échantillon) a pour demi-largeur…"
    options:
      - "z × σ / √n"
      - "z × σ × n"
      - "z × σ / n"
    correct: 0
  - prompt: "Quand n augmente, l'intervalle de confiance d'un paramètre…"
    options:
      - "se resserre (√n au dénominateur)"
      - "s'élargit"
      - "reste identique"
    correct: 0
  - prompt: "L'estimation par intervalle de confiance d'une proportion suppose notamment que…"
    options:
      - "np > 5 et n(1 − p) > 5"
      - "n < 30"
      - "la variance soit nulle"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
On ne mesure jamais une population entière : on travaille sur un **échantillon** pour **estimer** un paramètre inconnu (moyenne, proportion). Encore faut-il chiffrer l'**incertitude** de cette estimation — c'est le rôle de l'intervalle de confiance.
<!-- /step -->

<!-- step:title="Decrire un echantillon" -->
- **Position** : moyenne $\bar{x}$, médiane (robuste aux valeurs extrêmes), mode.
- **Dispersion** : variance $s^2$ et écart-type $s$ ; étendue ; coefficient de variation $CV = s/\bar{x}$.

:::key
La variance d'un échantillon (estimateur **sans biais** de la variance de population) se divise par $n-1$ :
$$ s^2 = \frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2 $$
:::
<!-- /step -->

<!-- step:title="Estimation ponctuelle" -->
Un **estimateur** est une variable aléatoire calculée sur l'échantillon qui approche le paramètre de population :
- moyenne d'échantillon $\bar{x}$ → estime la moyenne $\mu$ ;
- fréquence $p = k/n$ → estime la proportion $\pi$.

Un bon estimateur est **sans biais** (espérance égale au paramètre) et **convergent** (précision croissante avec $n$).
<!-- /step -->

<!-- step:title="Intervalle de confiance" -->
L'**IC à 95 %** encadre le paramètre avec 95 % de confiance.

- **Moyenne**, grand échantillon : $\bar{x} \pm z_{\alpha}\dfrac{\sigma}{\sqrt{n}}$ (avec $z_{0{,}05} = 1{,}96$). Petit échantillon et $\sigma$ inconnue : loi de **Student** ($t$) à $n-1$ ddl.
- **Proportion** : $p \pm z_{\alpha}\sqrt{\dfrac{p(1-p)}{n}}$, valable si $np > 5$ et $n(1-p) > 5$.

Le **théorème central limite** justifie l'approximation normale de la moyenne pour $n$ grand, même si la variable étudiée n'est pas normale.

:::key
La précision augmente en $\sqrt{n}$ : pour **diviser par 2** la largeur de l'IC, il faut **multiplier par 4** l'effectif.
:::
<!-- /step -->

<!-- step:title="Piege classique" -->
:::pitfall
L'IC à 95 % ne signifie pas « 95 % des individus » ni « 95 % de probabilité que la vraie valeur soit dans CET intervalle ». Il signifie : si l'on répétait l'échantillonnage, **95 % des intervalles** construits contiendraient le paramètre. Distinguez aussi écart-type $\sigma$ (dispersion des individus) et erreur-standard $\sigma/\sqrt{n}$ (dispersion de la moyenne).
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Décrire : position ($\bar{x}$, médiane) et dispersion ($s$, $s^2$ en $n-1$).
- IC moyenne : $\bar{x} \pm z\,\sigma/\sqrt{n}$ (Student si petit $n$).
- IC proportion : $p \pm z\sqrt{p(1-p)/n}$, si $np>5$ et $n(1-p)>5$.
- Précision en $\sqrt{n}$ : ×4 l'effectif pour ÷2 la largeur.
<!-- /step -->
