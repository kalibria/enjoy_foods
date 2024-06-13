import React from 'react';
import {DashboardInfo} from "./DashboardInfo";
import {Dashboard} from "./Dashboard";
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";

export const PurchasesDashboard = () => {
    return (
        <StyledPurchasesDashboard>
            <Container>
                <FlexWrapper>
                    <DashboardInfo/>
                    <Dashboard/>
                </FlexWrapper>
            </Container>
        </StyledPurchasesDashboard>
    );
};

const StyledPurchasesDashboard = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
`