import React, { PropsWithChildren, ReactElement } from 'react';

import { TFramedImageProperties } from './framed-image.types';

export function FramedImage({
    img,
    alt,
}: PropsWithChildren<TFramedImageProperties>): ReactElement {
    return (
        <span>
            <img src={img} alt={alt} />
        </span>
    );
}
