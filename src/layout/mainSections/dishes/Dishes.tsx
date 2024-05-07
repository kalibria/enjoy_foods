import React from 'react';
import {CardDish} from "./CardDish";
import styled from "styled-components";

export const Dishes = () => {
    return (
        <StyledDishes>
            <h3>Our Top <span>Dishes</span></h3>
            <CardsWrapper>
                <CardDish/>
                <CardDish/>
                <CardDish/>
                <CardDish/>
                <CardDish/>
            </CardsWrapper>
            <button>View All</button>
        </StyledDishes>
    );
};

const StyledDishes = styled.section`
    background-color: fuchsia;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`