import React from 'react';
import {InfoItem} from "./infoItem";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const InfoSection = () => {
    return (
        <StyledInfoSection>
            <InfoItem title={'10K+'} description={"Satisfied Costumers All Great Over The World "}/>
            <InfoItem title={'4M'} description={'Healthy Dishes Sold Including Milk Shakes Smooth'}/>
            <InfoItem title={'99.99%'} description={'Reliable Customer Support We Provide Great Experiences'}/>
        </StyledInfoSection>
    );
};

const StyledInfoSection = styled.section`
    display: flex;
    justify-content: space-around;
    max-width: 1440px;
    width: 100%;
    min-height: 220px;
    
    background-color: ${theme.colors.accentColor};
    color:${theme.colors.secondaryFontColor};
`