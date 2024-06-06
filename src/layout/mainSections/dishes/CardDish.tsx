import React from 'react';
import styled from "styled-components";
import {Card} from "../../../components/card/Card";
import {PriceSection} from "./PriceSection";

export const CardDish = () => {
    return (
        <StyledCardDish>
        {/*// <StyledCardDish img={img1} bckInfoIcon={'rgba(247, 237, 208, 1)'} colorInfoIcon={'rgba(218, 163, 26, 1)'} info={'Healthy'} title={'Chicken Hell'} time={'24min'} rating={'4.8'}>*/}
            <PriceSection dollars={12} cent={99}/>
        </StyledCardDish>

    );
};

const StyledCardDish = styled(Card)`
   padding: 26px 17px 30px 17px;
`