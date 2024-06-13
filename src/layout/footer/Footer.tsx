import React from 'react';
import styled from "styled-components";
import {FooterWithMenu} from "./FooterWithMenu";
import {FooterWithSocialLinks} from "./FooterWithSocialLinks";

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterWithMenu/>
            <FooterWithSocialLinks/>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
 height: 345px;
    background-color: gold;
`