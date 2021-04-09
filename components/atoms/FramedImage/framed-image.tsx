import React, { PropsWithChildren, ReactElement } from 'react';

import { TFramedImageProperties } from './framed-image.types';
import { StyledDiv } from './framed-image.styled';

export function FramedImage({
    img,
    alt,
    width,
    className,
}: PropsWithChildren<TFramedImageProperties>): ReactElement {
    return (
        <StyledDiv className={className}>
            <image src={img} alt={alt} width={width} />
        </StyledDiv>
    );
}
