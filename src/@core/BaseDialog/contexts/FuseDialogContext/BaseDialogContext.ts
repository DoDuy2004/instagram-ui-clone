"use client";

import React from "react";
import type { BaseDialogProps } from "../../BaseDialog";

export interface BaseDialogContextType {
    dialogs: Record<string, BaseDialogProps>;
    openDialog: (T: BaseDialogProps) => void;
    closeDialog: (id: BaseDialogProps["id"]) => void;
}

export const BaseDialogDefaultContext: BaseDialogContextType = {
    dialogs: {},
    openDialog: () => null,
    closeDialog: () => null,
};

// Base Dialog context
export const BaseDialogContext = React.createContext<BaseDialogContextType>(
    BaseDialogDefaultContext
);
