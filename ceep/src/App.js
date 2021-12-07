import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import "./assets/App.css";
import './assets/index.css';
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

class App extends Component {
  constructor() {
    super()

    this.state = {
      notas: []
    }

  }

  criarNota(titulo, texto) {
    const novaNota = {
      titulo,
      texto
    }

    const novoArrayDeNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayDeNotas
    }

    this.setState(novoEstado)
  }

  deletarNota(index) {
    let arrayDeNotas = this.state.notas
    arrayDeNotas.splice(index, 1) // deletando um item de cada vez
    this.setState({notas: arrayDeNotas})
  }


  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas apagarNota={this.deletarNota.bind(this)} notas={this.state.notas} />
      </section>
    );
  }
}

export default App;