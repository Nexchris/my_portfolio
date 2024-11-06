import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import Video from '../video/indexvideo.mp4';  // Assurez-vous que le chemin est correct
import { useTranslation } from 'react-i18next'; // Importer le hook useTranslation

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
    filter: blur(12px);  // Applique un flou à la vidéo
`;

const Text = styled.h1`
  animation: fadeIn 1s;
  margin: 0;
  font-family: "Unbounded", sans-serif;
  font-size: 4rem;
  color: white;  // Assure que le texte est visible
  z-index: 1;  // Place le texte au-dessus de la vidéo
  position: relative;  // Positionner le texte en relatif pour que le z-index fonctionne
  cursor: pointer;

  &:hover {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 500px) {
     font-size: 2rem;
  }
`;

const Overlay = styled.div`
  background-color: black;
  position: absolute;
  top: 0%;
  width: 100vw;
  height: 100vh;
  opacity: 0.9;
`;

const Menu = ({ onClose }) => {
  const { t } = useTranslation(); // Utiliser le hook useTranslation
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
      <Text onClick={() => handleNavigation('/')}>{t('menu.home')}</Text>
      <br />
      <Text onClick={() => handleNavigation('/aboutme')}>{t('menu.about')}</Text>
      <br />
      <Text onClick={() => handleNavigation('/skills')}>{t('menu.skills')}</Text>
      <br />
      <Text onClick={() => handleNavigation('/project')}>{t('menu.projects')}</Text>
      <br />
      <Text onClick={() => handleNavigation('/contact')}>{t('menu.contact')}</Text>
    </Indexcontainer>
  );
};

export default Menu;
