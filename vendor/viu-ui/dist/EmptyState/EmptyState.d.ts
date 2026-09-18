import { type HTMLAttributes, type ReactNode } from "react";
export type EmptyStateVariant = "first" | "empty" | "error";
export interface EmptyStateProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    variant?: EmptyStateVariant;
    /** Override the default icon for the variant. */
    icon?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    /** Action(s), e.g. one or two Buttons. */
    actions?: ReactNode;
}
export declare const EmptyState: import("react").ForwardRefExoticComponent<EmptyStateProps & import("react").RefAttributes<HTMLDivElement>>;
