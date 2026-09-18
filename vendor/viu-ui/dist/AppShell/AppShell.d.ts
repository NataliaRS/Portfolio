import { type HTMLAttributes, type ReactNode } from "react";
export interface AppShellProps extends HTMLAttributes<HTMLDivElement> {
    /** Persistent sidebar — brand, primary navigation and account. */
    sidebar: ReactNode;
    /** Top bar — location (breadcrumb), search, primary action and account. */
    topbar?: ReactNode;
    /** The page content — the only region that changes when navigating. */
    children: ReactNode;
}
/**
 * App shell pattern: a persistent sidebar + top bar framing a scrollable
 * content region. The shell stays put while navigating; only `children` change.
 */
export declare const AppShell: import("react").ForwardRefExoticComponent<AppShellProps & import("react").RefAttributes<HTMLDivElement>>;
