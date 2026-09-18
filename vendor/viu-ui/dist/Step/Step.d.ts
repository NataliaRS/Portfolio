import { type HTMLAttributes } from "react";
export type StepStatus = "complete" | "current" | "upcoming";
export interface StepProps extends HTMLAttributes<HTMLDivElement> {
    status?: StepStatus;
    number?: number | string;
    label?: React.ReactNode;
    /** Show the trailing connector line to the next step. */
    connector?: boolean;
}
export declare const Step: import("react").ForwardRefExoticComponent<StepProps & import("react").RefAttributes<HTMLDivElement>>;
