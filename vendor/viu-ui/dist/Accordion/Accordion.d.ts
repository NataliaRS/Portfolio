import { type HTMLAttributes } from "react";
export type AccordionProps = HTMLAttributes<HTMLDivElement>;
/** Groups AccordionItem children with dividers. Each item manages its own open state. */
export declare function Accordion({ children, className, ...rest }: AccordionProps): import("react").JSX.Element;
