// Create the provider component
import { type ReactNode, useCallback, useState } from "react";
import navigationConfig from "@/configs/navigationConfig";
import { NavigationContext } from "./NavigationContext";
import type { NavItemType } from "@/@core/Navigation/types/NavItemType";

export function NavigationProvider({ children }: { children: ReactNode }) {
    const [navigationItems, setNavigationItems] =
        useState<NavItemType[]>(navigationConfig);

    const setNavigation = useCallback((items: NavItemType[]) => {
        setNavigationItems(items);
    }, []);

    const value = {
        navigationItems,
        setNavigation,
    };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
}
