import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@viu/ui";

import { useContent } from "../i18n";
import { BallSprite, KeeperSprite } from "./PenaltySprites";

/* ------------------------------------------------------------- geometry -- */

/**
 * The goal mouth, in percentages of the pitch box. The aim grid, the ball's
 * flight and the keeper's dive all derive from this one rectangle, so none of
 * them can drift away from the posts.
 */
const MOUTH = { left: 9, top: 14, right: 91, bottom: 68 };
/** The penalty spot. */
const SPOT = { x: 50, y: 92 };
/** Her feet, a step off the line. */
const LINE_Y = MOUTH.bottom + 3;

const zoneX = (col: number) => MOUTH.left + ((col + 0.5) * (MOUTH.right - MOUTH.left)) / 3;
const zoneY = (row: number) => MOUTH.top + ((row + 0.5) * (MOUTH.bottom - MOUTH.top)) / 3;

/* --------------------------------------------------------------- keeper -- */

/**
 * She is meant to be hard to beat, and three rules make her that way.
 *
 *  1. Reach — go the right way and she almost always gets there. A dive
 *     covers a whole side of the goal, so guessing the side matters much more
 *     than guessing the height.
 *  2. Memory — `read` is the chance she takes your column outright, and it
 *     climbs with how lopsided your shots have been. Spread them around and it
 *     sits near the floor; hammer one corner and she is waiting there two
 *     times in three.
 *  3. Punishment — a scuffed strike is saved even when she goes the wrong way.
 *
 * What beats her is a perfect strike into a top corner she has not read —
 * which is also where the timing window is narrowest. That is the whole game:
 * across a session she keeps out roughly two of every three shots on target,
 * and more than that from anyone who keeps picking the same corner.
 */
const KEEPER = {
  readFloor: 0.45,
  readCeiling: 0.88,
  /** Save chance when she goes exactly where the ball goes. */
  reach: 0.93,
  /** How fast that falls away with distance. */
  decay: 0.35,
  /** Getting the height wrong costs less than getting the side wrong. */
  rowWeight: 0.35,
  /** Shots above her hands are harder to claw back. */
  aboveHands: 0.8,
  /** Called the zone outright: set and waiting, not stretching. */
  set: 1.25,
};

/** What the strike itself is worth, as a multiplier on her save chance. */
const STRIKE = { perfect: 0.85, clean: 1.0, loose: 1.45 } as const;
type Strike = keyof typeof STRIKE;

/** One end-to-end pass of the timing marker. */
const SWEEP_MS = 1150;
const FLIGHT_MS = 420;
/* Long enough to read what she did to your shot before it resets. */
const SETTLE_MS = 2600;

/**
 * Half-width of the on-target window, in the 0–1 space of `offset` below.
 * The tighter the corner, the less room there is to be wrong.
 */
function aimWindow(zone: number) {
  const col = zone % 3;
  const row = Math.floor(zone / 3);
  const difficulty = (col === 1 ? 0 : 1) + (row === 0 ? 1 : row === 2 ? 0.5 : 0);
  return 0.54 - 0.13 * difficulty;
}

function pick(weights: number[]) {
  const total = weights.reduce((sum, w) => sum + w, 0);
  let roll = Math.random() * total;
  for (let i = 0; i < weights.length; i += 1) {
    roll -= weights[i];
    if (roll <= 0) return i;
  }
  return weights.length - 1;
}

/** Where she goes — her column read, plus the height you have favoured. */
function keeperGuess(zone: number, history: number[]) {
  const col = zone % 3;
  const cols = [0, 0, 0];
  const rows = [0, 0, 0];
  history.forEach((z) => {
    cols[z % 3] += 1;
    rows[Math.floor(z / 3)] += 1;
  });
  const share = history.length ? cols[col] / history.length : 1 / 3;
  const read = KEEPER.readFloor + (KEEPER.readCeiling - KEEPER.readFloor) * share;
  // +1 smoothing: with an empty board she is guessing evenly, not predictably.
  const guessCol = Math.random() < read ? col : pick(cols.map((n) => n + 1));
  const guessRow = pick(rows.map((n) => n + 1));
  return guessRow * 3 + guessCol;
}

type Outcome = "goal" | "save" | "wide";

interface Shot {
  zone: number;
  guess: number;
  outcome: Outcome;
  strike: Strike;
  /** Which line of commentary this shot earned. */
  note: "read" | "reach" | "weak" | "perfect" | "wrongWay" | "beaten" | "over" | "post";
}

