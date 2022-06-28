import React from "react"
import styled from "styled-components"

const Div = styled.div`
display: flex;
flex-direction: column;
width: 40vw;
margin: 10px;
justify-content: center
`


export default class PageCadastro extends React.Component{
    render(){
        return(<Div>
            <h1>Seja um ninja</h1>
            <input placeholder="Titulo"/>
            <input placeholder="Descrição"/>
            <input placeholder="Preço"/>
            <select>
             <option>Pix</option>   
             <option >Cartão de credito </option> 
             <option>Cartão de debito</option> 
             <option>Boleto</option> 
             <option>Paypal</option> 
            </select>
            <input placeholder="Prazo do Serviço" type="date" value=""/>
            <button>Cadastrar Serviço</button>

        </Div>)
    }
}

