import React, {useState} from 'react';
import Header from './components/Header.js'; // Importação de componente
import Corpo from './components/Corpo.js';
import './App.css';
import Relogio from './components/Relogio.js';
import State from './components/State.js';
import Eventos from './components/Eventos.js';
import RendCond from './components/RendCond.js';
// import Dados from './components/Dados.js';
// import LogoServ from './components/imgs/react.png';

export default function App() {

  // const cnl = 'CFB Cursos';
  // const yt = 'youtube.com/cfbcursos';
  // const crs = 'React';

  const [ligado, setLigado]=useState(false);

  const cancelar=(obj)=>{
    return obj.preventDefault(); // Cancela a ação do link
  };

  return (
    <>
      <Relogio/>
      <RendCond/>
      <Header/> {/* Componente */}
      <Corpo/>
      <State/>
      <Eventos ligado={ligado} setLigado={setLigado}/>
      <a
        href='#'
        target='_blank'
        onClick={(el)=>cancelar(el)}
      >
        CFB Cursos
      </a>
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