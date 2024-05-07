import React from 'react';
import styled from "styled-components";
import {MainDescription} from "./MainDescription";
import {MainImgs} from "./MainImgs";

export const MainSection = () => {
    return (
        <StyledMainSection>
            <MainDescription/>
            <MainImgs/>
        </StyledMainSection>
    );
};

const StyledMainSection = styled.section`
    display: flex;
`

