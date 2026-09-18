import { type DateRange } from "./calendarUtils";
export interface CalendarProps {
    mode: "single" | "range";
    /** Selected date (single mode). */
    selected?: Date | null;
    /** Selected range (range mode). */
    range?: DateRange;
    /** Month shown when the calendar mounts. */
    defaultMonth?: Date;
    onPick: (day: Date) => void;
    /** Called on Escape. */
    onClose?: () => void;
    /** id wired to the month header for the dialog's aria-labelledby. */
    labelId?: string;
}
/**
 * Brand calendar popover shared by Datepicker (single) and DateRangePicker
 * (range). Single selection = brand circle (+ today ring); range = brand
 * endpoints with a brand-subtle band between them. Monday-first, Spanish
 * labels. It is rendered conditionally by the parent, so it remounts on each
 * open and `defaultMonth` seeds the visible month correctly.
 */
export declare function Calendar({ mode, selected, range, defaultMonth, onPick, onClose, labelId }: CalendarProps): import("react").JSX.Element;
