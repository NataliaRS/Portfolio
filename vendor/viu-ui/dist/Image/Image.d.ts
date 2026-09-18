import { type HTMLAttributes } from "react";
export type ImageRatio = "16:9" | "4:3" | "1:1" | "3:2" | "free";
export type ImageState = "default" | "loading" | "error";
export interface ImageProps extends HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    ratio?: ImageRatio;
    /** Force a state. Otherwise resolves from `src` + load errors. */
    state?: ImageState;
    /** Text shown in the error placeholder. */
    errorLabel?: string;
}
export declare const Image: import("react").ForwardRefExoticComponent<ImageProps & import("react").RefAttributes<HTMLDivElement>>;
