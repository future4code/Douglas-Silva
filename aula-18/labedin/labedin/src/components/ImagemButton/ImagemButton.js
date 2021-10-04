import React from 'react';
import styled from 'styled-components';

const ContaineruButton = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`
const ImgButtonContainer = styled.img`
    width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <ContaineruButton>
            <ImgButtonContainer src={props.imagem}></ImgButtonContainer>
            <p>{props.texto}</p>
        </ContaineruButton>

    )
}

export default ImagemButton;