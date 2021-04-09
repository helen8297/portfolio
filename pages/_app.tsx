import React, { useContext } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/GlobalStyles';
import { darkTheme, lightTheme } from '../styles/Theme';

import '../styles/globals.css';

const SetThemeContext = React.createContext({} as React.Dispatch<any>);

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = React.useState(lightTheme);

    return (
        <ThemeProvider theme={theme}>
            <SetThemeContext.Provider value={setTheme}>
                <ThemeShit />
                <GlobalStyles />
                <Component {...pageProps} />
            </SetThemeContext.Provider>
        </ThemeProvider>
    );
}

function ThemeShit() {
    const setTheme = useContext(SetThemeContext);
    return (
        <>
            <button onClick={() => setTheme(darkTheme)}>Dark Theme</button>
            <button onClick={() => setTheme(lightTheme)}>Light Theme</button>
        </>
    );
}

export default MyApp;
