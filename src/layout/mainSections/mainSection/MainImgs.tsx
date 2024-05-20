import React from 'react';
import styled from "styled-components";
import plate from '../../../assets/images/plate.png'
import {theme} from "../../../styles/Theme";

export const MainImgs = () => {
    return (
        <StyledMainImg>
            <ImgWrapper>
                <StyledImg src={plate} alt={"plate with food"}/>
            </ImgWrapper>

        </StyledMainImg>
        )

};


const ImgWrapper = styled.div`
    width: 430px;
    height: 445px;
    background-color: ${theme.colors.accentColor};
    border-radius: 50%;
   position: relative;
`
const StyledImg = styled.img`
  position: absolute;
    right: 20px;
    bottom: -20px;
`

const StyledMainImg = styled.div`
    max-width: 600px;
    width: 100%;
    max-height: 540px
`