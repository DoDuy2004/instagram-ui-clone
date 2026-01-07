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
import { useState } from "react";
import { SidePanel } from "./SidePanel";

const NavigationItem = ({ item }: { item: NavItemType }) => {
    const [activePanelId, setActivePanelId] = useState<string | null>(null);

    if (item.type === "item") {
        return (
            <SidebarMenuItem>
                <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className='py-6 px-3'>
                    <Link to={item.url || "#"}>
                        <AppSvgIcon>{item?.icon}</AppSvgIcon>
                        <span className='text-base'>{item.title}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        );
    }

    if (item.type === "menu") {
        return (
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            tooltip={item.title}
                            className='py-6 px-3'>
                            <AppSvgIcon>{item?.icon}</AppSvgIcon>
                            <span className='text-base'>{item.title}</span>
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
        const isOpen = activePanelId === item.id;

        return (
            <SidebarMenuItem>
                <SidebarMenuButton
                    onClick={() => setActivePanelId(isOpen ? null : item.id)}
                    className='py-6 px-3 focus:outline-none'>
                    <AppSvgIcon>{item?.icon}</AppSvgIcon>
                    <span className='text-base'>{item.title}</span>
                </SidebarMenuButton>

                <SidePanel isOpen={isOpen}>{item.component}</SidePanel>
            </SidebarMenuItem>
        );
    }

    return null;
};

export default NavigationItem;
