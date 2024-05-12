import styled from "styled-components";

type FlexWrapperProps = {
    direction?: "column" | "row";
    justify?: string;
    align?: string;
    wrap?: string;
    grow?: number
    shrink?: string;
    gap?: string
}


export const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "flex-start"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    flex-grow: ${props => props.grow || 0};
    flex-shrink: ${props => props.shrink || 0};
    gap: ${props => props.gap};
`