import React, { Component } from "react";
import axios from "axios";
import { Body, Header, ButtonsHeader, Footer, Button, RedesSociais, Logo, PageName} from "./components/styled";
import Home from "./components/Home";
import PageCadastro from "./pages/pageCadastro/PageCadastro";
import PageCards from "./components/PageCards";
import PageCarrinho from "./pages/pagecarrinho/PageCarrinho";
import PageDetail from "./components/PageDetail";
import facebook from "./components/img/facebook.jpg"
import instagran from "./components/img/instagran.jpg"
import twitter from "./components/img/twitter.jpg"
import whatsapp from "./components/img/whatsapp.jpg"
import Gmail from "./components/img/Gmail.png"
import ninjaLogo from "./components/img/ninjaLogo.png"
import HomeLogo from "./components/img/home.png"


export default class App extends Component {
  state = {
    currentScreen: "Home",
    clickedCharacterId: ""
  };
  changeScreen = (nextScreen) => {
    this.setState({ currentScreen: nextScreen });
  };
goToDetailPage = (id) => {
  this.setState({currentScreen: "detalhes", clickedCharacterId: id})  
}
goToPageCards = () => {
  this.setState({currentScreen: "card", clickedCharacterId: ""})  
}
  visualisarTela = () => {
    switch (this.state.currentScreen) {
      case "Home":
        return <Home changeScreen={this.changeScreen} />;
      case "cadastro":
        return <PageCadastro changeScreen={this.changeScreen} />;
      case "card":
        return <PageCards 
        goToDetailPage={this.goToDetailPage}
        changeScreen={this.changeScreen}/>;
      case "carinho":
        return <PageCarrinho changeScreen={this.changeScreen} />;
      case "detalhes":
        return <PageDetail 
        clickedCharacterId={this.state.clickedCharacterId}
        goToPageCards={this.goToPageCards}/>
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
          <PageName><Logo src={ninjaLogo}></Logo>LABE<br/>NINJAS</PageName>
          <ButtonsHeader>
            <Button onClick={() => this.mudarTela("Home")}>HOME</Button>
            <Button onClick={() => this.mudarTela("carrinho")}>CARRINHO</Button>
          </ButtonsHeader>
        </Header>
        {this.visualisarTela()}
        <Footer>
          <h5>Tel: (+55)99-99999-9999</h5>
          <h5>Siga nos nas redes sociais</h5>
          <RedesSociais >
                <a href="https://gmail.google.com" target="_blank">
                    <img src={Gmail} alt="Link Gmail"/>
                </a>
                <a href="https://web.whatsapp.com/send?phone=00000000000" target="_blank">
                    <img src={whatsapp} alt="Link whatsapp"/>
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                    <img src={facebook} alt="Link Facebook"/>
                </a>
                <a href="https://twitter.com/login?lang=pt" target="_blank">
                    <img src={twitter} alt="Link Twitter"/>
                <a href="https://www.instagram.com/" target="_blank">
                    <img src={instagran} alt="Link Instagram"/>
                </a>
                </a>
            </RedesSociais>
          </Footer>
      </Body>

    );
  }
}

