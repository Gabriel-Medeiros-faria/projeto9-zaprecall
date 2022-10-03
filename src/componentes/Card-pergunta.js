import perguntas from "../perguntas";
import CardPerguntas from "../Function-CardPerguntas"

export default function CartaoPergunta(props){
    return(
        <>
        {perguntas.map((p, index) => (
            <CardPerguntas Q={p.Q} R={p.R} index={index} p={p} contador={props.contador} setContador={props.setContador}/>
        ))}
        </>
    )
}