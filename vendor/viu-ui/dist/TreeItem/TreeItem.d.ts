import { type ReactNode } from "react";
export interface TreeItemProps {
    label: ReactNode;
    /** Indent level (0-based). */
    level?: number;
    /** Has children → renders an expand chevron (Figma `Expansión`: Expandido/Colapsado vs Hoja). */
    hasChildren?: boolean;
    expanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    selected?: boolean;
    onSelect?: () => void;
    disabled?: boolean;
    icon?: ReactNode;
    /** Show a leading checkbox (selectable trees). */
    checkbox?: boolean;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    className?: string;
}
export declare function TreeItem({ label, level, hasChildren, expanded, onExpandedChange, selected, onSelect, disabled, icon, checkbox, checked, onCheckedChange, className, }: TreeItemProps): import("react").JSX.Element;
