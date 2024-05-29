import React from 'react';
import {Title} from "../../../components/title/Title";
import {S} from "./premiumQuality_Styles";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/buttons/Button";
import {Icon} from "../../../components/icon/Icon";

export const PremiumQualityDescription = () => {
    return (
        <S.PremiumQualityDescription>
            <Title text={'Premium'} highlightedText={'Quality'} text2={'For Your Health'} weight={700} textAlign={'left'}/>
            <ul>
                <li>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
                <li>These foods promote overall wellness by support healthy digestion and boosting immunity</li>
            </ul>
            <Button backgroundColor={theme.colors.accentColor} color={theme.colors.secondaryFontColor}>Download<Icon iconId={'arrow'} width={30} height={20} viewBox={"0 0 20 20"} /></Button>
            <S.IconWrapper>
                <Icon iconId={'qualityArrow'} width={118} height={90} viewBox={"0 0 150 44"}/>
            </S.IconWrapper>

        </S.PremiumQualityDescription>
    );
};

