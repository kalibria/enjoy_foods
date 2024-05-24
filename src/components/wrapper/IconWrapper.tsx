import styled from "styled-components";

type IconWrapperProps = {
    top?: string
    left?: string
    right?: string
    bottom?: string
}

export const IconWrapper = styled.div<IconWrapperProps>`
    position: absolute;
    
    top:${props => props.top || '0px'};
    left:${props => props.left};
    right:${props => props.right};
    bottom:${props => props.bottom};
`