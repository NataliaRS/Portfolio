import { type InputHTMLAttributes } from "react";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Error state — maps to Figma `State=Error`. */
    error?: boolean;
}
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
