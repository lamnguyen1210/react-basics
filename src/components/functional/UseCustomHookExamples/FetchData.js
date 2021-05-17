import React, { useState, useEffect } from 'react';

// const useFetchData = (id) => {
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         setIsLoading(true);

//         setTimeout(() => {
//             setIsLoading(false);
//         }, 1000);
//     }, []);

//     return isLoading;
// }

export const FetchData = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <div>
            {isLoading ? 'Loading...' : 'Done'}
        </div>
    )
}
