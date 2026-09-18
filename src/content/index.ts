import aboutJson from "./about.json";
import casesJson from "./cases.json";
import homeJson from "./home.json";
import leadershipJson from "./leadership.json";
import siteJson from "./site.json";
import esAbout from "./es/about.json";
import esCases from "./es/cases.json";
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

export interface Content {
  about: About;
  leadership: Leadership;
  home: Home;
  site: Site;
  cases: { list: CaseSummary[]; study: CaseStudy };
}

/** English source of truth — generated from the Figma text nodes. */
export const EN: Content = {
  about: aboutJson as About,
  leadership: leadershipJson as Leadership,
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
  leadership: esLeadership,
  home: esHome,
  site: esSite,
  cases: esCases,
};
