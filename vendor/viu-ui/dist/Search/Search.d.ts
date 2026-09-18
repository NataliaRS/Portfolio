import { type InputHTMLAttributes } from "react";
export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Shows a clear button when there is a value; called when it is pressed. */
    onClear?: () => void;
}
export declare const Search: import("react").ForwardRefExoticComponent<SearchProps & import("react").RefAttributes<HTMLInputElement>>;
