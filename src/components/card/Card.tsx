import styled from "styled-components";
import {ReactNode} from "react";

type CardProps = {
    children: ReactNode
}

export const Card = ({children}: CardProps) => {
    return (
        <StyledCard>
            {children}
        </StyledCard>
    )
}

const StyledCard = styled.div`
    max-width: 395px;
    width: 100%;
    min-height: 298px;
    border-radius: 30px;
    border: 1px solid darkgray;
    box-shadow: 6px 72px 35px 0px rgba(229, 229, 229, 0.7);
`