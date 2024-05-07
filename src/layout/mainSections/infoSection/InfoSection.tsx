import React from 'react';
import {InfoItem} from "./infoItem";
import styled from "styled-components";

export const InfoSection = () => {
    return (
        <StyledInfoSection>
            <InfoItem/>
            <InfoItem/>
            <InfoItem/>
        </StyledInfoSection>
    );
};

const StyledInfoSection = styled.div`
    display: flex;
    justify-content: space-around;
    
    background-color: bisque;
`