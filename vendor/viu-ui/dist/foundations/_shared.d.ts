import { tokens } from "../../../dist/tokens.js";
export { tokens };
export declare const copy: (text: string) => void;
export declare const page: React.CSSProperties;
export declare const h2: React.CSSProperties;
export declare const grid: (min?: number) => React.CSSProperties;
export declare const mono: React.CSSProperties;
export declare function Title({ children }: {
    children: React.ReactNode;
}): import("react").JSX.Element;
/** A copy-to-clipboard color swatch. Click copies the CSS var (or raw value). */
export declare function Swatch({ name, value, cssVar }: {
    name: string;
    value: string;
    cssVar?: string;
}): import("react").JSX.Element;
export declare function contrast(a: string, b: string): number;
