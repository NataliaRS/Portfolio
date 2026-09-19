import { Link as RouterLink } from "react-router-dom";
import { Button, Icon } from "@viu/ui";

import { useContent } from "../i18n";
import { Container } from "./primitives";

/**
 * Footer link targets, by column and position — the labels are translated, so
 * they cannot be the lookup key.
 */
const ROUTES = [
  ["/", "/work", "/about", "/leadership", "/fun"],
  ["email", "whatsapp", "linkedin"],
];

export function SiteFooter() {
  const { site } = useContent();
  const { footer, contact } = site;

  const externalHref = (key: string) =>
    key === "email"
      ? `mailto:${contact.email}`
      : key === "whatsapp"
        ? `https://wa.me/${contact.whatsappNumber}`
        : contact.linkedin;

  return (
    <>
      <hr className="rule" />
      <footer className="site-footer">
        <Container>
          <div className="site-footer__top">
            <div>
              <p className="site-footer__brand">{footer.name}</p>
              <p className="site-footer__blurb">{footer.blurb}</p>
            </div>

            {footer.columns.map((column, col) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="site-footer__col-title">{column.title}</h2>
                <ul className="site-footer__list">
                  {column.items.map((item, i) => (
                    <li key={item}>
                      {col === 0 ? (
                        <RouterLink to={ROUTES[0][i] ?? "/"}>{item}</RouterLink>
                      ) : (
                        <a
                          href={externalHref(ROUTES[1][i])}
                          target={ROUTES[1][i] === "email" ? undefined : "_blank"}
                          rel="noreferrer"
                        >
                          {item}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="site-footer__resume">
              <span className="site-footer__resume-eyebrow viu-type-label-s">
                {footer.resume.eyebrow}
              </span>
              <span className="site-footer__resume-title viu-type-body-m">
                {footer.resume.title}
              </span>
              <Button variant="secondary" leadingIcon={<Icon glyph="download" />}>
                {footer.resume.cta}
              </Button>
            </div>
          </div>

          <div className="site-footer__legal">
            <p>{footer.copyright}</p>
            <p>{footer.legal}</p>
          </div>
        </Container>
      </footer>
    </>
  );
}
