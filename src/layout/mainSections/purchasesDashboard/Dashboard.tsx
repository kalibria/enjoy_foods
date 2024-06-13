import React from 'react';
import styled from "styled-components";
import {DashboardInfoItem} from "./DashboardInfoItem";

export const Dashboard = () => {
    return (
        <StyledDashboard>
            <div>
                <Header>
                    <p>Purchases</p>
                    <button>This month</button>
                </Header>
                <DashboardInfoItem/>
                <DashboardInfoItem/>
            </div>

        </StyledDashboard>
    );
};

const StyledDashboard = styled.div`
    width: 534px;
    height: 466px;
    background-color: #84a3c1;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`