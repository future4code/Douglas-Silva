import axios from "axios";

export const getRestaurants = async () => {
    let error;
    let response;
    try {
        const { data } = await axios.get('https://challange.goomer.com.br/restaurants');
        response = data;        
    } catch(e) {
        error = e;        
    }
    return {
        error,
        response
    }
}
export const getMenu = async (id) => {
    let error;
    let response;
    try {
        const { data } = await axios.get(`https://challange.goomer.com.br/restaurants/${id}/menu`);
        response = data;        
    } catch(e) {
        error = e;        
    }
    return {
        error,
        response
    }
}

export const getRestaurantDetails = async (id) => {
    let error;
    let response;
    try {
        const { data } = await axios.get(`http://challange.goomer.com.br/restaurants/${id}`);
        response = data;        
    } catch(e) {
        error = e;        
    }
    return {
        error,
        response
    }
}