// @ts-nocheck
// RÉFÉRENCES — pool FERMÉ de sources reconnues (référentiels officiels, collèges
// d'enseignants, sociétés savantes, recommandations, ouvrages de référence).
//
// Chaque entrée porte un `id` stable. Les chapitres s'y rattachent via
// `sources: [<id>, ...]` dans leur frontmatter. Un id inconnu fait ÉCHOUER le
// smoke test : impossible d'inventer une source.
//
// kind: 'referentiel' | 'guideline' | 'book' | 'article' | 'site'

/** @typedef {{id:string, title:string, authors?:string, where?:string, url:string, kind:string}} Reference */
/** @typedef {{id:string, title:string, items:Reference[]}} ReferenceGroup */

const search = (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}`;
const pubmed = (q) => `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(q)}`;

/** @type {ReferenceGroup[]} */
export const referenceGroups = [
  {
    id: 'officiel',
    title: 'Sources institutionnelles & réglementaires',
    items: [
      { id: 'programme-internat', kind: 'referentiel', title: "Programme officiel de l'internat en pharmacie — Arrêté du 12 avril 2012", where: 'Légifrance (JORFTEXT000025753008)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000025753008/' },
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
      { id: 'cnpm-livre', kind: 'book', title: 'Pharmacologie — Le référentiel des Collèges', authors: 'Collège National de Pharmacologie Médicale', where: 'Elsevier Masson', url: search('Collège National de Pharmacologie Médicale référentiel Elsevier Masson pharmacologie') },
      { id: 'goodman-gilman', kind: 'book', title: 'Goodman & Gilman’s The Pharmacological Basis of Therapeutics', where: 'McGraw-Hill', url: search('Goodman Gilman Pharmacological Basis of Therapeutics') },
      { id: 'katzung', kind: 'book', title: 'Basic & Clinical Pharmacology', authors: 'Katzung B.G.', where: 'McGraw-Hill', url: search('Katzung Basic and Clinical Pharmacology') },
      { id: 'rowland-tozer', kind: 'book', title: 'Clinical Pharmacokinetics and Pharmacodynamics: Concepts and Applications', authors: 'Rowland M. & Tozer T.N.', where: 'Wolters Kluwer', url: search('Rowland Tozer Clinical Pharmacokinetics and Pharmacodynamics') },
      { id: 'prescrire', kind: 'site', title: 'Revue Prescrire — information indépendante sur le médicament', url: 'https://www.prescrire.org' },
      { id: 'crat', kind: 'site', title: 'CRAT — Centre de Référence sur les Agents Tératogènes (grossesse & allaitement)', url: 'https://www.lecrat.fr' }
    ]
  },
  {
    id: 'infectio',
    title: 'Bactériologie, virologie & infectiologie',
    items: [
      { id: 'epilly', kind: 'referentiel', title: 'E.PILLY — Maladies infectieuses et tropicales', authors: 'CMIT (Collège des universitaires de Maladies Infectieuses et Tropicales)', where: 'Alinéa Plus', url: search('E.PILLY CMIT maladies infectieuses et tropicales référentiel') },
      { id: 'remic', kind: 'referentiel', title: 'REMIC — Référentiel en microbiologie médicale', authors: 'Société Française de Microbiologie (SFM)', url: search('REMIC référentiel en microbiologie médicale SFM') },
      { id: 'casfm', kind: 'referentiel', title: 'CASFM / EUCAST — recommandations de l’antibiogramme', authors: 'Comité de l’antibiogramme de la SFM / EUCAST', url: 'https://www.sfm-microbiologie.org/casfm/' },
      { id: 'eucast', kind: 'referentiel', title: 'EUCAST — European Committee on Antimicrobial Susceptibility Testing (breakpoints)', url: 'https://www.eucast.org' },
      { id: 'spilf', kind: 'guideline', title: 'SPILF — recommandations de la Société de Pathologie Infectieuse de Langue Française', url: 'https://www.infectiologie.com' },
      { id: 'ecdc', kind: 'site', title: 'ECDC — European Centre for Disease Prevention and Control', url: 'https://www.ecdc.europa.eu' },
      { id: 'craig-pkpd', kind: 'article', title: 'PK/PD des anti-infectieux : le cadre fondateur des indices PK/PD', authors: 'Craig W.A.', where: 'Clin. Infect. Dis. 1998', url: pubmed('Craig 1998 pharmacokinetic pharmacodynamic parameters antibacterial dosing') }
    ]
  },
  {
    id: 'parasito',
    title: 'Parasitologie & mycologie',
    items: [
      { id: 'anofel', kind: 'referentiel', title: 'ANOFEL — Parasitoses et mycoses des régions tempérées et tropicales', authors: 'Association Française des Enseignants de Parasitologie et Mycologie', where: 'Elsevier Masson', url: search('ANOFEL parasitoses et mycoses référentiel Elsevier Masson') },
      { id: 'oms-palu', kind: 'guideline', title: 'WHO Guidelines for malaria (diagnostic et traitement du paludisme)', authors: 'OMS / WHO', url: 'https://www.who.int/teams/global-malaria-programme' }
    ]
  },
  {
    id: 'hemato-immuno',
    title: 'Hématologie & immunologie',
    items: [
      { id: 'sfh', kind: 'site', title: 'Société Française d’Hématologie — recommandations', url: 'https://sfh.hematologie.net' },
      { id: 'hemato-college', kind: 'book', title: 'Hématologie — Le référentiel des Collèges', where: 'Elsevier Masson', url: search('Hématologie référentiel des collèges Elsevier Masson internat') },
      { id: 'janeway', kind: 'book', title: 'Janeway’s Immunobiology', authors: 'Murphy K. & Weaver C.', where: 'Garland Science / Norton', url: search('Janeway Immunobiology Murphy Weaver') },
      { id: 'who-anemia', kind: 'guideline', title: 'WHO — Haemoglobin concentrations for the diagnosis of anaemia', authors: 'OMS / WHO', url: search('WHO haemoglobin concentrations for the diagnosis of anaemia and assessment of severity') }
    ]
  },
  {
    id: 'biologie',
    title: 'Biochimie & biologie médicale',
    items: [
      { id: 'sfbc', kind: 'site', title: 'SFBC — Société Française de Biologie Clinique (recommandations)', url: 'https://www.sfbc.asso.fr' },
      { id: 'tietz', kind: 'book', title: 'Tietz Textbook of Clinical Chemistry and Molecular Diagnostics', where: 'Elsevier', url: search('Tietz Textbook of Clinical Chemistry and Molecular Diagnostics') },
      { id: 'kdigo', kind: 'guideline', title: 'KDIGO — Clinical Practice Guidelines (maladie rénale chronique, IRA)', url: 'https://kdigo.org/guidelines/' },
      { id: 'ckd-epi', kind: 'article', title: 'A new equation to estimate glomerular filtration rate (CKD-EPI)', authors: 'Levey A.S. et al.', where: 'Ann. Intern. Med. 2009', url: pubmed('Levey new equation to estimate glomerular filtration rate CKD-EPI') }
    ]
  },
  {
    id: 'toxico',
    title: 'Toxicologie',
    items: [
      { id: 'baud-garnier', kind: 'book', title: 'Toxicologie clinique', authors: 'Baud F., Garnier R. et al.', where: 'Lavoisier Médecine Sciences', url: search('Baud Garnier Toxicologie clinique Lavoisier') },
      { id: 'centres-antipoison', kind: 'site', title: 'Centres antipoison et de toxicovigilance (CAPTV)', where: 'France', url: 'https://www.centres-antipoison.net' },
      { id: 'goldfrank', kind: 'book', title: 'Goldfrank’s Toxicologic Emergencies', where: 'McGraw-Hill', url: search('Goldfrank Toxicologic Emergencies') }
    ]
  },
  {
    id: 'therapeutique',
    title: 'Recommandations thérapeutiques (sociétés savantes)',
    items: [
      { id: 'esc', kind: 'guideline', title: 'ESC — European Society of Cardiology Guidelines', url: 'https://www.escardio.org/Guidelines' },
      { id: 'sfd-ada', kind: 'guideline', title: 'Recommandations diabète — SFD (France) & ADA Standards of Care', url: search('Société Francophone du Diabète recommandations ADA standards of medical care in diabetes') },
      { id: 'gina-gold', kind: 'guideline', title: 'GINA (asthme) & GOLD (BPCO) — rapports annuels', url: search('GINA global initiative for asthma GOLD chronic obstructive pulmonary disease report') },
      { id: 'inca', kind: 'site', title: 'INCa — Institut National du Cancer (référentiels et recommandations)', url: 'https://www.e-cancer.fr' },
      { id: 'esmo', kind: 'guideline', title: 'ESMO Clinical Practice Guidelines (oncologie)', url: 'https://www.esmo.org/guidelines' }
    ]
  },
  {
    id: 'methodo',
    title: 'Statistiques & méthodologie',
    items: [
      { id: 'schwartz', kind: 'book', title: 'Méthodes statistiques à l’usage des médecins et des biologistes', authors: 'Schwartz D.', where: 'Médecine-Sciences Flammarion', url: search('Schwartz Méthodes statistiques à l usage des médecins et des biologistes Flammarion') },
      { id: 'ancelle', kind: 'book', title: 'Statistique — Épidémiologie', authors: 'Ancelle T.', where: 'Maloine', url: search('Ancelle Statistique Épidémiologie Maloine') },
      { id: 'altman', kind: 'book', title: 'Practical Statistics for Medical Research', authors: 'Altman D.G.', where: 'Chapman & Hall/CRC', url: search('Altman Practical Statistics for Medical Research') }
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

/** @param {string[]|undefined} ids */
export function resolveSources(ids) {
  if (!Array.isArray(ids)) return [];
  return ids.map((id) => refById[id]).filter(Boolean);
}
