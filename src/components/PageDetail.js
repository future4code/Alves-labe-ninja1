import React, { Component } from "react";

export default class PageDetail extends Component {
  render() {
    return (
      <div>
        <h2>Detalhe do Serviço</h2>
        <button onClick={() =>this.props.goToPageCards("card")}>Retornar a lista de serviço</button>
      </div>
    );
  }
}
