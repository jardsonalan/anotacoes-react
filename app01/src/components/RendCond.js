import React, {useState} from 'react';

export default function RendCond() {

    const [log, setLog]=useState(false);
    
    const [cor,setCor]=useState(1);

    const vermelho = {color: '#f00'};
    const verde = {color: '#0f0'};
    const azul = {color: '#00f'};

    const retornaCor = (c) => {
        if (c==1) {
            return vermelho;
        } else if (c==2) {
            return verde;
        } else {
            return azul;
        }
    };

    const mudaCor = () => {
        setCor(cor+1);
        if (cor > 2) {
            setCor(1);
        }
    };

    // setInterval(mudaCor, 1000);

    const msgLogin=()=>{
        return 'Usuário Logado';
    };

    const msgLogoff=()=>{
        return 'Favor Logar';
    };

    const cumprimento=()=>{
        const hora = new Date().getHours();

        if (hora >= 0 && hora < 13) {
            return <p>Bom dia!</p>
        } else if (hora >= 13 && hora < 18) {
            return <p>Boa tarde!</p>
        } else {
            return <p>Boa noite!</p>
        }
    };

    return (
        <>
            {cumprimento()}
            <p>{log?msgLogin():msgLogoff()}</p>
            <button onClick={()=>setLog(!log)}>{log?'Logoff':'Login'}</button>
            <h1 style={retornaCor(cor)}>CFB Cursos</h1>
            <button onClick={()=>mudaCor()}>Muda Cor</button>
        </>
    );
};