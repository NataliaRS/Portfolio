import { useNavigate } from "react-router-dom";
import { Button } from "@viu/ui";

import { cases, home } from "../content";
import { Container, Media, Section } from "../components/primitives";
import { CaseRow, GeneralWork } from "../components/sections";

/**
 * Work = the same hero as Home, then the full case-study list.
 *
 * Note on fidelity: the Work frame in Figma still carries four unedited
 * duplicates of the Elastic card, while the case-study page lists the five
 * real cases (VIU · AI Ops · Elastic · VMware · Palo Alto). We ship the real
 * five — the duplicates are unfinished artwork, not a design decision.
 */
export function WorkPage() {
  const navigate = useNavigate();
  const { hero } = home;

  return (
    <>
      <hr className="rule" />

      <section>
        <Container>
          <div className="hero">
            <div>
              <p className="eyebrow viu-type-label-s">{hero.eyebrow}</p>
              <h1 className="hero__title viu-type-display-s">{hero.title}</h1>
              <p className="hero__body viu-type-body-l">{hero.body}</p>
              <div className="hero__actions">
                <Button variant="primary" onClick={() => navigate("/case/viu")}>
                  {hero.primaryCta}
                </Button>
                <Button variant="secondary" onClick={() => navigate("/about")}>
                  {hero.secondaryCta}
                </Button>
              </div>
            </div>

            <figure className="hero__figure">
              <Media className="hero__figure-media" src={hero.figureImage} alt={hero.figureCaption} />
              <figcaption className="hero__caption">{hero.figureCaption}</figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <Section id="cases">
        <div className="section-head">
          <h2 className="section-title viu-type-headline-m">{home.cases.title}</h2>
        </div>
        {cases.list.map((item) => (
          <CaseRow key={item.slug} item={item} />
        ))}
      </Section>

      <GeneralWork data={home.generalWork} />
    </>
  );
}
