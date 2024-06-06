import styled from "styled-components";
import {font} from "../../../styles/Common";

const CardDish = styled.div`
   padding: 26px 17px 30px 17px;
`

const CardWrapper = styled.div`
    padding: 20px 10px;
    position: relative;
    
    & button:first-child {
        position: absolute;
        right: 10px;
    }
`

const PriceSection = styled.div`
    margin: 15px 0;

    ${font({family: 'Monrope', weight: 700, Fmax: 26, Fmin: 17})};
    
    & span:first-child {
        ${font({ Fmax: 18, Fmin: 12, color: 'rgba(142, 151, 166, 1)'})};
    }
     & button:first-child {
         padding: 5px;
     }
`

const Dishes = styled.section`

`

const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 86px 0;
`

const ImgWrapper = styled.div`
    width: 185px;
    height: 185px;
    overflow: hidden;
    object-fit: cover;
`

const InfoWrapper = styled.div`
    padding: 10px 15px;
`

export const S = {
    CardDish,
    CardWrapper,
    PriceSection,
    Dishes,
    CardsWrapper,
    ImgWrapper,
    InfoWrapper
}