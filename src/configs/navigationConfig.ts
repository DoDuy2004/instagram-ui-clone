import type { NavItemType } from "../@core/Navigation/types/NavItemType";

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: NavItemType[] = [
	{
		id: 'home',
		title: 'Home',
		type: 'item',
		icon: 'lucide:house',
	},
];

export default navigationConfig;