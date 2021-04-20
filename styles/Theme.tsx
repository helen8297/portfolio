import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
    colours: {
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
    },
    spacing: {
        large: '1.5rem',
        medium: '1rem',
        small: '0.5rem',
    },
};

export const darkTheme: DefaultTheme = {
    colours: {
        background: {
            one: '#ff6c00',
            two: '#a0204c',
            three: '#23103a',
            four: '#282d4f',
            five: '#0e101c',
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
    },

    spacing: {
        large: '1.5rem',
        medium: '1rem',
        small: '0.5rem',
    },
};
