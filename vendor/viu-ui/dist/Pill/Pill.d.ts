import { type ButtonHTMLAttributes } from "react";
export interface PillProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Selected (active filter) state — maps to Figma `State=Selected`. */
    selected?: boolean;
}
export declare const Pill: import("react").ForwardRefExoticComponent<PillProps & import("react").RefAttributes<HTMLButtonElement>>;
