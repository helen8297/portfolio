import React, { useState, useEffect } from 'react';

import { DevToArticleResults } from './blog-section.types';
import { BlogCard } from '@components/atoms';

export function BlogSection() {
    const [blogData, setBlogData] = useState<DevToArticleResults[] | []>([]);

    useEffect(() => {
        const getBlogs = async () => {
            const response = await fetch(
                'https://dev.to/api/articles?username=helen8297'
            );
            const data: DevToArticleResults[] = await response.json();
            setBlogData(data);
        };

        getBlogs();
    }, []);

    console.log(blogData[1]);

    return (
        <span>
            <p>{blogData.title}</p>
            {(blogData as DevToArticleResults[]).map(item => {
                <BlogCard
                    img={item?.social_image}
                    alt="blogpost cover"
                    title={item?.title}
                    date={item?.created_at}
                />;
            })}
        </span>
    );
}
