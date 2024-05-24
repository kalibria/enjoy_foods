import React from 'react';
import styled from "styled-components";
import {PremiumQualityDescription} from "./PremiumQualityDescription";
import mobile from '../../../assets/images/Mobile Screen.png'
import {Container} from "../../../components/container/Container";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const PremiumQuality = () => {
    return (
        <StyledPremiumQuality>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <StyledIconWrapper>
                        <Icon iconId={"mobileDecoration"} width={40} height={45} viewBox={"0 0 40 45"}/>
                    </StyledIconWrapper>
                    <img src={mobile} alt={'mobile screen'}/>
                    <PremiumQualityDescription/>
                </FlexWrapper>
            </Container>
        </StyledPremiumQuality>
    );
};

const StyledPremiumQuality = styled.section`
    position: relative;
    
   & img {
       margin-left: 78px;
   }
`

const StyledIconWrapper = styled.div`
    position: absolute;
    top: -20px;
    left: 332px;
}
`