import React from 'react';
import iconSprite from '../../assets/images/icons-sprite.svg'

type IconPropStyle = {
    iconId: string
    width: string
    height: number
    viewBox?: string
    fill?: string
}

export const Icon = ({iconId, width, height, viewBox, fill}:IconPropStyle) => {
    return (
        <svg width={width || "112"} height={height || "43"} viewBox={viewBox || "0 0 112 43"} fill={fill || "none"} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${iconId}`}/>
        </svg>
    );
};

