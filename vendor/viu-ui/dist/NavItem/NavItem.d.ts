import { type AnchorHTMLAttributes, type ReactNode } from "react";
export interface NavItemProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
    icon?: ReactNode;
    active?: boolean;
    children: ReactNode;
}
export declare const NavItem: import("react").ForwardRefExoticComponent<NavItemProps & import("react").RefAttributes<HTMLAnchorElement>>;
