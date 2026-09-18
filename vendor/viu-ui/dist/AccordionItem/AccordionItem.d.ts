import { type HTMLAttributes, type ReactNode } from "react";
export interface AccordionItemProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    title: ReactNode;
    defaultOpen?: boolean;
    /** Controlled open state. */
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
export declare const AccordionItem: import("react").ForwardRefExoticComponent<AccordionItemProps & import("react").RefAttributes<HTMLDivElement>>;
