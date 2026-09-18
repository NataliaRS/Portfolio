import { type DateRange } from "../Calendar/calendarUtils";
export type { DateRange };
export interface DateRangePickerProps {
    /** Controlled selected range. */
    value?: DateRange;
    /** Uncontrolled initial range. */
    defaultValue?: DateRange;
    onValueChange?: (range: DateRange) => void;
    fromLabel?: string;
    toLabel?: string;
    disabled?: boolean;
    className?: string;
}
/**
 * Date range picker (Figma `732:120`): two DateField triggers (Desde / Hasta)
 * that open the shared brand Calendar in range mode — endpoints are brand
 * circles, the days between a brand-subtle band. Two-click selection (start,
 * then end). Mirrors Figma, which composes the range picker from two Datepicker
 * fields plus one Calendar.
 */
export declare const DateRangePicker: import("react").ForwardRefExoticComponent<DateRangePickerProps & import("react").RefAttributes<HTMLDivElement>>;
