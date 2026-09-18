import { type HTMLAttributes, type ReactNode } from "react";
export type ToastTone = "info" | "success" | "warning" | "danger";
export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    tone?: ToastTone;
    title?: ReactNode;
    onClose?: () => void;
}
export declare const Toast: import("react").ForwardRefExoticComponent<ToastProps & import("react").RefAttributes<HTMLDivElement>>;
