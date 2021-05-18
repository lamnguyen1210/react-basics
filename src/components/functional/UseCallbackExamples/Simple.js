import { useState, useCallback } from 'react';

const funcCount = new Set();

export const Simple = () => {
    const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7]);

    // const total = () => {
    //     return arr.reduce((accumulator, item) => {
    //         return accumulator + item;
    //     }, 0)
    // }

    const total = useCallback(() => {
        return arr.reduce((accummlator, item) => {
            return accummlator + item;
        }, 0)
    }, [arr])

    funcCount.add(total);

    return (
        <div className="App">
            <p>Total: {total()}</p>
            <p>funcCount: {funcCount.size}</p>
            <p>Arr: {JSON.stringify(arr)}</p>
            <button onClick={() => setArr([...arr, 10])}>Increase</button>
        </div>
    );
}
