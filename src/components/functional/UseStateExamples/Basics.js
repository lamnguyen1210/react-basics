// import React, { useState } from 'react';
// // starts with use
// // component must be uppercase
// // invoke inside function/component body
// // don't call hooks conditonally

// export const Basics = () => {
//     // console.log(useState());
//     // const value = useState()[0];
//     // const handler = useState()[1];
//     // console.log(value, handler);

//     const [text, setText] = useState('random title');
//     const handleClick = () => {
//         if (text === 'random title') {
//             setText('hello world');
//         } else {
//             setText('random title');
//         }
//     };

//     return (
//         <React.Fragment>
//             <h1>{text}</h1>
//             <button type='button' className='btn btn-outline-secondary' onClick={handleClick}>
//                 change title
//             </button>
//         </React.Fragment>
//     );
// };

import React, { useState, useEffect } from 'react'

export const Basics = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');


    useEffect(() => {
        let ignore = false;
        document.title = `You clicked ${text} times`;

        console.log('ignore', ignore)
        return () => { console.log('dsadas'); ignore = true };
        // eslint-disable-next-line
    }, [count])

    return (
        <>
            <button onClick={() => setCount(count + 1)}>dasdsa</button>
            <button onClick={() => setText('ahihi')}>text</button>
        </>
    )
}

