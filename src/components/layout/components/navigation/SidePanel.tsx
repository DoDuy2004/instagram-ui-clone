import React from "react";
import { cn } from "@/lib/utils";
import { useNavigationContext } from "./contexts/useNavigationContext";

interface SidePanelProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const SidePanel = ({ isOpen, onClose, children }: SidePanelProps) => {
    const { expandSidebar } = useNavigationContext();

    return (
        <div
            className={cn(
                "fixed inset-0 z-40",
                !isOpen && "pointer-events-none"
            )}>
            <div
                className='absolute inset-0 bg-transparent'
                onClick={() => {
                    onClose();
                    expandSidebar();
                }}
            />

            <div
                className={cn(
                    "absolute top-0 left-18 h-full w-64 z-30",
                    "border-r bg-background",
                    "transition-transform duration-300 ease-in-out",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
                onClick={(e) => e.stopPropagation()}>
                <div className='h-full overflow-y-auto'>{children}</div>
            </div>
        </div>
    );
};
