import React, { Component } from "react";
import { Body, Header, Footer, Button } from "./components/styled";
import Home from "./components/Home";
import PageCadastro from "./pages/pageCadastro/PageCadastro";
import PageCards from "./components/PageCards";
import PageCarrinho from "./pages/pagecarrinho/PageCarrinho";
import PageDetail from "./components/PageDetail";


export default class App extends Component {
  state = {
    telaAtual: "Home",
    carrinho: ["produto"], // valores teste de carrinho e valortotal
    valorTotal: 10
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
      case "carrinho":
        return <PageCarrinho mudarTela={this.mudarTela}
          valorTotal={this.state.valorTotal}
          carrinho={this.state.carrinho}
          removerItem={this.removerItemCarrinho}
        />;
      case "detalhes":
        return <PageDetail mudarTela={this.mudarTela} />
      default:
        return <Home mudarTela={this.mudarTela} />;
    }
  };

  // vai ser colocado no botão no card para adiciona job
  adicionarCarrinho = (item) => {
    const novoItem = { ...item }
    const novoCarrinho = [...this.state.carrinho, novoItem]
    this.setState({ carrinho: novoCarrinho })
    alert("Serviço adicionado com sucesso!")
  }

  removerItemCarrinho = (item) => {
    console.log(item)
  }

  render() {
    return (
      <Body>
        <Header>
          <h2>LabeNinjas</h2>
          <div>
            <Button onClick={() => this.mudarTela("Home")}>Home</Button>
            <Button onClick={() => this.mudarTela("carrinho")}>Carrinho</Button>
          </div>
        </Header>
        {this.visualisarTela()}

        <Footer>Redes sociais</Footer>

      </Body>

    );
  }
}

