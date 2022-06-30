import React, { Component } from 'react'

export default class PageCards extends Component {
  render() {
    return (
      <div>
        <h2>PageCards</h2>
        <button onClick={() => this.props.mudarTela("detalhes")}>Ver detalhe</button>
      </div>
    )
  }
}
