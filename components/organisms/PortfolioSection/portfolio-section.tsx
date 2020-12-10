import React from 'react';

import { FramedImage } from '@components/atoms';
import { Portfolio } from '../../../libs/portfolio';

export const PortfolioSection: React.FC = () => {
    return (
        <section>
            <h2>Portfolio</h2>

            {Portfolio.map(({ img, alt }) => {
                return <FramedImage img={img} alt={alt} />;
            })}

            <a href="#">...more</a>
            <footer>If you'd like to chat, please get in touch!</footer>
        </section>
    );
};