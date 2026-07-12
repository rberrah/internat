// @ts-nocheck
// Suivi de progression — 100 % LOCAL (localStorage). Aucun compte, aucun serveur,
// aucun tracking : les données ne quittent jamais le navigateur. Cohérent avec un
// site statique.
//
// On mémorise deux choses par chapitre :
//   seen[slug] = timestamp    → chapitre ouvert
//   quiz[slug] = {ok, total}  → dernier score au QCM du chapitre
//
// De là on dérive un ÉTAT par chapitre, qui alimente la page « Mes lacunes ».
import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

const KEY = 'internat-progress-v1';
const EMPTY = { seen: {}, quiz: {} };

function load() {
  if (!browser) return EMPTY;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const p = JSON.parse(raw);
    return { seen: p.seen ?? {}, quiz: p.quiz ?? {} };
  } catch {
    return EMPTY;
  }
}

export const progress = writable(load());

if (browser) {
  progress.subscribe((v) => {
    try { localStorage.setItem(KEY, JSON.stringify(v)); } catch { /* quota / mode privé */ }
  });
}

/** Marque un chapitre comme ouvert. */
export function markSeen(slug) {
  if (!slug) return;
  progress.update((p) => (p.seen[slug] ? p : { ...p, seen: { ...p.seen, [slug]: Date.now() } }));
}

/** Enregistre le score du QCM d'un chapitre (dernier essai). */
export function recordQuiz(slug, ok, total) {
  if (!slug || !total) return;
  progress.update((p) => ({ ...p, quiz: { ...p.quiz, [slug]: { ok, total, ts: Date.now() } } }));
}

/** Efface toute la progression. */
export function resetProgress() {
  progress.set({ seen: {}, quiz: {} });
}

/**
 * État d'un chapitre :
 *   'lacune'  → QCM raté (< 50 % de bonnes réponses)   ← à retravailler en priorité
 *   'fragile' → QCM partiellement réussi (50–99 %)
 *   'acquis'  → QCM tout juste
 *   'vu'      → chapitre ouvert, QCM non fait
 *   'non-vu'  → jamais ouvert
 */
export function chapterState(p, slug) {
  const q = p.quiz?.[slug];
  if (q && q.total) {
    const r = q.ok / q.total;
    if (r < 0.5) return 'lacune';
    if (r < 1) return 'fragile';
    return 'acquis';
  }
  return p.seen?.[slug] ? 'vu' : 'non-vu';
}

export const STATE_LABEL = {
  lacune: 'Lacune',
  fragile: 'Fragile',
  acquis: 'Acquis',
  vu: 'Vu',
  'non-vu': 'Non vu'
};

/** Résumé global, dérivé du store (utilisé par la page « Mes lacunes »). */
export function summarize(p, chapters) {
  const counts = { lacune: 0, fragile: 0, acquis: 0, vu: 0, 'non-vu': 0 };
  for (const c of chapters) counts[chapterState(p, c.slug)]++;
  return counts;
}
