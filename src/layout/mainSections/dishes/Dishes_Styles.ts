import styled from "styled-components";

const CardDish = styled.div`
   padding: 26px 17px 30px 17px;
`

const CardWrapper = styled.div`
    padding: 26px 10px;
    position: relative;
    
    & button:first-child {
        position: absolute;
        right: 10px;
    }
`

export const S = {
    CardDish,
    CardWrapper
}