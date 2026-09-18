import { Link as RouterLink } from "react-router-dom";
import { Button, Icon } from "@viu/ui";

import { site } from "../content";
import { Container } from "./primitives";

const HREFS: Record<string, string> = {
  Home: "/",
  Work: "/work",
  About: "/about",
  Leadership: "/about",
  Fun: "/work",
  Email: "mailto:hello@nataliars.com",
  WhatsApp: "https://wa.me/",
  LinkedIn: "https://www.linkedin.com/",
};

function FooterLink({ label }: { label: string }) {
  const href = HREFS[label] ?? "#";
  if (href.startsWith("/")) return <RouterLink to={href}>{label}</RouterLink>;
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}

export function SiteFooter() {
  const { footer } = site;
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

            {footer.columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="site-footer__col-title">{column.title}</h2>
                <ul className="site-footer__list">
                  {column.items.map((item) => (
                    <li key={item}>
                      <FooterLink label={item} />
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
