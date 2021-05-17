import React from 'react';

export const Error = () => {
    let title = 'random title';

    const handleClick = () => {
        title = 'hello people';
        console.log(title);
    };

    return (
        <React.Fragment>
            <h2>{title}</h2>
            <button type='button' onClick={handleClick}>
                change title
            </button>
        </React.Fragment>
    );
};
