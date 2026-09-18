import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { EN, ES_OVERLAY, type Content } from "./content";

export type Locale = "en" | "es";

export const LOCALES: { value: Locale; label: string }[] = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
];

const STORAGE_KEY = "viu-portfolio-locale";

function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") return stored;
  } catch {
    /* private mode / blocked storage — fall through to the default */
  }
  return "en";
}

/**
 * Merge a partial Spanish overlay over the English source.
 *
 * The overlay only carries what actually changes: testimonials stay in the
 * words their authors wrote, and job titles, tool names and course names stay
 * as they are used professionally. Anything the overlay omits — or sets to
 * `null` — falls back to English, so a half-written translation still renders
 * a complete page. Arrays merge element-wise by index.
 */
function merge<T>(base: T, overlay: unknown): T {
  if (overlay == null) return base;
  if (Array.isArray(base)) {
    if (!Array.isArray(overlay)) return base;
    // Same length: positional overlay, so an entry can translate one field and
    // leave the rest (or be `null` to keep English). Different length: the
    // overlay replaces the list outright.
    if (overlay.length !== base.length) return overlay as T;
    return base.map((item, i) => merge(item, overlay[i])) as T;
  }
  if (typeof base === "object" && base !== null) {
    if (typeof overlay !== "object" || Array.isArray(overlay)) return base;
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const [key, value] of Object.entries(overlay as Record<string, unknown>)) {
      if (key in out) out[key] = merge(out[key], value);
    }
    return out as T;
  }
  return (typeof overlay === typeof base ? overlay : base) as T;
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: Content;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale: (next) => {
        setLocaleState(next);
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch {
          /* nothing to persist to — the state above is what matters */
        }
      },
      content: locale === "es" ? merge(EN, ES_OVERLAY) : EN,
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

function useLocaleContext() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}

/** The active locale plus the setter behind the header's language menu. */
export function useLocale() {
  const { locale, setLocale } = useLocaleContext();
  return { locale, setLocale };
}

/** All site copy, already resolved for the active locale. */
export function useContent(): Content {
  return useLocaleContext().content;
}
