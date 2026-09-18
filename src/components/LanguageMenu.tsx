import { useState } from "react";
import { Icon, IconButton, Menu, MenuItem, Popover } from "@viu/ui";

import { LOCALES, useLocale } from "../i18n";

/**
 * Language switcher — the `emoji_language` icon in the Figma header
 * (`Quick Contact Icons`, node 2119:1510). Composed from the system's
 * Popover + Menu + MenuItem, so the selected state, the focus trap, Esc and
 * click-outside all come from the design system rather than being re-built.
 */
export function LanguageMenu() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const current = LOCALES.find((l) => l.value === locale)!;

  return (
    <Popover
      className="language-menu"
      open={open}
      onOpenChange={setOpen}
      trigger={
        <IconButton
          variant="secondary"
          aria-label={`Language: ${current.label}`}
          aria-haspopup="menu"
          aria-expanded={open}
          icon={<Icon glyph="emoji_language" />}
        />
      }
    >
      <Menu aria-label="Language">
        {LOCALES.map((option) => (
          <MenuItem
            key={option.value}
            lang={option.value}
            selected={option.value === locale}
            onClick={() => {
              setLocale(option.value);
              setOpen(false);
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </Popover>
  );
}
