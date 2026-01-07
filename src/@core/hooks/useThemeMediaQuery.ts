"use client";
import { useSyncExternalStore } from "react";

const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
};

type Breakpoint = keyof typeof breakpoints;

const theme = {
    breakpoints: {
        up: (key: Breakpoint) => `(min-width: ${breakpoints[key]}px)`,
        down: (key: Breakpoint) => `(max-width: ${breakpoints[key] - 0.02}px)`,
        between: (start: Breakpoint, end: Breakpoint) =>
            `(min-width: ${breakpoints[start]}px) and (max-width: ${
                breakpoints[end] - 0.02
            }px)`,
    },
};

export function useThemeMediaQuery(selector: (t: typeof theme) => string) {
    const query = selector(theme);

    const subscribe = (callback: () => void) => {
        const mediaQuery = window.matchMedia(query);
        mediaQuery.addEventListener("change", callback);
        return () => mediaQuery.removeEventListener("change", callback);
    };

    const getSnapshot = () => window.matchMedia(query).matches;
    const getServerSnapshot = () => false;

    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default useThemeMediaQuery;
