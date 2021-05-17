import React, { useState } from 'react'

export const Advance = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const handleSetText = async () => {
        await new Promise((resolve, reject) => {
            if (true) {
                setTimeout(() => {
                    resolve('33333')
                }, 2000);
            }
            // else { reject('err') }
        })

        setText(prevState => {
            return prevState + ' new text'
        })

        // setText(text + 'new text')
    }

    const handleSetText2 = () => {
        setText('prevState')
    }

    return (
        <div>
            <button className="mr-4" onClick={() => setCount(count + 1)}>Increase count by 1</button>
            <button className="mr-4" onClick={handleSetText}>Set Text</button>
            <button onClick={handleSetText2}>Set Text 2</button>
            <p> Count: {count}</p>
            <p> Text: {text}</p>
        </div>
    )
}
