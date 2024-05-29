import {theme} from "../../../styles/Theme";
import styled from "styled-components";



const InfoSection = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;
    min-height: 156px;
    
    background-color: ${theme.colors.accentColor};
    color:${theme.colors.secondaryFontColor};
    
    position: relative;
    
`

const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 215px;
    gap:7px;
    padding: 0 46px;
  
    
    &:nth-of-type(2) {
        border-left: 1px solid rgba(197, 197, 197, 0.20);
        border-right: 1px solid rgba(197, 197, 197, 0.20);
        height: 87px;
        max-width: 223px;
    }
    
    & p:first-child{
        font-size: 43px;
        font-weight: 700;
        font-family: ${theme.fontFamily.additionalFontFamily};
    }

    & p:last-child{
        font-size: 10px;
        font-weight: 500;
        font-family: ${theme.fontFamily.primaryFontFamily};
        text-align: center;
    }
`
const IconsWrapper = styled.div`
    position: absolute;
    
    &:first-of-type {
        top: -3px;
        left: 0;
    }
    
    &:nth-of-type(2) {
        top: 54px;
        left: -55px;
    } 
    
    &:nth-of-type(4) {
        top: 0;
        right: 40px;
    }
    
    &:nth-of-type(5) {
        top: 0;
        right: 0;
    }
    
`

export const S = {
    InfoSection,
    InfoItem,
    IconsWrapper
}