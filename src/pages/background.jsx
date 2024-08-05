// Background.js
import React from 'react';
import styled from 'styled-components';
import Video from '../video/indexvideo.mp4';  // Assurez-vous que le chemin est correct

const Container = styled.div`
  position: static;  // Assure que le conteneur est correctement positionné
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;  // Empêche les barres de défilement si la vidéo dépasse
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;  // Assure que la vidéo couvre tout le conteneur sans déformation
  z-index: -1;  // Place la vidéo derrière le contenu
  filter: blur(5px);  // Applique un flou à la vidéo
`;

function Background() {
  return (
    <Container>
      <BackgroundVideo autoPlay loop muted>
        <source src={Video} type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </BackgroundVideo>
    </Container>
  );
}

export default Background;
