import React from 'react';

import { LinkButton, FramedImage } from '@components/atoms';

export function Deving() {
    return (
        <div>
            <LinkButton>
                <span style={{ fontSize: '40px' }}>😈</span>
                <span>Child</span>
                <span style={{ fontSize: '40px' }}>😈</span>
            </LinkButton>
            <FramedImage
                img={'https://via.placeholder.com/150'}
                alt="Oh hello"
            />
        </div>
    );
}