/** `marker` is the 0–1 position of the timing bar when the shot was struck. */
function resolve(zone: number, marker: number, history: number[]): Shot {
  const col = zone % 3;
  const row = Math.floor(zone / 3);
  const guess = keeperGuess(zone, history);
  const guessCol = guess % 3;
  const guessRow = Math.floor(guess / 3);

  // 0 in the middle of the bar, 1 at either end.
  const offset = Math.abs(marker - 0.5) * 2;
  const limit = aimWindow(zone);
  if (offset > limit) {
    return {
      zone,
      guess,
      outcome: "wide",
      strike: "loose",
      note: row === 0 || col === 1 ? "over" : "post",
    };
  }

  const strike: Strike =
    offset <= limit * 0.22 ? "perfect" : offset <= limit * 0.6 ? "clean" : "loose";

  const distance = Math.abs(guessCol - col) + KEEPER.rowWeight * Math.abs(guessRow - row);
  let save = KEEPER.reach * Math.exp(-KEEPER.decay * distance) * STRIKE[strike];
  if (row === 0) save *= KEEPER.aboveHands;
  if (guess === zone) save *= KEEPER.set;
  const saved = Math.random() < Math.min(0.99, Math.max(0.02, save));

  if (saved) {
    return {
      zone,
      guess,
      outcome: "save",
      strike,
      note: strike === "loose" ? "weak" : guess === zone ? "read" : "reach",
    };
  }
  return {
    zone,
    guess,
    outcome: "goal",
    strike,
    note: strike === "perfect" ? "perfect" : guessCol === col ? "beaten" : "wrongWay",
  };
}

/* ------------------------------------------------------------ scoreboard -- */

interface Board {
  goals: number;
  saves: number;
  wide: number;
  /** Recent shots, newest last — this is her memory of you. */
  history: number[];
}

const EMPTY: Board = { goals: 0, saves: 0, wide: 0, history: [] };
const STORAGE_KEY = "viu-portfolio-penalty";
/** She reads the session, not your whole life. */
const MEMORY = 24;

function readBoard(): Board {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw) as Partial<Board>;
      return {
        goals: Number(saved.goals) || 0,
        saves: Number(saved.saves) || 0,
        wide: Number(saved.wide) || 0,
        history: Array.isArray(saved.history)
          ? saved.history.filter((z) => Number.isInteger(z) && z >= 0 && z < 9).slice(-MEMORY)
          : [],
      };
    }
  } catch {
    /* private mode, or something else under the key — start the session fresh */
  }
  return EMPTY;
}

/* ------------------------------------------------------------------ game -- */

type Phase = "aim" | "charge" | "flight" | "result";

const fill = (template: string, values: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);

