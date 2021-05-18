import { useState, useMemo } from 'react';

const funcCount = new Set();

export const Simple = () => {
    const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7]);

    // const total = () => {
    //   return arr.reduce((accumulator, item) => {
    //     return accumulator + item;
    //   }, 0)
    // }

    const memoTotal = useMemo(() => () => {
        return arr.reduce((accumulator, item) => {
            return accumulator + item;
        }, 0)
    }, [arr])

    funcCount.add(memoTotal);

    return (
        <div className="App">
            <p>Total: {memoTotal()}</p>
            <p>funcCount: {funcCount.size}</p>
            <button onClick={() => setArr([...arr, 10])}>Increase</button>
        </div>
    );
}
