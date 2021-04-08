import React, { useState, useEffect } from 'react';

import { DevToArticleResults } from './blog-section.types';
import { BlogCard } from '@components/atoms';

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function BlogSection() {
    const [blogData, setBlogData] = useState<DevToArticleResults[]>();
    const [loadState, setLoading] = useState<'waiting' | 'finished'>('waiting');

    useEffect(() => {
        (async () => {
            const response = await fetch(
                'https://dev.to/api/articles?username=helen8297'
            );
            await timeout(1000);
            const data: DevToArticleResults[] = await response.json();
            setLoading('finished');
            setBlogData(data);
        })();
    }, []);

    return (
        <div>
            {loadState === 'waiting' && <h1>Hold your horses</h1>}
            {loadState === 'finished' &&
                blogData !== undefined &&
                blogData.map(articleDetails => (
                    <React.Fragment key={articleDetails.id}>
                        <p>{articleDetails.title}</p>
                        <BlogCard
                            img={articleDetails?.social_image}
                            alt="blogpost cover"
                            width={200}
                            title={articleDetails?.title}
                            date={articleDetails?.created_at}
                        />
                    </React.Fragment>
                ))}
        </div>
    );
}
