import type { FuseRouteItemType } from "@/configs/routesConfig";
import { lazy } from "react";

const HomeView = lazy(() => import("./components/views/HomeAppView"));

const route: FuseRouteItemType = {
    path: "/",
    element: <HomeView />,
};

export default route;
