import styled from "styled-components";
import { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { breakpoits } from "../../utils/global-styles";

const RestaurantCardContainer = styled.div`
    width: 80%;
    @media(max-width: ${breakpoits.sm}) {
        width: 70%;        
    }
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    height: 80px;
    display: grid;
    grid-template-columns: 25% 1fr;
    transition: 0.5s;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px #00000029 ;
    margin: 0 auto;

`;

const responsiveText = css`
    justify-self: center;
    @media (max-width: ${breakpoits.lg}) {
        justify-self: end;
    }
    @media (max-width: ${breakpoits.md}) {
        justify-self: center;
    }
    @media (max-width: ${breakpoits.sm}) {
        justify-self: end;
    }
    margin: 0;
`;


const RestaurantName = styled.h3`
    ${responsiveText}
    font-size: 16px;
    grid-area: name;
    align-self: end;
`;
const RestaurantAddress = styled.p`
    ${responsiveText}
    font-size: 12px;
    grid-area: address;
    align-self: start;
`;

const RestaurantImage = styled.img`
    width: 85px;
`;

export const RestaurantCard = ({ name, address, id, image }) => {
    const navigation = useNavigate();
    return (
        <RestaurantCardContainer onClick={() =>navigation(`/details/${id}`)} >
            <RestaurantImage src={image}/>
            <div>
                <RestaurantName>{name}</RestaurantName>
                <RestaurantAddress>{address}</RestaurantAddress>

            </div>
        </RestaurantCardContainer>
    )
}