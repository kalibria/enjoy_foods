import React from 'react';
import styled from "styled-components";
import {font} from "../../styles/Common";
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
        <StyledRestaurantCard>
            <ImgWrapper>
                <StyledImage src={img} alt={'dish photo'}/>
            </ImgWrapper>
            <CardContainer>
                <StyledInfoIcon backgroundColor={bckInfoIcon} color={colorInfoIcon}>{info}</StyledInfoIcon>
                <StyledTitle>{title}</StyledTitle>
                <RatingBlock>
                    <div>
                        <span>{time} &bull; </span>
                        <Icon iconId={'purpleStar'} width={20} height={19} viewBox={"0 0 16 16"}/>
                        <span> {rating}</span>
                    </div>
                    <SmallButton backgroundColor={'rgba(219, 217, 238, 1)'} borderRadius={'50px'} width={'29px'}><Icon iconId={'bookMark'}  width={11} height={15} viewBox={"0 0 15 20"}/></SmallButton>
                </RatingBlock>

            </CardContainer>
        </StyledRestaurantCard>
    );
};

const StyledRestaurantCard = styled.div`
    width: 395px;
    height: 298px;
    border-radius: 30px;
    border: 1px solid darkgray;
    box-shadow: 6px 72px 35px 0px rgba(229, 229, 229, 0.7);
`

const ImgWrapper = styled.div`
    width: 100%;
    height: 176px;
`
const StyledImage = styled.img`
    border-radius: 30px 30px 0 0;
    padding: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

`

type StyledInfoIcon = {
    color: string
    backgroundColor: string
}

const StyledInfoIcon = styled.div<StyledInfoIcon>`
    width: 65px;
    border-radius: 5px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    font-size: 12px;
    text-align: center;

    text-align: center;
    vertical-align: middle;
    line-height: 25px;
`

const CardContainer = styled.div`
    padding: 10px 36px;
`

const StyledTitle = styled.h4`
    ${font({weight: 600, Fmax: 26, Fmin: 20})}
`

const RatingBlock = styled.div`
    display: flex;
    ${font({family: 'Manrope', weight: 400, Fmax: 19, Fmin: 15, color: 'rgba(142, 151, 166, 1)'})};
    gap: 4px;
    justify-content: space-between;
`