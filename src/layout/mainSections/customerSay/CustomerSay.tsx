import React from 'react';
import {ReviewItem} from "./ReviewItem";
import styled from "styled-components";

export const CustomerSay = () => {
    return (
        <StyledCustomerSay>
            <h3><span>Customer</span> Say</h3>
            <Items>
                <ReviewItem/>
                <ReviewItem/>
            </Items>
            <Slider>Slider</Slider>
        </StyledCustomerSay>
    );
};

const StyledCustomerSay = styled.section`   
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Items = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Slider = styled.div`
    width: 400px;
    height: 5px;
    background-color: blueviolet;
`