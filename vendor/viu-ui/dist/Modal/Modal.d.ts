import { type HTMLAttributes, type ReactNode } from "react";
export type ModalSize = "sm" | "md" | "lg";
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    /** Whether the dialog is shown. Controlled. */
    open: boolean;
    /** Requested dismissal (Esc, scrim click or the close button). */
    onClose?: () => void;
    /** Max width of the dialog. Maps to Figma `Tamaño` (SM/MD/LG = 400/520/680). */
    size?: ModalSize;
    /** Dialog heading. */
    title: ReactNode;
    /** Optional supporting line under the title. */
    subtitle?: ReactNode;
    /** Optional leading icon next to the title. */
    icon?: ReactNode;
    /** Show the close (✕) button in the header. */
    showClose?: boolean;
    /** Footer slot, typically one or two `<Button>`s. */
    footer?: ReactNode;
    /** Dismiss when the scrim is clicked. */
    closeOnOverlayClick?: boolean;
    /** Dismiss on the Escape key. */
    closeOnEsc?: boolean;
}
export declare const Modal: import("react").ForwardRefExoticComponent<ModalProps & import("react").RefAttributes<HTMLDivElement>>;
