import React, { Component } from "react";
import { MainHome, SecondContainer, DivButton, DivTexto, FirstContainer, ChoicesContainer, HomeImg, ButtonHome, Slogan, DescriptionImage, Title, Description} from "./styled";
import Worker from "../components/img/workergirl.png"
import Workman from "../components/img/workmen.png"

export default class Home extends Component {
  render() {
    return (
      <MainHome>
        <FirstContainer>
          <ChoicesContainer>
              <Slogan>O TALENTO CERTO<br/>NO MOMENTO CERTO</Slogan>
              <DivButton>
                <ButtonHome onClick={() => this.props.changeScreen("cadastro")}>
                  Quero ser um ninja
                </ButtonHome>
                <ButtonHome onClick={() => this.props.changeScreen("card")}>
                  Contratar um ninja
                </ButtonHome>
              </DivButton>
          </ChoicesContainer>
          <HomeImg src={Worker}></HomeImg>
        </FirstContainer>

        <SecondContainer>
          <DescriptionImage src={Workman}></DescriptionImage>
          <DivTexto>
            <Title>Quem somos nós?</Title>
            <Description>
              O que é Lorem Ipsum? Lorem Ipsum é simplesmente uma simulação de
              texto da indústria tipográfica e de impressos, e vem sendo
              utilizado desde o século XVI.Lorem Ipsum é simplesmente uma simulação de
              texto da indústria tipográfica e de impressos, e vem sendo
              utilizado desde o século XVI.
            </Description>
          </DivTexto>

        </SecondContainer>
      </MainHome>
    );
  }
}
