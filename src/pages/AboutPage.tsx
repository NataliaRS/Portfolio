import { Button, Icon, Tag } from "@viu/ui";

import { useContent } from "../i18n";
import { Container, Media, RichText, Section } from "../components/primitives";
import { CaseRow, GeneralWork, LogoStrip, Recommendations, Stats } from "../components/sections";

export function AboutPage() {
  const { about, cases, home } = useContent();
  return (
    <>
      <hr className="rule" />

      <section>
        <Container>
          <div className="about-hero">
            <Media
              className="about-hero__portrait"
              src="natalia.png"
              alt="Portrait of Natalia Rodríguez Salas"
            />
            <div>
              <p className="eyebrow viu-type-label-s">{about.hero.eyebrow}</p>
              <h1 className="about-hero__title viu-type-display-s">{about.hero.title}</h1>
              <p className="about-hero__body viu-type-body-l">{about.hero.body}</p>
              <Button variant="primary" size="sm" trailingIcon={<Icon glyph="download" />}>
                {about.hero.cta}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <hr className="rule" />
      <Stats items={about.stats} />
      <LogoStrip title={about.logosTitle} />

      <Section id="experience">
        <h2 className="section-title viu-type-headline-m">{about.headings.experience}</h2>

        <div className="roles" style={{ marginTop: "var(--space-2xl)" }}>
          {about.roles.map((role) => (
            <article key={role.title} className="role">
              <div className="role__rail">
                <span
                  className="role__avatar viu-type-label-s"
                  aria-hidden
                >
                  {role.initials}
                </span>
              </div>
              <div>
                <p className="role__period">{role.period}</p>
                <h3 className="role__title viu-type-title-s">{role.title}</h3>
                <p className="role__summary">{role.summary}</p>
                <div className="role__bullets">
                  {role.bullets.map((runs, i) => (
                    <p key={i} className="role__bullet">
                      <span>
                        <RichText runs={runs} />
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="subsection">
          <h3 className="subsection__title viu-type-title-s">{about.headings.education}</h3>
          <div className="lines">
            {about.education.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="subsection">
          <h3 className="subsection__title viu-type-title-s">{about.headings.skills}</h3>
          <div className="skills-columns">
            {[about.skills.slice(0, 3), about.skills.slice(3)].map((column, i) => (
              <div key={i}>
                {column.map((group) => (
                  <div key={group.label} className="skill-group">
                    <span className="skill-group__label">{group.label}</span>
                    <div className="chips">
                      {group.items.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="subsection" id="languages">
          <h3 className="subsection__title viu-type-title-s">{about.headings.languages}</h3>
          <div className="lines">
            {about.languages.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="subsection">
          <h3 className="subsection__title viu-type-title-s">{about.headings.certifications}</h3>
          <div className="lines">
            {about.certifications.map((entry) => (
              <p key={entry.category}>
                <span className="cert__category viu-type-body-l">{entry.category}</span>
                {" — "}
                {entry.body}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Recommendations data={home.recommendations} />

      <Section id="cases">
        <div className="section-head">
          <h2 className="section-title viu-type-headline-m">{home.cases.title}</h2>
        </div>
        {cases.list.slice(0, 2).map((item) => (
          <CaseRow key={item.slug} item={item} />
        ))}
      </Section>

      <GeneralWork data={home.generalWork} />
    </>
  );
}
