import { type HTMLAttributes, type ReactNode } from "react";
export type BadgeTone = "neutral" | "brand" | "success" | "warning" | "danger" | "info";
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: BadgeTone;
    /**
     * Ícono leading (antes del label). `true` = glifo por defecto `sell` (Figma
     * prop `Icono#1024:0`); también acepta un `<Icon />` propio. El color hereda
     * del texto del tono (`on-soft`).
     */
    icon?: boolean | ReactNode;
}
export declare const Badge: import("react").ForwardRefExoticComponent<BadgeProps & import("react").RefAttributes<HTMLSpanElement>>;
