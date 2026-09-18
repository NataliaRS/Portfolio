import { type HTMLAttributes, type ReactNode } from "react";
export interface FooterProps extends HTMLAttributes<HTMLElement> {
    /** Copyright / fine print shown at the end. */
    copyright?: ReactNode;
}
export declare function Footer({ copyright, children, className, ...rest }: FooterProps): import("react").JSX.Element;
