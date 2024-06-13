import styled from "styled-components";
import {ReactNode} from "react";

type CardProps = {
    children: ReactNode
    height?: string
}

export const Card = ({children, height}: CardProps) => {
    return (
        <StyledCard height={height}>
            {children}
        </StyledCard>
    )
}

const StyledCard = styled.div<{height?:string}>`
    max-width: 395px;
    width: 100%;
    min-height: 298px;
    height: ${props => props.height};
    border-radius: 30px;
    border: 1px solid darkgray;
    box-shadow: 6px 72px 35px 0px rgba(229, 229, 229, 0.7);
`