import React, { useState } from "react";

export default function Form() {

    const [nome, setNome]=useState('');
    const [carro, setCarro]=useState('HRV');

    const handleChangeNome=(e)=>{
        setNome(e.target.value);
    };

    const handleChangeCarro=(c)=>{
        setCarro(c.target.value);
    }

    return (
        <>
            <label>Nome: </label>
            <input 
                placeholder="Informe seu nome"
                type="text"
                name="fnome"
                value={nome}
                onChange={(e)=>handleChangeNome(e)}
            />
            <p>Nome digitado: {nome}</p>

            <label>Selecione um carro:</label>
            <select value={carro} onChange={(c)=>handleChangeCarro(c)}>
                <option value='HRV'>HRV</option>
                <option value='Golf'>Golf</option>
                <option value='Cruze'>Cruze</option>
                <option value='Argo'>Argo</option>
            </select>
            <p>Carro selecionado: {carro}</p>
        </>
    );
};