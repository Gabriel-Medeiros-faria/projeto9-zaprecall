import imgSetaPlay from "./componentes/images/seta_play.png";
import imgIconeCerto from "./componentes/images/icone_certo.png";
import imgIconeErro from "./componentes/images/icone_erro.png";
import imgIconeQuase from "./componentes/images/icone_quase.png";
import setaVirar from "./componentes/images/seta_virar.png";
import { useState } from "react";
import styled from "styled-components";

export default function CardPerguntas(props) {
  console.log(props.contador);
  const [estadoCarta, setestadoCarta] = useState(0);

  if (estadoCarta === 0) {
    console.log("if0");
    return (
      <PerguntaFechada>
        <p>Pergunta {props.index + 1}</p>
        <img src={imgSetaPlay} alt="" onClick={() => setestadoCarta(1)} />
      </PerguntaFechada>
    );
  }
  if (estadoCarta === 1) {
    console.log("if1");
    return (
      <PerguntaAberta>
        {props.Q}
        <img src={setaVirar} alt="" onClick={() => setestadoCarta(2)} />
      </PerguntaAberta>
    );
  }
  if (estadoCarta === 2) {
    console.log("if2");
    return (
      <RespostaAberta>
        <p>{props.R}</p>
        <ContainerBotoes>
          <Botoes
            color={"#FF3030"}
            onClick={() => {
              setestadoCarta(3);
              props.setContador([...props.contador, "index"]);
            }}
          >
            Não lembrei
          </Botoes>
          <Botoes
            color={"#FF922E"}
            onClick={() => {
              setestadoCarta(4);
              props.setContador([...props.contador, "index"]);
            }}
          >
            Quase não lembrei
          </Botoes>
          <Botoes
            color={"#2FBE34"}
            onClick={() => {
              setestadoCarta(5);
              props.setContador([...props.contador, "index"]);
            }}
          >
            Zap!
          </Botoes>
        </ContainerBotoes>
      </RespostaAberta>
    );
  }
  if (estadoCarta === 3) {
    return (
      <NaoLembrei color="#FF3030">
        <p>Pergunta {props.index + 1}</p>
        <img src={imgIconeErro} alt="" />
      </NaoLembrei>
    );
  }
  if (estadoCarta === 4) {
    return (
      <NaoLembrei color={"#FF922E"}>
        <p>Pergunta {props.index + 1}</p>
        <img src={imgIconeQuase} alt="" />
      </NaoLembrei>
    );
  }
  if (estadoCarta === 5) {
    return (
      <NaoLembrei color="#2FBE34">
        <p>Pergunta {props.index + 1}</p>
        <img src={imgIconeCerto} alt="" />
      </NaoLembrei>
    );
  }
}

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;

const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const RespostaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NaoLembrei = styled.div`
width: 300px;
height: 35px;
background-color: #ffffff;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;

p{  font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: ${(props) => props.color};

text-decoration:line-through;
`;

const ContainerBotoes = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Botoes = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${(props) => props.color}};
    border-radius: 5px;
    border: 1px solid ${(props) => props.color}};
    padding:5px;
`;
