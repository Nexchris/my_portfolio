import './App.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import styled, { keyframes, css } from 'styled-components';
import 'animate.css';
import './i18n';

// Import de mes routes
import Menu from './code/menu';
import Background from './code/background';
import Index from './pages/IndexPage';
import About from './pages/AboutPage';
import Skills from './pages/SkillPage';
import Contact from './pages/ContactPage';
import Project from './pages/ProjectPage';


// Import de mes flags ( pour le changement de langue )
import Frenchflag from './images/flag/france.png';
import Usaflag from './images/flag/usa.png';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HamburgerContainer = styled.div`
  margin-left: 2vw;
  margin-top: 2vh;
  background-color: transparent;
  position: relative;
  z-index: 1000;
  @media (max-width: 1199px) {
    margin-top: 1vh;
  }
`;

const LanguageButton = styled.button`
  position: absolute;
  top: -2vh;
    right: 3rem;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 2em;
  cursor: pointer;
  z-index: 9999;
  width: 4rem;
  @media (max-width: 1199px) {
        top: -1vh;
        right: 1rem;
    }
  }
`;

const Flag = styled.img`
  width: 5rem;
    @media (max-width: 1199px) {
        width: 4rem;
  }
`;

const MainContent = styled.div`
  opacity: ${props => (props.isOpen ? 0 : 1)};
  visibility: ${props => (props.isOpen ? 'hidden' : 'visible')};
  transition: opacity ${props => (props.isOpen ? '0.3s' : '0s')} ease, visibility ${props => (props.isOpen ? '0.3s' : '0s')} ease;
  position: relative; 
  animation: ${props => props.fadeIn ? css`${fadeIn} 1s forwards` : 'none'};
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

const GlobalContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  @media (max-width: 1000px) {
    overflow: hidden;
  }
`;


function App() {
  const { i18n } = useTranslation(); // Supprimé `t` car il n'est pas utilisé
  const [isOpen, setOpen] = useState(false);
  const [isIndexVisible] = useState(true); // Supprimé `setIsIndexVisible`

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <GlobalContainer>
      <HamburgerContainer>
        <Hamburger
          size={48}
          toggled={isOpen}
          toggle={setOpen}
          color="white"
        />
       
        <LanguageButton onClick={changeLanguage}>
          <Flag src={i18n.language === 'fr' ? Frenchflag : Usaflag} alt="Language Flag" />
        </LanguageButton>
      </HamburgerContainer>
     
      <BackgroundWrapper isOpen={isOpen}>
        <Background />
      </BackgroundWrapper>
      {isOpen && <Menu onClose={() => setOpen(false)} />}
      <MainContent isOpen={isOpen}>
        {isIndexVisible && (
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/aboutme" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        )}
      </MainContent>
    </GlobalContainer>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
