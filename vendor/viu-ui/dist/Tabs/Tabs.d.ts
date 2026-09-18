import { type ReactNode } from "react";
import { type TabVariant } from "../Tab/Tab";
export interface TabsItem {
    value: string;
    label: ReactNode;
    icon?: ReactNode;
    disabled?: boolean;
}
export interface TabsProps {
    items: TabsItem[];
    value: string;
    onValueChange: (value: string) => void;
    variant?: TabVariant;
    "aria-label"?: string;
    className?: string;
}
/** A group of Tab atoms with roving focus + arrow-key navigation. */
export declare function Tabs({ items, value, onValueChange, variant, className, ...rest }: TabsProps): import("react").JSX.Element;
