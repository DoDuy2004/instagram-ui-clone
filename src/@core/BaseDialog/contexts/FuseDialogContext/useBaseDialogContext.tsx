import { useContext } from 'react';
import { BaseDialogContext } from './BaseDialogContext';

// Base Dialog hook to access the context
export function useBaseDialogContext() {
	const context = useContext(BaseDialogContext);

	if (context === null) {
		throw new Error('useFuseDialogContext must be used within a AppProvider');
	}

	return context;
}
