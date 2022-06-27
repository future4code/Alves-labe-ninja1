import styled from "styled-components";


export const Body = styled.body`
  margin: 0px;
  padding: 0px;
  width: 100vw;
  min-height: 100vh;
  /* background-color: #181a1b; */
`;
export const Header = styled.header`
  border: 1px solid black;
  padding: 0 12px;
  background-color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-family: 'Times New Roman', Times, serif;
  }
`;
// Styled Página Home
export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw; 
  margin-top: 80px;
  font-family: 'Times New Roman', Times, serif;
`;