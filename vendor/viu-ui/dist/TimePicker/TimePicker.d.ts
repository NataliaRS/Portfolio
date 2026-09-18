import { type ReactNode } from "react";
export interface TimePickerProps {
    /** Hora seleccionada, formato "HH:MM" (24h). Controlado. */
    value?: string;
    /** Valor inicial no controlado, "HH:MM". */
    defaultValue?: string;
    onValueChange?: (time: string) => void;
    label?: ReactNode;
    htmlFor?: string;
    helper?: ReactNode;
    error?: ReactNode;
    disabled?: boolean;
    /** Minutos entre opciones. Default 30. */
    step?: number;
    /** Rango de opciones "HH:MM". Default 00:00–23:30. */
    min?: string;
    max?: string;
    className?: string;
}
/**
 * Time picker (Figma `409:6`, estado `Abierto` `1009:6`): un control que abre un
 * dropdown propio de horas — REEMPLAZA al `<input type=time>` nativo. Cada opción
 * reusa `MenuItem` (mismos principios: Body/M, padding, radio). La opción elegida
 * usa el estado `selected` de MenuItem — fondo `bg/brand-subtle` (rojo) + check
 * Icon (`text/brand`) a la derecha; el chevron del control apunta arriba
 * (`stat_1`) al estar abierto.
 */
export declare const TimePicker: import("react").ForwardRefExoticComponent<TimePickerProps & import("react").RefAttributes<HTMLButtonElement>>;
