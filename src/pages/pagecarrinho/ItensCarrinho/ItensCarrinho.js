import React from "react"
import styled from "styled-components"

export const ConjutoItens = styled.div`
 border: 1px solid black;
 display:flex;
 align-items:center;
 justify-content: space-between;

`
export default class ItensCarrinho extends React.Component {


    render() {

        return (<ConjutoItens >
             <p>{this.props.id}</p>
            <p>{this.props.title}</p>
            <p>{this.props.price}</p>
            <button onClick={()=>this.props.removerItem}>Remover</button>
            
        </ConjutoItens>)
    }

}