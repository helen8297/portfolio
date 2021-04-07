import '../styles/globals.css';
import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/Theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
