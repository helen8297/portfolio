import styled from 'styled-components';

export const StyledMainHeading = styled.header`
    background-color: ${({ theme }) => theme.colours.background.one};
    padding: 5rem;
`;

export const StyledGridContainer = styled.div`
    display: grid;
    gap: 0px 0px;
    grid-template-areas:
        'Text Emoji'
        'job-title Emoji';
    background-color: ${({ theme }) => theme.colours.background.one};
    margin-top: 50px;
    max-width: 1170px;
    margin: auto;

    @media screen and (max-width: 700px) {
        grid-template-areas:
            'Emoji'
            'Text'
            'job-title';
    }
`;

export const StyledH1 = styled.h1`
    grid-area: Text;
    color: White;
    font-size: 3em;
    margin: 0;
    margin-left: 2rem;
    align-self: end;
`;

export const StyledJobTitle = styled.p`
    grid-area: job-title;
    color: White;
    margin: 0;
    font-size: 1.5em;
    margin-left: 2rem;
    align-self: start;
`;

export const StyledEmojiSpan = styled.span`
    grid-area: Emoji;
    font-size: 10rem;
    justify-self: end;

    @media screen and (max-width: 700px) {
        font-size: 8rem;
    }
`;
