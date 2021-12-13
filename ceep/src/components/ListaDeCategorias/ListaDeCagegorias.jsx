import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends Component {
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
                {this.props.categorias.map((categoria, index) => {
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