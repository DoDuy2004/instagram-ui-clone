import type { NavItemType } from "../@core/Navigation/types/NavItemType";

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: NavItemType[] = [
    {
        id: "home",
        title: "Home",
        type: "item",
        icon: "lucide:house",
    },
    {
        id: "search",
        title: "Search",
        type: "panel",
        icon: "lucide:search",
    },
    {
        id: "explore",
        title: "Explore",
        type: "item",
        icon: "lucide:compass",
    },
    {
        id: "reels",
        title: "Reels",
        type: "item",
        icon: "lucide:square-play",
    },
    {
        id: "messages",
        title: "Messages",
        type: "item",
        icon: "lucide:send",
    },
    {
        id: "notifications",
        title: "Notifications",
        type: "panel",
        icon: "lucide:heart",
    },
    {
        id: "create",
        title: "Create",
        type: "menu",
        icon: "lucide:plus",
        children: [],
    },
    {
        id: "profile",
        title: "Profile",
        type: "item",
        icon: "lucide:circle",
    },
    {
        id: "more",
        title: "More",
        type: "menu",
        icon: "lucide:menu",
        children: [],
    },
];

export default navigationConfig;
