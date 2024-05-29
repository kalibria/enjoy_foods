import React from 'react';
import styled from "styled-components";
import {PremiumQualityDescription} from "./PremiumQualityDescription";
import mobile from '../../../assets/images/Mobile Screen.png'
import {Container} from "../../../components/container/Container";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";

export const PremiumQuality = () => {
    return (
        <StyledPremiumQuality>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <StyledIconWrapper>
                        <Icon iconId={"mobileDecoration"} width={40} height={45} viewBox={"0 0 40 45"}/>
                    </StyledIconWrapper>
                    <img src={mobile} alt={'mobile screen'} width={304} height={609}/>
                    <PremiumQualityDescription/>
                </FlexWrapper>
            </Container>
        </StyledPremiumQuality>
    );
};

const StyledPremiumQuality = styled.section`
    position: relative;
    display: flex;
    
    // ::after {
    //     content: "";
    //     display: inline-block;
    //     //max-width: 1248px;
    //     width: 100%;
    //     height: 1px;
    //     //margin: 0 auto;
    //     background-color: ${theme.colors.accentGrayColor};
    // }
    
   & img {
       margin-left: 78px;
   }
`

const StyledIconWrapper = styled.div`
    position: absolute;
    top: -15px;
    left: 675px;
`