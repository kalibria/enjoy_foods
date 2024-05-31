import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/title/Title";
import {Container} from "../../../components/container/Container";
import {Card} from "../../../components/card/Card";

export const Restaurants = () => {
    return (
        <StyledRestaurants>
            <Container>
                <Title text={'Our Top '} highlightedText={'Restaurants'}></Title>
                <CardsWrapper>
                    <Card/>
                    <Card/>
                    <Card/>
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