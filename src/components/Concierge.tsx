import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Button, Icon, IconButton, Input } from "@viu/ui";

import { findAnswer } from "../concierge/match";
import { useContent, useLocale } from "../i18n";
import type { ConciergeEntry } from "../content";

interface Turn {
  id: number;
  role: "visitor" | "concierge";
  text: string;
  /** True when this is the `noMatch` line, so it can read differently. */
  unanswered?: boolean;
}

/**
 * Portfolio concierge — a docked panel in the bottom-right corner that answers
 * questions about Natalia's work.
 *
 * Every answer is read verbatim out of `src/content/concierge.json`; nothing
 * is generated. When a question has no entry, it says so instead of guessing,
 * which is exactly what the footnote under the input promises.
 */
export function Concierge() {
  const { concierge } = useContent();
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]);

  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);
  const titleId = useId();

  // The transcript is written in whichever language was on screen at the time,
  // so switching languages mid-conversation would leave a mix that no longer
  // matches the panel around it. Clearing is the honest reset.
  useEffect(() => {
    setTurns([]);
    setDraft("");
  }, [locale]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    else launcherRef.current?.focus();
  }, [open]);

  // Esc closes from anywhere inside the panel; the launcher takes focus back.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Keep the newest turn in view without yanking the whole page around.
  useEffect(() => {
    const el = transcriptRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [turns]);

  const respond = useCallback(
    (question: string, entry?: ConciergeEntry) => {
      const asked = question.trim();
      if (!asked) return;
      const match = entry ?? findAnswer(asked, concierge.entries);
      setTurns((prev) => [
        ...prev,
        { id: nextId.current++, role: "visitor", text: asked },
        {
          id: nextId.current++,
          role: "concierge",
          text: match ? match.answer : concierge.noMatch,
          unanswered: !match,
        },
      ]);
      setDraft("");
    },
    [concierge],
  );

  // The starters are the way in, so they show before the first question — and
  // again right after an unanswered one, which is the moment the `noMatch`
  // line points at them ("try one of the questions below").
  const lastTurn = turns[turns.length - 1];
  const showStarters = turns.length === 0 || lastTurn?.unanswered === true;
  const starters = showStarters
    ? concierge.suggestions
        .map((id) => concierge.entries.find((entry) => entry.id === id))
        .filter((entry): entry is ConciergeEntry => entry != null)
    : [];

  return (
    <div className="concierge">
      {open ? (
        <div
          ref={panelRef}
          className="concierge__panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
        >
          <div className="concierge__header">
            <p className="concierge__title viu-type-title-s" id={titleId}>
              <span className="concierge__dot" aria-hidden="true" />
              {concierge.title}
            </p>
            <IconButton
              variant="secondary"
              size="sm"
              aria-label={concierge.labels.close}
              icon={<Icon glyph="Close" />}
              onClick={() => setOpen(false)}
            />
          </div>

          <div
            className="concierge__transcript"
            ref={transcriptRef}
            role="log"
            aria-live="polite"
            aria-label={concierge.labels.transcript}
          >
            <p className="concierge__bubble concierge__bubble--concierge viu-type-body-m">
              {concierge.intro}
            </p>
            {turns.map((turn) => (
              <p
                key={turn.id}
                className={
                  turn.role === "visitor"
                    ? "concierge__bubble concierge__bubble--visitor viu-type-body-m"
                    : "concierge__bubble concierge__bubble--concierge viu-type-body-m"
                }
              >
                <span className="concierge__speaker">
                  {turn.role === "visitor" ? concierge.labels.you : concierge.labels.concierge}:{" "}
                </span>
                {turn.text}
              </p>
            ))}
          </div>

          {starters.length > 0 ? (
            <ul className="concierge__starters" aria-label={concierge.labels.suggestions}>
              {starters.map((entry) => (
                <li key={entry.id}>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => respond(entry.question, entry)}
                  >
                    {entry.question}
                  </Button>
                </li>
              ))}
            </ul>
          ) : null}

          <form
            className="concierge__form"
            onSubmit={(event) => {
              event.preventDefault();
              respond(draft);
            }}
          >
            <Input
              ref={inputRef}
              className="concierge__input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder={concierge.placeholder}
              aria-label={concierge.placeholder}
            />
            <IconButton
              type="submit"
              aria-label={concierge.labels.send}
              icon={<Icon glyph="send" />}
              disabled={draft.trim().length === 0}
            />
          </form>

          <p className="concierge__footnote viu-type-body-s">{concierge.footnote}</p>
        </div>
      ) : null}

      <button
        ref={launcherRef}
        type="button"
        className="concierge__launcher viu-type-label-m"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="concierge__dot" aria-hidden="true" />
        {concierge.launcher}
      </button>
    </div>
  );
}
