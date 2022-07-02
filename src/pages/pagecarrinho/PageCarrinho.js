import React, { Component } from "react";
import styled from "styled-components"
import ItemCarrinho from "./ItensCarrinho/ItemCarrinho";


const ConjuntoCarrinho = styled.div`
    border: 1px solid black;
    display:flex;
    flex-direction: column;
    padding: 10px;

`


export default class PageCarrinho extends Component {
    render() {
        const itensDoCarrinho =
            this.props.carrinho &&
            this.props.carrinho.map(item => {
                return <ItemCarrinho
                    key={item.id}>
                    quantidade={item.price}
                    nome={item.title}
                    onClick={() => this.props.removerItemDoCarrinho(item.id)}
                </ItemCarrinho>

            })

        return < ConjuntoCarrinho>
            <h2>Carrinho</h2>
            <div>
                {itensDoCarrinho}
            </div>
            <p>Valor total: R$ {this.props.valorTotal},00</p>
        </ ConjuntoCarrinho>
    }

}

