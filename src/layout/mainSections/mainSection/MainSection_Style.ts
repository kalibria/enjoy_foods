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

export const S = {
    MainSection,
    Title,
    Description,
    ButtonsWrapper,
    TitleHighlighted
}