import { type ReactNode } from "react";
export interface DatepickerProps {
    /** Controlled selected date. */
    value?: Date | null;
    /** Uncontrolled initial date. */
    defaultValue?: Date | null;
    onValueChange?: (date: Date | null) => void;
    label?: ReactNode;
    /** Associates the label with the trigger for a11y. */
    htmlFor?: string;
    helper?: ReactNode;
    error?: ReactNode;
    disabled?: boolean;
    className?: string;
}
/**
 * Date picker (Figma `28:386`): a trigger field (DateField) that opens the
 * shared brand Calendar in single mode. The selected day is a brand circle and
 * today a bordered ring. The Calendar and DateField are the same primitives the
 * DateRangePicker composes, mirroring Figma's component reuse.
 */
export declare const Datepicker: import("react").ForwardRefExoticComponent<DatepickerProps & import("react").RefAttributes<HTMLButtonElement>>;
