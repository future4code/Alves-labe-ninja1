import React, { Component } from "react";
import styled from "styled-components"


const ConjuntoItens = styled.div`

 display:flex;
 align-items: center;
 justify-content: space-between;
`

export default class ItemCarrinho extends Component {
    render(){
        return<ConjuntoItens ConjuntoItens>
          <p>{this.props.price}x</p>
          <p>{this.props.title}</p>
          <button onClick={this.props.removerItemCarrinho}>Remover</button>
        </ConjuntoItens>
    }

}

