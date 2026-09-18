import { type HTMLAttributes } from "react";
export interface NotificationBadgeProps extends HTMLAttributes<HTMLSpanElement> {
    /** Number shown in the badge. Above `max` it renders `max+`. */
    count?: number;
    max?: number;
    /** Render the small dot variant instead of a count. */
    dot?: boolean;
}
export declare const NotificationBadge: import("react").ForwardRefExoticComponent<NotificationBadgeProps & import("react").RefAttributes<HTMLSpanElement>>;
