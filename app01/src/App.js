import React from 'react';
import Header from './components/Header.js'; // Importação de componente
import Corpo from './components/Corpo.js';
// import LogoServ from './components/imgs/react.png';

export default function App() {
  return (
    <>
      <Header/> {/* Componente */}
      <Corpo/>
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