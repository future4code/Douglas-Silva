import React from "react"
import TelaCriarPlaylist from "./components/TelaCriarPlaylist"
import TelaListaPlaylist from "./components/TelaListaPlaylist"

export default class App extends React.Component{
  state = {
    telaAtual: "criarPlaylist"
  }
  alterarTela = () => {
    switch (this.state.telaAtual){
      case "criarPlaylist":
        return <TelaCriarPlaylist irParaListaPlaylist={this.irParaListaPlaylist}/>
      case "listaPlaylist":
        return <TelaListaPlaylist irParaCriarPlaylist={this.irParaCriarPlaylist}/>
      default:
        return <div>Pádgina não encontrada</div>
    }
  }
  
  irParaCriarPlaylist = () => {
    this.setState({telaAtual: "criarPlaylist"})
  }
  irParaListaPlaylist = () => {
    this.setState({telaAtual: "listaPlaylist"})
  }

  render(){
    return (
      <div>
        {this.alterarTela()}
      </div>      
    )
  }
}