import React from 'react';
import styled from "styled-components";

interface Props {
    menuItems: string[]
}

export const Menu:React.FC<Props> = ({menuItems}: Props) => {
    const listItems = menuItems.map(item => {return <li><a href={"#"}>{item}</a></li>})
    return (
        <StyledMenu>
           <MenuList>
               {listItems}
           </MenuList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
`

const MenuList = styled.ul`
    display: flex;
    gap: 54px;
`