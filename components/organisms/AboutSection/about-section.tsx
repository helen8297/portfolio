import React from 'react';

import { FramedImage } from '@components/atoms';

export const AboutSection: React.FC = () => {
    return (
        <section>
            <h2>About</h2>

            <p>
                In January 2020, I left a 10 year teaching career to pursue the
                tech career I’ve always dreamed of. The School of Code bootcamp
                made this possible and I LOVED learning full stack development!
                I’m currently coding with HTML, CSS, JavaScript, React and
                NodeJS.
            </p>
            <FramedImage
                img={'https://via.placeholder.com/150'}
                alt="Oh hello"
                width={200}
            />
            <a href="#">...more</a>
            <footer>If you'd like to chat, please get in touch!</footer>
        </section>
    );
};
