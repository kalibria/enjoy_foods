import React from 'react';
import styled from "styled-components";

export const DishItem = () => {
    return (
        <StyledDishItem>
            <div>img</div>
            <div>
                <p>Chicken Hell</p>
                <p>On The Way</p>
            </div>
            <div>time</div>
        </StyledDishItem>
    );
};

const StyledDishItem = styled.div`
    display: flex;
    justify-content: space-around;
    width: 345px;
    height: 88px;
    background-color: blue;
`