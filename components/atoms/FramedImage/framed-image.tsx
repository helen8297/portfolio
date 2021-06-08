import React, { PropsWithChildren, ReactElement } from 'react';

import { TFramedImageProperties } from './framed-image.types';
import { StyledImg, StyledDiv } from './framed-image.styled';

export function FramedImage({
    img,
    alt,
    width,
}: PropsWithChildren<TFramedImageProperties>): ReactElement {
    return (
        <StyledDiv>
            <StyledImg src={img} alt={alt} width={width} />
        </StyledDiv>
    );
}
