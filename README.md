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
| `/case/:slug` | `Ejemplo Case studie` 76:2540 |

## How it is put together

```
src/
  content/*.json   all copy, generated 1:1 from the Figma text nodes
  content/index.ts typed accessors for that copy
  components/      header, footer and the shared section blocks
  pages/           one file per Figma frame
  styles/app.css   layout only — colour/space/type come from tokens
  assets/logos.tsx client wordmarks, exported from Figma as SVG
```

**Edit the copy in `src/content/*.json`, not in the components.** The JSON was
generated from the Figma nodes so the two never drift; bold runs inside the
About bullets are stored as `{ t, b }` text runs, exactly as Figma styles them.

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

### Vendored design system

`@viu/ui` and `@viu/design-tokens` are private packages from
[NataliaRS/Viu](https://github.com/NataliaRS/Viu), so their **built** output is
vendored here under `vendor/` and wired up as `file:` dependencies. Never edit
anything under `vendor/` by hand — refresh it from a local checkout instead:

```bash
node scripts/sync-viu.mjs ../Viu     # rebuilds and re-copies the build
npm run build                        # verify
```

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
