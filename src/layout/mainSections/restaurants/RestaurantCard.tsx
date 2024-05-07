import React from 'react';
import styled from "styled-components";

export const RestaurantCard = () => {
    return (
        <StyledRestaurantCard>
            <div>img</div>
            <div>info</div>
            <p>The Chicken King</p>
            <div>
                <div>time</div>
                <div>star</div>
            </div>
            <button>save</button>

        </StyledRestaurantCard>
    );
};

const StyledRestaurantCard = styled.div`
    width: 395px;
    height: 297px;
    border-radius: 30px;
    background-color: darkgray;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`