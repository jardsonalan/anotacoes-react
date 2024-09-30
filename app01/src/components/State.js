import React, {useState} from 'react';
import Numero from './Numero';

export default function State() {
    
    const [num, setNum]=useState(10); // STATE
    
    return (
        <>
            <p>Valor do state em State: {num}</p>
            <Numero num={num} setNum={setNum}/>
        </>
    );
};