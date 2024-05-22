import React from 'react';
import styled from "styled-components";
import plate from '../../../assets/images/plate.png'
import {theme} from "../../../styles/Theme";
import graph from "../../../assets/images/Graph.png";
import image from "../../../assets/images/1st.png";
import {Icon} from "../../../components/icon/Icon";

export const MainImgs = () => {
    return (
        <StyledMainImg>
            <ImgWrapper>
                <StyledImg src={plate} alt={"plate with food"}/>
                <StyledImg src={graph} alt={"graphic"}/>
                <StyledImg src={image} alt={"example"}/>
                <IconWrapper>
                    <Icon iconId={'mainArrow'} width={100} height={98} viewBox={"0 0 100 98"}/>
                </IconWrapper>
                <IconWrapper>
                    <Icon iconId={'mainTopIllustration'} width={100} height={98} viewBox={"0 0 100 98"}/>
                </IconWrapper>
                <IconWrapper>
                    <Icon iconId={'mainDownIllustration'} width={100} height={98} viewBox={"0 0 100 98"}/>
                </IconWrapper>

            </ImgWrapper>

        </StyledMainImg>
    )

};


const ImgWrapper = styled.div`
    width: 430px;
    height: 430px;
    background-color: ${theme.colors.accentColor};
    border-radius: 50%;
    position: relative;
    
`

const StyledImg = styled.img`
    position: absolute;

    &:first-child {
        right: 20px;
        bottom: -28px;
    }

    &:nth-child(2) {
        position: absolute;
        bottom: -106px;
        left: -120px;
    }

    &:nth-child(3) {
        position: absolute;
        right: -120px;
        top: -65px;
    }
`

const StyledMainImg = styled.div`
    padding: 20px 90px;
`

const IconWrapper = styled.div`
    position: absolute;
    
    &:first-of-type {
        right: -66px;
        top: 68px;
    }
    
    &:nth-of-type(2) {
        top: -85px;
        right: -184px;
    }

    &:nth-of-type(3) {
        top: 480px;
        right: 460px;
    }
`