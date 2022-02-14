import {PeopleListPageContainer} from './styled';
import {PeopleListItem} from '../../componentes/peopleList';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const CharacterListPage = () => {
    const [CharacterListPage, setCharacterListPage] = useState([]);
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then(({data}) => {
            setCharacterListPage(data.results)
        })
        .catch(err => console.log(err))    
    },[]);    
    return(
        <PeopleListPageContainer>
            <h1>Lista de personagens</h1>
            {CharacterListPage.map((people, index) => <PeopleListItem key={index} name={people.name}/>)}
        </PeopleListPageContainer>

    )
}