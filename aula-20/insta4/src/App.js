import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export default class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: 'Mark',
        fotoUsuario: "https://picsum.photos/52/51",
        fotoPost: "https://picsum.photos/200/151"
      },
      {
        nomeUsuario: 'Bill',
        fotoUsuario: "https://picsum.photos/5/51",
        fotoPost: "https://picsum.photos/200/147" 
      }
    ],
    inputNomeUser: "",
    inputFotoUser: "",
    inputFotoPost: "",
  };
  addNovoPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputNomeUser,
      fotoUsuario: this.state.inputFotoUser,
      fotoPost: this.state.inputFotoPost
    };
    const novosPosts = [...this.state.posts, novoPost];
    this.setState({ posts:novosPosts });
  };
  onChangeInputNomeUser = (event) => {
    this.setState({ inputNomeUser: event.target.value });
  };
  onChangeInputFotoUser = (event) => {
    this.setState({ inputFotoUser: event.target.value });
  };
  onChangeInputFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value });
  };

  render() {
    const listaPosts = this.state.posts.map((post) => {
      return (
          <Post
            nomeUsuario= {post.nomeUsuario}
            fotoUsuario= {post.fotoUsuario}
            fotoPost= {post.fotoPost}
          />
      );
    });
    return (
      <MainContainer>
        <input
        value={this.state.inputNomeUser}
        onChange={this.onChangeInputNomeUser}
        placeholder={"Digite seu nome"}
        />
        <input
        value={this.state.inputFotoUser}
        onChange={this.onChangeInputFotoUser}
        placeholder={"Foto do usuario"}
        />
        <input
        value={this.state.inputFotoPost}
        onChange={this.onChangeInputFotoPost}
        placeholder={"Foto da postagem"}
        />
        <button onClick={this.addNovoPost}>Adicionar</button>
        <hr />
      <MainContainer>{listaPosts}</MainContainer>
      </MainContainer>
    )
  }
}
