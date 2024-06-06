import React from 'react';
import {CardDish} from "./CardDish";
import {S} from './Dishes_Styles'
import {Container} from "../../../components/container/Container";
import {Title} from "../../../components/title/Title";
import img1 from "../../../assets/images/dishes/Food Image1.png";
import img2 from "../../../assets/images/dishes/Food Image2.png";
import img3 from "../../../assets/images/dishes/Food Image3.png";
import img4 from "../../../assets/images/dishes/Food Image4.png";
import img5 from "../../../assets/images/dishes/Food Image5.png";
import {ViewAllButton} from "../../../components/buttons/ViewAllButton";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";

export const Dishes = () => {
    return (
        <S.Dishes>
            <Container>
                <Title text={'Our Top'} highlightedText={'Dishes'}/>
                <S.CardsWrapper>
                    <CardDish title={'Chicken Hell'} time={24} img={img1} rating={4.8} cent={99} dollars={12} indicatorText={'Healthy'}/>
                    <CardDish title={'Swe Dish'} img={img2} rating={4.9} time={34} cent={99} dollars={19} indicatorText={"Trending"}/>
                    <CardDish title={'Swe Dish'} img={img3} rating={4.9} time={34} cent={99} dollars={19} indicatorText={'Supreme'}/>
                    <CardDish title={'Chicken Hell'} time={24} img={img4} rating={4.8} cent={99} dollars={19} indicatorText={'Healthy'}/>
                    <CardDish title={'Swe Dish'} img={img5} time={34} cent={99} dollars={19} indicatorText={'Trending'} rating={4.9}/>
                </S.CardsWrapper>
                <FlexWrapper justify={'end'}>
                    <ViewAllButton/>
                </FlexWrapper>
            </Container>
        </S.Dishes>
    );
};


