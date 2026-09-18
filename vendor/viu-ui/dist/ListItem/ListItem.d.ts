import { type HTMLAttributes, type ReactNode } from "react";
export interface ListItemProps extends Omit<HTMLAttributes<HTMLLIElement>, "title"> {
    leading?: ReactNode;
    title: ReactNode;
    subtitle?: ReactNode;
    meta?: ReactNode;
    selected?: boolean;
    disabled?: boolean;
    chevron?: boolean;
    /** Makes the row interactive (renders a button). */
    onSelect?: () => void;
}
export declare function ListItem({ leading, title, subtitle, meta, selected, disabled, chevron, onSelect, className, ...rest }: ListItemProps): import("react").JSX.Element;
