import {Card} from "../../../components/card/Card";
import img1 from '../../../assets/images/restaurantsImgs/Resturent Image (1).svg'
import styled from "styled-components";
import {Indicator} from "../../../components/card/Indicator";
import {font} from "../../../styles/Common";
import {CardRating} from "../dishes/CardRating";
import {SmallButton} from "../../../components/buttons/SmallButton";
import {Icon} from "../../../components/icon/Icon";

export const RestaurantsCard = () => {
    return (
        <Card>
          <img src={img1} alt={'food'}/>
            <CardContainer>
                <Indicator text={'Healthy'}/>
                <CardTitle>The Chicken King</CardTitle>
                <CardRating time={24} rating={4.8}/>
                <SmallButton backgroundColor={'rgba(219, 217, 238, 1)'} borderRadius={'50px'} width={'29px'}>
                    <Icon iconId={'bookMark'}  width={11} height={15} viewBox={"0 0 15 20"}/>
                </SmallButton>
            </CardContainer>
        </Card>
    )
}

const CardContainer = styled.div`
    padding: 10px 36px;
`

export const CardTitle = styled.h4`
    ${font({weight: 600, Fmax: 26, Fmin: 20})};
    margin-top: 10px;
    margin-bottom: 15px;
`