import React, { PropsWithChildren, ReactElement } from 'react';

import { TFramedImageProperties } from './framed-image.types';

export function FramedImage({
    img,
    alt,
    width,
}: PropsWithChildren<TFramedImageProperties>): ReactElement {
    return (
        <span>
            <img src={img} alt={alt} width={width} />
        </span>
    );
}
