import type { NavItemType } from "@/@core/Navigation/types/NavItemType";
import { createContext } from "react";

// Define the context type
export type NavigationContextType = {
    navigationItems: NavItemType[];
};

// Create the context
export const NavigationContext = createContext<
    NavigationContextType | undefined
>(undefined);
