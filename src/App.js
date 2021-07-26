import './App.css';

import React from "react";
import styled from "styled-components"

const ContainerGeral = styled.div`
max-width: 600px;
height: 100vh;
border: 1px solid black;
flex: 1 1 0%;
display: flex;
flex-direction: column
`;

const campoImput = styled.div`
justify-content: space-between;
`;

const usuarios = styled.div`
display: flex;
width: 80px;
justify-content: space-between;
`;

export default class App extends React.Component {
  state = {
    usuarios: [],
    inputNome: "",
    inputMensagem: ""
  };

  onChangeNome = (e) => {
    this.setState({ inputNome: e.target.value });
  };

  onChangeMensagem = (e) => {
    this.setState({ inputMensagem: e.target.value });
  };

  adicionarUsuario = () => {
    const novosUsuarios = [...this.state.usuarios];
    novosUsuarios.push({
      nome: this.state.inputNome,
      mensagem: this.state.inputMensagem
    });

    this.setState({
      usuarios: novosUsuarios,
      inputNome: "",
      inputMensagem: ""
    });
  };

  deletarUsuario = (nomeUsuario) => {
    const novosUsuarios = [...this.state.usuarios];

    const usuariosFiltrados = novosUsuarios.filter(
      (pessoa) => pessoa.nome !== nomeUsuario
    );

    // this.setState({instrutores: instrutoresFiltrados})
  };

  listaComponentes = () =>
    this.state.usuarios.map((pessoa, indice) => {
      return (
        <usuarios key={indice}>
          <p>{pessoa.nome}</p>
          <p>{pessoa.mensagem}</p>
          <button onClick={() => this.deletarUsuario(pessoa.nome)}>Apagar mensagem</button>
        </usuarios>
      );
    });

  render() {
    console.log(typeof this.deletarUsuario("Teste"));
    console.log(typeof (() => this.deletarUsuario("Teste")));
    return (
      <ContainerGeral className="App">
        <h1>WhatsLab</h1>
        <campoImput>
          <input
            value={this.state.inputNome}
            onChange={this.onChangeNome}
            placeholder="Nome"
            />
          <input
            value={this.state.inputMensagem}
            onChange={this.onChangeMensagem}
            placeholder="Mensagem"
            />
          <button onClick={this.adicionarUsuario}>Enviar</button>
          {this.listaComponentes()}
        </campoImput>
      </ContainerGeral>
    );
  }
}