import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
    const [count, setCount] = useState(0);

    const handleUseEffect = () => {
        console.log('mount', count);

        return () => console.log('unmount', count);
    }

    useEffect(handleUseEffect, [count]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
    )
}

export default UseEffectExample
