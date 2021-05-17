import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext();

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
    console.log('count', count)
    const theme = useContext(ThemeContext);
    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
        </button>
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
