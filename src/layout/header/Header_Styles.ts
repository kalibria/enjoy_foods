import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`
    //background-color: aquamarine;
    padding: 48px 0 25px;

    // &::after {
    //     content: "";
    //     max-width: 1246px;
    //     height: 1px;
    //     background-color: ${theme.colors.accentGrayColor};
    //     z-index: 999;
    }
`

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 9px
`

export const S = {
    Header,
    ButtonsWrapper
}