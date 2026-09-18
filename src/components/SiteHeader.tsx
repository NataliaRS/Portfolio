import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Avatar, Button, Icon, IconButton, Switch } from "@viu/ui";

import { useContent } from "../i18n";
import { applyTheme, readStoredTheme, type Theme } from "../theme";
import { LanguageMenu } from "./LanguageMenu";
import { Container } from "./primitives";

/** Figma's nav labels are positional; these are the routes behind them. */
const ROUTES = ["/work", "/about", "/about", "/work"];

/** Only the canonical label of a route gets the underline, not every alias. */
const ACTIVE_INDEX: Record<string, number> = { "/work": 0, "/about": 2 };

export function SiteHeader({ disclaimer }: { disclaimer?: string }) {
  const { site } = useContent();
  const [theme, setTheme] = useState<Theme>(readStoredTheme);
  const { pathname } = useLocation();
  const activeIndex = ACTIVE_INDEX[pathname];

  const toggle = (checked: boolean) => {
    const next: Theme = checked ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
  };

  const { contact } = site;

  return (
    <header className="site-header">
      <div className="theme-bar">
        <Container>
          <div className="theme-bar__inner">
            <span>{site.nav.themeLabels.light}</span>
            <Switch
              checked={theme === "dark"}
              onCheckedChange={toggle}
              aria-label={site.nav.themeLabels.dark}
            />
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
            {site.nav.links.map((label, i) => (
              <RouterLink
                key={label}
                to={ROUTES[i] ?? "/"}
                className="site-nav__link"
                aria-current={i === activeIndex ? "page" : undefined}
              >
                {label}
              </RouterLink>
            ))}
          </nav>

          <div className="site-header__actions">
            <Button variant="primary" size="sm" trailingIcon={<Icon glyph="star" />}>
              {site.nav.cta}
            </Button>
            <IconButton
              variant="secondary"
              aria-label={`Email: ${contact.email}`}
              icon={<Icon glyph="stacked_email" />}
              onClick={() => {
                window.location.href = `mailto:${contact.email}`;
              }}
            />
            <IconButton
              variant="secondary"
              aria-label={`WhatsApp: ${contact.whatsapp}`}
              icon={<Icon glyph="chat_bubble" />}
              onClick={() => window.open(`https://wa.me/${contact.whatsappNumber}`, "_blank", "noopener")}
            />
            <IconButton
              variant="secondary"
              aria-label="LinkedIn"
              icon={<Icon glyph="account_circle" />}
              onClick={() => window.open(contact.linkedin, "_blank", "noopener")}
            />
            <LanguageMenu />
          </div>
        </div>
      </Container>

      {disclaimer ? <p className="disclaimer-bar">{disclaimer}</p> : null}
    </header>
  );
}
