import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/container/Container";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/wrapper/FlexWrapper";
import {Menu} from "../../components/menu/Menu";
import {MENU_ITEMS} from "../../variables/variables";


export const Header: React.FC = () => {

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <FlexWrapper align={"center"} gap={"103px"}>
                        <Icon iconId={"logo"}/>
                        <Menu menuItems={MENU_ITEMS}/>
                    </FlexWrapper>
                    <div>log in / sign up</div>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
        ;
};

const StyledHeader = styled.header`
    background-color: aquamarine;
    aquamarineheight: 115px;
    padding: 48px 0 25px;
`