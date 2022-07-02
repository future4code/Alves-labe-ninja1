// import { Button } from "@chakra-ui/react";
import styled from "styled-components";
import "../App.css";

//Estilos Gerais
export const Body = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #D9D9D9;
`;

//Estilos Header
export const Header = styled.header`
  height: 12vh;
  padding: 0 9vw;
  background-color: #9087F2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin-left: 10px;
  }
  div {
    button {
      margin-right: 30px;
    }
  }
`;

export const ButtonsHeader = styled.div`
  margin-right: 3vw;
`

export const Button = styled.button`
  border: none;
  border-radius: 3px;
  background-color: #D9D9D9;
  height: 3vh;
`;

export const Logo = styled.img`
  display: inline-block;
  margin-left: 2vw;
  height: 12vh;
`

export const PageName = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #D9D9D9;
  line-height: 90%;
  font-size: 5.2vh;
  font-family: 'GloryMathilda'
`


// Styled Página Home
export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: "Times New Roman", Times, serif;
  flex: 1 0 auto;
`;

export const FirstContainer = styled.section`
  display: grid;
  width: 100%;
  align-items:center;
  justify-items: end;
  grid-template-columns: 1.3fr 1fr;
`


export const HomeImg = styled.img`
  margin-left: auto;
  margin-right: 16vw;
`

export const Slogan = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-bottom:5vh;
  text-align: center;
  justify-content: center;
  font-size: 8vh;
  color: #7c64c2;
  font-family: 'GloryMathilda'
`

export const ChoicesContainer = styled.div`
  display: grid;
  grid-template-rows: 1.5fr 1fr;
  justify-items: center;
  align-items: center;
  width:80%;
`;

export const DivButton = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 30px;
`;

export const ButtonHome = styled.button`
  border:none;
  color: #D9D9D9;
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 3.7vh;
  width: 40%;
  height: 10vh;
  border-radius: 10px;
  background-color: #9087F2;

  :hover {
    background-color: #7c64c2;
    cursor: pointer;
  }
`;

export const SecondContainer = styled.section`
  display: flex;
  width: 100%;
  height: 75vh;
  background-color: #9087F2;
  align-items: center;
  justify-content: space-between;

`;

export const DescriptionImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 50%
`;


export const DivTexto = styled.div`
  margin-right: 5em;
  max-height: 100vh;
  font-family: 'Helvetica', 'Arial', sans-serif;
`;

export const Title = styled.div`
  font-size: 7vh;
  
  color: #D9D9D9;

`

export const Description = styled.div`
  margin-top: 1em;
  font-size: 3vh; 
  
  color: #D9D9D9;

`


//Estilos Footer
export const Footer = styled.footer`
  height: 5%;
  background-color: #D9D9D9;
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