import { ReactElement } from 'react';

import { TMainHeadingProperties } from './main-heading.types';
import {
    StyledMainHeading,
    StyledJobTitle,
    StyledH1,
    StyledEmojiSpan,
} from './main-heading.styled';

export function MainHeading({
    heading,
    subHeading,
    emoji,
}: TMainHeadingProperties): ReactElement {
    return (
        <StyledMainHeading>
            <StyledH1>{heading}</StyledH1>
            <StyledJobTitle>{subHeading}</StyledJobTitle>
            <StyledEmojiSpan>{emoji}</StyledEmojiSpan>
        </StyledMainHeading>
    );
}
