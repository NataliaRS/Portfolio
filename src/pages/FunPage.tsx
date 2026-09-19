import { useContent } from "../i18n";
import { PenaltyGame } from "../components/PenaltyGame";
import { Container, Section } from "../components/primitives";

/**
 * Fun — the one page on the site with nothing to prove.
 *
 * Same grid, same type scale and same tokens as the rest of the portfolio;
 * the only thing that changes is what is allowed to live inside them. Right
 * now that is one penalty shootout against a keeper who reads your patterns.
 */
export function FunPage() {
  const { fun } = useContent();
  const { hero, game, note } = fun;

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
        <div className="fun-game">
          <div className="fun-game__brief">
            <p className="case-block__eyebrow">{game.eyebrow}</p>
            <h2 className="fun-game__title viu-type-display-m">{game.title}</h2>
            <p className="fun-game__body viu-type-body-l">{game.body}</p>
            <ol className="fun-game__steps">
              {game.steps.map((step, i) => (
                <li key={step} className="fun-game__step viu-type-body-m">
                  <span className="fun-game__step-num viu-type-label-s">{`0${i + 1}`}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <PenaltyGame />
        </div>
      </Section>

      <Section>
        <aside className="proof-box">
          <p className="proof-box__eyebrow viu-type-label-s">{note.eyebrow}</p>
          <p className="proof-box__body viu-type-body-l">{note.body}</p>
        </aside>
      </Section>
    </>
  );
}
