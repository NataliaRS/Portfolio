import { type ButtonHTMLAttributes, type ReactNode } from "react";
export type TabVariant = "line" | "segmented";
export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Selected state — maps to Figma `Estado=Activo`. */
    active?: boolean;
    variant?: TabVariant;
    /** Ícono leading (Figma `Icono`). Típicamente un `<Icon />` @xs. */
    icon?: ReactNode;
    /**
     * Ícono trailing (Figma `Icono fin`, default off). Para tabs cerrables:
     * `<Icon glyph="close" />`. Decorativo salvo que el nodo pasado sea interactivo.
     */
    trailingIcon?: ReactNode;
}
export declare const Tab: import("react").ForwardRefExoticComponent<TabProps & import("react").RefAttributes<HTMLButtonElement>>;
