import { type HTMLAttributes, type ReactNode } from "react";
export interface WizardStep {
    /** Short label shown in the stepper. */
    label: ReactNode;
    /** The step's body, rendered when it is the current step. */
    content: ReactNode;
}
export interface WizardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    steps: WizardStep[];
    /** Current step index (0-based). Controlled. */
    current: number;
    /** Requests a move to another step (Back, or a completed step). */
    onStepChange?: (index: number) => void;
    /** Called when advancing past the last step. */
    onFinish?: () => void;
    backLabel?: string;
    nextLabel?: string;
    finishLabel?: string;
}
/**
 * Wizard pattern: a stepper + the current step's content + a footer that shows
 * progress and Back/Next. Validate each step before advancing; the last step is
 * a summary/confirmation before finishing.
 */
export declare const Wizard: import("react").ForwardRefExoticComponent<WizardProps & import("react").RefAttributes<HTMLDivElement>>;
