import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../wrapper/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Rating = () => {
    return (
        <StyledRating>
            <FlexWrapper align={"center"} gap={"5px"}>
                    <Icon iconId={"greenStar"} width={"29px"} height={28} viewBox={"0 0 29 28"}/>
                    <span>Trustpilot</span>
                <StarWrapper>
                    <Icon iconId={"goldStar"} viewBox={"0 0 15 15"}/>
                    <Icon iconId={"goldStar"} viewBox={"0 0 15 15"}/>
                    <Icon iconId={"goldStar"} viewBox={"0 0 15 15"}/>
                    <Icon iconId={"goldStar"} viewBox={"0 0 15 15"}/>
                    <Icon iconId={"goldStar"} viewBox={"0 0 15 15"}/>
                </StarWrapper>
                <span>4900+</span>
            </FlexWrapper>
        </StyledRating>

    );
};

const StyledRating = styled.div`
    width: 301px;
    
    & span:first-of-type {
        color: ${theme.colors.primaryFontColor};
    }
    
    & span:last-of-type {
        font-size: 16px;
        font-weight: 500;
    }
`

const StarWrapper = styled.div`
    display: flex;
    gap: 3px;
    width: 96px;
`