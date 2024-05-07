import React from 'react';
import {Logo} from "../../components/Logo";
import {Menu} from "../../components/Menu";
import styled from "styled-components";

export const FooterWithMenu = () => {
    return (
        <StyledFooterWithMenu>
            <Logo/>
            <Menu/>
        </StyledFooterWithMenu>
    );
};

const StyledFooterWithMenu = styled.div`
    height: 182px;
    background-color: lightpink;
    display: flex;
    justify-content: space-between;
`