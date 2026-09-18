import { type HTMLAttributes, type ReactNode } from "react";
export type CardSurface = "elevated" | "outlined" | "filled";
/** Media on top (`Arriba`), beside (`Lateral`) or at the bottom (`Abajo`). */
export type CardOrientation = "vertical" | "horizontal" | "media-bottom";
/** Title size — any heading step of the system type scale (title → headline → display → oversize). */
export type CardTitleSize = "title-s" | "title-m" | "title-l" | "headline-s" | "headline-m" | "headline-l" | "display-s" | "display-m" | "display-l" | "oversize-s" | "oversize-m" | "oversize-l";
export interface CardAuthor {
    name: ReactNode;
    /** Secondary line (date · reading time…). */
    meta?: ReactNode;
    /** Avatar element (e.g. `<Avatar initials="NR" />`). */
    avatar?: ReactNode;
}
export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    surface?: CardSurface;
    orientation?: CardOrientation;
    /** Persistent selected state (brand-2 surface + border). */
    selected?: boolean;
    disabled?: boolean;
    /** Makes the whole card operable (pointer + keyboard). */
    interactive?: boolean;
    /** Media slot (e.g. an `<Image>`). */
    media?: ReactNode;
    /** Floating badge over the top-right corner. */
    badge?: ReactNode;
    /** Top accent bar (Barra). */
    accent?: boolean;
    /** Decoupled icon box (48×48) at the top of the content. */
    icon?: ReactNode;
    /** Tags row (e.g. several `<Tag>`). */
    tags?: ReactNode;
    /** Kicker above the title (CATEGORÍA). */
    eyebrow?: ReactNode;
    title?: ReactNode;
    /** Title type-scale step (defaults to `title-s`). */
    titleSize?: CardTitleSize;
    subtitle?: ReactNode;
    /** Header action, aligned right of the eyebrow (e.g. an icon / IconButton). */
    action?: ReactNode;
    /** Body copy. */
    body?: ReactNode;
    /** Inline link ("Leer más"). */
    link?: ReactNode;
    /** Footer buttons (0, 1 or 2). */
    primaryAction?: ReactNode;
    secondaryAction?: ReactNode;
    /** Author block at the foot, after a divider. */
    author?: CardAuthor;
    /** Escape hatch — extra content rendered in the body area. */
    children?: ReactNode;
}
export declare const Card: import("react").ForwardRefExoticComponent<CardProps & import("react").RefAttributes<HTMLDivElement>>;
