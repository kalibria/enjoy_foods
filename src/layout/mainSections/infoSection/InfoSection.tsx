import React from 'react';
import {InfoItem} from "./infoItem";
import {S} from './InfoSection_Styles'
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import styled from "styled-components";

export const InfoSection:React.FC = () => {
    return (
        <S.InfoSection>
            <IconsWrapper>
                <Icon iconId={'line1'} width={305} height={158} viewBox={"0 0 305 158"} />
            </IconsWrapper>
            <IconsWrapper>
                <Icon iconId={'line1'} width={305} height={100} viewBox={"0 0 305 158"}/>
            </IconsWrapper>

            <FlexWrapper justify={'center'} align={'center'}>
                <InfoItem title={'10K+'} description={"Satisfied Costumers All Great Over The World "}/>
                <InfoItem title={'4M'} description={'Healthy Dishes Sold Including Milk Shakes Smooth'}/>
                <InfoItem title={'99.99%'} description={'Reliable Customer Support We Provide Great Experiences'}/>
            </FlexWrapper>

            <IconsWrapper>
                <Icon iconId={'line2'} width={91} height={158} viewBox={"0 0 91 158"}/>
            </IconsWrapper>
            <IconsWrapper>
                <Icon iconId={'line2'} width={91} height={158} viewBox={"0 0 91 158"}/>
            </IconsWrapper>
        </S.InfoSection>
    );
};


const IconsWrapper = styled.div`
    position: absolute;
    
    &:first-of-type {
        top: -3px;
        left: 0;
    }
    
    &:nth-of-type(2) {
        top: 54px;
        left: -55px;
    } 
    
    &:nth-of-type(4) {
        top: 0;
        right: 40px;
    }
    
    &:nth-of-type(5) {
        top: 0;
        right: 0;
    }
    
`