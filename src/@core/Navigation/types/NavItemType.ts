/**
 * NavItemType
 * A type for  navigation item and its properties.
 */
export type NavItemType = {
    id: string;
    title?: string;
    auth?: string[] | string;
    subtitle?: string;
    icon?: string;
    iconClass?: string;
    url?: string;
    target?: string;
    type?: string;
    disabled?: boolean;
    active?: boolean;
    exact?: boolean;
    end?: boolean;
    children?: NavItemType[];
    hasPermission?: boolean;
    componentId?: string;
};

export type FlatNavItemType = Omit<NavItemType, "children" | "sx"> & {
    children?: string[];
    order: string;
};
