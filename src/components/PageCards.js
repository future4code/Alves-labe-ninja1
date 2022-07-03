import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
//import { Button } from "./styled";

export const MainCard = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    margin: 10px;
    input {
      min-width: 250px;
    }
  }
`;
export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 98%;
  
`;
export const Ordenação = styled.div`
  display: flex;
  gap: 10px;
`;

export const CardJob = styled.div`
  border: 1px solid black;
  background-color: lightgray;
  padding: 0px 16px 16px;
  margin: 12px;
  min-width: 160px;
  max-height: 40vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  border-radius: 20px;
  background: #a873db;
  color: white;
  border: none;
`;
export const DivCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
`;

export const InputDeBusca = styled.input`
    color: white;
    border-radius: 10px;
    border: none;
   
`

export const BotaoCard =styled.button`
border-radius: 10px;
border: none;
background: #8000807a;
color: white;

&:hover{
  cursor: pointer;
}
`

export default class PageCards extends Component {
  state = {
    JobList: [],
    query: "",
    minPrice: "",
    maxPrice: "",
    sortOrder: "name",
    order: 1,
  };

  componentDidMount() {
    this.getJobs();
  }

  getJobs = () => {
    const url = "https://labeninjas.herokuapp.com/jobs";
    axios
      .get(url, {
        headers: {
          Authorization: "a28a3dd0-e7e1-4736-b026-6cd90542742c",
        },
      })
      .then((res) => {
        this.setState({ JobList: res.data.jobs });
      })
      .catch((err) => {
        alert("ocorreu um problema, tente novamente!");
      });
  };

  updateQuery = (event) => {
    this.setState({ query: event.target.value });
  };
  updateMinPrice = (event) => {
    this.setState({ minPrice: event.target.value });
  };
  updateMaxPrice = (event) => {
    this.setState({ maxPrice: event.target.value });
  };
  updateSortOrdear = (event) => {
    this.setState({ sortOrder: event.target.value });
  };
  updateOrder = (ev) => {
    this.setState({ order: ev.target.value });
  };

  render() {
    const jobsList = this.state.JobList.filter((job) => {
      return job.title.toLowerCase().includes(this.state.query.toLowerCase());
    })
      .filter((job) => {
        return this.state.minPrice === "" || job.price >= this.state.minPrice;
      })
      .filter((job) => {
        return this.state.maxPrice === "" || job.price <= this.state.maxPrice;
      })
      .sort((currentJob, nextJob) => {
        switch (this.state.sortOrder) {
          case "name":
            return (
              this.state.order * currentJob.title.localeCompare(nextJob.title)
            );
          case "dueDate":
            return (
              this.state.order *
              (new Date(currentJob.dueDate).getTime() <
                new Date(nextJob.dueDate).getTime())
            );
          default:
            return this.state.order * (currentJob.price - nextJob.price);
        }
      })
      .map((job) => {
        return (
          <CardJob key={job.id}>
            <h3>{job.title}</h3>
            <p>
              <b>Preço: </b>R${job.price}
            </p>
            <p>{job.dueDate.split("T")[0]}</p>
            
            <BotaoCard onClick={() => this.props.goToDetailPage(job.id)}>Ver detalhes</BotaoCard>
           
          </CardJob>
        );
      });

    return (
      <MainCard>
        <div>
          <Filter>
            < InputDeBusca
              type="number"
              placeholder="Preço Mínimo"
              value={this.state.minPrice}
              onChange={this.updateMinPrice}
            />
            < InputDeBusca
              type="number"
              placeholder="Preço Máximo"
              value={this.state.maxPrice}
              onChange={this.updateMaxPrice}
            />
            < InputDeBusca
              placeholder="Busca por Título ou descrição"
              value={this.state.query}
              onChange={this.updateQuery}
            />
            <Ordenação>
              <label for="sort">Ordenação:</label>
              <select
                name="sort"
                value={this.state.sortOrder}
                onChange={this.updateSortOrdear}
              >
                <option value="name">Nome</option>
                <option value="price">Preço</option>
                <option value="dueDate">Prazo</option>
              </select>
              <select
                name="order"
                value={this.state.order}
                onChange={this.updateOrder}
              >
                <option value={1}>Crescente</option>
                <option value={-1}>Decrescente</option>
              </select>
            </Ordenação>
          </Filter>
        </div>
        <DivCard>{jobsList}</DivCard>
      </MainCard>
    );
  }
}
