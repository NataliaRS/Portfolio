import { type HTMLAttributes, type ReactNode } from "react";
export interface DataTableProps extends HTMLAttributes<HTMLDivElement> {
    "aria-label": string;
    /** Toolbar slot — search, filters and actions above the table. */
    toolbar?: ReactNode;
    /** Column header cells (rendered as the table header row). */
    header?: ReactNode;
    /** Footer summary, e.g. "1–5 de 42 proyectos". */
    caption?: ReactNode;
    /** Pagination slot, shown at the footer's end. */
    pagination?: ReactNode;
    /** Shown inside the table body when there are no rows (e.g. an `<EmptyState/>`). */
    empty?: ReactNode;
    /** The `TableRow`s. When none and `empty` is set, the empty slot shows instead. */
    children?: ReactNode;
}
/**
 * Data table pattern: a toolbar (search/filters/actions) + a Table with
 * selectable rows + a footer (count + pagination). Always resolve the loading,
 * empty and error states — the empty state renders inside the table body.
 */
export declare const DataTable: import("react").ForwardRefExoticComponent<DataTableProps & import("react").RefAttributes<HTMLDivElement>>;
