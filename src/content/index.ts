import aboutJson from "./about.json";
import casesJson from "./cases.json";
import homeJson from "./home.json";
import siteJson from "./site.json";

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
  hero: { eyebrow: string; title: string; body: string };
  stats: Stat[];
  logosTitle: string;
  roles: Role[];
  skills: SkillGroup[];
  education: string[];
  languages: string[];
  certifications: string[];
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
  nav: {
    name: string;
    links: string[];
    cta: string;
    themeLabels: { light: string; dark: string };
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
  nav: { num: string; label: string }[];
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

export const about = aboutJson as About;
export const home = homeJson as Home;
export const site = siteJson as Site;
export const cases = casesJson as { list: CaseSummary[]; study: CaseStudy };
