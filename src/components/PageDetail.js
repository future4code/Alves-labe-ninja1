<<<<<<< HEAD
import axios from "axios";
import React from "react";


export default class PageDetail extends React.Component {
    state = {
        DetalhesDoServiço: []
    }


    componentDidMount() {
        this.PegarDetalhe(this.props.id)
        
    }

    PegarDetalhe = (id) => {
        axios.get(`https://labeninjas.herokuapp.com/jobs/${this.props.clickedCharacterId}`, {
            headers: {
                'Authorization':'a28a3dd0-e7e1-4736-b026-6cd90542742c'
            }
        }).then(response => {
            let novaListaDetalhes = [response.data]
            this.setState({ DetalhesDoServiço: novaListaDetalhes })
            console.log(response.data)
            console.log(this.state.id)
        }).catch(error => {
            console.log(error.response.data.error)
        })

    }


    render() {
        const listaDetalhada = this.state.DetalhesDoServiço.map(servico => {
            return <div key={servico.id}>
                <h2>{servico.title}</h2>
                <p>{servico.description}</p>
                <p>Data:{new Date (servico.dueDate).toLocaleDateString()}</p>
                <p>Valor: R$ {servico.price},00</p>
                <p>Forma de pagamento: {servico.paymentMethods}</p>
                <button>Voltar para lista</button>

            </div>
        })
        return (
            <div>
                  {listaDetalhada}
            </div>
        )
    }
}
=======
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
>>>>>>> b82742092e31e86e31fb3c3536f1e6de06e8ff85
