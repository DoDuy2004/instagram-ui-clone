import { cn } from "@/lib/utils";
import React from "react";

const Header = ({ className }: { className: string }) => {
    return (
        <div className={cn("text-muted-foreground text-sm", className)}>
            Header
        </div>
    );
};

export default Header;
