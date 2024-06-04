import React from 'react';
import {S} from './Restaurants_Styles'
import {Title} from "../../../components/title/Title";
import {Container} from "../../../components/container/Container";
import {Card} from "../../../components/card/Card";
import img1 from '../../../assets/images/restaurantsImgs/Resturent Image (1).svg'
import {Button} from "../../../components/buttons/Button";
import {ViewAllButton} from "../../../components/buttons/ViewAllButton";


export const Restaurants = () => {
    return (
        <>
            <Container>
                <Title text={'Our Top '} highlightedText={'Restaurants'}></Title>
                <S.CardsWrapper>
                    <Card title={'The Chicken King'} rating={'4.8'} info={'Healthy'} img={img1} bckInfoIcon={'rgba(247, 237, 208, 1)'} colorInfoIcon={'rgba(218, 163, 26, 1)'
                    } time={'24min'}/>
                    <Card title={'The Burger King'} time={'24min'} rating={'4.9'} img={img1} bckInfoIcon={'rgba(247, 197, 186, 1)'} colorInfoIcon={'rgba(251, 71, 29, 1)'} info={'Trending'}/>
                    <Card title={'The Chicken King'} rating={'4.8'} info={'Healthy'} img={img1} bckInfoIcon={'rgba(247, 237, 208, 1)'} colorInfoIcon={'rgba(218, 163, 26, 1)'} time={'24min'}/>
                </S.CardsWrapper>
                <ViewAllButton/>
            </Container>
        </>
    );
};


