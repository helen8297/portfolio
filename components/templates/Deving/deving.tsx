import React from 'react';

import { LinkButton } from '@components/atoms';
import { MainHeading, NavBar } from '@components/molecules';

export function Deving() {
    return (
        <div>
            <NavBar />
            <MainHeading
                heading="Hello, I'm Helen"
                subHeading="Full Stack Developer"
                emoji="👋🏼"
            />
        </div>
    );
}
