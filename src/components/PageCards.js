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
  display: inline-block;
  border: 1px solid black;
  background-color: lightgray;
  padding: 0px 16px 16px;
  margin: 12px;
  min-width: 160px;
  max-height: 45vh;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  border-radius: 20px;
  background: #a873db;
  color: white;
  border: none;
  display: inline-block;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;
export const DivCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
  margin: 20px;
  overflow: auto;
  display: inline-block;
`;

export const InputDeBusca = styled.input`
    color: white;
    border-radius: 10px;
    border: none;
   
`

export const BotaoCard = styled.button`
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
    query: "",
    minPrice: "",
    maxPrice: "",
    sortOrder: "name",
    order: 1,
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
    const jobsList = this.props.jobList
      .filter((job) => {
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
              <b>Preço: </b>R${job.price.toFixed(2).replace(".", ",")}
            </p>
            <p>{job.dueDate.split("T")[0]}</p>
            <BotaoCard onClick={() => this.props.adicionarProdutoNoCarrinho(job)}>
              🛒
            </BotaoCard>
            <BotaoCard onClick={() => this.props.goToDetailPage(job.id)}>
              Ver detalhes
            </BotaoCard>
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
                <option value="name">Título</option>
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
