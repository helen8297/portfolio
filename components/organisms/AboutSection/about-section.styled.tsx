import styled from 'styled-components';

import { FramedImage } from '@components/atoms';

export const StyledAboutSection = styled.section`
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 15% 45% 20% 20%;
    gap: 3px 3px;
    grid-template-areas:
        'blank header'
        'text image'
        'more-link image'
        'footer image';

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

export const StyledFramedImage = styled(FramedImage)`
    grid-area: image;
`;

export const StyledAboutFooter = styled.footer`
    margin: 0;
    grid-area: footer;
`;
