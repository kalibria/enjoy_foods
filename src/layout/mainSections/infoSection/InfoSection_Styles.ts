import {theme} from "../../../styles/Theme";
import styled from "styled-components";

const InfoSection = styled.section`
    display: flex;
    justify-content: space-around;
    max-width: 1440px;
    width: 100%;
    min-height: 220px;
    
    background-color: ${theme.colors.accentColor};
    color:${theme.colors.secondaryFontColor};
`

const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 148px;
    gap:7px;
    
    &:nth-of-type(2) {
        position: relative;
    }
    
    &:nth-of-type(2)::before {
        content: "";
        width: 1px;
        height: 87px;
        background-color: rgba(197, 197, 197, 0.20);
        position: absolute;
        left: -130px;
    }

    &:nth-of-type(2)::after {
        content: "";
        width: 1px;
        height: 87px;
        background-color: rgba(197, 197, 197, 0.20);
        position: absolute;
        right: -130px;
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

export const S = {
    InfoSection,
    InfoItem
}