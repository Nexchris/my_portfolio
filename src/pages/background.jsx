// Background.js
import React from 'react';
import styled from 'styled-components';
import Video from '../video/index.mp4';  // Assurez-vous que le chemin est correct
import 'animate.css';

const Container = styled.div`
  position: static;  // Assure que le conteneur est correctement positionné
  display: flex;
  justify-content: center;
  align-items: center;
height:auto;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 130vh;
  object-fit: cover;  // Assure que la vidéo couvre tout le conteneur sans déformation
  z-index: -1;  // Place la vidéo derrière le contenu
  filter: blur(2px);  // Applique un flou à la vidéo
`;

const Overlay = styled.div`
background-color: black;
position: absolute;
top:0%;
width: 100vw;
height:130vh;
opacity: 0.8;
`

function Background() {
  return (
    <Container>
       <Overlay />
      <BackgroundVideo autoPlay loop muted>
        <source src={Video} type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </BackgroundVideo>
    </Container>
  );
}

export default Background;
