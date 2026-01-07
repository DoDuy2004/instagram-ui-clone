import type { ReactNode } from "react";
import { Dialog } from "@/components/ui/dialog";

export interface BaseDialogContentProps {
    handleClose: () => void;
    data?: unknown;
}

export interface BaseDialogProps {
    id: string;
    open?: boolean;
    onClose?: (T: string) => void;
    content: (T: BaseDialogContentProps) => ReactNode;
    data?: unknown;
    classes?: { paper?: string };
}

export function BaseDialog(props: BaseDialogProps) {
    const { id, open = false, onClose, content, data } = props;

    function handleClose() {
        onClose?.(id);
    }

    return (
        <Dialog
            open={open}
            onOpenChange={(openState) => {
                if (!openState) {
                    handleClose();
                }
            }}>
            {content?.({ handleClose, data })}
        </Dialog>
    );
}
