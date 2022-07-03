import axios from "axios";
import React from "react";
import styled from "styled-components";
import Worker from "../pageCadastro/worker.png"

const CadastroImage = styled.img`
  height: 72vh;
  margin: auto;
`
const ContainerCadastro = styled.div`
  display: grid;
  align-items:center;
  width: 100%;
  background-color:#cccccc;
  height:100%;
  grid-template-columns: 1fr 1fr;
`
const TitleCadastro = styled.div`
  font-size: 4vh;
`
const FormContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-items: start;
  align-items: center;
`;

const Form = styled.div`
  font-size: 2vh;
  color: white;
  height: 82%;
  background-color: #a6a6a6;
  width: 50%;
  max-width: 60%;
  padding: 2vw;

`;

const Campo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.8em;
`

const ButtonCadastro = styled.button`
  background-color: #872fdd;
  color: #D9D9D9;
  text-transform: uppercase;
  font-size: 2vh;
  font-weight: bold;
  width: 100%;
  padding: 12px;
  border: none;
  cursor: pointer;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`

const Input = styled.input`
  padding: 6px 8px;
  border-radius: 5px;
  border: none;
  outline: none;
`

const InputDescricao = styled.textarea`
  padding: 6px 8px;
  border-radius: 5px;
  border: none;
  outline: none;
  height: 12vh;
`
const Methods = styled.div`
  margin-bottom: 0.8em;
`

const PaymentMethod = styled.span`
  padding-right: 2.5vw;
`



export default class PageCadastro extends React.Component {
  state = {
    title: "",
    description: "",
    price: 0,
    paymentMethods: [],
    dueDate: "",
  };

  createJob = () => {
    const newJob = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      paymentMethods: this.state.paymentMethods,
      dueDate: this.state.dueDate,
    };
    axios
      .post("https://labeninjas.herokuapp.com/jobs", newJob, {
        headers: {
          Authorization: "a28a3dd0-e7e1-4736-b026-6cd90542742c",
        },
      })
      .then((response) => {
        alert("Serviço cadastrado com sucesso!");
        this.setState({
          title: "",
          description: "",
          price: 0,
          paymentMethods: [],
          dueDate: "",
        });
        console.log(response);
      })
      .catch((error) => {
        alert(error.response.data.message);
        console.log(error);
      });
  };

  newTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  newDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  newPrice = (e) => {
    this.setState({ price: Number(e.target.value) });
  };

  newPaymentMethod = (e) => {
    let methodsArray = [];
    if (e.target.checked) {
      methodsArray = [...this.state.paymentMethods, e.target.value];
    } else {
      methodsArray = this.state.paymentMethods;
      methodsArray.splice(methodsArray.indexOf(e.target.value));
    }
    this.setState({ paymentMethods: methodsArray });
  };

  NewDueDate = (e) => {
    this.setState({ dueDate: e.target.value });
  };

  render() {
    return (
      <ContainerCadastro>
        <CadastroImage src={Worker}></CadastroImage>
        <FormContainer>
          <Form>
            <TitleCadastro>Seja um ninja</TitleCadastro>
            <br/>
            <Campo>
              TÍTULO
              <Input
                placeholder="Titulo"
                value={this.state.title}
                onChange={this.newTitle}
              />
            </Campo>
            <Campo>
              DESCRIÇÃO
              <InputDescricao
                placeholder="Descrição"
                value={this.state.description}
                onChange={this.newDescription}
              />
            </Campo>
            <Campo>
              PREÇO
              <Input
                placeholder="Preço"
                value={this.state.price}
                onChange={this.newPrice}
              />
            </Campo>
            <Campo>
              <Methods>
                <div>MÉTODOS DE PAGAMENTO</div>
                <Input
                  type="checkbox" 
                  value="Pix, " 
                  onChange={this.newPaymentMethod} />
                <PaymentMethod>Pix</PaymentMethod>
                
                <Input
                  type="checkbox"
                  value="Cartao de Crédito, "
                  onChange={this.newPaymentMethod}
                />
                <PaymentMethod>Crédito</PaymentMethod>
                
                <Input
                  type="checkbox"
                  value="Cartao de Débito, "
                  onChange={this.newPaymentMethod}
                />
                <PaymentMethod>Débito</PaymentMethod>
              
                <Input
                  type="checkbox"
                  value="Boleto, "
                  onChange={this.newPaymentMethod}
                />
                <PaymentMethod>Boleto</PaymentMethod>
                
              </Methods>
            </Campo>

            <Campo>
              <Input
                placeholder="Prazo do Serviço"
                type="date"
                value={this.state.dueDate}
                onChange={this.NewDueDate}
              />
            </Campo>
            <ButtonCadastro onClick={this.createJob}>Cadastrar Serviço</ButtonCadastro>
          </Form>
        </FormContainer> 
      </ContainerCadastro>
    );
  }
}
