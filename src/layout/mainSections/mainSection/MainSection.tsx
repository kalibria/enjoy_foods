import React from 'react';
import styled from "styled-components";
import {MainDescription} from "./MainDescription";
import {MainImgs} from "./MainImgs";
import {Container} from "../../../components/container/Container";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";

export const MainSection:React.FC = () => {
    return (
        <StyledMainSection>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <MainDescription/>
                    <MainImgs/>
                </FlexWrapper>
            </Container>
        </StyledMainSection>
    );
};

const StyledMainSection = styled.section`
    display: flex;
    margin: 120px 0 130px;
`

