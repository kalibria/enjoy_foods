import styled from "styled-components";
import {theme} from "../../styles/Theme";

type ButtonPropsStyle = {
    backgroundColor?: string,
    paddings: string,
    color: string,
    border?: string

}

export const Button = styled.button<ButtonPropsStyle>`
    min-width: 122px;
    min-height: 63px;
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor || 'transparent'};
    border: ${props => props.border || `solid 1.5px ${theme.colors.accentColor}`};
    padding: ${props => props.paddings};
    border-radius: 18px;
    font-weight: 700;
    font-size: 18px;
`