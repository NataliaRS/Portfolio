import { type AvatarSize } from "../Avatar/Avatar";
export interface AvatarGroupItem {
    initials?: string;
    src?: string;
    alt?: string;
}
export interface AvatarGroupProps {
    items: AvatarGroupItem[];
    /** Max avatars shown before collapsing into a +N chip. */
    max?: number;
    size?: AvatarSize;
    className?: string;
}
export declare function AvatarGroup({ items, max, size, className }: AvatarGroupProps): import("react").JSX.Element;
