import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import routes from "@/configs/routesConfig";
import Layout from "@/components/layout/Layout";
import AppContext from "@/contexts/AppContext";
import ErrorBoundary from "@/@core/utils/ErrorBoundary";
import { BaseDialogContextProvider } from "@/@core/BaseDialog";
import { NavigationProvider } from "@/components/layout/components/navigation/contexts/NavigationProvider";
import { SidebarProvider } from "@/components/ui/sidebar";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            retry: 1,
        },
    },
});

/**
 * The main App component.
 */
function App() {
    const AppContextValue = {
        routes,
    };

    return (
        <ErrorBoundary>
            <AppContext value={AppContextValue}>
                <QueryClientProvider client={queryClient}>
                    {/* <Authentication> */}
                    <NavigationProvider>
                        <SidebarProvider>
                            <BaseDialogContextProvider>
                                <SnackbarProvider
                                    maxSnack={5}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "right",
                                    }}
                                    classes={{
                                        containerRoot:
                                            "bottom-0 right-0 mb-13 md:mb-17 mr-2 lg:mr-20 z-99",
                                    }}>
                                    <Layout />
                                </SnackbarProvider>
                            </BaseDialogContextProvider>
                        </SidebarProvider>
                    </NavigationProvider>
                    {/* </Authentication> */}
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </AppContext>
        </ErrorBoundary>
    );
}

export default App;
