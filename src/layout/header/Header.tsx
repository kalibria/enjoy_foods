import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/container/Container";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/wrapper/FlexWrapper";
import {Menu} from "../../components/menu/Menu";
import {MENU_ITEMS} from "../../variables/variables";
import {Button} from "../../components/buttons/Button";
import {theme} from "../../styles/Theme";


export const Header: React.FC = () => {

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <FlexWrapper align={"center"} gap={"103px"}>
                        <Icon iconId={"logo"}/>
                        <Menu menuItems={MENU_ITEMS}/>
                    </FlexWrapper>
                    <ButtonsWrapper>
                        <Button color={theme.colors.primaryFontColor} paddings={"18px 26px"} border={"none"}>Login</Button>
                        <Button color={theme.colors.secondaryFontColor} paddings={"18px 26px"} backgroundColor={theme.colors.accentColor}>Sign up</Button>
                    </ButtonsWrapper>
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

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 9px
`