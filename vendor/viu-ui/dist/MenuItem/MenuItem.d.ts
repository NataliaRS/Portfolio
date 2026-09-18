import { type ButtonHTMLAttributes, type ReactNode } from "react";
export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode;
    /** Keyboard shortcut hint shown on the right (e.g. "⌘K"). */
    shortcut?: ReactNode;
    /**
     * Estado "Seleccionado" (Figma): fondo `bg/brand-subtle` (rojo) + check a la
     * derecha (`text/brand`). El fondo seleccionado gana sobre el hover.
     */
    selected?: boolean;
    children: ReactNode;
}
export declare const MenuItem: import("react").ForwardRefExoticComponent<MenuItemProps & import("react").RefAttributes<HTMLButtonElement>>;
