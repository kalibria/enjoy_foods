import React from 'react';
import {Title} from "../../../components/title/Title";
import {S} from "./premiumQuality_Styles";
import {Icon} from "../../../components/icon/Icon";
import {QualityButton} from "../../../components/buttons/QualityButton";

export const PremiumQualityDescription = () => {
    return (
        <S.PremiumQualityDescription>
            <Title text={'Premium'} highlightedText={'Quality'} text2={'For Your Health'} weight={700} textAlign={'left'} sizeMax={50} sizeMin={30}/>
            <ul>
                <li>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
                <li>These foods promote overall wellness by support healthy digestion and boosting immunity</li>
            </ul>
            <QualityButton/>
            <S.IconWrapper>
                <Icon iconId={'qualityArrow'} width={118} height={90} viewBox={"0 0 150 44"}/>
            </S.IconWrapper>

        </S.PremiumQualityDescription>
    );
};

