import React from 'react';
import {S} from './Card_Styles';
import {Icon} from "../icon/Icon";
import {SmallButton} from "../buttons/SmallButton";


type CardProps = {
    img: string
    bckInfoIcon: string
    colorInfoIcon: string
    info: string
    title: string
    time: string
    rating: string
}

export const Card = ({img,bckInfoIcon, colorInfoIcon, info, title, time, rating }: CardProps) => {
    return (
        <S.RestaurantCard>
            <S.ImgWrapper>
                <S.Image src={img} alt={'dish photo'}/>
            </S.ImgWrapper>
            <S.CardContainer>
                <S.InfoIcon backgroundColor={bckInfoIcon} color={colorInfoIcon}>{info}</S.InfoIcon>
                <S.Title>{title}</S.Title>
                <S.RatingBlock>
                    <div>
                        <span>{time} &bull; </span>
                        <Icon iconId={'purpleStar'} width={20} height={19} viewBox={"0 0 16 16"}/>
                        <span> {rating}</span>
                    </div>
                    <SmallButton backgroundColor={'rgba(219, 217, 238, 1)'} borderRadius={'50px'} width={'29px'}><Icon iconId={'bookMark'}  width={11} height={15} viewBox={"0 0 15 20"}/></SmallButton>
                </S.RatingBlock>

            </S.CardContainer>
        </S.RestaurantCard>
    );
};

