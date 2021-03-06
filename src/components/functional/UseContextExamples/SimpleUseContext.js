import React, { useContext } from 'react'

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext(themes.light);
// ThemeContext.displayName = 'MyDisplayName';

export const SimpleUseContext = () => {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

const Toolbar = (props) => {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

const ThemedButton = () => {
    const theme = useContext(ThemeContext);
    console.log(`theme`, theme)
    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
        </button>
    );
}