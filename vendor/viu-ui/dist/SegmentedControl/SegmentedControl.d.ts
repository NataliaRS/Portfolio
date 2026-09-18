import { type HTMLAttributes, type ReactNode } from "react";
export interface SegmentedControlOption {
    value: string;
    label: ReactNode;
    disabled?: boolean;
}
export interface SegmentedControlProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
    options: SegmentedControlOption[];
    /** Controlled selected value. */
    value?: string;
    /** Uncontrolled initial value (defaults to the first option). */
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    /** Shared radio-group name (defaults to a generated id). */
    name?: string;
    /** Disable the whole control. */
    disabled?: boolean;
}
/**
 * Single-select control between mutually exclusive options (Figma `724:28`).
 * Built on native radios for free keyboard support (arrow keys move + select);
 * the active segment is the elevated "thumb". NOT navigation — that's Tabs.
 */
export declare const SegmentedControl: import("react").ForwardRefExoticComponent<SegmentedControlProps & import("react").RefAttributes<HTMLDivElement>>;
