import React from 'react';
import styled from "styled-components";
import {PremiumQualityDescription} from "./PremiumQualityDescription";

export const PremiumQuality = () => {
    return (
        <StyledPremiumQuality>
            <StyledPhoto/>
            <PremiumQualityDescription/>
        </StyledPremiumQuality>
    );
};

const StyledPremiumQuality = styled.section`
    display: flex;
    
    background-color: darkseagreen;
`

const StyledPhoto = styled.img`
    width: 370px;
    
    background-color: darkgray;
`