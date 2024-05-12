import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: Inter;
        color: ${theme.colors.primaryFontColor};
        font-weight: 500;
        font-size: 18px;
        line-height: 1.2;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul {
        list-style-type: none;
    }

    li, a {
        text-decoration: none;
        font-family: Inter;
        color: ${theme.colors.primaryFontColor};
        font-weight: 500;
        font-size: 18px;
        line-height: 1.2;
    }
    
    


`