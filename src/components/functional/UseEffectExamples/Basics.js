import React, { useEffect, useState } from 'react';

export const Basics = () => {
    const [count, setCount] = useState(0);

    const handleUseEffect = () => {
        console.log('mount', count);
        return () => console.log('unmount', count);
    }


    useEffect(handleUseEffect, [count]);

    return (
        <div>
            {console.log('render count', count)}
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
    )
}
