import React from "react"
import axios from "axios"
import styled from "styled-components"

const telaplaylist = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`


export default class TelaCriarPlaylist extends React.Component{
    state = {
        nome: "",
    }

    handleNome = (e) => {
        this.setState({nome: e.target.value})
    }

    criarPlaylist = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome,
        }
        axios.post(url, body, {
            headers: {
                Authorization: "Douglas-Silva-Johnson"
            }
        })
        .then((res) => {
            alert("Playlist criada com sucesso!")
            this.setState({nome: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render(){
        return(
            <telaplaylist>
                <button onClick={this.props.irParaListaPlaylist}>Ir para Lista de Playlists</button>
                <h2>Criar Playlist</h2>
                <input 
                    placeholder={"Playlist"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <button onClick={this.criarPlaylist}>Criar</button>
            </telaplaylist>
        )
    }
}