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
  height: 13vh;
  padding: 0 9vw;
  background-color: #a873db;
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
  display: flex;
  filter: drop-shadow(1px 1px 1px #6F7378);
  gap: 1.5vw;

  margin-right: 14vw;

`

export const Button = styled.button`
  border: none;
  border-radius: 3px;
  background-color: #D9D9D9;
  height: 3vh;
`;

export const HomeButton = styled.img`
  height: 5vh;

  :hover{
    cursor: pointer;
    transform: scale(1.2)
  }
`

export const CartButton = styled.img`
  height: 5vh;

  :hover{
    cursor: pointer;
    transform: scale(1.2)
  }
`

export const Logo = styled.img`
  display: inline-block;
  margin-left: 2vw;
  height: 13vh;
`

export const PageName = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #D9D9D9;
  line-height: 90%;
  font-size: 5.2vh;
  font-family: 'GloryMathilda';
  filter: drop-shadow(1px 1px 1px #6F7378);

  :hover{
    cursor: pointer;
    transform: scale(1.08)
  }
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
  color: #872fdd;
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
  background-color: #872fdd;
  opacity: 0.6;

  :hover {
    opacity: 1;
    background-color: #872fdd;
    cursor: pointer;
  }
`;

export const SecondContainer = styled.section`
  display: flex;
  width: 100%;
  height: 75vh;
  background-color: #a873db;
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
  display: flex;
  height: 14.5vh;
  background-color: #D9D9D9;
  justify-content: space-between;
  flex-shrink: 0;
  justify-content: space-evenly;
  align-items: center;

`;

export const Contato = styled.div`
  text-align: center;
  line-height: 4vh;
  font-size: 2vh;
  color: #872fdd;
`

export const Gif = styled.img`
  height:15vh
`

export const RedesSociais = styled.nav`
  bottom: 0;
  color: #872fdd;
  font-weight: bold;
  line-height: 4vh;
  display: flex; 
  flex-direction: column;
  width: auto;
  height: 100px;
  align-items: flex-end;
  margin-top: 1em;
  img {  
    opacity: 0.6;  
    margin: 0.5em;
    max-width: 2.5vw;
    background: transparent;
    :hover{
      opacity: 0.9;  
    }
  };
`

export const Icons = styled.div`
  width:100%;
  text-align: center
`