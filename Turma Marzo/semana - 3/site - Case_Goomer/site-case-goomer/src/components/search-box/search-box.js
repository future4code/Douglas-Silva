import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search"

const ImputContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px;
`;
const ImputStyled = styled.input`
    width: 500px;
    box-shadow: 0 2px 4px #00000029;
    border: none;
    border-radius: 50px;
    width: 840px;
    padding: 10px;
`;

const SearchIconContainer = styled.div`
    transform: translate(-35px,5px);
`;

export const SearchBox = ({ value, onChange}) => {
    return (
        <ImputContainer>
            <ImputStyled value={value} onChange={onChange} placeholder="Buscar Estabelecimento"/>
            <SearchIconContainer>
                <SearchIcon/>
            </SearchIconContainer>
        </ImputContainer>
    )
}