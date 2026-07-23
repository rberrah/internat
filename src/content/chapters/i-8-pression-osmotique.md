---
id: "i-8-pression-osmotique"
slug: "i-8-pression-osmotique"
title: Pression osmotique, osmolarité et osmolalité
description: "Quantifier les particules dissoutes qui gouvernent les mouvements d'eau à travers les membranes."
track: "section-I"
programItem: "I-8"
theme: "Méthodes analytiques"
order: 108
duration: "11 min"
tags: ["biophysique", "osmolarité", "osmolalité", "van't Hoff", "cryoscopie"]
level: "intermediate"
sources: ["pharmacopee-eur", "tietz", "goldfrank"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "L'osmolalité s'exprime en…"
    options:
      - "osmol par kg de solvant"
      - "osmol par litre de solution"
      - "millimole par litre de plasma"
    correct: 0
  - prompt: "La pression osmotique suit la loi de van't Hoff…"
    options:
      - "π = i C R T"
      - "π = C / (R T)"
      - "π = i R T / C"
    correct: 0
  - prompt: "L'osmolalité plasmatique calculée est estimée par…"
    options:
      - "2 × [Na⁺] + glycémie + urée (en mmol/L)"
      - "2 × ([Na⁺] + [K⁺]) + glycémie (en mmol/L)"
      - "[Na⁺] + glycémie + urée, sans le facteur 2 (mmol/L)"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
Les mouvements d'eau entre compartiments, la tonicité d'une perfusion, le diagnostic d'une intoxication par un alcool : tout dépend du **nombre de particules dissoutes**. Osmolarité et osmolalité mesurent exactement cela.
<!-- /step -->

<!-- step:title="Osmole et définitions" -->
Une **osmole** est une mole de particules **osmotiquement actives**. Un soluté qui se dissocie en compte plusieurs par mole : NaCl → 2 osmoles (Na⁺ + Cl⁻).

:::key
- **Osmolarité** : osmoles par **litre de solution** (osmol·L⁻¹).
- **Osmolalité** : osmoles par **kg de solvant** (osmol·kg⁻¹).
L'osmolalité, indépendante de la température et du volume, est la grandeur **de référence en biologie**.
:::
<!-- /step -->

<!-- step:title="Loi de van t Hoff" -->
La pression osmotique d'une solution diluée s'écrit :
$$ \pi = i\,C\,R\,T $$
$i$ facteur d'ionisation (nombre de particules libérées), $C$ concentration molaire, $R$ constante des gaz parfaits, $T$ température (K). Plus il y a de particules, plus la pression qui attire l'eau est élevée.
<!-- /step -->

<!-- step:title="Mesure par cryoscopie" -->
L'osmolalité se mesure par **abaissement du point de congélation** (cryoscopie) : une solution plus concentrée en osmoles gèle à température plus basse.
$$ \Delta T_f = K_f \times \text{osmolalité} $$

:::note
Les propriétés colligatives (cryoscopie, ébullioscopie, tonométrie, pression osmotique) ne dépendent que du **nombre** de particules, pas de leur nature.
:::
<!-- /step -->

<!-- step:title="Osmolalité plasmatique" -->
L'osmolalité plasmatique normale est de **285 à 295 mosmol·kg⁻¹**. On l'estime par :
$$ \text{Osm}_{calc} \approx 2\,[\text{Na}^+] + \text{glycémie} + \text{urée} $$

L'osmolalité **efficace** (tonicité) s'estime **sans l'urée** : $\approx 2\,[\text{Na}^+] + \text{glycémie}$.

:::clinical
Le **trou osmotique** = osmolalité mesurée − calculée. Il augmente en présence d'osmoles non prises en compte : **intoxications par méthanol, éthylène glycol, éthanol**. Un trou osmotique élevé oriente le toxicologue.
:::
<!-- /step -->

<!-- step:title="Piege classique" -->
:::pitfall
Osmolalité n'est pas **tonicité**. L'urée traverse librement les membranes : c'est une osmole **inefficace**, elle compte dans l'osmolalité mais ne provoque pas de mouvement d'eau durable. La tonicité ne retient que les osmoles **efficaces** (Na⁺, glucose).
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Osmolarité = par **litre de solution** ; osmolalité = par **kg de solvant**.
- $\pi = i\,C\,R\,T$ (van't Hoff) ; mesure par **cryoscopie**.
- Osm calculée ≈ $2[\text{Na}^+]$ + glycémie + urée ; normale 285-295 mosmol/kg.
- Trou osmotique élevé → intoxication par les alcools.
<!-- /step -->
