import React from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface SidePanelProps {
    isOpen: boolean;
    children: React.ReactNode;
}

export const SidePanel = ({ isOpen, children }: SidePanelProps) => {
    return createPortal(
        <div
            className={cn(
                "fixed top-0 bottom-0 border-r bg-background transition-transform duration-300 ease-in-out",
                "min-w-64 z-30",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}
            style={{
                left: isOpen ? "var(--sidebar-width)" : "256px",
                visibility: isOpen ? "visible" : "hidden",
                pointerEvents: isOpen ? "auto" : "none",
            }}>
            <div className='h-full w-full overflow-y-auto'>{children}</div>
        </div>,
        document.body
    );
};
