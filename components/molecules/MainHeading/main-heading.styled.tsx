import styled from 'styled-components';

injectGlobal`@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Raleway&display=swap');

`;

export const StyledMainHeading = styled.header`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
        'Text Emoji'
        'job-title Emoji';
    background-color: #ffb700;
    margin-top: 50px;

    @media screen and (max-width: 700px) {
        grid-template-areas:
            'Text Text'
            'job-title job-title'
            'Emoji Emoji';
    }
`;

export const StyledH1 = styled.h1`
    grid-area: Text;
    font-family: 'Fredoka One', cursive;
    color: White;
    font-size: 3em;
    margin: 0;
    margin-left: 2rem;
    align-self: end;
`;

export const StyledJobTitle = styled.p`
    grid-area: job-title;
    font-family: 'Raleway', sans-serif;
    color: White;
    margin: 0;
    font-size: 1.5em;
    margin-left: 2rem;
    align-self: start;
`;

export const StyledEmojiSpan = styled.span`
    grid-area: Emoji;
    font-size: 10rem;

    @media screen and (max-width: 700px) {
        font-size: 4rem;
    }
`;
