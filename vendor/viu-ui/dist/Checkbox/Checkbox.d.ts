import { type InputHTMLAttributes, type ReactNode } from "react";
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    indeterminate?: boolean;
    label?: ReactNode;
}
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLInputElement>>;
