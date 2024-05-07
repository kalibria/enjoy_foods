import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/Menu";
import {Logo} from "../../components/Logo";



export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
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