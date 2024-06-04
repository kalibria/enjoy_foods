import {ButtonHTMLAttributes, ReactNode} from "react";
import styled from "styled-components";


type ButtonProps = {
    children?: ReactNode,
    backgroundColor?: string,
    border?: string
    color: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
                           title,
                           onClick,
                           children,
                           color,
                           backgroundColor,
                           className,
                           border,
                           ...restProps
                       }: ButtonProps) => {
    return <StyledButton title={title}
                         onClick={onClick}
                         color={color}
                         backgroundColor={backgroundColor}
                         border={border}
    >{children}</StyledButton>
};

type ButtonPropsStyle = {
    backgroundColor?: string,
    color: string,
    border?: string
}

const StyledButton = styled.button<ButtonPropsStyle>`
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor || 'transparent'};
    border: ${props => props.border || 'none'};
    padding: 20px 26px;
    border-radius: 18px;
    font-weight: 700;
    font-size: 18px;
`