import type { FlatNavItemType, NavItemType } from "../Navigation/types/NavItemType";

class NavigationHelper {
    static flattenNavigation(
        navigation: NavItemType[],
        parentOrder = ""
    ): FlatNavItemType[] {
        if (!navigation) {
            return [];
        }

        return navigation?.flatMap((item, index) => {
            const order = parentOrder
                ? `${parentOrder}.${index + 1}`
                : `${index + 1}`;
            let flattened: FlatNavItemType[] = [
                {
                    ...item,
                    order,
                    children: item.children?.map((child) => child.id),
                },
            ];

            if (item.children) {
                flattened = flattened.concat(
                    this.flattenNavigation(item.children, order)
                );
            }

            return flattened;
        });
    }
}

export default NavigationHelper;
