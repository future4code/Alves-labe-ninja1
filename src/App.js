import React, { Component } from "react";
import { Body, Header, ButtonsHeader, Footer, HomeButton, CartButton, RedesSociais, Logo, PageName, Contato, Gif, Icons} from "./components/styled";
import Home from "./components/Home";
import PageCadastro from "./pages/pageCadastro/PageCadastro";
import PageCards from "./components/PageCards";
import PageCarrinho from "./pages/pagecarrinho/PageCarrinho"
import PageDetail from "./components/PageDetail";
import facebook from "./components/img/Icons/Facebook.png"
import instagran from "./components/img/Icons/Instagram.png"
import twitter from "./components/img/Icons/Twitter.png"
import whatsapp from "./components/img/Icons/Whatsapp.png"
import Gmail from "./components/img/Icons/Mail.png"
import ninjaLogo from "./components/img/ninjaLogo.png"
import NinjaGif from "./components/img/ninjaGif.gif"
import HomeIcon from "./components/img/home.png"
import CartIcon from './components/img/IconCart.png'
import axios from "axios";

export default class App extends Component {
  state = {
    currentScreen: "Home",
    clickedCharacterId: "",
    carrinho: [],
    valorTotal: 0,
    jobList: [],
  };

  componentDidMount() {
    this.getJobs();
  }

  getJobs = () => {
    const url = "https://labeninjas.herokuapp.com/jobs";
    axios
      .get(url, {
        headers: {
          Authorization: "a28a3dd0-e7e1-4736-b026-6cd90542742c",
        },
      })
      .then((res) => {
        this.setState({ jobList: res.data.jobs });
      })
      .catch((err) => {
        alert("ocorreu um problema, tente novamente!");
      });
  };

  changeScreen = (nextScreen) => {
    this.setState({ currentScreen: nextScreen });
  };
goToDetailPage = (id) => {
  this.setState({currentScreen: "detalhes", clickedCharacterId: id})  
}

 goToCarPage = (id) => {
  this.setState({currentScreen: "carrinho", clickedCharacterId: id})  
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
        return (
          <PageCards
            adicionarProdutoNoCarrinho={this.adicionarProdutoNoCarrinho}
            jobList={this.state.jobList}
            clickedCharacterId={this.state.clickedCharacterId}
            goToDetailPage={this.goToDetailPage}
            changeScreen={this.changeScreen}
          />
        );
      case "carrinho":
        return (
          <PageCarrinho
            jobList={this.state.jobList}
            changeScreen={this.changeScreen}
            valorTotal={this.state.valorTotal}
            carrinho={this.state.carrinho}
            removerItemDoCarrinho={this.removerItemDoCarrinho}
          />
        );
      case "detalhes":
        return (
          <PageDetail
            clickedCharacterId={this.state.clickedCharacterId}
            goToPageCards={this.goToPageCards}
          />
        );
    }
  };
  adicionarProdutoNoCarrinho = (job) => {
    const produtoNoCarrinho = [...this.state.carrinho, job];
    this.setState({
      carrinho: produtoNoCarrinho,
    });
  }

  // vai ser colocado no botão no card para adiciona job
  // adicionarProdutoNoCarrinho = (produto) => {
  //   const produtoNoCarrinho = this.state.carrinho.filter((job) => {
  //     if (job.id === produto.id) {
  //       return job;
  //     }else{
  //       return false
  //     }
  //   });

  //   if (produtoNoCarrinho.length === 0) {
  //     produto.quantidade = 1;
  //     const novoCarrinho = [produto, ...this.state.carrinho];
  //     this.setState({
  //       carrinho: novoCarrinho,
  //     });
  //   } else {
  //     const novoCarrinho = this.state.carrinho.map((item) => {
  //       if (produto.id === item.id) {
  //         return { ...item, quantidade: item.quantidade + 1 };
  //       } else {
  //         return item;
  //       }
  //     });

  //     this.setState({
  //       carrinho: novoCarrinho,
  //     });
  //   }
  //   this.adicionarValorTotal(produto.price);
  // };

  //  removerItemDoCarrinho = (itemParaRemover) => {
  //   if (itemParaRemover.quantidade === 1) {
  //     const novoCarrinho = this.state.carrinho.filter((item) => {
  //       if (item.id !== itemParaRemover.id) {
  //         return item;
  //       }else{
  //         return false
  //       }
  //     });
  //     this.setState({
  //       carrinho: novoCarrinho,
  //     });
  //   } else {
  //     const novoCarrinho = this.state.carrinho.map((item) => {
  //       if (itemParaRemover.id === item.id && item.quantidade >= 1) {
  //         return { ...item, quantidade: item.quantidade - 1 };
  //       } else {
  //         return item;
  //       }
  //     });
  //     this.setState({
  //       carrinho: novoCarrinho,
  //     });
  //   }
  // };

  render() {
    return (
      <Body>
        <Header>
          <PageName onClick={() => this.changeScreen("Home")} ><Logo src={ninjaLogo}></Logo>LABE<br/>NINJAS</PageName>
          <ButtonsHeader>
            <HomeButton onClick={() => this.changeScreen("Home")} src={HomeIcon}></HomeButton>
            <CartButton onClick={() => this.changeScreen("carrinho")} src={CartIcon}></CartButton>
          </ButtonsHeader>
        </Header>
        {this.visualisarTela()}
        <Footer>
          <Contato>CONTATO: (+55)99-99999-9999<br/>LOCALIZAÇÃO: Av. Paulista - São Paulo - SP</Contato>
          <Gif src={NinjaGif}></Gif>
          <RedesSociais >
              <Icons>
                <div>SIGA-NOS NAS NOSSAS REDES SOCIAIS:</div>
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
              </Icons>
          </RedesSociais>
        </Footer>
      </Body>

    );
  }
}

