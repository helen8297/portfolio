import React from 'react';

import devtoImg from '../../../public/dev.svg';
import githubImg from '../../../public/github.svg';
import linkedinImg from '../../../public/linkedin.svg';
import twitterImg from '../../../public/twitter.svg';

export function ContactSection() {
    return (
        <div>
            <h2>Contact</h2>
            <a href="https://dev.to/helen8297">
                <img src={devtoImg} alt="Dev.to logo" />
            </a>
            <a href="https://github.com/helen8297">
                <img src={githubImg} alt="Github logo" />
            </a>
            <a href="https://www.linkedin.com/in/helen8297/">
                <img src={linkedinImg} alt="Linkedin logo" />
            </a>
            <a href="https://twitter.com/helen8297">
                <img src={twitterImg} alt="Twitter logo" />
            </a>
        </div>
    );
}
