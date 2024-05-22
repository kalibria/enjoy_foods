import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

type InfoItemProps = {
    title: string
    description: string
}

export const InfoItem = ({title, description}: InfoItemProps) => {
    return (
        <StyledInfoItem>
            <p>{title}</p>
            <p>{description}</p>
        </StyledInfoItem>
    );
};

const StyledInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 148px;
    gap:7px;
    
    & p:first-child{
        font-size: 43px;
        font-weight: 700;
        font-family: ${theme.fontFamily.additionalFontFamily};
    }

    & p:last-child{
        font-size: 10px;
        font-weight: 500;
        font-family: ${theme.fontFamily.primaryFontFamily};
        text-align: center;
    }
`