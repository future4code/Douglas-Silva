import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPerfil from './components/CardGrande/douglas.jpeg';
import ImagemMail from './components/CardPequeno/mail1.jpg';
import ImagemLocatiom from './components/CardPequeno/location-pin.png';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={ImagemPerfil}
          nome="Douglas"
          descricao="Oi, eu sou o Douglas. Sou aluno da Labenu. Estou atualmente estudando Front End com React e estou gostando muito do curso, espero me inserir nesse mercado fantástico!"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
        <CardPequeno
          imagem={ImagemMail}
          nome="Email:"
          descricao="dglfs_douglas@hotmail.com"
        />
        <CardPequeno
          imagem={ImagemLocatiom}
          nome="Endereço:"
          descricao="Rua Valdomiro Figueiredo de Souza"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formação em Fronte End"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="Unipê"
          descricao="Gestão Financeira"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
