import { type HTMLAttributes, type ReactNode } from "react";
export type ChipVariant = "input" | "avatar" | "choice";
export interface ChipProps extends Omit<HTMLAttributes<HTMLSpanElement>, "onSelect"> {
    variant?: ChipVariant;
    label: string;
    disabled?: boolean;
    /** Avatar node, rendered before the label when variant="avatar". */
    avatar?: ReactNode;
    /** Remove handler (variant input/avatar) — renders the ✕ affordance. */
    onRemove?: () => void;
    /** Selected state for variant="choice". */
    selected?: boolean;
    /** Click handler for variant="choice". */
    onToggle?: () => void;
}
export declare const Chip: import("react").ForwardRefExoticComponent<ChipProps & import("react").RefAttributes<HTMLSpanElement>>;
