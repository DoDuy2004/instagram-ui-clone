import _ from "lodash";
import type { PartialDeep } from "type-fest";
import type { NavItemType } from "../types/NavItemType";

/**
 *  FuseNavItemModel
 *  Constructs a navigation item based on FuseNavItemType
 */
function NavItemModel(data?: PartialDeep<NavItemType>) {
    data = data || {};

    return _.defaults(data, {
        id: _.uniqueId(),
        title: "",
        auth: null,
        subtitle: "",
        icon: "",
        iconClass: "",
        url: "",
        target: "",
        type: "item",
        disabled: false,
        active: false,
        exact: false,
        end: false,
        badge: null,
        children: [],
    });
}

export default NavItemModel;
