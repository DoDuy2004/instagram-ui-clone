import React from "react";

import { BaseDialog, type BaseDialogProps } from "../../BaseDialog";
import { BaseDialogContext, BaseDialogDefaultContext } from "./BaseDialogContext";

interface BaseDialogContextProviderProps {
    children: React.ReactNode;
}

export function BaseDialogContextProvider(
    props: BaseDialogContextProviderProps
) {
    const { children } = props;
    const [dialogs, setDialogs] = React.useState(
        BaseDialogDefaultContext.dialogs
    );

    function openDialog(dialogProps: BaseDialogProps) {
        setDialogs((prev) => ({
            ...prev,
            [dialogProps.id]: { ...dialogProps, open: true },
        }));
    }

    function closeDialog(id: BaseDialogProps["id"]) {
        setDialogs((prev) => {
            const newDialogs = { ...prev };
            delete newDialogs[id];

            return newDialogs;
        });
    }

    return (
        <BaseDialogContext.Provider
            value={{ dialogs, openDialog, closeDialog }}>
            {children}
            {Object.entries(dialogs).map(([id, dialog]) => (
                <BaseDialog {...dialog} key={id} onClose={closeDialog} />
            ))}
        </BaseDialogContext.Provider>
    );
}
