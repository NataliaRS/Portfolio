import { type HTMLAttributes } from "react";
export type SpinnerSize = "sm" | "md" | "lg";
export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
    size?: SpinnerSize;
    /** Accessible label. Defaults to "Cargando". */
    label?: string;
}
export declare const Spinner: import("react").ForwardRefExoticComponent<SpinnerProps & import("react").RefAttributes<HTMLSpanElement>>;
