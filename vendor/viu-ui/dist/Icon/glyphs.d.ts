/**
 * Íconos del sistema = **Material Symbols (Google)**, embebidos como SVG oficiales
 * (repo `google/material-design-icons`, estilo *Outlined*, peso 400, grade 0,
 * viewBox `0 -960 960 960`, basados en fill). Sin dependencia de fuente: el `Icon`
 * dibuja el path directamente con `fill: currentColor`.
 *
 * Para no tocar los ~48 usos del repo, la prop `glyph` sigue aceptando los 11
 * nombres legacy y se resuelven al símbolo Material correspondiente.
 *
 * Direccionales (Chevron/Arrow): el baseline del CÓDIGO es derecha (el viejo glyph
 * apuntaba →) y los componentes rotan por CSS; por eso Chevron→`chevron_right` y
 * Arrow→`arrow_forward` (apuntan a la derecha) y todas las rotaciones existentes
 * (rotate 90→abajo, 180→izquierda, 270→arriba) se conservan sin tocar CSS.
 * (En Figma el baseline es abajo y por eso allí Chevron rot0→`stat_minus_1`.)
 *
 * Sumar un ícono nuevo: copiar el path de `symbols/web/<name>/materialsymbolsoutlined/
 * <name>_24px.svg` del repo y agregarlo a `symbolPaths`.
 */
export type GlyphName = "Plus" | "Check" | "Chevron" | "Close" | "Arrow" | "Search" | "Info" | "Alert" | "Visibility" | "VisibilityOff" | "Folder";
/** Legacy glyph → Material Symbol name. */
export declare const glyphToSymbol: Record<GlyphName, string>;
/** Material Symbol name → SVG path `d` (Outlined 400, viewBox 0 -960 960 960). */
export declare const symbolPaths: Record<string, string>;
/** Resuelve el nombre Material a partir de un nombre legacy o uno Material directo. */
export declare function resolveSymbol(glyph: string): string;
/** Devuelve el path `d` del símbolo (o `undefined` si no está embebido). */
export declare function symbolPath(glyph: string): string | undefined;
/** Símbolos Material embebidos (para docs/galería). */
export declare const USED_SYMBOLS: string[];
