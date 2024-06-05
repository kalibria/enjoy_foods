import React from 'react';
import {CardDish} from "./CardDish";
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import {Title} from "../../../components/title/Title";

export const Dishes = () => {
    return (
        <StyledDishes>
            <Container>
                <Title text={'Our Top'} highlightedText={'Dishes'}/>
                <CardsWrapper>
                    <CardDish/>
                    <CardDish/>
                    <CardDish/>
                    <CardDish/>
                    <CardDish/>
                </CardsWrapper>
                <button>View All</button>
            </Container>
        </StyledDishes>
    );
};

const StyledDishes = styled.section`

`

const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 76px;
`