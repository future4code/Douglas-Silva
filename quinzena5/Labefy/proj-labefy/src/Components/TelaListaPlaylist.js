import axios from "axios"
import styled from "styled-components"
import React from "react"


const ListPlaylist = styled.div`
    padding: 10px;
    margin: 10px;
`

export default class TelaListaPlaylist extends React.Component {

    state = {
        lista: []
    }

    componentDidMount() {
        this.listarPlaylists()
    }

    listarPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url,{
            headers: {
                Authorization: "Douglas-Silva-Johnson"
            }
        })
        .then((res) => {
            this.setState({lista: res.data.result.list})
        })
        .catch((err) => {
            alert("Erro. Tente novamente mais tarde")
        })

    }

    render () {
        console.log(this.state.lista)
        // const listplay = this.state.lista.map((listage => {
        //     return <p>{listage.name}</p>
        // }) 
        return(
            <div>
                <button onClick={this.props.irParaCriarPlaylist}>criar Playlist</button>
                <h2>Playlists</h2>
                {/* {listplay} */}
            </div>
        )
    }
}