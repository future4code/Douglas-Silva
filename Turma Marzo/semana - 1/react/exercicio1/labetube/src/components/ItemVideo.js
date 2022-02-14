import React from "react";
import "../styles.css";

export const ItemVideo = (props) => {
    const item = "Título do vídeo";
    return (
        <li className="botoes-meunu-vertical">{props.item}</li>
    );    
};
            
