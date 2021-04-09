import React from 'react';

import { FramedImage } from '@components/atoms';
import { Portfolio } from '../../../libs/portfolio';
import { StyledFramedImage } from './portfolio-section.styled';

export const PortfolioSection: React.FC = () => {
    return (
        <section>
            <h2>Portfolio</h2>

            {Portfolio.map(({ img, alt, title }) => {
                return (
                    <StyledFramedImage
                        img={img}
                        alt={alt}
                        key={title}
                        width={'20rem'}
                    />
                );
            })}

            <a href="#">...more</a>
            <footer>If you'd like to chat, please get in touch!</footer>
        </section>
    );
};
