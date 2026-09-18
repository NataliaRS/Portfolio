import { type HTMLAttributes } from "react";
export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
    /** Optional centered label (horizontal only). */
    label?: string;
}
export declare const Divider: import("react").ForwardRefExoticComponent<DividerProps & import("react").RefAttributes<HTMLDivElement>>;
