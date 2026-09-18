import { type InputHTMLAttributes, type ReactNode } from "react";
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: ReactNode;
}
export declare const Radio: import("react").ForwardRefExoticComponent<RadioProps & import("react").RefAttributes<HTMLInputElement>>;
