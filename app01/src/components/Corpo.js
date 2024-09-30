import React from 'react';
import Dados from './Dados';

export default function Corpo() {

    const cnl = () => {
        return 'CFB Cursos';
    };
    // const cnl = 'CFB Cursos';
    const yt = 'youtube.com/cfbcursos';
    const crs = 'React';

    const soma = (v1, v2) => {
        return v1+v2;
    }

    const destaqueTexto = {
        color: 'green',
        fontSize: '3em'
    }

    return (
        <section className='caixa'>
            <h2 style={destaqueTexto}>Curso de React</h2>
            <p className='texto'>Se inscreva em nosso canal</p>
            <p>Ative o sininho e clique no joinha</p>
            <Dados
                canal={cnl}
                youtube={yt}
                curso={crs}
                soma={soma}
            />
            <a href='#'>CFB Cursos</a>
        </section>
    );
};