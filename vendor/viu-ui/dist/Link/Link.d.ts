import { type AnchorHTMLAttributes } from "react";
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    disabled?: boolean;
}
export declare const Link: import("react").ForwardRefExoticComponent<LinkProps & import("react").RefAttributes<HTMLAnchorElement>>;
