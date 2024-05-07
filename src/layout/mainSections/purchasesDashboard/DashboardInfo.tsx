import React from 'react';
import {DishItem} from "./DishItem";
import styled from "styled-components";

export const DashboardInfo = () => {
    return (
        <StyledDashboardInfo>
            <h2>Control <span>Purchases</span> Via Dashboard</h2>
            <DishItem/>
            <DishItem/>
            <DishItem/>
        </StyledDashboardInfo>
    );
};

const StyledDashboardInfo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    border-radius: 12px;
`