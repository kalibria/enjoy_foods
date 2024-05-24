import React from 'react';
import styled from "styled-components";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

type TitleProps = {
    text: string;
    highlightedText: string;
    text2?: string
}

export const Title:React.FC<TitleProps> = ({text, highlightedText, text2}: TitleProps) => {
    return (
        <StyledTitle>{text} <HighlightedText>{highlightedText} </HighlightedText>{text2}</StyledTitle>
    );
};

const StyledTitle = styled.h2`
    ${font({weight:700, Fmin:30, Fmax:36})}
`

const HighlightedText = styled.span`
  color:${theme.colors.accentFontColor}
`