import type { NavItemType } from "@/@core/Navigation/types/NavItemType";
import { createContext } from "react";

export type NavigationUIState = {
    mode: "default" | "panel-open";
    activePanelId: string | null;
};

// Define the context type
export type NavigationContextType = {
    navigationItems: NavItemType[];

    navigationUI: NavigationUIState;
    activePanel: NavItemType | null;
    openPanel: (item: NavItemType) => void;
    closePanel: () => void;

    isCollapsed: boolean;
    collapseSidebar: () => void;
    expandSidebar: () => void;
};

// Create the context
export const NavigationContext = createContext<
    NavigationContextType | undefined
>(undefined);
