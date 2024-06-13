import React from 'react';
import {S} from './InfoSection_Styles'

type InfoItemProps = {
    title: string
    description: string
}

export const InfoItem:React.FC<InfoItemProps> = ({title, description}: InfoItemProps) => {
    return (
        <S.InfoItem>
            <p>{title}</p>
            <p>{description}</p>
        </S.InfoItem>
    );
};

