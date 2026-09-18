import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Avatar, Button, Icon, IconButton, Switch } from "@viu/ui";

import { site } from "../content";
import { applyTheme, readStoredTheme, type Theme } from "../theme";
import { Container } from "./primitives";

/** Figma's nav labels mapped to the routes that exist today. */
const ROUTES: Record<string, string> = {
  Work: "/work",
  Leadership: "/about",
  About: "/about",
  Fun: "/work",
};

/** Quick-contact icons, 1:1 with the Figma header frame `Quick Contact Icons`. */
const QUICK_CONTACT = [
  { glyph: "stacked_email", label: "Email", href: "mailto:hello@nataliars.com" },
  { glyph: "chat_bubble", label: "WhatsApp", href: "https://wa.me/" },
  { glyph: "account_circle", label: "LinkedIn", href: "https://www.linkedin.com/" },
  { glyph: "emoji_language", label: "Languages", href: "/about#languages" },
];

/** Only the canonical label of a route gets the underline, not every alias. */
const ACTIVE_LABEL: Record<string, string> = { "/work": "Work", "/about": "About" };

export function SiteHeader({ disclaimer }: { disclaimer?: string }) {
  const [theme, setTheme] = useState<Theme>(readStoredTheme);
  const { pathname } = useLocation();
  const active = ACTIVE_LABEL[pathname];

  const toggle = (checked: boolean) => {
    const next: Theme = checked ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
  };

  return (
    <header className="site-header">
      <div className="theme-bar">
        <Container>
          <div className="theme-bar__inner">
            <span>{site.nav.themeLabels.light}</span>
            <Switch checked={theme === "dark"} onCheckedChange={toggle} aria-label="Dark theme" />
            <span>{site.nav.themeLabels.dark}</span>
          </div>
        </Container>
      </div>

      <Container>
        <div className="site-header__bar">
          <RouterLink to="/" className="site-header__brand">
            <Avatar size="sm" initials="NR" />
            {site.nav.name}
          </RouterLink>

          <nav className="site-nav" aria-label="Main">
            {site.nav.links.map((label) => (
              <RouterLink
                key={label}
                to={ROUTES[label] ?? "/"}
                className="site-nav__link"
                aria-current={label === active ? "page" : undefined}
              >
                {label}
              </RouterLink>
            ))}
          </nav>

          <div className="site-header__actions">
            <Button variant="primary" size="sm" trailingIcon={<Icon glyph="star" />}>
              {site.nav.cta}
            </Button>
            {QUICK_CONTACT.map((item) => (
              <IconButton
                key={item.label}
                variant="secondary"
                aria-label={item.label}
                icon={<Icon glyph={item.glyph} />}
                onClick={() => window.open(item.href, "_blank", "noopener")}
              />
            ))}
          </div>
        </div>
      </Container>

      {disclaimer ? <p className="disclaimer-bar">{disclaimer}</p> : null}
    </header>
  );
}
