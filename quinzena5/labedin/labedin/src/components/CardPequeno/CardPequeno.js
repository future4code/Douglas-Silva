import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return 
        <div className="mini-card-container">
            <div>
                <h4>{ props.Email }</h4>
                <p>{ props.Endereço }</p>
            </div>
        </div>
    
}

export default CardPequeno;