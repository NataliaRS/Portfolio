import { type HTMLAttributes } from "react";
export type SkeletonVariant = "text" | "rect" | "circle";
export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: SkeletonVariant;
    width?: number | string;
    height?: number | string;
}
export declare const Skeleton: import("react").ForwardRefExoticComponent<SkeletonProps & import("react").RefAttributes<HTMLSpanElement>>;
