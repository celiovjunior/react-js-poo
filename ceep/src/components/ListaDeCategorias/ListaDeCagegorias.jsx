import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends Component {
    constructor() {
        super();
        this.state = {categorias: []}
        this._novasCategorias = this._novasCategorias.bind(this)
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);

    }

    _novasCategorias(categorias) {
        this.setState({categorias: categorias})
    }

    _handleEventoInput(event) {
        if(event.key === 'Enter') {
            let valorCategoria = event.target.value
            this.props.adicionarCategoria(valorCategoria)
        }

    }

    render() { 
        return(
            <section className="sessao-categorias">
                <ul className="lista-categorias">
                {this.state.categorias.map((categoria, index) => {
                    return <li key={index}>{categoria}</li>
                })}
                </ul>
                <input 
                placeholder="Adicionar categoria" 
                type="text"
                onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}
 
export default ListaDeCategorias;