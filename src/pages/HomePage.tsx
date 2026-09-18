import { useNavigate } from "react-router-dom";
import { Button, Link } from "@viu/ui";

import { home } from "../content";
import { Container, Media, Section } from "../components/primitives";
import { CaseRow, GeneralWork, LogoStrip, Recommendations, Stats } from "../components/sections";

export function HomePage() {
  const navigate = useNavigate();
  const { hero, cases } = home;

  return (
    <>
      <hr className="rule" />

      <section className="hero-band">
        <Container>
          <div className="hero">
            <div>
              <p className="eyebrow viu-type-label-s">{hero.eyebrow}</p>
              <h1 className="hero__title viu-type-display-s">{hero.title}</h1>
              <p className="hero__body viu-type-body-l">{hero.body}</p>
              <div className="hero__actions">
                <Button variant="primary" onClick={() => navigate("/work")}>
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

      <hr className="rule" />
      <Stats items={home.stats} />
      <LogoStrip title={home.logosTitle} />
      <Recommendations data={home.recommendations} />

      <Section id="cases">
        <div className="section-head">
          <h2 className="section-title viu-type-headline-m">{cases.title}</h2>
          <Link href="/work" onClick={(event) => { event.preventDefault(); navigate("/work"); }}>
            {cases.link}
          </Link>
        </div>
        {cases.items.map((item) => (
          <CaseRow key={item.slug} item={item} />
        ))}
      </Section>

      <GeneralWork data={home.generalWork} />
    </>
  );
}
