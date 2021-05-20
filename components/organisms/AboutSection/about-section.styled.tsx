import styled from 'styled-components';

import { FramedImage } from '@components/atoms';

export const StyledAboutSection = styled.section`
    display: grid;
    margin: auto;
    gap: 3px 3px;

    grid-template-areas:
        'blank blank header'
        'text text image'
        'more-link more-link image'
        'footer footer footer ';

    max-width: 1170px;
    background: ${({ theme }) => theme.colours.background.two}; ;
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
    padding: 4rem;
`;

export const StyledMoreLink = styled.a`
    margin: 0;
    grid-area: more-link;
`;

export const StyledFramedImage = styled(FramedImage)`
    grid-area: image;
`;

export const StyledAboutFooter = styled.footer`
    margin: 0;
    grid-area: footer;
`;
