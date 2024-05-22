import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const MainSection = styled.div`
    max-width: 403px;
    
    & span:first-child {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        
        font-size: 15px;
        color: ${theme.colors.additionalColor};
    }
`

const TitleHighlighted = styled.span`
    font-family: "Poppins", sans-serif;
    font-weight: 600;

    font-size: 15px;
    color: ${theme.colors.additionalColor};

    &::before {
        content: "";
        display: inline-block;
        width: 54px;
        height: 1px;
        background-color: ${theme.colors.additionalColor};
        margin-right: 20px;
        vertical-align: middle;
    }
`

const Title = styled.h1`
    ${font({weight:600, Fmax: 54, Fmin: 46})};
    margin: 18px 0 16px;

    & span:first-of-type {
        ${font({weight:600, Fmax: 54, Fmin: 46, color:theme.colors.accentFontColor})};
    }
`

const Description = styled.p`
    ${font({family: "Inter", Fmax: 12, Fmin: 11})};

    & span:first-of-type {
        ${font({family: "Inter", Fmax: 12, Fmin: 11, color: theme.colors.accentFontColor})};
    }
`

const ButtonsWrapper = styled.div`   
    margin: 53px 0 33px;
    
    button:first-of-type {{
        margin-right: 18px;
    }}
`

const ImgWrapper = styled.div`
    width: 430px;
    height: 430px;
    background-color: ${theme.colors.accentColor};
    border-radius: 50%;
    position: relative;
    
`

const Img = styled.img`
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

const MainImg = styled.div`
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

export const S = {
    MainSection,
    Title,
    Description,
    ButtonsWrapper,
    TitleHighlighted,
    ImgWrapper,
    Img,
    MainImg,
    IconWrapper
}