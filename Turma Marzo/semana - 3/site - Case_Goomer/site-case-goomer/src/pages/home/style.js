import styled from "styled-components";
import { breakpoits } from "../../utils/global-styles";

export const Header = styled.header`
    background-color: #009ca3;
    height: 62px;
`

export const PageTitle = styled.h1`
    text-align: center;
    margin:  30px;
    color: #404040;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 24px;
    line-height: 29px;
    font-family: Montserrat;
`;

export const RestaurantCardContainer = styled.div`
    display: grid;
    @media(max-width: ${breakpoits.xl}) {
        grid-template-columns: repeat(3, 1fr);
    }   
    @media(max-width: ${breakpoits.sm}) {
        grid-template-columns: 1fr;
    }   
`;