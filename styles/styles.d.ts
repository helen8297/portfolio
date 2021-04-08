// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    interface Colours {
        background: {
            one: string;
            two: string;
            three: string;
            four: string;
            five: string;
            six: string;
        };
        text: {
            link: {
                display: string;
                focus: string;
                active: string;
            };
            body: string;
            heading: string;
        };
    }

    export interface DefaultTheme {
        colours: Colours;
        spacing: {
            large: string;
            medium: string;
            small: string;
        };
    }
}
