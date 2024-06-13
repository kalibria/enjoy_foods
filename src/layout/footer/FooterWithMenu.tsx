import React from 'react';
import {Menu} from "../../components/menu/Menu";
import styled from "styled-components";
import {MENU_ITEMS} from "../../variables/variables";

export const FooterWithMenu = () => {
    return (
        <StyledFooterWithMenu>
            <div>logo</div>
            <Menu menuItems={MENU_ITEMS}/>
        </StyledFooterWithMenu>
    );
};

const StyledFooterWithMenu = styled.div`
    height: 182px;
    background-color: lightpink;
    display: flex;
    justify-content: space-between;
`