import React from 'react';
import styled from "styled-components";
import {PremiumQualityDescription} from "./PremiumQualityDescription";
import mobile from '../../../assets/images/Mobile Screen.png'
import {Container} from "../../../components/container/Container";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";

export const PremiumQuality = () => {
    return (
        <StyledPremiumQuality>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <img src={mobile} alt={'mobile screen'}/>
                    <PremiumQualityDescription/>
                </FlexWrapper>
            </Container>
        </StyledPremiumQuality>
    );
};

const StyledPremiumQuality = styled.section`
   & img {
       margin-left: 78px;
   }
`

const StyledPhoto = styled.img`
    width: 370px;
    
    background-color: darkgray;
`