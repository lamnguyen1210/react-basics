import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext();

// It’s not a Hook because it doesn’t compose like Hooks do. React.memo is equivalent to PureComponent, 
// but it only compares props. (You can also add a second argument to specify a custom comparison function that 
// takes the old and new props. If it returns true, the update is skipped.)

const areEqual = (prevProps, nextProps) => {
    console.log({ prevProps, nextProps });
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
    if (prevProps.count !== nextProps.count) {
        return false;
    }

    return true;
}

const ThemedButton = React.memo(({ count }) => {
    const [myText, setMyText] = useState('');

    console.log('count', count)
    console.log('myText', myText)
    const theme = useContext(ThemeContext);
    return (
        <>
            <button style={{ background: theme.background, color: theme.foreground }}>
                I am styled by theme context!
            </button>
            <p>My Text: {myText}</p>
            <button onClick={() => setMyText(myText + 'a')}>set my text</button>
        </>
    );
}, areEqual)

const Toolbar = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>count</button>
            <ThemedButton count={count} />
        </div>
    );
}

export const ContextWithMemo = () => {
    const [theme, setTheme] = useState({
        foreground: "#000000",
        background: "#eeeeee",
        isLight: true
    });

    const toggleTheme = () => {
        if (theme.isLight) {
            setTheme({
                foreground: "#ffffff",
                background: "#222222",
                isLight: false
            })
        } else {
            setTheme({
                foreground: "#000000",
                background: "#eeeeee",
                isLight: true
            })
        }
    }

    return (
        <ThemeContext.Provider value={theme}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Toolbar />
        </ThemeContext.Provider>
    );
}
