import React, { useState } from 'react'; // Importez useState depuis React
import './App.css';
import Index from './pages/index.js';
import Circle from './pages/circle.js';
import Menu from './pages/menu.js';
import Aboutme from './pages/aboutme';
import { Squash as Hamburger } from 'hamburger-react';
import styled from 'styled-components';

function App() {
  const [isOpen, setOpen] = useState(false);

  const Hamburgercontainer = styled.div`
  margin-left:2vw;
  margin-top:2vh;
  `

  return (
    <>
<Hamburgercontainer>
      <Hamburger
        size={48}
        toggled={isOpen}
        toggle={setOpen}
      />
      </Hamburgercontainer>
      {isOpen && <Menu />} {/* Affiche Menu uniquement si isOpen est vrai */}
      <Index />
    </>
  );
}

export default App;
