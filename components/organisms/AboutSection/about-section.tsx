import React from 'react';

import {
    StyledAboutFooter,
    StyledAboutText,
    StyledFramedImage,
    StyledH2,
    StyledMoreLink,
    StyledAboutSection,
} from './about-section.styled';

export const AboutSection: React.FC = () => {
    return (
        <StyledAboutSection>
            <StyledH2>About</StyledH2>

            <StyledAboutText>
                In January 2020, I left a 10 year teaching career to pursue the
                tech career I’ve always dreamed of. The School of Code bootcamp
                made this possible and I LOVED learning full stack development!
                I’m currently coding with HTML, CSS, JavaScript, React and
                NodeJS.
            </StyledAboutText>
            <StyledFramedImage
                img={'https://via.placeholder.com/150'}
                alt="Oh hello"
                width={200}
            />
            <StyledMoreLink href="#">...more</StyledMoreLink>
            <StyledAboutFooter>
                If you'd like to chat, please get in touch!
            </StyledAboutFooter>
        </StyledAboutSection>
    );
};
