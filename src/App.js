// App.js
import React, { useState } from 'react';
import './App.css';
import Index from './pages/index.js';
import Menu from './pages/menu.js';
import Background from './pages/background';
import { Squash as Hamburger } from 'hamburger-react';
import styled from 'styled-components';

function App() {
  const [isOpen, setOpen] = useState(false);

  const HamburgerContainer = styled.div`
    margin-left: 2vw;
    margin-top: 2vh;
    background-color: transparent;
    position: relative;
    z-index: 10;
  `;

  return (
    <>
      <HamburgerContainer>
        <Hamburger
          size={48}
          toggled={isOpen}
          toggle={setOpen}
        />
      </HamburgerContainer>
      {isOpen && <Menu />}
      <Background />
      <Index />
    </>
  );
}

export default App;
