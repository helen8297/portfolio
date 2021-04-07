import React from 'react';

import { FramedImage } from '@components/atoms';
import { Portfolio } from '../../../libs/portfolio';

export const PortfolioSection: React.FC = () => {
    return (
        <section>
            <h2>Portfolio</h2>

            {Portfolio.map(({ img, alt, title }) => {
                return (
                    <FramedImage img={img} alt={alt} key={title} width={200} />
                );
            })}

            <a href="#">...more</a>
            <footer>If you'd like to chat, please get in touch!</footer>
        </section>
    );
};
