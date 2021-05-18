import React, { useState } from 'react'

export const Advance = () => {
    const [text, setText] = useState('');

    const handleSetText = async () => {
        setText(text + 'first fetch loading...');

        setTimeout(() => {
            setText(prevState => {
                return prevState.replace('first fetch loading...', '');
            })

            // setText(text.replace('first fetch loading...', ''));
        }, 2000);
    }

    const handleSetText2 = () => {
        setText(text + 'second fetch loading...');

        setTimeout(() => {
            setText(prevState => {
                return prevState.replace('second fetch loading...', '');
            })

            // setText(text.replace('second fetch loading...', ''));
        }, 4000);
    }

    return (
        <div>
            <button className="mr-4" onClick={handleSetText}>First fetch</button>
            <button onClick={handleSetText2}>Second fetch</button>
            <p> Text: {text}</p>
        </div>
    )
}
