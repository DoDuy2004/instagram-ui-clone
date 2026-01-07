import type { LayoutConfigDefaultsType } from "@/components/layout/LayoutConfig";
import type { PartialDeep } from "type-fest";

export type BaseSettingsConfigType = {
    layout: { style?: string; config?: PartialDeep<LayoutConfigDefaultsType> };
    customScrollbars?: boolean;
    defaultAuth?: string[];
    loginRedirectUrl: string;
};

/**
 * The settingsConfig object is a configuration object for the Base application's settings.
 */
const settingsConfig: BaseSettingsConfigType = {
    /**
     * The layout object defines the layout style and configuration for the application.
     */
    layout: {
        /**
         * The style property defines the layout style for the application.
         */
        style: "layout1", // layout1 layout2 layout3
        /**
         * The config property defines the layout configuration for the application.
         * Check out default layout configs at src/components/theme-layouts for example src/components/theme-layouts/layout1/Layout1Config.js
         */
        config: {
            navbar: {
                style: "style-1",
            },
        }, // checkout default layout configs at src/components/theme-layouts for example  src/components/theme-layouts/layout1/Layout1Config.js
    },

    /**
     * The customScrollbars property defines whether or not to use custom scrollbars in the application.
     */
    customScrollbars: true,

    /**
     * The defaultAuth property defines the default authorization roles for the application.
     * To make the whole app auth protected by default set defaultAuth:['admin','staff','user']
     * To make the whole app accessible without authorization by default set defaultAuth: null
     * The individual route configs which have auth option won't be overridden.
     */
    defaultAuth: ["user"],

    /**
     * The loginRedirectUrl property defines the default redirect URL for the logged-in user.
     */
    loginRedirectUrl: "/",
};

export default settingsConfig;
