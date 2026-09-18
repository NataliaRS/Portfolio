export interface PaginationProps {
    page: number;
    total: number;
    onPageChange: (page: number) => void;
    variant?: "numbered" | "simple";
    /** Pages shown on each side of the current page (numbered variant). */
    siblingCount?: number;
    "aria-label"?: string;
    className?: string;
}
export declare function Pagination({ page, total, onPageChange, variant, siblingCount, className, ...rest }: PaginationProps): import("react").JSX.Element;
