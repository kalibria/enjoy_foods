import React from 'react';
import {S} from "./premiumQuality_Styles"
import {PremiumQualityDescription} from "./PremiumQualityDescription";
import mobile from '../../../assets/images/Mobile Screen.png'
import {Container} from "../../../components/container/Container";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";


export const PremiumQuality = () => {
    return (
        <S.PremiumQuality>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <S.QualityIconWrapper>
                        <Icon iconId={"mobileDecoration"} width={40} height={45} viewBox={"0 0 40 45"}/>
                        <img src={mobile} alt={'mobile screen'} width={304} height={609}/>
                    </S.QualityIconWrapper>

                    <PremiumQualityDescription/>
                </FlexWrapper>
            </Container>
        </S.PremiumQuality>
    );
};

