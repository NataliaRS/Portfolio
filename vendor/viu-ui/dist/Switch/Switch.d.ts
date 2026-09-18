import { type ButtonHTMLAttributes, type ReactNode } from "react";
export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    label?: ReactNode;
}
export declare const Switch: import("react").ForwardRefExoticComponent<SwitchProps & import("react").RefAttributes<HTMLButtonElement>>;
