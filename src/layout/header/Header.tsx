import React from 'react';
import {S} from './Header_Styles'
import {Container} from "../../components/container/Container";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/wrapper/FlexWrapper";
import {Menu} from "../../components/menu/Menu";
import {MENU_ITEMS} from "../../variables/variables";
import {Button} from "../../components/buttons/Button";
import {theme} from "../../styles/Theme";


export const Header: React.FC = () => {

    return (
        <S.Header>
            <Container>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                        <FlexWrapper align={"center"} gap={"103px"}>
                            <Icon iconId={"logo"}/>
                            <Menu menuItems={MENU_ITEMS}/>
                        </FlexWrapper>
                        <S.ButtonsWrapper>
                            <Button color={theme.colors.primaryColor} paddings={"18px 26px"} border={"none"}>Login</Button>
                            <Button color={theme.colors.secondaryColor} paddings={"18px 26px"} backgroundColor={theme.colors.accentColor}>Sign up</Button>
                        </S.ButtonsWrapper>
                    </FlexWrapper>
            </Container>
        </S.Header>
    )
        ;
};

