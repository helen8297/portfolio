import React, { useState, useEffect } from 'react';

import { BlogCard } from '@components/atoms';

export function BlogSection() {
    const [blogData, setBlogData] = useState();

    useEffect(() => {
        const getBlogs = async () => {
            const response = await fetch(
                'https://dev.to/api/articles?username=helen8297'
            );
            const data = await response.json();
            console.log(data);
            setBlogData(data);
        };

        getBlogs();
    }, []);

    return (
        <span>
            {blogData.map(item => {
                <BlogCard
                    img={item.social_image}
                    alt="blogpost cover"
                    title={item.title}
                    date={item.created_at}
                />;
            })}
        </span>
    );
}
