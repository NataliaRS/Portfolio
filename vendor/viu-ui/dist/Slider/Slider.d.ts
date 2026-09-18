import { type CSSProperties, type InputHTMLAttributes } from "react";
/** Single-value slider — a native `<input type="range">`. */
export type SingleSliderProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    range?: false;
};
/** Range slider — two thumbs selecting a `[low, high]` band (Figma `Modo=Rango`). */
export interface RangeSliderProps {
    range: true;
    min?: number;
    max?: number;
    step?: number;
    /** Controlled `[low, high]`. */
    value?: [number, number];
    /** Uncontrolled initial `[low, high]`. */
    defaultValue?: [number, number];
    onValueChange?: (value: [number, number]) => void;
    disabled?: boolean;
    /** Accessible labels for the `[low, high]` thumbs. */
    labels?: [string, string];
    className?: string;
    style?: CSSProperties;
    id?: string;
}
export type SliderProps = SingleSliderProps | RangeSliderProps;
export declare const Slider: import("react").ForwardRefExoticComponent<SliderProps & import("react").RefAttributes<HTMLInputElement>>;
