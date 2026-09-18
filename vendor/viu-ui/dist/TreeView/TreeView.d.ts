import { type HTMLAttributes, type ReactNode } from "react";
export interface TreeViewProps extends HTMLAttributes<HTMLDivElement> {
    "aria-label": string;
    children: ReactNode;
}
/** Tree container. Compose with TreeItem children. */
export declare function TreeView({ children, className, ...rest }: TreeViewProps): import("react").JSX.Element;
