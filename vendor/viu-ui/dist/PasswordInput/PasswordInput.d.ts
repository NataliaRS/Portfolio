import { type InputHTMLAttributes } from "react";
export interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    error?: boolean;
}
/** Password field with a show/hide toggle (Field/Password). */
export declare const PasswordInput: import("react").ForwardRefExoticComponent<PasswordInputProps & import("react").RefAttributes<HTMLInputElement>>;
