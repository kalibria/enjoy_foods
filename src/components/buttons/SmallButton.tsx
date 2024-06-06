import {ButtonHTMLAttributes, ReactNode} from "react";
import styled from "styled-components";

type SmallButtonProps = {
    children?: ReactNode;
    backgroundColor?: string;
    borderRadius?: string;
    width?: string;
    height?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const SmallButton = ({children, onClick, backgroundColor, borderRadius, width, height}:SmallButtonProps) => {
    return <StyledButton onClick={onClick} backgroundColor={backgroundColor} borderRadius={borderRadius} width={width} height={height}>{children}</StyledButton>
}

type StyledButtonProps = {
    backgroundColor?: string;
    borderRadius?: string;
    width?: string;
    height?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
    width: ${props => props.width || '29px'};
    height: ${props => props.height || '29px'};
    background-color: ${props => props.backgroundColor};
    border-radius: ${props => props.borderRadius};
    border: none;
    
  
   
`