import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {font} from "../../../styles/Common";

type CardRatingProps = {
    time: number
    rating: number
}

export const CardRating = ({time, rating}: CardRatingProps) => {
    return (
        <StyledCardRating>
            <span>{time}min &bull; </span>
            <Icon iconId={'purpleStar'} width={20} height={19} viewBox={"0 0 16 16"}/>
            <span> {rating}</span>
        </StyledCardRating>
    )
}

const StyledCardRating = styled.div`
    ${font({family: 'Manrope', weight: 400, Fmax: 19, Fmin: 15, color: 'rgba(142, 151, 166, 1)'})};
    display: inline-block;
`
