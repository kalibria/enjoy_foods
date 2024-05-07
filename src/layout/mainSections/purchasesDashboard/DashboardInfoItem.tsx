import React from 'react';
import styled from "styled-components";

export const DashboardInfoItem = () => {
    return (
        <StyledDashboardInfoItem>
            <Info>
                <div>icon</div>
                <div>
                    <p>Expense</p>
                    <p>Increased By 10%</p>
                </div>
                <div>price</div>
            </Info>
            <LineProgress>progressLine</LineProgress>

        </StyledDashboardInfoItem>
    );
};

const StyledDashboardInfoItem = styled.div`
    width: 458px;
    height: 135px;
    background-color: deepskyblue;
    margin: 20px auto;
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;
`

const LineProgress = styled.div`
    width: 100$;
    height: 5px;
    background-color: blueviolet;
`