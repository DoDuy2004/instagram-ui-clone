// Dynamically import all *Route.tsx files from the app folder
import { Navigate, type RouteObject } from "react-router";
import App from "@/app/App";
import settingsConfig from "./settingsConfig";
import ErrorBoundary from "@/@core/utils/ErrorBoundary";

/**
 * The FuseRouteItemType type
 */
export type FuseRouteItemType = RouteObject & {
    auth?: string[] | [];
    children?: FuseRouteItemType[];
};

/**
 * The FuseRoutesType type is a custom type that is an array of FuseRouteItemType objects.
 */
export type FuseRoutesType = FuseRouteItemType[];

/**
 * The FuseRouteConfigType type is a custom type that defines the configuration for a set of routes.
 * It includes an optional routes property, an optional settings property, and an optional auth property.
 */
export type FuseRouteConfigType = {
    routes: FuseRoutesType;
    auth?: string[] | [];
};

/**
 * The FuseRouteConfigsType type is a custom type that is an array of FuseRouteConfigType objects.
 */
export type FuseRouteConfigsType = FuseRouteConfigType[] | [];

const namedRouteConfigModules: Record<string, unknown> = import.meta.glob(
    "/src/app/**/*Route.tsx",
    {
        eager: true,
    }
);

const routeConfigModules: Record<string, unknown> = import.meta.glob(
    "/src/app/**/route.tsx",
    {
        eager: true,
    }
);

const allConfigModules = { ...namedRouteConfigModules, ...routeConfigModules };

const mainRoutes: FuseRouteConfigType[] = Object.keys(allConfigModules)
    .map((modulePath) => {
        const moduleConfigs = (
            allConfigModules[modulePath] as {
                default: FuseRouteConfigType | FuseRouteConfigType[];
            }
        ).default;
        return Array.isArray(moduleConfigs) ? moduleConfigs : [moduleConfigs];
    })
    .flat();

const routes: FuseRoutesType = [
    {
        path: "/",
        element: <App />,
        auth: settingsConfig.defaultAuth,
        errorElement: <ErrorBoundary />,
        children: [...mainRoutes],
    },
    {
        path: "*",
        element: <Navigate to='/404' />,
    },
];

export default routes;
