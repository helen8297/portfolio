import React, { Props, PropsWithChildren, ReactElement } from 'react';

import { TBlogCardProperties } from './blog-card.types';

export const BlogCard = ({
    img,
    alt,
    title,
    date,
}: PropsWithChildren<TBlogCardProperties>): ReactElement => {
    return (
        <span>
            <img src={img} alt={alt} />
            <p>{title}</p>
            <p>{date}</p>
        </span>
    );
};
