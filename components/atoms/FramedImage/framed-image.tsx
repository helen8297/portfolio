import React, { PropsWithChildren, ReactElement } from 'react';

import { TFramedImageProperties } from './framed-image.types';
import { StyledImg } from './framed-image.styled';

export function FramedImage({
    img,
    alt,
    width,
}: PropsWithChildren<TFramedImageProperties>): ReactElement {
    return <StyledImg src={img} alt={alt} width={width} />;
}
