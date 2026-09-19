#!/usr/bin/env node
/**
 * Guards the Portfolio concierge's knowledge file.
 *
 * The concierge never generates an answer — it looks the visitor's question up
 * in `src/content/concierge.json` and, failing that, says so. This script
 * checks the two ways that can quietly break as the file grows:
 *
 *  1. Structure — the Spanish overlay lines up with the English source, every
 *     suggestion points at a real entry, and no entry is missing a field.
 *  2. Routing — a set of real phrasings still reaches the entry it should, and
 *     off-topic questions still reach nothing at all.
 *
 * When you add an entry, add a phrasing for it to CASES below.
 *
 *   npm run check:concierge
 */
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => JSON.parse(readFileSync(join(root, p), "utf8"));

const { findAnswer } = await import(
  new URL("../src/concierge/match.ts", import.meta.url).href
);

const en = read("src/content/concierge.json");
const es = read("src/content/es/concierge.json");

const failures = [];
const fail = (message) => failures.push(message);

/* ---------------------------------------------------------- structure -- */

if (es.entries.length !== en.entries.length) {
  fail(
    `es/concierge.json has ${es.entries.length} entries, concierge.json has ` +
      `${en.entries.length}. The i18n overlay merges arrays by index, so they ` +
      `must stay the same length and in the same order.`,
  );
}

en.entries.forEach((entry, i) => {
  for (const field of ["id", "question", "answer"]) {
    if (!entry[field]) fail(`entry ${i} (${entry.id ?? "?"}) has no ${field}`);
  }
  if (!Array.isArray(entry.keywords) || entry.keywords.length === 0) {
    fail(`entry ${entry.id} has no keywords`);
  }
  const twin = es.entries[i];
  if (twin) {
    for (const field of ["question", "answer", "keywords"]) {
      if (!twin[field]) fail(`es entry ${i} (${entry.id}) has no ${field}`);
    }
  }
});

const ids = new Set(en.entries.map((entry) => entry.id));
if (ids.size !== en.entries.length) fail("duplicate entry id in concierge.json");
for (const id of en.suggestions) {
  if (!ids.has(id)) fail(`suggestion "${id}" does not match any entry id`);
}

/* ------------------------------------------------------------ routing -- */

// The Spanish side of the merge: English ids, Spanish text.
const esEntries = en.entries.map((base, i) => ({ ...base, ...es.entries[i] }));

const CASES = [
  ["en", "what has she actually shipped?", "shipped"],
  ["en", "tell me about her results", "shipped"],
  ["en", "how does she use AI?", "ai"],
  ["en", "does she work with Claude", "ai"],
  ["en", "is she available for hire", "looking-for"],
  ["en", "what kind of role is she after", "looking-for"],
  ["en", "how can I reach her?", "contact"],
  ["en", "what's her email", "contact"],
  ["en", "how does she scale design ops", "operating-systems"],
  ["en", "how does she lead a team", "leadership"],
  ["en", "tell me about mentoring", "leadership"],
  ["en", "what is VIU?", "viu"],
  ["en", "what is this site built with", "viu"],
  ["en", "what happened at Elastic", "elastic"],
  ["en", "how many years of experience", "experience"],
  ["en", "how does she think about accessibility", "accessibility"],
  ["en", "what tools does she use", "tools"],
  ["en", "where does she live", "location"],
  ["en", "does she speak english", "languages"],
  ["en", "can I download her CV", "resume"],
  // Off the knowledge file: the concierge must decline, not reach.
  ["en", "what is her favourite colour", null],
  ["en", "who won the world cup", null],
  ["en", "asdfgh", null],
  ["en", "   ", null],
  ["es", "¿qué ha entregado?", "shipped"],
  ["es", "cómo usa inteligencia artificial", "ai"],
  ["es", "está disponible para trabajar?", "looking-for"],
  ["es", "cómo la contacto", "contact"],
  ["es", "cuál es su correo", "contact"],
  ["es", "cómo lidera equipos", "leadership"],
  ["es", "qué es VIU", "viu"],
  ["es", "qué hizo en Elastic", "elastic"],
  ["es", "cuántos años de experiencia tiene", "experience"],
  ["es", "qué herramientas usa", "tools"],
  ["es", "dónde vive", "location"],
  ["es", "puedo ver su currículum", "resume"],
  ["es", "cuál es su color favorito", null],
];

for (const [lang, question, expected] of CASES) {
  const entries = lang === "en" ? en.entries : esEntries;
  const got = findAnswer(question, entries)?.id ?? null;
  if (got !== expected) {
    fail(`[${lang}] "${question}" → ${got ?? "no match"} (expected ${expected ?? "no match"})`);
  }
}

/* ------------------------------------------------------------- report -- */

if (failures.length > 0) {
  console.error(`✗ concierge check: ${failures.length} problem(s)\n`);
  for (const message of failures) console.error(`  - ${message}`);
  process.exit(1);
}

console.log(
  `✓ concierge check: ${en.entries.length} entries, ` +
    `${CASES.length} phrasings route correctly in both languages`,
);
