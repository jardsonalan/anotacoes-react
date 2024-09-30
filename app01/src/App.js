import React from 'react';
import Header from './components/Header.js'; // Importação de componente
import Corpo from './components/Corpo.js';
import './App.css';
import Relogio from './components/Relogio.js';
import State from './components/State.js';
// import Dados from './components/Dados.js';
// import LogoServ from './components/imgs/react.png';

export default function App() {

  // const cnl = 'CFB Cursos';
  // const yt = 'youtube.com/cfbcursos';
  // const crs = 'React';

  return (
    <>
      <Relogio/>
      <Header/> {/* Componente */}
      <Corpo/>
      <State/>
      {/* <Dados canal='CFB Cursos' youtube='youtube.com/cfbcursos' curso='React'/> */} {/* Primeira forma de enviar propriedades para os componentes PROPS */}
      {/* <Dados
        canal={cnl}
        youtube={yt}
        curso={crs}
      /> */} {/* Segunda forma de enviar propriedades para os componentes PROPS */}
    </>
    // <section>
    //   <header>
    //     <p>{`Canal: ${canal()}`}</p>
    //     <p>{curso()}</p>
    //   </header>
    //   <section>
    //     <img
    //       src={LogoServ} // Dentro da pasta src
    //       width={100}
    //     />
    //     <img
    //       src='logo192.png' // Fora da pasta src (pasta public)
    //     />
    //   </section>
    // </section>
  );
};