import { type HTMLAttributes, type ReactNode } from "react";
export type PopoverSide = "bottom" | "top";
export interface PopoverProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    /** Whether the surface is shown. Controlled. */
    open: boolean;
    /** Open/close requests (trigger toggle, Esc, outside click, close button). */
    onOpenChange?: (open: boolean) => void;
    /** Which side of the trigger the surface floats on. Maps to Figma `Posición`. */
    side?: PopoverSide;
    /** The element the surface is anchored to (e.g. a `<Button>`). */
    trigger: ReactNode;
    /** Optional heading row. */
    title?: ReactNode;
    /** Show the close (✕) button in the header (requires `title`). */
    showClose?: boolean;
    /** Action slot, typically one or two small `<Button>`s. */
    actions?: ReactNode;
    /** Dismiss on the Escape key. */
    closeOnEsc?: boolean;
    /** Body content. */
    children: ReactNode;
}
export declare const Popover: import("react").ForwardRefExoticComponent<PopoverProps & import("react").RefAttributes<HTMLDivElement>>;
