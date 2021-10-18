import React, { Component } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		comentario: [
			{ valorComentario: "" }
		],
		valorInputComentario: ""
	};

	adicionaNovoComentario = () => {
		const novoComentario = {
			comentario: this.state.valorInputComentario
		};
		const novoComentarios = [...this.state.comentario, novoComentario];
		this.setState({ comentario: novoComentarios });
	};

	// unindoNovoComentario_EnviarComentario = () =>{
	// 	this.props.aoEnviar;
	// 	this.adicionaNovoComentario
	// }

	onChangeComentario = (event) => {
		console.log(event.target.value)
		this.setState({ valorInputComentario: event.target.value }); //se der errado alterar para valorComentario
	}

	render() {
		const listaComentarios = this.state.comentario.map((coments) => {
			return (
				<InputComentario>
					{coments.valorComentario}
				</InputComentario>
			);
		});
		return <CommentContainer>
			<InputComentario
				value={this.state.valorInputComentario}
				onChange={this.onChangeComentario}
				placeholder={'Comentário'}
			/>

			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}
