// @ts-nocheck
// ANNALES DU CONCOURS D'INTERNAT EN PHARMACIE — sujets officiels.
//
// PROVENANCE. Sujets OFFICIELS du concours, organisé par le Centre National de Gestion (CNG),
// reproduits ici À DES FINS DE RÉVISION avec leur provenance indiquée. Ils NE relèvent PAS de la
// licence CC BY-NC-SA du reste du site : documents tiers, propriété de leur émetteur.
// Source : https://www.cng.sante.fr/annales
//
// EXTRACTION. QCM extraits des PDF du CNG : couche texte (2023) ou OCR (Tesseract, français) pour
// les sessions numérisées (2020, 2022, 2024, 2025). Réponses : grille officielle du Conseil
// Scientifique quand elle figure dans le sujet (2020, 2022) ; recoupée pour 2023 ; le CNG ne
// publiant pas de corrigé pour 2024 et 2025, ces réponses ne sont pas fournies.
//
// MAPPING. Chaque énoncé est rattaché au chapitre du cours qui traite son thème (chapterSlugs) et
// à l'item du programme officiel (programItems), pour que chaque chapitre cite les annales tombées
// sur son sujet (voir annalesForChapter).
//
// Schéma : { n, type:'qcm', qcmType:'simple'|'multiple', prompt, options:[{l,t}], answer?,
//            chapterSlugs:[...], programItems:[...] }

/** @typedef {{n:number, type:string, qcmType?:string, prompt:string, options?:{l:string,t:string}[], answer?:string, correction?:string, chapterSlugs:string[], programItems:string[]}} AnnaleItem */

