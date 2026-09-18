import { type HTMLAttributes, type ReactNode } from "react";
export interface QuoteProps extends HTMLAttributes<HTMLElement> {
    /** Attribution name. */
    author?: ReactNode;
    /** Attribution role/source. */
    source?: ReactNode;
    children: ReactNode;
}
export declare function Quote({ author, source, children, className, ...rest }: QuoteProps): import("react").JSX.Element;
