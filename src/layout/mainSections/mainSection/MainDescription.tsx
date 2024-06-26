import React from 'react';
import {theme} from "../../../styles/Theme";
import {S} from './MainSection_Style';
import {Button} from "../../../components/buttons/Button";
import {Rating} from "../../../components/rating/Rating";

export const MainDescription = () => {
    return (
        <S.MainSection>
            <S.TitleHighlighted>OVER 1000 USERS</S.TitleHighlighted>
            <S.Title>Enjoy Foods All
                Over The <span>World</span> </S.Title>
            <S.Description>EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span>$20 bonus.</span></S.Description>
            <S.ButtonsWrapper>
                <Button color={theme.colors.secondaryFontColor} backgroundColor={theme.colors.accentColor}>Get Started</Button>
                <Button color={theme.colors.accentColor} border={`solid 1.5px ${theme.colors.accentColor}`}>Go Pro</Button>
            </S.ButtonsWrapper>
            <Rating/>
        </S.MainSection>
    );
};



