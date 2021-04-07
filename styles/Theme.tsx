import { DefaultTheme } from 'styled-components';

const colours = {
    background: {
        one: '#ffb700',
        two: '#ff6666',
        three: '#88498f',
        four: '#1ebfac',
        five: '#cc0066',
        six: '#fffefe',
    },
    text: {
        link: {
            display: '#ffffff',
            focus: '#ffffff',
            active: '#ffffff',
        },
        body: 'white',
        heading: 'white',
    },
};

const theme: DefaultTheme = {
    colours: {
        light: {
            ...colours,
        },
        dark: {
            ...colours,
            background: {
                one: '#ff6c00',
                two: '#a0204c',
                three: '#23103a',
                four: '#282d4f',
                five: '#0e101c',
                six: '#fffefe',
            },
        },
    },
    spacing: {
        large: '1.5rem',
        medium: '1rem',
        small: '0.5rem',
    },
};

export default theme;
