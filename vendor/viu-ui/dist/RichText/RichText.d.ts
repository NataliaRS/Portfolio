import { type HTMLAttributes, type ReactNode } from "react";
export interface RichTextProps extends HTMLAttributes<HTMLDivElement> {
    /** Render trusted HTML (sanitize upstream). Alternatively pass children. */
    html?: string;
    children?: ReactNode;
}
/** Styled prose container that applies the VIU type scale to rich content. */
export declare function RichText({ html, children, className, ...rest }: RichTextProps): import("react").JSX.Element;
