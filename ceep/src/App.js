import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import "./assets/App.css";
import './assets/index.css';
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCagegorias";
import Categorias from "./data/Categorias";
import ArrayDeNotas from "./data/Notas";

class App extends Component {
  constructor() {
    super()
    // this.state = {
    //   notas: [],
    //   //categorias: ['Cursos', 'Trabalho']
    // }
    this.categorias = new Categorias()
    this.notas = new ArrayDeNotas()
  }

  // criarNota(titulo, texto, categoria) {
  //   const novaNota = {
  //     titulo,
  //     texto,
  //     categoria
  //   }
  //   const novoArrayDeNotas = [...this.state.notas, novaNota]
  //   const novoEstado = {
  //     notas: novoArrayDeNotas
  //   }
  //   this.setState(novoEstado)
  // }

  // adicionarCategoria(nomeCategoria) {
  //   const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
  //   const novaCategoria = {
  //     categorias: novoArrayCategorias
  //   }
  //   this.setState(novaCategoria)
  // }

  // deletarNota(index) {
  //   let arrayDeNotas = this.state.notas
  //   arrayDeNotas.splice(index, 1) // deletando um item de cada vez
  //   this.setState({notas: arrayDeNotas})
  // }


  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
        criarNota={this.notas.criarNota}
        categorias={this.categorias.categorias} 
        />
          <main className="conteudo-principal">
            <ListaDeCategorias 
            adicionarCategoria={this.categorias.adicionarCategoria}
            categorias={this.categorias.categorias} />
            <ListaDeNotas apagarNota={this.notas.apagarNota} notas={this.notas.notas} />
          </main>
      </section>
    );
  }
}

export default App;