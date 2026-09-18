import { type RefObject } from "react";
/**
 * Traps Tab focus inside `ref` while `active`, moves focus in on open and
 * restores it on close, and dismisses on Escape. Shared by the overlay
 * organisms (Modal / Drawer / Popover). Handlers are read through refs so the
 * effect only re-runs when `active` toggles — not on every parent render.
 */
export declare function useFocusTrap(active: boolean, ref: RefObject<HTMLElement | null>, onDismiss?: () => void, opts?: {
    closeOnEsc?: boolean;
}): void;
/** Locks `document.body` scroll while `active`. Restores the prior value on exit. */
export declare function useScrollLock(active: boolean): void;
