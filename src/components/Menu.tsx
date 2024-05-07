import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
           <MenuList>
               <li>Menu</li>
               <li>Blog</li>
               <li>Pricing</li>
               <li>Contact</li>
           </MenuList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
`

const MenuList = styled.ul`
    display: flex;
    gap: 50px;
`