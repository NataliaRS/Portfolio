import { type HTMLAttributes, type ReactNode } from "react";
export type DrawerSide = "right" | "left";
export interface DrawerProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    /** Whether the panel is shown. Controlled. */
    open: boolean;
    /** Requested dismissal (Esc, scrim click or the close button). */
    onClose?: () => void;
    /** Edge the panel slides from. */
    side?: DrawerSide;
    /** Panel heading. */
    title: ReactNode;
    /** Show the close (✕) button in the header. */
    showClose?: boolean;
    /**
     * Accessible name for the close button. Defaults to Spanish, like the rest
     * of the system's built-in strings; a bilingual product passes its own.
     */
    closeLabel?: string;
    /** Footer slot, typically one or two `<Button>`s. */
    footer?: ReactNode;
    /** Dismiss when the scrim is clicked. */
    closeOnOverlayClick?: boolean;
    /** Dismiss on the Escape key. */
    closeOnEsc?: boolean;
}
export declare const Drawer: import("react").ForwardRefExoticComponent<DrawerProps & import("react").RefAttributes<HTMLDivElement>>;
