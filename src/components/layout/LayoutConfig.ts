/**
 * The Layout1 Config object.
 */
const LayoutConfig = {
    title: "Layout",
    defaults: {
        mode: "fullwidthanh ",
        containerWidth: 1120,
        navbar: {
            display: true,
            style: "tabbed",
            folded: false,
            position: "left",
            open: true,
        },
        toolbar: {
            display: true,
            style: "fixed",
        },
        footer: {
            display: false,
            style: "fixed",
        },
        leftSidePanel: {
            display: true,
        },
        rightSidePanel: {
            display: true,
        },
    },
    form: {
        mode: {
            title: "Mode",
            type: "radio",
            options: [
                {
                    name: "Boxed",
                    value: "boxed",
                },
                {
                    name: "Full Width",
                    value: "fullwidth",
                },
                {
                    name: "Container",
                    value: "container",
                },
            ],
        },
        containerWidth: {
            title: "Container Width (px)",
            type: "number",
            min: 1024,
        },

        navbar: {
            type: "group",
            title: "Navbar",
            children: {
                display: {
                    title: "Display",
                    type: "switch",
                },
                position: {
                    title: "Position",
                    type: "radio",
                    options: [
                        {
                            name: "Left",
                            value: "left",
                        },
                        {
                            name: "Right",
                            value: "right",
                        },
                    ],
                },
                style: {
                    title: "Style",
                    type: "radio",
                    options: [
                        {
                            name: "Slide",
                            value: "style-1",
                        },
                        {
                            name: "Tabbed",
                            value: "style-2",
                        },
                    ],
                },
                folded: {
                    title: "Tabbed Folded (default)",
                    type: "switch",
                },
            },
        },
        toolbar: {
            type: "group",
            title: "Toolbar",
            children: {
                display: {
                    title: "Display",
                    type: "switch",
                },
                style: {
                    title: "Style",
                    type: "radio",
                    options: [
                        {
                            name: "Fixed",
                            value: "fixed",
                        },
                        {
                            name: "Static",
                            value: "static",
                        },
                    ],
                },
            },
        },
        footer: {},
    },
};

export type LayoutConfigDefaultsType = (typeof LayoutConfig)["defaults"];

export default LayoutConfig;
