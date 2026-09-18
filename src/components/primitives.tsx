import { useState, type ReactNode } from "react";
import type { Run } from "../content";

/** Page gutter + 1180px content column, as in the Figma 1440 frame. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className ? `container ${className}` : "container"}>{children}</div>;
}

/** A page band: 96px of vertical air, optionally hairline-separated. */
export function Section({
  id,
  children,
  rule = true,
  className,
}: {
  id?: string;
  children: ReactNode;
  /** The design separates every band with a 1px `border/subtle` rule. */
  rule?: boolean;
  className?: string;
}) {
  return (
    <>
      {rule ? <hr className="rule" /> : null}
      <section id={id} className={className ? `section ${className}` : "section"}>
        <Container>{children}</Container>
      </section>
    </>
  );
}

/** Renders Figma's mixed-weight text runs without dangerouslySetInnerHTML. */
export function RichText({ runs }: { runs: Run[] }) {
  return (
    <>
      {runs.map((run, i) => (run.b ? <b key={i}>{run.t}</b> : <span key={i}>{run.t}</span>))}
    </>
  );
}

/**
 * Image slot. The Figma file ships several bands as labelled placeholders
 * ("drop project visuals here"); until the real asset lands in
 * `public/images/`, we render that same placeholder surface instead of a
 * broken image. Drop the file in and it takes over with no code change.
 */
export function Media({
  src,
  alt,
  className,
  placeholder,
}: {
  src?: string;
  alt: string;
  className?: string;
  placeholder?: ReactNode;
}) {
  const [missing, setMissing] = useState(false);
  if (!src || missing) return <div className={className}>{placeholder}</div>;
  return (
    <div className={className}>
      <img
        src={`${import.meta.env.BASE_URL}images/${src}`}
        alt={alt}
        loading="lazy"
        onError={() => setMissing(true)}
      />
    </div>
  );
}
