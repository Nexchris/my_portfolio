import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import Video from '../video/menu.mp4';  // Assurez-vous que le chemin est correct

const Indexcontainer = styled.div`
  position: static; 
  display: flex;
  color: white;
  font-family: cursive;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100vw;
  text-align: center;
  overflow: hidden;  // Assure que la vidéo ne déborde pas du conteneur
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;  // Assure que la vidéo couvre tout le conteneur sans déformation
  z-index: -1;  // Place la vidéo derrière le contenu
`;

const Text = styled.h1`
animation: fadeIn 1s;
  margin: 0;
  font-family: "Unbounded", sans-serif;
  font-size: 4rem;
  color: white;  // Assure que le texte est visible
  z-index: 1;  // Place le texte au-dessus de la vidéo
  position: relative;  // Positionner le texte en relatif pour que le z-index fonctionne

  &:hover {
    opacity: 0.8;
  }
`;


const Overlay = styled.div`
background-color: black;
position: absolute;
top:0%;
width: 100vw;
height:100vh;
opacity:0.8;
`

const Menu = ({ onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    onClose(); // Fermer le menu après la navigation
  };

  return (
    <Indexcontainer>
        <Overlay />
      <BackgroundVideo autoPlay loop muted>
        <source src={Video} type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </BackgroundVideo>
      <Text onClick={() => handleNavigation('/')}>Accueil</Text>
      <Text onClick={() => handleNavigation('/aboutme')}>A Propos de moi</Text>
      <Text onClick={() => handleNavigation('/skills')}>Compétences</Text>
      <Text onClick={() => handleNavigation('/projects')}>Projets</Text>
      <Text onClick={() => handleNavigation('/contact')}>Me Contacter</Text>
    </Indexcontainer>
  );
};

export default Menu;
