import React from 'react';
import {InfoItem} from "./infoItem";
import {S} from './InfoSection_Styles'

export const InfoSection:React.FC = () => {
    return (
        <S.InfoSection>
            <InfoItem title={'10K+'} description={"Satisfied Costumers All Great Over The World "}/>
            <InfoItem title={'4M'} description={'Healthy Dishes Sold Including Milk Shakes Smooth'}/>
            <InfoItem title={'99.99%'} description={'Reliable Customer Support We Provide Great Experiences'}/>
        </S.InfoSection>
    );
};

