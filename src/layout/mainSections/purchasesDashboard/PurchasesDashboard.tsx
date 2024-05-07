import React from 'react';
import {DashboardInfo} from "./DashboardInfo";
import {Dashboard} from "./Dashboard";
import styled from "styled-components";

export const PurchasesDashboard = () => {
    return (
        <StyledPurchasesDashboard>
            <DashboardInfo/>
            <Dashboard/>
        </StyledPurchasesDashboard>
    );
};

const StyledPurchasesDashboard = styled.section`
    width: 100%;
    background-color: aquamarine;
    display: flex;
    justify-content: space-between;
`