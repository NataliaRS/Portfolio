import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Drawer, Icon, IconButton, SegmentedControl } from "@viu/ui";

import { LOCALES, useContent, useLocale } from "../i18n";

/**
 * The header's nav and action row are hidden below 768px — there is no room
 * for four links, a button and four icon buttons on a phone. This is where
 * they go instead: one hamburger, one drawer, everything reachable.
 *
 * Built on the system's `Drawer`, so the focus trap, scroll lock, Esc and
 * scrim dismissal come from `@viu/ui` rather than being re-implemented here.
 */
export function MobileMenu({
  routes,
  activeIndex,
}: {
  routes: string[];
  activeIndex: number | undefined;
}) {
  const { site } = useContent();
  const { locale, setLocale } = useLocale();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { contact } = site;
  const icons = site.nav.iconLabels;

  // A drawer that survives a resize into desktop would trap focus in a panel
  // the layout no longer shows.
  useEffect(() => {
    if (!open) return;
    const query = window.matchMedia("(min-width: 768px)");
    const close = () => setOpen(false);
    if (query.matches) close();
    query.addEventListener("change", close);
    return () => query.removeEventListener("change", close);
  }, [open]);

  const go = (to: string) => {
    setOpen(false);
    navigate(to);
  };

  return (
    <>
      <IconButton
        className="site-header__menu"
        variant="secondary"
        aria-label={icons.menu}
        aria-expanded={open}
        icon={<Icon glyph="menu" />}
        onClick={() => setOpen(true)}
      />

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        side="right"
        title={icons.menu}
        closeLabel={icons.close}
      >
        <nav className="mobile-menu__nav" aria-label={icons.menu}>
          {site.nav.links.map((label, i) => (
            <button
              key={label}
              type="button"
              className="mobile-menu__link viu-type-title-s"
              aria-current={i === activeIndex ? "page" : undefined}
              onClick={() => go(routes[i] ?? "/")}
            >
              {label}
            </button>
          ))}
        </nav>

        <Button
          className="mobile-menu__cta"
          variant="primary"
          trailingIcon={<Icon glyph="download" />}
        >
          {site.nav.cta}
        </Button>

        <div className="mobile-menu__contacts">
          <Button
            variant="secondary"
            leadingIcon={<Icon glyph="stacked_email" />}
            onClick={() => {
              window.location.href = `mailto:${contact.email}`;
            }}
          >
            {contact.email}
          </Button>
          <Button
            variant="secondary"
            leadingIcon={<Icon glyph="chat_bubble" />}
            onClick={() =>
              window.open(`https://wa.me/${contact.whatsappNumber}`, "_blank", "noopener")
            }
          >
            {contact.whatsapp}
          </Button>
          <Button
            variant="secondary"
            leadingIcon={<Icon glyph="account_circle" />}
            onClick={() => window.open(contact.linkedin, "_blank", "noopener")}
          >
            {icons.linkedin}
          </Button>
        </div>

        {/* A Popover inside a Drawer would mean two focus traps; on a sheet
            this wide the two locales fit side by side anyway. */}
        <div className="mobile-menu__locale">
          <p className="mobile-menu__locale-label viu-type-label-s">{icons.language}</p>
          <SegmentedControl
            options={LOCALES.map((option) => ({ value: option.value, label: option.label }))}
            value={locale}
            onValueChange={(value) => setLocale(value as (typeof LOCALES)[number]["value"])}
          />
        </div>
      </Drawer>
    </>
  );
}
