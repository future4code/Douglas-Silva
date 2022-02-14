import react from "react";
import "../styles.css";

export const CardVideo = (props) => {
    const titulo = "Título do vídeo";

    function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
    return (
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={props.link} alt="" />
            <h4>{props.titulo}</h4>
        </div>

    );    
};
            
            