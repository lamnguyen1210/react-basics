import React, { useState, useRef, useEffect } from 'react';

const usePrevious = (value) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value
    });

    return ref.current;
}

export const Previous = () => {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    return (
        <div>
            <p>Now: {count}, before: {prevCount}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}
