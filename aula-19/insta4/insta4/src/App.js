import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
          
        />
        <Post
          nomeUsuario={'Mark'}
          fotoUsuario={'https://picsum.photos/52/51'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post
          nomeUsuario={'Bill'}
          fotoUsuario={'https://picsum.photos/5/51'}
          fotoPost={'https://picsum.photos/200/147'}
        />
      </MainContainer>
      
    );
  }
}

export default App;
