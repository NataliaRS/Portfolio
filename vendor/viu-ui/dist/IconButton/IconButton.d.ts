import { type ButtonHTMLAttributes, type ReactNode } from "react";
export type IconButtonVariant = "primary" | "secondary" | "tertiary";
export type IconButtonSize = "sm" | "md" | "lg";
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: IconButtonVariant;
    size?: IconButtonSize;
    /** The icon to render (e.g. <Icon glyph="Plus" />). Sized automatically. */
    icon: ReactNode;
    /** Required: icon-only buttons must have an accessible name. */
    "aria-label": string;
}
export declare const IconButton: import("react").ForwardRefExoticComponent<IconButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
