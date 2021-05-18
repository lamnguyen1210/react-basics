import React, { useState } from 'react';
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

export const Basics = () => {
    // console.log(useState());
    // const value = useState()[0];
    // const handler = useState()[1];
    // console.log(value, handler);

    const [text, setText] = useState('random title');
    const handleClick = () => {
        if (text === 'random title') {
            setText('hello world');
        } else {
            setText('random title');
        }
    };

    return (
        <React.Fragment>
            <h1>{text}</h1>
            <button type='button' className='btn btn-outline-secondary' onClick={handleClick}>
                change title
            </button>
        </React.Fragment>
    );
};

