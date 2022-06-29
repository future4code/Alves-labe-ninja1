<<<<<<< pag-de-cadastro
import axios from "axios"
import React from "react"
import styled from "styled-components"

const FormContainer = styled.div`
display: flex;
flex-direction: column;
width: 40vw;
margin: 10px;
justify-content: center
`

export default class PageCadastro extends React.Component{
    state ={
        title:"",
        description:"",
        price:0,
        paymentMethods:[],
        dueDate:"",
    }

    createJob = () => {
        const newJob={
            title: this.state.title,
            description: this.state.description,
            price:this.state.price,
            paymentMethods: this.state.paymentMethods,
            dueDate: this.state.dueDate
        }
        axios
            .post(
                "https://labeninjas.herokuapp.com/jobs", newJob,
                {
                    headers: {
                      Authorization: "a28a3dd0-e7e1-4736-b026-6cd90542742c"
                    }
                }
            )
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })  
    }

    newTitle = (e) => {
        this.setState({title: e.target.value})
    }

    newDescription = (e) => {
        this.setState({description: e.target.value})
    }

    newPrice = (e) => {
        this.setState({price: Number(e.target.value)})
    }

    newPaymentMethod = (e) => {
        let methodsArray = [...this.state.paymentMethods, e.target.value]
        console.log(methodsArray)

        this.setState({paymentMethods: methodsArray})
        console.log(this.state.paymentMethods)
    }
    
    NewDueDate = (e) => {
        this.setState({dueDate: e.target.value})
    }



    render(){


        return(
        
            <FormContainer>
                <h1>Seja um ninja</h1>
                <input placeholder="Titulo" value={this.state.title} onChange={this.newTitle}/>
                <input placeholder="Descrição" value={this.state.description} onChange={this.newDescription}/>
                <input placeholder="Preço" value={this.state.price} onChange={this.newPrice}/>


                <div>
                    <div>Métodos de Pagamento</div>
                    <input type="checkbox" value="pix" unchecked="true" onChange={this.newPaymentMethod}/>Pix<br/>
                    <input type="checkbox" value="cartao de Credito" onChange={this.newPaymentMethod}/>Cartão de crédito<br/>
                    <input type="checkbox" value="cartao de Debito" onChange={this.newPaymentMethod}/>Cartão de debito<br/>
                    <input type="checkbox" value="boleto" onChange={this.newPaymentMethod}/>Boleto<br/>
                    <input type="checkbox" value="paypal" onChange={this.newPaymentMethod}/>Paypal<br/>
                </div>


                <input placeholder="Prazo do Serviço" type="date" value={this.state.dueDate} onChange={this.NewDueDate}/>
                <button onClick={this.createJob}>Cadastrar Serviço</button>
            </FormContainer>
        )
    }
=======
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  margin: 10px;
  justify-content: center;
`;

export default class PageCadastro extends React.Component {
  render() {
    return (
      <Div>
        <h1>Seja um ninja</h1>
        <input placeholder="Titulo" />
        <input placeholder="Descrição" />
        <input placeholder="Preço" />
        <select>
          <option>Pix</option>
          <option>Cartão de credito </option>
          <option>Cartão de debito</option>
          <option>Boleto</option>
          <option>Paypal</option>
        </select>
        <input placeholder="Prazo do Serviço" type="date" value="" />
        <button>Cadastrar Serviço</button>
      </Div>
    );
  }
>>>>>>> master
}
