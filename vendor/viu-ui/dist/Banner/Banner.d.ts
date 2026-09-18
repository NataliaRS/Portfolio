import { type HTMLAttributes, type ReactNode } from "react";
export type BannerTone = "info" | "success" | "warning" | "danger" | "neutral";
export interface BannerProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    tone?: BannerTone;
    title?: ReactNode;
    /** Optional inline link below the message (e.g. <Link href>Más información</Link>). */
    link?: ReactNode;
    /** When provided, renders a close affordance. */
    onClose?: () => void;
}
export declare const Banner: import("react").ForwardRefExoticComponent<BannerProps & import("react").RefAttributes<HTMLDivElement>>;
