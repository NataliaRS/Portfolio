import { type HTMLAttributes } from "react";
export type ListProps = HTMLAttributes<HTMLUListElement>;
/** A vertical list container. Compose with ListItem children. */
export declare function List({ children, className, ...rest }: ListProps): import("react").JSX.Element;
