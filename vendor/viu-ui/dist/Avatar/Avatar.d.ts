import { type HTMLAttributes } from "react";
export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
    size?: AvatarSize;
    /** Image source — tiene prioridad (`Type=Imagen`). */
    src?: string;
    alt?: string;
    /**
     * Iniciales cuando no hay imagen (`Type=Iniciales`). Si no hay `src` ni
     * `initials`, se muestra el placeholder de persona (`Type=Ícono`, glyph
     * `account_circle`), del tamaño del avatar y con el color de las iniciales.
     */
    initials?: string;
}
export declare const Avatar: import("react").ForwardRefExoticComponent<AvatarProps & import("react").RefAttributes<HTMLSpanElement>>;
