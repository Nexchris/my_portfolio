import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './pages/menu';
import Background from './pages/background';

import Index from './pages/index';
import Aboutme from './pages/aboutme';
import Skills from './pages/skills';
import Project from './pages/project'
import Contact from './pages/contact';

import { Squash as Hamburger } from 'hamburger-react';
import styled from 'styled-components';
import './i18n'; // Importer la configuration i18next
import { useTranslation } from 'react-i18next'; // Importer le hook useTranslation

const HamburgerContainer = styled.div`
  margin-left: 2vw;
  margin-top: 2vh;
  background-color: transparent;
  position: relative;
  z-index: 1000; // Assurez-vous que le menu est au-dessus de tout
  @media (max-width: 1199px) {
    margin-top: 1vh;
  }
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
  z-index: 9999; // Assurez-vous que le bouton est également au-dessus
  @media (max-width: 1199px) {
    top: 1%;
  }
`;

const MainContent = styled.div`
  opacity: ${props => (props.isOpen ? 0 : 1)};
  visibility: ${props => (props.isOpen ? 'hidden' : 'visible')};
  transition: opacity ${props => (props.isOpen ? '0.3s' : '0s')} ease, visibility ${props => (props.isOpen ? '0.3s' : '0s')} ease;
  position: relative; // Assure que le contenu principal est positionné correctement
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1; // Place le fond derrière tout le contenu
  transition: opacity ${props => (props.isOpen ? '0.3s' : '0s')} ease;
  opacity: ${props => (props.isOpen ? 0 : 1)};
`;

const GlobalContainer = styled.div`
  position: relative;
  overflow: hidden; // Masquer le débordement
  height: 100vh;
  width: 100vw;
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
      <GlobalContainer>
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
        <BackgroundWrapper isOpen={isOpen}>
          <Background />
        </BackgroundWrapper>
        {isOpen && <Menu onClose={() => setOpen(false)} />}
        <MainContent isOpen={isOpen}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            {/* Ajoutez d'autres routes ici */}
          </Routes>
        </MainContent>
      </GlobalContainer>
    </Router>
  );
}

export default App;
