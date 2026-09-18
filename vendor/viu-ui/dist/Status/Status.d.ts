import { type HTMLAttributes } from "react";
export type StatusKind = "online" | "busy" | "away" | "offline";
export interface StatusProps extends HTMLAttributes<HTMLSpanElement> {
    status?: StatusKind;
    /** Show a text label next to the dot. Pass a string to override the default. */
    label?: boolean | string;
}
export declare const Status: import("react").ForwardRefExoticComponent<StatusProps & import("react").RefAttributes<HTMLSpanElement>>;
