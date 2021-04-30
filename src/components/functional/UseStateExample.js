import React, { useState } from 'react'

const UseStateExample = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increase count by 1</button>
            <p> Count: {count}</p>
        </div>
    )
}

export default UseStateExample
