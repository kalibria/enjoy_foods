import styled from "styled-components";
import {font} from "../../styles/Common";

const RestaurantCard = styled.div`
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
const Image = styled.img`
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

const InfoIcon = styled.div<StyledInfoIcon>`
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

const Title = styled.h4`
    ${font({weight: 600, Fmax: 26, Fmin: 20})}
`

const RatingBlock = styled.div`
    display: flex;
    ${font({family: 'Manrope', weight: 400, Fmax: 19, Fmin: 15, color: 'rgba(142, 151, 166, 1)'})};
    gap: 4px;
    justify-content: space-between;
`

export const S = {
    RestaurantCard,
    ImgWrapper,
    Image,
    InfoIcon,
    CardContainer,
    Title,
    RatingBlock
}