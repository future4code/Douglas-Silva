import React from "react";
import { CardVideo } from "./components/CardVideo";
import { ItemVideo } from "./components/ItemVideo";
import "./styles.css";


export default function App() {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <ItemVideo item={"Início"} />
              <ItemVideo item={"Em alta"} />
              <ItemVideo item={"Inscrições"} />
              <hr />
              <ItemVideo item={"Originais"} />
              <ItemVideo item={"Histórico"} />
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo
              titulo={titulo}
              link={"https://picsum.photos/400/400?a=1"}
            />
            <CardVideo
              titulo={titulo}
              link={"https://picsum.photos/400/400?a=2"}
            />
            <CardVideo
              titulo={titulo}
              link={"https://picsum.photos/400/400?a=3"}
            />
            <CardVideo
              titulo={titulo}
              link={"https://picsum.photos/400/400?a=4"}
            />
            <CardVideo
              titulo={titulo}
              link={"https://picsum.photos/400/400?a=5"}
            />
            <CardVideo
              titulo={titulo}
              link={"https://picsum.photos/400/400?a=6"}
            />
            <CardVideo
              titulo={titulo}
              link={"https://picsum.photos/400/400?a=7"}
            />
            <CardVideo
              titulo={titulo}
              link={"https://picsum.photos/400/400?a=8"}
            />
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
