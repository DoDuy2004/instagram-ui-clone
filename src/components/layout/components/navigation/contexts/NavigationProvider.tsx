// Create the provider component
import { type ReactNode, useCallback, useMemo, useState } from "react";
import navigationConfig from "@/configs/navigationConfig";
import { NavigationContext, type NavigationUIState } from "./NavigationContext";
import type { NavItemType } from "@/@core/Navigation/types/NavItemType";

export function NavigationProvider({ children }: { children: ReactNode }) {
    const [navigationItems, setNavigationItems] =
        useState<NavItemType[]>(navigationConfig);
    const [navigationUI, setNavigationUI] = useState<NavigationUIState>({
        mode: "default",
        activePanelId: null,
    });
    const [isCollapsed, setIsCollapsed] = useState(false);

    const setNavigation = useCallback((items: NavItemType[]) => {
        setNavigationItems(items);
    }, []);

    const openPanel = useCallback((item: NavItemType) => {
        if (item.type !== "panel") return;

        setNavigationUI({
            mode: "panel-open",
            activePanelId: item.id,
        });
    }, []);

    const closePanel = useCallback(() => {
        setNavigationUI({ mode: "default", activePanelId: null });
    }, []);

    const collapseSidebar = useCallback(() => {
        setIsCollapsed(true);
    }, []);

    const expandSidebar = useCallback(() => {
        setIsCollapsed(false);
    }, []);

    const activePanel = useMemo(() => {
        if (navigationUI.mode !== "panel-open") return null;

        return (
            navigationItems.find(
                (item) => item.id === navigationUI.activePanelId
            ) ?? null
        );
    }, [navigationUI, navigationItems]);

    const value = {
        activePanel,
        navigationItems,
        setNavigation,
        navigationUI,
        openPanel,
        closePanel,
        isCollapsed,
        collapseSidebar,
        expandSidebar,
    };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
}
