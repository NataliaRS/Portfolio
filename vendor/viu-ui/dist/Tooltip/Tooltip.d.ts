import { type ReactNode } from "react";
export type TooltipSide = "top" | "bottom" | "left" | "right";
export interface TooltipProps {
    /** Tooltip content. */
    label: ReactNode;
    side?: TooltipSide;
    children: ReactNode;
}
/**
 * CSS-only tooltip: shows on hover/focus of the wrapped trigger. The resolved
 * side flips to the opposite edge when the preferred side would overflow the
 * viewport (measured on hover/focus via the shared `useFlipSide`).
 */
export declare function Tooltip({ label, side, children }: TooltipProps): import("react").JSX.Element;
