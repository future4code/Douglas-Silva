import React from "react";
import Etapa01 from "./pages/Etapa01";
import Etapa02 from "./pages/Etapa02";
import Etapa03 from "./pages/Etapa03";
import EtapaFim from "./pages/EtapaFim";



export default class App extends React.Component {
  state = {
    secao: 1
  };

  renderizaEtapa = () => {
    switch (this.state.secao) {
      case 1:
        return <Etapa01 />;
      case 2:
        return <Etapa02 />;
      case 3:
        return <Etapa03 />;
      case 4: 
        return <EtapaFim />;
      default:
        return <EtapaFim />;
    }
  }
  irParaProximaEtapa = () => {
    this.setState({ secao: this.state.secao + 1 })
  }

  render() {
    return (
      <>
        <div>{this.renderizaEtapa()}</div>
        {this.state.secao !== 4 && (<button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>)}
      </>
    );
  }
}
