import { type HTMLAttributes, type ReactNode } from "react";
export interface TableRowProps extends HTMLAttributes<HTMLDivElement> {
    /** Renders a leading selection checkbox. */
    selectable?: boolean;
    selected?: boolean;
    onSelectedChange?: (selected: boolean) => void;
    /** Renders a trailing chevron. */
    chevron?: boolean;
    /** Highlights on hover (e.g. for clickable rows). */
    interactive?: boolean;
    /** The row cells. */
    children: ReactNode;
}
export declare const TableRow: import("react").ForwardRefExoticComponent<TableRowProps & import("react").RefAttributes<HTMLDivElement>>;
