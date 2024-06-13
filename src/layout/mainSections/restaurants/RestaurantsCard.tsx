import {Card} from "../../../components/card/Card";
import {S} from './Restaurants_Styles'
import {Indicator} from "../../../components/card/Indicator";
import {CardRating} from "../dishes/CardRating";
import {SmallButton} from "../../../components/buttons/SmallButton";
import {Icon} from "../../../components/icon/Icon";
import {CardTitle} from "../../../components/card/CardTitle";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";

type RestaurantsCardProps = {
    img: string
    textIndicator: 'Healthy' | 'Trending' | 'Supreme'
    title: string
    time: number
    rating: number
}

export const RestaurantsCard = ({img, textIndicator, title, time, rating, }: RestaurantsCardProps) => {
    return (
        <Card>
          <img src={img} alt={'food'}/>
            <S.CardContainer>
                <Indicator text={textIndicator}/>
                <CardTitle>{title}</CardTitle>
                <FlexWrapper justify={'space-between'}>
                    <CardRating time={time} rating={rating}/>
                    <SmallButton backgroundColor={'rgba(219, 217, 238, 1)'} borderRadius={'50px'} width={'29px'}>
                        <Icon iconId={'bookMark'}  width={11} height={15} viewBox={"0 0 15 20"}/>
                    </SmallButton>
                </FlexWrapper>
            </S.CardContainer>
        </Card>
    )
}

