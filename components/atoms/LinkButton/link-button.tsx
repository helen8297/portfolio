import React, { PropsWithChildren, ReactElement } from 'react';

import { TLinkButtonProperties } from './link-button.types';
import { StyledLinkButtonA } from './link-button.styled';

export function LinkButton({
    children,
}: PropsWithChildren<TLinkButtonProperties>): ReactElement {
    return <StyledLinkButtonA href="#">{children}</StyledLinkButtonA>;
}
