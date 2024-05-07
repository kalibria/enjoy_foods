import React from 'react';
import styled from "styled-components";

export const InfoItem = () => {
    return (
        <StyledInfoItem>
            <p>10K+</p>
            <p>Satisfied Costumers
                All Great Over The World </p>
        </StyledInfoItem>
    );
};

const StyledInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`