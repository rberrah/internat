---
id: "iv-42-troubles-acidobasiques"
slug: "iv-42-troubles-acidobasiques"
title: "Troubles de l'équilibre acidobasique"
description: "Méthode de lecture des gaz du sang : pH, bicarbonates, PCO2 et trou anionique."
track: "section-IV"
programItem: "IV-42"
theme: "Autres affections"
order: 442
duration: "13 min"
tags: ["acidose", "alcalose", "bicarbonates", "trou anionique", "gaz du sang"]
level: "intermediate"
sources: ["sfbc", "tietz"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Une acidose métabolique se définit par…"
    options:
      - "un pH bas avec des bicarbonates bas"
      - "un pH bas avec une PCO2 haute"
      - "un pH haut avec des bicarbonates hauts"
    correct: 0
  - prompt: "Une acidose métabolique à trou anionique augmenté oriente vers…"
    options:
      - "un acide en excès (acidocétose, acidose lactique, insuffisance rénale)"
      - "une perte digestive de bicarbonates"
      - "des vomissements"
    correct: 0
  - prompt: "Devant une acidose métabolique, la compensation attendue est…"
    options:
      - "une hyperventilation qui abaisse la PCO2"
      - "une hypoventilation qui élève la PCO2"
      - "une rétention rénale de bicarbonates immédiate"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" viz="AcideBase" -->
L'équilibre acidobasique se lit sur trois chiffres du gaz du sang : **pH**, **bicarbonates** et **PCO2**. Une méthode systématique — pH puis origine puis compensation puis trou anionique — permet de résoudre n'importe quel dossier.
<!-- /step -->

<!-- step:title="Le systeme tampon bicarbonate" -->
Tout repose sur l'équilibre :

$$ \text{H}_2\text{O} + \text{CO}_2 \rightleftharpoons \text{H}_2\text{CO}_3 \rightleftharpoons \text{H}^+ + \text{HCO}_3^- $$

:::math
Équation d'Henderson-Hasselbalch : $\text{pH} = \text{pKa} + \log \dfrac{[\text{HCO}_3^-]}{0{,}03 \times \text{PCO}_2}$. Le pH dépend du **rapport** bicarbonates (rein) / PCO2 (poumon).
:::

pH normal : **7,38–7,42**. En dessous → **acidose** ; au-dessus → **alcalose**.
<!-- /step -->

<!-- step:title="Quatre desordres, une methode" -->
On lit d'abord le **pH** (acidose ou alcalose), puis le paramètre en cause :

:::key
- **Acidose métabolique** : **HCO3⁻ bas**.
- **Alcalose métabolique** : HCO3⁻ haut.
- **Acidose respiratoire** : **PCO2 haute** (hypoventilation).
- **Alcalose respiratoire** : PCO2 basse (hyperventilation).
:::

Exemples : acidose métabolique = acidocétose, acidose lactique, insuffisance rénale, diarrhée. Alcalose métabolique = **vomissements** (perte d'HCl), diurétiques.
<!-- /step -->

<!-- step:title="Le trou anionique" viz="TrouAnionique" -->
Il différencie les acidoses métaboliques :

:::math
$\text{TA} = [\text{Na}^+] - ([\text{Cl}^-] + [\text{HCO}_3^-])$, valeur usuelle **12–16 mmol/L**.
:::

- **TA augmenté** → présence d'un **acide indosé** : acidocétose (corps cétoniques), **acidose lactique** (metformine, choc), insuffisance rénale (sulfates, phosphates), intoxications.
- **TA normal** (hyperchlorémique) → **perte de bicarbonates** : diarrhée, acidose tubulaire.

:::howto
**Comment lire le schéma.** Les deux colonnes empilent les cations (Na⁺) face aux anions (Cl⁻ + HCO₃⁻) : l'écart qui reste en haut de la colonne des anions **est** le trou anionique, c'est-à-dire la place des anions indosés. Baissez les **bicarbonates** sans toucher au chlore : le trou se creuse — un acide s'est ajouté (acidocétose, lactate). Baissez maintenant HCO₃⁻ **en montant le Cl⁻** : le trou reste normal — c'est une perte de bicarbonates (diarrhée). Le curseur **albumine** rappelle le piège : l'hypoalbuminémie abaisse le TA mesuré et peut masquer un acide indosé, d'où le TA corrigé.
:::
<!-- /step -->

<!-- step:title="Compensation et regulation" -->
Toute modification du pH déclenche une **compensation** par l'organe non atteint :

- désordre **métabolique** → compensation **respiratoire immédiate** (l'acidose métabolique donne une **hyperventilation** qui abaisse la PCO2) ;
- désordre **respiratoire** → compensation **rénale lente** (réabsorption d'HCO3⁻, élimination d'H⁺ sous forme de NH4⁺).

La compensation ramène le pH vers la normale mais ne le **normalise jamais** totalement. Dans l'acidose métabolique, la PCO2 attendue se prédit (formule de Winter) : si la PCO2 mesurée s'en écarte, suspecter un **trouble mixte**.

:::math
PCO2 attendue (mmHg) $\approx 1{,}5 \times [\text{HCO}_3^-] + 8 \; (\pm 2)$.
:::
<!-- /step -->

<!-- step:title="Piege classique" -->
:::pitfall
Une PCO2 basse dans une acidose métabolique n'est **pas** une alcalose respiratoire surajoutée : c'est la **compensation** attendue (hyperventilation). Vérifier la cohérence avec le pH avant de parler de trouble mixte. Et toujours **calculer le trou anionique** : il révèle un acide indosé même quand les bicarbonates semblent peu abaissés.
:::
<!-- /step -->

<!-- step:title="A retenir" -->
- pH bas = acidose ; HCO3⁻ bas = métabolique, PCO2 haute = respiratoire.
- **Trou anionique augmenté** = acide indosé (acidocétose, lactique, IR) ; normal = perte de HCO3⁻.
- Compensation : métabolique → **respiratoire immédiate** ; respiratoire → **rénale lente**.
- Vomissements → **alcalose métabolique** ; diarrhée → acidose métabolique.
<!-- /step -->
