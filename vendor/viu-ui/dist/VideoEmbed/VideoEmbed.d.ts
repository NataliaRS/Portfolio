import { type HTMLAttributes } from "react";
export interface VideoEmbedProps extends HTMLAttributes<HTMLDivElement> {
    /** Poster image shown before playback. */
    poster?: string;
    alt?: string;
    /** Called when the play button is pressed (e.g. swap to the real player/iframe). */
    onPlay?: () => void;
}
export declare const VideoEmbed: import("react").ForwardRefExoticComponent<VideoEmbedProps & import("react").RefAttributes<HTMLDivElement>>;
