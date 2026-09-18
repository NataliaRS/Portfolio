export type Theme = "dark" | "light";

const STORAGE_KEY = "viu-portfolio-theme";

/** Black-first: dark is the default, light is the opt-in. */
export function readStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* private mode / blocked storage — fall through to the default */
  }
  return "dark";
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* nothing to persist to — the attribute above is what matters */
  }
}
