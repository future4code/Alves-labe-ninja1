import React, { Component } from "react";
import axios from "axios";
<<<<<<< HEAD
import styled from "styled-components";
import {Body, Header, MainHome} from "./components/styled"
import PageCadastro from "./pages/pageCadastro/PageCadastro"
import Carrinho from "./components/carrinho/Carrinho"

=======
import { Body, Header, Footer, Button } from "./components/styled";
import Home from "./components/Home";
import PageCadastro from "./pages/pageCadastro/PageCadastro";
import PageCards from "./components/PageCards";
import PageCarrinho from "./components/PageCarrinho";
>>>>>>> c5dec7b533df249c97db5850e191d9d67574df7e

export default class App extends Component {
  state = {
    telaAtual: "Home",
  };
  mudarTela = (proximaTela) => {
    this.setState({ telaAtual: proximaTela });
  };

  visualisarTela = () => {
    switch (this.state.telaAtual) {
      case "Home":
        return <Home mudarTela={this.mudarTela} />;
      case "cadastro":
        return <PageCadastro mudarTela={this.mudarTela} />;
      case "card":
        return <PageCards mudarTela={this.mudarTela} />;
      case "carinho":
        return <PageCarrinho mudarTela={this.mudarTela} />;
    }
  };

  render() {
    return (
      <Body>
        <Header>
          <h2>LabeNinjas</h2>
<<<<<<< HEAD
          <nav>
            <button>Home</button>
            <button>Carrinho</button>
          </nav>
        </Header>
        <MainHome>
          <h1>LabeNinjas</h1>
          <h3>O talento certo no momento certo</h3>
          <div>
            <button>Quero ser um Ninja</button>
            <button>Contratar um Ninja</button>
          </div>
        </MainHome>
      
      
=======
          <div>
            <Button onClick={() => this.mudarTela("Home")}>Home</Button>
            <Button onClick={() => this.mudarTela("carinho")}>Carrinho</Button>
          </div>
        </Header>
        {this.visualisarTela()}
        <Footer>Redes sociais</Footer>
>>>>>>> c5dec7b533df249c97db5850e191d9d67574df7e
      </Body>
    );
  }
}
