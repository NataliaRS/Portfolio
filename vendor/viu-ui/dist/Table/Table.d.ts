import { type HTMLAttributes, type ReactNode } from "react";
export interface TableProps extends HTMLAttributes<HTMLDivElement> {
    "aria-label": string;
    /** Header row content (column titles). */
    header?: ReactNode;
    /**
     * Footer region (Figma organism `372:6`): p. ej. conteo de resultados +
     * Pagination. Se renderiza como hermano de `role="table"` (no como fila) para
     * no romper `aria-required-children`.
     */
    footer?: ReactNode;
    children: ReactNode;
}
/** Tabular container. Compose with TableRow children; pass a header row and an
 *  optional footer (conteo + Pagination). */
export declare function Table({ header, footer, children, className, "aria-label": ariaLabel, ...rest }: TableProps): import("react").JSX.Element;
