import React, { Props, PropsWithChildren, ReactElement } from 'react';
import {
    StyledDiv,
    StyledBlogImg,
    StyledTitle,
    StyledDate,
} from './blog-card.styled';
import { TBlogCardProperties } from './blog-card.types';

export const BlogCard = ({
    img,
    alt,
    title,
    date,
}: PropsWithChildren<TBlogCardProperties>): ReactElement => {
    return (
        <StyledDiv>
            <StyledBlogImg src={img} alt={alt} />
            <StyledTitle>{title}</StyledTitle>
            <StyledDate>
                {new Intl.DateTimeFormat('en-GB', {
                    month: 'long',
                    year: 'numeric',
                }).format(new Date(date))}
            </StyledDate>
        </StyledDiv>
    );
};