export function PenaltyGame() {
  const { game } = useContent().fun;
  const copy = game.commentary;

  const [board, setBoard] = useState<Board>(readBoard);
  const [phase, setPhase] = useState<Phase>("aim");
  const [zone, setZone] = useState<number | null>(null);
  const [shot, setShot] = useState<Shot | null>(null);
  const [line, setLine] = useState<string>(copy.ready);
  const [reduced, setReduced] = useState(false);

  const markerRef = useRef<HTMLDivElement | null>(null);
  const shootRef = useRef<HTMLButtonElement | null>(null);
  const positionRef = useRef(0.5);
  const timers = useRef<number[]>([]);

  const later = useCallback((fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  }, []);

  /** Drop anything still pending, so an eager next shot is not undone by it. */
  const clearPending = useCallback(() => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
  }, []);

  useEffect(
    () => () => {
      timers.current.forEach(window.clearTimeout);
    },
    [],
  );

  /* The status line is copy, so it has to follow the language menu. */
  useEffect(() => {
    if (phase === "aim" && !shot) setLine(copy.ready);
  }, [copy.ready, phase, shot]);

  /* Someone who asked for less motion gets no sweeping bar to chase. */
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  /* The timing marker: a ref and a transform, not sixty renders a second. */
  useEffect(() => {
    if (phase !== "charge" || reduced) return undefined;
    let start: number | null = null;
    let frame = 0;
    const step = (now: number) => {
      if (start === null) start = now;
      const elapsed = (now - start) % (SWEEP_MS * 2);
      const position = elapsed < SWEEP_MS ? elapsed / SWEEP_MS : 2 - elapsed / SWEEP_MS;
      positionRef.current = position;
      if (markerRef.current) markerRef.current.style.left = `${position * 100}%`;
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [phase, reduced]);

  const aim = useCallback(
    (next: number) => {
      if (phase === "flight") return;
      /* Aiming again before the last shot has settled cancels the settling,
         not the new aim. */
      clearPending();
      setShot(null);
      setZone(next);
      setPhase("charge");
      setLine(copy.charging);
      /* Picking a corner hands the keyboard straight to the strike, so the
         loop is: number, Space, number, Space. */
      shootRef.current?.focus();
    },
    [clearPending, copy.charging, phase],
  );

  const shoot = useCallback(() => {
    if (zone === null || phase !== "charge") return;
    /* Reduced motion plays the strike instead: mostly clean, sometimes not. */
    const marker = reduced
      ? 0.5 + (Math.random() < 0.5 ? -1 : 1) * (Math.random() ** 2 * 0.45)
      : positionRef.current;
    const result = resolve(zone, marker, board.history);

    setShot(result);
    setPhase("flight");
    later(() => {
      setPhase("result");
      setLine(
        result.outcome === "save"
          ? copy.save[result.note as keyof typeof copy.save]
          : result.outcome === "goal"
            ? copy.goal[result.note as keyof typeof copy.goal]
            : copy.wide[result.note as keyof typeof copy.wide],
      );
      setBoard((prev) => ({
        ...prev,
        history: [...prev.history, result.zone].slice(-MEMORY),
        goals: prev.goals + (result.outcome === "goal" ? 1 : 0),
        saves: prev.saves + (result.outcome === "save" ? 1 : 0),
        wide: prev.wide + (result.outcome === "wide" ? 1 : 0),
      }));
    }, FLIGHT_MS);

    later(() => {
      setPhase("aim");
      setZone(null);
      setShot(null);
    }, FLIGHT_MS + SETTLE_MS);
  }, [board.history, copy, later, phase, reduced, zone]);

  const reset = useCallback(() => {
    setBoard(EMPTY);
    setLine(copy.ready);
  }, [copy.ready]);

  /* The board is the session: it outlives a trip to another page, and dies
     with the tab. */
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(board));
    } catch {
      /* private mode — the board on screen is what matters */
    }
  }, [board]);

  /* Keyboard: 1–9 picks a zone, Space or Enter strikes. */
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target?.isContentEditable) return;
      if (phase === "charge" && (event.key === " " || event.key === "Enter")) {
        // A focused button already turns Space and Enter into a click.
        if (tag === "BUTTON") return;
        event.preventDefault();
        shoot();
        return;
      }
      const digit = Number(event.key);
      if (digit >= 1 && digit <= 9 && phase !== "flight") {
        event.preventDefault();
        aim(digit - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [aim, phase, shoot]);

  /* ------------------------------------------------------------- render -- */

  const limit = zone === null ? null : aimWindow(zone);
  const flying = shot !== null && (phase === "flight" || phase === "result");

  const keeper = useMemo(() => {
    if (!flying || !shot) {
      return { style: { left: "50%", top: `${LINE_Y}%` }, dive: false, flip: false };
    }
    const col = shot.guess % 3;
    const row = Math.floor(shot.guess / 3);
    const to = { x: zoneX(col), y: zoneY(row) };
    if (col === 1) {
      /* Nothing to dive at, so she goes up for it or drops onto it. */
      const lift = row === 0 ? 12 : row === 1 ? 4 : 0;
      const squash = row === 2 ? " scaleY(0.84)" : "";
      return {
        style: {
          left: "50%",
          top: `${LINE_Y - lift}%`,
          transform: `translate(-50%, -100%)${squash}`,
        },
        dive: false,
        flip: false,
      };
    }
    const flip = col === 0;
    const direction = flip ? -1 : 1;
    const tilt = row === 0 ? -24 : row === 2 ? 12 : -4;
    return {
      style: {
        left: `${50 + (to.x - 50) * 0.62}%`,
        top: `${LINE_Y - (LINE_Y - to.y) * 0.55}%`,
        transform: `translate(-50%, -50%) rotate(${direction * tilt}deg)`,
      },
      dive: true,
      flip,
    };
  }, [flying, shot]);

  const ball = useMemo(() => {
    if (!flying || !shot) return { x: SPOT.x, y: SPOT.y, size: 1 };
    const col = shot.zone % 3;
    const row = Math.floor(shot.zone / 3);
    if (shot.outcome === "wide") {
      return shot.note === "over"
        ? { x: zoneX(col), y: MOUTH.top - 11, size: 0.72 }
        : { x: col === 0 ? MOUTH.left - 8 : MOUTH.right + 8, y: zoneY(row), size: 0.72 };
    }
    if (shot.outcome === "save") {
      const glove = { x: zoneX(shot.guess % 3), y: zoneY(Math.floor(shot.guess / 3)) };
      const contact = { x: (zoneX(col) + glove.x) / 2, y: (zoneY(row) + glove.y) / 2 };
      /* Once she has it, the ball is pushed away from goal, not into it. */
      return phase === "result"
        ? { x: contact.x + (contact.x < 50 ? -13 : 13), y: LINE_Y + 8, size: 0.95 }
        : { ...contact, size: 0.78 };
    }
    return { x: zoneX(col), y: zoneY(row), size: 0.75 };
  }, [flying, phase, shot]);

  const onTarget = board.goals + board.saves;
  const rate = onTarget ? Math.round((board.saves / onTarget) * 100) : 0;
  const shots = onTarget + board.wide;

  return (
    <div className="penalty">
      <div className="penalty__pitch">
        <Goal />

        <div
          className={`penalty__keeper${keeper.dive ? " penalty__keeper--dive" : ""}`}
          style={keeper.style}
        >
          <KeeperSprite pose={keeper.dive ? "dive" : "ready"} flip={keeper.flip} />
        </div>

        <div
          className="penalty__ball"
          style={{ left: `${ball.x}%`, top: `${ball.y}%`, width: `${ball.size * 5.2}%` }}
        >
          <BallSprite />
        </div>

        <div
          className="penalty__zones"
          style={{
            left: `${MOUTH.left}%`,
            top: `${MOUTH.top}%`,
            width: `${MOUTH.right - MOUTH.left}%`,
            height: `${MOUTH.bottom - MOUTH.top}%`,
          }}
          role="group"
          aria-label={game.aimLabel}
        >
          {game.zones.map((label, index) => (
            <button
              key={label}
              type="button"
              className="penalty__zone"
              aria-label={`${index + 1}. ${label}`}
              aria-pressed={zone === index}
              disabled={phase === "flight"}
              onClick={() => aim(index)}
            >
              <span aria-hidden="true">{index + 1}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="penalty__controls">
        <div className="penalty__timing">
          <span className="penalty__timing-label viu-type-label-s">{game.timingLabel}</span>
          <div className="penalty__track">
            {limit !== null ? (
              <div
                className="penalty__window"
                style={{ left: `${(0.5 - limit / 2) * 100}%`, width: `${limit * 100}%` }}
              />
            ) : null}
            {limit !== null && !reduced ? (
              <div className="penalty__marker" ref={markerRef} style={{ left: "50%" }} />
            ) : null}
          </div>
        </div>

        {/* `aria-disabled`, not `disabled`: a disabled button drops focus, and
            this one is where the keyboard lives between shots. */}
        <Button
          ref={shootRef}
          variant="primary"
          size="md"
          aria-disabled={phase !== "charge"}
          onClick={shoot}
          className="penalty__shoot"
        >
          {game.shoot}
        </Button>
      </div>

      <div className="penalty__say">
        <p className="penalty__status viu-type-body-l" role="status" aria-live="polite">
          {line}
        </p>
        <p className="penalty__hint viu-type-body-s">
          {phase === "charge" && !reduced ? game.shootHint : game.aimHint}
          {reduced ? ` ${game.reducedMotion}` : ""}
        </p>
      </div>

      <div className="penalty__board">
        <div className="penalty__score">
          <span className="penalty__score-value viu-type-display-s">{board.saves}</span>
          <span className="penalty__score-label viu-type-label-s">{game.score.saves}</span>
        </div>
        <div className="penalty__score penalty__score--you">
          <span className="penalty__score-value viu-type-display-s">{board.goals}</span>
          <span className="penalty__score-label viu-type-label-s">{game.score.goals}</span>
        </div>
        <div className="penalty__score">
          <span className="penalty__score-value viu-type-display-s">{board.wide}</span>
          <span className="penalty__score-label viu-type-label-s">{game.score.wide}</span>
        </div>
      </div>

      <div className="penalty__summary">
        <p className="penalty__rate viu-type-body-m">
          {onTarget
            ? fill(game.score.rate, { pct: `${rate}%`, shots: String(shots) })
            : game.score.empty}
        </p>
        {shots ? (
          <Button variant="tertiary" size="sm" onClick={reset}>
            {game.score.reset}
          </Button>
        ) : null}
      </div>
    </div>
  );
}

/** Posts, bar and net, drawn to the same rectangle the aim grid uses. */
function Goal() {
  const { left, top, right, bottom } = MOUTH;
  const verticals = [];
  const horizontals = [];
  for (let x = left + 3.5; x < right; x += 3.5) verticals.push(x);
  for (let y = top + 3.5; y < bottom; y += 3.5) horizontals.push(y);
  return (
    <svg
      className="penalty__goal"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect className="penalty__grass" x={0} y={bottom} width={100} height={100 - bottom} />
      <g className="penalty__net">
        {verticals.map((x) => <line key={`v${x}`} x1={x} y1={top} x2={x} y2={bottom} />)}
        {horizontals.map((y) => <line key={`h${y}`} x1={left} y1={y} x2={right} y2={y} />)}
      </g>
      <g className="penalty__frame">
        <line x1={left} y1={top} x2={right} y2={top} />
        <line x1={left} y1={top} x2={left} y2={bottom} />
        <line x1={right} y1={top} x2={right} y2={bottom} />
      </g>
      <line className="penalty__line" x1={0} y1={bottom} x2={100} y2={bottom} />
    </svg>
  );
}
