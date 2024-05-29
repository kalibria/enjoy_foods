import React from 'react';
import {RestaurantCard} from "./RestaurantCard";
import styled from "styled-components";
import {Title} from "../../../components/title/Title";
import {Container} from "../../../components/container/Container";

export const Restaurants = () => {
    return (
        <StyledRestaurants>
            <Container>
                <Title text={'Our Top '} highlightedText={'Restaurants'}></Title>
                <CardsWrapper>
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                </CardsWrapper>
                <button>View All</button>
            </Container>
        </StyledRestaurants>
    );
};

const StyledRestaurants = styled.section`
 
    
`

const CardsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 86px 0;
`