import { type HTMLAttributes, type ReactNode } from "react";
export type FileRowState = "loading" | "complete" | "error";
export interface FileRowProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    /** Short type tag shown in the tile (e.g. "PDF"). */
    ext?: string;
    state?: FileRowState;
    /** 0–100, used in the loading state. */
    progress?: number;
    /** Meta line for the complete state (e.g. "2,4 MB · Completado"). */
    meta?: ReactNode;
    onRemove?: () => void;
    onRetry?: () => void;
}
export declare const FileRow: import("react").ForwardRefExoticComponent<FileRowProps & import("react").RefAttributes<HTMLDivElement>>;
