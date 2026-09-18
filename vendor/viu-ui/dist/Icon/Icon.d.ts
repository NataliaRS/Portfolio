import { type SVGProps } from "react";
import { type GlyphName } from "./glyphs";
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "ref"> {
    /**
     * Ícono a renderizar. Acepta los nombres legacy del sistema (`"Chevron"`,
     * `"Plus"`…) o directamente un nombre de Material Symbol embebido (`"error"`).
     */
    glyph: GlyphName | (string & {});
    /** Pixel size (width & height). Defaults to 16. */
    size?: number | string;
    /**
     * Accessible label. When provided the icon is exposed as an image with this
     * name; when omitted the icon is hidden from assistive tech (decorative).
     */
    title?: string;
}
/**
 * Ícono del sistema VIU = **Material Symbols (Google)**, SVG oficial embebido
 * (Outlined 400, viewBox `0 -960 960 960`, fill = currentColor). Sin dependencia
 * de fuente. El color hereda del texto; el tamaño es width/height.
 */
export declare const Icon: import("react").ForwardRefExoticComponent<IconProps & import("react").RefAttributes<SVGSVGElement>>;
