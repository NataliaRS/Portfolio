import { useContent } from "../i18n";
import { Container, Section } from "../components/primitives";

/**
 * Leadership — Figma frame `Leadership` 2154:206.
 *
 * Structurally the simplest page in the site: a hero, five numbered
 * principles separated by nothing but air, and a closing statement whose
 * proof sits in an accented box.
 */
export function LeadershipPage() {
  const { leadership } = useContent();
  const { hero, principles, closing } = leadership;

  return (
    <>
      <hr className="rule" />

      <section className="lead-hero">
        <Container>
          <p className="case-block__eyebrow">{hero.eyebrow}</p>
          <h1 className="lead-hero__title viu-type-oversize-l">{hero.title}</h1>
          <p className="lead-hero__body viu-type-body-xl">{hero.body}</p>
        </Container>
      </section>

      <Section>
        <div className="principles">
          {principles.map((principle) => (
            <article key={principle.eyebrow} className="principle">
              <h2 className="case-block__eyebrow">{principle.eyebrow}</h2>
              <p className="principle__body viu-type-body-xl">{principle.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="section-title viu-type-display-m">{closing.title}</h2>
        <p className="closing__body viu-type-body-xl">{closing.body}</p>

        <aside className="proof-box">
          <p className="proof-box__eyebrow viu-type-label-s">{closing.proof.eyebrow}</p>
          <p className="proof-box__body viu-type-body-l">{closing.proof.body}</p>
        </aside>
      </Section>
    </>
  );
}
