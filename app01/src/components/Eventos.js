import React from "react";
import ledVermelho from './imgs/ledVermelho.png';
import ledVerde from './imgs/ledVerde.png';

export default function Eventos(props) {

    // const [ligado, setLigado]=useState(false);

    return (
        <>
            <img style={{width: '50px'}} src={props.ligado?ledVerde:ledVermelho}/>
            <button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado?'Desligar':'Ligar'}</button>
        </>
    );
};