import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import {Body, Header, MainHome} from "./components/styled"


export default class App extends Component {
  render() {
    return (
      <Body>
        <Header>
          <h2>LabeNinjas</h2>
          <div>
            <button>Home</button>
            <button>Carrinho</button>
          </div>
        </Header>
        <MainHome>
          <h1>LabeNinjas</h1>
          <h3>O talento certo no momento certo</h3>
          <div>
            <button>Quero ser um Ninja</button>
            <button>Contratar um Ninja</button>
          </div>
        </MainHome>
      </Body>
    );
  }
}
