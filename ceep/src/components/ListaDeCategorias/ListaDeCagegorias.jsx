import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends Component {
    _handleEventoInput(event) {
        if(event.key == 'Enter') {
            console.log("Adicionar categoria")
        }
    }

    render() { 
        return(
            <section className={"sessao-categorias"}>
                <ul className="lista-categorias">
                    <li>Categoria</li>
                    <li>Categoria</li>
                    <li>Categoria</li>
                    <li>Categoria</li>
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