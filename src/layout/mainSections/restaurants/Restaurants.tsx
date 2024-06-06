import React from 'react';
import {S} from './Restaurants_Styles'
import {Title} from "../../../components/title/Title";
import {Container} from "../../../components/container/Container";
import {Card} from "../../../components/card/Card";

import {ViewAllButton} from "../../../components/buttons/ViewAllButton";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {RestaurantsCard} from "./RestaurantsCard";
import img1 from '../../../assets/images/restaurantsImgs/Mask Group.png';



export const Restaurants = () => {
    return (
        <>
            <Container>
                <Title text={'Our Top '} highlightedText={'Restaurants'}></Title>
                <S.CardsWrapper>
                    <RestaurantsCard textIndicator={"Healthy"} img={img1} rating={4.8} time={24} title={'The Chicken King'}/>
                    <RestaurantsCard textIndicator={'Trending'} img={img1} rating={4.9} time={24} title={'The Burger King'}/>
                    <RestaurantsCard textIndicator={'Healthy'} img={img1} rating={4.8} time={24} title={'The Chicken Kin'}/>
                </S.CardsWrapper>
                <FlexWrapper justify={'end'}>
                    <ViewAllButton/>
                </FlexWrapper>
            </Container>
        </>
    );
};

