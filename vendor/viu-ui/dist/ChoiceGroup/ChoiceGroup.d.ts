import { type ReactNode } from "react";
export interface ChoiceOption {
    value: string;
    label: ReactNode;
    disabled?: boolean;
}
interface BaseChoiceGroupProps {
    /** Group label (rendered as `<legend>`). */
    label: ReactNode;
    options: ChoiceOption[];
    /** Optional helper text below the items. */
    helper?: ReactNode;
    /** Shared name for the radio inputs (defaults to a generated id). */
    name?: string;
    disabled?: boolean;
    className?: string;
}
export interface RadioChoiceGroupProps extends BaseChoiceGroupProps {
    type: "radio";
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
}
export interface CheckboxChoiceGroupProps extends BaseChoiceGroupProps {
    type: "checkbox";
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
}
export type ChoiceGroupProps = RadioChoiceGroupProps | CheckboxChoiceGroupProps;
/**
 * A labelled group of mutually-related choices (Figma `728:35`). Reuses the
 * Radio / Checkbox atoms — `type="radio"` for single choice (one value),
 * `type="checkbox"` for multiple (array of values). Wrapped in a `<fieldset>`
 * + `<legend>` for grouping semantics.
 */
export declare const ChoiceGroup: import("react").ForwardRefExoticComponent<ChoiceGroupProps & import("react").RefAttributes<HTMLFieldSetElement>>;
export {};
