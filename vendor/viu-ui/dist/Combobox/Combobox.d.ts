export interface ComboboxOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface ComboboxProps {
    options: ComboboxOption[];
    /** Controlled selected value. */
    value?: string;
    /** Uncontrolled initial value. */
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    /** Text shown when the query matches no option. */
    emptyText?: string;
    /** Accessible name for the input. */
    "aria-label"?: string;
    className?: string;
    id?: string;
}
/**
 * Filterable single-select combobox (Figma `730:40`). Reuses the Search field
 * and MenuItem rows. Follows the WAI-ARIA combobox + listbox pattern: focus
 * stays on the input, the active option is tracked via `aria-activedescendant`.
 */
export declare const Combobox: import("react").ForwardRefExoticComponent<ComboboxProps & import("react").RefAttributes<HTMLInputElement>>;
