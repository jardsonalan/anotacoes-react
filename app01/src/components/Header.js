import React from 'react';
import Logo from './imgs/react.png';

export default function Header() {
    return (
        <header>
            <img src={Logo}/>
            <h1 style={{color: 'red', fontSize: '5em'}}>CFB Cursos</h1>
        </header>
    );
};