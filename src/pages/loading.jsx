import React, { useState, useEffect } from 'react'; // Importer React et les hooks nécessaires
import styled, { keyframes } from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


// Animation pour le dégradé
const gradientAnimation = keyframes`
  0% {
    background: linear-gradient(45deg, #000000, #0000ff);
  }
  50% {
    background: linear-gradient(45deg, #0000ff, #000000);
  }
  100% {
    background: linear-gradient(45deg, #000000, #0000ff);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  background-size: 400% 400%;
  animation: ${gradientAnimation} 5s ease infinite; // Animation du dégradé
  z-index: 9999;
  opacity: ${props => (props.fadeOut ? 0 : 1)};
  transition: opacity 1s ease-in-out;
`;

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  padding-bottom: 20px; // Ajustez l'espacement en bas
  color: white;
  font-size: 2vw;
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

// Style du CircularProgressbar avec la couleur blanche
const CircularProgressbarStyled = styled(CircularProgressbar)`
  width: 150px; // Ajuster la taille du composant
  height: 150px; // Ajuster la taille du composant
  .CircularProgressbar-text {
    font-size: 1.5em; // Ajuster la taille du texte à l'intérieur du cercle
  }
  .CircularProgressbar-path {
    stroke: white; // Changer la couleur de la barre en blanc
  }
`;

function Loading({ onComplete }) {
  const [percentage, setPercentage] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true); // Activer le fadeout
          setTimeout(() => {
            onComplete(); // Appeler la fonction de fin après le fadeout
          }, 1000); // Attendre la fin de l'animation de fadeout
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Ajustez la durée pour la vitesse d'animation
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <Container fadeOut={fadeOut}>
      <Loader>
        <CircularProgressbarStyled value={percentage} text={`${percentage}%`} />
        <br />
        <Text>Loading</Text>
      </Loader>
    </Container>
  );
}

export default Loading;
