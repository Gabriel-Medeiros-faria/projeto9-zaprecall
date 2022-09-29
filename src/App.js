import './style.css';
import imgLogo from './images/logo.png'
import imgSetaPlay from './images/seta_play.png'
import perguntas from './perguntas'
import setaVirar from './images/seta_virar.png'



function CardPerguntas(props) {
    const perguntaEstaAberta = []

    function AbrirResposta(){
        
    }
    function AbrirPergunta(){
        
        perguntaEstaAberta.push(props.index)
        console.log(perguntaEstaAberta)
    }

    return (
        <>
        <div className='pergunta-fechada'>
            <p>Pergunta {props.index + 1}</p>
            <img src={imgSetaPlay} alt='' onClick={AbrirPergunta}/>
        </div>
        
        <div className='pergunta-aberta'>
            {props.Q}
            <img src={setaVirar} alt='' onClick={AbrirResposta}/>
        </div>
        <div className='resposta-aberta'>
            {props.R}
        </div>
        </>
    )
}

export default function App() {
    return (
        <div className='screen-container'>
            <div className='logo-container'>
                <img src={imgLogo} alt='logo' />
                <h1>ZapRecall</h1>
            </div>

            {perguntas.map((p, index) => <CardPerguntas Q={p.Q}R={p.R} index={index} p={p}/>)}
            

        </div>
    )
}