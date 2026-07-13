---
id: "i-11-rayons-x-radio-isotopes"
slug: "i-11-rayons-x-radio-isotopes"
title: Rayons X et radio-isotopes
description: "Décroissance radioactive, modes de désintégration et interactions des rayonnements avec la matière."
track: "section-I"
programItem: "I-11"
theme: "Biophysique"
order: 111
duration: "12 min"
tags: ["biophysique", "radioactivité", "période", "rayons X", "médecine nucléaire"]
level: "intermediate"
sources: ["pharmacopee-eur", "sfmn"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "L'activité d'une source radioactive vaut…"
    options:
      - "A = λ N (constante radioactive × nombre d'atomes)"
      - "A = N / λ"
      - "A = λ / N"
    correct: 0
  - prompt: "La désintégration β⁺ conduit, par annihilation, à l'émission de…"
    options:
      - "deux photons de 511 keV (base de la TEP)"
      - "un seul photon X"
      - "une particule alpha"
    correct: 0
  - prompt: "La période effective d'un radio-isotope dans l'organisme obéit à…"
    options:
      - "1/T_E = 1/T_P + 1/T_B"
      - "T_E = T_P + T_B"
      - "T_E = T_P × T_B"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
Scintigraphie au ⁹⁹ᵐTc, TEP au ¹⁸F-FDG, traitement de l'hyperthyroïdie par ¹³¹I : la médecine nucléaire et la radioprotection reposent sur quelques lois de décroissance et d'interaction des rayonnements. Les maîtriser, c'est raisonner une activité et une dose.
<!-- /step -->

<!-- step:title="Loi de décroissance" -->
:::key
L'**activité** (en becquerels, 1 Bq = 1 désintégration/s) est :
$$ A = \lambda\,N, \qquad \lambda = \frac{\ln 2}{T_P} $$
$N$ nombre d'atomes radioactifs, $\lambda$ constante radioactive, $T_P$ période physique. La décroissance est exponentielle :
$$ A(t) = A_0\,e^{-\lambda t} = \frac{A_0}{2^{\,n}}, \quad n = \frac{t}{T_P} $$
:::
Le nombre d'atomes se relie à la masse par $N = \dfrac{m}{M}\,N_A$.
<!-- /step -->

<!-- step:title="Modes de désintégration" -->
- **α** : émission d'un noyau d'hélium (noyaux lourds).
- **β⁻** : un neutron → proton + électron.
- **β⁺** : un proton → neutron + **positon** ; le positon s'annihile et émet **deux photons de 511 keV** (principe de la **TEP**).
- **Capture électronique (CE)** : concurrente de β⁺.
- **γ** et **conversion interne** : désexcitation du noyau ; émission possible de **rayons X** caractéristiques.
<!-- /step -->

<!-- step:title="Interaction avec la matière" -->
Pour les rayonnements X et γ, trois effets : **photoélectrique**, **Compton**, **matérialisation** (création de paires). L'atténuation d'un écran suit :
$$ I = I_0\,e^{-\mu x}, \qquad \text{CDA} = \frac{\ln 2}{\mu} $$
la **couche de demi-atténuation** (CDA) réduit le flux de moitié.

:::note
Pour les particules chargées : le **TEL** (transfert d'énergie linéique) et la **DLI** (densité linéique d'ionisation) mesurent l'ionisation créée le long du parcours, avec $\text{DLI} = \text{TEL}/W$ ($W \approx 32$ eV par paire d'ions).
:::
<!-- /step -->

<!-- step:title="Période effective" -->
Dans l'organisme, l'élimination combine décroissance **physique** et élimination **biologique** :
$$ \frac{1}{T_E} = \frac{1}{T_P} + \frac{1}{T_B} $$
La période effective $T_E$ est toujours **inférieure** à la plus courte des deux.
<!-- /step -->

<!-- step:title="Applications et radioprotection" -->
:::clinical
Isotopes clés : **⁹⁹ᵐTc** (scintigraphies, T ≈ 6 h), **¹⁸F-FDG** (TEP, T ≈ 110 min, β⁺), **¹³¹I** (hyperthyroïdie et cancer thyroïdien, β⁻ + γ), **²⁰¹Tl** (perfusion myocardique). Le **⁹⁹ᵐTc** est obtenu au lit du patient par un **générateur** ⁹⁹Mo/⁹⁹ᵐTc : le ⁹⁹Mo père (T ≈ 66 h) régénère en continu le ⁹⁹ᵐTc fils (équilibre radioactif). Radioprotection : jouer sur la **distance** (le débit de dose décroît en 1/d²), le **temps** d'exposition et l'**écran** (plomb pour X et γ).
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- $A = \lambda N$ ; $\lambda = \ln 2 / T_P$ ; $A(t) = A_0/2^{\,n}$.
- β⁺ → annihilation → **2 photons 511 keV** (TEP).
- Atténuation $I = I_0 e^{-\mu x}$ ; CDA $= \ln 2/\mu$.
- Période effective : $1/T_E = 1/T_P + 1/T_B$.
<!-- /step -->
