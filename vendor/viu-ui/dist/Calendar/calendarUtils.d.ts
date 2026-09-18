/** Shared date helpers for Calendar / DateField / Datepicker / DateRangePicker. */
export declare const MONTHS: string[];
/** Monday-first weekday initials, matching Figma (Mié shares "M" with Mar). */
export declare const WEEKDAYS: string[];
export interface DateRange {
    from: Date | null;
    to: Date | null;
}
export declare const fmt: (d: Date) => string;
export declare const sameDay: (a: Date | null, b: Date | null) => boolean;
export declare const startOfDay: (d: Date) => Date;
/** Days of `month` (0-based) laid out Monday-first, with leading nulls for blanks. */
export declare function monthCells(year: number, month: number): Array<Date | null>;
