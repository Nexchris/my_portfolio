import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Aboutme from './aboutme';
import 'animate.css';

// Définition de l'animation zoomOut
const zoomOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.5);
    opacity: 0;
  }
`;

const Indexcontainer = styled.div`
 animation: zoomIn 0.5s;
  position: absolute;
  display: flex;
  font-family: cursive;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100vw;
  text-align: center;
  transition: transform 1s, opacity 1s;
  opacity: ${(props) => (props.hideContent ? 0 : 1)};
  visibility: ${(props) => (props.hideContent ? 'hidden' : 'visible')};
  overflow: hidden;

  &.animate {
    animation: ${zoomOut} 0.5s forwards;
  }
`;

const Text = styled.h1`
  margin: 0;
  font-size: 4rem;
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 5vh;
  border: none;
  background-color: black;
  font-size: 2rem;
  padding: 1rem;
  color: white;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

function Index() {
  const [animate, setAnimate] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [hideContent, setHideContent] = useState(false);

  const handleClick = () => {
    setAnimate(true);

    // Afficher Aboutme après 2 secondes
    setTimeout(() => {
      setShowAboutMe(true);
      setHideContent(true); // Masquer le contenu actuel
    }, 200); // 2000 ms = 2 secondes
  };

  // Réinitialiser l'animation après son exécution
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 1000); // Durée de l'animation
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <>
      {!showAboutMe && (
        <Indexcontainer className={animate ? 'animate' : ''} hideContent={hideContent}>
          <Text>Hey, Je suis Chris Ngabala</Text>
          <hr />
          <Text>Je suis un développeur Web Fullstack</Text>
          <hr />
          <Button onClick={handleClick}>Entre dans mon monde !</Button>
        </Indexcontainer>
      )}

      {showAboutMe && <Aboutme />}
    </>
  );
}

export default Index;
