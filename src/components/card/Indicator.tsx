import styled from "styled-components";


type IndicatorProps = {
    text: 'Healthy' | 'Trending' | 'Supreme'
}

export const Indicator = ({text}: IndicatorProps) => {
    const bgc = text === 'Healthy' && 'rgba(247, 237, 208, 1)' ||
        text === 'Supreme' && 'rgba(51, 172, 100, 1)' || 'rgba(247, 197, 186, 1)';
    const textColor = text === 'Healthy' && 'rgba(218, 163, 26, 1)' || text === 'Supreme' && 'rgba(48, 157, 91, 1)' || 'rgba(251, 71, 29, 1)';

    const indicatorStyle = {
        backgroundColor: bgc,
        color: textColor
    }

    return <StyledIndicator style={indicatorStyle}>{text}</StyledIndicator>
}

const StyledIndicator = styled.div`
    width: 65px;
    border-radius: 5px;
    font-size: 12px;
    text-align: center;
    vertical-align: middle;
    line-height: 25px;
`

