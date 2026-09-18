import { type FormHTMLAttributes, type ReactNode } from "react";
export interface FormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, "title"> {
    /** Form heading. */
    title?: ReactNode;
    /** Supporting line under the title. */
    description?: ReactNode;
    /** Slot above the fields — typically an error-summary `<Banner tone="danger">`. */
    banner?: ReactNode;
    /** Footer actions, right-aligned (e.g. Cancel + Submit). */
    actions?: ReactNode;
    /** The fields — stack of `FormField`s (and row wrappers for short pairs). */
    children: ReactNode;
}
/**
 * Form pattern: a titled surface with an optional banner, a single-column
 * stack of fields and a right-aligned action footer. The primary action is
 * never disabled by errors — on submit, the errors are shown.
 */
export declare const Form: import("react").ForwardRefExoticComponent<FormProps & import("react").RefAttributes<HTMLFormElement>>;
