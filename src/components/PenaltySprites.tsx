import type { ReactElement } from "react";

/**
 * Pixel art for the penalty game.
 *
 * Every sprite is a small character map: one letter per pixel, one string per
 * row. It renders as SVG `<rect>`s rather than an image file, which buys three
 * things the design system cares about — it stays crisp at any size, it costs
 * no network request, and every colour is a CSS custom property, so the keeper
 * re-themes with the rest of the site instead of being a baked-in PNG.
 */

/** Palette keys, resolved in `app.css` under `.penalty`. */
const PALETTE: Record<string, string> = {
  h: "var(--keeper-hair)",
  s: "var(--keeper-skin)",
  d: "var(--keeper-ink)",
  k: "var(--keeper-kit)",
  w: "var(--keeper-trim)",
  g: "var(--keeper-glove)",
  b: "var(--keeper-boot)",
  c: "var(--keeper-badge)",
  o: "var(--ball-body)",
};

/** On her line: knees bent, gloves up, ponytail out to one side. */
const READY = [
  ".....................",
  "........hhhhh........",
  ".......hhhhhhhh......",
  "......hhhsssshhhh....",
  "......hhssssshhhhh...",
  "......hsdssdsshhhhh..",
  "......hsssssshhhhh...",
  ".ggg...ssssss..hhh...",
  ".ggg....sss......ggg.",
  "..kkwkkkkkkkkkkkwkk..",
  "......kwwkkkwwk......",
  "......kkkkckkkk......",
  "......kkkkkkkkk......",
  "......kkkkkkkkk......",
  ".......kkkkkkk.......",
  "......kkkk.kkkk......",
  ".....kkk.....kkk.....",
  ".....sss.....sss.....",
  "....sss.......sss....",
  "....kkk.......kkk....",
  "....kwk.......kwk....",
  "...bbbb.......bbbb...",
];

/**
 * Full stretch, glove leading, drawn facing right — a dive to the other side
 * is the same art mirrored, so there is only ever one pose to keep in sync.
 */
const DIVE = [
  "..........kkkkkkkkggg",
  ".......hhhhkkkkkkkggg",
  "....hhhhhhhssssskkggg",
  "...hhhhhhhssdssskk...",
  "..kkkkkkkkksssssk....",
  ".kkkkwkkkkkkkksss....",
  ".kkkkkkkkkkkkk.......",
  "..ssssskkkkkk........",
  ".sssss...............",
  "kkww.................",
  "bbbb.................",
];

const BALL = [
  "..ooo..",
  ".ooooo.",
  "ooodooo",
  "oodddoo",
  "ooodooo",
  ".ooooo.",
  "..ooo..",
];

export type KeeperPose = "ready" | "dive";

/** Horizontal runs of one colour collapse into a single rect. */
function pixels(art: string[]): ReactElement[] {
  const out: ReactElement[] = [];
  art.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      let run = 1;
      while (x + run < row.length && row[x + run] === ch) run += 1;
      if (ch !== ".") {
        out.push(
          <rect key={`${x}-${y}`} x={x} y={y} width={run} height={1} fill={PALETTE[ch]} />,
        );
      }
      x += run;
    }
  });
  return out;
}

function PixelArt({ art, flip }: { art: string[]; flip?: boolean }) {
  return (
    <svg
      viewBox={`0 0 ${art[0].length} ${art.length}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      {pixels(art)}
    </svg>
  );
}

/** `flip` mirrors the dive so she can go to either side. */
export function KeeperSprite({ pose, flip }: { pose: KeeperPose; flip?: boolean }) {
  return <PixelArt art={pose === "dive" ? DIVE : READY} flip={flip} />;
}

export function BallSprite() {
  return <PixelArt art={BALL} />;
}
