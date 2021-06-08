import styled from 'styled-components';

import { FramedImage } from '@components/atoms';

export const StyledAboutSection = styled.section`
    background: ${({ theme }) => theme.colours.background.two};
    padding: 5rem;
`;

export const StyledAboutInnerDiv = styled.div`
    display: grid;
    margin: auto;
    gap: 1rem 5rem;

    grid-template-areas:
        'blank blank header'
        'text text image'
        'more-link more-link image'
        'footer footer footer ';

    max-width: 1170px;
`;

export const StyledH2 = styled.h2`
    margin: 0;
    margin-right: 2rem;
    grid-area: header;
    justify-self: end;
`;

export const StyledAboutText = styled.p`
    margin: 0;
    grid-area: text;
`;

export const StyledMoreLink = styled.a`
    margin: 0;
    grid-area: more-link;
`;

export const StyledImage = styled.img`
    grid-area: image;
    align-self: center;
    border: solid white 5px;
`;

export const StyledAboutFooter = styled.footer`
    margin: 0;
    grid-area: footer;
`;
