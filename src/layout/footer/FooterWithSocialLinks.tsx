import React from 'react';
import styled from "styled-components";

export const FooterWithSocialLinks = () => {
    return (
        <StyledFooterWithSocialLinks>
            <div>
                <p>&copy;  EATLY All Rights Reserved.</p>
            </div>
            <IconWrapper>
                <div>icon</div>
                <div>icon</div>
                <div>icon</div>
                <div>icon</div>
            </IconWrapper>

        </StyledFooterWithSocialLinks>
    );
};

const StyledFooterWithSocialLinks = styled.div`
    display: flex;
    justify-content: space-between;
`

const IconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
`