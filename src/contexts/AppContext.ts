import type { FuseRoutesType } from "@/configs/routesConfig";
import { createContext } from "react";

/**
 * The type of the AppContext value.
 */
export type AppContextType = {
    /**
     * The routes to be used in the app.
     */
    routes?: FuseRoutesType;
};

/**
 * The AppContext object.
 */
const AppContext = createContext<AppContextType>({ routes: [] });

export default AppContext;
