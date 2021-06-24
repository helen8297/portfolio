import React from 'react';

import { FramedImage } from '@components/atoms';
import { Portfolio } from '../../../libs/portfolio';
import {
    StyledFramedImage,
    StyledDiv,
    StyledSection,
    StyledGridContainerDiv,
    StyledHeader,
    StyledLink,
} from './portfolio-section.styled';

export const PortfolioSection: React.FC = () => {
    return (
        <StyledSection>
            <StyledGridContainerDiv>
                <StyledHeader>Portfolio</StyledHeader>
                <StyledDiv>
                    {Portfolio.map(({ img, alt, title }) => {
                        return (
                            <StyledFramedImage
                                img={img}
                                alt={alt}
                                key={title}
                                width={300}
                            />
                        );
                    })}
                </StyledDiv>

                <StyledLink href="#">...more</StyledLink>
            </StyledGridContainerDiv>
        </StyledSection>
    );
};
