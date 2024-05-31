import styled from "styled-components";
import {theme} from "../../styles/Theme";

type ButtonPropsStyle = {
    backgroundColor?: string,
    color: string,
    border?: string

}

export const Button = styled.button<ButtonPropsStyle>`
    min-width: 122px;
    min-height: 63px;
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor || 'transparent'};
    border: ${props => props.border || `solid 1.5px ${theme.colors.accentColor}`};
    padding: 12px 21px;
    border-radius: 18px;
    font-weight: 700;
    font-size: 18px;

    // :hover {
    //     background-color:${theme.colors.accentColor};
    //     color: ${theme.colors.secondaryColor};
    // }
`

// import {ButtonHTMLAttributes, ReactNode} from "react";
// import styled from "styled-components";
// import {theme} from "../../styles/Theme";
//
// type ButtonProps = {
//     children?: ReactNode,
//     backgroundColor?: string,
//     border?: string
// } & ButtonHTMLAttributes<HTMLButtonElement>
//
// export const Button = ({
//                            title,
//                            onClick,
//                            children,
//                            color,
//                            backgroundColor,
//                            className,
//                            border,
//                            ...restProps
//                        }: ButtonProps) => {
//     return <StyledButton title={title}
//                          onClick={onClick}
//                          color={color}
//                          backgroundColor={backgroundColor}
//                          border={border}
//     >{children}</StyledButton>
// };
//
// const StyledButton = styled.button`
//     //min-width: 122px;
//     //min-height: 63px;
//     color: ${props => props.color};
//     background-color: ${props => props.backgroundColor || 'transparent'};
//     border: ${props => props.border || `solid 1.5px ${theme.colors.accentColor}`};
//     padding: 12px 21px;
//     border-radius: 18px;
//     font-weight: 700;
//     font-size: 18px;
// `