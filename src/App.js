import "./style.css";
import LogoContainer from "./componentes/logo-container"
import CardPergunta from "./componentes/Card-pergunta"
import { useState } from "react";
import FooterConcluidos from "./componentes/footer-concluidos"
import styled from "styled-components";



export default function App() {
  let [contador, setContador] = useState([])


  return (
    <Container>
      <LogoContainer/>
      <CardPergunta contador={contador} setContador={setContador} data-identifier="flashcard"/>
      <FooterConcluidos contador={contador}/>
    </Container>
  );
}

const Container = styled.div`
background-color: #FB6B6B;
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
padding: 0px;
padding-bottom: 200px;
`
