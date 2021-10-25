import React from "react";
import styled from 'styled-components';

const Page = styled.div`
    display: grid;
    text-align: center;
    gap: 5px;
    align-items: stretch;
    height: 200px;
    width: 50px;
    
`;


export default class Etapa01 extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA 01 - DADOS GERAIS</h1>
                <Page>
                    <label>1.Qual o seu nome?</label>
                    <input type="text" />
                    <label>2. Qual sua idade?</label>
                    <input type="number" />
                    <label>3. Qual seu email?</label>
                    <input type="email" />
                    <label>4. Qual a sua escolaridade?</label>
                    <select type="" />


                </Page>
            </div>

        );
    }
}