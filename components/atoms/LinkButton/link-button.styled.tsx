import styled from 'styled-components';

export const StyledLinkButtonA = styled.a`
    display: inline-block;
    border: 0.35rem solid white;
    background-color: #88498f;
    color: white;
    text-decoration: none;
    padding: 1rem;
    margin: 1rem;
    border-radius: 3px;

    &:hover,
    &:focus {
        border-color: #2cdab1;
        text-decoration: underline;
    }
`;
