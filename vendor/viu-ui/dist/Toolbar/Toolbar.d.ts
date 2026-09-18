import { type HTMLAttributes } from "react";
export interface ToolbarProps extends HTMLAttributes<HTMLDivElement> {
    "aria-label": string;
}
/** A horizontal grouping of actions. Compose with Icon button / Button / Divider (vertical). */
export declare function Toolbar({ children, className, ...rest }: ToolbarProps): import("react").JSX.Element;
