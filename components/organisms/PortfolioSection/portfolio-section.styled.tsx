import styled from 'styled-components';

import { FramedImage } from '@components/atoms';

export const StyledSection = styled.section`
    background: ${({ theme }) => theme.colours.background.three};
    padding: 5rem;
`;

export const StyledGridContainerDiv = styled.div`
    display: grid;
    margin: auto;
    /* gap: 1rem 5rem; */

    grid-template-areas:
        'header . .'
        'portfolio portfolio portfolio'
        '. . more-link';

    max-width: 1170px;
`;

export const StyledHeader = styled.h2`
    grid-area: header;
`;

export const StyledFramedImage = styled(FramedImage)`
    padding: 10px;
`;

export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1170px;
    grid-area: portfolio;
`;

export const StyledLink = styled.a`
    grid-area: more-link;
`;
