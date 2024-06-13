import { ReactNode } from "react"
import styled from "styled-components";
import {FlexWrapper} from "../wrapper/FlexWrapper";
import img1 from "../../assets/images/dishes/Food Image1.png"
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

type SmallCardProps  = {
    // children?: ReactNode
}

export const SmallCard = () => {
    return <StyledSmallCard>
        <FlexWrapper align="center">
            <img src={img1} alt={'dishes'} width={77}/>
            <Content>
                <p>Chicken Hell</p>
                <p>On The Way</p>
            </Content>
            <Time>3:09 PM</Time>
        </FlexWrapper>

    </StyledSmallCard>
}

const StyledSmallCard = styled.div`
    width: 345px;
    height: 88px;
    border-radius: 12px;
    //border: 1px solid darkgray;
    box-shadow: 6px 0px 35px 0px rgba(229, 229, 229, 0.7);
    
    & img {
        margin: 4px 17px;    
    }
    
    &  p:first-child {
        ${font({weight: 600, Fmax: 20, Fmin: 12})};
        margin-bottom: 5px;
    }
    
    & p:nth-child(2) {
        ${font({weight: 500, Fmax: 12, Fmin: 7})}
    }
`

const Content = styled.div`
    
`

const Time = styled.div`
    ${font({weight: 500, Fmax: 13, Fmin:8, color: 'rgba(172, 173, 185, 1)' })};
`