import React from 'react';
import plate from '../../../assets/images/plate.png'
import {S} from './MainSection_Style'
import graph from "../../../assets/images/Graph.png";
import image from "../../../assets/images/1st.png";
import {Icon} from "../../../components/icon/Icon";

export const MainImgs = () => {
    return (
        <S.MainImg>
            <S.ImgWrapper>
                <S.Img src={plate} alt={"plate with food"}/>
                <S.Img src={graph} alt={"graphic"}/>
                <S.Img src={image} alt={"example"}/>
                <S.IconWrapper>
                    <Icon iconId={'mainArrow'} width={100} height={98} viewBox={"0 0 100 98"}/>
                </S.IconWrapper>
                <S.IconWrapper>
                    <Icon iconId={'mainTopIllustration'} width={100} height={98} viewBox={"0 0 100 98"}/>
                </S.IconWrapper>
                <S.IconWrapper>
                    <Icon iconId={'mainDownIllustration'} width={100} height={98} viewBox={"0 0 100 98"}/>
                </S.IconWrapper>
            </S.ImgWrapper>
        </S.MainImg>
    )

};


