import React from 'react';
import styled from "styled-components";

export const Discount = () => {
    return (
        <StyledDiscount>
            <p>GET 50%</p>
            <form>
                <input/>
                <button>subscribe</button>
            </form>
            <div>img</div>

        </StyledDiscount>
    );
};


const StyledDiscount = styled.div`
    width: 1214px;
    height: 280px;
    background-color: blueviolet;
    margin: 0 auto
`