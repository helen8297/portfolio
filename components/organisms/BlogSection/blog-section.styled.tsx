import styled from 'styled-components';

export const StyledBlogHeading = styled.h2`
    grid-area: header;
    justify-self: end;
`;
export const StyledBlogSection = styled.section`
    background: ${({ theme }) => theme.colours.background.four};
`;

export const StyledOuterGridContainer = styled.div`
    display: grid;
    margin: auto;
    padding: 5rem;

    grid-template-areas:
        '. header'
        'grid grid '
        'more-link .';

    max-width: 1170px;
`;

export const StyledGridContainerDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    grid-area: grid;
`;

export const StyledMoreLink = styled.a`
    margin: 0;
    grid-area: more-link;
`;
