import styled from 'styled-components';
import { breakpoits } from '../../utils/global-styles';
import { PageTitle } from '../../components/modal/page-title';

const RestaurantInfoContainer = styled.div`
    display: grid;
    grid-template-columns: 25% 1fr;
    grid-template-areas: "img name" "img descr" "img hours";
    @media(max-width: ${breakpoits.md}) {
        grid-template-columns: 1fr;
        grid-template-areas: "img" "name" "descr" "hours";
    }
`;

const RestaurantImg = styled.img`
    grid-area: img;
    width: 50%;
    padding: 40px;
    place-self: center;
`;

const RestaurantName = styled(PageTitle)`
    grid-area: name;
    text-align: left;
    align-self: end;
    margin: 10px;
`;

const RestaurantDescription = styled.p`
    grid-area: descr;
`;

const RestaurantTime = styled.p`
    margin: 5px;
`;

const RestaurantTimeContainer = styled.div`
    grid-area: hours;
`;

const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

export const RestaurantInfo = ({ name, img, hours }) => {
    const getHourString = (hour) => {
        const dias = hour.days.length > 1 ? `${days[hour.days[0]-1]} a ${days[hour.days[hour.days.length-1]-1]}` : `${hour.days[0]}`;
        return dias + `: ${hour.from} às ${hour.to}`; 
    }
    return (
        <RestaurantInfoContainer>
            <RestaurantImg src={img}/>
            <RestaurantName>{name}</RestaurantName>
            <RestaurantDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</RestaurantDescription>
            <RestaurantTimeContainer>{hours?.map(hour => <RestaurantTime>{getHourString(hour)}</RestaurantTime>)}</RestaurantTimeContainer>
        </RestaurantInfoContainer>
    )
}