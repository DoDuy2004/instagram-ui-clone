import { Link } from "react-router";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { NavItemType } from "@/@core/Navigation/types/NavItemType";
import AppSvgIcon from "@/@core/SvgIcon";
import { useNavigationContext } from "./contexts/useNavigationContext";

type NavigationItemProps = {
    item: NavItemType;
    isActiveId: string | null;
    setIsActiveId: (itemId: string) => void;
};

const NavigationItem = ({
    item,
    isActiveId,
    setIsActiveId,
}: NavigationItemProps) => {
    const {
        openPanel,
        isCollapsed,
        closePanel,
        activePanel,
        collapseSidebar,
        navigationUI,
        expandSidebar,
    } = useNavigationContext();
    const showLabel = !isCollapsed;

    const buttonClass = `py-6 px-3 gap-3 focus:outline-none cursor-pointer ${
        isActiveId === item.id ? "font-bold" : "font-normal"
    }`;

    if (item.type === "item") {
        return (
            <SidebarMenuItem>
                <SidebarMenuButton
                    onClick={() => {
                        setIsActiveId(item?.id);
                        expandSidebar();
                        closePanel();
                    }}
                    asChild
                    tooltip={item.title}
                    className={buttonClass}>
                    <Link to={item.url || "#"}>
                        <AppSvgIcon
                            strokeWidth={isActiveId === item.id ? 3 : 2}
                            size={24}>
                            {item?.icon}
                        </AppSvgIcon>
                        {showLabel && <span>{item.title}</span>}
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        );
    }

    if (item.type === "menu") {
        return (
            <SidebarMenuItem>
                <DropdownMenu
                    onOpenChange={(open) => {
                        if (open) setIsActiveId(item.id);
                    }}>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            tooltip={item.title}
                            className={buttonClass}>
                            <AppSvgIcon
                                strokeWidth={isActiveId === item.id ? 3 : 2}
                                size={24}>
                                {item?.icon}
                            </AppSvgIcon>
                            {showLabel && <span>{item.title}</span>}
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='start' className='min-w-full'>
                        {item.children?.map((child: NavItemType) => (
                            <DropdownMenuItem key={child.id} asChild>
                                <Link to={child.url || "#"}>{child.title}</Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        );
    }

    if (item.type === "panel") {
        return (
            <SidebarMenuItem>
                <SidebarMenuButton
                    onClick={() => {
                        setIsActiveId(item?.id);
                        if (activePanel?.id === item.id) {
                            closePanel();
                            expandSidebar();
                        } else {
                            if (navigationUI.mode === "panel-open") {
                                closePanel();

                                setTimeout(() => {
                                    openPanel(item);
                                    collapseSidebar();
                                }, 150);
                            } else {
                                openPanel(item);
                                collapseSidebar();
                            }
                        }
                    }}
                    className={buttonClass}>
                    <AppSvgIcon
                        strokeWidth={isActiveId === item.id ? 3 : 2}
                        size={24}>
                        {item?.icon}
                    </AppSvgIcon>
                    {showLabel && <span>{item.title}</span>}
                </SidebarMenuButton>
            </SidebarMenuItem>
        );
    }

    return null;
};

export default NavigationItem;
