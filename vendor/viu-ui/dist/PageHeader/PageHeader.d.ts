import { type HTMLAttributes, type ReactNode } from "react";
export type PageHeaderVariant = "standard" | "compact" | "centered";
export interface PageHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    title: ReactNode;
    breadcrumb?: ReactNode;
    subtitle?: ReactNode;
    status?: ReactNode;
    /** Action(s) on the right (e.g. Buttons). */
    actions?: ReactNode;
    /** Tab strip below the title (e.g. <Tabs/>). */
    tabs?: ReactNode;
    onBack?: () => void;
    variant?: PageHeaderVariant;
    divider?: boolean;
}
export declare const PageHeader: import("react").ForwardRefExoticComponent<PageHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
