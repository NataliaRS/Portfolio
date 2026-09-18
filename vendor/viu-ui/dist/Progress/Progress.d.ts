import { type HTMLAttributes } from "react";
export type ProgressSize = "sm" | "md" | "lg";
export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
    /** 0–max. Ignored when `indeterminate`. */
    value?: number;
    max?: number;
    size?: ProgressSize;
    indeterminate?: boolean;
    /** Accessible label. */
    label?: string;
}
export declare const Progress: import("react").ForwardRefExoticComponent<ProgressProps & import("react").RefAttributes<HTMLDivElement>>;
