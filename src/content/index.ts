import aboutJson from "./about.json";
import casesJson from "./cases.json";
import conciergeJson from "./concierge.json";
import funJson from "./fun.json";
import homeJson from "./home.json";
import leadershipJson from "./leadership.json";
import siteJson from "./site.json";
import esAbout from "./es/about.json";
import esCases from "./es/cases.json";
import esConcierge from "./es/concierge.json";
import esFun from "./es/fun.json";
import esHome from "./es/home.json";
import esLeadership from "./es/leadership.json";
import esSite from "./es/site.json";

/**
 * All copy is generated 1:1 from the Figma file
 * "Portafolio Natalia Agosto" (page `Paginas`, node 76:1609) so the site and
 * the design never drift. Edit the JSON, not the components.
 */

/** A text run; `b` marks the phrases Figma sets in medium weight. */
export interface Run {
  t: string;
  b?: boolean;
}

export interface Role {
  initials: string;
  period: string;
  title: string;
  summary: string;
  bullets: Run[][];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface CasePoint {
  title: string;
  body: string;
}

export interface CaseSummary {
  slug: string;
  eyebrow: string;
  title: string;
  cta: string;
  points: CasePoint[];
}

export interface About {
  hero: { eyebrow: string; title: string; body: string; cta: string };
  headings: {
    experience: string;
    education: string;
    skills: string;
    languages: string;
    certifications: string;
  };
  stats: Stat[];
  logosTitle: string;
  roles: Role[];
  skills: SkillGroup[];
  education: string[];
  languages: string[];
  /** The leading category is its own field, not a string to split at render. */
  certifications: { category: string; body: string }[];
}

export interface Home {
  disclaimer: string;
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    figureCaption: string;
    figureImage: string;
  };
  stats: Stat[];
  logosTitle: string;
  recommendations: {
    title: string;
    lead: { quote: string; name: string; role: string; initials: string };
    cards: { quote: string; name: string; role: string }[];
    link: string;
  };
  cases: { title: string; link: string; items: CaseSummary[] };
  generalWork: { title: string; items: string[]; link: string };
}

export interface Site {
  /** Real contact details — not translated. */
  contact: {
    email: string;
    whatsapp: string;
    /** Digits only, for the wa.me link. */
    whatsappNumber: string;
    linkedin: string;
    behance: string;
  };
  nav: {
    name: string;
    links: string[];
    cta: string;
    themeLabels: { light: string; dark: string };
    /** Names for the icon-only buttons — tooltip and accessible name. */
    iconLabels: { email: string; whatsapp: string; linkedin: string; language: string };
  };
  footer: {
    name: string;
    blurb: string;
    columns: { title: string; items: string[] }[];
    resume: { eyebrow: string; title: string; cta: string };
    copyright: string;
    legal: string;
  };
}

export interface CaseStudy {
  hero: {
    num: string;
    label: string;
    eyebrow: string;
    title: string;
    tags: string[];
    accent: { value: string; note: string };
    gallery: { image: string; caption: string; link?: string }[];
  };
  context: { num: string; label: string; title: string; paragraphs: string[] };
  role: { num: string; label: string; title: string; rows: { label: string; body: string }[] };
  frame: { num: string; label: string; title: string; paragraphs: string[] };
  approach: { num: string; label: string; title: string; moves: { title: string; body: string }[] };
  evidence: { num: string; label: string; title: string; lead: string; items: string[] };
  outcomes: {
    num: string;
    label: string;
    title: string;
    items: { value: string; label: string; body: string }[];
    note: string;
  };
  gallery: { num: string; label: string; title: string; slideHint: string; slides: number; note: string };
  reflection: { num: string; label: string; title: string; body: string };
  next: { num: string; label: string; title: string; body: string };
}

export interface Leadership {
  hero: { eyebrow: string; title: string; body: string };
  principles: { eyebrow: string; body: string }[];
  closing: {
    title: string;
    body: string;
    proof: { eyebrow: string; body: string };
  };
}

export interface Fun {
  hero: { eyebrow: string; title: string; body: string };
  /** Five-piece bento of things that are not work (Figma `Mosaic Section`). */
  mosaic: { tiles: { key: string; image: string; caption: string }[] };
  quote: { eyebrow: string; body: string };
  /** Copy for the penalty game. The keeper's lines are keyed by what she did,
   *  not numbered, so a translation can never drift out of context. */
  game: {
    eyebrow: string;
    title: string;
    body: string;
    steps: string[];
    /** Shown over the goal for a few seconds so the first move is obvious. */
    intro: { title: string; body: string };
    aimLabel: string;
    /** Nine, in reading order: top-left first, bottom-right last. */
    zones: string[];
    timingLabel: string;
    shoot: string;
    shootHint: string;
    aimHint: string;
    reducedMotion: string;
    commentary: {
      ready: string;
      charging: string;
      save: { read: string; reach: string; weak: string };
      goal: { perfect: string; wrongWay: string; beaten: string };
      wide: { over: string; post: string };
    };
    /** `rate` takes {pct} and {shots}. */
    score: {
      saves: string;
      goals: string;
      wide: string;
      rate: string;
      empty: string;
      reset: string;
    };
  };
  note: { eyebrow: string; body: string };
}

/**
 * One question the concierge can answer. `keywords` are what the matcher
 * scores a visitor's phrasing against; `question` is both the label on the
 * suggestion button and part of the match. Adding an entry here is the only
 * thing needed to teach the concierge something new.
 */
export interface ConciergeEntry {
  id: string;
  question: string;
  keywords: string[];
  answer: string;
}

export interface Concierge {
  launcher: string;
  title: string;
  intro: string;
  placeholder: string;
  footnote: string;
  labels: {
    close: string;
    send: string;
    suggestions: string;
    transcript: string;
    you: string;
    concierge: string;
  };
  /** Shown verbatim when nothing in `entries` matches — never a guess. */
  noMatch: string;
  /** Entry ids, in the order they appear as starter buttons. */
  suggestions: string[];
  entries: ConciergeEntry[];
}

export interface Content {
  about: About;
  concierge: Concierge;
  leadership: Leadership;
  fun: Fun;
  home: Home;
  site: Site;
  cases: { list: CaseSummary[]; study: CaseStudy };
}

/** English source of truth — generated from the Figma text nodes. */
export const EN: Content = {
  about: aboutJson as About,
  concierge: conciergeJson as Concierge,
  leadership: leadershipJson as Leadership,
  fun: funJson as Fun,
  home: homeJson as Home,
  site: siteJson as Site,
  cases: casesJson as { list: CaseSummary[]; study: CaseStudy },
};

/**
 * Spanish overlay: only the keys that change. See `merge` in `src/i18n.tsx`
 * for how it composes over the English source.
 */
export const ES_OVERLAY = {
  about: esAbout,
  concierge: esConcierge,
  leadership: esLeadership,
  fun: esFun,
  home: esHome,
  site: esSite,
  cases: esCases,
};
