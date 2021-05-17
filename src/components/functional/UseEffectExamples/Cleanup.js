import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

export const Cleanup = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = (e) => {
        console.log('e.target.innerWidth', e.target.innerWidth);
        setSize(window.innerWidth);
    };

    useEffect(() => {
        console.log('useEffect');
        window.addEventListener('resize', checkSize);

        return () => {
            console.log('cleanup');
            window.removeEventListener('resize', checkSize);
        };
    }, []);

    return (
        <>
            <h1>window</h1>
            <h2>{size} PX</h2>
        </>
    );
};
