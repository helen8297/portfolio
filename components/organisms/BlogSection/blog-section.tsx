import React, { useState, useEffect } from 'react';

import { DevToArticleResults } from './blog-section.types';
import { BlogCard } from '@components/atoms';
import {
    StyledBlogHeading,
    StyledGridContainerDiv,
    StyledBlogSection,
    StyledOuterGridContainer,
    StyledMoreLink,
} from './blog-section.styled';

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
            setBlogData(data.slice(0, 6));
        })();
    }, []);

    return (
        <StyledBlogSection>
            <StyledOuterGridContainer>
                <StyledBlogHeading>Blog</StyledBlogHeading>
                {loadState === 'waiting' && <h1>Hold your horses</h1>}
                {loadState === 'finished' && blogData !== undefined && (
                    <StyledGridContainerDiv>
                        {blogData.map(articleDetails => (
                            <BlogCard
                                img={articleDetails?.social_image}
                                alt="blogpost cover"
                                key={articleDetails.id}
                                title={articleDetails?.title}
                                date={articleDetails?.created_at}
                            />
                        ))}
                    </StyledGridContainerDiv>
                )}
                <StyledMoreLink href="#">...more</StyledMoreLink>
            </StyledOuterGridContainer>
        </StyledBlogSection>
    );
}
