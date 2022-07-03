import styled from "styled-components";
import React from "react";
import ItensCarrinho from "./ItensCarrinho/ItensCarrinho";

export const GrupoCarrinho = styled.div`
 border: 1px solid black;
 display: flex;
 flex-direction: column;
 padding:10px;
`
export default class PageCarrinho extends React.Component {


    render() {
        const ItensDoCard = this.props.carrinho &&
            this.props.carrinho.map(item => {
                return <ItensCarrinho 
                    key={item.id}
                    title={item.title}
                    price={item.price}

                />
            })

        return (<GrupoCarrinho >
            <h2> Carrinho:</h2>
            <div>
                {ItensDoCard}
            </div>
            <p>valor total:{this.props.valorTotal},00</p>
        </GrupoCarrinho>)
    }

}