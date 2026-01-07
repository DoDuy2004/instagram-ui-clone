"use client";
import { memo, type ReactNode, Suspense } from "react";
import { Outlet } from "react-router";
import LeftSide from "./components/LeftSide";
import Header from "./components/Header";
import { useThemeMediaQuery } from "@/@core/hooks";

type LayoutProps = {
    children?: ReactNode;
};

/**
 * The layout 1.
 */
function Layout(props: LayoutProps) {
    const { children } = props;
    const isMobile = useThemeMediaQuery((t) => t.breakpoints.down("lg"));

    return (
        <div className='flex w-full flex-auto'>
            <div className='flex min-w-0 flex-auto'>
                {!isMobile && <LeftSide />}

                <main
                    id='fuse-main'
                    className='relative z-10 flex min-h-svh min-w-0 flex-auto flex-col'>
                    {isMobile && <Header className='fixed' />}

                    <div className='relative z-10 flex min-h-0 flex-auto flex-col'>
                        <Suspense>
                            <Outlet />
                        </Suspense>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default memo(Layout);
