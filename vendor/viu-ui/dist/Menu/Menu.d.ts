import { type HTMLAttributes } from "react";
export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
    "aria-label": string;
}
/** Floating menu surface. Compose with MenuItem children. Positioning is up to the caller. */
export declare function Menu({ children, className, ...rest }: MenuProps): import("react").JSX.Element;
