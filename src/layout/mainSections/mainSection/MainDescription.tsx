import React from 'react';
import styled from "styled-components";

export const MainDescription = () => {
    return (
        <StyledMainSection>
            <h1>Enjoy Foods All
                Over The <span>World</span> </h1>
            <p>EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a $20 bonus.</p>
            <div>
                <button>Get Started</button>
                <button>Go Pro</button>
            </div>
            <div>starts</div>
        </StyledMainSection>
    );
};

const StyledMainSection = styled.div`
    background-color: chocolate;
`