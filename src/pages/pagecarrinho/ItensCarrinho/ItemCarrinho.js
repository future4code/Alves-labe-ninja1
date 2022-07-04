import React, { Component } from "react";
import styled from "styled-components";

const ConjuntoItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default class ItemCarrinho extends Component {
  render() {
    return (
      <ConjuntoItens>
        <p>{this.props.title}</p>
        <p>{this.props.price}</p>
        <button> Remover</button>
      </ConjuntoItens>
    );
  }
}
