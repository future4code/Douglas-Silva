import React from "react";
import styled from "styled-components";

const MenuLateral = styled.div`
background: black;
width: 200px;
display: grid;
gap: 10px;
`
const BotaoBusca = styled.div`
background: yellow;
display: flex;

padding: 5px;
margin-top: 10px;
`
const botaoPlaylist = styled.div`
`
const botaoCriarPlaylist = styled.div`
`

export class Menu extends React.Component {
    render (){
    return <MenuLateral>
        <BotaoBusca>
            <button>Buscar</button>
        </BotaoBusca>
        <botaoPlaylist>
            <button>Playlists</button>
        </botaoPlaylist>
        <botaoCriarPlaylist>
            <button>Criar Playlists</button>
        </botaoCriarPlaylist>
            
        </MenuLateral>
  } 
}

