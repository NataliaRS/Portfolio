# Portfolio — Natalia Rodríguez Salas

The portfolio site, built end to end on the **VIU Design System**. Every colour,
space, radius, type step, icon and component comes from `@viu/design-tokens` and
`@viu/ui`; the site itself only composes them.

Source of truth for the design: the Figma file
[Portafolio Natalia Agosto](https://www.figma.com/design/kSdtE08zZKAXp6Qx5vaXF3/Portafolio-Natalia-Agosto?node-id=76-1609)
(page `Paginas`, node `76:1609`).

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build into dist/
npm run preview
```

## Pages

| Route | Figma frame |
|---|---|
| `/` | `Home` 76:1610 |
| `/work` | `Work` 76:2180 |
| `/about` | `About` 76:1884 |
| `/leadership` | `Leadership` 2154:206 |
| `/fun` | — (no Figma frame: built in code, see below) |
| `/case/:slug` | `Ejemplo Case studie` 76:2540 |

## How it is put together

```
src/
  content/*.json    English copy, generated 1:1 from the Figma text nodes
  content/es/*.json Spanish overlay — only the keys that change
  content/index.ts  typed accessors for that copy
  i18n.tsx          locale state, the EN↔ES merge, useContent()
  components/       header, footer and the shared section blocks
  pages/            one file per Figma frame
  styles/app.css    layout only — colour/space/type come from tokens
  assets/logos.tsx  client wordmarks, exported from Figma as SVG
```

**Edit the copy in `src/content/*.json`, not in the components.** The JSON was
generated from the Figma nodes so the two never drift; bold runs inside the
About bullets are stored as `{ t, b }` text runs, exactly as Figma styles them.

### Fun — the penalty game

`/fun` is the one page with no Figma frame behind it. It holds a penalty
shootout against a keeper who is meant to be hard to beat:

- **`PenaltySprites.tsx`** draws her and the ball as pixel art — character maps
  rendered to SVG `<rect>`s, so every colour is a CSS custom property and
  nothing has to be re-exported to change her kit.
- **`PenaltyGame.tsx`** holds the model. Everything that decides a shot lives in
  the `KEEPER` and `STRIKE` constants at the top of the file: how far she
  reaches, how much a read is worth, how much a perfect strike buys you. She
  keeps a session-length memory of where you have shot and spends it on her next
  guess, so a player who favours one corner finds her there. Across a session
  she keeps out roughly two of every three shots on target.
- The scoreboard lives in `sessionStorage`, so it survives moving around the
  site and resets with the tab.
- With `prefers-reduced-motion`, the timing bar does not sweep and the strike is
  played out instead. The keeper is exactly as hard either way.

### Languages

The `emoji_language` icon in the header opens a menu (system `Popover` +
`Menu` + `MenuItem`) that switches the whole site between English and Spanish.
The choice persists and sets `<html lang>`.

English is the source; `src/content/es/*.json` is an **overlay that only carries
what changes**, merged over English at runtime. Anything it omits — or sets to
`null` — falls back to English, so a half-written translation still renders a
complete page. Arrays merge by index when the lengths match, and replace the
list outright when they don't.

Three things stay in English on purpose:

- **Testimonials**, because they are verbatim quotes from the people who wrote
  them; translating them would put words in their mouths.
- **Job titles** (`Senior Manager, UX & Design (Web UX) · Elastic`), which are
  used in their original form on a Spanish CV too.
- **Tool and course names**, which are proper nouns.

The Spanish long-form copy is a faithful first draft — it is Natalia's voice to
refine, and editing the JSON is all it takes.

### Design system rules this repo follows

- Colour comes only from semantic tokens (`--color-bg-*`, `--color-text-*`,
  `--color-border-*`). No hex values anywhere.
- Spacing, radius, motion, icon size and type are tokens too. The only raw
  numbers left are the Figma canvas geometry (content width, card widths), and
  they are centralised as `--page-*` custom properties at the top of `app.css`.
- Type is bound with the system classes (`viu-type-display-s`,
  `viu-type-title-s`…), the same steps the Figma text styles use — never a
  hardcoded `font-size`.
- Dark is the default (black-first); the Light/Dark switch in the top bar sets
  `data-theme` and remembers the choice.
- `prefers-reduced-motion` is respected, the layout has no horizontal scroll at
  390px, and every icon-only control has an accessible name.
- The icon-only header buttons are wrapped in the system `Tooltip`, so hovering
  or tabbing to one names it (and shows the address or number behind it)
  instead of leaving the glyph to be guessed. The labels live in
  `site.json` under `nav.iconLabels` and translate with the rest.

### Vendored design system

`@viu/ui` and `@viu/design-tokens` are private packages from
[NataliaRS/Viu](https://github.com/NataliaRS/Viu), so their **built** output is
vendored here under `vendor/` and wired up as `file:` dependencies. Never edit
anything under `vendor/` by hand — refresh it from a local checkout instead:

```bash
node scripts/sync-viu.mjs ../Viu     # rebuilds and re-copies the build
npm run build                        # verify
```

### Contact details

Email, WhatsApp and the social links live once in `site.json` under `contact`;
the header icons and the footer column both read from there.

### Portfolio concierge

The docked panel in the bottom-right corner answers questions about Natalia's
work. It does **not** generate text: `src/concierge/match.ts` scores the
visitor's phrasing against the entries in
[`src/content/concierge.json`](src/content/concierge.json) and renders the
answer written there, or the `noMatch` line when nothing scores high enough.
No model, no backend, no API key — which is also why it can never invent a
claim about her work, exactly as the footnote under the input promises.

To teach it something new, add an entry:

```jsonc
{
  "id": "unique-id",
  "question": "The question, as a suggestion button would word it",
  "keywords": ["phrases", "a visitor might", "actually type"],
  "answer": "What the concierge says back."
}
```

Then add the same entry, in the same position, to
`src/content/es/concierge.json` (the i18n overlay merges arrays by index), and
add a phrasing for it to `CASES` in `scripts/check-concierge.mjs`. Longer
keyword phrases score higher than single words, so prefer `"design system"`
over `"design"`. `npm run check:concierge` — which `npm run build` also runs —
fails if the two languages fall out of step, a suggestion points at a missing
entry, or a question stops routing where it should.

### Images

The Figma file ships several bands as labelled placeholders. Those slots render
the same placeholder surface here until the asset exists — see
[`public/images/README.md`](public/images/README.md) for the file names.

## Known divergences from the Figma file

These are deliberate and worth a decision:

1. **Type steps scale up on desktop.** The Figma frames are authored with the
   *Mobile* step of the VIU type scale (hero title 36px, section titles 28px).
   The system's type scale is responsive, so at ≥1024px the same tokens render
   one step larger (hero title 45px) and the hero headline wraps to three lines
   instead of two. The site uses the tokens, not the pixel values — flipping the
   Figma frames to the Desktop mode would make the two identical.
2. **The Work frame's case list.** In Figma, `Work` still carries four unedited
   duplicates of the Elastic card, while the case-study page lists the five real
   cases (VIU · AI Ops · Elastic · VMware · Palo Alto). The site ships the real
   five.
3. **Lead recommendation quote.** Figma sets it at 24px Google Sans, which is
   not a step in the type scale; the site uses `body-xl` (the nearest token) and
   renders it with the `Quote` component, which draws a left accent bar that the
   Figma instance does not show — a Figma↔code parity gap in the design system
   itself, not something to patch here.

## Deploy

`vite.config.ts` builds with `base: "/Portfolio/"` for a GitHub Pages project
site. For a root domain, build with `VITE_BASE=/ npm run build`.
