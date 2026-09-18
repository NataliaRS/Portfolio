import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, IconButton, Icon, Link, Tag } from "@viu/ui";

import type { CaseStudy } from "../content";
import { useContent } from "../i18n";
import { Container, Media, Section } from "../components/primitives";
import { CaseRow, GeneralWork } from "../components/sections";

/**
 * The article's blocks, in the order they read. The side nav is built from
 * this, so the menu can never disagree with the page — which is exactly what
 * had happened when the two lived in separate lists.
 */
const BLOCKS = [
  "context",
  "role",
  "frame",
  "approach",
  "evidence",
  "outcomes",
  "gallery",
  "reflection",
  "next",
] as const;

/** Section heading: "04 — Strategic frame" plus the short crimson rule. */
function BlockHead({ block }: { block: { num: string; label: string; title?: string } }) {
  return (
    <>
      <p className="case-block__eyebrow">
        {block.num} — {block.label}
      </p>
      {block.title ? (
        <h2 className="case-block__title viu-type-display-m">{block.title}</h2>
      ) : null}
    </>
  );
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="case-block__prose">
      {paragraphs.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}

function Gallery({ block }: { block: CaseStudy["gallery"] }) {
  const [slide, setSlide] = useState(0);
  const move = (delta: number) => setSlide((s) => (s + delta + block.slides) % block.slides);

  return (
    <section id={`block-${block.num}`}>
      <BlockHead block={block} />
      <div className="carousel">
        <Media
          className="carousel__stage"
          src={`case-viu-slide-${slide + 1}.png`}
          alt={`Slide ${slide + 1} of ${block.slides}`}
          placeholder={<span>{block.slideHint.replace("SLIDE 1", `SLIDE ${slide + 1}`)}</span>}
        />
        <div className="carousel__controls">
          <IconButton
            variant="tertiary"
            size="sm"
            aria-label="Previous slide"
            icon={<Icon glyph="arrow_back" />}
            onClick={() => move(-1)}
          />
          <div className="carousel__dots">
            {Array.from({ length: block.slides }, (_, i) => (
              <button
                key={i}
                type="button"
                className="carousel__dot"
                aria-current={i === slide}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
          <IconButton
            variant="tertiary"
            size="sm"
            aria-label="Next slide"
            icon={<Icon glyph="arrow_forward" />}
            onClick={() => move(1)}
          />
        </div>
      </div>
      <p className="note">{block.note}</p>
    </section>
  );
}

export function CaseStudyPage() {
  const navigate = useNavigate();
  const { cases, home } = useContent();
  const { slug } = useParams();
  const study = cases.study;
  const others = cases.list.filter((item) => item.slug !== slug);

  return (
    <>
      <hr className="rule" />

      <Container>
        <div className="case-layout">
          <nav className="case-nav" aria-label="On this page">
            {BLOCKS.map((key) => (
              <a key={key} className="case-nav__item" href={`#block-${study[key].num}`}>
                <span className="case-nav__num">{study[key].num}</span>
                {study[key].label}
              </a>
            ))}
          </nav>

          <article className="case-article">
            <header id="block-01">
              <p className="case-study__eyebrow">{study.hero.eyebrow}</p>
              <h1 className="case-study__title viu-type-oversize-l">{study.hero.title}</h1>
              <div className="case-study__tags">
                {study.hero.tags.map((tag, i) => (
                  <Tag key={tag} tone={i === 0 ? "brand" : "neutral"}>
                    {tag}
                  </Tag>
                ))}
              </div>

              <div className="accent-box">
                <span className="accent-box__value viu-type-oversize-s">{study.hero.accent.value}</span>
                <span className="accent-box__note">{study.hero.accent.note}</span>
              </div>

              <div className="two-up">
                {study.hero.gallery.map((figure) => (
                  <figure key={figure.image}>
                    <Media className="figure__frame" src={figure.image} alt={figure.caption} />
                    <figcaption className="figure__caption">{figure.caption}</figcaption>
                    {figure.link ? (
                      <Link href="https://nataliars.github.io/Viu/" target="_blank" rel="noreferrer">
                        {figure.link}
                      </Link>
                    ) : null}
                  </figure>
                ))}
              </div>
            </header>

            <section id={`block-${study.context.num}`}>
              <BlockHead block={study.context} />
              <Prose paragraphs={study.context.paragraphs} />
            </section>

            <section id={`block-${study.role.num}`}>
              <BlockHead block={study.role} />
              <div className="role-table">
                {study.role.rows.map((row) => (
                  <div key={row.label} className="role-table__row">
                    <span className="role-table__label">{row.label}</span>
                    <span className="role-table__body">{row.body}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id={`block-${study.frame.num}`}>
              <BlockHead block={study.frame} />
              <Prose paragraphs={study.frame.paragraphs} />
            </section>

            <section id={`block-${study.approach.num}`}>
              <BlockHead block={study.approach} />
              <div className="moves">
                {study.approach.moves.map((move) => (
                  <div key={move.title}>
                    <span className="move__title viu-type-title-m">{move.title}</span>
                    <span className="move__body">{move.body}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id={`block-${study.evidence.num}`}>
              <BlockHead block={study.evidence} />
              <p className="note">{study.evidence.lead}</p>
              <div className="evidence">
                {study.evidence.items.map((item) => (
                  <p key={item} className="evidence__item">
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </section>

            <section id={`block-${study.outcomes.num}`}>
              <BlockHead block={study.outcomes} />
              <div className="outcomes">
                {study.outcomes.items.map((outcome) => (
                  <div key={outcome.label} className="outcome">
                    <span className="outcome__value viu-type-oversize-s">{outcome.value}</span>
                    <span className="outcome__label">{outcome.label}</span>
                    <span className="outcome__body">{outcome.body}</span>
                  </div>
                ))}
              </div>
              <p className="note">{study.outcomes.note}</p>
            </section>

            <Gallery block={study.gallery} />

            <section id={`block-${study.reflection.num}`}>
              <BlockHead block={study.reflection} />
              <p className="quote-box">{study.reflection.body}</p>
            </section>

            <section id={`block-${study.next.num}`}>
              <BlockHead block={{ num: study.next.num, label: study.next.label }} />
              <a
                className="next-case"
                href="/work"
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/work");
                }}
              >
                <span>
                  <span className="next-case__title viu-type-display-m">{study.next.title}</span>
                  <span className="next-case__body">{study.next.body}</span>
                </span>
                <Icon glyph="arrow_forward" size={24} />
              </a>
            </section>
          </article>
        </div>
      </Container>

      <Section id="cases">
        <div className="section-head">
          <h2 className="section-title viu-type-headline-m">{home.cases.title}</h2>
          <Button variant="tertiary" size="sm" onClick={() => navigate("/work")}>
            {home.cases.link}
          </Button>
        </div>
        {others.map((item) => (
          <CaseRow key={item.slug} item={item} />
        ))}
      </Section>

      <GeneralWork data={home.generalWork} />
    </>
  );
}
