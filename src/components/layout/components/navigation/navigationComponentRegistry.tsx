// navigationComponentRegistry.ts
import { lazy } from "react";

const navigationComponentRegistry: Record<
    string,
    React.LazyExoticComponent<React.ComponentType>
> = {
    search: lazy(() => import("./panels/SearchPanel")),
    notifications: lazy(() => import("./panels/NotificationsPanel")),
};

export default navigationComponentRegistry;
