import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQHuSlMYizRBIw/profile-displayphoto-shrink_800_800/0/1569984230449?e=1631750400&v=beta&t=K78EzxIPuHUH2hJbDHz8ewmn_Di2za_XHn9n__3c8J8" 
          nome="Douglas" 
          descricao="Oi, eu sou o Douglas. Sou aluno da Labenu, estudo Front End na turma noturna. Atualmente trabalho de Analista Finaceiro mas estou gostando cada vez mais do mundo Dev."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-linkedin-container">
        <CardPequeno 
          Email="Email: dougui.guilherme17@gmail.com" 
        />
      </div>

      <div className="page-linkedin-container">
        <CardPequeno 
          Endereço="Endereço: Rua Valdomiro Figueiredo de Souza " 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2016/10/html5-logo.png" 
          nome="HTML" 
          descricao="Muito bom para criar o esquleto do site" 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2017/04/css-3-logo.png" 
          nome="CSS" 
          descricao="Aquela caprichada no estilo." 
        />
        <CardGrande 
          imagem="https://marcas-logos.net/wp-content/uploads/2020/11/JavaScript-logo.png" 
          nome="JAVASCRIPT" 
          descricao="A parte lógica que da vida ao site." 
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
