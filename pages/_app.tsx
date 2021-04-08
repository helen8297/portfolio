import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/GlobalStyles';
import { darkTheme, lightTheme } from '../styles/Theme';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = React.useState(lightTheme);
    return (
        <ThemeProvider theme={theme}>
            <button onClick={() => setTheme(darkTheme)}>Dark Theme</button>
            <button onClick={() => setTheme(lightTheme)}>Light Theme</button>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
