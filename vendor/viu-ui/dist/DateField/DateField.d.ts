import { type ReactNode } from "react";
export interface DateFieldProps {
    label?: ReactNode;
    /** Associates the label with the trigger; auto-generated when omitted. */
    htmlFor?: string;
    /** Date shown in the field, or null for the placeholder. */
    value?: Date | null;
    placeholder?: string;
    open?: boolean;
    error?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
/**
 * Shared date trigger field: label + value/placeholder + calendar glyph.
 * Reused by Datepicker (one field) and DateRangePicker (Desde / Hasta), mirroring
 * Figma where the range picker composes two Datepicker fields.
 */
export declare const DateField: import("react").ForwardRefExoticComponent<DateFieldProps & import("react").RefAttributes<HTMLButtonElement>>;
