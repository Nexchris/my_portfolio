// Menu.js
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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

const Menu = ({ onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    onClose(); // Fermer le menu après la navigation
  };

  return (
    <Indexcontainer>
      <Text onClick={() => handleNavigation('/')}>Accueil</Text>
      <Text onClick={() => handleNavigation('/aboutme')}>A Propos de moi</Text>
      <Text onClick={() => handleNavigation('/skills')}>Compétences</Text>
      <Text onClick={() => handleNavigation('/projects')}>Projets</Text>
      <Text onClick={() => handleNavigation('/contact')}>Me Contacter</Text>
    </Indexcontainer>
  );
};

export default Menu;
