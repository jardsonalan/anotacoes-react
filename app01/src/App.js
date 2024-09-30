import React from 'react';
import LogoServ from './components/imgs/react.png';

export default function App() {
  const canal = () => {
    return 'CFB Cursos';
  };
  function curso() {
    return 'Curso de React';
  };
  // const canal = 'CFB Cursos';
  // const curso = 'Curso de React';
  return (
    <section>
      <header>
        <p>{`Canal: ${canal()}`}</p>
        <p>{curso()}</p>
      </header>
      <section>
        <img
          src={LogoServ} // Dentro da pasta src
          width={100}
        />
        <img
          src='logo192.png' // Fora da pasta src (pasta public)
        />
      </section>
    </section>
  );
};