export const annalesSessions = [
  {
    "key": "2025",
    "label": "Décembre 2025",
    "source": "Concours national d'internat en pharmacie — session de décembre 2025 (CNG), extrait par OCR. Le CNG ne publie pas de corrigé : réponses non fournies.",
    "items": [
      {
        "n": 1,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Quelle est la probabilité pour que la fille d'un homme hémophile À soit vectrice (conductrice) d'hémophilie ?",
        "options": [
          {
            "l": "A",
            "t": "0%"
          },
          {
            "l": "B",
            "t": "12,5%"
          },
          {
            "l": "C",
            "t": "25%"
          },
          {
            "l": "D",
            "t": "50 %"
          },
          {
            "l": "E",
            "t": "100 %"
          }
        ],
        "chapterSlugs": [
          "iv-25-hemophilies-willebrand"
        ],
        "programItems": [
          "IV-25"
        ]
      },
      {
        "n": 2,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Lequel de ces médicaments possède des propriétés amœbicides ?",
        "options": [
          {
            "l": "A",
            "t": "Métronidazole"
          },
          {
            "l": "B",
            "t": "Fluconazole"
          },
          {
            "l": "C",
            "t": "Praziquantel"
          },
          {
            "l": "D",
            "t": "Amphotéricine B"
          },
          {
            "l": "E",
            "t": "Artéméther"
          }
        ],
        "chapterSlugs": [
          "v-34-antiprotozoaires-anthelminthiques"
        ],
        "programItems": [
          "V-34"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les propositions suivantes concernant la fasciolose à Fasciola hepatica, une seule est fausse. Laquelle ?",
        "options": [
          {
            "l": "A",
            "t": "Elle est responsable d'une hyperéosinophilie lors de la phase d'invasion"
          },
          {
            "l": "B",
            "t": "Elle se contracte par ingestion de poisson cru"
          },
          {
            "l": "C",
            "t": "Elle se traite par le triclabendazole"
          },
          {
            "l": "D",
            "t": "C'est une zoonose"
          },
          {
            "l": "E",
            "t": "Elle est due à un trématode"
          }
        ],
        "chapterSlugs": [
          "iv-17-helminthoses"
        ],
        "programItems": [
          "IV-17"
        ]
      },
      {
        "n": 4,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Dans les méningoencéphalites avec signes d'atteinte temporale et liquide cérébrospinal clair, lympho- cytaire, normoglycorachique, quel agent est le plus souvent impliqué ?",
        "options": [
          {
            "l": "A",
            "t": "Enterovirus"
          },
          {
            "l": "B",
            "t": "Poliovirus"
          },
          {
            "l": "C",
            "t": "Virus de l'immunodéficience humaine"
          },
          {
            "l": "D",
            "t": "Herpes simplex virus"
          },
          {
            "l": "E",
            "t": "/nfluenzavirus"
          }
        ],
        "chapterSlugs": [
          "iv-1-infections-snc"
        ],
        "programItems": [
          "IV-1"
        ]
      },
      {
        "n": 5,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "; Parmi les propositions suivantes concernant la radioactivité, laquelle est exacte ?",
        "options": [
          {
            "l": "A",
            "t": "L'activité d'un radionucléide est proportionnelle à sa période au carré"
          },
          {
            "l": "B",
            "t": "Une unité de masse atomique vaut un gramme"
          },
          {
            "l": "C",
            "t": "La période d'un radionucléide est inversement proportionnelle à sa constante radioactive"
          },
          {
            "l": "D",
            "t": "Les émetteurs alpha sont des radionucléides artificiels dont Z < 82"
          },
          {
            "l": "E",
            "t": "L'émission bêta moins et la capture électronique sont 2 processus qui entrent en compétition"
          }
        ],
        "chapterSlugs": [
          "i-11-rayons-x-radio-isotopes"
        ],
        "programItems": [
          "I-11"
        ]
      },
      {
        "n": 6,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "La fréquence d'une maladie autosomique récessive est de 1 / 160 000. Quelle est la fréquence de l'allèle délétère dans la population ?",
        "options": [
          {
            "l": "A",
            "t": "1/40"
          },
          {
            "l": "B",
            "t": "1/160"
          },
          {
            "l": "C",
            "t": "1/400"
          },
          {
            "l": "D",
            "t": "1/1 600"
          },
          {
            "l": "E",
            "t": "1/4000"
          }
        ],
        "chapterSlugs": [
          "ii-3-genetique-maladies-monogeniques"
        ],
        "programItems": [
          "II-3"
        ]
      },
      {
        "n": 7,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "; Parmi les anomalies chromosomiques suivantes, laquelle correspond à une anomalie de structure déséquilibrée ?",
        "options": [
          {
            "l": "A",
            "t": "47, XY, +21"
          },
          {
            "l": "B",
            "t": "47, XXX"
          },
          {
            "l": "C",
            "t": "46, XY, t(11;16)(q23;p12)"
          },
          {
            "l": "D",
            "t": "46, XX, del(5p15)"
          },
          {
            "l": "E",
            "t": "69, XXX"
          }
        ],
        "chapterSlugs": [
          "ii-6-genetique-caryotype-anomalies-chromosomiques"
        ],
        "programItems": [
          "II-6"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les propositions suivantes, laquelle est exacte ? Un père de groupes sanguins O ; RH 1, 2, -3, 4, 5 ; K1 et une mère À ; RH -1, -2, -3, 4, 5 ; K -1 ont 5 enfants appartenant aux groupes suivants. Chez quel enfant constate-t-on une exclusion de paternité ?",
        "options": [
          {
            "l": "A",
            "t": "O;RH-1, -2, -3, 4,5 ; K1"
          },
          {
            "l": "B",
            "t": "O;RH-1, -2, -3, 4,5; K-1"
          },
          {
            "l": "C",
            "t": "A ; RH 1, 2, -3, 4, 5 ; K1"
          },
          {
            "l": "D",
            "t": "A;RH1, 2, -3, 4,5; K-1"
          },
          {
            "l": "E",
            "t": "O:RH1, 2, 3, 4,5; K-1"
          }
        ],
        "chapterSlugs": [
          "ii-25-immunologie-groupes-sanguins"
        ],
        "programItems": [
          "II-25"
        ]
      },
      {
        "n": 9,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les propositions suivantes concernant les complexes solubles en solution aqueuse, laquelle est exacte ?",
        "options": [
          {
            "l": "A",
            "t": "Le ligand est constitué par l'ion complexé"
          },
          {
            "l": "B",
            "t": "L'ion complexé est le plus souvent un anion"
          },
          {
            "l": "C",
            "t": "La charge du complexe n'est pas toujours égale à la charge de l'ion complexé"
          },
          {
            "l": "D",
            "t": "Un complexe chargé est toujours monoligandé"
          },
          {
            "l": "E",
            "t": "Un complexe monoligandé cyclisé sera moins stable qu'un complexe monoligandé linéaire"
          }
        ],
        "chapterSlugs": [
          "i-12-acide-base-ph-tampons"
        ],
        "programItems": [
          "I-12"
        ]
      },
      {
        "n": 10,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les effets indésirables suivants, lequel peut être provoqué par une cycline ?",
        "options": [
          {
            "l": "A",
            "t": "Hyperglycémie"
          },
          {
            "l": "B",
            "t": "Hypertension intracrânienne"
          },
          {
            "l": "C",
            "t": "Alopécie"
          },
          {
            "l": "D",
            "t": "Tendinopathie"
          },
          {
            "l": "E",
            "t": "Hyperuricémie"
          }
        ],
        "chapterSlugs": [
          "v-26-cyclines"
        ],
        "programItems": [
          "V-26"
        ]
      },
      {
        "n": 11,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'origine d'une protéinurie, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Hypertension artérielle"
          },
          {
            "l": "B",
            "t": "Rhabdomyolyse"
          },
          {
            "l": "C",
            "t": "Effort physique important"
          },
          {
            "l": "D",
            "t": "Myélome"
          },
          {
            "l": "E",
            "t": "Hyperalbuminémie"
          }
        ],
        "chapterSlugs": [
          "iv-46-insuffisance-renale"
        ],
        "programItems": [
          "IV-46"
        ]
      },
      {
        "n": 12,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la naloxone, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "C'est un dérivé N-allylique"
          },
          {
            "l": "B",
            "t": "Elle a des propriétés agonistes sur les récepteurs mu"
          },
          {
            "l": "C",
            "t": "Elle est utilisée comme antitussif"
          },
          {
            "l": "D",
            "t": "Elle est utilisée pour corriger la dépression respiratoire induite par les morphiniques"
          },
          {
            "l": "E",
            "t": "Elle a des propriétés antalgiques"
          }
        ],
        "chapterSlugs": [
          "v-8-antalgiques"
        ],
        "programItems": [
          "V-8"
        ]
      },
      {
        "n": 13,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la protéine CD4, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle est exprimée sur des lymphocytes T régulateurs"
          },
          {
            "l": "B",
            "t": "Elle est impliquée dans les interactions entre les lymphocytes T et les cellules présentatrices de l'antigène"
          },
          {
            "l": "C",
            "t": "Elle est impliquée dans des interactions avec les molécules de classe | du CMH"
          },
          {
            "l": "D",
            "t": "Elle est présente sur les monocytes à un faible niveau d'expression"
          },
          {
            "l": "E",
            "t": "C'est un récepteur du virus de l'hépatite B"
          }
        ],
        "chapterSlugs": [
          "ii-29-immunologie-cmh-presentation-antigene"
        ],
        "programItems": [
          "II-29"
        ]
      },
      {
        "n": 14,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les médicaments suivants, lequel (lesquels) est (sont) hyperglycémiant(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Glucocorticoïdes"
          },
          {
            "l": "B",
            "t": "Clonidine"
          },
          {
            "l": "C",
            "t": "Diurétiques de l'anse"
          },
          {
            "l": "D",
            "t": "Bêta-2-mimétiques par voie systémique"
          },
          {
            "l": "E",
            "t": "Inhibiteurs calciques"
          }
        ],
        "chapterSlugs": [
          "iv-39-diabetes"
        ],
        "programItems": [
          "IV-39"
        ]
      },
      {
        "n": 15,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'intoxication éthylique aiguë, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Une hypothermie est observée"
          },
          {
            "l": "B",
            "t": "L'alcool éthylique est un dépresseur du système nerveux central"
          },
          {
            "l": "C",
            "t": "Le charbon activé est inefficace dans le traitement"
          },
          {
            "l": "D",
            "t": "Une hyperglycémie est observée chez l'enfant"
          },
          {
            "l": "E",
            "t": "Un coma hypertonique est observé dans les formes sévères"
          }
        ],
        "chapterSlugs": [
          "iii-11-toxicologie-alcools"
        ],
        "programItems": [
          "III-11"
        ]
      },
      {
        "n": 16,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": ": annulée Concernant les médicaments suivants utilisés dans le traitement du paludisme, lequel (lesquels) appartient (appartiennent) au groupe des amino-4-quinoléines ?",
        "options": [
          {
            "l": "A",
            "t": "Méfloquine"
          },
          {
            "l": "B",
            "t": "Quinine"
          },
          {
            "l": "C",
            "t": "Atovaquone"
          },
          {
            "l": "D",
            "t": "Artéméther"
          },
          {
            "l": "E",
            "t": "Primaquine"
          }
        ],
        "chapterSlugs": [
          "v-35-antimalariques"
        ],
        "programItems": [
          "V-35"
        ]
      },
      {
        "n": 17,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, laquelle (lesquelles) caractérise(nt) Pseudomonas aeruginosa ?",
        "options": [
          {
            "l": "A",
            "t": "Bacille à Gram négatif"
          },
          {
            "l": "B",
            "t": "Absence d'oxydase"
          },
          {
            "l": "C",
            "t": "Absence de croissance sur gélose ordinaire"
          },
          {
            "l": "D",
            "t": "Immobilité à 37 °C"
          },
          {
            "l": "E",
            "t": "Aérobie strict"
          }
        ],
        "chapterSlugs": [
          "iv-9-immunodeprime"
        ],
        "programItems": [
          "IV-9"
        ]
      },
      {
        "n": 18,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la chromatographie liquide haute performance, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Les solutions aqueuses sont utilisées comme solvant d'élution sur les colonnes de silice vierge"
          },
          {
            "l": "B",
            "t": "Le détecteur électrochimique est universel"
          },
          {
            "l": "C",
            "t": "Les colonnes de silice vierge sont considérées comme apolaires"
          },
          {
            "l": "D",
            "t": "Le pH du solvant d'élution influence la rétention des molécules ionisables"
          },
          {
            "l": "E",
            "t": "La séparation de deux substances dépend du débit de la phase mobile"
          }
        ],
        "chapterSlugs": [
          "i-5-chromatographie"
        ],
        "programItems": [
          "I-5"
        ]
      },
      {
        "n": 19,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les micro-organismes suivants, lequel (lesquels) est (sont) responsable(s) d'une diarrhée sanglante ?",
        "options": [
          {
            "l": "A",
            "t": "Clostridioides difficile"
          },
          {
            "l": "B",
            "t": "Escherichia coli entéro-invasif"
          },
          {
            "l": "C",
            "t": "Staphylococcus aureus"
          },
          {
            "l": "D",
            "t": "Shigella spp"
          },
          {
            "l": "E",
            "t": "Entamoeba histolytica"
          }
        ],
        "chapterSlugs": [
          "iv-4-infections-digestives"
        ],
        "programItems": [
          "IV-4"
        ]
      },
      {
        "n": 20,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Quelle(s) est (sont) la (les) proposition(s) exacte(s) concernant le temps de céphaline avec activateur (TCA) ?",
        "options": [
          {
            "l": "A",
            "t": "Il explore la voie extrinsèque de la coagulation"
          },
          {
            "l": "B",
            "t": "Il est allongé chez les sujets déficitaires en facteur VII"
          },
          {
            "l": "C",
            "t": "It est allongé dans l'insuffisance hépatocellulaire sévère"
          },
          {
            "l": "D",
            "t": "Il est allongé dans l'hémophilie B"
          },
          {
            "l": "E",
            "t": "Sa mesure est effectuée en présence de thromboplastine calcique"
          }
        ],
        "chapterSlugs": [
          "iv-36-allongement-tq-tca"
        ],
        "programItems": [
          "IV-36"
        ]
      },
      {
        "n": 21,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmiles propositions suivantes concernant les glycopeptides, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Ils inhibent la synthèse protéique des bactéries"
          },
          {
            "l": "B",
            "t": "Ils sont habituellement actifs sur les staphylocoques"
          },
          {
            "l": "C",
            "t": "La vancomycine et la teicoplanine appartiennent à cette famille d'antibiotiques"
          },
          {
            "l": "D",
            "t": "Les transpeptidases sont des enzymes bactériennes responsables de la résistance aux glycopeptides"
          },
          {
            "l": "E",
            "t": "Ils sont néphrotoxiques"
          }
        ],
        "chapterSlugs": [
          "v-28-glycopeptides"
        ],
        "programItems": [
          "V-28"
        ]
      },
      {
        "n": 22,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'agranulocytose, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle est définie par un nombre de polynucléaires neutrophiles < 1,0 G/L"
          },
          {
            "l": "B",
            "t": "Elle entraîne un risque infectieux sévère"
          },
          {
            "l": "C",
            "t": "Elle entraîne un risque de coagulation intravasculaire"
          },
          {
            "l": "D",
            "t": "Elle peut être traitée par administration d'érythropoïétine"
          },
          {
            "l": "E",
            "t": "C'est une indication des immunoglobulines polyvalentes"
          }
        ],
        "chapterSlugs": [
          "iv-30-cytopenies-medicamenteuses"
        ],
        "programItems": [
          "IV-30"
        ]
      },
      {
        "n": 23,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant Microsporum canis, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "C'est un champignon zoophile"
          },
          {
            "l": "B",
            "t": "Les lésions qu'il provoque sont fluorescentes à la lumière de Wood"
          },
          {
            "l": "C",
            "t": "Il est traité par le tinidazole"
          },
          {
            "l": "D",
            "t": "I! produit des macroconidies en fuseau"
          },
          {
            "l": "E",
            "t": "Il est responsable d'un tinea capitis (teigne tondante) à grandes plaques"
          }
        ],
        "chapterSlugs": [
          "iv-20-dermatophytes"
        ],
        "programItems": [
          "IV-20"
        ]
      },
      {
        "n": 24,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'enquête de type «exposés» - «non exposés», laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle est très utilisée pour l'étude des risques professionnels"
          },
          {
            "l": "B",
            "t": "Elle est plus rapide qu'une enquête «cas-témoins»"
          },
          {
            "l": "C",
            "t": "Elle compare la prévalence d'une maladie entre les deux groupes en fonction de l'exposition à un facteur de risque"
          },
          {
            "l": "D",
            "t": "Le problème des «perdus de vue» est crucial dans le suivi de cohorte"
          },
          {
            "l": "E",
            "t": "Elle est particulièrement indiquée pour les maladies rares"
          }
        ],
        "chapterSlugs": [
          "iii-5-methodologie-epidemiologique"
        ],
        "programItems": [
          "III-5"
        ]
      },
      {
        "n": 25,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le foscarnet, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "C'est un analogue du pyrophosphate"
          },
          {
            "l": "B",
            "t": "Il inhibe spécifiquement l'ADN polymérase virale"
          },
          {
            "l": "C",
            "t": "Il est indiqué en cas de résistance au ganciclovir"
          },
          {
            "l": "D",
            "t": "Il peut induire une anémie"
          },
          {
            "l": "E",
            "t": "L'administration d'un aminoside augmente sa toxicité rénale"
          }
        ],
        "chapterSlugs": [
          "v-32-antiviraux"
        ],
        "programItems": [
          "V-32"
        ]
      },
      {
        "n": 26,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le volume apparent de distribution d'un médicament, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "C'est un volume fictif dans lequel devrait se distribuer le médicament pour être à la même concentration que celle dans le sang ou le plasma"
          },
          {
            "l": "B",
            "t": "Le volume de distribution est toujours augmenté en cas d'hypoalbuminémie"
          },
          {
            "l": "C",
            "t": "Un volume de distribution élevé signifie que le médicament a une forte affinité pour un ou des tissus"
          },
          {
            "l": "D",
            "t": "Le volume de distribution peut varier avec l'âge"
          },
          {
            "l": "E",
            "t": "Le plus petit volume de distribution possible est d'environ 0,3 litre par kg de poids du patient"
          }
        ],
        "chapterSlugs": [
          "pharmaco-pk-base"
        ],
        "programItems": [
          "V-4"
        ]
      },
      {
        "n": 27,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'amœbose, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle est due à Entamoeba histolytica"
          },
          {
            "l": "B",
            "t": "Elle se contracte par ingestion d'aliments souillés par des kystes"
          },
          {
            "l": "C",
            "t": "Elle n'est présente qu'en Afrique"
          },
          {
            "l": "D",
            "t": "Le diagnostic de la forme intestinale aiguë repose sur la recherche d'anticorps"
          },
          {
            "l": "E",
            "t": "Sa prise en charge thérapeutique repose sur l'administration d'albendazole"
          }
        ],
        "chapterSlugs": [
          "iv-12-protozooses-intestinales"
        ],
        "programItems": [
          "IV-12"
        ]
      },
      {
        "n": 28,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les agents suivants, lequel (lesquels) est (sont) classiquement responsable(s) de syndromes mononucléosiques sanguins ?",
        "options": [
          {
            "l": "A",
            "t": "VIH-1"
          },
          {
            "l": "B",
            "t": "Toxoplasma gondii"
          },
          {
            "l": "C",
            "t": "Chlamydia trachomatis"
          },
          {
            "l": "D",
            "t": "Virus de la grippe"
          },
          {
            "l": "E",
            "t": "Cytomegalovirus"
          }
        ],
        "chapterSlugs": [
          "iv-29-hyperlymphocytoses"
        ],
        "programItems": [
          "IV-29"
        ]
      },
      {
        "n": 29,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'ondansétron, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "C'est un agoniste des récepteurs 5-HT3"
          },
          {
            "l": "B",
            "t": "Il est indiqué en prévention des nausées et vomissements induits par les cytotoxiques"
          },
          {
            "l": "C",
            "t": "Il peut être utilisé dans le traitement de l'ulcère gastro-duodénal"
          },
          {
            "l": "D",
            "t": "Il peut provoquer des céphalées"
          },
          {
            "l": "E",
            "t": "Il peut provoquer des effets extrapyramidaux"
          }
        ],
        "chapterSlugs": [
          "v-37-antiemetiques"
        ],
        "programItems": [
          "V-37"
        ]
      },
      {
        "n": 30,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la caspofungine, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "C'est un lipopeptide"
          },
          {
            "l": "B",
            "t": "C'est une échinocandine"
          },
          {
            "l": "C",
            "t": "Elle inhibe la synthèse du glycane de la paroi cellulaire de certains champignons"
          },
          {
            "l": "D",
            "t": "Elle est active sur les cryptocoques"
          },
          {
            "l": "E",
            "t": "Elle est active sur Aspergillus"
          }
        ],
        "chapterSlugs": [
          "v-33-antifongiques"
        ],
        "programItems": [
          "V-33"
        ]
      },
      {
        "n": 31,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les antiviraux suivants, lesquels nécessitent des phosphorylations pour être actifs ?",
        "options": [
          {
            "l": "A",
            "t": "Aciclovir"
          },
          {
            "l": "B",
            "t": "Foscarnet"
          },
          {
            "l": "C",
            "t": "Lopinavir"
          },
          {
            "l": "D",
            "t": "Emtricitabine"
          },
          {
            "l": "E",
            "t": "Efavirenz"
          }
        ],
        "chapterSlugs": [
          "v-32-antiviraux"
        ],
        "programItems": [
          "V-32"
        ]
      },
      {
        "n": 32,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la maladie drépanocytaire, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle s'accompagne d'une anémie hémolytique"
          },
          {
            "l": "B",
            "t": "Sa transmission est autosomique dominante"
          },
          {
            "l": "C",
            "t": "Elle est due à la substitution d'un acide aminé sur la chaine alpha de la globine"
          },
          {
            "l": "D",
            "t": "L'hémoglobine anormale produite est appelée hémoglobine D"
          },
          {
            "l": "E",
            "t": "Elle s'accompagne d'une polymérisation de l''hémoglobine en cas d'hypoxie"
          }
        ],
        "chapterSlugs": [
          "iv-26-hemoglobinopathies"
        ],
        "programItems": [
          "IV-26"
        ]
      },
      {
        "n": 33,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les récepteurs cholinergiques, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Ils sont de type nicotinique et muscarinique au niveau du cerveau"
          },
          {
            "l": "B",
            "t": "Ils sont de type nicotinique au niveau de la jonction neuromusculaire du muscle squelettique"
          },
          {
            "l": "C",
            "t": "La stimulation des récepteurs muscariniques au niveau du tube digestif provoque une augmentation de la motilité"
          },
          {
            "l": "D",
            "t": "Ils sont de type muscarinique M3 au niveau cardiaque"
          },
          {
            "l": "E",
            "t": "La stimulation des récepteurs muscariniques M3 au niveau de l'œil provoque un myosis"
          }
        ],
        "chapterSlugs": [
          "ii-14-physiologie-neurotransmetteurs"
        ],
        "programItems": [
          "II-14"
        ]
      },
      {
        "n": 34,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ? L'Agence Nationale de Sécurité du Médicament et des produits de santé a notamment pour mission(s)",
        "options": [
          {
            "l": "A",
            "t": "La surveillance de la couverture vaccinale"
          },
          {
            "l": "B",
            "t": "La surveillance et l'observation permanentes de l'état de santé de la population"
          },
          {
            "l": "C",
            "t": "Le recueil et l'évaluation des informations sur les effets indésirables des produits de tatouage"
          },
          {
            "l": "D",
            "t": "Le recueil et l'évaluation des informations sur les effets indésirables des médicaments vétérinaires"
          },
          {
            "l": "E",
            "t": "Le recueil et l'évaluation des informations sur les incidents impliquant un dispositif médical"
          }
        ],
        "chapterSlugs": [
          "iii-1-surveillance-vigilances"
        ],
        "programItems": [
          "III-1"
        ]
      },
      {
        "n": 35,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les anti-TNF alpha, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Ce sont tous des anticorps monoclonaux"
          },
          {
            "l": "B",
            "t": "Ils sont indiqués dans le traitement du lupus systémique"
          },
          {
            "l": "C",
            "t": "Ils exposent au risque de tuberculose"
          },
          {
            "l": "D",
            "t": "L'association au méthotrexate est contre-indiquée"
          },
          {
            "l": "E",
            "t": "Ils sont administrés par voie parentérale"
          }
        ],
        "chapterSlugs": [
          "v-38-immunosuppresseurs"
        ],
        "programItems": [
          "V-38"
        ]
      },
      {
        "n": 36,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la parathormone (PTH), laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle stimule la résorption osseuse"
          },
          {
            "l": "B",
            "t": "Elle augmente la réabsorption rénale du phosphate"
          },
          {
            "l": "C",
            "t": "Elle augmente la synthèse rénale du calcitriol"
          },
          {
            "l": "D",
            "t": "C'est une hormone hypercalcémiante"
          },
          {
            "l": "E",
            "t": "Elle est stimulée par la TSH"
          }
        ],
        "chapterSlugs": [
          "ii-23-physiologie-osseuse-phosphocalcique"
        ],
        "programItems": [
          "II-23"
        ]
      },
      {
        "n": 37,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les facteurs suivants, lequel (lequels) contribue(nt) à la formation de l'ascite chez le patient cirrhotique ?",
        "options": [
          {
            "l": "A",
            "t": "L'augmentation de la pression portale"
          },
          {
            "l": "B",
            "t": "La diminution du TP (activité du complexe prothrombinique)"
          },
          {
            "l": "C",
            "t": "L'augmentation de la pression oncotique du plasma"
          },
          {
            "l": "D",
            "t": "L'hyperaldostéronisme secondaire"
          },
          {
            "l": "E",
            "t": "La diminution de la synthèse de l'albumine"
          }
        ],
        "chapterSlugs": [
          "iv-44-cholestase-cytolyse"
        ],
        "programItems": [
          "IV-44"
        ]
      },
      {
        "n": 38,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'érythropoïétine recombinante (rEPO), laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "L'usage détourné de la rEPO à des fins d'amélioration des performances sportives entraîne un risque d'accident thromboembolique"
          },
          {
            "l": "B",
            "t": "Chez l'insuffisant rénal chronique, la posologie de rEPO est ajustée pour maintenir une hémoglobinémie comprise entre 100 et 120 g/L"
          },
          {
            "l": "C",
            "t": "La carence martiale est une cause de résistance à la rEPO"
          },
          {
            "l": "D",
            "t": "Il existe des génériques de la rEPO"
          },
          {
            "l": "E",
            "t": "L'administration de rEPO peut provoquer une hypotension artérielle"
          }
        ],
        "chapterSlugs": [
          "v-39-facteurs-croissance-hematopoietiques"
        ],
        "programItems": [
          "V-39"
        ]
      },
      {
        "n": 39,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ? L'information due à une personne malade porte sur",
        "options": [
          {
            "l": "A",
            "t": "Les différentes investigations et traitements proposés"
          },
          {
            "l": "B",
            "t": "L'utilité de ces investigations et traitements"
          },
          {
            "l": "C",
            "t": "Les conséquences prévisibles en cas de refus des traitements proposés"
          },
          {
            "l": "D",
            "t": "Le coût des soins pour l'assurance maladie"
          },
          {
            "l": "E",
            "t": "Un risque grave qui ne se réalise qu'exceptionnellement"
          }
        ],
        "chapterSlugs": [
          "iii-8-droits-des-patients"
        ],
        "programItems": [
          "III-8"
        ]
      },
      {
        "n": 40,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la leucémie myéloïde chronique, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Une splénomégalie est fréquemment observée"
          },
          {
            "l": "B",
            "t": "Une analyse par biologie moléculaire permet de mettre en évidence un transcrit de fusion de BCR-ABL"
          },
          {
            "l": "C",
            "t": "Une hyperleucocytose supérieure à 50 G/L peut être observée lors du diagnostic"
          },
          {
            "l": "D",
            "t": "Le rituximab est le traitement de première intention"
          },
          {
            "l": "E",
            "t": "Une hyperbasophilie est fréquemment observée"
          }
        ],
        "chapterSlugs": [
          "iv-24-leucemie-myeloide-chronique"
        ],
        "programItems": [
          "IV-24"
        ]
      },
      {
        "n": 41,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, relatives à la régression linéaire de Y en fonction de X, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Les pentes des droites de régression de Y en fonction de X et de X en fonction de Y sont toujours égales"
          },
          {
            "l": "B",
            "t": "On appelle résidu d'un couple de valeur (x;, y;) la différence entre la valeur observée y; de Y et la valeur ajustée sur la droite de régression pour la valeur x; de X"
          },
          {
            "l": "C",
            "t": "La variance résiduelle correspond aussi à la variance de Y lorsqu'on maintient la variable X constante"
          },
          {
            "l": "D",
            "t": "Avant de faire un test de pente nulle, il est préférable d'avoir visualisé le nuage de points"
          },
          {
            "l": "E",
            "t": "Le coefficient de corrélation linéaire peut être utilisé pour comparer à zéro l'ordonnée à l'origine de la droite de régression"
          }
        ],
        "chapterSlugs": [
          "i-18-tests-liaison-regression-correlation-chi2"
        ],
        "programItems": [
          "I-18"
        ]
      },
      {
        "n": 42,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la vasopressine, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle favorise la réabsorption de l'eau au niveau du tubule collecteur"
          },
          {
            "l": "B",
            "t": "Elle a pour effet de concentrer l'urine"
          },
          {
            "l": "C",
            "t": "Elle favorise la réabsorption de sodium au niveau du tubule collecteur"
          },
          {
            "l": "D",
            "t": "Elle se fixe sur un récepteur couplé aux protéines G"
          },
          {
            "l": "E",
            "t": "Elle diminue la réabsorption tubulaire de l'urée"
          }
        ],
        "chapterSlugs": [
          "ii-18-physiologie-renale"
        ],
        "programItems": [
          "II-18"
        ]
      },
      {
        "n": 43,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'acide urique, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Il est plus soluble que l'urate"
          },
          {
            "l": "B",
            "t": "La xanthine oxydase diminue sa concentration plasmatique"
          },
          {
            "l": "C",
            "t": "C'est le produit final du catabolisme des bases puriques chez l'Homme"
          },
          {
            "l": "D",
            "t": "Sa concentration plasmatique augmente au cours du traitement cytolytique des leucémies aiguës"
          },
          {
            "l": "E",
            "t": "Sa concentration plasmatique est augmentée en cas d'insuffisance rénale sévère"
          }
        ],
        "chapterSlugs": [
          "iv-48-hyperuricemies"
        ],
        "programItems": [
          "IV-48"
        ]
      },
      {
        "n": 44,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le message nociceptif transmis de la périphérie vers la moelle épinière, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "La transmission du message douloureux se fait par l'intermédiaire de fibres faiblement myélinisées et de fibres de conduction lente amyélinisées"
          },
          {
            "l": "B",
            "t": "La transmission douloureuse se fait par l'intermédiaire de fibres de type C et A"
          },
          {
            "l": "C",
            "t": "La transmission douloureuse se fait par des fibres nerveuses qui se projettent dans la corne ventrale de la moelle épinière"
          },
          {
            "l": "D",
            "t": "Le corps cellulaire des fibres nerveuses périphériques de conduction de la douleur est localisé dans la moelle épinière"
          },
          {
            "l": "E",
            "t": "Les fibres périphériques du toucher de type AB peuvent participer à la modulation de la transmission du message douloureux au niveau des neurones convergents de la moelle épinière"
          }
        ],
        "chapterSlugs": [
          "ii-22-physiologie-douleur"
        ],
        "programItems": [
          "II-22"
        ]
      },
      {
        "n": 45,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Quels sont les effets indésirables potentiels de l'amiodarone ?",
        "options": [
          {
            "l": "A",
            "t": "Hyperthyroïdie"
          },
          {
            "l": "B",
            "t": "Photosensibilisation"
          },
          {
            "l": "C",
            "t": "Hypokaliémie"
          },
          {
            "l": "D",
            "t": "Hypothyroïdie"
          },
          {
            "l": "E",
            "t": "Strabisme"
          }
        ],
        "chapterSlugs": [
          "v-18-antiarythmiques"
        ],
        "programItems": [
          "V-18"
        ]
      },
      {
        "n": 46,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les hypnotiques, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Le zolpidem est une benzodiazépine"
          },
          {
            "l": "B",
            "t": "Les benzodiazépines hypnotiques potentialisent l'action du GABA sur le récepteur GABA de type À"
          },
          {
            "l": "C",
            "t": "L'halopéridol est utilisé comme hypnotique"
          },
          {
            "l": "D",
            "t": "Le zolpidem doit être prescrit sur une ordonnance sécurisée"
          },
          {
            "l": "E",
            "t": "La zopiclone est une cyclopyrrolone"
          }
        ],
        "chapterSlugs": [
          "v-10-anxiolytiques-hypnotiques"
        ],
        "programItems": [
          "V-10"
        ]
      },
      {
        "n": 47,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la pénétrance d'une maladie génétique, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle est complète quand tous les signes cliniques associés à la maladie sont présents"
          },
          {
            "l": "B",
            "t": "Elle est complète quand tous les sujets porteurs de l'anomalie génétique sont atteints par la maladie"
          },
          {
            "l": "C",
            "t": "Elle peut varier en fonction de l'âge du patient"
          },
          {
            "l": "D",
            "t": "Elle peut varier en fonction du sexe du patient"
          },
          {
            "l": "E",
            "t": "L'hémochromatose est une maladie à pénétrance incomplète"
          }
        ],
        "chapterSlugs": [
          "ii-3-genetique-maladies-monogeniques"
        ],
        "programItems": [
          "II-3"
        ]
      },
      {
        "n": 48,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les symptômes suivants, lequel (lesquels) évoque(nt) une hyperviscosité sanguine ?",
        "options": [
          {
            "l": "A",
            "t": "Troubles visuels"
          },
          {
            "l": "B",
            "t": "Paresthésies des extrémités"
          },
          {
            "l": "C",
            "t": "Vertiges"
          },
          {
            "l": "D",
            "t": "Acouphènes"
          },
          {
            "l": "E",
            "t": "Céphalées"
          }
        ],
        "chapterSlugs": [
          "iv-27-myelome-dysglobulinemies"
        ],
        "programItems": [
          "IV-27"
        ]
      },
      {
        "n": 49,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le déficit immunitaire commun variable (DICV), laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Son diagnostic est posé dans les premières semaines de la vie"
          },
          {
            "l": "B",
            "t": "Le traitement repose sur l'administration d'immunoglobulines polyvalentes"
          },
          {
            "l": "C",
            "t": "Il résulte d'une mutation sur le gène BTK (Bruton Tyrosin Kinase)"
          },
          {
            "l": "D",
            "t": "Les concentrations sériques d'immunoglobulines G (lgG) sont diminuées"
          },
          {
            "l": "E",
            "t": "Il est caractérisé par une lymphopénie B sévère"
          }
        ],
        "chapterSlugs": [
          "iv-34-deficits-immunitaires-congenitaux"
        ],
        "programItems": [
          "IV-34"
        ]
      },
      {
        "n": 50,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les thyréocytes, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Ils n'ont pas de rôle sécrétoire"
          },
          {
            "l": "B",
            "t": "Ils ont un pôle apical avec des microvillosités se projetant dans la colloïde"
          },
          {
            "l": "C",
            "t": "Ils prennent une forme prismatique en cas d'hyperactivité"
          },
          {
            "l": "D",
            "t": "Certains thyréocytes peuvent être en hyperactivité et d'autres en hypoactivité au sein d'un même follicule"
          },
          {
            "l": "E",
            "t": "Ils réalisent l'endocytose de la colloïde"
          }
        ],
        "chapterSlugs": [
          "ii-20-physiologie-thyroide"
        ],
        "programItems": [
          "II-20"
        ]
      },
      {
        "n": 51,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "| Parmi les propositions suivantes concernant les inhibiteurs de la pompe à protons, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "L'inhibition de la pompe à protons est réversible"
          },
          {
            "l": "B",
            "t": "Ce sont tous des prodrogues"
          },
          {
            "l": "C",
            "t": "Leur utilisation prolongée expose à un sur-risque de fracture osseuse"
          },
          {
            "l": "D",
            "t": "L'oméprazole est métabolisé par le cytochrome P450 2D6"
          },
          {
            "l": "E",
            "t": "Leurs formes galéniques orales sont obligatoirement gastrorésistantes"
          }
        ],
        "chapterSlugs": [
          "v-36-ulcere-gastroduodenal"
        ],
        "programItems": [
          "V-36"
        ]
      },
      {
        "n": 52,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le principe actif ci-dessous, laquelle (lesquelles) est (sont) exacte(s) ? FaC CH, x] CIS Oo « N",
        "options": [
          {
            "l": "A",
            "t": "C'est un analogue de la sérotonine"
          },
          {
            "l": "B",
            "t": "C'est un antagoniste des récepteurs 5-HT18,p"
          },
          {
            "l": "C",
            "t": "Il diminue la pression artérielle"
          },
          {
            "l": "D",
            "t": "C'est un antidépresseur inhibiteur de la recapture de la sérotonine"
          },
          {
            "l": "E",
            "t": "Il régule le rythme circadien"
          }
        ],
        "chapterSlugs": [
          "v-11-antidepresseurs-normothymiques"
        ],
        "programItems": [
          "V-11"
        ]
      },
      {
        "n": 53,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les techniques suivantes utilisant la réaction antigène-anticorps, laquelle (lesquelles) permet(tent) une détection de l'analyte à l'œil nu ?",
        "options": [
          {
            "l": "A",
            "t": "Immunofixation"
          },
          {
            "l": "B",
            "t": "Cytométrie en flux"
          },
          {
            "l": "C",
            "t": "Immunodot"
          },
          {
            "l": "D",
            "t": "Hémagglutination"
          },
          {
            "l": "E",
            "t": "ELISA"
          }
        ],
        "chapterSlugs": [
          "i-15-reaction-antigene-anticorps"
        ],
        "programItems": [
          "I-15"
        ]
      },
      {
        "n": 54,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes à propos des syndromes myélodysplasiques, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Ils atteignent essentiellement les enfants"
          },
          {
            "l": "B",
            "t": "Une anémie régénérative est fréquemment retrouvée"
          },
          {
            "l": "C",
            "t": "Une thrombocytose est fréquemment retrouvée"
          },
          {
            "l": "D",
            "t": "Le caryotype médullaire est utile au diagnostic"
          },
          {
            "l": "E",
            "t": "La transformation en leucémie aiguë lymphoblastique est une complication fréquente"
          }
        ],
        "chapterSlugs": [
          "iv-28-leucemies-aigues-smd"
        ],
        "programItems": [
          "IV-28"
        ]
      },
      {
        "n": 55,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les statines, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elles inhibent de manière compétitive l'acétyl Coenzyme A réductase"
          },
          {
            "l": "B",
            "t": "La pravastatine est métabolisée au niveau hépatique par le CYP 3A4"
          },
          {
            "l": "C",
            "t": "Elles peuvent provoquer une augmentation de la créatinine plasmatique"
          },
          {
            "l": "D",
            "t": "L'association avec les antifongiques azolés augmente le risque de rnabdomyolyse"
          },
          {
            "l": "E",
            "t": "Elles ont un effet plus marqué sur la diminution du cholestérol que sur celle des triglycérides"
          }
        ],
        "chapterSlugs": [
          "v-41-normolipemiants"
        ],
        "programItems": [
          "V-41"
        ]
      },
      {
        "n": 56,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les anti-thyroïdiens de synthèse, laquelle (lesquelles) est (sont) exacte(s) ? ; Co 15",
        "options": [
          {
            "l": "A",
            "t": "Ils bloquent l'organification de l'iode sur la thyroglobuline"
          },
          {
            "l": "B",
            "t": "Ils ont un délai d'action de 3 semaines"
          },
          {
            "l": "C",
            "t": "Ils sont indiqués dans la maladie de Basedow"
          },
          {
            "l": "D",
            "t": "Ils provoquent une augmentation de la TSH en cas de surdosage"
          },
          {
            "l": "E",
            "t": "Ils peuvent provoquer une anémie"
          }
        ],
        "chapterSlugs": [
          "v-40-dysthyroidie"
        ],
        "programItems": [
          "V-40"
        ]
      },
      {
        "n": 57,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les macrolides, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Ils inhibent la synthèse protéique en se liant à la sous-unité 50S du ribosome bactérien"
          },
          {
            "l": "B",
            "t": "Ils diffusent dans le système nerveux central"
          },
          {
            "l": "C",
            "t": "Ils agissent sur les bactéries intracellulaires"
          },
          {
            "l": "D",
            "t": "Ils peuvent provoquer des torsades de pointe"
          },
          {
            "l": "E",
            "t": "Ils sont inducteurs du cytochrome P450 3A4"
          }
        ],
        "chapterSlugs": [
          "v-25-macrolides"
        ],
        "programItems": [
          "V-25"
        ]
      },
      {
        "n": 58,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, laquelle (lesquelles) est (sont) en accord avec les objectifs de la prévention tertiaire ?",
        "options": [
          {
            "l": "A",
            "t": "Favoriser l'accessibilité au dépistage organisé"
          },
          {
            "l": "B",
            "t": "Limiter les handicaps consécutifs à une maladie"
          },
          {
            "l": "C",
            "t": "Limiter le nombre de nouveaux cas de maladies dans une population"
          },
          {
            "l": "D",
            "t": "Limiter les conséquences socio-économiques de la maladie"
          },
          {
            "l": "E",
            "t": "Limiter l'exposition aux facteurs de risque des maladies"
          }
        ],
        "chapterSlugs": [
          "iii-2-prevention-promotion-sante"
        ],
        "programItems": [
          "III-2"
        ]
      },
      {
        "n": 59,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la régulation hormonale de la glycémie, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "La synthèse de glucagon est maximale en période post-prandiale"
          },
          {
            "l": "B",
            "t": "Le glucagon active la gluconéogenèse hépatique"
          },
          {
            "l": "C",
            "t": "Le glucagon active la glycogénogenèse"
          },
          {
            "l": "D",
            "t": "Le rapport insuline / glucagon est augmenté en période de jeûne"
          },
          {
            "l": "E",
            "t": "L'adrénaline stimule la glycogénolyse"
          }
        ],
        "chapterSlugs": [
          "ii-11-biochimie-regulation-glycemie"
        ],
        "programItems": [
          "II-11"
        ]
      },
      {
        "n": 60,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le diabète de type 1, laquelle (lesquelles) est (sont) exacte(s) ? 3 CE1 EPREUVE D'EXERCICES D'APPLICATION Exercice N° 1 (40 points) Enoncé On dissout 8,20 g d'acétate de sodium dans un litre d'une solution aqueuse d'acide acétique 10\"! M. On obtient la solution A. Données : masse molaire de CH,COONa : 82,0 g.mor* ; pKa du couple CH,COOH / CH4COO\" : 4,75. Questions QUESTION N° 1 : Calculer le pH de la solution A. QUESTION N° 2: Calculer la molarité de la solution A. QUESTION N° 3: A 100 mL de la solution A, on ajoute 107% mole d'hydroxyde de sodium. Calculer la variation du pH, en négligeant la variation du volume. QUESTION N° 4 : On dispose d'une solution molaire d'acide chlorhydrique et d'une solution molaire d'hydroxyde de sodium. On veut préparer 500 mL d'une solution tampon acétique décimolaire de pH égal à 5,00 à partir de 250 mL de la solution A. Comment procéder ? QUESTION N° 5 : Si l'on veut préparer une solution tampon acétique décimolaire de pH égal à 6,00, peut-on utiliser la solution A 2 Justifier. Page 1/1 94 CE2 EPREUVE D'EXERCICES D'APPLICATION Exercice N° 2 (40 points) Enoncé La mortalité toutes causes confondues est étudiée au cours d'une enquête épidémiologique dans les régions A et B. Pour chaque population (A et B), les effectifs par tranche d'âge et les nombres de décès enregistrés sont présentés dans le tableau 1. Tableau 1 : Effectifs et nombres de décès dans les populations À et B ; effectifs de la population de référence. à Effectif Nombre de décès Effectif Nombre de décès | Effectif population [se | we | 0 | 00 | » | me | [a | 0 | % | 0 | we | we | CE A NE A NE Questions QUESTION N° 1 : Pour la population A, calculer les taux de mortalité spécifiques par tranche d'âge (exprimés pour 100 personnes). QUESTION N° 2 : Pour chaque population (A et B), définir et calculer le taux brut de mortalité (exprimé pour 100 personnes). Est-il pertinent de comparer directement la mortalité entre les populations A et B sur la base des taux bruts de mortalité ? Justifier. QUESTION N° 3: A partir des données fournies, comment comparer la mortalité de la population À à celle de la population B, en tenant compte de la structure en âge des deux populations ? Décrire brièvement le principe de la (des) méthode(s) proposée(s). QUESTION N° 4 : En utilisant les données de la population de référence (Tableau 1), calculer les taux de mortalité standardisés sur l'âge pour la population A et la population B. Interpréter les résultats. Page 1/1 120 CE3 EPREUVE D'EXERCICES D'APPLICATION Exercice N° 3 (40 points) Enoncé Le médicament M a été injecté à un volontaire sain par voie IV de façon répétée, à la dose de 2,5 g, toutes les 12 heures. La figure ci-dessous représente l'évolution des concentrations plasmatiques du médicament M en fonction du temps : I 40 | > E , 4 = 2 | &u , U 45 | = 1 Temps(heures) Questions QUESTION N° 1 : Déterminer pour le médicament M, chez ce sujet : - le volume de distribution - le temps de demi-vie d'élimination - la clairance d'élimination QUESTION N° 2: La concentration de médicament M dans l'urine recueillie entre le temps 0 (1° injection) et le temps 12 h (juste avant la 2° injection) est de 96 mg/L pour un volume d'urine de 350 ML. Quelle est la clairance rénale de M ? QUESTION N° 3: Déterminer le facteur d'accumulation (R) du médicament M par les 2 méthodes suivantes : - graphiquement - par le calcul, à partir des paramètres pharmacocinétiques précédemment déterminés Page 1/2 120 CE3 EPREUVE D'EXERCICES D'APPLICATION Exercice N° 3 (40 points) QUESTION N° 4 : Calculer l'AUC entre deux injections à l'état d'équilibre. QUESTION N° 5 : Quelle est la quantité de médicament M attendue dans l'urine dans l'intervalle 60 h — 72 h ? Page 2/2 403952 CE4 EPREUVE D'EXERCICES D'APPLICATION Exercice N° 4 (40 points) Enoncé La scintigraphie pulmonaire est un examen de référence dans le diagnostic de l'embolie pulmonaire. Elle est basée sur l'injection au patient de MacroAgrégats d'Albumine humaine (MAA), marqués au technétium-99 métastable (°9\"Tc), disponible sous la forme d'un éluat de pertechnétate de sodium (°*\"TcO,\", Na*) issu d'un générateur de molybdène-99 (2Mo / °\"Tc), selon le schéma de désintégration suivant : 99 42 MO 99 43 TC 140,5 keV 0 keV Questions QUESTION N° 1 : Compléter les 2 réactions de filiation radioactive en précisant le ou les types de rayonnements émis : 99 47M0 es 99 431C —> QUESTION N° 2: Calculer en s-* les constantes radioactives du molybdène-99 et du technétium-99m (métastable). Données : - période physique du molybdène-99 : T, = 66 heures - période physique du technétium-99m : Ta = 6 heures QUESTION N° 3: Une activité de 148 MBq de 2\"Tc-MAA est administrée à un patient. Calculer le nombre de noyaux de technétium-99m correspondant. Page 1/2 403952 CE4 EPREUVE D'EXERCICES D'APPLICATION Exercice N° 4 (40 points) QUESTION N° 4 : Sachant que cette activité injectée correspond à 300 000 particules de °?\"Tc-MAA injectées, déterminer le nombre moyen d'atomes de 2\"Tc greffés sur chaque molécule de macroagrégat. QUESTION N° 5: Après injection intraveineuse, 80 % des °\"Tc-MAA sont retenus au niveau des artérioles précapillaires au moment de leur premier passage dans les poumons. Sachant que l'organisme humain possède 300 millions de ces artérioles, calculer la proportion d'artérioles qui seront temporairement obstruées suite à cette injection. QUESTION N° 6: Afin d'adapter cette exploration de perfusion pulmonaire à l'imagerie TEP (Tomographie par Emission de Positons), une radiopharmacie développe le marquage des MAA par un émetteur bêta+, le gallium-68 (éGa). Ce radionucléide est également obtenu à partir d'un générateur, utilisant le germanium-68 comme élément père, selon la filiation suivante : S$Ge CE; Ty = 2703 ie B* (x %); CE(1 %); Tu = 68 min 68Zn Expliquer le mécanisme de transformation nucléaire de capture électronique, notée « CE », dans l'équation ci-dessus. QUESTION N° 7 : Quelle est l'intensité de l'émission bêta+ lors de la désintégration du °8Ga décrite dans l'équation de la question précédente ? QUESTION N° 8: En parallèle, une étude de radioprotection montre que pour une même valeur d'activité injectée, la dose efficace reçue par le manipulateur lors d'une TEP pulmonaire au 68Ga-MAA est 2,5 fois supérieure à celle reçue lors de la réalisation d'une scintigraphie pulmonaire au °?\"Tc-MAA. 405279 CES EPREUVE D'EXERCICES D'APPLICATION Exercice N° 5 (40 points) Enoncé L'hexokinase (EC 2.7.1.1) catalyse la réaction suivante : Glucose + ATP —. glucose-6-phosphate + ADP Dans les conditions retenues pour la mesure de son activité enzymatique, les Km respectifs de l''hexokinase pour le glucose et l'ATP sont tous les deux égaux à 0,1.10-3 M. On prépare les solutions mères suivantes : S1: tampon triéthanolamine 100 MM, pH 7,6 S2 : glucose 550 mM dans S1 S3 : ATP 81 MM dans S1 S4 : MgCl» 100 MM dans S1 Le milieu réactionnel, préincubé à 37 °C, contient : 1,5 mL de S1, 1,2 ML de S2, 0,1 mL de S3, 0,2 mL de S4. On rajoute 0,04 mL d'une préparation P d'hexokinase. La concentration de glucose-6-phosphate formé est de 1,2.1 0-5 M au bout de 3 min et de 2,0.10-5 M au bout de 5 min. Questions QUESTION N° 1 : Calculer la vitesse réactionnelle (en mol.min!.L-1) en vérifiant que l'on est dans des conditions de vitesse initiale. QUESTION N° 2: La vitesse initiale (vo) mesurée correspond-elle à la vitesse maximale (Vmax) ? Justifier. QUESTION N° 3: Calculer la concentration en activité enzymatique (en U/L) contenue dans la préparation P. Page 1/2 405279 CES EPREUVE D'EXERCICES D'APPLICATION Exercice N° 5 (40 points) QUESTION N° 4 : La glucosamine est également un substrat de l'hexokinase. Le Km de l'hexokinase pour la glucosamine est de 1,5.10-8 M. Les activités moléculaires spécifiques de l'hexokinase sont respectivement de 80 000 min! pour le glucose et 56 000 min-* pour la glucosamine. On remplace la solution S2 de glucose par une solution de glucosamine à la même concentration. Les autres conditions réactionnelles restent identiques. Calculer l'activité enzymatique (en U/L) de la préparation P mesurée en présence de glucosamine. QUESTION N° 5: Pour mesurer la vitesse de formation du glucose-6-phosphate dans l'expérience décrite dans l'énoncé, on utilise la réaction catalysée par la glucose-6-phosphate déshydrogénase (G6PD). 1520 CD1",
        "options": [
          {
            "l": "A",
            "t": "Écrire la réaction catalysée par la G6PD."
          },
          {
            "l": "B",
            "t": "À quelle longueur d'onde les mesures d'absorbance seront-elles réalisées ? Dans quel sens variera l'absorbance ? Justifier."
          },
          {
            "l": "C",
            "t": "Quelles sont les conditions liées aux concentrations de G6PD et du co-substrat dans le milieu réactionnel ? Justifier. Page 2/2"
          },
          {
            "l": "D",
            "t": "La recherche d'auto-anticorps anti ZnT8 est utile au diagnostic"
          },
          {
            "l": "E",
            "t": "Le dosage du peptide C dans le plasma est un marqueur de la sécrétion résiduelle d'insuline"
          }
        ],
        "chapterSlugs": [
          "iv-39-diabetes"
        ],
        "programItems": [
          "IV-39"
        ]
      }
    ]
  },
  {
    "key": "2024",
    "label": "Décembre 2024",
    "source": "Concours national d'internat en pharmacie — session de décembre 2024 (CNG), extrait par OCR. Le CNG ne publie pas de corrigé : réponses non fournies.",
    "items": [
      {
        "n": 1,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les affirmations suivantes concernant la lévodopa, une seule est fausse. Laquelle ?",
        "options": [
          {
            "l": "A",
            "t": "C'est un acide aminé de la série L"
          },
          {
            "l": "B",
            "t": "Elle possède un pouvoir rotatoire"
          },
          {
            "l": "C",
            "t": "Elle possède deux fonctions phénol"
          },
          {
            "l": "D",
            "t": "C'est un acide aminé essentiel"
          },
          {
            "l": "E",
            "t": "Elle peut être décarboxylée en dopamine"
          }
        ],
        "chapterSlugs": [
          "v-7-neurologie"
        ],
        "programItems": [
          "V-7"
        ]
      },
      {
        "n": 2,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les propositions suivantes se rapportant aux spécificités allotypiques des immunoglobulines, quelle est celle qui est exacte ?",
        "options": [
          {
            "l": "A",
            "t": "Elles sont identiques chez deux jumeaux hétérozygotes"
          },
          {
            "l": "B",
            "t": "Elles sont partagées par un groupe d'individus au sein de l'espèce"
          },
          {
            "l": "C",
            "t": "Elles confèrent des propriétés biologiques particulières à une classe d'Immunoglobuline"
          },
          {
            "l": "D",
            "t": "Elles sont portées par les chaînes légères lambda"
          },
          {
            "l": "E",
            "t": "Elles sont portées par les chaînes lourdes mu"
          }
        ],
        "chapterSlugs": [
          "ii-27-immunologie-immunoglobulines"
        ],
        "programItems": [
          "II-27"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les effets indésirables suivants, lequel n'est pas provoqué par le captopril ?",
        "options": [
          {
            "l": "A",
            "t": "Toux"
          },
          {
            "l": "B",
            "t": "Dysgueusie"
          },
          {
            "l": "C",
            "t": "Hypotension orthostatique '"
          },
          {
            "l": "D",
            "t": "Hypokaliémie"
          },
          {
            "l": "E",
            "t": "Angiœdème"
          }
        ],
        "chapterSlugs": [
          "v-14-antihypertenseurs"
        ],
        "programItems": [
          "V-14"
        ]
      },
      {
        "n": 4,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les bactéries suivantes, laquelle ne présente pas de résistance acquise à l'amoxicilline par production de bêta-lactamase ?",
        "options": [
          {
            "l": "A",
            "t": "Staphylococcus aureus"
          },
          {
            "l": "B",
            "t": "Streptococcus pneumoniae"
          },
          {
            "l": "C",
            "t": "Haemophilus influenzae"
          },
          {
            "l": "D",
            "t": "Escherichia coli"
          },
          {
            "l": "E",
            "t": "Neisseria gonorrhoeae"
          }
        ],
        "chapterSlugs": [
          "iv-11-resistance-anti-infectieux"
        ],
        "programItems": [
          "IV-11"
        ]
      },
      {
        "n": 5,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les parasitoses suivantes, laquelle n'est pas une indication de traitement par l'albendazole ?",
        "options": [
          {
            "l": "A",
            "t": "Kyste hydatique"
          },
          {
            "l": "B",
            "t": "Anguillulose"
          },
          {
            "l": "C",
            "t": "Oxyurose"
          },
          {
            "l": "D",
            "t": "Bilharziose"
          },
          {
            "l": "E",
            "t": "Giardiose"
          }
        ],
        "chapterSlugs": [
          "v-34-antiprotozoaires-anthelminthiques"
        ],
        "programItems": [
          "V-34"
        ]
      },
      {
        "n": 6,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les propositions suivantes concernant la spectroscopie atomique, laquelle est fausse ?",
        "options": [
          {
            "l": "A",
            "t": "Les niveaux d'énergie sont quantifiés"
          },
          {
            "l": "B",
            "t": "L'ensemble des transitions entre les niveaux fondamentaux et excités constitue le spectre atomique"
          },
          {
            "l": "C",
            "t": "La répartition des atomes entre les niveaux excités et fondamentaux est donnée par la loi de Boltzman"
          },
          {
            "l": "D",
            "t": "Après excitation, le nombre d'atomes à l'état excité est supérieur à celui resté à l'état fondamental"
          },
          {
            "l": "E",
            "t": "La raie la plus intense du spectre d'émission est appelée raie de résonance"
          }
        ],
        "chapterSlugs": [
          "i-2-spectrophotometrie-atomique"
        ],
        "programItems": [
          "I-2"
        ]
      },
      {
        "n": 7,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Concernant la mise sur le marché d'un nouveau médicament qui prolonge la vie des personnes atteintes d'une maladie M, quelle est la proposition exacte ?",
        "options": [
          {
            "l": "A",
            "t": "Ce nouveau traitement va entraîner la diminution de l'incidence de la maladie M"
          },
          {
            "l": "B",
            "t": "Ce nouveau traitement va entraîner une diminution de l'incidence et de la prévalence de la maladie M"
          },
          {
            "l": "C",
            "t": "Ce nouveau traitement va entraîner une augmentation de l'incidence de la maladie M"
          },
          {
            "l": "D",
            "t": "Ce nouveau traitement va entraîner une augmentation de la prévalence de la maladie M"
          },
          {
            "l": "E",
            "t": "Ce nouveau traitement va entraîner une diminution de la prévalence de la maladie M"
          }
        ],
        "chapterSlugs": [
          "iii-5-methodologie-epidemiologique"
        ],
        "programItems": [
          "III-5"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les propositions suivantes concernant le trajet des rayonnements ionisants dans la matière, quelle est celle qui est exacte ?",
        "options": [
          {
            "l": "A",
            "t": "Le dépôt d'énergie dans la matière est homogène sur tout le parcours d'une particule B\" (bêta moins)"
          },
          {
            "l": "B",
            "t": "Les particules a (alpha) sont des rayonnements très pénétrants"
          },
          {
            "l": "C",
            "t": "Les rayonnements y (gamma) d'énergie 140 keV interagissent majoritairement par effet photoélectrique dans le plomb (Z = 82)"
          },
          {
            "l": "D",
            "t": "Les rayonnements fB* (bêta plus) interagissent par effet Compton dans l'eau intracellulaire"
          },
          {
            "l": "E",
            "t": "Les rayons X interagissent par rayonnement de freinage dans le plomb (Z = 82)"
          }
        ],
        "chapterSlugs": [
          "i-11-rayons-x-radio-isotopes"
        ],
        "programItems": [
          "I-11"
        ]
      },
      {
        "n": 9,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les propositions suivantes concernant le rendement d'extraction liquide/liquide d'un médicament basique (pKa = 8,0) en solution aqueuse, laquelle est exacte ? Le rendement sera maximal",
        "options": [
          {
            "l": "A",
            "t": "Pour pH < 6,0"
          },
          {
            "l": "B",
            "t": "PourpH=8,0"
          },
          {
            "l": "C",
            "t": "Pour pH = 10,0"
          },
          {
            "l": "D",
            "t": "Pour 6,0 <pH< 10,0"
          },
          {
            "l": "E",
            "t": "Quel que soit le pH du milieu"
          }
        ],
        "chapterSlugs": [
          "i-1-extraction-separation"
        ],
        "programItems": [
          "I-1"
        ]
      },
      {
        "n": 10,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les propositions suivantes concernant les effets ou troubles observés lors d'une intoxication à la chloroquine, laquelle est exacte ?",
        "options": [
          {
            "l": "A",
            "t": "Effet stabilisant de membrane"
          },
          {
            "l": "B",
            "t": "Effet inotrope positif"
          },
          {
            "l": "C",
            "t": "Effet vasoconstricteur"
          },
          {
            "l": "D",
            "t": "Hyperkaliémie"
          },
          {
            "l": "E",
            "t": "Bradycardie"
          }
        ],
        "chapterSlugs": [
          "v-48-cardiotoxiques"
        ],
        "programItems": [
          "V-48"
        ]
      },
      {
        "n": 11,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ? La chromatographie liquide haute performance à polarité de phases inversée met en œuvre",
        "options": [
          {
            "l": "A",
            "t": "Une phase stationnaire apolaire"
          },
          {
            "l": "B",
            "t": "Une rétention des analytes augmentée lorsque la proportion d'acétonitrile dans la phase mobile diminue"
          },
          {
            "l": "C",
            "t": "Un mécanisme de séparation en fonction de la taille des analytes"
          },
          {
            "l": "D",
            "t": "Un phénomène de partage"
          },
          {
            "l": "E",
            "t": "Une rétention accrue des analytes les plus polaires"
          }
        ],
        "chapterSlugs": [
          "i-5-chromatographie"
        ],
        "programItems": [
          "I-5"
        ]
      },
      {
        "n": 12,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'hémoglobine, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle est synthétisée par les érythroblastes"
          },
          {
            "l": "B",
            "t": "Elle a une structure tétramérique"
          },
          {
            "l": "C",
            "t": "Une molécule d'hémoglobine a une capacité de transport de 4 molécules de dioxygène"
          },
          {
            "l": "D",
            "t": "Chaque molécule d'hème contient un atome de fer à l'état ferrique"
          },
          {
            "l": "E",
            "t": "Elle est dégradée en bilirubine"
          }
        ],
        "chapterSlugs": [
          "ii-9-biochimie-hemoglobines"
        ],
        "programItems": [
          "II-9"
        ]
      },
      {
        "n": 13,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les antibiotiques suivants, lequel (lesquels) est (sont) éliminé(s) majoritairement par voie urinaire ?",
        "options": [
          {
            "l": "A",
            "t": "Josamycine"
          },
          {
            "l": "B",
            "t": "Pristinamycine"
          },
          {
            "l": "C",
            "t": "Amoxicilline"
          },
          {
            "l": "D",
            "t": "Ofloxacine"
          },
          {
            "l": "E",
            "t": "Gentamicine"
          }
        ],
        "chapterSlugs": [
          "v-1-etapes-adme"
        ],
        "programItems": [
          "V-1"
        ]
      },
      {
        "n": 14,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les affirmations concernant les comprimés à libération prolongée, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Ce sont des comprimés gastro-résistants"
          },
          {
            "l": "B",
            "t": "Ce sont des comprimés nus"
          },
          {
            "l": "C",
            "t": "Ils libèrent leur principe actif en fonction du pH du tractus digestif"
          },
          {
            "l": "D",
            "t": "Ils peuvent diminuer les effets indésirables du médicament"
          },
          {
            "l": "E",
            "t": "Ils sont préparés à partir de principes actifs à demi-vie longue"
          }
        ],
        "chapterSlugs": [
          "v-52-formes-liberation-distribution-modifiees"
        ],
        "programItems": [
          "V-52"
        ]
      },
      {
        "n": 15,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes relatives à la diffusion passive d'un médicament à travers les membranes, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle est facilitée par une masse moléculaire faible"
          },
          {
            "l": "B",
            "t": "Elle concerne la forme ionisée du médicament"
          },
          {
            "l": "C",
            "t": "Elle s'effectue contre un gradient de concentration"
          },
          {
            "l": "D",
            "t": "Elle est diminuée si la molécule est liposoluble"
          },
          {
            "l": "E",
            "t": "Elle s'effectue sans consommation d'énergie"
          }
        ],
        "chapterSlugs": [
          "v-2-facteurs-sort-principes-actifs"
        ],
        "programItems": [
          "V-2"
        ]
      },
      {
        "n": 16,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le cholestérol, laquellle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Il est à l'origine de la formation des pigments biliaires"
          },
          {
            "l": "B",
            "t": "Il est reconnu par les récepteurs des LDL"
          },
          {
            "l": "C",
            "t": "Il est le constituant principal des chylomicrons"
          },
          {
            "l": "D",
            "t": "|| est le précurseur des hormones stéroïdiennes"
          },
          {
            "l": "E",
            "t": "Il est éliminé par la bile"
          }
        ],
        "chapterSlugs": [
          "ii-12-biochimie-metabolisme-lipides"
        ],
        "programItems": [
          "II-12"
        ]
      },
      {
        "n": 17,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Concernant une hypertriglycéridémie à 3,0 mmol/L (2,62 g/L), quelle(s) est (sont) la (les) proposition(s) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle peut être liée à la prise chronique d'éthanol"
          },
          {
            "l": "B",
            "t": "Elle entraîne une opalescence du sérum"
          },
          {
            "l": "C",
            "t": "Elle peut être associée au diabète insipide"
          },
          {
            "l": "D",
            "t": "Elle peut être à l'origine d'une pancréatite aiguë"
          },
          {
            "l": "E",
            "t": "Elle ne permet pas le calcul du cholestérol-LDL par la formule de Friedewald"
          }
        ],
        "chapterSlugs": [
          "iv-40-hyperlipoproteinemies"
        ],
        "programItems": [
          "IV-40"
        ]
      },
      {
        "n": 18,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les tests suivants, lequel (lesquels) permet (permettent) l'exploration de l'immunité cellulaire ?",
        "options": [
          {
            "l": "A",
            "t": "Le dosage du complément hémolytique total (CH50)"
          },
          {
            "l": "B",
            "t": "La numération et le phénotypage lymphocytaires"
          },
          {
            "l": "C",
            "t": "Les tests IGRA (Interferon Gamma Release Assay)"
          },
          {
            "l": "D",
            "t": "Le dosage des immunoglobulines sériques"
          },
          {
            "l": "E",
            "t": "La réponse proliférative des lymphocytes à la stimulation par un antigène"
          }
        ],
        "chapterSlugs": [
          "ii-31-immunologie-reponses-humorale-cellulaire"
        ],
        "programItems": [
          "II-31"
        ]
      },
      {
        "n": 19,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la terbutaline, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "C'est une prodrogue"
          },
          {
            "l": "B",
            "t": "Elle a des propriétés anticholinergiques"
          },
          {
            "l": "C",
            "t": "Elle peut provoquer des tremblements des extrémités"
          },
          {
            "l": "D",
            "t": "Elle nécessite un rinçage de la bouche après inhalation"
          },
          {
            "l": "E",
            "t": "C'est un bronchodilatateur à action rapide"
          }
        ],
        "chapterSlugs": [
          "v-19-antiasthmatiques-antiallergiques"
        ],
        "programItems": [
          "V-19"
        ]
      },
      {
        "n": 20,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les médicaments suivants, lequel (lesquels) est (sont) un (des) antidépresseur(s) tricyclique(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Fluoxétine"
          },
          {
            "l": "B",
            "t": "Amitriptyline"
          },
          {
            "l": "C",
            "t": "Mirtazapine"
          },
          {
            "l": "D",
            "t": "Clomipramine"
          },
          {
            "l": "E",
            "t": "Sertraline"
          }
        ],
        "chapterSlugs": [
          "v-11-antidepresseurs-normothymiques"
        ],
        "programItems": [
          "V-11"
        ]
      },
      {
        "n": 21,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les héparines de bas poids moléculaire (HBPM), laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Les HBPM ont une demi-vie plus longue que l'héparine non fractionnée"
          },
          {
            "l": "B",
            "t": "Les HBPM peuvent être responsables de thrombopénies allo-immunes"
          },
          {
            "l": "C",
            "t": "La surveillance de l'activité des HBPM nécessite un prélèvement 12 h après l'injection"
          },
          {
            "l": "D",
            "t": "La surveillance d'un traitement curatif par HBPM nécessite la mesure du temps de céphaline avec activateur"
          },
          {
            "l": "E",
            "t": "Les HBPM peuvent s'accumuler dans le plasma en cas d'insuffisance rénale"
          }
        ],
        "chapterSlugs": [
          "v-16-hemostase"
        ],
        "programItems": [
          "V-16"
        ]
      },
      {
        "n": 22,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant Haemophilus influenzae, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "|! peut être responsable de méningites"
          },
          {
            "l": "B",
            "t": "|| peut être cultivé sur gélose ordinaire"
          },
          {
            "l": "C",
            "t": "Il peut produire une pénicillinase"
          },
          {
            "l": "D",
            "t": "Il peut provoquer des épiglottites"
          },
          {
            "l": "E",
            "t": "Certaines souches sont capsulées"
          }
        ],
        "chapterSlugs": [
          "iv-5-infections-orl-respiratoires"
        ],
        "programItems": [
          "IV-5"
        ]
      },
      {
        "n": 23,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Quelle(s) est (sont) la (les) complication(s) habituelle(s) que l'on peut rencontrer au cours d'un myélome ?",
        "options": [
          {
            "l": "A",
            "t": "Insuffisance rénale"
          },
          {
            "l": "B",
            "t": "Hypercalcémie"
          },
          {
            "l": "C",
            "t": "Anémie microcytaire"
          },
          {
            "l": "D",
            "t": "Ictère hémolytique"
          },
          {
            "l": "E",
            "t": "Infections"
          }
        ],
        "chapterSlugs": [
          "iv-27-myelome-dysglobulinemies"
        ],
        "programItems": [
          "IV-27"
        ]
      },
      {
        "n": 24,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, laquelle (lesquelles) est (sont) une (des) forme(s) endocellulaire(s) de Toxoplasma gondii rencontrée(s) chez l'Homme ?",
        "options": [
          {
            "l": "A",
            "t": "Tachyzoïte"
          },
          {
            "l": "B",
            "t": "Hypnozoîïte"
          },
          {
            "l": "C",
            "t": "Oocyste"
          },
          {
            "l": "D",
            "t": "Bradyzoïte"
          },
          {
            "l": "E",
            "t": "Gamète"
          }
        ],
        "chapterSlugs": [
          "iv-15-toxoplasmose"
        ],
        "programItems": [
          "IV-15"
        ]
      },
      {
        "n": 25,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'épidémiologie des infections à cytomégalovirus, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Le réservoir du virus est strictement humain"
          },
          {
            "l": "B",
            "t": "La transmission peut se faire par la salive"
          },
          {
            "l": "C",
            "t": "La transmission peut se faire par voie sexuelle"
          },
          {
            "l": "D",
            "t": "La transmission peut se faire par transfusion sanguine"
          },
          {
            "l": "E",
            "t": "La séroprévalence est indépendante du niveau socio-économique de la population"
          }
        ],
        "chapterSlugs": [
          "iv-9-immunodeprime"
        ],
        "programItems": [
          "IV-9"
        ]
      },
      {
        "n": 26,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les toxines suivantes, quelles sont celles qui peuvent être produites par Staphylococcus aureus ?",
        "options": [
          {
            "l": "A",
            "t": "Entérotoxine"
          },
          {
            "l": "B",
            "t": "Vérotoxine"
          },
          {
            "l": "C",
            "t": "Toxine érythrogène"
          },
          {
            "l": "D",
            "t": "Exfoliatine"
          },
          {
            "l": "E",
            "t": "Toxine du syndrome de choc toxique"
          }
        ],
        "chapterSlugs": [
          "iv-2-bacteriemies-endocardites"
        ],
        "programItems": [
          "IV-2"
        ]
      },
      {
        "n": 27,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les bactériémies à point de départ urinaire, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elles sont principalement dues à des entérobactéries"
          },
          {
            "l": "B",
            "t": "Leur diagnostic bactériologique nécessite de pratiquer des hémocultures"
          },
          {
            "l": "C",
            "t": "Elles s'accompagnent habituellement de fièvre"
          },
          {
            "l": "D",
            "t": "Elles sont la conséquence d'une pyélonéphrite"
          },
          {
            "l": "E",
            "t": "Une hyperleucocytose est souvent associée"
          }
        ],
        "chapterSlugs": [
          "iv-2-bacteriemies-endocardites"
        ],
        "programItems": [
          "IV-2"
        ]
      },
      {
        "n": 28,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": ": annulée Parmi les diurétiques suivants, lequel (lesquels) à (ont) une action natriurétique située principalement au niveau du tube contourné distal ?",
        "options": [
          {
            "l": "A",
            "t": "Furosémide"
          },
          {
            "l": "B",
            "t": "Spironolactone"
          },
          {
            "l": "C",
            "t": "Canrénoate de sodium"
          },
          {
            "l": "D",
            "t": "Amiloride"
          },
          {
            "l": "E",
            "t": "Acétazolamide"
          }
        ],
        "chapterSlugs": [
          "v-15-diuretiques"
        ],
        "programItems": [
          "V-15"
        ]
      },
      {
        "n": 29,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les molécules de classe Il du CMH (Complexe Majeur d'Histocompatibilité), laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elles sont formées d'une chaîne polypeptidique alpha et d'une chaîne polypeptidique bêta"
          },
          {
            "l": "B",
            "t": "Elles existent sous forme membranaire"
          },
          {
            "l": "C",
            "t": "Elles sont exprimées de façon constitutive dans la majorité des tissus"
          },
          {
            "l": "D",
            "t": "Elles sont représentées par les molécules HLA-A, B et C"
          },
          {
            "l": "E",
            "t": "Elles ont pour ligand physiologique la molécule LFA-1"
          }
        ],
        "chapterSlugs": [
          "ii-29-immunologie-cmh-presentation-antigene"
        ],
        "programItems": [
          "II-29"
        ]
      },
      {
        "n": 30,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ? Une insuffisance hépatocellulaire sévère se manifeste au plan biologique par",
        "options": [
          {
            "l": "A",
            "t": "Une diminution de la transferrine désialylée"
          },
          {
            "l": "B",
            "t": "Une hyperalbuminémie"
          },
          {
            "l": "C",
            "t": "Un allongement du temps de Quick"
          },
          {
            "l": "D",
            "t": "Une baisse de l'activité plasmatique du facteur V"
          },
          {
            "l": "E",
            "t": "Une baisse de l'ammoniémie"
          }
        ],
        "chapterSlugs": [
          "iv-44-cholestase-cytolyse"
        ],
        "programItems": [
          "IV-44"
        ]
      },
      {
        "n": 31,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ? La présence des corps cétoniques urinaires est une des caractéristiques",
        "options": [
          {
            "l": "A",
            "t": "Du diabète de type 1 non équilibré"
          },
          {
            "l": "B",
            "t": "Du coma hypoglycémique"
          },
          {
            "l": "C",
            "t": "Du coma hyperosmolaire"
          },
          {
            "l": "D",
            "t": "Du jeûne prolongé"
          },
          {
            "l": "E",
            "t": "Du diabète insipide"
          }
        ],
        "chapterSlugs": [
          "ii-13-biochimie-cetogenese"
        ],
        "programItems": [
          "II-13"
        ]
      },
      {
        "n": 32,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Concernant le choc anaphylactique, quelles sont les propositions exactes ?",
        "options": [
          {
            "l": "A",
            "t": "Il est précédé par des signes annonciateurs de type œdème angioneurotique"
          },
          {
            "l": "B",
            "t": "Il peut être provoqué par l'administration de curares"
          },
          {
            "l": "C",
            "t": "Il peut mettre en jeu un mécanisme d'hypersensibilité due à des IgE"
          },
          {
            "l": "D",
            "t": "Il est dû à la libération massive d'interleukine 4"
          },
          {
            "l": "E",
            "t": "- Il justifie l'administration d'adrénaline"
          }
        ],
        "chapterSlugs": [
          "iv-32-asthme-allergies"
        ],
        "programItems": [
          "IV-32"
        ]
      },
      {
        "n": 33,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les examens biologiques suivants, lequel (lesquels) est (sont) utile(s) au diagnostic d'une polyarthrite rhumatoïde ?",
        "options": [
          {
            "l": "A",
            "t": "La numération des lymphocytes T"
          },
          {
            "l": "B",
            "t": "La recherche des anticorps dirigés contre des protéines citrullinées"
          },
          {
            "l": "C",
            "t": "La recherche des anticorps anti-ADN natif (double brin)"
          },
          {
            "l": "D",
            "t": "Le dosage de la protéine C-réactive (CRP)"
          },
          {
            "l": "E",
            "t": "La recherche des anticorps dirigés contre le cytomégalovirus"
          }
        ],
        "chapterSlugs": [
          "iv-33-maladies-auto-immunes"
        ],
        "programItems": [
          "IV-33"
        ]
      },
      {
        "n": 34,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les micro-organismes suivants, lequel (lesquels) peut (peuvent) être transmis de la mère à l'enfant au cours de la grossesse ou de l'accouchement ?",
        "options": [
          {
            "l": "A",
            "t": "Cytomegalovirus"
          },
          {
            "l": "B",
            "t": "Streptococcus agalactiae"
          },
          {
            "l": "C",
            "t": "Haemophilus influenzae"
          },
          {
            "l": "D",
            "t": "Helicobacter pylori"
          },
          {
            "l": "E",
            "t": "Virus de l'immunodéficience humaine"
          }
        ],
        "chapterSlugs": [
          "iv-7-infections-grossesse"
        ],
        "programItems": [
          "IV-7"
        ]
      },
      {
        "n": 35,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le basiliximab, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "C'est un anticorps monoclonal humanisé"
          },
          {
            "l": "B",
            "t": "Il est dirigé contre le récepteur CD25 de l'interleukine 2"
          },
          {
            "l": "C",
            "t": "Il doit être utilisé en association avec un autre traitement immunosuppresseur"
          },
          {
            "l": "D",
            "t": "|| est contre-indiqué chez la femme enceinte"
          },
          {
            "l": "E",
            "t": "Il est utilisé dans le traitement curatif du rejet aigu de greffe d'organes"
          }
        ],
        "chapterSlugs": [
          "v-38-immunosuppresseurs"
        ],
        "programItems": [
          "V-38"
        ]
      },
      {
        "n": 36,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les interférons bêta, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "ls sont indiqués dans le traitement de la sclérose en plaques"
          },
          {
            "l": "B",
            "t": "La pégylation modifie leur demi-vie d'élimination"
          },
          {
            "l": "C",
            "t": "Ils peuvent être administrés par voie intramusculaire"
          },
          {
            "l": "D",
            "t": "Ils modulent les récepteurs de la sphingosine-1-phosphate"
          },
          {
            "l": "E",
            "t": "L'administration de paracétamol permet de prévenir le syndrome pseudogrippal dont ils sont responsables"
          }
        ],
        "chapterSlugs": [
          "v-39-facteurs-croissance-hematopoietiques"
        ],
        "programItems": [
          "V-39"
        ]
      },
      {
        "n": 37,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les Agences Régionales de Santé (ARS), lesquelles sont exactes ?",
        "options": [
          {
            "l": "A",
            "t": "Elles fixent la liste des médicaments utilisables dans les établissements de santé"
          },
          {
            "l": "B",
            "t": "Elles mettent en œuvre la procédure de certification des établissements de santé"
          },
          {
            "l": "C",
            "t": "Leurs missions couvrent les soins de ville"
          },
          {
            "l": "D",
            "t": "Elles coordonnent le réseau régional de vigilances et d'appui"
          },
          {
            "l": "E",
            "t": "Elles concluent des contrats pluriannuels d'objectifs et de moyens seulement avec les établissements publics de santé"
          }
        ],
        "chapterSlugs": [
          "iii-7-etablissements-sante-pui"
        ],
        "programItems": [
          "III-7"
        ]
      },
      {
        "n": 38,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'ensemble des anti-inflammatoires non stéroïdiens, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Ils sont fortement liés aux protéines plasmatiques"
          },
          {
            "l": "B",
            "t": "Ils ont une toxicité rénale"
          },
          {
            "l": "C",
            "t": "Ils doivent être utilisés avec prudence si associés au rivaroxaban"
          },
          {
            "l": "D",
            "t": "Ils sont contre-indiqués en cas d'insuffisance cardiaque sévère non contrôlée"
          },
          {
            "l": "E",
            "t": "Ils diminuent l'action antihypertensive des inhibiteurs de l'enzyme de conversion (IEC)"
          }
        ],
        "chapterSlugs": [
          "v-20-anti-inflammatoires"
        ],
        "programItems": [
          "V-20"
        ]
      },
      {
        "n": 39,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le trou anionique plasmatique, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Il est augmenté en cas d'acidocétose diabétique"
          },
          {
            "l": "B",
            "t": "Il est augmenté en cas de diarrhées chroniques"
          },
          {
            "l": "C",
            "t": "Il peut être mesuré par cryoscopie"
          },
          {
            "l": "D",
            "t": "Il est augmenté en cas d'acidose lactique"
          },
          {
            "l": "E",
            "t": "Son augmentation s'accompagne d'une hyperchlorurémie"
          }
        ],
        "chapterSlugs": [
          "iv-42-troubles-acidobasiques"
        ],
        "programItems": [
          "IV-42"
        ]
      },
      {
        "n": 40,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la lévothyroxine, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "C'est un dérivé tri-iodé"
          },
          {
            "l": "B",
            "t": "Elle est indiquée dans le traitement de l'hypothyroïdie"
          },
          {
            "l": "C",
            "t": "Elle a une demi-vie plasmatique inférieure à 24 heures"
          },
          {
            "l": "D",
            "t": "Elle augmente l'effet anticoagulant des AVK"
          },
          {
            "l": "E",
            "t": "Elle expose à un risque de tachycardie"
          }
        ],
        "chapterSlugs": [
          "v-40-dysthyroidie"
        ],
        "programItems": [
          "V-40"
        ]
      },
      {
        "n": 41,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le métabolisme du fer, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "La concentration en fer sérique reflète le niveau des réserves en fer de l'organisme"
          },
          {
            "l": "B",
            "t": "L'hepcidine diminue l'absorption intestinale du fer"
          },
          {
            "l": "C",
            "t": "La ferritinémie est augmentée dans les syndromes inflammatoires"
          },
          {
            "l": "D",
            "t": "La transferrinémie est augmentée dans les carences martiales"
          },
          {
            "l": "E",
            "t": "L'absorption intestinale du fer ferreux est meilleure que celle du fer ferrique"
          }
        ],
        "chapterSlugs": [
          "iv-45-metabolisme-fer"
        ],
        "programItems": [
          "IV-45"
        ]
      },
      {
        "n": 42,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les poudres de principes actifs, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "L'homogénéité d'un mélange de poudres peut être influencée par des masses volumiques différentes"
          },
          {
            "l": "B",
            "t": "La morphologie etlagranulométrie particulaires déterminent le comportement d'écoulement des poudres"
          },
          {
            "l": "C",
            "t": "La distribution granulométrique d'une poudre peut être analysée par diffraction laser"
          },
          {
            "l": "D",
            "t": "Il est possible de préparer 100 gélules de taille n°4 (volume 0,21 mL) dosées à 1,5 g d'un principe actif dont la masse volumique est de 0,5 g/cmê"
          },
          {
            "l": "E",
            "t": "La surface spécifique d'une poudre influence la vitesse de dissolution"
          }
        ],
        "chapterSlugs": [
          "v-51-formes-liberation-conventionnelle"
        ],
        "programItems": [
          "V-51"
        ]
      },
      {
        "n": 43,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, lesquelles sont exactes ? Un médicament dont la prescription est réservée à certains médecins spécialistes",
        "options": [
          {
            "l": "A",
            "t": "Doit systématiquement être prescrit sur une ordonnance de médicament d'exception"
          },
          {
            "l": "B",
            "t": "Peut être dispensé à la fois par le circuit hospitalier et le circuit officinal"
          },
          {
            "l": "C",
            "t": "Doit nécessairement être inscrit sur la liste en sus (financement hors GHS)"
          },
          {
            "l": "D",
            "t": "Peut être un médicament à prescription initiale hospitalière"
          },
          {
            "l": "E",
            "t": "Peut être classé ainsi au seul motif d'un prix élevé"
          }
        ],
        "chapterSlugs": [
          "iii-6-medicaments-dispositifs-medicaux"
        ],
        "programItems": [
          "III-6"
        ]
      },
      {
        "n": 44,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les formules chromosomiques suivantes, laquelle (lesquelles) est (sont) susceptible(s) de représenter une anomalie de structure ?",
        "options": [
          {
            "l": "A",
            "t": "45, X, 46, XX, 47, XXX"
          },
          {
            "l": "B",
            "t": "46, XX, del(1)(q21)"
          },
          {
            "l": "C",
            "t": "46, XY, t(1;12)(q25;g22)"
          },
          {
            "l": "D",
            "t": "47, XY, +21"
          },
          {
            "l": "E",
            "t": "46, XY, inv(9)(gq21.1:q32)"
          }
        ],
        "chapterSlugs": [
          "ii-6-genetique-caryotype-anomalies-chromosomiques"
        ],
        "programItems": [
          "II-6"
        ]
      },
      {
        "n": 45,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ? Une hyperkaliémie peut être la conséquence",
        "options": [
          {
            "l": "A",
            "t": "D'une hémolyse intravasculaire"
          },
          {
            "l": "B",
            "t": "D'une alcalose métabolique"
          },
          {
            "l": "C",
            "t": "D'une insuffisance rénale chronique sévère"
          },
          {
            "l": "D",
            "t": "D'une rnabdomyolyse"
          },
          {
            "l": "E",
            "t": "D'un traitement par IEC (inhibiteur de l'enzyme de conversion)"
          }
        ],
        "chapterSlugs": [
          "iv-41-troubles-hydro-electrolytiques"
        ],
        "programItems": [
          "IV-41"
        ]
      },
      {
        "n": 46,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les phénothiazines, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elles ont des propriétés anticholinergiques"
          },
          {
            "l": "B",
            "t": "Les thioxanthènes sont structuralement très proches des dérivés phénothiaziniques"
          },
          {
            "l": "C",
            "t": "Ce sont des antagonistes dopaminergiques D2"
          },
          {
            "l": "D",
            "t": "Ce sont des molécules photosensibilisantes"
          },
          {
            "l": "E",
            "t": "Elles peuvent provoquer des dyslipidémies"
          }
        ],
        "chapterSlugs": [
          "v-9-antipsychotiques"
        ],
        "programItems": [
          "V-9"
        ]
      },
      {
        "n": 47,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les anticorps irréguliers, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Ce sont des lgM"
          },
          {
            "l": "B",
            "t": "lis sont mis en évidence par la technique du test indirect à l'antiglobuline (test de Goombs indirect)"
          },
          {
            "l": "C",
            "t": "Ils peuvent apparaître lors d'une grossesse"
          },
          {
            "l": "D",
            "t": "Ils sont liés à la diversité des systèmes antigéniques érythrocytaires"
          },
          {
            "l": "E",
            "t": "Ils peuvent être responsables d'accidents transfusionnels"
          }
        ],
        "chapterSlugs": [
          "ii-25-immunologie-groupes-sanguins"
        ],
        "programItems": [
          "II-25"
        ]
      },
      {
        "n": 48,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les anticorps monoclonaux dirigés contre le TNF-alpha et utilisés en thérapeutique, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Ils sont administrés par voie orale"
          },
          {
            "l": "B",
            "t": "Ils sont indiqués dans le traitement de la polyarthrite rhumatoïde"
          },
          {
            "l": "C",
            "t": "Ils sont contre-indiqués en association avec le méthotrexate"
          },
          {
            "l": "D",
            "t": "Leur utilisation implique de rechercher en amont une infection tuberculeuse latente"
          },
          {
            "l": "E",
            "t": "Ils peuvent induire l'apparition d'anticorps neutralisant leur effet"
          }
        ],
        "chapterSlugs": [
          "v-58-anticorps-monoclonaux"
        ],
        "programItems": [
          "V-58"
        ]
      },
      {
        "n": 49,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, laquelle (lesquelles) peut (peuvent) s'accompagner d'un déficit en vitamine K ?",
        "options": [
          {
            "l": "A",
            "t": "Gastrectomie"
          },
          {
            "l": "B",
            "t": "Malabsorption digestive sévère"
          },
          {
            "l": "C",
            "t": "Obstruction chronique des voies biliaires"
          },
          {
            "l": "D",
            "t": "3ère trimestre de grossesse, en l'absence de substitution"
          },
          {
            "l": "E",
            "t": "Nouveau-né, en l'absence de substitution"
          }
        ],
        "chapterSlugs": [
          "iv-36-allongement-tq-tca"
        ],
        "programItems": [
          "IV-36"
        ]
      },
      {
        "n": 50,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les principes actifs suivants, lequel (lesquels) à (ont) une marge thérapeutique étroite ?",
        "options": [
          {
            "l": "A",
            "t": "Digoxine"
          },
          {
            "l": "B",
            "t": "Ramipril"
          },
          {
            "l": "C",
            "t": "Tacrolimus"
          },
          {
            "l": "D",
            "t": "Carbamazépine"
          },
          {
            "l": "E",
            "t": "Propranolol"
          }
        ],
        "chapterSlugs": [
          "v-6-effet-dose-marge-therapeutique"
        ],
        "programItems": [
          "V-6"
        ]
      },
      {
        "n": 51,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les risques microbiologiques liés à l'eau destinée à la consommation humaine, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Les aérosols générés lors d'une douche sont impliqués dans la transmission de Legionella"
          },
          {
            "l": "B",
            "t": "Les réserves d'eau à plus de 50 °C favorisent le développement de Legionella"
          },
          {
            "l": "C",
            "t": "Un dépassement d'une valeur seuil pour E. coli est un facteur de risque de toxi-infections alimentaires collectives"
          },
          {
            "l": "D",
            "t": "Les dépassements des limites de qualité microbiologique sont plus fréquemment observés en cas d'épisodes pluvieux intenses"
          },
          {
            "l": "E",
            "t": "Une eau destinée à la consommation humaine contaminée par des eaux usées conduit à un risque accru d'exposition au virus de l'hépatite C"
          }
        ],
        "chapterSlugs": [
          "iii-10-risques-sanitaires-eaux"
        ],
        "programItems": [
          "III-10"
        ]
      },
      {
        "n": 52,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le caractère zwitterionique d'une fluoroquinolone à pH = 7,4, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "La fluoroquinolone est électriquement neutre"
          },
          {
            "l": "B",
            "t": "La fluoroquinolone possède une charge positive et une charge négative"
          },
          {
            "l": "C",
            "t": "La fluoroquinolone migre sous l'effet d'un champ électrique"
          },
          {
            "l": "D",
            "t": "La fluoroquinolone peut former une paire d'ions avec un contre-ion cationique"
          },
          {
            "l": "E",
            "t": "La fluoroquinolone peut former une paire d'ions avec un contre-ion anionique"
          }
        ],
        "chapterSlugs": [
          "i-12-acide-base-ph-tampons"
        ],
        "programItems": [
          "I-12"
        ]
      },
      {
        "n": 53,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, laquelle (lesquelles) permet (permettent) d'orienter une politique vaccinale ?",
        "options": [
          {
            "l": "A",
            "t": "Les vaccins disposant d'une autorisation de mise sur le marché"
          },
          {
            "l": "B",
            "t": "Les données épidémiologiques des maladies pouvant bénéficier d'une couverture vaccinale"
          },
          {
            "l": "C",
            "t": "Les modalités de transmission de la maladie ciblée par la vaccination"
          },
          {
            "l": "D",
            "t": "Les recommandations vaccinales internationales de l'Organisation Mondiale de la Santé (OMS)"
          },
          {
            "l": "E",
            "t": "L'identification de groupes particulièrement vulnérables au sein d'une population"
          }
        ],
        "chapterSlugs": [
          "iii-3-politique-vaccinale"
        ],
        "programItems": [
          "III-3"
        ]
      },
      {
        "n": 54,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la structure 1 ci-dessous, laquelle (lesquelles) est (sont) exacte(s) ? f SF, Hww Ho IN $ CH",
        "options": [
          {
            "l": "A",
            "t": "Elle contient une fonction aldéhyde"
          },
          {
            "l": "B",
            "t": "Elle contient une fonction phénol"
          },
          {
            "l": "C",
            "t": "Elle est sous forme d'un zwitterion au pH physiologique"
          },
          {
            "l": "D",
            "t": "Le carbone asymétrique indiqué par la flèche est de configuration Rectus (R)"
          },
          {
            "l": "E",
            "t": "Elle contient une fonction lactame"
          }
        ],
        "chapterSlugs": [
          "i-10-fonctions-organiques-stereo-isomerie"
        ],
        "programItems": [
          "I-10"
        ]
      },
      {
        "n": 55,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les mutations faux sens, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elles entraînent le remplacement d'un acide aminé par un codon stop"
          },
          {
            "l": "B",
            "t": "Elles entraînent le remplacement d'un acide aminé par un autre acide aminé"
          },
          {
            "l": "C",
            "t": "Elles sont toujours pathogènes"
          },
          {
            "l": "D",
            "t": "Elles peuvent être responsables d'un gain de fonction"
          },
          {
            "l": "E",
            "t": "Elles peuvent être responsables d'une perte de fonction"
          }
        ],
        "chapterSlugs": [
          "ii-5-genetique-mecanismes-consequences-mutations"
        ],
        "programItems": [
          "II-5"
        ]
      },
      {
        "n": 56,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les études non cliniques requises pour une AMM, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Une étude de cancérogénèse est obligatoire pour tout médicament administré par voie topique"
          },
          {
            "l": "B",
            "t": "Une étude de fertilité et de développement embryonnaire précoce est requise avant tout essai clinique"
          },
          {
            "l": "C",
            "t": "Un test du micronoyau sur érythrocytes de mammifères est un test obligatoire dans l'évaluation de la génotoxicité"
          },
          {
            "l": "D",
            "t": "Un test de toxicité réitérée est réalisé chez deux espèces de rongeurs"
          },
          {
            "l": "E",
            "t": "Les études de reprotoxicité peuvent être effectuées sur œufs de poules"
          }
        ],
        "chapterSlugs": [
          "v-44-evaluation-toxicite"
        ],
        "programItems": [
          "V-44"
        ]
      },
      {
        "n": 57,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, laquelle (lesquelles) est (sont) sont exacte(s) ? La courbe de saturation de l'hémoglobine en oxygène (pourcentage de saturation en O» en fonction de la pression partielle en O») est déplacée vers la droite par",
        "options": [
          {
            "l": "A",
            "t": "Une augmentation de la pression partielle en CO2"
          },
          {
            "l": "B",
            "t": "Une augmentation de la concentration en 2,3-DPG (2,3-diphosphoglycérate)"
          },
          {
            "l": "C",
            "t": "Une augmentation du pH"
          },
          {
            "l": "D",
            "t": "Une augmentation de la température"
          },
          {
            "l": "E",
            "t": "Une augmentation de la concentration en ATP"
          }
        ],
        "chapterSlugs": [
          "ii-16-physiologie-respiration"
        ],
        "programItems": [
          "II-16"
        ]
      },
      {
        "n": 58,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le principe actif ci-dessous, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Le para-aminophénol est un de ses métabolites"
          },
          {
            "l": "B",
            "t": "C'est la N-acétyl-p-benzoquinone imine"
          },
          {
            "l": "C",
            "t": "Il a une activité anti-inflammatoire"
          },
          {
            "l": "D",
            "t": "Sa fonction phénolique permet une sulfoconjugaison"
          },
          {
            "l": "E",
            "t": "Il est métabolisé par le cytochrome P450"
          }
        ],
        "chapterSlugs": [
          "v-47-toxicologie-antalgiques"
        ],
        "programItems": [
          "V-47"
        ]
      },
      {
        "n": 59,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les parasitoses suivantes, laquelle (lesquelles) peut (peuvent) être diagnostiquée(s) sur l'observation du parasite adulte spontanément éliminé ?",
        "options": [
          {
            "l": "A",
            "t": "Bilharziose"
          },
          {
            "l": "B",
            "t": "Oxyurose"
          },
          {
            "l": "C",
            "t": "Tæniasis"
          },
          {
            "l": "D",
            "t": "Fasciolose"
          },
          {
            "l": "E",
            "t": "Anguillulose"
          }
        ],
        "chapterSlugs": [
          "iv-17-helminthoses"
        ],
        "programItems": [
          "IV-17"
        ]
      },
      {
        "n": 60,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les étiologies suivantes, laquelle (lesquelles) peut (peuvent) être responsable(s) d'hémolyse corpusculaire ? | Question | TypeacM| —— Réponse(s}exacte(s) | | 1 | Simple | |J || D |__| | 2 | Simple | | B | | | | 3 | Simple | |J || D |__| | 4 | Simple | | B | | | | 5 | Simple | |J|J | D |__| | 6 | Simple | |J J | D |__| | 7 | Simple | |J || D |__| | 8 | Simple | |J |J € || | 9 | Simple | |J | € || | 10 | Simple | A | J | | | 11 | Multiple | A | B || D |__| | 12 | Multiple | A | B | € | | E | | 13 | Multiple | || € | D | E | | 14 | Multiple | | |J | D |__| | 15 | Multiple | A | || | E | | 16 | Multiple | | |J | D | E | | 17 | Multiple | A | B | | | | 18 | Multiple | | B | € | | E | | 19 | Multiple | || € || E | | 20 | Multiple | | B | | D | | | 21 | Multiple | A | || | E | | 22 | Multiple | A | | € | D | E | | 23 | Multiple | A | B | || E | | 24 | Multiple | A | |J | D | | | 25 | Multiple | A | B | € | D |__| | 26 | Multiple | A | |J | D | E | | 27 | Multiple | A | 8B | € | D | E | | 29 | Multiple | A | B | | | | 30 | Multiple | || € | D | | | 31 | Multiple | A | | | D |__| | 32 | Multiple | | B | € | | E | | 33 | Multiple |__| B | | D |__| | 34 | Multiple | A | B | | | E | | 35 | Multiple |__| B | € | D | | | 36 | Multiple | A | B | € | | E | | 37 | Multiple | || € | D |__| | 38 | Multiple | A | B | € | D | ÆE | | 39 | Multiple | A | |J | D |__| | 40 | Multiple | | B | | D | ÆE | | 4 | Multiple |__| B | € | D | E | | 4 | Multiple | A | B | € | | E | | 4 | Multiple |__| B | | D |__| | 4 | Multiple | | B | € | | E | | 45 | Multiple | A | | € | D | E | | 4 | Multiple | A | B | € | D | | | 47 | Multiple |__| B | € | D | E | | 4 | Multiple |__| B | | D | E | | 4 | Multiple |__| B | € || E | | 50 | Multiple | A | | € | D | | | 51 | Multiple | A | | € | D |__| | 52 | Multiple | A | B | | D | ÆE | | 53 | Multiple | A | B | € | D | E | | 54 | Multiple |__| B | € | D | ÆE | | 55 | Multiple |__| B | | D | E | | 56 | Multiple | | |J € || | 57 | Multiple | A | B | | D |__| | 58 | Multiple | A | |J | D | E | | 59 | Multiple |__| B | € | | | 60 | Multiple | | B | € | D |__| 34 BE1 EPREUVE D'EXERCICES D'APPLICATION Exercice N° 1 (40 points) Enoncé On souhaite réaliser le dosage de la chloroquine dans un prélèvement sanguin après extraction liquide/liquide et par spectroscopie d'absorption à 345 nm. La chloroquine est une base faible de pKa = 10,32. L'extraction est réalisée selon le protocole suivant : * Dans un tube à centrifuger, placer : * 1 mL de sang total, - 1 mL de solution aqueuse d'hydroxyde de potassium (KOH) 0,1 M. Réaliser 2 extractions successives par 2 mL d'éther éthylique. * Réunir les 4 ML de solution éthérée. * Après lavage et déshydratation, évaporer à sec la phase éthérée. * Reprendre le résidu sec par 2 ML d'acide sulfurique 0,25 M. * Centrifuger et mesurer l'absorbance de cette solution (solution A) à 345 nm. Questions QUESTION N° 1 : Calculer le pH de la dilution de sang total après addition de la solution de KOH 0,1 M (on négligera le pouvoir tampon du sang total). L'extraction de la chloroquine est-elle optimale à ce pH ? Justifier. QUESTION N° 2: A ce pH, le rendement global (R) d'extraction de la chloroquine est de 96 %. Quel est le coefficient de partage P de la chloroquine ? QUESTION N° 3: L'absorbance à 345 nm de la chloroquine étalon à 1,00 mg.L-! en solution dans l'acide sulfurique 0,25 M est de 0,34. La solution extraite (solution A) a une absorbance à 345 nm de 0,28. Quelle est la concentration de la chloroquine dans cette solution À ? QUESTION N° 4 : En déduire la concentration (en mg.L-!) de la chloroquine dans le sang total. Page 1/2 S4 BEi EPREUVE D'EXERCICES D'APPLICATION Exercice N° 1 (40 points) QUESTION N° 5: Lors de la mesure d'absorbance, sous quelle forme se trouve la chloroquine ? Page 2/2 Ti BE2 EPREUVE D'EXERCICES D'APPLICATION Exercice N° 2 (40 points) Enoncé Un médicament, dont la pharmacocinétique suit un modèle monocompartimental, est perfusé à un patient par voie intraveineuse selon une vitesse de perfusion de 500 mg.h\". La perfusion a duré 24 heures. Les concentrations plasmatiques mesurées sont les suivantes : Temps (h) Conc (mg.L-!) 2 32 10 9,3 16 10,0 24 10,2 Questions QUESTION N° 1 : Déterminer la clairance d'élimination plasmatique de ce médicament chez ce patient. QUESTION N° 2: En tenant compte de la concentration au temps 2 h, déterminer la demi-vie d'élimination. QUESTION N° 3: Déterminer le volume de distribution plasmatique. QUESTION N° 4: Quelle est la quantité de médicament présent dans l'organisme : 71 BE2 EPREUVE D'EXERCICES D'APPLICATION Exercice N° 2 (40 points) QUESTION N° 6 : Sachant que la clairance rénale de ce médicament représente habituellement le quart de la clairance totale d'élimination, 79 BE3 = EPREUVE D'EXERCICES D'APPLICATION Exercice N° 3 (40 points) Enoncé Dans un hôpital, un nouveau test biologique (PCA3 pour Prostate Cancer Gene 3) est évalué dans le cadre du diagnostic du cancer de la prostate. Le test est réalisé chez 400 patients atteints de cancer de la prostate objectivé par un examen anatomopathologique et chez 600 témoins hospitalisés indemnes de cancer de la prostate et d'adénome de la prostate. Les résultats sont présentés dans le tableau suivant : Le GE IE Questions QUESTION N° 1 : Définir et calculer la sensibilité et la spécificité du test (tous stades de cancer de la prostate confondus). QUESTION N° 2 : En France, chez les hommes de plus de 65 ans, la prévalence du cancer de la prostate est de 10 %. Si le test précédent est appliqué à cette population, calculer alors la sensibilité, la spécificité, la valeur prédictive positive et la valeur prédictive négative. QUESTION N° 3: Si la prévalence du cancer de la prostate augmente dans la population masculine, comment évoluent la sensibilité, la spécificité, la valeur prédicitive positive et la valeur prédictive négative du test ? QUESTION N° 4 : Quelle méthodologie faut-il utiliser pour savoir si ce nouveau test PCA3 est plus performant que le dosage sérique du PSA ? Justifier. Page 1/1 100 BE4 EPREUVE D'EXERCICES D'APPLICATION Exercice N° 4 (40 points) Enoncé La droite A de la figure ci-dessous représente les résultats d'une étude cinétique de l'activité d'une enzyme E sur son substrat S dans des conditions bien définies. 1/Vo (10Ëmol-*.L.min) 7 / 0,7 =. 08 ' # A — 04 4 A 0,2 sir 0,1 -6 5 -4 3 -2 -1 1/[S] (10#mol-*.L) Questions QUESTION N° 1 : 100 BE4 EPREUVE D'EXERCICES D'APPLICATION Exercice N° 4 (40 points) QUESTION N° 3: Calculer la constante d'inhibition (Ki) de l'inhibiteur | pour l'enzyme E. QUESTION N° 4 : 119 BES EPREUVE D'EXERCICES D'APPLICATION Exercice N° 5 (40 points) Enoncé L'actinium-225 est un isotope métallique émetteur de particules alpha, utilisé pour la radiothérapie interne vectorisée. Cet isotope est issu de la filière de retraitement de l'uranium-2833, particulièrement utilisé dans les années 1950-1970 comme source potentielle de matériaux fissiles pour des applications militaires ou civiles. La filiation radioactive permettant d'obtenir l'actinium-225 est la suivante : \"33U —> \"3aTh — PBèRa — *ÉSAc L'industrie pharmaceutique a réussi à isoler le thorium-229 issu de l'uranium-233 et à le conditionner sous forme de générateurs afin d'assurer l'approvisionnement des services de médecine nucléaire en actinium-225. Données : T,,2 de ??°Ac = 9,92 jours 1 an = 365,25 jours masse atomique du fer = 55,845 g.mol\" masse atomique du thorium-229 = 229,000 g.mol\" N'avogadro = 6,02.10°3 moi\" Questions QUESTION N° 1 : L'approvisionnement européen en actinium-225 dépend d'une source d'uranium-233 détenue par un laboratoire. Cette source a permis d'isoler 5,55 GBq de thorium-229. Quelle est la masse (en mg) de thorium-229 détenue par ce laboratoire ? QUESTION N° 2: L'actinium-225 issu de cette source est obtenu sous la forme de sel de nitrate d'actinium et contient des impuretés métalliques non radioactives (principalement du fer) à hauteur de 0,25 jg par MBg d'actinium-225. Quelle est la proportion (en %) de noyau d'actinium-225 par rapport à l'ensemble des noyaux de fer en solution ? Page 1/2 119 BES EPREUVE D'EXERCICES D'APPLICATION Exercice N° 5 (40 points) QUESTION N° 3: Un service de médecine nucléaire reçoit 37 MBq d'actinium-225 pour réaliser une préparation radiopharmaceutique à l'aide d'un peptide de masse molaire 987,9 g.mol!. Un mg de peptide marqué sera injecté au patient. On suppose que la totalité de l'actinium-225 est complexée à une molécule de peptide et qu'une molécule de peptide ne peut être radiomarquée que par un seul atome d'actinium-225. Quelle est la proportion de peptide radiomarqué à l'actinium-225 par rapport à la quantité de peptide injecté au patient ? QUESTION N° 4 : La radiopharmacie reçoit 37 MBg le lundi matin à 8 h 00. La préparation du peptide radiomarqué s'effectue le mercredi matin et conduit à un volume final de préparation de 10 mL. Sachant que la posologie pour un patient est de 10 MBq, quel volume doit-on injecter au patient le mercredi matin à 10 h 00 ? QUESTION N° 5: Le médicament radiopharmaceutique injecté présente une demi-vie biologique de 6 heures. Quelle est la période effective de ce radiopharmaceutique ? QUESTION N° 6 : Après une succession d'émissions alpha et bêta moins, l'actinium-225 (Z = 89) aboutit au bismuth-209 (Z = 83) stable. Combien observe-t-on de particules alpha et de particules bêta moins, émises lors de cette filiation radioactive ? Page 2/2 34 EPREUVE D'EXERCICE D'APPLICATION Exercice N° 1 (40 points) Enoncé On souhaite réaliser le dosage de la chloroquine dans un prélèvement sanguin après extraction liquide/liquide et par spectroscopie d'absorption à 345 nm. La chloroquine est une base faible de pKa = 10,32. L'extraction est réalisée selon le protocole suivant : ® Dans un tube à centrifuger, placer : © 1 mL de sang total, * 1 mL de solution aqueuse d'hydroxyde de potassium (KOH) 0,1 M. e Réaliser 2 extractions successives par 2 mL d'éther éthylique. e Réunir les 4 ML de solution éthérée. * Après lavage et déshydratation, évaporer à sec la phase éthérée. * Reprendre le résidu sec par 2 ML d'acide sulfurique 0,25 M. ® Centrifuger et mesurer l'absorbance de cette solution (solution A) à 345 nm. Questions QUESTION N° 1 : Calculer le pH de la dilution de sang total après addition de la solution de KOH 0,1 M (on négligera le pouvoir tampon du sang total). L'extraction de la chloroquine est-elle optimale à ce pH ? Justifier. Proposition de réponse [OH] = 0,1/2 = 0,05 M pH = 14 + log 0,05 = 12,7 S'agissant d'une base faible, l'extraction de la chloroquine sera donc optimale puisque pH > pka+2 QUESTION N° 2 : A ce pH, le rendement global (R) d'extraction de la chloroquine est de 96 %. Quel est le coefficient de partage P de la chloroquine ? Proposition de réponse R=1-1/[1+ P.(Vp/VA)I\" avec Vp = V, = 2mLetn=2 donc le coefficient de partage P est de 4 QUESTION N° 3 : L'absorbance à 345 nm de la chloroquine étalon à 1,00 mg.L\"* en solution dans l'acide sulfurique 0,25 M est de 0,34. La solution extraite (solution A) a une absorbance à 345 nm de 0,28. Page 1/2 34 EPREUVE D'EXERCICE D'APPLICATION Exercice N° 1 (40 points) Quelle est la concentration de la chloroquine dans cette solution À ? Proposition de réponse [Chloroquine], = 1,00 x 0,28 / 0,34 = 0,82 mg.L\" QUESTION N° 4 : En déduire la concentration (en mg.L\"*) de la chloroquine dans le sang total. Proposition de réponse La quantité de chloroquine extraite est de 2 x 0,82 1,64 ug La quantité initialement présente dans 1 mL de sang total est donc de 1,64 /0,96 1,71 ug soit donc une concentration en chloroquine dans le sang total de 1,71 jg.mL\"\" soit 1.71 mg.L\" QUESTION N° 5 : Lors de la mesure d'absorbance, sous quelle forme se trouve la chloroquine ? Proposition de réponse La mesure d'absorbance étant réalisée en milieu acide, la chloroquine est sous forme acide / protonnée (BH*) Page 2/2 71 EPREUVE D'EXERCICE D'APPLICATION Exercice N° 2 (40 points) Enoncé Un médicament, dont la pharmacocinétique suit un modèle monocompartimental, est perfusé à un patient par voie intraveineuse selon une vitesse de perfusion de 500 mg.h*. La perfusion a duré 24 heures. Les concentrations plasmatiques mesurées sont les suivantes : Temps (h) Conc (mg.L\"*) 2 3,2 10 9,3 16 10,0 24 10,2 Questions QUESTION N° 1 : Déterminer la clairance d'élimination plasmatique de ce médicament chez ce patient. Proposition de réponse Les concentrations plasmatiques en fin de perfusion peuvent être considérées comme des concentrations à l'état d' équilibre (Css) car la différence est négligeable entre les valeurs à 16 et 24 h : Css = RO/ CL = 10,2 mg.L\"*, soit CL = 500 (mg.h\"\") / 10,2 (mg.L-!) = 48 L.h\" QUESTION N° 2 : En tenant compte de la concentration au temps 2 h, déterminer la demi-vie d'élimination. Proposition de réponse L'équation qui décrit les concentrations plasmatiques en fonction du temps pour un médicament perfusé par voie IV est : C(t) = Css x (1 — et, Au temps 2h : 3,2 = 10,2 x(1— er) soit k (constante de vitesse d'élimination) = 0,19 h3; donc T1/2 = 0,7/k=3,6h. QUESTION N° 3 : Déterminer le volume de distribution plasmatique. Proposition de réponse Vd=CL/k=252L QUESTION N° 4 : Page 1/3 71 EPREUVE D'EXERCICE D'APPLICATION Exercice N° 2 (40 points) Quelle est la quantité de médicament présent dans l'organisme : 71 EPREUVE D'EXERCICE D'APPLICATION Exercice N° 2 (40 points) 79 - EPREUVE D'EXERCICE D'APPLICATION Exercice N°3 (40 points) Enoncé Dans un hôpital, un nouveau test biologique (PCA3 pour Prostate Cancer Gene 3) est évalué dans le cadre du diagnostic du cancer de la prostate. Le test est réalisé chez 400 patients atteints de cancer de la prostate objectivé par un examen anatomopathologique et chez 600 témoins hospitalisés indemnes de cancer de la prostate et d'adénome de la prostate. Les résultats sont présentés dans le tableau suivant : Questions QUESTION N° 1 : Définir et calculer la sensibilité et la spécificité du test (tous stades de cancer de la prostate confondus). Proposition de réponse La sensibilité est la probabilité d'avoir un test positif lorsqu'on est atteint d'un cancer de la prostate. Se = Effectif des sujets ayant un test positif parmi les sujets malades / Effectif total des sujets malades Se = 343 / 400 Se = 0,86 La spécificité est la probabilité d'avoir un test négatif lorsqu'on est indemne de cancer de la prostate Sp = Effectif des sujets présentant un test négatif parmi les sujets non malades (témoins) / Effectif total des témoins Sp = 520 / 600 Sp = 0,87 QUESTION N° 2 : En France, chez les hommes de plus de 65 ans, la prévalence du cancer de la prostate est de 10 %. Si le test précédent est appliqué à cette population, calculer alors la sensibilité, la spécificité, la valeur prédictive positive et la valeur prédictive négative. Page 1/3 79 EPREUVE D'EXERCICE D'APPLICATION Exercice N°3 (40 points) Proposition de réponse La sensibilité et la spécificité ne changent pas (caractéristiques intrinsèques au test). Pour la valeur prédictive positive et la valeur prédictive négative, deux modes de calcul sont possibles Mode de calcul 1 : - VPP = Se * P / ((Se * P) + (1 - Sp) * (1 - P)) où P est la prévalence VPP = 0,86 * 0,1 / (0,86 * 0,1) + (1 - 0,87) * (1 - 0,1)) = 0,42 - VPN = Sp * (1-P)/(Sp * (1-P)+(1- Se)\" P) VPN = 0,87 * (1 - 0,1) / (0,87 * (1 - 0,1) + (1 - 0,86) * 0,1) = 0,98 Mode de calcut 2 : Connaissant la sensibilité et la spécificité du test, pour une prévalence de 10 %, la répartition entre malades et non malades (pour 100 personnes) est indiquée dans la tableau suivant I A La VPP est la probabilité d'être malade sachant que le test est positif. VPP = effectif des malades ayant un test positif / effectif total des sujets ayant un test positif = 8,6 / (8,6 + 11,7) = 0,42 La VPN est la probabilité de ne pas être malade sachant que le test est négatif. VPN = effectif des non malades ayant un test négatif/effectif total des sujets ayant un test négatif = 78,3 / (78,3 + 1,4) = 0,98 QUESTION N° 3 : Si la prévalence du cancer de la prostate augmente dans la population masculine, comment évoluent la sensibilité, la spécificité, la valeur prédicitive positive et la valeur prédictive négative du test ? Proposition de réponse La sensibilité et la spécificité (caractéristiques intrinsèques du test) ne varient pas. Si la prévalence augmente, la VPP du test augmente et la VPN diminue. QUESTION N° 4 : Page 2/3 79 EPREUVE D'EXERCICE D'APPLICATION Exercice N°3 (40 points) Quelle méthodologie faut-il utiliser pour savoir si ce nouveau test PCA3 est plus performant que le dosage sérique du PSA ? Justifier. Proposition de réponse Il faut construire des courbes ROC (Receiver Opering Characteristics) à partir des sensibilités et spécificités de chaque test. La comparaison des aires sous la courbe correspondant à chacun des tests permet de définir le test le plus performant. Plus l'aire sous la courbe est importante, plus le test est performant. Page 3/3 100 EPREUVE D'EXERCICE D'APPLICATION Exercice N°4 (40 points) Enoncé La droite A de la figure ci-dessous représente les résultats d'une étude cinétique de l'activité d'une enzyme E sur son substrat S dans des conditions bien définies. 1/V0 {10®mo!*.L.min) + 06 M + 0,4 gt (77 — 0 M RS D CS 7 A CA 1 65 -4 3 2 4 | 1/[S] (10*mot!.L) uestions QUESTION N° 1 : 100 EPREUVE D'EXERCICE D'APPLICATION Exercice N°4 (40 points) Proposition de réponse En présence de l'inhibiteur 1/Vmax app = 0,4 x 10° mor*.L.min Vmax app = 2,5 x 107$ mol.L*.min\" La Vmax diminue en présence de l'inhibiteur et le Km est inchangé. Il s'agit donc d'une inhibition non compétitive. QUESTION N° 3 : Calculer la constante d'inhibition (Ki) de l'inhibiteur | pour l'enzyme E. Proposition de réponse En présence de l'inhibiteur : Vmax app = Vmax / (1 + [I/Ki) Vmax/Vmax app = 1 + [IVKi 5/2,5 = 2 = 1+ [IJ/Ki [ki = 1 Ki=8.10$M. QUESTION N° 4 : 119 EPREUVE D'EXERCICE D'APPLICATION Exercice N°5 (40 points) Enoncé L'actinium-225 est un isotope métallique émetteur de particules alpha, utilisé pour la radiothérapie interne vectorisée. Cet isotope est issu de la filière de retraitement de l'uranium-233, particulièrement utilisé dans les années 1950-1970 comme source potentielle de matériaux fissiles pour des applications militaires ou civiles. La filiation radioactive permettant d'obtenir l'actinium-225 est la suivante : 233U — 'RaTh — \"Gépa — *Bc L'industrie pharmaceutique a réussi à isoler le thorium-229 issu de l'uranium-233 et à le conditionner sous forme de générateurs afin d'assurer l'approvisionnement des services de médecine nucléaire en actinium-225. Données : T,,9 de 22°Th = 7340 ans T4, de 22°Ac = 9,92 jours 1 an = 365,25 jours masse atomique du fer = 55,845 g.mor\" masse atomique du thorium-229 = 229,000 g.mor\" — 23 -1 N'avogadro = 6,02.107* mol Questions QUESTION N° 1 : L'approvisionnement européen en actinium-225 dépend d'une source d'uranium-233 détenue par un laboratoire. Cette source a permis d'isoler 5,55 GBq de thorium-229. Quelle est la masse (en mg) de thorium-229 détenue par ce laboratoire ? Proposition de réponse P In2 T = 7340 ans = 7340 x 365,25 x 24 x 3600 = 2,316.101\" s = 2,992.1012 51 A =N:N-=5,55.10° / 2,992.10-12 = 1,855.102\" noyaux de Th-229 nr= —— Navogadro n = 3,08.10°* mol m=nxM-=0,7055 g = 705,5 mg de Th-229 QUESTION N° 2 : Page 1/4 119 EPREUVE D'EXERCICE D'APPLICATION Exercice N°5 (40 points) L'actinium-225 issu de cette source est obtenu sous la forme de sel de nitrate d'actinium et contient des impuretés métalliques non radioactives (principalement du fer) à hauteur de 0,25 jg par MBq d'actinium-225. Quelle est la proportion (en %) de noyau d'actinium-225 par rapport à l'ensemble des noyaux de fer en solution ? Proposition de réponse 1= In2 T = 9,92 jours = 9,92 x 24 x 3600 = 8,571 .10° secondes = 8,087.10\"7 s\" Soit, pour 1 MBq d'Ac-225 : N= 1.10$/8,087.107? = 1,237.101? noyaux d'actinium-225 (car A = N) Pour le fer n=— n = 0,25.10-9/55,845 = 4,477.107? moles de fer n=- ——— Navogadro Soit : N = 4,477.107° x 6,02.1023 = 2,695.1015 noyaux de fer par MBq d'actinium-225 % actinium-225 = 1,237.10\"2/2,695.1015 = 0,046 % 0,046 % des atomes métalliques présents en solution sont des atomes d'actinium-225 QUESTION N° 3 : Un service de médecine nucléaire reçoit 37 MBq d'actinium-225 pour réaliser une préparation radiopharmaceutique à [ aide d'un peptide de masse molaire 987,9 g.mor\". Un mg de peptide marqué sera injecté au patient. On suppose que la totalité de l'actinium-225 est complexée à une molécule de peptide et qu'une molécule de peptide ne peut être radiomarquée que par un seul atome d'actinium-225. Quelle est la proportion de peptide radiomarqué à l'actinium-225 par rapport à la quantité de peptide injecté au patient ? Proposition de réponse n=— Nbeptide 7 1-108 / 987,9 = 1,012.10°$ mol de peptide Pour l'actinium-225 : = 8,087.10\"/ s° Nctinium-225 = 37-10 / 8,087.1077 = 4,575.1013 noyaux d'actinium-225 dans 37 MBq Nactinium-225 7 7:600.10-\"\" mol d'actinium-225 Proportion de peptide radiomarqué : 7,600.10-1* / 1,012.107° = 7,51.10° = 0,0075 % Page 2/4 119 EPREUVE D'EXERCICE D'APPLICATION Exercice N°5 (40 points) QUESTION N° 4 : La radiopharmacie reçoit 37 MBq le lundi matin à 8 h 00. La préparation du peptide radiomarqué s'effectue le mercredi matin et conduit à un volume final de préparation de 10 mL. Sachant que la posologie pour un patient est de 10 MBq, quel volume doit-on injecter au patient le mercredi matin à 10 h 00 ? Proposition de réponse T = 9,92 j = 9,92 x 24 = 238,08 h t=2j+2h=48+2=50h —In2 —In2 A= Age T * = 37e73808°° A = 31,99 MBq à 10 h 00 le mercredi matin Activité volumique : AV = 31,99 / 10 = 3,199 MBa/mL Volume nécessaire pour 10 MBq = 3,13 mL (Remarque : 3,12 mL accepté si AV arrondie à 3,2 MBq/mL) QUESTION N° 5 : Le médicament radiopharmaceutique injecté présente une demi-vie biologique de 6 heures. Quelle est la période effective de ce radiopharmaceutique ? Proposition de réponse 1 1 1 —— = = Tef fective Thiotogique Tphysique 04 1,0 Teffective © 238,08 T effective = 5,85 h QUESTION N° 6 : Après une succession d'émissions alpha et bêta moins, l'actinium-225 (Z = 89) aboutit au bismuth-209 (Z = 83) stable. Combien observe-t-on de particules alpha et de particules bêta moins, émises lors de cette filiation radioactive ? Proposition de réponse On passe de A = 225 (actinium-225) à A = 209 (bismuth-209), soit une perte de 16 nucléons. Seules les émissions alpha sont non-isobariques. À chaque émission alpha on perd 4 nucléons, soit 4 émissions alpha au cours de la filiation. Chaque émission alpha engendre la perte de 2 protons. Nous avons 4 émissions alpha donc une perte de 8 protons. Page 3/4 119 ' EPREUVE D'EXERCICE D'APPLICATION Exercice N°5 (40 points) Or, entre l'actinium (Z = 89) et le bismuth (Z = 83) nous n'avons perdu que 6 protons. Il faut donc en gagner 2 pour compenser la perte due aux émissions alpha. La transformation radioactive qui permet de gagner des protons est l' émission bêta moins. Chaque émission bêta moins fait gagner 1 proton. || faut par conséquent 2 émissions bêta moins au cours de la filiation de l'actinium. Au total, nous observons au cours de cette filiation de l'actinium-225 : 4 émissions alpha et 2 émissions bêta moins. Page 4/4 1500 BDi",
        "options": [
          {
            "l": "A",
            "t": "En l'absence d'inhibiteur et pour une [S] = 10 Km : Vo = Vmax x (10/11), soit Vo = 5 x (10/11) = 4,54 x 107$ mol. L!. min\"* En présence de l'inhibiteur et pour une [S] = 10 Km Vo app = Vmax app x (10/11), soit Vo app = 2,5 x (10/11) = 2,27 x 1078 mol. L* min\"! Le pourcentage d'inhibition = [(Vo-Vo app)/Vo] x 100 = [(4,54-2,27)/4,54] x 100 = 50 %"
          },
          {
            "l": "B",
            "t": "Pour une inhibition non compétitive, le pourcentage d'inhibition est indépendant de la concentration en substrat [S], puisqu'il n'y a pas de compétition entre S et |. Il n'y aura donc pas de variation du pourcentage d'inhibition. Page 2/2"
          },
          {
            "l": "C",
            "t": "1/Vmax = 0,2 x 10$ mor!.L.min ; Vmax = 5 x 10° mol.L!.min\""
          },
          {
            "l": "D",
            "t": "Pente = Km/Vmax ; Pente = (0,25 x 1041107 (5x 107$ mol.L*.min*) ; Pente = 5 min QUESTION N° 2 : La droite B représente les résultats d'une cinétique obtenue dans les mêmes conditions mais en présence dans le milieu d'incubation d'un inhibiteur (1) à une concentration de [1] = 8 x 1075 mol.L*. Dans quel type d'inhibition peut-on classer cet inhibiteur ? Justifier. Page 1/2"
          },
          {
            "l": "E",
            "t": "Une transfusion d'un concentré de globules rouges incompatible"
          }
        ],
        "chapterSlugs": [
          "hemato-anemies"
        ],
        "programItems": [
          "IV-22"
        ]
      }
    ]
  },
  {
    "key": "2023",
    "label": "Décembre 2023",
    "source": "Concours national d'internat en pharmacie — session de décembre 2023 (CNG). Réponses recoupées via grilles publiées.",
    "items": [
      {
        "n": 1,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": ": Parmi les propositions suivantes concernant la gentamicine, laquelle est fausse ?",
        "options": [
          {
            "l": "A",
            "t": "Elle peut être à l'origine d'une néphrotoxicité"
          },
          {
            "l": "B",
            "t": "Elle est bactéricide sur les bacilles Gram (-) aérobies"
          },
          {
            "l": "C",
            "t": "Elle est éliminée sous forme active par voie rénale"
          },
          {
            "l": "D",
            "t": "Elle peut être à l'origine d'une ototoxicité"
          },
          {
            "l": "E",
            "t": "Elle agit par fixation sur la sous-unité 50S du ribosome"
          }
        ],
        "chapterSlugs": [
          "v-27-aminosides"
        ],
        "programItems": [
          "V-27"
        ],
        "answer": "E"
      },
      {
        "n": 2,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": ": Parmi les propositions suivantes concernant l'acidose lactique, quelle est celle qui est fausse ?",
        "options": [
          {
            "l": "A",
            "t": "Elle s'accompagne d'une augmentation du trou anionique plasmatique"
          },
          {
            "l": "B",
            "t": "Elle peut survenir chez le diabétique de type 2 traité par la metformine"
          },
          {
            "l": "C",
            "t": "Elle s'accompagne d'une hypokaliémie"
          },
          {
            "l": "D",
            "t": "Elle peut entraîner un coma"
          },
          {
            "l": "E",
            "t": "Elle s'accompagne d'une hyperventilation"
          }
        ],
        "chapterSlugs": [
          "iv-42-troubles-acidobasiques"
        ],
        "programItems": [
          "IV-42"
        ],
        "answer": "C"
      },
      {
        "n": 3,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": ": Chez un patient présentant une anémie mégalocytaire, quel est l'examen qui permet d'affirmer le diagnostic de maladie de Biermer ?",
        "options": [
          {
            "l": "A",
            "t": "Dosage plasmatique de la vitamine B12"
          },
          {
            "l": "B",
            "t": "Myélogramme"
          },
          {
            "l": "C",
            "t": "Recherche d'anticorps anti-facteur intrinsèque"
          },
          {
            "l": "D",
            "t": "Mesure du pH gastrique"
          },
          {
            "l": "E",
            "t": "Dosage de l'acide méthylmalonique urinaire"
          }
        ],
        "chapterSlugs": [
          "hemato-anemies"
        ],
        "programItems": [
          "IV-22"
        ],
        "answer": "C"
      },
      {
        "n": 4,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": ": Parmi les propositions suivantes concernant le virus de l'hépatite C, une seule est fausse. Laquelle ?",
        "options": [
          {
            "l": "A",
            "t": "Il appartient à la famille des Flaviviridae"
          },
          {
            "l": "B",
            "t": "Le diagnostic d'hépatite C chronique est sérologique"
          },
          {
            "l": "C",
            "t": "Sa réplication est freinée par des inhibiteurs de la polymérase"
          },
          {
            "l": "D",
            "t": "Le virion est enveloppé"
          },
          {
            "l": "E",
            "t": "Sa transmission est parentérale"
          }
        ],
        "chapterSlugs": [
          "iv-8-hepatites-virales"
        ],
        "programItems": [
          "IV-8"
        ],
        "answer": "B"
      },
      {
        "n": 5,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": ": Parmi les propositions suivantes concernant la tuberculose pulmonaire, laquelle est exacte ?",
        "options": [
          {
            "l": "A",
            "t": "L'agent étiologique peut être cultivé sur gélose enrichie de sang La rifampicine en monothérapie constitue l'antibiothérapie de 1ère intention 2023_QCM_P Page 1/15 2023_QCM_P 2"
          },
          {
            "l": "B",
            "t": "La rifampicine en monothérapie constitue l'antibiothérapie de 1ère intention"
          },
          {
            "l": "C",
            "t": "Il n'existe pas de prophylaxie vaccinale"
          },
          {
            "l": "D",
            "t": "L'infection peut être d'origine nosocomiale"
          },
          {
            "l": "E",
            "t": "L'agent étiologique survit dans l'environnement"
          }
        ],
        "chapterSlugs": [
          "iv-5-infections-orl-respiratoires"
        ],
        "programItems": [
          "IV-5"
        ],
        "answer": "D"
      },
      {
        "n": 6,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": ": Parmi les propositions suivantes concernant le mode de transmission des virus de l'immunodéficience humaine (VIH), laquelle est fausse ?",
        "options": [
          {
            "l": "A",
            "t": "Transmission par transfusion sanguine"
          },
          {
            "l": "B",
            "t": "Transmission par usage de drogues par voie intraveineuse"
          },
          {
            "l": "C",
            "t": "Transmission par ingestion d'eau contaminée"
          },
          {
            "l": "D",
            "t": "Transmission par l'allaitement maternel"
          },
          {
            "l": "E",
            "t": "Transmission sexuelle"
          }
        ],
        "chapterSlugs": [
          "iv-6-ist"
        ],
        "programItems": [
          "IV-6"
        ],
        "answer": "C"
      },
      {
        "n": 7,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": ": Parmi les substances actives suivantes utilisées dans le traitement de la maladie de Parkinson, laquelle ne possède pas de propriétés inhibitrices enzymatiques ?",
        "options": [
          {
            "l": "A",
            "t": "Sélégiline"
          },
          {
            "l": "B",
            "t": "Ropinirole"
          },
          {
            "l": "C",
            "t": "Entacapone"
          },
          {
            "l": "D",
            "t": "Carbidopa"
          },
          {
            "l": "E",
            "t": "Bensérazide"
          }
        ],
        "chapterSlugs": [
          "v-7-neurologie"
        ],
        "programItems": [
          "V-7"
        ],
        "answer": "B"
      },
      {
        "n": 8,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": ": Parmi les propositions suivantes concernant Escherichia coli, laquelle est fausse ?",
        "options": [
          {
            "l": "A",
            "t": "C'est l'espèce bactérienne la plus fréquemment responsable de cystites"
          },
          {
            "l": "B",
            "t": "Les souches entérotoxinogènes sont responsables de diarrhées du voyageur"
          },
          {
            "l": "C",
            "t": "Les souches productrices de pénicillinase sont sensibles au céfotaxime"
          },
          {
            "l": "D",
            "t": "La résistance à la ciprofloxacine peut être due à une mutation du gène de l'ADN-gyrase"
          },
          {
            "l": "E",
            "t": "Les pyélonéphrites peuvent être traitées par la vancomycine"
          }
        ],
        "chapterSlugs": [
          "iv-3-infections-urinaires"
        ],
        "programItems": [
          "IV-3"
        ],
        "answer": "E"
      },
      {
        "n": 9,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": ": Parmi les propositions suivantes, indiquer celle qui est exacte. Un sujet appartenant au groupe sanguin AB présente",
        "options": [
          {
            "l": "A",
            "t": "Aucun anticorps naturel régulier"
          },
          {
            "l": "B",
            "t": "Des anticorps naturels anti-B"
          },
          {
            "l": "C",
            "t": "Des anticorps naturels anti-H 2023_QCM_P Page 2/15 2023_QCM_P 3"
          },
          {
            "l": "D",
            "t": "Des anticorps naturels anti-A et anti-B"
          },
          {
            "l": "E",
            "t": "Des anticorps naturels anti-A"
          }
        ],
        "chapterSlugs": [
          "ii-25-immunologie-groupes-sanguins"
        ],
        "programItems": [
          "II-25"
        ],
        "answer": "A"
      },
      {
        "n": 10,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": ": Parmi les propositions suivantes concernant la surveillance biologique d'un traitement par antivitamine K, laquelle est exacte ?",
        "options": [
          {
            "l": "A",
            "t": "Elle est pratiquée sur un prélèvement sanguin réalisé sur un tube contenant de l'EDTA"
          },
          {
            "l": "B",
            "t": "Le prélèvement sanguin doit être réalisé 4 heures après la prise"
          },
          {
            "l": "C",
            "t": "L'INR est défini par le rapport (Temps de Quick du patient / Temps de Quick du témoin)"
          },
          {
            "l": "D",
            "t": "Lors d'un relais héparine - AVK, l'héparine doit être arrêtée lorsque l'INR est dans la zone thérapeutique recherchée deux jours consécutifs"
          },
          {
            "l": "E",
            "t": "Elle nécessite la surveillance de la numération plaquettaire deux fois par semaine"
          }
        ],
        "chapterSlugs": [
          "iv-37-surveillance-heparines-avk"
        ],
        "programItems": [
          "IV-37"
        ]
      },
      {
        "n": 11,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les méthodes suivantes, lesquelles permettent le dosage du sodium dans les liquides biologiques ?",
        "options": [
          {
            "l": "A",
            "t": "Potentiométrie"
          },
          {
            "l": "B",
            "t": "Spectrophotométrie UV-visible"
          },
          {
            "l": "C",
            "t": "Spectrophotométrie d'émission atomique"
          },
          {
            "l": "D",
            "t": "Ampérométrie"
          },
          {
            "l": "E",
            "t": "Complexométrie"
          }
        ],
        "chapterSlugs": [
          "i-2-spectrophotometrie-atomique"
        ],
        "programItems": [
          "I-2"
        ],
        "answer": "AC"
      },
      {
        "n": 12,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant les antigènes T indépendants, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Ce sont des macromolécules à épitopes répétitifs"
          },
          {
            "l": "B",
            "t": "Ils induisent essentiellement la production d'IgE"
          },
          {
            "l": "C",
            "t": "Ils sont incapables de générer une mémoire immunitaire"
          },
          {
            "l": "D",
            "t": "Ils induisent une maturation de la réponse immunitaire avec production d'Ig d'affinité de plus en plus élevée"
          },
          {
            "l": "E",
            "t": "Ils entrent dans la composition des vaccins à antigènes conjugués"
          }
        ],
        "chapterSlugs": [
          "ii-31-immunologie-reponses-humorale-cellulaire"
        ],
        "programItems": [
          "II-31"
        ],
        "answer": "ACE"
      },
      {
        "n": 13,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant l'insulinothérapie, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "L'insuline peut provoquer une hypokaliémie"
          },
          {
            "l": "B",
            "t": "Les seringues à insuline sont graduées en unités de telle sorte que 100 UI = 1 mL"
          },
          {
            "l": "C",
            "t": "Les lipodystrophies sont un effet indésirable de l'insuline"
          },
          {
            "l": "D",
            "t": "Les insulines NPH sont parfois présentées en association avec une insuline rapide en solution 2023_QCM_P Page 3/15 2023_QCM_P 4"
          },
          {
            "l": "E",
            "t": "L'insuline glulisine est une insuline lente"
          }
        ],
        "chapterSlugs": [
          "v-22-antidiabetiques"
        ],
        "programItems": [
          "V-22"
        ],
        "answer": "ABCD"
      },
      {
        "n": 14,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant les comprimés, lesquelles sont exactes ?",
        "options": [
          {
            "l": "A",
            "t": "Le lactose est un des diluants les plus employés"
          },
          {
            "l": "B",
            "t": "L'amidon peut être utilisé comme agent de désagrégation"
          },
          {
            "l": "C",
            "t": "Le stéarate de magnésium est un agent d'enrobage"
          },
          {
            "l": "D",
            "t": "Au contact de l'eau, le mélange acide citrique - bicarbonate de sodium permet la désagrégation"
          },
          {
            "l": "E",
            "t": "La silice colloïdale est un liant"
          }
        ],
        "chapterSlugs": [
          "v-51-formes-liberation-conventionnelle"
        ],
        "programItems": [
          "V-51"
        ],
        "answer": "ABD"
      },
      {
        "n": 15,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ? La conjugaison hépatique de la bilirubine",
        "options": [
          {
            "l": "A",
            "t": "S'effectue dans les cellules de Küppfer"
          },
          {
            "l": "B",
            "t": "Est catalysée par l'uridine diphosphoglucuronosyltransférase (UDPGT)"
          },
          {
            "l": "C",
            "t": "Est inhibée par le phénobarbital"
          },
          {
            "l": "D",
            "t": "Conduit à la formation d'un composé hydrosoluble"
          },
          {
            "l": "E",
            "t": "Permet son élimination par transport actif dans la bile"
          }
        ],
        "chapterSlugs": [
          "ii-9-biochimie-hemoglobines"
        ],
        "programItems": [
          "II-9"
        ],
        "answer": "BDE"
      },
      {
        "n": 16,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les composés suivants, quel(s) est (sont) celui (ceux) dont la concentration plasmatique augmente après 48 heures de jeûne chez un sujet au repos ?",
        "options": [
          {
            "l": "A",
            "t": "Les chylomicrons"
          },
          {
            "l": "B",
            "t": "Les corps cétoniques"
          },
          {
            "l": "C",
            "t": "Le lactate"
          },
          {
            "l": "D",
            "t": "Le glucose"
          },
          {
            "l": "E",
            "t": "Les acides gras non estérifiés"
          }
        ],
        "chapterSlugs": [
          "ii-13-biochimie-cetogenese"
        ],
        "programItems": [
          "II-13"
        ],
        "answer": "BE"
      },
      {
        "n": 17,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les protéines suivantes, quelle(s) est (sont) celle(s) qui peut (peuvent) être produite(s) par Staphylococcus aureus ?",
        "options": [
          {
            "l": "A",
            "t": "Une coagulase liée"
          },
          {
            "l": "B",
            "t": "Une vérotoxine"
          },
          {
            "l": "C",
            "t": "Une endotoxine"
          },
          {
            "l": "D",
            "t": "Une pénicillinase"
          },
          {
            "l": "E",
            "t": "Une désoxyribonucléase"
          }
        ],
        "chapterSlugs": [
          "iv-2-bacteriemies-endocardites"
        ],
        "programItems": [
          "IV-2"
        ],
        "answer": "ADE"
      },
      {
        "n": 18,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant les formes galéniques orales, laquelle (lesquelles) permet (permettent) une libération prolongée du principe actif ?",
        "options": [
          {
            "l": "A",
            "t": "Comprimés osmotiques"
          },
          {
            "l": "B",
            "t": "Matrices érodables"
          },
          {
            "l": "C",
            "t": "Matrices hydrophiles"
          },
          {
            "l": "D",
            "t": "Capsules molles"
          },
          {
            "l": "E",
            "t": "Matrices inertes"
          }
        ],
        "chapterSlugs": [
          "v-52-formes-liberation-distribution-modifiees"
        ],
        "programItems": [
          "V-52"
        ],
        "answer": "ABCE"
      },
      {
        "n": 19,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant les antibiotiques de la famille des bêta-lactamines, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Ils agissent par perturbation de la synthèse de la paroi bactérienne"
          },
          {
            "l": "B",
            "t": "Ils agissent en se fixant au niveau des ribosomes bactériens"
          },
          {
            "l": "C",
            "t": "Ils ne sont actifs que sur les bactéries à Gram négatif"
          },
          {
            "l": "D",
            "t": "Ils peuvent être inactivés par des enzymes bactériennes appelées transpeptidases"
          },
          {
            "l": "E",
            "t": "Ils sont susceptibles de provoquer des manifestations allergiques"
          }
        ],
        "chapterSlugs": [
          "v-24-beta-lactames"
        ],
        "programItems": [
          "V-24"
        ],
        "answer": "AE"
      },
      {
        "n": 20,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant la syphilis, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Cette infection peut avoir une localisation neuroméningée"
          },
          {
            "l": "B",
            "t": "L'agent causal est isolé sur milieu de culture enrichi en facteurs de croissance"
          },
          {
            "l": "C",
            "t": "Il existe une prophylaxie vaccinale"
          },
          {
            "l": "D",
            "t": "C'est une infection transmissible de la mère à l'enfant"
          },
          {
            "l": "E",
            "t": "La benzylpénicilline constitue un traitement de choix"
          }
        ],
        "chapterSlugs": [
          "iv-6-ist"
        ],
        "programItems": [
          "IV-6"
        ],
        "answer": "ADE"
      },
      {
        "n": 21,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les médicaments cytotoxiques suivants, quels sont ceux qui sont des antimétabolites ?",
        "options": [
          {
            "l": "A",
            "t": "Paclitaxel"
          },
          {
            "l": "B",
            "t": "Fluorouracile"
          },
          {
            "l": "C",
            "t": "Mercaptopurine"
          },
          {
            "l": "D",
            "t": "Etoposide"
          },
          {
            "l": "E",
            "t": "Cyclophosphamide"
          }
        ],
        "chapterSlugs": [
          "v-42-anticancereux"
        ],
        "programItems": [
          "V-42"
        ],
        "answer": "BC"
      },
      {
        "n": 22,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ? La paroi du tube digestif contient 2023_QCM_P Page 5/15 2023_QCM_P 6",
        "options": [
          {
            "l": "A",
            "t": "Des fibres musculaires striées"
          },
          {
            "l": "B",
            "t": "Des terminaisons du système nerveux autonome"
          },
          {
            "l": "C",
            "t": "Des cellules exocrines"
          },
          {
            "l": "D",
            "t": "Des cellules endocrines"
          },
          {
            "l": "E",
            "t": "Des ilôts lymphoïdes"
          }
        ],
        "chapterSlugs": [
          "ii-17-physiologie-digestive"
        ],
        "programItems": [
          "II-17"
        ],
        "answer": "ABCDE"
      },
      {
        "n": 23,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les principes actifs médicamenteux suivants, quel(s) est (sont) celui (ceux) qui a (ont) une structure stéroïdienne ?",
        "options": [
          {
            "l": "A",
            "t": "Amiloride"
          },
          {
            "l": "B",
            "t": "Spironolactone"
          },
          {
            "l": "C",
            "t": "Digoxine"
          },
          {
            "l": "D",
            "t": "Dexaméthasone"
          },
          {
            "l": "E",
            "t": "Méthotrexate"
          }
        ],
        "chapterSlugs": [
          "i-10-fonctions-organiques-stereo-isomerie"
        ],
        "programItems": [
          "I-10"
        ],
        "answer": "BCD"
      },
      {
        "n": 24,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant le mode d'action des antibiotiques sur les bactéries, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Les aminosides interagissent avec le ribosome"
          },
          {
            "l": "B",
            "t": "Les glycopeptides se fixent sur l'ADN gyrase"
          },
          {
            "l": "C",
            "t": "La rifamycine se fixe sur l'ARN polymérase"
          },
          {
            "l": "D",
            "t": "Les cyclines bloquent la synthèse protéique"
          },
          {
            "l": "E",
            "t": "Les macrolides bloquent la synthèse du peptidoglycane"
          }
        ],
        "chapterSlugs": [
          "v-27-aminosides"
        ],
        "programItems": [
          "V-27"
        ],
        "answer": "ACD"
      },
      {
        "n": 25,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant les cellules Natural Killer (NK), laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elles expriment un récepteur de reconnaissance de l'antigène"
          },
          {
            "l": "B",
            "t": "Elles ont une morphologie de grands lymphocytes granuleux"
          },
          {
            "l": "C",
            "t": "Elles expriment le CD56"
          },
          {
            "l": "D",
            "t": "Elles ont une activité phagocytaire médiée par le récepteur de Fc gamma R III (ou CD16)"
          },
          {
            "l": "E",
            "t": "Elles expriment des récepteurs pour les molécules du CMH de classe I"
          }
        ],
        "chapterSlugs": [
          "ii-28-immunologie-immunite-innee"
        ],
        "programItems": [
          "II-28"
        ],
        "answer": "BCE"
      },
      {
        "n": 26,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Quelle(s) est (sont) la (les) proposition(s) exacte(s) ? Une hypercalcémie associée à une concentration d'hormone parathyroïdienne (1-84) diminuée se rencontre au cours",
        "options": [
          {
            "l": "A",
            "t": "D'une insuffisance rénale chronique 2023_QCM_P Page 6/15 2023_QCM_P 7"
          },
          {
            "l": "B",
            "t": "D'un rachitisme"
          },
          {
            "l": "C",
            "t": "D'une pseudo-hyperparathyroïdie"
          },
          {
            "l": "D",
            "t": "D'une intoxication par la vitamine D"
          },
          {
            "l": "E",
            "t": "D'une hyperthyroïdie primitive"
          }
        ],
        "chapterSlugs": [
          "iv-43-metabolisme-osseux"
        ],
        "programItems": [
          "IV-43"
        ],
        "answer": "CD"
      },
      {
        "n": 27,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Quelle(s) est (sont) la (les) circonstance(s) d'apparition d'une polyglobulie ?",
        "options": [
          {
            "l": "A",
            "t": "Insuffisance respiratoire chronique"
          },
          {
            "l": "B",
            "t": "Insuffisance rénale chronique"
          },
          {
            "l": "C",
            "t": "Séjour prolongé en haute altitude"
          },
          {
            "l": "D",
            "t": "Alcoolisme chronique"
          },
          {
            "l": "E",
            "t": "Maladie de Vaquez"
          }
        ],
        "chapterSlugs": [
          "iv-23-polyglobulies"
        ],
        "programItems": [
          "IV-23"
        ],
        "answer": "ACE"
      },
      {
        "n": 28,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Quel(s) est (sont) le(s) signe(s) biologique(s) fréquemment rencontré(s) lors d'une cirrhose décompensée ?",
        "options": [
          {
            "l": "A",
            "t": "Augmentation de la transferrinémie"
          },
          {
            "l": "B",
            "t": "Augmentation de l'albuminémie"
          },
          {
            "l": "C",
            "t": "Formation de liquide d'ascite"
          },
          {
            "l": "D",
            "t": "Diminution de l'activité du complexe prothrombinique"
          },
          {
            "l": "E",
            "t": "Diminution de l'urée plasmatique"
          }
        ],
        "chapterSlugs": [
          "iv-44-cholestase-cytolyse"
        ],
        "programItems": [
          "IV-44"
        ],
        "answer": "CDE"
      },
      {
        "n": 29,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Quelle(s) est (sont) la (les) proposition(s) exacte(s) ? Au cours du syndrome néphrotique, est observée",
        "options": [
          {
            "l": "A",
            "t": "Une diminution de l'albuminémie"
          },
          {
            "l": "B",
            "t": "Une augmentation de la pression oncotique plasmatique"
          },
          {
            "l": "C",
            "t": "La présence d'œdèmes"
          },
          {
            "l": "D",
            "t": "Une diminution de la synthèse hépatique des lipoprotéines"
          },
          {
            "l": "E",
            "t": "Une protéinurie supérieure à 3 g / 24 h"
          }
        ],
        "chapterSlugs": [
          "iv-46-insuffisance-renale"
        ],
        "programItems": [
          "IV-46"
        ],
        "answer": "ACE"
      },
      {
        "n": 30,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes, quelle(s) est (sont) la (les) contre-indication(s) à l'administration d'une Héparine de Bas Poids Moléculaire (HBPM) pour le traitement d'un épisode aigu de thrombose veineuse profonde ?",
        "options": [
          {
            "l": "A",
            "t": "Terrain atopique"
          },
          {
            "l": "B",
            "t": "Antécédent récent d'hémorragie intracérébrale (moins de 6 jours)"
          },
          {
            "l": "C",
            "t": "Antécédent de thrombopénie immuno-allergique induite par l'héparine"
          },
          {
            "l": "D",
            "t": "Insuffisance rénale avec clairance de la créatinine inférieure à 15 mL/min (Cockcroft et Gault) 2023_QCM_P Page 7/15 2023_QCM_P 8"
          },
          {
            "l": "E",
            "t": "Traitement par un anti-agrégant plaquettaire"
          }
        ],
        "chapterSlugs": [
          "v-16-hemostase"
        ],
        "programItems": [
          "V-16"
        ],
        "answer": "BCD"
      },
      {
        "n": 31,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les bactéries suivantes, laquelle (lesquelles) est (sont) responsable(s) d'une méningite néonatale ?",
        "options": [
          {
            "l": "A",
            "t": "Listeria monocytogenes"
          },
          {
            "l": "B",
            "t": "Neisseria meningitidis"
          },
          {
            "l": "C",
            "t": "Escherichia coli"
          },
          {
            "l": "D",
            "t": "Streptococcus pyogenes"
          },
          {
            "l": "E",
            "t": "Streptococcus agalactiae"
          }
        ],
        "chapterSlugs": [
          "iv-1-infections-snc"
        ],
        "programItems": [
          "IV-1"
        ],
        "answer": "ACE"
      },
      {
        "n": 32,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant la toxoplasmose humaine, indiquer celle(s) qui est (sont) exacte(s)",
        "options": [
          {
            "l": "A",
            "t": "Elle est souvent asymptomatique chez l'immunocompétent"
          },
          {
            "l": "B",
            "t": "Elle se caractérise par des calcifications intracérébrales, dans sa forme congénitale"
          },
          {
            "l": "C",
            "t": "Elle se contracte par ingestion de viande crue contenant des kystes tissulaires"
          },
          {
            "l": "D",
            "t": "Elle se contracte par ingestion d'oocystes infectants"
          },
          {
            "l": "E",
            "t": "Elle se traite par le flubendazole"
          }
        ],
        "chapterSlugs": [
          "iv-15-toxoplasmose"
        ],
        "programItems": [
          "IV-15"
        ],
        "answer": "ABCD"
      },
      {
        "n": 33,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant les établissements de santé privés, lesquelles sont exactes ?",
        "options": [
          {
            "l": "A",
            "t": "Ils doivent participer à l'aide médicale urgente"
          },
          {
            "l": "B",
            "t": "Ils doivent contribuer à la recherche clinique"
          },
          {
            "l": "C",
            "t": "Ils doivent mener une réflexion éthique liée à l'accueil et la prise en charge médicale"
          },
          {
            "l": "D",
            "t": "Ils doivent participer à la mise en œuvre des dispositifs de vigilance des produits de santé"
          },
          {
            "l": "E",
            "t": "Ils doivent participer à la formation initiale des professionnels de santé"
          }
        ],
        "chapterSlugs": [
          "iii-7-etablissements-sante-pui"
        ],
        "programItems": [
          "III-7"
        ],
        "answer": "CD"
      },
      {
        "n": 34,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les médicaments suivants, quel(s) est (sont) celui (ceux) indiqué(s) dans la prise en charge de l'insuffisance cardiaque ?",
        "options": [
          {
            "l": "A",
            "t": "Enalapril"
          },
          {
            "l": "B",
            "t": "Nifédipine"
          },
          {
            "l": "C",
            "t": "Carvédilol"
          },
          {
            "l": "D",
            "t": "Spironolactone"
          },
          {
            "l": "E",
            "t": "Furosémide"
          }
        ],
        "chapterSlugs": [
          "v-12-insuffisance-cardiaque"
        ],
        "programItems": [
          "V-12"
        ],
        "answer": "ACDE"
      },
      {
        "n": 35,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": 2023_QCM_P Page 8/15 2023_QCM_P 9 Parmi les propositions suivantes concernant les dihydropyridines antagonistes calciques, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elles sont responsables d'un effet inotrope négatif"
          },
          {
            "l": "B",
            "t": "Elles ont un effet vasodilatateur"
          },
          {
            "l": "C",
            "t": "Elles peuvent être associées aux bêta-bloquants"
          },
          {
            "l": "D",
            "t": "Elles peuvent provoquer des céphalées"
          },
          {
            "l": "E",
            "t": "Elles sont indiquées dans le traitement de l'hypertension artérielle"
          }
        ],
        "chapterSlugs": [
          "v-14-antihypertenseurs"
        ],
        "programItems": [
          "V-14"
        ],
        "answer": "BCDE"
      },
      {
        "n": 36,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant la glucose-6-phosphatase, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "C'est une enzyme de localisation musculaire"
          },
          {
            "l": "B",
            "t": "Elle participe à la dernière étape de la gluconéogenèse"
          },
          {
            "l": "C",
            "t": "Elle est activée en période de jeûne"
          },
          {
            "l": "D",
            "t": "Elle intervient dans l'homéostasie de la glycémie"
          },
          {
            "l": "E",
            "t": "Elle catalyse la phosphorylation du glucose intracellulaire"
          }
        ],
        "chapterSlugs": [
          "ii-11-biochimie-regulation-glycemie"
        ],
        "programItems": [
          "II-11"
        ],
        "answer": "BCD"
      },
      {
        "n": 37,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant les inhibiteurs physiologiques de la coagulation, quelle(s) est (sont) celle(s) qui est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "L'antithrombine inhibe le facteur Xa"
          },
          {
            "l": "B",
            "t": "La protéine S est le cofacteur de la protéine C activée"
          },
          {
            "l": "C",
            "t": "Le complexe thrombine-thrombomoduline active l'antithrombine"
          },
          {
            "l": "D",
            "t": "La protéine C activée inactive les facteurs Va et VIIIa"
          },
          {
            "l": "E",
            "t": "Un déficit en antithrombine est associé à une pathologie hémorragique"
          }
        ],
        "chapterSlugs": [
          "ii-26-physiologie-hemostase"
        ],
        "programItems": [
          "II-26"
        ],
        "answer": "ABD"
      },
      {
        "n": 38,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant les méthodes spectrales d'analyse, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Le coefficient d'absorption molaire dépend de la longueur d'onde du rayonnement incident"
          },
          {
            "l": "B",
            "t": "La fluorescence est un phénomène plus rapide que la phosphorescence"
          },
          {
            "l": "C",
            "t": "L'énergie des rayonnements infrarouges est supérieure à celle des rayonnements ultraviolets"
          },
          {
            "l": "D",
            "t": "La longueur d'onde à laquelle l'absorption est maximale est indépendante du solvant"
          },
          {
            "l": "E",
            "t": "Un spectrophotomètre double-faisceau permet de s'affranchir de l'absorption liée au solvant"
          }
        ],
        "chapterSlugs": [
          "i-3-spectrophotometrie-uv-visible"
        ],
        "programItems": [
          "I-3"
        ],
        "answer": "ABE"
      },
      {
        "n": 39,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes, lesquelles sont exactes ? La pharmacovigilance vise à identifier, évaluer, prévenir les risques liés 2023_QCM_P Page 9/15 2023_QCM_P 10",
        "options": [
          {
            "l": "A",
            "t": "Aux vaccins"
          },
          {
            "l": "B",
            "t": "Aux produits sanguins stables"
          },
          {
            "l": "C",
            "t": "Aux produits sanguins labiles"
          },
          {
            "l": "D",
            "t": "Aux médicaments en accès précoce"
          },
          {
            "l": "E",
            "t": "Aux préparations magistrales"
          }
        ],
        "chapterSlugs": [
          "iii-1-surveillance-vigilances"
        ],
        "programItems": [
          "III-1"
        ],
        "answer": "ABDE"
      },
      {
        "n": 40,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant l'éthanol, quelle(s) est (sont) celle(s) qui est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Il est complètement résorbé au niveau gastrique"
          },
          {
            "l": "B",
            "t": "Le pic plasmatique de l'éthanol est atteint en 30 à 90 min"
          },
          {
            "l": "C",
            "t": "L'alcoolémie diminue plus rapidement chez l'alcoolo-dépendant que chez le buveur occasionnel"
          },
          {
            "l": "D",
            "t": "30 à 40 % de l'éthanol ingéré sont éliminés sous forme non métabolisée par voie respiratoire"
          },
          {
            "l": "E",
            "t": "Il est transformé en acétaldéhyde par l'alcool déshydrogénase"
          }
        ],
        "chapterSlugs": [
          "iii-11-toxicologie-alcools"
        ],
        "programItems": [
          "III-11"
        ],
        "answer": "BCE"
      },
      {
        "n": 41,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant l'omalizumab, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "C'est un anticorps monoclonal humanisé"
          },
          {
            "l": "B",
            "t": "Il empêche la libération des médiateurs préformés mastocytaires"
          },
          {
            "l": "C",
            "t": "Il est indiqué dans l'asthme allergique sévère"
          },
          {
            "l": "D",
            "t": "Sa posologie est adaptée en fonction de la concentration sérique initiale en immunoglobulines E"
          },
          {
            "l": "E",
            "t": "Il est utilisable par voie orale"
          }
        ],
        "chapterSlugs": [
          "v-19-antiasthmatiques-antiallergiques"
        ],
        "programItems": [
          "V-19"
        ],
        "answer": "ABCD"
      },
      {
        "n": 42,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant le détecteur à barette de diodes (détecteur utilisé en chromatographie liquide), quelles sont celles qui sont exactes ?",
        "options": [
          {
            "l": "A",
            "t": "Son utilisation impose un traitement informatique du signal"
          },
          {
            "l": "B",
            "t": "La cellule de détection reçoit une lumière monochromatique"
          },
          {
            "l": "C",
            "t": "Il permet d'acquérir simultanément absorbance et longueur d'onde"
          },
          {
            "l": "D",
            "t": "Il permet d'accéder au spectre d'absorbance de chaque pic chromatographique"
          },
          {
            "l": "E",
            "t": "Un pic chromatographique correspond à un soluté unique si les spectres sont identiques à différents niveaux du pic"
          }
        ],
        "chapterSlugs": [
          "i-5-chromatographie"
        ],
        "programItems": [
          "I-5"
        ],
        "answer": "ACDE"
      },
      {
        "n": 43,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant le lanzoprazole, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Il est utilisé en prévention des lésions gastroduodénales induites par les anti-inflammatoires non stéroïdiens"
          },
          {
            "l": "B",
            "t": "Sa structure est modifiée en milieu acide 2023_QCM_P Page 10/15 2023_QCM_P 11"
          },
          {
            "l": "C",
            "t": "C'est un antagoniste des récepteurs H2"
          },
          {
            "l": "D",
            "t": "C'est un dérivé du benzimidazole"
          },
          {
            "l": "E",
            "t": "Il peut être utilisé dans l'éradication d'Helicobacter pylori"
          }
        ],
        "chapterSlugs": [
          "v-36-ulcere-gastroduodenal"
        ],
        "programItems": [
          "V-36"
        ],
        "answer": "ABDE"
      },
      {
        "n": 44,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Quelle(s) est (sont) la (les) proposition(s) exacte(s) ? La vaccination contre la tuberculose est recommandée en France pour un enfant",
        "options": [
          {
            "l": "A",
            "t": "Né dans un pays de forte endémie tuberculeuse"
          },
          {
            "l": "B",
            "t": "Dont l'un au moins des parents est originaire d'un pays de forte endémie tuberculeuse"
          },
          {
            "l": "C",
            "t": "Devant séjourner au moins un mois d'affilée dans un pays de forte endémie tuberculeuse"
          },
          {
            "l": "D",
            "t": "Résidant en milieu urbain"
          },
          {
            "l": "E",
            "t": "Jugé à risque par le médecin en raison de conditions défavorables de logement"
          }
        ],
        "chapterSlugs": [
          "iii-3-politique-vaccinale"
        ],
        "programItems": [
          "III-3"
        ],
        "answer": "ABCE"
      },
      {
        "n": 45,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant le benzène, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Sa densité de vapeur est plus élevée que celle de l'air"
          },
          {
            "l": "B",
            "t": "L'acide trans,trans-muconique est l'un de ses métabolites"
          },
          {
            "l": "C",
            "t": "Il a une toxicité chronique voisine de celle du toluène"
          },
          {
            "l": "D",
            "t": "C'est un inducteur enzymatique"
          },
          {
            "l": "E",
            "t": "Sa mesure dans l'air expiré est un bon indicateur d'exposition récente"
          }
        ],
        "chapterSlugs": [
          "iii-12-hydrocarbures-aromatiques-solvants-chlores"
        ],
        "programItems": [
          "III-12"
        ],
        "answer": "ABDE"
      },
      {
        "n": 46,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant la radioactivité, quelle(s) est (sont) celle(s) qui est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "La somme des masses des constituants d'un noyau pris séparément est plus importante que la masse de ce noyau"
          },
          {
            "l": "B",
            "t": "L'instabilité d'un noyau due à un excès de neutrons peut se corriger par émission bêta plus"
          },
          {
            "l": "C",
            "t": "Dans un mélange de deux radionucléides différents, il y a enrichissement progressif en radionucléide dont la période est la plus grande"
          },
          {
            "l": "D",
            "t": "La trajectoire des particules bêta moins dans la matière est en ligne droite"
          },
          {
            "l": "E",
            "t": "Le transfert d'énergie linéique est plus grand pour les particules bêta que pour les particules alpha"
          }
        ],
        "chapterSlugs": [
          "i-11-rayons-x-radio-isotopes"
        ],
        "programItems": [
          "I-11"
        ],
        "answer": "AC"
      },
      {
        "n": 47,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les examens biologiques suivants, quels sont ceux qui sont recommandés pour le diagnostic d'une polyarthrite rhumatoïde ?",
        "options": [
          {
            "l": "A",
            "t": "Le typage HLA de classe I"
          },
          {
            "l": "B",
            "t": "Le dosage de la CRP"
          },
          {
            "l": "C",
            "t": "La recherche des facteurs rhumatoïdes 2023_QCM_P Page 11/15 2023_QCM_P 12"
          },
          {
            "l": "D",
            "t": "La recherche d'anticorps anti-peptides citrullinés (CCP)"
          },
          {
            "l": "E",
            "t": "Le dosage des IgE totales"
          }
        ],
        "chapterSlugs": [
          "iv-33-maladies-auto-immunes"
        ],
        "programItems": [
          "IV-33"
        ],
        "answer": "BCD"
      },
      {
        "n": 48,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant la préparation ophtalmique de ciclosporine à 1 mg/ml contenant les excipients ci-dessous, laquelle (lesquelles) est (sont) exacte(s) ? Triglycérides à chaine moyenne, glycérol, chlorure de cétalkonium, poloxamère 188, hydroxyde de sodium, eau pour préparations injectables",
        "options": [
          {
            "l": "A",
            "t": "Cette préparation est une solution aqueuse"
          },
          {
            "l": "B",
            "t": "Le poloxamère 188 est un surfactant"
          },
          {
            "l": "C",
            "t": "L'hydroxyde de sodium permet de tamponner la préparation"
          },
          {
            "l": "D",
            "t": "Le glycérol est un isotonisant"
          },
          {
            "l": "E",
            "t": "La concentration en principe actif est de 1 %"
          }
        ],
        "chapterSlugs": [
          "v-55-formes-cutanee-oculaire"
        ],
        "programItems": [
          "V-55"
        ],
        "answer": "BD"
      },
      {
        "n": 49,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les mécanismes impliqués dans la régulation de l'expression des gènes, lequel (lesquels) peut (peuvent) intervenir dans la maturation des transcrits primaires ?",
        "options": [
          {
            "l": "A",
            "t": "Présence de promoteurs alternatifs"
          },
          {
            "l": "B",
            "t": "Epissage alternatif"
          },
          {
            "l": "C",
            "t": "Présence de régions régulatrices en \"cis\""
          },
          {
            "l": "D",
            "t": "Présence de sites multiples de poly-adénylation"
          },
          {
            "l": "E",
            "t": "Modifications chimiques"
          }
        ],
        "chapterSlugs": [
          "ii-2-genetique-regulation-expression-genes"
        ],
        "programItems": [
          "II-2"
        ],
        "answer": "BD"
      },
      {
        "n": 50,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant le séquençage des acides nucléiques par la méthode de Sanger, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Il permet de mettre en évidence des substitutions nucléotidiques de type SNP"
          },
          {
            "l": "B",
            "t": "Il permet de mettre en évidence des mutations dues à des transitions"
          },
          {
            "l": "C",
            "t": "Il permet de mettre en évidence des mutations dues à des délétions de quelques nucléotides"
          },
          {
            "l": "D",
            "t": "Il permet la caractérisation de variations nucléotidiques au sein de la séquence d'un exon"
          },
          {
            "l": "E",
            "t": "Il permet la caractérisation de variations nucléotidiques au sein de la séquence d'un intron"
          }
        ],
        "chapterSlugs": [
          "ii-4-genetique-identification-mutations"
        ],
        "programItems": [
          "II-4"
        ],
        "answer": "ABCDE"
      },
      {
        "n": 51,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": ": Parmi les propositions suivantes, concernant la rétrocession, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle est organisée exclusivement pour les patients non hospitalisés, bénéficiaires de l'Aide Médicale d'Etat"
          },
          {
            "l": "B",
            "t": "Elle est organisée dans toutes les pharmacies à usage intérieur des établissements de santé 2023_QCM_P Page 12/15 2023_QCM_P 13"
          },
          {
            "l": "C",
            "t": "Elle constitue une dérogation au monopole pharmaceutique de distribution"
          },
          {
            "l": "D",
            "t": "Elle doit être réalisée par un pharmacien ou par un préparateur sous le contrôle d'un pharmacien"
          },
          {
            "l": "E",
            "t": "Elle ne concerne que des médicaments non disponibles en officine de ville"
          }
        ],
        "chapterSlugs": [
          "iii-7-etablissements-sante-pui"
        ],
        "programItems": [
          "III-7"
        ],
        "answer": "D"
      },
      {
        "n": 52,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes relatives à la présentation de l'antigène par les molécules du complexe majeur d'histocompatibilité (CMH) de classe I, quelle(s) est (sont) celle(s) qui est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle implique le clivage d'une protéine en peptides de petite taille"
          },
          {
            "l": "B",
            "t": "Elle implique l'interaction avec les lymphocytes T CD4+"
          },
          {
            "l": "C",
            "t": "Les complexes CMH - peptides sont exportés vers la membrane de la cellule présentatrice de l'antigène"
          },
          {
            "l": "D",
            "t": "Le choix du peptide sélectionné dépend du variant allélique de la molécule de CMH"
          },
          {
            "l": "E",
            "t": "Elle est réalisée uniquement par les cellules dendritiques"
          }
        ],
        "chapterSlugs": [
          "ii-29-immunologie-cmh-presentation-antigene"
        ],
        "programItems": [
          "II-29"
        ],
        "answer": "ACD"
      },
      {
        "n": 53,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Quel(s) signe(s) clinique(s) peut-on observer lors d'une intoxication aiguë par les neuroleptiques ?",
        "options": [
          {
            "l": "A",
            "t": "Un syndrome extrapyramidal"
          },
          {
            "l": "B",
            "t": "Un syndrome cholinergique"
          },
          {
            "l": "C",
            "t": "Une mydriase"
          },
          {
            "l": "D",
            "t": "Des myoclonies"
          },
          {
            "l": "E",
            "t": "Une hyper-salivation"
          }
        ],
        "chapterSlugs": [
          "v-46-toxicologie-psychotropes"
        ],
        "programItems": [
          "V-46"
        ],
        "answer": "ACDE"
      },
      {
        "n": 54,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant l'accès palustre simple à Plasmodium falciparum, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Il se caractérise cliniquement par la triade frissons, fièvre, sueurs"
          },
          {
            "l": "B",
            "t": "Il se traite en première intention par de l'artesunate"
          },
          {
            "l": "C",
            "t": "Il peut se traiter par l'association arthéméther-luméfantrine"
          },
          {
            "l": "D",
            "t": "Il peut se traiter par la doxycycline"
          },
          {
            "l": "E",
            "t": "Il s'accompagne de troubles de la conscience"
          }
        ],
        "chapterSlugs": [
          "parasito-paludisme"
        ],
        "programItems": [
          "IV-14"
        ],
        "answer": "AC"
      },
      {
        "n": 55,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant l'évaluation règlementaire de la toxicité réitérée d'un médicament, quelle(s) est (sont) celle(s) qui est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Les études sur animaux précèdent les essais cliniques chez l'Homme"
          },
          {
            "l": "B",
            "t": "Elle a pour objectif de déterminer la NOAEL (No Observed Adverse Effect Level) du produit testé"
          },
          {
            "l": "C",
            "t": "Les études doivent être réalisées sur au moins 2 espèces de mammifères rongeurs 2023_QCM_P Page 13/15 2023_QCM_P 14"
          },
          {
            "l": "D",
            "t": "L'administration du produit testé doit se faire par la voie prévue chez l'Homme"
          },
          {
            "l": "E",
            "t": "La durée de l'essai chez l'animal est fonction de la durée prévue d'administration chez l'Homme"
          }
        ],
        "chapterSlugs": [
          "v-44-evaluation-toxicite"
        ],
        "programItems": [
          "V-44"
        ],
        "answer": "ABDE"
      },
      {
        "n": 56,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant la sécurité virale des médicaments dérivés du sang, quelles sont les techniques utilisées ?",
        "options": [
          {
            "l": "A",
            "t": "La microfiltration"
          },
          {
            "l": "B",
            "t": "L'autoclavage"
          },
          {
            "l": "C",
            "t": "La pasteurisation"
          },
          {
            "l": "D",
            "t": "La combinaison d'un solvant et d'un détergent"
          },
          {
            "l": "E",
            "t": "L'ajout de conservateurs antimicrobiens"
          }
        ],
        "chapterSlugs": [
          "v-56-medicaments-derives-plasma"
        ],
        "programItems": [
          "V-56"
        ],
        "answer": "CD"
      },
      {
        "n": 57,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant la prise en charge de l'ostéoporose, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Le dénosumab inhibe sélectivement l'activation du récepteur RANK à la surface des ostéoclastes"
          },
          {
            "l": "B",
            "t": "Le tériparatide est composé d'une séquence d'acides aminés de l'extrémité amino-terminale de la parathormone humaine"
          },
          {
            "l": "C",
            "t": "Le raloxifène est un antagoniste pur des récepteurs œstrogéniques"
          },
          {
            "l": "D",
            "t": "Les biphosphonates sont éliminés sous forme inchangée dans les urines"
          },
          {
            "l": "E",
            "t": "Les biphosphonates doivent être administrés au milieu du repas"
          }
        ],
        "chapterSlugs": [
          "v-43-medicaments-osteoporose"
        ],
        "programItems": [
          "V-43"
        ],
        "answer": "ABD"
      },
      {
        "n": 58,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Concernant le mécanisme d'action des antidotes suivants, quelle(s) proposition(s) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Le fomépizole sature l'alcool déshydrogénase"
          },
          {
            "l": "B",
            "t": "La pralidoxime réactive les cholinestérases"
          },
          {
            "l": "C",
            "t": "La naloxone est un agoniste morphinique partiel"
          },
          {
            "l": "D",
            "t": "La N-acétylcystéine reconstitue le stock de glutathion réduit"
          },
          {
            "l": "E",
            "t": "L'acide dimercaptosuccinique chélate le mercure"
          }
        ],
        "chapterSlugs": [
          "v-49-antidotes-intoxications"
        ],
        "programItems": [
          "V-49"
        ],
        "answer": "BDE"
      },
      {
        "n": 59,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": ": Parmi les propositions suivantes concernant l'intérêt des peptides natriurétiques dans l'insuffisance cardiaque, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "La valeur des peptides natriurétiques cardiaques est corrélée à la gravité de l'insuffisance cardiaque"
          },
          {
            "l": "B",
            "t": "Le dosage des peptides natriurétiques cardiaques est indispensable au diagnostic"
          },
          {
            "l": "C",
            "t": "Le NT-proBNP présente une valeur diagnostique supérieure au BNP"
          },
          {
            "l": "D",
            "t": "Le dosage des peptides natriurétiques cardiaques est indispensable pour le suivi thérapeutique de l'insuffisant cardiaque 2023_QCM_P Page 14/15 2023_QCM_P 15"
          },
          {
            "l": "E",
            "t": "L'âge n'a pas d'influence sur les valeurs usuelles des peptides natriurétiques"
          }
        ],
        "chapterSlugs": [
          "iv-47-sca-insuffisance-cardiaque"
        ],
        "programItems": [
          "IV-47"
        ],
        "answer": "A"
      },
      {
        "n": 60,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": ": Parmi les propositions suivantes concernant la spectrofluorimétrie moléculaire, lesquelles sont exactes ?",
        "options": [
          {
            "l": "A",
            "t": "Le rendement quantique augmente avec la conjugaison électronique du fluorophore"
          },
          {
            "l": "B",
            "t": "La durée de vie de fluorescence excède la seconde"
          },
          {
            "l": "C",
            "t": "Le phénomène de fluorescence fait intervenir le niveau triplet excité (T1) du fluorophore"
          },
          {
            "l": "D",
            "t": "L'intensité de fluorescence augmente avec la planéité du fluorophore"
          },
          {
            "l": "E",
            "t": "En solution très diluée, l'intensité de fluorescence est directement proportionnelle à la concentration de la substance fluorescente 2023_QCM_P Page 15/15 1314"
          }
        ],
        "chapterSlugs": [
          "i-4-spectrofluorimetrie"
        ],
        "programItems": [
          "I-4"
        ],
        "answer": "ADE"
      }
    ]
  },
  {
    "key": "2022",
    "label": "Décembre 2022",
    "source": "Concours national d'internat en pharmacie — session de décembre 2022 (CNG). Réponses : grille officielle du Conseil Scientifique (incluse dans le sujet).",
    "items": [
      {
        "n": 1,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les propositions suivantes concernant la noradrénaline, quelle est la réponse exacte ?",
        "options": [
          {
            "l": "A",
            "t": "Elle est le neuromédiateur de la transmission ganglionnaire du système nerveux autonome"
          },
          {
            "l": "B",
            "t": "Elle est libérée par les neurones postganglionnaires parasympathiques"
          },
          {
            "l": "C",
            "t": "Elle est libérée au niveau de la plaque motrice"
          },
          {
            "l": "D",
            "t": "Elle est dégradée en adrénaline par la Catéchol-O-Méthyl Transférase (COMT)"
          },
          {
            "l": "E",
            "t": "Elle est dégradée par les Mono-Amines Oxydases (MAO)"
          }
        ],
        "chapterSlugs": [
          "ii-14-physiologie-neurotransmetteurs"
        ],
        "programItems": [
          "II-14"
        ],
        "answer": "E"
      },
      {
        "n": 2,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Quelle est la proposition fausse concernant le kétoconazole ?",
        "options": [
          {
            "l": "A",
            "t": "|| appartient à la classe des imidazolés"
          },
          {
            "l": "B",
            "t": "C'est un puissant inhibiteur enzymatique"
          },
          {
            "l": "C",
            "t": "Son association avec la fluindione est contre-indiquée"
          },
          {
            "l": "D",
            "t": "Il agit sur la cellule fongique en inhibant la synthèse de l'ergostérol membranaire"
          },
          {
            "l": "E",
            "t": "Il est éliminé sans métabolisation"
          }
        ],
        "chapterSlugs": [
          "v-33-antifongiques"
        ],
        "programItems": [
          "V-33"
        ],
        "answer": "E"
      },
      {
        "n": 3,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Quelle est la proposition compatible avec les résultats suivants : Activité du complexe prothrombinique = 45 %, Temps de céphaline avec activateur = 31 secondes (témoin = 30 secondes) ?",
        "options": [
          {
            "l": "A",
            "t": "Déficit en antithrombine"
          },
          {
            "l": "B",
            "t": "Déficit en facteur V"
          },
          {
            "l": "C",
            "t": "Déficit en facteur IX"
          },
          {
            "l": "D",
            "t": "Déficit en facteur VII"
          },
          {
            "l": "E",
            "t": "Déficit en facteur Il"
          }
        ],
        "chapterSlugs": [
          "iv-36-allongement-tq-tca"
        ],
        "programItems": [
          "IV-36"
        ],
        "answer": "D"
      },
      {
        "n": 4,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les propositions suivantes concernant la méningite à Neisseria meningitidis, laquelle est inexacte ?",
        "options": [
          {
            "l": "A",
            "t": "Une hypercellularité à polynucléaires neutrophiles est retrouvée dans le liquide cérébrospinal"
          },
          {
            "l": "B",
            "t": "La glycorachie est augmentée"
          },
          {
            "l": "C",
            "t": "L'examen direct peut montrer des cocci à Gram négatif"
          },
          {
            "l": "D",
            "t": "Le traitement probabiliste fait appel à une céphalosporine de troisième génération"
          },
          {
            "l": "E",
            "t": "La rifampicine est réservée à la chimioprophylaxie"
          }
        ],
        "chapterSlugs": [
          "iv-1-infections-snc"
        ],
        "programItems": [
          "IV-1"
        ],
        "answer": "B"
      },
      {
        "n": 5,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Laquelle des propositions suivantes concernant la pharmacovigilance est exacte ? 2Q 2",
        "options": [
          {
            "l": "A",
            "t": "Elle s'applique à l'ensemble des produits de santé"
          },
          {
            "l": "B",
            "t": "Elle ne concerne pas les médicaments réservés à l'usage hospitalier"
          },
          {
            "l": "C",
            "t": "Elle concerne toutes les spécialités pharmaceutiques commercialisées en France"
          },
          {
            "l": "D",
            "t": "Elle s'applique aux médicaments en essais cliniques"
          },
          {
            "l": "E",
            "t": "Elle ne concerne pas les préparations magistrales"
          }
        ],
        "chapterSlugs": [
          "iii-1-surveillance-vigilances"
        ],
        "programItems": [
          "III-1"
        ],
        "answer": "C"
      },
      {
        "n": 6,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Un garçon a une cataracte congénitale familiale se transmettant selon le mode dominant autosomique. La pénétrance est complète. Sa sœur, son père, sa grand-mère paternelle sont également atteints. Une autre sœur est indemne. Quel est le risque pour la descendance de ce garçon d'être porteuse de cataracte ?",
        "options": [
          {
            "l": "A",
            "t": "100 %"
          },
          {
            "l": "B",
            "t": "75%"
          },
          {
            "l": "C",
            "t": "25 %"
          },
          {
            "l": "D",
            "t": "10%"
          },
          {
            "l": "E",
            "t": "50%"
          }
        ],
        "chapterSlugs": [
          "ii-3-genetique-maladies-monogeniques"
        ],
        "programItems": [
          "II-3"
        ],
        "answer": "E"
      },
      {
        "n": 7,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Quel est le mode d'action toxique des insecticides organophosphorés ?",
        "options": [
          {
            "l": "A",
            "t": "Par oxydation des hémoprotéines"
          },
          {
            "l": "B",
            "t": "Par inhibition de l'ALA déshydratase"
          },
          {
            "l": "C",
            "t": "Par activation des phosphodiestérases"
          },
          {
            "l": "D",
            "t": "Par inhibition des cholinestérases"
          },
          {
            "l": "E",
            "t": "Par découplage des réactions mitochondriales de phosphorylation oxydative"
          }
        ],
        "chapterSlugs": [
          "iii-13-produits-phytosanitaires"
        ],
        "programItems": [
          "III-13"
        ],
        "answer": "D"
      },
      {
        "n": 8,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les propositions suivantes concernant le charbon activé utilisé en toxicologie, laquelle est exacte ?",
        "options": [
          {
            "l": "A",
            "t": "La dose usuelle est de 100 mg chez l'adulte"
          },
          {
            "l": "B",
            "t": "Il est déconseillé chez les enfants de moins de 12 ans"
          },
          {
            "l": "C",
            "t": "Il peut être administré par voie parentérale dans les intoxications sévères"
          },
          {
            "l": "D",
            "t": "Les alcools sont des substances carbo-adsorbables"
          },
          {
            "l": "E",
            "t": "À doses répétées, le charbon peut être utilisé comme traitement épurateur digestif"
          }
        ],
        "chapterSlugs": [
          "v-49-antidotes-intoxications"
        ],
        "programItems": [
          "V-49"
        ],
        "answer": "E"
      },
      {
        "n": 9,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les activités enzymatiques suivantes, indiquer celle qui est déficitaire dans la maladie de Lesh Nyhan",
        "options": [
          {
            "l": "A",
            "t": "Adénine phosphoribosyltransférase"
          },
          {
            "l": "B",
            "t": "Hypoxantine-guanine phosphoribosyltransférase"
          },
          {
            "l": "C",
            "t": "Uracil phosphoribosyltranférase"
          },
          {
            "l": "D",
            "t": "Orotate phosphoribosyltransférase"
          },
          {
            "l": "E",
            "t": "ATP phosphoribosyltransférase"
          }
        ],
        "chapterSlugs": [
          "iv-48-hyperuricemies"
        ],
        "programItems": [
          "IV-48"
        ],
        "answer": "B"
      },
      {
        "n": 10,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les propositions suivantes concernant les solutés de remplissage vasculaire, laquelle correspond au soluté de pouvoir d'expansion vasculaire le plus important ?",
        "options": [
          {
            "l": "A",
            "t": "Les solutés salés hypertoniques"
          },
          {
            "l": "B",
            "t": "Les solutés salés hypotoniques"
          },
          {
            "l": "C",
            "t": "Les solutés glucosés isotoniques"
          },
          {
            "l": "D",
            "t": "Les hydroxyéthylamidons"
          },
          {
            "l": "E",
            "t": "Le Ringer lactate"
          }
        ],
        "chapterSlugs": [
          "v-17-solutes-remplissage"
        ],
        "programItems": [
          "V-17"
        ],
        "answer": "D"
      },
      {
        "n": 11,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le méthanol, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Il est oxydé plus lentement que l'éthanol dans l'organisme humain"
          },
          {
            "l": "B",
            "t": "Il a une affinité plus forte pour l'ADH que l'éthanol"
          },
          {
            "l": "C",
            "t": "Il provoque une alcalose métabolique lors d'une intoxication aiguë"
          },
          {
            "l": "D",
            "t": "!| est métabolisé en acide glyoxylique"
          },
          {
            "l": "E",
            "t": "Il peut être éliminé de l'organisme par épuration extra-rénale"
          }
        ],
        "chapterSlugs": [
          "iii-11-toxicologie-alcools"
        ],
        "programItems": [
          "III-11"
        ],
        "answer": "AE"
      },
      {
        "n": 12,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le trichloréthylène, quelle(s) est (sont) celle(s) qui est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Après pénétration dans l'organisme, le trichloréthylène est entièrement métabolisé"
          },
          {
            "l": "B",
            "t": "L'acide trichloracétique est un métabolite du trichloréthylène"
          },
          {
            "l": "C",
            "t": "Le trichloréthylène peut entraîner des toxicomanies"
          },
          {
            "l": "D",
            "t": "Les intoxications aiguës par le trichloréthylène provoquent des troubles de la conscience"
          },
          {
            "l": "E",
            "t": "Le trichloréthanol est un métabolite du trichloréthylène"
          }
        ],
        "chapterSlugs": [
          "iii-12-hydrocarbures-aromatiques-solvants-chlores"
        ],
        "programItems": [
          "III-12"
        ],
        "answer": "BCDE"
      },
      {
        "n": 13,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Quelle(s) est (sont) la (les) proposition(s) exacte(s) ? Le mécanisme de cytotoxicité cellulaire dépendant d'anticorps (ADCC) fait intervenir les effecteurs suivants",
        "options": [
          {
            "l": "A",
            "t": "Cellules Natural Killer"
          },
          {
            "l": "B",
            "t": "Mastocytes"
          },
          {
            "l": "C",
            "t": "Anticorps de classe lgG"
          },
          {
            "l": "D",
            "t": "Anticorps de classe IgE"
          },
          {
            "l": "E",
            "t": "Lymphocytes B"
          }
        ],
        "chapterSlugs": [
          "ii-31-immunologie-reponses-humorale-cellulaire"
        ],
        "programItems": [
          "II-31"
        ],
        "answer": "ACD"
      },
      {
        "n": 14,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes se rapportant aux molécules d'histocompatibilité de classe Il chez l'homme, quelle(s) est (sont) celle(s) qui est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Ce sont des holoprotéines"
          },
          {
            "l": "B",
            "t": "Elles sont des ligands des molécules CD4"
          },
          {
            "l": "C",
            "t": "Elles sont constituées d'une chaîne lourde et de la bêta2-microglobuline"
          },
          {
            "l": "D",
            "t": "Elles sont exprimées sur la plupart des cellules nucléées"
          },
          {
            "l": "E",
            "t": "Leur fonction principale est de présenter des antigènes endogènes"
          }
        ],
        "chapterSlugs": [
          "ii-29-immunologie-cmh-presentation-antigene"
        ],
        "programItems": [
          "II-29"
        ],
        "answer": "B"
      },
      {
        "n": 15,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Quelles sont les propositions exactes concernant les lipoprotéines plasmatiques de basse densité (LDL) ? 2Q 4",
        "options": [
          {
            "l": "A",
            "t": "Elles sont riches en apolipoprotéine B"
          },
          {
            "l": "B",
            "t": "Elles sont reconnues par les récepteurs B/E"
          },
          {
            "l": "C",
            "t": "Elles sont plus riches en triglycérides qu'en cholestérol"
          },
          {
            "l": "D",
            "t": "Elles sont moins riches en protéines que les lipoprotéines de haute densité (HDL)"
          },
          {
            "l": "E",
            "t": "Elles sont transformées en HDL par action de la lipoprotéine lipase"
          }
        ],
        "chapterSlugs": [
          "ii-10-biochimie-acides-nucleiques-lipoproteines"
        ],
        "programItems": [
          "II-10"
        ],
        "answer": "ABD"
      },
      {
        "n": 16,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les effets indésirables suivants, quel(s) est (sont) celui (ceux) provoqué(s) par les anti-angoreux nitrés ?",
        "options": [
          {
            "l": "A",
            "t": "Céphalées"
          },
          {
            "l": "B",
            "t": "Hypotension avec lipothymie"
          },
          {
            "l": "C",
            "t": "Douleurs musculaires"
          },
          {
            "l": "D",
            "t": "Constipation"
          },
          {
            "l": "E",
            "t": "Vasodilatation cutanée avec rougeur"
          }
        ],
        "chapterSlugs": [
          "v-13-anti-angoreux"
        ],
        "programItems": [
          "V-13"
        ],
        "answer": "ABE"
      },
      {
        "n": 17,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les chylomicrons, quelle(s) est (sont) celle(s) qui est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Ils sont synthétisés par les entérocytes"
          },
          {
            "l": "B",
            "t": "Ils donnent des \"remnants\" par l'action de la lécithine-cholestérol acyl transférase (LCAT)"
          },
          {
            "l": "C",
            "t": "Ils augmentent dans le plasma en période post-prandiale"
          },
          {
            "l": "D",
            "t": "Leur composition en lipides comprend au moins 30 % de cholestérol"
          },
          {
            "l": "E",
            "t": "Leur concentration plasmatique est augmentée dans l'hyperlipoprotéinémie de type |"
          }
        ],
        "chapterSlugs": [
          "ii-10-biochimie-acides-nucleiques-lipoproteines"
        ],
        "programItems": [
          "II-10"
        ],
        "answer": "ACE"
      },
      {
        "n": 18,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, quelle(s) est (sont) celle(s) qui est (sont) exacte(s) ? La cholestase entraîne",
        "options": [
          {
            "l": "A",
            "t": "Une hypocholestérolémie"
          },
          {
            "l": "B",
            "t": "Une diminution de l'urée plasmatique"
          },
          {
            "l": "C",
            "t": "Une augmentation de l'activité de la gamma-glutamyltransférase plasmatique"
          },
          {
            "l": "D",
            "t": "Une augmentation de la bilirubine conjuguée plasmatique"
          },
          {
            "l": "E",
            "t": "Une augmentation de l'activité de la phosphatase alcaline plasmatique"
          }
        ],
        "chapterSlugs": [
          "iv-44-cholestase-cytolyse"
        ],
        "programItems": [
          "IV-44"
        ],
        "answer": "CDE"
      },
      {
        "n": 19,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, laquelle (lesquelles) est (sont) habituellement observée(s) dans une carence en folates ?",
        "options": [
          {
            "l": "A",
            "t": "La moelle osseuse est riche en érythroblastes de grande taille"
          },
          {
            "l": "B",
            "t": "Les thrombocytes sont en nombre augmenté"
          },
          {
            "l": "C",
            "t": "Elle est liée à un déficit en facteur intrinsèque"
          },
          {
            "l": "D",
            "t": "On observe souvent des polynucléaires hypersegmentés sur le frottis sanguin"
          },
          {
            "l": "E",
            "t": "Le taux de réticulocytes est bas"
          }
        ],
        "chapterSlugs": [
          "hemato-anemies"
        ],
        "programItems": [
          "IV-22"
        ],
        "answer": "ADE"
      },
      {
        "n": 20,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "- Parmi les propositions suivantes concernant les diurétiques, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "La spironolactone agit au niveau du tube contourné distal"
          },
          {
            "l": "B",
            "t": "L'association du furosémide avec la tobramycine majore l'ototoxicité"
          },
          {
            "l": "C",
            "t": "L'administration du furosémide est contre-indiquée dans l'insuffisance rénale sévère"
          },
          {
            "l": "D",
            "t": "La prescription de diurétiques thiazidiques chez un patient traité par lithium est déconseillée"
          },
          {
            "l": "E",
            "t": "La prise d'un diurétique hypokaliémiant favorise les effets toxiques de la digoxine"
          }
        ],
        "chapterSlugs": [
          "v-15-diuretiques"
        ],
        "programItems": [
          "V-15"
        ],
        "answer": "ABDE"
      },
      {
        "n": 21,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, quelle(s) est (sont) celle(s) qui justifie(nt) la prescription de cytotoxiques en association plutôt qu'en monothérapie ?",
        "options": [
          {
            "l": "A",
            "t": "Espacer l'intervalle entre les cycles de chimiothérapie"
          },
          {
            "l": "B",
            "t": "Diminuer les phénomènes de résistances acquises"
          },
          {
            "l": "C",
            "t": "Diminuer les risques de neutropénie"
          },
          {
            "l": "D",
            "t": "Augmenter la dose de chaque médicament de l'association"
          },
          {
            "l": "E",
            "t": "Augmenter l'activité antitumorale"
          }
        ],
        "chapterSlugs": [
          "v-42-anticancereux"
        ],
        "programItems": [
          "V-42"
        ],
        "answer": "BE"
      },
      {
        "n": 22,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'hCG, laquelle (lesquelles) est (sont) inexacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle possède une sous-unité alpha commune avec la LH"
          },
          {
            "l": "B",
            "t": "Elle est produite par le cytotrophoblaste"
          },
          {
            "l": "C",
            "t": "Elle diminue après le premier trimestre de grossesse"
          },
          {
            "l": "D",
            "t": "Elle se dénomme également hormone lactogène placentaire (HLP)"
          },
          {
            "l": "E",
            "t": "Elle peut se doser dans le sang ou dans l'urine"
          }
        ],
        "chapterSlugs": [
          "ii-21-physiologie-cycle-menstruel-grossesse"
        ],
        "programItems": [
          "II-21"
        ],
        "answer": "BD"
      },
      {
        "n": 23,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le virus de l'hépatite C, quelle(s) est (sont) celle(s) qui est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "C'est un virus à ADN"
          },
          {
            "l": "B",
            "t": "C'est un virus enveloppé"
          },
          {
            "l": "C",
            "t": "Il peut être responsable d'hépatite chronique"
          },
          {
            "l": "D",
            "t": "Le vaccin anti-hépatite C est à base de virus inactivés"
          },
          {
            "l": "E",
            "t": "La contamination humaine se fait surtout par voie fécale-orale"
          }
        ],
        "chapterSlugs": [
          "iv-8-hepatites-virales"
        ],
        "programItems": [
          "IV-8"
        ],
        "answer": "BC"
      },
      {
        "n": 24,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les mécanismes suivants, lequel (lesquels) peut (peuvent) être responsable(s) de la résistance bactérienne aux aminosides ?",
        "options": [
          {
            "l": "A",
            "t": "La production d'acétyl-transférase par la bactérie"
          },
          {
            "l": "B",
            "t": "Un mécanisme d'efflux"
          },
          {
            "l": "C",
            "t": "Des mutations affectant certaines protéines des ribosomes bactériens"
          },
          {
            "l": "D",
            "t": "La production de B-galactosidase"
          },
          {
            "l": "E",
            "t": "Le déficit de transport de l'antibiotique vers la cible chez les streptocoques"
          }
        ],
        "chapterSlugs": [
          "v-27-aminosides"
        ],
        "programItems": [
          "V-27"
        ],
        "answer": "ABCE"
      },
      {
        "n": 25,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les éléments suivants lequel (lesquels) est (sont) nécessaire(s) à la synthèse de l'ADN par une - réaction de polymérisation en chaîne (PCR) ? 2Q 6",
        "options": [
          {
            "l": "A",
            "t": "Des amorces oligonucléotidiques spécifiques"
          },
          {
            "l": "B",
            "t": "Des topoisomérases"
          },
          {
            "l": "C",
            "t": "Des ribonucléotides triphosphate"
          },
          {
            "l": "D",
            "t": "Une ADN polymérase thermostable"
          },
          {
            "l": "E",
            "t": "Une ADN ligase thermostable"
          }
        ],
        "chapterSlugs": [
          "ii-4-genetique-identification-mutations"
        ],
        "programItems": [
          "II-4"
        ],
        "answer": "AD"
      },
      {
        "n": 26,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les cellules suivantes, laquelle (lesquelles) est (sont) une (des) cible(s) des virus de l'immunodéfi- cience humaine ?",
        "options": [
          {
            "l": "A",
            "t": "Les lymphocytes T CD4+"
          },
          {
            "l": "B",
            "t": "Les macrophages"
          },
          {
            "l": "C",
            "t": "Les thrombocytes"
          },
          {
            "l": "D",
            "t": "Les polynucléaires éosinophiles"
          },
          {
            "l": "E",
            "t": "Les spermatozoïdes"
          }
        ],
        "chapterSlugs": [
          "iv-9-immunodeprime"
        ],
        "programItems": [
          "IV-9"
        ],
        "answer": "AB"
      },
      {
        "n": 27,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les réactions nucléaires suivantes, laquelle (lesquelles) est (sont) possible(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Li ,1H —2 }He"
          },
          {
            "l": "B",
            "t": ";Li +jHe—>2 }He+\\p"
          },
          {
            "l": "C",
            "t": "$N +9n>'C+y"
          },
          {
            "l": "D",
            "t": "IP +son>2P+y"
          },
          {
            "l": "E",
            "t": "3N +jHe—>O+gn"
          }
        ],
        "chapterSlugs": [
          "i-11-rayons-x-radio-isotopes"
        ],
        "programItems": [
          "I-11"
        ],
        "answer": "AD"
      },
      {
        "n": 28,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, laquelle (lesquelles) est (sont) une (des) technique(s) de détection rapide de Cryptococcus neoformans dans un liquide cérébrospinal ?",
        "options": [
          {
            "l": "A",
            "t": "La coloration au Merthiolate-lode-Formol (M.1.F.)"
          },
          {
            "l": "B",
            "t": "La recherche des anticorps anti-mannanes"
          },
          {
            "l": "C",
            "t": "La recherche des antigènes solubles"
          },
          {
            "l": "D",
            "t": "Le test à l'encre de Chine"
          },
          {
            "l": "E",
            "t": "Le test de filamentation"
          }
        ],
        "chapterSlugs": [
          "iv-18-levures"
        ],
        "programItems": [
          "IV-18"
        ],
        "answer": "CD"
      },
      {
        "n": 29,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ? L'hyperparathyroïdie primaire s'accompagne",
        "options": [
          {
            "l": "A",
            "t": "D'une augmentation de la lyse osseuse"
          },
          {
            "l": "B",
            "t": "D'une hypercalcémie"
          },
          {
            "l": "C",
            "t": "D'une hyperphosphatémie"
          },
          {
            "l": "D",
            "t": "D'une augmentation de la concentration plasmatique de TSH"
          },
          {
            "l": "E",
            "t": "D'une hypocholestérolémie"
          }
        ],
        "chapterSlugs": [
          "iv-43-metabolisme-osseux"
        ],
        "programItems": [
          "IV-43"
        ],
        "answer": "AB"
      },
      {
        "n": 30,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, quelle(s) est (sont) celle(s) qui peut (peuvent) être observée(s) lors d'un syndrome de Cushing ?",
        "options": [
          {
            "l": "A",
            "t": "L'absence de cycle nycthéméral du cortisol plasmatique"
          },
          {
            "l": "B",
            "t": "Une hypocholestérolémie"
          },
          {
            "l": "C",
            "t": "Une intolérance au glucose"
          },
          {
            "l": "D",
            "t": "Une augmentation du cortisol libre urinaire"
          },
          {
            "l": "E",
            "t": "Un amaigrissement"
          }
        ],
        "chapterSlugs": [
          "iv-50-corticosurrenale"
        ],
        "programItems": [
          "IV-50"
        ],
        "answer": "ACD"
      },
      {
        "n": 31,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'optimisation d'une méthode chromatographique, quelles sont les propositions exactes ? Elle a pour but",
        "options": [
          {
            "l": "A",
            "t": "D'obtenir une résolution supérieure à 1,5"
          },
          {
            "l": "B",
            "t": "D'augmenter les facteurs de rétention afin de diminuer la durée de l'analyse"
          },
          {
            "l": "C",
            "t": "De diminuer la hauteur équivalente à un plateau théorique"
          },
          {
            "l": "D",
            "t": "D'augmenter la longueur de la colonne pour augmenter sa sélectivité"
          },
          {
            "l": "E",
            "t": "De rendre très proches les affinités des solutés pour la phase stationnaire"
          }
        ],
        "chapterSlugs": [
          "i-5-chromatographie"
        ],
        "programItems": [
          "I-5"
        ],
        "answer": "AC"
      },
      {
        "n": 32,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les antagonistes H2, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Ils sont utilisés pour traiter les rhinites allergiques"
          },
          {
            "l": "B",
            "t": "Ils stimulent la sécrétion acide gastrique"
          },
          {
            "l": "C",
            "t": "Ils activent la Na*+/K+ ATPase"
          },
          {
            "l": "D",
            "t": "Ils sont indiqués dans le traitement du reflux gastro-æsophagien"
          },
          {
            "l": "E",
            "t": "Ils sont contre-indiqués chez le sujet âgé"
          }
        ],
        "chapterSlugs": [
          "v-36-ulcere-gastroduodenal"
        ],
        "programItems": [
          "V-36"
        ],
        "answer": "D"
      },
      {
        "n": 33,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Quel(s) est (sont) le(s) médicament(s) qui présente(nt) des propriétés anticholinergiques ?",
        "options": [
          {
            "l": "A",
            "t": "Clomipramine"
          },
          {
            "l": "B",
            "t": "Halopéridol"
          },
          {
            "l": "C",
            "t": "Chlorpromazine"
          },
          {
            "l": "D",
            "t": "Lorazépam"
          },
          {
            "l": "E",
            "t": "Trinexyphénidyle"
          }
        ],
        "chapterSlugs": [
          "v-11-antidepresseurs-normothymiques"
        ],
        "programItems": [
          "V-11"
        ],
        "answer": "ABCE"
      },
      {
        "n": 34,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la grande douve du foie, Fasciola hepatica, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "C'est un cestode"
          },
          {
            "l": "B",
            "t": "Elle est sensible au flubendazole"
          },
          {
            "l": "C",
            "t": "Sa forme infestante est la métacercaire"
          },
          {
            "l": "D",
            "t": "Elle a pour hôte intermédiaire un planorbe"
          },
          {
            "l": "E",
            "t": "Elle est responsable d'une zoonose"
          }
        ],
        "chapterSlugs": [
          "iv-17-helminthoses"
        ],
        "programItems": [
          "IV-17"
        ],
        "answer": "CE"
      },
      {
        "n": 35,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les méthodes suivantes, quelle(s) est (sont) celle(s) qui est (sont) basée(s) sur une émission de lumière par les atomes ou les molécules ?",
        "options": [
          {
            "l": "A",
            "t": "Colorimétrie"
          },
          {
            "l": "B",
            "t": "Fluorimétrie"
          },
          {
            "l": "C",
            "t": "Spectrophotométrie UV/visible"
          },
          {
            "l": "D",
            "t": "Photométrie de flamme"
          },
          {
            "l": "E",
            "t": "Spectrométrie de masse"
          }
        ],
        "chapterSlugs": [
          "i-2-spectrophotometrie-atomique"
        ],
        "programItems": [
          "I-2"
        ],
        "answer": "BD"
      },
      {
        "n": 36,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, quelles sont les affections pouvant être dues à Streptococcus pyogenes ?",
        "options": [
          {
            "l": "A",
            "t": "Angine érythémato-pultacée"
          },
          {
            "l": "B",
            "t": "Diarrhée infectieuse"
          },
          {
            "l": "C",
            "t": "Rhumatisme articulaire aigu"
          },
          {
            "l": "D",
            "t": "Scarlatine"
          },
          {
            "l": "E",
            "t": "Erysipèle"
          }
        ],
        "chapterSlugs": [
          "iv-5-infections-orl-respiratoires"
        ],
        "programItems": [
          "IV-5"
        ],
        "answer": "ACDE"
      },
      {
        "n": 37,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes se rapportant aux inhibiteurs de l'enzyme de conversion (IEC), laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Ils inhibent la conversion de l'angiotensinogène en angiotensine |"
          },
          {
            "l": "B",
            "t": "Ils sont contre-indiqués en cas d'hypokaliémie"
          },
          {
            "l": "C",
            "t": "Ce sont des antagonistes compétitifs de l'angiotensine Il"
          },
          {
            "l": "D",
            "t": "Ils inhibent la dégradation de la bradykinine ; ;"
          },
          {
            "l": "E",
            "t": "Ils sont contre-indiqués chez la femme enceinte aux 2ème et 3ÈM° trimestres de grossesse"
          }
        ],
        "chapterSlugs": [
          "v-14-antihypertenseurs"
        ],
        "programItems": [
          "V-14"
        ],
        "answer": "DE"
      },
      {
        "n": 38,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la carbamazépine, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle est dépourvue de toxicité hématologique"
          },
          {
            "l": "B",
            "t": "Elle est indiquée dans la prévention des rechutes de troubles bipolaires"
          },
          {
            "l": "C",
            "t": "C'est un dérivé benzodiazépinique"
          },
          {
            "l": "D",
            "t": "C'est un inducteur du CYP 3A4"
          },
          {
            "l": "E",
            "t": "Elle bloque les canaux sodiques voltage dépendants"
          }
        ],
        "chapterSlugs": [
          "v-7-neurologie"
        ],
        "programItems": [
          "V-7"
        ],
        "answer": "BDE"
      },
      {
        "n": 39,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la simvastatine, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle augmente le nombre de récepteurs des LDL sur la membrane des hépatocytes"
          },
          {
            "l": "B",
            "t": "Elle diminue la morbi-mortalité cardiovasculaire en prévention secondaire"
          },
          {
            "l": "C",
            "t": "Elle peut entraîner une augmentation significative de la créatine kinase plasmatique"
          },
          {
            "l": "D",
            "t": "Elle est contre-indiquée en association avec les inhibiteurs de la protéase du VIH"
          },
          {
            "l": "E",
            "t": "Elle est indiquée dans le traitement des hypercholestérolémies familiales homozygotes"
          }
        ],
        "chapterSlugs": [
          "v-41-normolipemiants"
        ],
        "programItems": [
          "V-41"
        ],
        "answer": "ABCDE"
      },
      {
        "n": 40,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les affirmations suivantes concernant les salicylés, laquelle (lesquelles) est (sont) exacte(s) ? 2Q 9",
        "options": [
          {
            "l": "A",
            "t": "Ils ont un cycle entéro-hépatique"
          },
          {
            "l": "B",
            "t": "À forte dose, ils entraînent un ralentissement de la vidange gastrique"
          },
          {
            "l": "C",
            "t": "L'acide acétylsalicylique est en partie hydrolysé au niveau gastrique"
          },
          {
            "l": "D",
            "t": "Ils franchissent la barrière placentaire"
          },
          {
            "l": "E",
            "t": "Ils sont fortement conjugués avec le glutathion au niveau hépatique"
          }
        ],
        "chapterSlugs": [
          "v-47-toxicologie-antalgiques"
        ],
        "programItems": [
          "V-47"
        ],
        "answer": "BCD"
      },
      {
        "n": 41,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les méthodes électrochimiques, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "La méthode de Karl Fischer permet le dosage de traces d'eau dans une poudre"
          },
          {
            "l": "B",
            "t": "En polarographie, l'identification des espèces chimiques est faite au palier de diffusion"
          },
          {
            "l": "C",
            "t": "La polarographie peut être utilisée pour la mesure du pouvoir rotatoire"
          },
          {
            "l": "D",
            "t": "L'ampérométrie permet de suivre la variation du potentiel d'une solution, à intensité constante"
          },
          {
            "l": "E",
            "t": "La mesure du pH d'une solution se fait à l'aide d'une électrode de verre et d'une électrode de référence"
          }
        ],
        "chapterSlugs": [
          "i-7-methodes-redox-electrochimiques"
        ],
        "programItems": [
          "I-7"
        ],
        "answer": "AE"
      },
      {
        "n": 42,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Quel(s) est (sont) le(s) principal (principaux) signe(s) d'une intoxication aiguë par les benzodiazépines ?",
        "options": [
          {
            "l": "A",
            "t": "Dépression respiratoire"
          },
          {
            "l": "B",
            "t": "Convulsions"
          },
          {
            "l": "C",
            "t": "Troubles de la conscience"
          },
          {
            "l": "D",
            "t": "Hypertension artérielle"
          },
          {
            "l": "E",
            "t": "Troubles digestifs"
          }
        ],
        "chapterSlugs": [
          "v-46-toxicologie-psychotropes"
        ],
        "programItems": [
          "V-46"
        ],
        "answer": "AC"
      },
      {
        "n": 43,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Quelle(s) est (sont) la (les) proposition(s) exacte(s) concernant le muscle cardiaque ?",
        "options": [
          {
            "l": "A",
            "t": "Le potentiel d'action se propage d'une cellule musculaire à l'autre"
          },
          {
            "l": "B",
            "t": "La durée du potentiel d'action est voisine de celle de la contraction musculaire"
          },
          {
            "l": "C",
            "t": "La contraction spontanée du coeur est due au tissu nodal"
          },
          {
            "l": "D",
            "t": "Le battement cardiaque est d'origine nerveuse"
          },
          {
            "l": "E",
            "t": "C'est un muscle tétanisable"
          }
        ],
        "chapterSlugs": [
          "ii-15-physiologie-cardiovasculaire"
        ],
        "programItems": [
          "II-15"
        ],
        "answer": "ABC"
      },
      {
        "n": 44,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Concernant l'hémoglobine, quelle(s) est (sont) la (les) proposition(s) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "La concentration de carboxyhémoglobine est supérieure à 10 % chez un sujet adulte"
          },
          {
            "l": "B",
            "t": "Une hémoglobine présentant du fer sous forme Fe3*+ est capable de lier O»"
          },
          {
            "l": "C",
            "t": "L'hémoglobine peut fixer des ions H+ sur des résidus histidine de la globine"
          },
          {
            "l": "D",
            "t": "Physiologiquement CO» peut se fixer sur les fonctions amines N-terminales des chaînes de globine"
          },
          {
            "l": "E",
            "t": "L'hémoglobine F a la même affinité pour l'oxygène que l'hémoglobine A1"
          }
        ],
        "chapterSlugs": [
          "ii-9-biochimie-hemoglobines"
        ],
        "programItems": [
          "II-9"
        ],
        "answer": "CD"
      },
      {
        "n": 45,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le calendrier vaccinal, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Il est mis à jour annuellement"
          },
          {
            "l": "B",
            "t": "Il est établi par la Commission Technique des Vaccinations"
          },
          {
            "l": "C",
            "t": "|| précise les obligations vaccinales des professionnels de santé"
          },
          {
            "l": "D",
            "t": "'Il est élaboré en tenant compte des données épidémiologiques des maladies infectieuses"
          },
          {
            "l": "E",
            "t": "Il est élaboré en tenant compte uniquement des nouvelles formes vaccinales disponibles"
          }
        ],
        "chapterSlugs": [
          "iii-3-politique-vaccinale"
        ],
        "programItems": [
          "III-3"
        ],
        "answer": "ABCD"
      },
      {
        "n": 46,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": ": annulée Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ? Tout médicament sous Autorisation Temporaire d'Utilisation (ATU)",
        "options": [
          {
            "l": "A",
            "t": "Doit faire l'objet d'une demande d'AMM ou d'un engagement à la déposer"
          },
          {
            "l": "B",
            "t": "Fait l'objet d'une évaluation par la Commission de la Transparence en vue de son inscription sur la liste des médicaments agréés à l'usage des collectivités"
          },
          {
            "l": "C",
            "t": "Est inscrit sur la liste des médicaments remboursés en sus des GHS"
          },
          {
            "l": "D",
            "t": "Est destiné à une maladie grave ou rare"
          },
          {
            "l": "E",
            "t": "Relève de la compétence du Centre Régional de Pharmacovigilance pour l'étude d'imputabilité d'effets indésirables"
          }
        ],
        "chapterSlugs": [
          "iii-6-medicaments-dispositifs-medicaux"
        ],
        "programItems": [
          "III-6"
        ]
      },
      {
        "n": 47,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les examens biologiques suivants, quels sont ceux qui sont recommandés pour le diagnostic du lupus systémique ?",
        "options": [
          {
            "l": "A",
            "t": "Le dosage du CH50"
          },
          {
            "l": "B",
            "t": "La recherche de cryoglobulines"
          },
          {
            "l": "C",
            "t": "La recherche des anticorps anti-GAD (décarboxylase de l'acide glutamique)"
          },
          {
            "l": "D",
            "t": "La recherche d'anticorps anti-ADN natif"
          },
          {
            "l": "E",
            "t": "La recherche du virus EBV"
          }
        ],
        "chapterSlugs": [
          "iv-33-maladies-auto-immunes"
        ],
        "programItems": [
          "IV-33"
        ],
        "answer": "ABD"
      },
      {
        "n": 48,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Quelle(s) est (sont) la (les) modification(s) hormonale(s) observée(s) au cours de l'insuffisance rénale chronique sévère non traitée ?",
        "options": [
          {
            "l": "A",
            "t": "Augmentation de l'hormone thyréotrope (TSH)"
          },
          {
            "l": "B",
            "t": "Diminution du 1,25-dihydroxycholécalciférol"
          },
          {
            "l": "C",
            "t": "Augmentation de la parathormone (PTH)"
          },
          {
            "l": "D",
            "t": "Diminution de l'érythropoïétine"
          },
          {
            "l": "E",
            "t": "Augmentation du cortisol"
          }
        ],
        "chapterSlugs": [
          "iv-46-insuffisance-renale"
        ],
        "programItems": [
          "IV-46"
        ],
        "answer": "BCD"
      },
      {
        "n": 49,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la leishmaniose à Leishmania infantum, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle sévit autour du bassin méditerranéen"
          },
          {
            "l": "B",
            "t": "En France, les antimoniés pentavalents constituent le traitement de première intention"
          },
          {
            "l": "C",
            "t": "C'est une zoonose"
          },
          {
            "l": "D",
            "t": "Elle s'accompagne d'une splénomégalie"
          },
          {
            "l": "E",
            "t": "Elle s'accompagne d'une hyperéosinophilie"
          }
        ],
        "chapterSlugs": [
          "iv-16-leishmaniose"
        ],
        "programItems": [
          "IV-16"
        ],
        "answer": "ACD"
      },
      {
        "n": 50,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'hémophilie B, quelle(s) est (sont) celle(s) qui est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Sa transmission est liée au sexe"
          },
          {
            "l": "B",
            "t": "Elle est associée à une thrombopénie"
          },
          {
            "l": "C",
            "t": "Elle est moins fréquente que l'hémophilie À"
          },
          {
            "l": "D",
            "t": "Elle est due à un déficit en facteur XI de la coagulation plasmatique"
          },
          {
            "l": "E",
            "t": "Elle conduit à des hémorragies traitées par l'érythropoïétine recombinante"
          }
        ],
        "chapterSlugs": [
          "iv-25-hemophilies-willebrand"
        ],
        "programItems": [
          "IV-25"
        ],
        "answer": "AC"
      },
      {
        "n": 51,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'isoniazide, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Pour être actif, il doit former un adduit avec le NAD+"
          },
          {
            "l": "B",
            "t": "Il inhibe l'enzyme arabinosyltransférase"
          },
          {
            "l": "C",
            "t": "C'est l'hydrazide de l'acide isonicotinique"
          },
          {
            "l": "D",
            "t": "Il a besoin d'être activé par une catalase-peroxydase humaine"
          },
          {
            "l": "E",
            "t": "Il peut provoquer une cytolyse hépatique"
          }
        ],
        "chapterSlugs": [
          "v-30-antituberculeux"
        ],
        "programItems": [
          "V-30"
        ],
        "answer": "ACE"
      },
      {
        "n": 52,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les substances suivantes, laquelle(s) est (sont) utilisée(s) dans le traitement de l'intoxication aiguë par la chloroquine ?",
        "options": [
          {
            "l": "A",
            "t": "Naloxone"
          },
          {
            "l": "B",
            "t": "Solutés de sodium molaires"
          },
          {
            "l": "C",
            "t": "Diazépam"
          },
          {
            "l": "D",
            "t": "Adrénaline"
          },
          {
            "l": "E",
            "t": "Flumazénil"
          }
        ],
        "chapterSlugs": [
          "v-48-cardiotoxiques"
        ],
        "programItems": [
          "V-48"
        ],
        "answer": "BCD"
      },
      {
        "n": 53,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la production de vaccins, lesquelles sont exactes ?",
        "options": [
          {
            "l": "A",
            "t": "Le virus de la grippe peut être produit à partir d'œufs embryonnés de poule"
          },
          {
            "l": "B",
            "t": "Le vaccin de l'hépatite B est actuellement produit par génie génétique"
          },
          {
            "l": "C",
            "t": "Le vaccin antitétanique est produit à partir d'une toxine issue de la paroi cellulaire du bacille tétanique"
          },
          {
            "l": "D",
            "t": "Le vaccin anti-ourlien est un vaccin à agent vivant atténué"
          },
          {
            "l": "E",
            "t": "Le vaccin antirougeoleux est un vaccin à agent inactivé"
          }
        ],
        "chapterSlugs": [
          "v-57-vaccins"
        ],
        "programItems": [
          "V-57"
        ],
        "answer": "ABD"
      },
      {
        "n": 54,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les médicaments suivants, lequel (lesquels) est (sont) susceptible(s) d'entraîner une cardiotoxi- cité par effet stabilisant de membrane ?",
        "options": [
          {
            "l": "A",
            "t": "Antidépresseurs tricycliques"
          },
          {
            "l": "B",
            "t": "Bêta-bloquants"
          },
          {
            "l": "C",
            "t": "Anti-paludéens"
          },
          {
            "l": "D",
            "t": "Lithium"
          },
          {
            "l": "E",
            "t": "Carbamazépine"
          }
        ],
        "chapterSlugs": [
          "v-48-cardiotoxiques"
        ],
        "programItems": [
          "V-48"
        ],
        "answer": "ABCE"
      },
      {
        "n": 55,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les effets indésirables des anti-émétiques, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "La dompéridone n'est pas contre-indiquée chez le sujet parkinsonien"
          },
          {
            "l": "B",
            "t": "Le métoclopramide n'est pas contre-indiqué chez le sujet parkinsonien"
          },
          {
            "l": "C",
            "t": "L'aprépitant peut induire des épisodes de hoquet chez les patients"
          },
          {
            "l": "D",
            "t": "La dompéridone est susceptible de provoquer des troubles du rythme cardiaque"
          },
          {
            "l": "E",
            "t": "La scopolamine peut agraver des troubles urétro-prostatiques"
          }
        ],
        "chapterSlugs": [
          "v-37-antiemetiques"
        ],
        "programItems": [
          "V-37"
        ],
        "answer": "ACDE"
      },
      {
        "n": 56,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "' [M] Parmi les propositions suivantes, indiquer celles qui sont exactes. L'affinité de l'hémoglobine pour l'oxygène peut être modifiée par",
        "options": [
          {
            "l": "A",
            "t": "La température corporelle"
          },
          {
            "l": "B",
            "t": "La pCO» sanguine"
          },
          {
            "l": "C",
            "t": "Le pH sanguin"
          },
          {
            "l": "D",
            "t": "La glycémie"
          },
          {
            "l": "E",
            "t": "L'hypo-albuminémie"
          }
        ],
        "chapterSlugs": [
          "ii-9-biochimie-hemoglobines"
        ],
        "programItems": [
          "II-9"
        ],
        "answer": "ABC"
      },
      {
        "n": 57,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les préparations de nutrition parentérale, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Une osmolarité > 1000 mmol/L implique une administration par voie vasculaire centrale"
          },
          {
            "l": "B",
            "t": "Les spécialités industrielles contiennent généralement des vitamines"
          },
          {
            "l": "C",
            "t": "Les lipides se présentent sous forme de solutions micellaires"
          },
          {
            "l": "D",
            "t": "Les glucides sont essentiellement présents sous forme de glucose"
          },
          {
            "l": "E",
            "t": "Les oligoéléments sont systématiquement ajoutés aux préparations destinées aux patients sous nutrition parentérale exclusive"
          }
        ],
        "chapterSlugs": [
          "v-53-nutrition-parenterale"
        ],
        "programItems": [
          "V-53"
        ],
        "answer": "ADE"
      },
      {
        "n": 58,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propostions suivantes, laquelle (lesquelles) est (sont) exacte(s) ? La pharmacocinétique d'un médicament est linéaire si",
        "options": [
          {
            "l": "A",
            "t": "L'aire sous la courbe des concentrations plasmatiques est proportionnelle à la dose administrée"
          },
          {
            "l": "B",
            "t": "L'aire sous la courbe des concentrations plasmatiques est proportionnelle à la vitesse de perfusion"
          },
          {
            "l": "C",
            "t": "L'aire sous la courbe des concentrations plasmatiques est inversement proportionnelle à la clairance plasmatique totale"
          },
          {
            "l": "D",
            "t": "L'aire sous la courbe des concentrations plasmatiques est inversement proportionnelle au volume de distribution"
          },
          {
            "l": "E",
            "t": "Le métabolisme du médicament est saturable"
          }
        ],
        "chapterSlugs": [
          "pharmaco-pk-base"
        ],
        "programItems": [
          "V-4"
        ],
        "answer": "ABC"
      },
      {
        "n": 59,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les peptides natriurétiques cardiaques, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "On peut doser le BNP (Brain Natriuretic Peptide) pour le diagnostic biologique de l'insuffisance cardiaque"
          },
          {
            "l": "B",
            "t": "Le BNP est éliminé exclusivement par voie rénale"
          },
          {
            "l": "C",
            "t": "On peut doser le NT-proBNP (fragment N-terminal du proBNP) pour le diagnostic biologique de l'insuffisance cardiaque"
          },
          {
            "l": "D",
            "t": "Le BNP inhibe le système rénine angiotensine aldostérone (SRAA)"
          },
          {
            "l": "E",
            "t": "Le NT-proBNP présente la même activité biologique que le BNP"
          }
        ],
        "chapterSlugs": [
          "iv-47-sca-insuffisance-cardiaque"
        ],
        "programItems": [
          "IV-47"
        ],
        "answer": "ACD"
      },
      {
        "n": 60,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les complexes en solution aqueuse, lesquelles sont exactes ? La stabilité du complexe",
        "options": [
          {
            "l": "A",
            "t": "Est proportionnelle à la constante de dissociation"
          },
          {
            "l": "B",
            "t": "Augmente avec la valence de l'ion complexé"
          },
          {
            "l": "C",
            "t": "Est toujours indépendante du pH"
          },
          {
            "l": "D",
            "t": "Augmente avec le nombre de ligands"
          },
          {
            "l": "E",
            "t": "Esi plus importante avec les ligands linéaires qu'avec les ligands cycliques"
          }
        ],
        "chapterSlugs": [
          "i-12-acide-base-ph-tampons"
        ],
        "programItems": [
          "I-12"
        ],
        "answer": "BD"
      }
    ]
  },
  {
    "key": "2020",
    "label": "Décembre 2020",
    "source": "Concours national d'internat en pharmacie — session de décembre 2020 (CNG). Réponses : grille officielle du Conseil Scientifique (incluse dans le sujet).",
    "items": [
      {
        "n": 1,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Quelle est la thérapeutique indiquée chez un sujet intoxiqué par l'aspirine ?",
        "options": [
          {
            "l": "A",
            "t": "Chlorhydrate d'arginine"
          },
          {
            "l": "B",
            "t": "Acétazolamide (DIAMOX®)"
          },
          {
            "l": "C",
            "t": "N-acétylcystéine"
          },
          {
            "l": "D",
            "t": "Exsanguino-transfusion"
          },
          {
            "l": "E",
            "t": "Sérum bicarbonaté isotonique (diurèse alcaline)"
          }
        ],
        "chapterSlugs": [
          "v-47-toxicologie-antalgiques"
        ],
        "programItems": [
          "V-47"
        ],
        "answer": "E"
      },
      {
        "n": 2,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les propositions suivantes concernant la lévodopa, laquelle est fausse ?",
        "options": [
          {
            "l": "A",
            "t": "C'est un alpha amino-acide"
          },
          {
            "l": "B",
            "t": "Elle est toujours associée à un inhibiteur de la dopa-décarboxylase"
          },
          {
            "l": "C",
            "t": "Elle doit être administrée au milieu du repas"
          },
          {
            "l": "D",
            "t": "Elle inhibe la catéchol O-méthy! transférase"
          },
          {
            "l": "E",
            "t": "Elle est potentialisée par les agonistes dopaminergiques"
          }
        ],
        "chapterSlugs": [
          "v-7-neurologie"
        ],
        "programItems": [
          "V-7"
        ],
        "answer": "D"
      },
      {
        "n": 3,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les propositions suivantes concernant la minocycline, laquelle est fausse ?",
        "options": [
          {
            "l": "A",
            "t": "Elle est lipophile"
          },
          {
            "l": "B",
            "t": "Elle a un temps de demi-vie d'élimination de l'ordre de 20 h"
          },
          {
            "l": "C",
            "t": "Elle est active sur les germes intracellulaires"
          },
          {
            "l": "D",
            "t": "Elle inhibe la synthèse protéique des bactéries sensibles"
          },
          {
            "l": "E",
            "t": "Elle n'est pas administrable par voie orale"
          }
        ],
        "chapterSlugs": [
          "v-26-cyclines"
        ],
        "programItems": [
          "V-26"
        ],
        "answer": "E"
      },
      {
        "n": 4,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "On titre une solution molaire d'ammoniaque (pKa NH4* / NHa = 9,25) par une solution de HCI molaire. | Parmi les propositions suivantes concernant le point d'équivalence. laquelle est exacte ?",
        "options": [
          {
            "l": "A",
            "t": "Il se situe en milieu alcalin"
          },
          {
            "l": "B",
            "t": "Il peut être mis en évidence avec une électrode de platine"
          },
          {
            "l": "C",
            "t": "Il est mis en évidence par la phénolphtaléine (pKa phénolphtaléine = 9,00)"
          },
          {
            "l": "D",
            "t": "Il est mis en évidence par l'hélianthine (pKa hélianthine = 3,60)"
          },
          {
            "l": "E",
            "t": "Il est mis en évidence par l'apparition d'un précipité"
          }
        ],
        "chapterSlugs": [
          "i-12-acide-base-ph-tampons"
        ],
        "programItems": [
          "I-12"
        ],
        "answer": "D"
      },
      {
        "n": 5,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les lipoprotéines suivantes, quelle est celle qui possède la densité la plus basse ?",
        "options": [
          {
            "l": "A",
            "t": "LDL"
          },
          {
            "l": "B",
            "t": "VLDL"
          },
          {
            "l": "C",
            "t": "Chylomicrons"
          },
          {
            "l": "D",
            "t": "HDL"
          },
          {
            "l": "E",
            "t": "Lp(a)"
          }
        ],
        "chapterSlugs": [
          "ii-10-biochimie-acides-nucleiques-lipoproteines"
        ],
        "programItems": [
          "II-10"
        ],
        "answer": "C"
      },
      {
        "n": 6,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Quel est l'antibiotique qui n'agit pas par perturbation de la synthèse des protéines bactériennes après fixation au niveau ribosomal ?",
        "options": [
          {
            "l": "A",
            "t": "La tobramycine"
          },
          {
            "l": "B",
            "t": "L'érythromycine"
          },
          {
            "l": "C",
            "t": "La doxycycline"
          },
          {
            "l": "D",
            "t": "La rifampicine"
          },
          {
            "l": "E",
            "t": "La minocycline"
          }
        ],
        "chapterSlugs": [
          "v-30-antituberculeux"
        ],
        "programItems": [
          "V-30"
        ],
        "answer": "D"
      },
      {
        "n": 7,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les propositions suivantes concernant les propriétés pharmacocinétiques du propranolol, quelle est celle qui est fausse ?",
        "options": [
          {
            "l": "A",
            "t": "Il est résorbé au niveau du tube digestif"
          },
          {
            "l": "B",
            "t": "Il subit un fort effet de premier passage hépatique"
          },
          {
            "l": "C",
            "t": "Il passe la barrière hémato-encéphalique (BHE)"
          },
          {
            "l": "D",
            "t": "|! peut être retrouvé dans le lait maternel"
          },
          {
            "l": "E",
            "t": "Il est principalement éliminé sous forme inchangée dans les urines"
          }
        ],
        "chapterSlugs": [
          "v-14-antihypertenseurs"
        ],
        "programItems": [
          "V-14"
        ],
        "answer": "E"
      },
      {
        "n": 8,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "| Quelle est la proposition exacte ? Dans l'espèce humaine, le nombre de chromosomes des cellules somatiques est",
        "options": [
          {
            "l": "A",
            "t": "36"
          },
          {
            "l": "B",
            "t": "72"
          },
          {
            "l": "C",
            "t": "46"
          },
          {
            "l": "D",
            "t": "23"
          },
          {
            "l": "E",
            "t": "100"
          }
        ],
        "chapterSlugs": [
          "ii-1-genetique-genome-humain"
        ],
        "programItems": [
          "II-1"
        ],
        "answer": "C"
      },
      {
        "n": 9,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "À quel stade de la mitose est réalisé le caryotype standard ?",
        "options": [
          {
            "l": "A",
            "t": "Prophase"
          },
          {
            "l": "B",
            "t": "Métaphase"
          },
          {
            "l": "C",
            "t": "Anaphase"
          },
          {
            "l": "D",
            "t": "Télophase"
          },
          {
            "l": "E",
            "t": "Interphase"
          }
        ],
        "chapterSlugs": [
          "ii-6-genetique-caryotype-anomalies-chromosomiques"
        ],
        "programItems": [
          "II-6"
        ],
        "answer": "B"
      },
      {
        "n": 10,
        "type": "qcm",
        "qcmType": "simple",
        "prompt": "Parmi les propositions suivantes relatives aux immunoglobulines E, laquelle est exacte ?",
        "options": [
          {
            "l": "A",
            "t": "Elles possèdent quatre domaines constants sur leur chaîne lourde"
          },
          {
            "l": "B",
            "t": "Elles franchissent la barrière placentaire"
          },
          {
            "l": "C",
            "t": "Elles sont synthétisées au cours de la réponse primaire"
          },
          {
            "l": "D",
            "t": "Elles activent la voie classique du complément"
          },
          {
            "l": "E",
            "t": "Elles présentent deux sous-classes"
          }
        ],
        "chapterSlugs": [
          "ii-27-immunologie-immunoglobulines"
        ],
        "programItems": [
          "II-27"
        ],
        "answer": "A"
      },
      {
        "n": 11,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les parasites suivants, quel(s) est (sont) celui (ceux) qui peut (peuvent) se localiser à un de leurs stades dans le foie humain ?",
        "options": [
          {
            "l": "A",
            "t": "Enterobius vermicularis"
          },
          {
            "l": "B",
            "t": "7Tænia saginata"
          },
          {
            "l": "C",
            "t": "Plasmodium falciparum"
          },
          {
            "l": "D",
            "t": "Entamæba histolytica"
          },
          {
            "l": "E",
            "t": "Schistosoma mansoni"
          }
        ],
        "chapterSlugs": [
          "parasito-paludisme"
        ],
        "programItems": [
          "IV-14"
        ],
        "answer": "CDE"
      },
      {
        "n": 12,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant un haptène, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "C'est une molécule immunogène"
          },
          {
            "l": "B",
            "t": "Il est capable de se combiner in vitro avec l'anticorps correspondant"
          },
          {
            "l": "C",
            "t": "C'est un phospholipide"
          },
          {
            "l": "D",
            "t": "C'est un adjuvant des vaccins"
          },
          {
            "l": "E",
            "t": "C'est une molécule de masse moléculaire en général inférieure à 1000 Da"
          }
        ],
        "chapterSlugs": [
          "ii-31-immunologie-reponses-humorale-cellulaire"
        ],
        "programItems": [
          "II-31"
        ],
        "answer": "BE"
      },
      {
        "n": 13,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, quelle(s) est (sont) celle(s) qui est (sont) exacte(s) ? Les agents de levuroses appartiennent au genre",
        "options": [
          {
            "l": "A",
            "t": "Aspergillus"
          },
          {
            "l": "B",
            "t": "Candida"
          },
          {
            "l": "C",
            "t": "Trichophyton"
          },
          {
            "l": "D",
            "t": "Cryptococcus"
          },
          {
            "l": "E",
            "t": "Microsporum"
          }
        ],
        "chapterSlugs": [
          "iv-18-levures"
        ],
        "programItems": [
          "IV-18"
        ],
        "answer": "BD"
      },
      {
        "n": 14,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Quel(s) est (sont) le(s) paramètre(s) biologique(s) susceptible(s) d'être augmenté(s) sous l'effet d'un traitement prolongé par les sulfamides diurétiques ?",
        "options": [
          {
            "l": "A",
            "t": "Urémie"
          },
          {
            "l": "B",
            "t": "Glycémie"
          },
          {
            "l": "C",
            "t": "Kaliémie"
          },
          {
            "l": "D",
            "t": "Natrémie"
          },
          {
            "l": "E",
            "t": "Uricémie"
          }
        ],
        "chapterSlugs": [
          "v-15-diuretiques"
        ],
        "programItems": [
          "V-15"
        ],
        "answer": "BE"
      },
      {
        "n": 15,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Quelles sont les propositions qui sont exactes ? Lors de l'extraction d'un acide organique (AH) en solution dans l'eau par l'heptane",
        "options": [
          {
            "l": "A",
            "t": "|| faut que la solution aqueuse soit à un pH supérieur au pKa AH/A7"
          },
          {
            "l": "B",
            "t": "Il peut y avoir des phénomènes d'association en phase organique modifiant le taux de distribution"
          },
          {
            "l": "C",
            "t": "Le taux de distribution dépend du pH de la phase aqueuse"
          },
          {
            "l": "D",
            "t": "Le coefficient de partage dépend du pH de la phase aqueuse"
          },
          {
            "l": "E",
            "t": "Le rendement de l'extraction ne dépend pas du pH de la phase aqueuse"
          }
        ],
        "chapterSlugs": [
          "i-1-extraction-separation"
        ],
        "programItems": [
          "I-1"
        ],
        "answer": "BC"
      },
      {
        "n": 16,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Quelles sont les substances méthémoglobinisantes ?",
        "options": [
          {
            "l": "A",
            "t": "Benzocaïne"
          },
          {
            "l": "B",
            "t": "Amoxicilline"
          },
          {
            "l": "C",
            "t": "Hypochlorite de sodium"
          },
          {
            "l": "D",
            "t": "Nitrobenzène"
          },
          {
            "l": "E",
            "t": "Aniline"
          }
        ],
        "chapterSlugs": [
          "iii-14-poisons-hemoglobine"
        ],
        "programItems": [
          "III-14"
        ],
        "answer": "ADE"
      },
      {
        "n": 17,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les antidotes suivants, quel(s) est (sont) celui (ceux) que l'on peut utiliser lors d'une intoxication aiguë par l'éthylène glycol ?",
        "options": [
          {
            "l": "A",
            "t": "EDTA"
          },
          {
            "l": "B",
            "t": "Glutathion"
          },
          {
            "l": "C",
            "t": "Ethanol"
          },
          {
            "l": "D",
            "t": "Pénicillamine"
          },
          {
            "l": "E",
            "t": "4-méthylpyrazole (fomépizole)"
          }
        ],
        "chapterSlugs": [
          "iii-11-toxicologie-alcools"
        ],
        "programItems": [
          "III-11"
        ],
        "answer": "CE"
      },
      {
        "n": 18,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Quelle(s) est (sont) la (les) proposition(s) exacte(s) concernant l'intoxication par l'héroïne ?",
        "options": [
          {
            "l": "A",
            "t": "Elle entraîne des troubles de conscience"
          },
          {
            "l": "B",
            "t": "Elle entraîne une mydriase"
          },
          {
            "l": "C",
            "t": "Elle entraîne un état de tolérance"
          },
          {
            "l": "D",
            "t": "Elle entraîne une dépression respiratoire"
          },
          {
            "l": "E",
            "t": "Elle n'entraîne pas de dépendance physique"
          }
        ],
        "chapterSlugs": [
          "iii-16-toxicomanies"
        ],
        "programItems": [
          "III-16"
        ],
        "answer": "ACD"
      },
      {
        "n": 19,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le paracétamol, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Il est antalgique '"
          },
          {
            "l": "B",
            "t": "Il est antipyrétique"
          },
          {
            "l": "C",
            "t": "Il est anti-inflammatoire"
          },
          {
            "l": "D",
            "t": "Il donne naissance à un métabolite hépatotoxique : la N-acétylparabenzoquinone"
          },
          {
            "l": "E",
            "t": "Il est métabolisé en para-aminophénol"
          }
        ],
        "chapterSlugs": [
          "v-8-antalgiques"
        ],
        "programItems": [
          "V-8"
        ],
        "answer": "ABE"
      },
      {
        "n": 20,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'hémagglutinine du virus de la grippe A, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle induit la production d'anticorps neutralisants"
          },
          {
            "l": "B",
            "t": "Elle induit la production d'anticorps inhibant l'hémagglutination"
          },
          {
            "l": "C",
            "t": "Elle est antigéniquement stable"
          },
          {
            "l": "D",
            "t": "Elle est portée par la nucléocapside"
          },
          {
            "l": "E",
            "t": "Elle est présente dans le vaccin antigrippal"
          }
        ],
        "chapterSlugs": [
          "v-57-vaccins"
        ],
        "programItems": [
          "V-57"
        ],
        "answer": "ABE"
      },
      {
        "n": 21,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, laquelle (lesquelles) s'applique(nt) à Streptococcus agalactiae ?",
        "options": [
          {
            "l": "A",
            "t": "C'est un streptocoque du groupe A"
          },
          {
            "l": "B",
            "t": "Il est responsable d'angines"
          },
          {
            "l": "C",
            "t": "Il est responsable d'infections néonatales"
          },
          {
            "l": "D",
            "t": "|| est résistant aux pénicillines du groupe A"
          },
          {
            "l": "E",
            "t": "Il forme des colonies hémolytiques sur gélose au sang"
          }
        ],
        "chapterSlugs": [
          "iv-7-infections-grossesse"
        ],
        "programItems": [
          "IV-7"
        ],
        "answer": "CE"
      },
      {
        "n": 22,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "À quels antibiotiques, Escherichia coli présente-t-il une résistance naturelle ?",
        "options": [
          {
            "l": "A",
            "t": "Pénicilline G"
          },
          {
            "l": "B",
            "t": "Oxacilline"
          },
          {
            "l": "C",
            "t": "Fluoroquinolones"
          },
          {
            "l": "D",
            "t": "Aminosides"
          },
          {
            "l": "E",
            "t": "Sulfamides"
          }
        ],
        "chapterSlugs": [
          "iv-11-resistance-anti-infectieux"
        ],
        "programItems": [
          "IV-11"
        ],
        "answer": "AB"
      },
      {
        "n": 23,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les affections suivantes, laquelle (lesquelles) peut (peuvent) s'accompagner d'un ictère avec augmentation de la bilirubine conjuguée ?",
        "options": [
          {
            "l": "A",
            "t": "Une hépatite virale aiguë"
          },
          {
            "l": "B",
            "t": "Un déficit en UDP-glycuronyltransférase"
          },
          {
            "l": "C",
            "t": "Une lithiase biliaire"
          },
          {
            "l": "D",
            "t": "L'ictère physiologique néonatal"
          },
          {
            "l": "E",
            "t": "Un cancer de la tête du pancréas"
          }
        ],
        "chapterSlugs": [
          "iv-44-cholestase-cytolyse"
        ],
        "programItems": [
          "IV-44"
        ],
        "answer": "ACE"
      },
      {
        "n": 24,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les sulfamides antibactériens, laquelle (lesquelles) est (sont) exacte(s) ? .",
        "options": [
          {
            "l": "A",
            "t": "Le cotrimoxazole est une association qui contient du triméthoprime et de la sulfadiazine"
          },
          {
            "l": "B",
            "t": "Le triméthoprime est une diaminopyridine"
          },
          {
            "l": "C",
            "t": "Ils inhibent la dihydrofolate réductase bactérienne"
          },
          {
            "l": "D",
            "t": "Ils sont actifs sur les infections à Pneumocystis carinii"
          },
          {
            "l": "E",
            "t": "Ils peuvent provoquer le syndrome de Lyell"
          }
        ],
        "chapterSlugs": [
          "v-23-sulfamides-antibacteriens"
        ],
        "programItems": [
          "V-23"
        ],
        "answer": "CDE"
      },
      {
        "n": 25,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les anticancéreux, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "La doxorubicine a une toxicité cardiaque"
          },
          {
            "l": "B",
            "t": "Le cisplatine est responsable de neuropathies périphériques"
          },
          {
            "l": "C",
            "t": "La vincristine est obtenue à partir de Taxus baccata"
          },
          {
            "l": "D",
            "t": "Le trastuzumab est indiqué dans le cancer du sein HER2 positif"
          },
          {
            "l": "E",
            "t": "La bléomycine peut provoquer des fibroses pulmonaires"
          }
        ],
        "chapterSlugs": [
          "v-42-anticancereux"
        ],
        "programItems": [
          "V-42"
        ],
        "answer": "ABDE"
      },
      {
        "n": 26,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les leucémies aiguës myéloblastiques, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elles se rencontrent surtout chez l'enfant"
          },
          {
            "l": "B",
            "t": "Une coagulation intravasculaire disséminée (CIVD) est fréquente dans les leucémies aiguës promyélocytaires (LAM3)"
          },
          {
            "l": "C",
            "t": "La présence de corps d'Auer signe le caractère myéloblastique de la leucémie"
          },
          {
            "l": "D",
            "t": "Elles s'accompagnent toujours de localisations neuro-méningées nécessitant un traitement prophylactique"
          },
          {
            "l": "E",
            "t": "Le diagnostic peut être affirmé devant un pourcentage de myéloblastes supérieur ou égal à 20 % dans le sang circulant"
          }
        ],
        "chapterSlugs": [
          "iv-28-leucemies-aigues-smd"
        ],
        "programItems": [
          "IV-28"
        ],
        "answer": "BCE"
      },
      {
        "n": 27,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les agents infectieux suivants, quel(s) est (sont) celui (ceux) responsable(s) de diarrhées chez un sujet immunocompétent ?",
        "options": [
          {
            "l": "A",
            "t": "Cryptococcus neoformans"
          },
          {
            "l": "B",
            "t": "Streptococcus agalactiae"
          },
          {
            "l": "C",
            "t": "Shigella spp."
          },
          {
            "l": "D",
            "t": "Campylobacter jejuni"
          },
          {
            "l": "E",
            "t": "Salmonella spp."
          }
        ],
        "chapterSlugs": [
          "iv-4-infections-digestives"
        ],
        "programItems": [
          "IV-4"
        ],
        "answer": "CDE"
      },
      {
        "n": 28,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les anti-infectieux suivants, quel(s) est (sont) celui (ceux) dont la posologie doit être adaptée en cas d'insuffisance rénale ?",
        "options": [
          {
            "l": "A",
            "t": "Gentamicine"
          },
          {
            "l": "B",
            "t": "Doxycycline"
          },
          {
            "l": "C",
            "t": "Amphotéricine B injectable"
          },
          {
            "l": "D",
            "t": "Rifampicine"
          },
          {
            "l": "E",
            "t": "Erythromycine"
          }
        ],
        "chapterSlugs": [
          "v-27-aminosides"
        ],
        "programItems": [
          "V-27"
        ],
        "answer": "AC"
      },
      {
        "n": 29,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, quelle(s) est (sont) celle(s) caractérisant la résistance de Staphylococcus aureus à la méticilline ?",
        "options": [
          {
            "l": "A",
            "t": "Elle peut être associée à la résistance aux aminosides"
          },
          {
            "l": "B",
            "t": "Elle est chromosomique"
          },
          {
            "l": "C",
            "t": "Elle s'accompagne d'une résistance aux céphalosporines"
          },
          {
            "l": "D",
            "t": "Cette résistance s'observe chez des souches communautaires"
          },
          {
            "l": "E",
            "t": "Elle est due à l'imperméabilité de la paroi bactérienne"
          }
        ],
        "chapterSlugs": [
          "iv-11-resistance-anti-infectieux"
        ],
        "programItems": [
          "IV-11"
        ],
        "answer": "ABCD"
      },
      {
        "n": 30,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes, laquelle (lesquelles) est (sont) en faveur de la thyroïdite d'Hashimoto ?",
        "options": [
          {
            "l": "A",
            "t": "Une concentration diminuée de TSH"
          },
          {
            "l": "B",
            "t": "Une concentration augmentée de T3 libre"
          },
          {
            "l": "C",
            "t": "Une concentration diminuée de T4 totale"
          },
          {
            "l": "D",
            "t": "La présence d'anticorps anti-thyroperoxydase (anti-TPO)"
          },
          {
            "l": "E",
            "t": "La présence d'anticorps anti-récepteurs de la TSH stimulants (TRAK)"
          }
        ],
        "chapterSlugs": [
          "iv-51-dysthyroidie"
        ],
        "programItems": [
          "IV-51"
        ],
        "answer": "CD"
      },
      {
        "n": 31,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les anti-asthmatiques suivants, quel(s) est (sont) celui (ceux) qui peut (peuvent) être administré(s) par inhalation ?",
        "options": [
          {
            "l": "A",
            "t": "Bromure d'ipratropium"
          },
          {
            "l": "B",
            "t": "Théophylline"
          },
          {
            "l": "C",
            "t": "Béclométasone"
          },
          {
            "l": "D",
            "t": "Bambutérol"
          },
          {
            "l": "E",
            "t": "Salbutamol"
          }
        ],
        "chapterSlugs": [
          "v-19-antiasthmatiques-antiallergiques"
        ],
        "programItems": [
          "V-19"
        ],
        "answer": "ACE"
      },
      {
        "n": 32,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le virus de l'hépatite B, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Il est classé dans la famille des Retroviridae"
          },
          {
            "l": "B",
            "t": "C'est un virus à ARN"
          },
          {
            "l": "C",
            "t": "Il possède une ADN polymérase"
          },
          {
            "l": "D",
            "t": "C'est un virus enveloppé"
          },
          {
            "l": "E",
            "t": "Il est transmis le plus souvent par voie orale"
          }
        ],
        "chapterSlugs": [
          "iv-8-hepatites-virales"
        ],
        "programItems": [
          "IV-8"
        ],
        "answer": "CD"
      },
      {
        "n": 33,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les antifongiques suivants, lequel (lesquels) est (sont) actif(s) par voie orale dans le traitement systémique des mycoses ?",
        "options": [
          {
            "l": "A",
            "t": "Amphotéricine B"
          },
          {
            "l": "B",
            "t": "Itraconazole"
          },
          {
            "l": "C",
            "t": "Fluconazole"
          },
          {
            "l": "D",
            "t": "Métronidazole"
          },
          {
            "l": "E",
            "t": "Miconazole"
          }
        ],
        "chapterSlugs": [
          "v-33-antifongiques"
        ],
        "programItems": [
          "V-33"
        ],
        "answer": "BC"
      },
      {
        "n": 34,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la mesure de la pO» par détection ampérométrique, lesquelles sont exactes ?",
        "options": [
          {
            "l": "A",
            "t": "L'électrode utilise une membrane sélective"
          },
          {
            "l": "B",
            "t": "On détermine l'intensité du courant en réduction de l'oxygène"
          },
          {
            "l": "C",
            "t": "On utilise une électrode de platine"
          },
          {
            "l": "D",
            "t": "On utilise une électrode d'argent-chlorure d'argent"
          },
          {
            "l": "E",
            "t": "On fait varier le potentiel entre les deux électrodes platine et argent-chlorure d'argent"
          }
        ],
        "chapterSlugs": [
          "i-7-methodes-redox-electrochimiques"
        ],
        "programItems": [
          "I-7"
        ],
        "answer": "ABCD"
      },
      {
        "n": 35,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les bactéries suivantes, quelle(s) est (sont) celle(s) responsable(s) d'infections urinaires ?",
        "options": [
          {
            "l": "A",
            "t": "Escherichia coli"
          },
          {
            "l": "B",
            "t": "Pseudomonas aeruginosa"
          },
          {
            "l": "C",
            "t": "Chlamydia trachomatis"
          },
          {
            "l": "D",
            "t": "Streptococcus pyogenes"
          },
          {
            "l": "E",
            "t": "Mycobacterium tuberculosis"
          }
        ],
        "chapterSlugs": [
          "iv-3-infections-urinaires"
        ],
        "programItems": [
          "IV-3"
        ],
        "answer": "ABE"
      },
      {
        "n": 36,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les conditions de validité de la loi de Beer-Lambert en ultra- violet à 280 nm, lesquelles sont exactes ?",
        "options": [
          {
            "l": "A",
            "t": "La lumière doit être monochromatique"
          },
          {
            "l": "B",
            "t": "La solution doit être limpide"
          },
          {
            "l": "C",
            "t": "Les cuves peuvent être en verre"
          },
          {
            "l": "D",
            "t": "Les molécules en solution doivent diffuser la lumière"
          },
          {
            "l": "E",
            "t": "II ne doit pas y avoir de modifications chimiques des molécules en solution"
          }
        ],
        "chapterSlugs": [
          "i-3-spectrophotometrie-uv-visible"
        ],
        "programItems": [
          "I-3"
        ],
        "answer": "ABE"
      },
      {
        "n": 37,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Quelle(s) est (sont) la (les) proposition(s) exacte(s) ? L'œdème peut accompagner",
        "options": [
          {
            "l": "A",
            "t": "L'hypoaldostéronisme"
          },
          {
            "l": "B",
            "t": "Le syndrome néphrotique"
          },
          {
            "l": "C",
            "t": "La cirrhose hépatique décompensée"
          },
          {
            "l": "D",
            "t": "Le déficit de sécrétion en ADH"
          },
          {
            "l": "E",
            "t": "L'insuffisance cardiaque"
          }
        ],
        "chapterSlugs": [
          "iv-41-troubles-hydro-electrolytiques"
        ],
        "programItems": [
          "IV-41"
        ],
        "answer": "BCE"
      },
      {
        "n": 38,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'équilibre acido-basique, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "La compensation pulmonaire d'une alcalose métabolique se manifeste par une hypoventilation"
          },
          {
            "l": "B",
            "t": "L'activité tampon du sang est assurée principalement par le système hémoglobine-hémoglobinate"
          },
          {
            "l": "C",
            "t": "La loi de Fick régit la vitesse de diffusion du CO» à travers la membrane alvéolo-capillaire"
          },
          {
            "l": "D",
            "t": "L'affinité de l'oxygène pour l'hémoglobine est diminuée au cours d'une acidose métabolique"
          },
          {
            "l": "E",
            "t": "Les phosphates urinaires constituent la principale composante de l'acidité titrable"
          }
        ],
        "chapterSlugs": [
          "iv-42-troubles-acidobasiques"
        ],
        "programItems": [
          "IV-42"
        ],
        "answer": "ACDE"
      },
      {
        "n": 39,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Quelle(s) est (sont) la (les) proposition(s) exacte(s) ? La digoxine est contre-indiquée",
        "options": [
          {
            "l": "A",
            "t": "Avec l'administration intraveineuse de sels de calcium injectables"
          },
          {
            "l": "B",
            "t": "En cas de bloc auriculo-ventriculaire de 3°\" degré non appareillé"
          },
          {
            "l": "C",
            "t": "En cas de fibrillation auriculaire"
          },
          {
            "l": "D",
            "t": "En cas d'insuffisance cardiaque"
          },
          {
            "l": "E",
            "t": "En association avec les diurétiques |"
          }
        ],
        "chapterSlugs": [
          "v-12-insuffisance-cardiaque"
        ],
        "programItems": [
          "V-12"
        ],
        "answer": "AB"
      },
      {
        "n": 40,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "| Parmi les propositions suivantes concernant la régulation de la glycémie, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "L'absorption intestinale du glucose se fait par transport actif"
          },
          {
            "l": "B",
            "t": "Le glucagon stimule la glycogénolyse"
          },
          {
            "l": "C",
            "t": "L'insulinémie augmente en période de jeûne"
          },
          {
            "l": "D",
            "t": "Le cortisol est une hormone à action hyperglycémiante"
          },
          {
            "l": "E",
            "t": "Le transporteur insulinodépendant du glucose dans le muscle est appelé GLUT4"
          }
        ],
        "chapterSlugs": [
          "ii-11-biochimie-regulation-glycemie"
        ],
        "programItems": [
          "II-11"
        ],
        "answer": "BDE"
      },
      {
        "n": 41,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les signes biologiques suivants, lequel (lesquels) est (sont) rencontré(s) au cours de l'insuffisance surrénalienne primitive ?",
        "options": [
          {
            "l": "A",
            "t": "Hyponatrémie"
          },
          {
            "l": "B",
            "t": "Hyperglycémie"
          },
          {
            "l": "C",
            "t": "Hypercholestérolémie"
          },
          {
            "l": "D",
            "t": "Acidose métabolique"
          },
          {
            "l": "E",
            "t": "Hyperkaliémie"
          }
        ],
        "chapterSlugs": [
          "iv-50-corticosurrenale"
        ],
        "programItems": [
          "IV-50"
        ],
        "answer": "ADE"
      },
      {
        "n": 42,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le citalopram, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "C'est un inhibiteur sélectif de la recapture de la sérotonine"
          },
          {
            "l": "B",
            "t": "Il possède une activité antagoniste sur les récepteurs H2"
          },
          {
            "l": "C",
            "t": "Il est contre-indiqué en association avec les médicaments allongeant l'intervalle QT"
          },
          {
            "l": "D",
            "t": "|| peut entraîner une hyponatrémie"
          },
          {
            "l": "E",
            "t": "Il est indiqué dans les troubles obsessionnels compulsifs"
          }
        ],
        "chapterSlugs": [
          "v-11-antidepresseurs-normothymiques"
        ],
        "programItems": [
          "V-11"
        ],
        "answer": "ACDE"
      },
      {
        "n": 43,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Concernant les propriétés de l'hémoglobine, quelle(s) est (sont) la (les) proposition(s) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "L'affinité de l'hémoglobine pour l'oxygène est plus élevée à pH 7,20 qu'à pH 7,40"
          },
          {
            "l": "B",
            "t": "L'hémoglobine est capable de transporter le CO»"
          },
          {
            "l": "C",
            "t": "Le 2,3-diphosphoglycérate (2,3-DPG) modifie l'affinité de l'oxygène pour l'hémoglobine"
          },
          {
            "l": "D",
            "t": "Chaque atome de fer peut lier deux molécules d'Oy"
          },
          {
            "l": "E",
            "t": "A une pression partielle en oxygène mesurée dans le sang artériel de 20 kPa (150 mmHg), la saturation de l'hémoglobine en oxygène est supérieure à 95 %"
          }
        ],
        "chapterSlugs": [
          "ii-9-biochimie-hemoglobines"
        ],
        "programItems": [
          "II-9"
        ],
        "answer": "BCE"
      },
      {
        "n": 44,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les insulines, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Les insulines peuvent être utilisées dans le diabète de type 2"
          },
          {
            "l": "B",
            "t": "Certains analogues ont une action plus rapide que l'insuline humaine"
          },
          {
            "l": "C",
            "t": "La structure de l'insuline humaine présente 3 ponts disulfures"
          },
          {
            "l": "D",
            "t": "L'insuline glulisine est un analogue rapide"
          },
          {
            "l": "E",
            "t": "Il n'y a pas de lipodystrophie avec l'insuline humaine"
          }
        ],
        "chapterSlugs": [
          "v-22-antidiabetiques"
        ],
        "programItems": [
          "V-22"
        ],
        "answer": "ABCD"
      },
      {
        "n": 45,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les deux nucléides A7x et AZ, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "X et X' sont des isotopes si A = A' et Z = Z'"
          },
          {
            "l": "B",
            "t": "X et X' sont des isobares si Z = Z', A = A'mais A- Z = A'- Z'"
          },
          {
            "l": "C",
            "t": "X et X' sont des isotones si Z # Z' et A = A'"
          },
          {
            "l": "D",
            "t": "X et X' sont des isobares si Z # Z' et À = A'"
          },
          {
            "l": "E",
            "t": "X et X' sont des isotones si Z = Z', A= A' mais A- Z =A'- Z'"
          }
        ],
        "chapterSlugs": [
          "i-11-rayons-x-radio-isotopes"
        ],
        "programItems": [
          "I-11"
        ],
        "answer": "ADE"
      },
      {
        "n": 46,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les affirmations suivantes concernant les inhalateurs à poudre sèche, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Ils ne nécessitent pas une synchronisation entre l'inspiration et l'administration"
          },
          {
            "l": "B",
            "t": "Ils contiennent un gaz propulseur pressurisé"
          },
          {
            "l": "C",
            "t": "Les poudres de principe actif utilisées dans les inhalateurs à poudre sèche ont des diamètres aérodynamiques compris entre 1 et 5 um"
          },
          {
            "l": "D",
            "t": "Les poudres sèches doivent être stériles car elles pénètrent profondément dans les poumons"
          },
          {
            "l": "E",
            "t": "Pour certains dispositifs, la poudre sèche est contenue dans des gélules"
          }
        ],
        "chapterSlugs": [
          "v-54-formes-nasale-pulmonaire"
        ],
        "programItems": [
          "V-54"
        ],
        "answer": "ACE"
      },
      {
        "n": 47,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la notion de mosaïque, quelles sont celles qui sont exactes ?",
        "options": [
          {
            "l": "A",
            "t": "Une mosaïque correspond à la présence chez un même individu de deux ou plusieurs populations cellulaires différentes issues de deux zygotes différents"
          },
          {
            "l": "B",
            "t": "Les mosaïques sont la conséquence de mutations post-zygotiques"
          },
          {
            "l": "C",
            "t": "Une mosaïque germinale peut être suspectée lorsqu'on observe dans une famille deux enfants atteints d'une maladie dominante à pénétrance complète"
          },
          {
            "l": "D",
            "t": "En cas de mosaïque somatique, l'intensité du phénotype dépend de la proportion des différentes populations cellulaires"
          },
          {
            "l": "E",
            "t": "En cas de mosaïque germinale, le risque pour la descendance est nul"
          }
        ],
        "chapterSlugs": [
          "ii-5-genetique-mecanismes-consequences-mutations"
        ],
        "programItems": [
          "II-5"
        ],
        "answer": "BCD"
      },
      {
        "n": 48,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'étude des caractéristiques génétiques d'un individu, lesquelles sont exactes ?",
        "options": [
          {
            "l": "A",
            "t": "Elle est réalisée sous la responsabilité d'un praticien agréé par l'Agence de la Biomédecine"
          },
          {
            "l": "B",
            "t": "Elle est réalisée dans un laboratoire autorisé"
          },
          {
            "l": "C",
            "t": "Elle peut être réalisée à l'aide de techniques de cytogénétique"
          },
          {
            "l": "D",
            "t": "Elle peut être réalisée à l'aide de techniques de génétique moléculaire"
          },
          {
            "l": "E",
            "t": "Elle est réalisée dans certains cas chez un sujet asymptomatique mineur"
          }
        ],
        "chapterSlugs": [
          "iv-54-genetique-fins-medicales"
        ],
        "programItems": [
          "IV-54"
        ],
        "answer": "ABCDE"
      },
      {
        "n": 49,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant la ferritine, quelle(s) est (sont) celle(s) qui est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Elle constitue la principale protéine de transport du fer plasmatique"
          },
          {
            "l": "B",
            "t": "Elle possède deux sites de fixation pour le fer"
          },
          {
            "l": "C",
            "t": "Elle est augmentée dans le plasma au cours du processus inflammatoire"
          },
          {
            "l": "D",
            "t": "Elle est diminuée dans le plasma au cours des carences martiales"
          },
          {
            "l": "E",
            "t": "Elle constitue le marqueur le plus sensible pour le diagnostic d'une hémochromatose"
          }
        ],
        "chapterSlugs": [
          "iv-45-metabolisme-fer"
        ],
        "programItems": [
          "IV-45"
        ],
        "answer": "CD"
      },
      {
        "n": 50,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Un homme de groupe sanguin À RH:1 (Rh positif), homozygote au locus RH1, se marie avec une femme de groupe sanguin O RH:-1 (Rh négatif). Vingt ans plus tard, leur fils épouse une femme de groupe sanguin O RH:1 (Rh positif), homozygote au locus RHT1. Parmi les propositions suivantes, quelle(s) est (sont) celle(s) qui est (sont) possible(s) dans la descendance du 2°\" couple ?",
        "options": [
          {
            "l": "A",
            "t": "A RH:-1 (Rh négatif)"
          },
          {
            "l": "B",
            "t": "A RH:1 (Rh positif)"
          },
          {
            "l": "C",
            "t": "O RH:-1 (Rh négatif)"
          },
          {
            "l": "D",
            "t": "O RH:1 (Rh positif)"
          },
          {
            "l": "E",
            "t": "AB RH:-1 (Rh négatif)"
          }
        ],
        "chapterSlugs": [
          "ii-25-immunologie-groupes-sanguins"
        ],
        "programItems": [
          "II-25"
        ],
        "answer": "BD"
      },
      {
        "n": 51,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les méthodes électrophorétiques, quelles sont celles qui sont exactes ?",
        "options": [
          {
            "l": "A",
            "t": "La méthode d'électrophorèse capillaire correspond à la migration des analytes dans un tube en silice de faible diamètre"
          },
          {
            "l": "B",
            "t": "La migration électrophorétique est indépendante de la température"
          },
          {
            "l": "C",
            "t": "En électrophorèse de zone classique, la séparation des espèces neutres est possible"
          },
          {
            "l": "D",
            "t": "La séparation a lieu sous l'effet d'un champ électrique"
          },
          {
            "l": "E",
            "t": "Le mode micellaire permet de séparer les espèces neutres"
          }
        ],
        "chapterSlugs": [
          "i-6-electrophorese"
        ],
        "programItems": [
          "I-6"
        ],
        "answer": "ADE"
      },
      {
        "n": 52,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les rayonnements ionisants, quelle(s) est (sont) la (les) réponse(s) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "L'irradiation naturelle par les rayons cosmiques varie avec l'altitude et la latitude"
          },
          {
            "l": "B",
            "t": "Des troubles neurologiques apparaissent à partir d'une irradiation de 0,1 Sv"
          },
          {
            "l": "C",
            "t": "Le radon est un gaz radioactif"
          },
          {
            "l": "D",
            "t": "La moelle osseuse est le tissu le plus sensible à une irradiation"
          },
          {
            "l": "E",
            "t": "La dose mortelle en cas d'irradiation externe globale est estimée chez l'Homme à environ 1 Sv"
          }
        ],
        "chapterSlugs": [
          "iii-15-toxicologie-radioelements"
        ],
        "programItems": [
          "III-15"
        ],
        "answer": "ACD"
      },
      {
        "n": 53,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant une spécialité générique, lesquelles sont exactes ?",
        "options": [
          {
            "l": "A",
            "t": "Elle peut être inscrite sur la liste de rétrocession"
          },
          {
            "l": "B",
            "t": "Elle peut être inscrite sur la liste en sus (hors GHS)"
          },
          {
            "l": "C",
            "t": "Elle peut contenir des excipients à effet notoire différents de ceux du produit de référence"
          },
          {
            "l": "D",
            "t": "Elle peut avoir un niveau de service médical rendu différent de celui du produit de référence"
          },
          {
            "l": "E",
            "t": "Elle peut substituer n'importe quel produit du même groupe générique auquel il appartient"
          }
        ],
        "chapterSlugs": [
          "iii-6-medicaments-dispositifs-medicaux"
        ],
        "programItems": [
          "III-6"
        ],
        "answer": "ABCE"
      },
      {
        "n": 54,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Quelles propriétés sont attribuées aux molécules HLA de classe Il ?",
        "options": [
          {
            "l": "A",
            "t": "Elles sont d'expression ubiquitaire"
          },
          {
            "l": "B",
            "t": "Elles appartiennent à la superfamille des immunoglobulines"
          },
          {
            "l": "C",
            "t": "Elles reconnaissent des récepteurs présents à la surface des cellules NK (Natural Kilfer)"
          },
          {
            "l": "D",
            "t": "Elles comportent deux chaînes réunies par des liaisons non covalentes"
          },
          {
            "l": "E",
            "t": "Elles sont associées à la bêta-2 microglobuline"
          }
        ],
        "chapterSlugs": [
          "ii-29-immunologie-cmh-presentation-antigene"
        ],
        "programItems": [
          "II-29"
        ],
        "answer": "BD"
      },
      {
        "n": 55,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant les agranulocytoses d'origine médicamenteuse, laquelle (lesquelles) est (sont) exactes ?",
        "options": [
          {
            "l": "A",
            "t": "Elles sont définies par un nombre de leucocytes inférieur à 0,5 G/L"
          },
          {
            "l": "B",
            "t": "Elles sont un effet indésirable possible des sulfamides hypoglycémiants"
          },
          {
            "l": "C",
            "t": "Une déclaration d'hémovigilance est obligatoire"
          },
          {
            "l": "D",
            "t": "Elles peuvent être d'origine centrale ou périphérique"
          },
          {
            "l": "E",
            "t": "Leur prise en charge comporte systématiquement l'administration de facteur de croissance granulocytaire (G-CSF)"
          }
        ],
        "chapterSlugs": [
          "iv-30-cytopenies-medicamenteuses"
        ],
        "programItems": [
          "IV-30"
        ],
        "answer": "BD"
      },
      {
        "n": 56,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant le protocole expérimental mis en œuvre pour les essais de toxicité par administration réitérée, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Au moins trois niveaux de doses (faible, intermédiaire, forte) sont demandés"
          },
          {
            "l": "B",
            "t": "L'essai doit être réalisé sur deux espèces de mammifères rongeurs"
          },
          {
            "l": "C",
            "t": "Ils ont pour objectif de déterminer la NOAEL (No Observable Adverse Effet Level ou Dose Sans Effet Nocif Observable DSENO) du produit"
          },
          {
            "l": "D",
            "t": "L'administration du produit doit se faire par la voie prévue chez l'Homme"
          },
          {
            "l": "E",
            "t": "La durée des essais chez l'animal ne doit pas dépasser la durée d'administration prévue dans les études cliniques"
          }
        ],
        "chapterSlugs": [
          "v-44-evaluation-toxicite"
        ],
        "programItems": [
          "V-44"
        ],
        "answer": "ACD"
      },
      {
        "n": 57,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'acide alendronique, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Il a un effet anti-ostéoblastique"
          },
          {
            "l": "B",
            "t": "Son absorption est favorisée par la prise d'aliments lactés"
          },
          {
            "l": "C",
            "t": "Il est susceptible de provoquer une ostéonécrose de la mâchoire"
          },
          {
            "l": "D",
            "t": "Il est indiqué dans le traitement de l'ostéoporose post-ménopausique"
          },
          {
            "l": "E",
            "t": "Il provoque une hypercalcémie"
          }
        ],
        "chapterSlugs": [
          "v-43-medicaments-osteoporose"
        ],
        "programItems": [
          "V-43"
        ],
        "answer": "CD"
      },
      {
        "n": 58,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les antibiotiques suivants, lesquels sont des glycopeptides ?",
        "options": [
          {
            "l": "A",
            "t": "Téicoplanine"
          },
          {
            "l": "B",
            "t": "Fidaxomicine"
          },
          {
            "l": "C",
            "t": "Vancomycine"
          },
          {
            "l": "D",
            "t": "Clindamycine"
          },
          {
            "l": "E",
            "t": "Daptomycine"
          }
        ],
        "chapterSlugs": [
          "v-28-glycopeptides"
        ],
        "programItems": [
          "V-28"
        ],
        "answer": "AC"
      },
      {
        "n": 59,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Concernant le bilan de coagulation suivant : PI Activité du complexe prothrombinique 78 % PI Temps de céphaline avec activateur : Malade 45 s / Témoin 30 s PI Fibrinogène 3,0 g/L quelle(s) est (sont) la (les) hypothèse(s) possible(s) ?",
        "options": [
          {
            "l": "A",
            "t": "Un déficit isolé en facteur V"
          },
          {
            "l": "B",
            "t": "Une hémophilie A"
          },
          {
            "l": "C",
            "t": "Un traitement par clopidogrel"
          },
          {
            "l": "D",
            "t": "Un déficit en facteur XI"
          },
          {
            "l": "E",
            "t": "Un anticoagulant circulant de type lupique"
          }
        ],
        "chapterSlugs": [
          "iv-36-allongement-tq-tca"
        ],
        "programItems": [
          "IV-36"
        ],
        "answer": "BDE"
      },
      {
        "n": 60,
        "type": "qcm",
        "qcmType": "multiple",
        "prompt": "Parmi les propositions suivantes concernant l'érythropoïèse du sujet adulte, laquelle (lesquelles) est (sont) exacte(s) ?",
        "options": [
          {
            "l": "A",
            "t": "La synthèse de l'érythropoïétine est principalement hépatique"
          },
          {
            "l": "B",
            "t": "La durée de vie moyenne des réticulocytes est de 120 jours"
          },
          {
            "l": "C",
            "t": "L'érythropoïèse est un processus adaptatif stimulé par l'hypoxie"
          },
          {
            "l": "D",
            "t": "Les cellules BFU-E sont des progéniteurs de la lignée érythroblastique"
          },
          {
            "l": "E",
            "t": "Les réticulocytes circulants sont des cellules nucléées"
          }
        ],
        "chapterSlugs": [
          "ii-24-physiologie-lignees-myeloides"
        ],
        "programItems": [
          "II-24"
        ],
        "answer": "CD"
      }
    ]
  }
];

/** Tous les items, aplatis, avec leur session. */
export const allAnnales = annalesSessions.flatMap((s) =>
  s.items.map((it) => ({ ...it, session: s.key, sessionLabel: s.label }))
);

/** Items d'annales rattachés à un chapitre donné. */
export function annalesForChapter(slug) {
  if (!slug) return [];
  return allAnnales.filter((it) => it.chapterSlugs.includes(slug));
}

/** Items d'annales rattachés à un item de programme (ex. "V-27"). */
export function annalesForProgramItem(item) {
  if (!item) return [];
  return allAnnales.filter((it) => it.programItems.includes(item));
}

/** Nombre d'items par session (pour l'index). */
export function annalesStats() {
  return annalesSessions.map((s) => ({
    key: s.key,
    label: s.label,
    total: s.items.length,
    qcm: s.items.filter((i) => i.type === 'qcm').length,
    dossiers: s.items.filter((i) => i.type === 'dossier').length,
    exercices: s.items.filter((i) => i.type === 'exercice').length
  }));
}
