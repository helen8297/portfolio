import React, { PropsWithChildren, ReactElement } from 'react';

import { TLinkButtonProperties } from './link-button.types';

export function LinkButton({
    children,
}: PropsWithChildren<TLinkButtonProperties>): ReactElement {
    return <a href="#">{children}</a>;
}
