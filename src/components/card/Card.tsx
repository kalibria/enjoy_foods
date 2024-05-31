import React from 'react';
import styled from "styled-components";
import img1 from '../../assets/images/restaurantsImgs/Resturent Image.svg'
import {font} from "../../styles/Common";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";
import {SmallButton} from "../buttons/SmallButton";


// type RestaurantCardProps = {
//     img: string
//     info: string
//     name: string
//     time: string
//     rating: number
// }

export const Card = () => {
    return (
        <StyledRestaurantCard>
            <ImgWrapper>
                <StyledImage src={img1} alt={'dish photo'}/>
            </ImgWrapper>
            <CardContainer>
                <StyledInfoIcon>Healthy</StyledInfoIcon>
                <StyledTitle>The Chicken King</StyledTitle>
                <RatingBlock>
                    <div>
                        <span>24min &bull; </span>
                        <Icon iconId={'purpleStar'} width={20} height={19} viewBox={"0 0 16 16"}/>
                        <span> 4.8</span>
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

const StyledInfoIcon = styled.div`
    width: 65px;
    border-radius: 5px;
    background-color: rgba(247, 237, 208, 1);
    color: rgba(218, 163, 26, 1);
    font-size: 12px;
    text-align: center;

    text-align: center;
    vertical-align: middle;
    line-height: 25px;
`

const CardContainer = styled.div`
    padding: 10px 36px;
    border: 1px solid red;
    //width: 100%;
    //box-sizing: border-box;
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