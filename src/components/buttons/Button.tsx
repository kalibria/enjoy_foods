import {ButtonHTMLAttributes, ReactNode} from "react";
import styled from "styled-components";


type ButtonProps = {
    children?: ReactNode,
    backgroundColor?: string,
    border?: string
    color: string
    fontWeight?: number
    fontSize?: string
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
                         {...restProps}
    >{title}
        {children}
    </StyledButton>
};

type ButtonPropsStyle = {
    backgroundColor?: string,
    color: string,
    border?: string,
    fontSize?: string,
    fontWeight?: number,
}

const StyledButton = styled.button<ButtonPropsStyle>`
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor || 'transparent'};
    border: ${props => props.border || 'none'};
    padding: 20px 26px;
    border-radius: 18px;
    font-weight: ${props => props.fontWeight || 700};
    font-size: ${props => props.fontSize || '18px'};
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px
`