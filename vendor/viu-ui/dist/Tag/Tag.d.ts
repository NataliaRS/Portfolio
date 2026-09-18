import { type HTMLAttributes } from "react";
export type TagTone = "neutral" | "brand" | "indigo";
export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: TagTone;
}
export declare const Tag: import("react").ForwardRefExoticComponent<TagProps & import("react").RefAttributes<HTMLSpanElement>>;
