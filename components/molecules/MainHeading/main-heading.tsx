import { ReactElement } from 'react';

import { TMainHeadingProperties } from './main-heading.types';

export function MainHeading({
    heading,
    subHeading,
    emoji,
}: TMainHeadingProperties): ReactElement {
    return (
        <header>
            <h1>{heading}</h1>
            <p>{subHeading}</p>
            <span>{emoji}</span>
        </header>
    );
}
