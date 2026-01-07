import { useState } from 'react';

/**
 * The usePrevious function is a custom hook that returns the previous value of a variable.
 * Sửa đổi để tương thích với React 19 (không truy cập ref.current khi render)
 */
function usePrevious<T>(value: T): T | undefined {
    const [prevVars, setPrevVars] = useState({
        prev: undefined as T | undefined,
        curr: value,
    });

    if (value !== prevVars.curr) {
        setPrevVars({
            prev: prevVars.curr,
            curr: value,
        });
    }

    return prevVars.prev;
}

export default usePrevious;