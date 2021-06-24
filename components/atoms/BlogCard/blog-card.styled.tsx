import styled from 'styled-components';

export const StyledDiv = styled.div`
    background-color: white;
    max-width: 40rem;
    min-width: 20rem;
    margin: 2rem;
    display: grid;
    grid-template-rows: 60% auto auto;
    align-items: center;
    justify-items: center;
    border-radius: 5px;
`;

export const StyledBlogImg = styled.img`
    object-fit: fill;
    width: 100%;
`;
export const StyledTitle = styled.p`
    color: black;
    text-align: center;
    font-weight: bold;
`;
export const StyledDate = styled.p`
    color: black;
`;
