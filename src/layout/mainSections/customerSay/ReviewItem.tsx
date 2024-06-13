import React from 'react';
import styled from "styled-components";

export const ReviewItem = () => {
    return (
        <StyledReviewItem>
            <ItemInfo>
                <div>img</div>
                <div>
                    <p>name</p>
                    <p>info</p>
                </div>
            </ItemInfo>
            <p>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
            <div>stars</div>
        </StyledReviewItem>
    );
};

const StyledReviewItem = styled.div`
    width: 528px;
    height: 346px;
    background-color: #acccea;
`

const ItemInfo = styled.div`
    display: flex;
    justify-content: space-between;
`