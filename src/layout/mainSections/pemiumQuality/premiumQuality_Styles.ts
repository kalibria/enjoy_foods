import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

const PremiumQualityDescription = styled.div`
    max-width: 398px;
    position: relative;

    & ul {
        margin-top: 45px;
        margin-bottom: 45px;

    }


    & ul > li {
        ${font({family: 'Inter', color: theme.colors.primaryColor, Fmax: 20, Fmin: 12})};
        list-style-type: disc;

        &:first-child {
            margin-bottom: 20px;
        }
    }


`

const IconWrapper = styled.div`
    position: absolute;
    bottom: -70px;
    right: 145px;
`

const PremiumQuality = styled.section`
    position: relative;
    display: flex;

    & img {
        margin-left: 78px;
    }
`

const QualityIconWrapper = styled.div`
    position: relative;

    & svg:first-child {
        position: absolute;
        top: -15px;
        left: 400px;
    }

`


export const S = {
    PremiumQualityDescription,
    IconWrapper,
    PremiumQuality,
    QualityIconWrapper
}