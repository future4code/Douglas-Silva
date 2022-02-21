import { useEffect, useState } from "react";
import { getRestaurants } from "../../utils/api";
import { RestaurantCard } from "../../components/restaurant-card/card-restaurant";
import { SearchBox } from "../../components/search-box/search-box";
import { Header, PageTitle, RestaurantCardContainer } from "./style";

export const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const onChangeSearchTerm = (e) =>{
        setSearchTerm(e.target.value);
    }
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        getRestaurants()
        .then(({response}) => {
            setRestaurants(response)
        })
    }, []);

    const filterRestaurants = (restaurant) => {
        while(searchTerm === "") return true;
        if(restaurant.name.includes(searchTerm)) return true;
        return false;
    }
    return (
        <>
        <Header/>
        <PageTitle>Bem vindo ao Lista Rango</PageTitle>
        <SearchBox value={searchTerm} onChange={onChangeSearchTerm} />
        <RestaurantCardContainer>
            {restaurants.filter(filterRestaurants).map((restaurant,i) => <RestaurantCard key={restaurant.id}
            name={restaurant.name} address={restaurant.address} image={restaurant.image} id={restaurant.id}/>)}
        </RestaurantCardContainer>
        </>
    )
}