import React from 'react';
import {RestaurantCard} from "./RestaurantCard";
import styled from "styled-components";

export const Restaurants = () => {
    return (
        <StyledRestaurants>
            <h3>Our Top Restaurants</h3>
            <CardsWrapper>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </CardsWrapper>
            <button>View All</button>
        </StyledRestaurants>
    );
};

const StyledRestaurants = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CardsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`