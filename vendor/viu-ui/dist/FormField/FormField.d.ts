import { type HTMLAttributes, type ReactNode } from "react";
export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
    label: ReactNode;
    /** Associates the label with the control (pass the same id to your input). */
    htmlFor?: string;
    required?: boolean;
    /** Helper text shown below the control. */
    helper?: ReactNode;
    /** Error message — replaces the helper and switches to the error style. */
    error?: ReactNode;
    disabled?: boolean;
    /** The form control (Input, Select, Textarea, …). */
    children: ReactNode;
}
export declare const FormField: import("react").ForwardRefExoticComponent<FormFieldProps & import("react").RefAttributes<HTMLDivElement>>;
