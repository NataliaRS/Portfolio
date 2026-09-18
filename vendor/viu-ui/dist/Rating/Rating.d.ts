export interface RatingProps {
    value?: number;
    max?: number;
    /** Star pixel size. */
    size?: number;
    /** When provided (and not readOnly), stars become clickable. */
    onChange?: (value: number) => void;
    readOnly?: boolean;
    "aria-label"?: string;
    className?: string;
}
export declare function Rating({ value, max, size, onChange, readOnly, className, "aria-label": ariaLabel, }: RatingProps): import("react").JSX.Element;
