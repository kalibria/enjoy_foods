import React from 'react';
import styled from "styled-components";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

type TitleProps = {
    text: string;
    highlightedText: string;
    text2?: string
    weight?: number
    textAlign?: "left" | "center" | "right"
}

export const Title:React.FC<TitleProps> = ({text, highlightedText, text2, weight, textAlign}: TitleProps) => {
    return (
        <StyledTitle weight={weight} textAlign={textAlign}>{text} <HighlightedText>{highlightedText} </HighlightedText>{text2}</StyledTitle>
    );
};

type TitleStyleProps = {
    weight?: number
    textAlign?: "left" | "center" | "right"
}

const StyledTitle = styled.h2<TitleStyleProps>`
    text-align: ${props => props.textAlign || 'center'};
    ${font({ Fmin:30, Fmax:36})};
    font-weight: ${props => props.weight || 600};
`

const HighlightedText = styled.span`
  color:${theme.colors.accentFontColor}
`