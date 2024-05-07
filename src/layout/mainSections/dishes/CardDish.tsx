import React from 'react';
import styled from "styled-components";

export const CardDish = () => {
    return (
        <StyledCardDish>
            <button>like</button>
            <div>img</div>
            <div>info</div>
            <p>Chicken Hell</p>
            <div>
                <div>time</div>
                <div>star</div>
            </div>
            <div>price</div>
            <button>add</button>
        </StyledCardDish>
    );
};

const StyledCardDish = styled.div`
    width: 225px;
    height: 390px;
    background-color: aquamarine;
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
`