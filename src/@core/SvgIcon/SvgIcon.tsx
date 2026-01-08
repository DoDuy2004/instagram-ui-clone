import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { type SVGProps, forwardRef } from "react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export type AppSvgIconProps = SVGProps<SVGSVGElement> & {
    size?: number | string;
    color?:
        | "inherit"
        | "primary"
        | "secondary"
        | "error"
        | "warning"
        | "info"
        | "success"
        | "action"
        | "disabled";
};

const AppSvgIcon = forwardRef<SVGSVGElement, AppSvgIconProps>((props, ref) => {
    const {
        children,
        className,
        size = 20,
        color = "inherit",
        ...rest
    } = props;

    if (typeof children !== "string") {
        return null;
    }

    if (!children.includes(":")) {
        return null;
    }

    const iconPath = children.replace(":", ".svg#");
    const isLucideIcon = children.startsWith("lucide:");

    const colorClasses = {
        primary: "text-primary",
        secondary: "text-secondary",
        error: "text-destructive",
        warning: "text-warning",
        info: "text-info",
        success: "text-success",
        action: "text-accent-foreground",
        disabled: "text-muted-foreground",
        inherit: "text-current",
    };

    return (
        <svg
            {...rest}
            ref={ref}
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            viewBox={isLucideIcon ? "0 0 24 24" : "0 0 100 100"}
            className={cn(
                "shrink-0 transition-colors",
                isLucideIcon ? "stroke-current" : "fill-current",
                colorClasses[color as keyof typeof colorClasses],
                className
            )}
            style={{
                width: size,
                height: size,
                minWidth: size,
                minHeight: size,
                ...props.style,
            }}
            {...(isLucideIcon && {
                stroke: "currentColor",
                strokeWidth: props?.strokeWidth,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            })}>
            <use xlinkHref={`/assets/icons/${iconPath}`} />
        </svg>
    );
});

AppSvgIcon.displayName = "AppSvgIcon";

export default AppSvgIcon;
