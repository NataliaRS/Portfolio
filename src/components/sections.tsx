import { useNavigate } from "react-router-dom";
import { Avatar, Button, Link, Quote } from "@viu/ui";

import type { CaseSummary, Home, Stat } from "../content";
import { AeropostLogo, ElasticLogo, PaloAltoLogo, VMwareLogo } from "../assets/logos";
import { Container, Media, Section } from "./primitives";

/** The five KPI tiles under the hero (Figma `Cards grid`). */
export function Stats({ items }: { items: Stat[] }) {
  return (
    <Section rule={false}>
      <div className="stats">
        {items.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span className="stat-card__value viu-type-headline-l">{stat.value}</span>
            <span className="stat-card__label viu-type-body-xl">{stat.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

/** Client proof band — a de-emphasised grey strip on `bg/elevated`. */
export function LogoStrip({ title }: { title: string }) {
  return (
    <section className="logos">
      <Container>
        <p className="logos__title viu-type-label-s">{title}</p>
        <div className="logos__strip">
          <ElasticLogo />
          <PaloAltoLogo />
          <VMwareLogo />
          <AeropostLogo />
        </div>
      </Container>
    </section>
  );
}

export function Recommendations({ data }: { data: Home["recommendations"] }) {
  return (
    <Section id="recommendations">
      <h2 className="section-title viu-type-headline-m">{data.title}</h2>

      <div className="rec-lead">
        <Quote className="viu-type-body-xl">{data.lead.quote}</Quote>
        <div className="rec-person">
          <Avatar size="md" initials={data.lead.initials} />
          <span>
            <span className="rec-person__name viu-type-title-s">{data.lead.name}</span>
            <span className="rec-person__role">{data.lead.role}</span>
          </span>
        </div>
      </div>

      <div className="rec-grid">
        {data.cards.map((card) => (
          <figure key={card.name} className="rec-card">
            <blockquote className="rec-card__quote viu-type-body-m">{card.quote}</blockquote>
            <figcaption className="rec-person">
              <Avatar size="sm" initials={initialsOf(card.name)} />
              <span>
                <span className="rec-person__name viu-type-title-s">{card.name}</span>
                <span className="rec-person__role">{card.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <Link href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        {data.link}
      </Link>
    </Section>
  );
}

function initialsOf(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

/** One case row: copy panel on the left, product shot on the right. */
export function CaseRow({ item }: { item: CaseSummary }) {
  const navigate = useNavigate();
  return (
    <article className="case-row">
      <div className="case-row__panel">
        <div>
          <p className="viu-type-label-s" style={{ color: "var(--color-text-brand)" }}>
            {item.eyebrow}
          </p>
          <h3 className="case-row__title viu-type-display-s">{item.title}</h3>
          <Button variant="secondary" size="sm" onClick={() => navigate(`/case/${item.slug}`)}>
            {item.cta}
          </Button>
        </div>

        <div className="case-row__points">
          {item.points.map((point) => (
            <div key={point.title}>
              <span className="case-point__title viu-type-title-s">{point.title}</span>
              <span className="case-point__body">{point.body}</span>
            </div>
          ))}
        </div>
      </div>

      <Media className="case-row__media" src={`case-${item.slug}.png`} alt={`${item.title} — product shot`} />
    </article>
  );
}

export function GeneralWork({ data }: { data: Home["generalWork"] }) {
  return (
    <Section id="general-work">
      <h2 className="section-title viu-type-headline-m" style={{ marginBottom: "var(--space-lg)" }}>
        {data.title}
      </h2>
      <div className="work-grid">
        {data.items.map((label) => (
          <a key={label} className="work-card" href="https://www.behance.net/" target="_blank" rel="noreferrer">
            {label}
          </a>
        ))}
      </div>
      <Link href="https://www.behance.net/" target="_blank" rel="noreferrer">
        {data.link}
      </Link>
    </Section>
  );
}
