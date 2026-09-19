import type { ConciergeEntry } from "../content";

/**
 * The concierge does not generate text. It looks a visitor's question up in
 * the knowledge file (`src/content/concierge.json`) and returns the answer
 * Natalia wrote, or nothing at all — which the UI renders as the `noMatch`
 * line. There is no model in the loop, so it cannot invent a claim about her
 * work, and it works on a static host with no backend and no API key.
 */

/** Lowercase, strip accents, and reduce everything else to single spaces. */
function normalize(text: string): string {
  return ` ${text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9+]+/g, " ")
    .trim()} `;
}

/**
 * Words that carry no signal in either language. Dropping them stops "how do
 * I..." from matching every entry that happens to contain "do".
 */
const STOPWORDS = new Set([
  // English
  "a", "about", "an", "and", "any", "are", "as", "at", "be", "been", "can", "could", "did", "do",
  "does", "for", "from", "get", "had", "has", "have", "her", "hers", "how", "i", "in", "is", "it",
  "its", "me", "much", "my", "of", "on", "or", "she", "should", "so", "some", "tell", "that",
  "the", "their", "them", "there", "these", "they", "this", "to", "us", "was", "we", "were",
  "what", "when", "where", "which", "who", "whom", "why", "will", "with", "would", "you", "your",
  // Spanish
  "al", "algo", "como", "con", "cual", "cuales", "cuando", "cuanta", "cuanto", "de", "del",
  "donde", "el", "ella", "ellos", "en", "es", "esa", "ese", "eso", "esta", "estan", "este",
  "esto", "fue", "hace", "hacer", "hay", "la", "las", "le", "les", "lo", "los", "mas", "me",
  "mi", "nos", "para", "pero", "por", "que", "quien", "se", "ser", "si", "sobre", "son", "su",
  "sus", "tiene", "tienen", "un", "una", "uno", "unos", "vos", "y", "ya",
]);

function contentTokens(text: string): string[] {
  return normalize(text)
    .split(" ")
    .filter((word) => word.length > 1 && !STOPWORDS.has(word));
}

/**
 * Below this, the best entry is still a worse answer than admitting the
 * question isn't covered. One incidental shared word scores 1, so a single
 * coincidence can never trip it.
 */
const MIN_SCORE = 3;

export function scoreEntry(query: string, entry: ConciergeEntry): number {
  const haystack = normalize(query);
  const queryTokens = new Set(contentTokens(query));
  if (queryTokens.size === 0) return 0;

  let score = 0;

  // A keyword phrase present verbatim is the strongest signal, and a longer
  // phrase is a more specific one: "design system" should beat "design".
  for (const keyword of entry.keywords) {
    const needle = normalize(keyword);
    if (needle.trim().length === 0) continue;
    if (haystack.includes(needle)) score += 2 + needle.trim().split(" ").length;
  }

  // Then the overlap with the entry's own question, which covers phrasings the
  // keyword list never anticipated.
  for (const token of contentTokens(entry.question)) {
    if (queryTokens.has(token)) score += 1;
  }

  return score;
}

/** The entry that best answers `query`, or `null` when none is close enough. */
export function findAnswer(query: string, entries: ConciergeEntry[]): ConciergeEntry | null {
  let best: ConciergeEntry | null = null;
  let bestScore = 0;

  for (const entry of entries) {
    const score = scoreEntry(query, entry);
    // Strictly greater, so an earlier entry wins a tie and the order in the
    // knowledge file stays meaningful.
    if (score > bestScore) {
      best = entry;
      bestScore = score;
    }
  }

  return bestScore >= MIN_SCORE ? best : null;
}
