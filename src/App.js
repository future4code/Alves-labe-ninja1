import React, { Component } from "react";
import axios from "axios";
import { Body, Header, Footer, Button } from "./components/styled";
import Home from "./components/Home";
import PageCadastro from "./pages/pageCadastro/PageCadastro";
import PageCards from "./components/PageCards";
import PageCarrinho from "./components/PageCarrinho";
import PageDetail from "./components/PageDetail";

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
      case "detalhes":
        return <PageDetail mudarTela={this.mudarTela}/>
    }
  };

  render() {
    return (
      <Body>
        <Header>
          <h2>LabeNinjas</h2>
          <div>
            <Button onClick={() => this.mudarTela("Home")}>Home</Button>
            <Button onClick={() => this.mudarTela("carinho")}>Carrinho</Button>
          </div>
        </Header>
        {this.visualisarTela()}
        <Footer>Redes sociais</Footer>
      </Body>
    );
  }
}
