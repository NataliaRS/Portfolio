import { type HTMLAttributes } from "react";
export interface NavProps extends HTMLAttributes<HTMLElement> {
    /** Accessible name for the navigation landmark. */
    "aria-label": string;
}
/** Vertical navigation landmark. Compose with NavItem children. */
export declare function Nav({ children, className, ...rest }: NavProps): import("react").JSX.Element;
