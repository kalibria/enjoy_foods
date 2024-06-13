import React from 'react';
import {DishItem} from "./DishItem";
import styled from "styled-components";
import {Title} from "../../../components/title/Title";
import {Card} from "../../../components/card/Card";
import {SmallCard} from "../../../components/card/SmallCard";

export const DashboardInfo = () => {
    return (
        <StyledDashboardInfo>
            <Title text={'Control'} highlightedText={' Purchases'} text2={' Via Dashboard'} weight={700} sizeMax={50} sizeMin={30} textAlign={'left'}/>
            <SmallCard/>
            <DishItem/>
            <DishItem/>
            <DishItem/>
        </StyledDashboardInfo>
    );
};

const StyledDashboardInfo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    border-radius: 12px;
`