import { type ReactNode } from "react";
export interface BreadcrumbItem {
    label: ReactNode;
    href?: string;
}
export interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: "chevron" | "slash";
    "aria-label"?: string;
    className?: string;
}
export declare function Breadcrumb({ items, separator, className, ...rest }: BreadcrumbProps): import("react").JSX.Element;
