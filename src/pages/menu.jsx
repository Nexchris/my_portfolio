import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import 'animate.css';

// Style pour le conteneur de menu
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

// Style pour le texte des boutons du menu
const Text = styled.h1`
  margin: 0;
  font-size: 4rem;
  animation: zoomIn 1s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

// Composant Menu
const Menu = () => {
  const navigate = useNavigate(); // Hook pour la navigation

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Indexcontainer>
      <Text onClick={() => handleNavigation('/')}>Accueil</Text>
      <Text onClick={() => handleNavigation('/aboutme')}>A Propos de moi</Text>
      <Text onClick={() => handleNavigation('/skills')}>Compétences</Text>
      {/* Les autres liens que tu n'as pas encore définis */}
      <Text onClick={() => handleNavigation('/projects')}>Projets</Text>
      <Text onClick={() => handleNavigation('/contact')}>Me Contacter</Text>
    </Indexcontainer>
  );
};

// Composant principal de l'application
const App = () => {
  return (
    <div>
      <Menu />
    </div>
  );
};

export default App;
