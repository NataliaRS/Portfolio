import { type HTMLAttributes, type ReactNode } from "react";
import { type StepStatus } from "../Step/Step";
export interface StepperItem {
    label: ReactNode;
    number?: number | string;
    status: StepStatus;
}
export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
    steps: StepperItem[];
}
/** Horizontal progress through a sequence of Step atoms. */
export declare function Stepper({ steps, className, ...rest }: StepperProps): import("react").JSX.Element;
