import React from 'react';
import styled from "styled-components";
import {Menu} from "./Menu";


export const Header = () => {
    return (
        <StyledHeader>
            <div>logo</div>
            <Menu/>
            <div>log in / sign up</div>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: aquamarine;
    height: 135px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`