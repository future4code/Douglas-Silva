import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CharacterDetailPage} from './pages/CharacterDetailPage/CharacterDetailPage';
import {CharacterListPage} from './pages/CharacterListPage/CharacterListPage';

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<CharacterListPage/>}/>                    
                <Route path='/detalhesPersonagem' element={<CharacterDetailPage/>}/>                    
            </Routes>
        </BrowserRouter>
    )
}