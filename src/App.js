// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/index';
import Menu from './pages/menu';
import Skills from './pages/skills';
import Aboutme from './pages/aboutme';
import Background from './pages/background';
import { Squash as Hamburger } from 'hamburger-react';
import styled from 'styled-components';

const HamburgerContainer = styled.div`
  margin-left: 2vw;
  margin-top: 2vh;
  background-color: transparent;
  position: relative;
  z-index: 10;
`;

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Router>
      <HamburgerContainer>
        <Hamburger
          size={48}
          toggled={isOpen}
          toggle={setOpen}
        />
      </HamburgerContainer>
      {isOpen && <Menu onClose={() => setOpen(false)} />}
      <Background />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/aboutme" element={<Aboutme />} />
        {/* Ajoutez d'autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
