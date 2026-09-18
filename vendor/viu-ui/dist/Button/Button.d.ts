import { type ButtonHTMLAttributes, type ReactNode } from "react";
export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "sm" | "md" | "lg";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual emphasis. Maps to Figma `Variant`. */
    variant?: ButtonVariant;
    /** Control height/type scale. Maps to Figma `Size` (MD/SM/LG). */
    size?: ButtonSize;
    /** Icon before the label (typically a 16px `<Icon />`). */
    leadingIcon?: ReactNode;
    /** Icon after the label. */
    trailingIcon?: ReactNode;
}
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
