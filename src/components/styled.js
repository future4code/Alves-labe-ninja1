// import { Button } from "@chakra-ui/react";
import styled from "styled-components";

export const Body = styled.body`
  margin: 0px;
  padding: 0px;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* background-color: #181a1b; */
`;
export const Header = styled.header`
  border: 1px solid black;
  padding: 0 12px;
  background-color: #7c64c2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-family: "Times New Roman", Times, serif;
    margin-left: 10px;
  }
  div {
    button {
      margin-right: 30px;
    }
  }
`;
export const Footer = styled.footer`
  border: 1px solid black;
  height: 5%;
  background-color: #74747c;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  align-items: center;
  h5 {
    margin: 30px;
  }
`;
export const RedesSociais = styled.nav`
  display: flex; 
  width: auto;
  flex-wrap: wrap;
  height: 100px;
  align-items: center;
  margin-right: 30px; 
  img {    
    margin-left: 20px;
    max-width: 20px;
    box-shadow: 1px 1px 1px 1px rgb(194, 164, 224);
    background: transparent;
  }
`;

// Styled Página Home
export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 20px;
  font-family: "Times New Roman", Times, serif;
  flex: 1 0 auto;
`;
export const DivButton = styled.div`
  flex: 1 0 auto;
  margin-bottom: 20px;
  display: flex;
  gap: 30px;
`;
export const Button = styled.button`
  border-radius: 25px;
  height: 5vh;
`;

export const Section = styled.section`
  display: flex;
  background-color: #7c64c2;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  div {
    margin-left: 30px;
  }
`;

export const DivTexto = styled.div`
  border: solid 1px black;
  margin: 30px;
  max-width: 40%;
  padding: 10px;
`;
