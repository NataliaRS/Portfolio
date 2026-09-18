export type FlipSide = "top" | "bottom" | "left" | "right";
/**
 * Collision-aware side resolution shared by the floating components (Tooltip,
 * Popover). Returns the side to actually render on: the preferred side when the
 * floating element fits the viewport there, otherwise the opposite side — but
 * only if flipping actually helps (if neither side fits, the preferred side is
 * kept). Call `recompute(anchor, floating)` whenever the floating element
 * becomes visible (open / hover / focus) and on scroll/resize while it shows.
 */
export declare function useFlipSide(preferred: FlipSide): {
    side: FlipSide;
    recompute: (anchor: HTMLElement | null, floating: HTMLElement | null) => void;
};
