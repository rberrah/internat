// @ts-nocheck
// RÉFÉRENCES — pool FERMÉ, à IDENTIFIANTS STABLES ET VÉRIFIÉS.
//
// Chaque entrée porte un identifiant qui résout vers UN SEUL document, pour toujours :
//   doi  -> https://doi.org/<doi>
//   pmid -> https://pubmed.ncbi.nlm.nih.gov/<pmid>/
//   isbn -> https://search.worldcat.org/isbn/<isbn>
//   url  -> page officielle (agence, éditeur, projet) pour les recommandations et outils
// AUCUN lien de recherche : une recherche n'est ni stable, ni univoque, donc pas une citation.
// Chaque identifiant a été RÉSOLU et son titre vérifié (2026-07).
//
// Les chapitres s'y rattachent via `sources: [<id>, ...]` dans leur frontmatter.
// Un id inconnu — ou un lien de recherche — fait ÉCHOUER le smoke test.

/** @typedef {{id:string, kind:string, title:string, authors?:string, where?:string, doi?:string, pmid?:string, isbn?:string, url:string}} Reference */

export const referenceGroups = [
  {
    id: 'officiel',
    title: 'Sources institutionnelles & réglementaires',
    items: [
      { id: 'programme-internat', kind: 'referentiel', title: 'Programme officiel de l\'internat en pharmacie — Arrêté du 12 avril 2012', where: 'Légifrance (JORFTEXT000025753008)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000025753008/' },
      { id: 'ansm', kind: 'site', title: 'ANSM — Agence nationale de sécurité du médicament et des produits de santé', where: 'RCP, points d’information, sécurité', url: 'https://ansm.sante.fr' },
      { id: 'has', kind: 'site', title: 'HAS — Haute Autorité de Santé (recommandations de bonne pratique)', url: 'https://www.has-sante.fr' },
      { id: 'bdpm', kind: 'site', title: 'Base de données publique des médicaments (RCP officiels)', where: 'ANSM / HAS / UNCAM', url: 'https://base-donnees-publique.medicaments.gouv.fr' },
      { id: 'theriaque', kind: 'site', title: 'Thériaque — base de données indépendante sur le médicament', where: 'CNHIM', url: 'https://www.theriaque.org' },
      { id: 'spf', kind: 'site', title: 'Santé publique France — épidémiologie et veille sanitaire', url: 'https://www.santepubliquefrance.fr' },
      { id: 'oms', kind: 'site', title: 'OMS / WHO — recommandations internationales', url: 'https://www.who.int' }
    ]
  },
  {
    id: 'pharmacologie',
    title: 'Pharmacologie & thérapeutique',
    items: [
      { id: 'cnpm', kind: 'referentiel', title: 'Collège National de Pharmacologie Médicale — référentiel en ligne', where: 'pharmacomedicale.org', url: 'https://pharmacomedicale.org' },
      { id: 'cnpm-livre', kind: 'book', title: 'Le bon usage du médicament et des thérapeutiques non médicamenteuses', authors: 'Collège National de Pharmacologie Médicale (dir. Faillie J.-L. & Perrot S.)', where: '6e éd. actualisée R2C, Éditions Med-Line', isbn: '9782846783385', url: 'https://search.worldcat.org/isbn/9782846783385' },
      { id: 'goodman-gilman', kind: 'book', title: 'Goodman & Gilman’s The Pharmacological Basis of Therapeutics', where: 'McGraw-Hill', isbn: '9781264258079', url: 'https://search.worldcat.org/isbn/9781264258079' },
      { id: 'katzung', kind: 'book', title: 'Basic & Clinical Pharmacology', authors: 'Katzung B.G.', where: 'McGraw-Hill', isbn: '9781260463309', url: 'https://search.worldcat.org/isbn/9781260463309' },
      { id: 'rowland-tozer', kind: 'book', title: 'Clinical Pharmacokinetics and Pharmacodynamics: Concepts and Applications', authors: 'Rowland M. & Tozer T.N.', where: 'Wolters Kluwer', isbn: '9780781750097', url: 'https://search.worldcat.org/isbn/9780781750097' },
      { id: 'prescrire', kind: 'site', title: 'Revue Prescrire — information indépendante sur le médicament', url: 'https://www.prescrire.org' },
      { id: 'crat', kind: 'site', title: 'CRAT — Centre de Référence sur les Agents Tératogènes (grossesse & allaitement)', url: 'https://www.lecrat.fr' }
    ]
  },
  {
    id: 'infectio',
    title: 'Bactériologie, virologie & infectiologie',
    items: [
      { id: 'epilly', kind: 'referentiel', title: 'E.PILLY — Maladies infectieuses et tropicales', authors: 'CMIT (Collège des universitaires de Maladies Infectieuses et Tropicales)', where: 'Alinéa Plus', isbn: '9782916641720', url: 'https://search.worldcat.org/isbn/9782916641720' },
      { id: 'remic', kind: 'referentiel', title: 'REMIC — Référentiel en microbiologie médicale', authors: 'Société Française de Microbiologie (SFM)', isbn: '9782878050417', url: 'https://search.worldcat.org/isbn/9782878050417' },
      { id: 'casfm', kind: 'referentiel', title: 'CASFM / EUCAST — recommandations de l’antibiogramme', authors: 'Comité de l’antibiogramme de la SFM / EUCAST', url: 'https://www.sfm-microbiologie.org/casfm/' },
      { id: 'eucast', kind: 'referentiel', title: 'EUCAST — European Committee on Antimicrobial Susceptibility Testing (breakpoints)', url: 'https://www.eucast.org' },
      { id: 'spilf', kind: 'guideline', title: 'SPILF — recommandations de la Société de Pathologie Infectieuse de Langue Française', url: 'https://www.infectiologie.com' },
      { id: 'ecdc', kind: 'site', title: 'ECDC — European Centre for Disease Prevention and Control', url: 'https://www.ecdc.europa.eu' },
      { id: 'craig-pkpd', kind: 'article', title: 'PK/PD des anti-infectieux : le cadre fondateur des indices PK/PD', authors: 'Craig W.A.', where: 'Clin. Infect. Dis. 1998', doi: '10.1086/516284', pmid: '9455502', url: 'https://doi.org/10.1086/516284' }
    ]
  },
  {
    id: 'parasito',
    title: 'Parasitologie & mycologie',
    items: [
      { id: 'anofel', kind: 'referentiel', title: 'ANOFEL — Parasitoses et mycoses des régions tempérées et tropicales', authors: 'Association Française des Enseignants de Parasitologie et Mycologie', where: 'Elsevier Masson', isbn: '9782294774317', url: 'https://search.worldcat.org/isbn/9782294774317' },
      { id: 'oms-palu', kind: 'guideline', title: 'WHO Guidelines for malaria (diagnostic et traitement du paludisme)', authors: 'OMS / WHO', url: 'https://www.who.int/publications/i/item/guidelines-for-malaria' }
    ]
  },
  {
    id: 'hemato-immuno',
    title: 'Hématologie & immunologie',
    items: [
      { id: 'sfh', kind: 'site', title: 'Société Française d’Hématologie — recommandations', url: 'https://sfh.hematologie.net' },
      { id: 'hemato-college', kind: 'book', title: 'Hématologie — Le référentiel des Collèges', where: 'Elsevier Masson', isbn: '9782294782800', url: 'https://search.worldcat.org/isbn/9782294782800' },
      { id: 'janeway', kind: 'book', title: 'Janeway’s Immunobiology', authors: 'Murphy K. & Weaver C.', where: 'Garland Science / Norton', isbn: '9780393884890', url: 'https://search.worldcat.org/isbn/9780393884890' },
      { id: 'who-anemia', kind: 'guideline', title: 'WHO — Haemoglobin concentrations for the diagnosis of anaemia', authors: 'OMS / WHO', url: 'https://www.who.int/publications/i/item/WHO-NMH-NHD-MNM-11.1' }
    ]
  },
  {
    id: 'biologie',
    title: 'Biochimie & biologie médicale',
    items: [
      { id: 'sfbc', kind: 'site', title: 'SFBC — Société Française de Biologie Clinique (recommandations)', url: 'https://www.sfbc.asso.fr' },
      { id: 'tietz', kind: 'book', title: 'Tietz Textbook of Clinical Chemistry and Molecular Diagnostics', where: 'Elsevier', isbn: '9780323359214', url: 'https://search.worldcat.org/isbn/9780323359214' },
      { id: 'kdigo', kind: 'guideline', title: 'KDIGO — Clinical Practice Guidelines (maladie rénale chronique, IRA)', url: 'https://kdigo.org/guidelines/' },
      { id: 'ckd-epi', kind: 'article', title: 'A new equation to estimate glomerular filtration rate (CKD-EPI)', authors: 'Levey A.S. et al.', where: 'Ann. Intern. Med. 2009', doi: '10.7326/0003-4819-150-9-200905050-00006', pmid: '19414839', url: 'https://doi.org/10.7326/0003-4819-150-9-200905050-00006' }
    ]
  },
  {
    id: 'toxico',
    title: 'Toxicologie',
    items: [
      { id: 'baud-garnier', kind: 'book', title: 'Toxicologie clinique', authors: 'Baud F., Garnier R. et al.', where: 'Lavoisier Médecine Sciences', isbn: '9782257204806', url: 'https://search.worldcat.org/isbn/9782257204806' },
      { id: 'centres-antipoison', kind: 'site', title: 'Centres antipoison et de toxicovigilance (CAPTV)', where: 'France', url: 'https://www.centres-antipoison.net' },
      { id: 'goldfrank', kind: 'book', title: 'Goldfrank’s Toxicologic Emergencies', where: 'McGraw-Hill', isbn: '9781259859618', url: 'https://search.worldcat.org/isbn/9781259859618' }
    ]
  },
  {
    id: 'therapeutique',
    title: 'Recommandations thérapeutiques (sociétés savantes)',
    items: [
      { id: 'esc', kind: 'guideline', title: 'ESC — European Society of Cardiology Guidelines', url: 'https://www.escardio.org/Guidelines' },
      { id: 'sfd-ada', kind: 'guideline', title: 'Recommandations diabète — SFD (France) & ADA Standards of Care', doi: '10.2337/dc26-SINT', pmid: '41358883', url: 'https://doi.org/10.2337/dc26-SINT' },
      { id: 'gina-gold', kind: 'guideline', title: 'GINA (asthme) & GOLD (BPCO) — rapports annuels', url: 'https://ginasthma.org/gina-reports/' },
      { id: 'inca', kind: 'site', title: 'INCa — Institut National du Cancer (référentiels et recommandations)', url: 'https://www.e-cancer.fr' },
      { id: 'esmo', kind: 'guideline', title: 'ESMO Clinical Practice Guidelines (oncologie)', url: 'https://www.esmo.org/guidelines' }
    ]
  },
  {
    id: 'genetique',
    title: 'Génétique & biologie moléculaire',
    items: [
      { id: 'acmg-richards', kind: 'guideline', title: 'Standards and guidelines for the interpretation of sequence variants (classification ACMG/AMP)', authors: 'Richards S. et al.', where: 'Genetics in Medicine, 2015', doi: '10.1038/gim.2015.30', pmid: '25741868', url: 'https://doi.org/10.1038/gim.2015.30' },
      { id: 'orphanet', kind: 'site', title: 'Orphanet — portail des maladies rares et des médicaments orphelins', where: 'Inserm', url: 'https://www.orpha.net' },
      { id: 'omim', kind: 'site', title: 'OMIM — Online Mendelian Inheritance in Man (catalogue des maladies génétiques)', where: 'Johns Hopkins University', url: 'https://www.omim.org' },
      { id: 'genetique-college', kind: 'book', title: 'Génétique médicale — Le référentiel des Collèges', where: 'Elsevier Masson', isbn: '9782294772894', url: 'https://search.worldcat.org/isbn/9782294772894' },
      { id: 'anpgm', kind: 'site', title: 'ANPGM — Association Nationale des Praticiens de Génétique Moléculaire (bonnes pratiques)', url: 'https://www.anpgm.fr' }
    ]
  },
  {
    id: 'analytique',
    title: 'Chimie analytique & contrôle qualité',
    items: [
      { id: 'pharmacopee-eur', kind: 'referentiel', title: 'Pharmacopée Européenne (monographies et méthodes analytiques générales)', authors: 'EDQM / Conseil de l’Europe', url: 'https://www.edqm.eu/en/european-pharmacopoeia' },
      { id: 'ich-q2', kind: 'guideline', title: 'ICH Q2(R2) — Validation of Analytical Procedures (justesse, fidélité, linéarité, LOD/LOQ)', authors: 'ICH', url: 'https://database.ich.org/sites/default/files/ICH_Q2(R2)_Guideline_2023_1130.pdf' },
      { id: 'sfstp', kind: 'guideline', title: 'Guides SFSTP — validation des procédures analytiques (profil d’exactitude)', authors: 'Société Française des Sciences et Techniques Pharmaceutiques', doi: '10.1016/j.jpba.2004.07.027', pmid: '15522533', url: 'https://doi.org/10.1016/j.jpba.2004.07.027' },
      { id: 'skoog', kind: 'book', title: 'Fundamentals of Analytical Chemistry', authors: 'Skoog D.A., West D.M., Holler F.J. & Crouch S.R.', where: 'Cengage', isbn: '9780357450390', url: 'https://search.worldcat.org/isbn/9780357450390' },
      { id: 'sfmn', kind: 'site', title: 'SFMN — Société Française de Médecine Nucléaire (radiopharmaceutiques, radioprotection)', url: 'https://www.sfmn.org' }
    ]
  },
  {
    id: 'methodo',
    title: 'Statistiques & méthodologie',
    items: [
      { id: 'schwartz', kind: 'book', title: 'Méthodes statistiques à l’usage des médecins et des biologistes', authors: 'Schwartz D.', where: 'Médecine-Sciences Flammarion', isbn: '9782257123268', url: 'https://search.worldcat.org/isbn/9782257123268' },
      { id: 'ancelle', kind: 'book', title: 'Statistique — Épidémiologie', authors: 'Ancelle T.', where: 'Maloine', isbn: '9782224036645', url: 'https://search.worldcat.org/isbn/9782224036645' },
      { id: 'altman', kind: 'book', title: 'Practical Statistics for Medical Research', authors: 'Altman D.G.', where: 'Chapman & Hall/CRC', isbn: '9780412276309', url: 'https://search.worldcat.org/isbn/9780412276309' }
    ]
  }
];

/** Index plat : id → référence. */
export const refById = (() => {
  const idx = {};
  for (const g of referenceGroups) for (const it of g.items) idx[it.id] = it;
  return idx;
})();

/** Tous les identifiants valides (pool fermé). */
export const allRefIds = Object.keys(refById);

/** Étiquette courte de l'identifiant, à afficher à côté de la source. */
export function refIdentifier(r) {
  if (!r) return '';
  if (r.doi) return 'DOI ' + r.doi;
  if (r.pmid) return 'PMID ' + r.pmid;
  if (r.isbn) return 'ISBN ' + r.isbn;
  return '';
}

/** @param {string[]|undefined} ids */
export function resolveSources(ids) {
  if (!Array.isArray(ids)) return [];
  return ids.map((id) => refById[id]).filter(Boolean);
}
