import React, { Component } from "react";
import { MainHome, Section, DivButton, Button, DivTexto } from "./styled";

export default class Home extends Component {
  render() {
    return (
      <MainHome>
        <h3>O talento certo no momento certo</h3>
        <DivButton>
          <Button onClick={() => this.props.mudarTela("cadastro")}>
            Quero ser um Ninja
          </Button>
          <Button onClick={() => this.props.mudarTela("card")}>
            Contratar um Ninja
          </Button>
        </DivButton>
        <Section>
          <div>
            <h1>LabeNinjas</h1>
            <p>imagem</p>
          </div>
          <DivTexto>
            <h5>Quem somos</h5>
            <p>
              O que é Lorem Ipsum? Lorem Ipsum é simplesmente uma simulação de
              texto da indústria tipográfica e de impressos, e vem sendo
              utilizado desde o século XVI, quando um impressor desconhecido
              pegou uma bandeja de tipos e os embaralhou para fazer um livro de
              modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos,
              como
            </p>
          </DivTexto>
        </Section>
      </MainHome>
    );
  }
}
