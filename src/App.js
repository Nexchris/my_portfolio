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
import './i18n'; // Importer la configuration i18next
import { useTranslation } from 'react-i18next'; // Importer le hook useTranslation

const HamburgerContainer = styled.div`
  margin-left: 2vw;
  margin-top: 2vh;
  background-color: transparent;
  position: relative;
  z-index: 10;
`;

const LanguageButton = styled.button`
  position: absolute;
  top: 2vh;
  right: 2vw;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 2em;
  cursor: pointer;
  z-index: 9999; // Augmenter le z-index
`;

function App() {
  const [isOpen, setOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Utiliser le hook useTranslation

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Router>
      <div className="particle-container"></div>
      <HamburgerContainer>
        <Hamburger
          size={48}
          toggled={isOpen}
          toggle={setOpen}
          color="white"
        />
      </HamburgerContainer>
      <LanguageButton onClick={changeLanguage}>
        {t('button')}
      </LanguageButton>
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
