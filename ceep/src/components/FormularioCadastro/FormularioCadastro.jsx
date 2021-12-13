import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props); // constructor da classe pai
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria"
  }

  _handleMudancaCategoria(event) {
    event.stopPropagation();
    this.categoria = event.target.value;
  }

  _handleMudancaDeTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleMudancaDeTexto(event) {
    event.stopPropagation();
    this.texto = event.target.value
  }

  _criarNota(event) {
    event.preventDefault();
    this.props.criarNota(this.titulo, this.texto, this.categoria)
  }
  
  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <select 
        onChange={this._handleMudancaCategoria.bind(this)}
        className="form-cadastro__input" 
        id="">
          <option value="">Sem categoria</option>
        {this.props.categorias.map(categoria => {
          return <option>{categoria}</option>
        })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaDeTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaDeTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;