import React, { useState } from 'react';
import styled from 'styled-components';
import 'animate.css';

const Indexcontainer = styled.div`
  display: flex;
  font-family: cursive;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

const Text = styled.h1`
  margin: 0;
  font-size: 4rem;
  animation: zoomIn 1s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;


const Section = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  text-align: center;
`;

const Menu = ({ onSelectSection }) => (
  <Indexcontainer>
    <Text onClick={() => onSelectSection('home')}>Accueil</Text>
    <Text onClick={() => onSelectSection('aboutMe')}>A Propos de moi</Text>
    <Text onClick={() => onSelectSection('skills')}>Compétences</Text>
    <Text onClick={() => onSelectSection('projects')}>Projets</Text>
    <Text onClick={() => onSelectSection('contact')}>Me Contacter</Text>
  </Indexcontainer>
);

const Home = () => (
  <Section visible>
    <h1>Bienvenue sur la page d'accueil!</h1>
  </Section>
);

const AboutMe = () => (
  <Section>
    <h1>À propos de moi</h1>
  </Section>
);

const App = () => {
  const [section, setSection] = useState('home');

  const renderSection = () => {
    switch (section) {
      case 'home':
        return <Home />;
      case 'aboutMe':
        return <AboutMe />;
      case 'skills':
        return <Section><h1>Compétences</h1></Section>;
      case 'projects':
        return <Section><h1>Projets</h1></Section>;
      case 'contact':
        return <Section><h1>Me Contacter</h1></Section>;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Menu onSelectSection={setSection} />
      {renderSection()}
    </div>
  );
};

export default App;
