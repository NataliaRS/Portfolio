import { type HTMLAttributes, type ReactNode } from "react";
export interface DropzoneProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    title?: ReactNode;
    hint?: ReactNode;
    /** Error message — switches to the error state and shows this text. */
    error?: string;
    accept?: string;
    multiple?: boolean;
    onFilesSelected?: (files: FileList) => void;
}
export declare const Dropzone: import("react").ForwardRefExoticComponent<DropzoneProps & import("react").RefAttributes<HTMLDivElement>>;
