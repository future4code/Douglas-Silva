import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="mini-card-container">
            <div>
                <h4>{ props.email }</h4>
                <h4>{ props.Endereço }</h4>
            </div>
        </div>
    )
}

export default CardPequeno;