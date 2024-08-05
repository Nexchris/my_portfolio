import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la navigation
import 'animate.css';

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
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 99vh;
  width: 100vw;
  top: 1%;
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
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: white;
  width: 55vw;
  
  @media (min-width: 200px) and (max-width: 499px) {
    font-size: 2rem;
    width: 90vw;
  }

  @media (min-width: 400px) and (max-width: 500px){
    font-size: 2.5rem;
    width: auto;
  }
  
  @media (min-width: 501px) and (max-width: 1650px) {
    font-size: 3rem;
    width: 90vw;
  }
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 5vh;
  border: none;
  background-color: black;
  font-size: 2rem;
  padding: 1rem 2rem;
  color: white;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

function Index() {
  const [animate, setAnimate] = useState(false);
  const [hideContent, setHideContent] = useState(false);
  const navigate = useNavigate(); // Hook pour la navigation

  const handleClick = () => {
    setAnimate(true);

    // Attendre la fin de l'animation avant de naviguer
    setTimeout(() => {
      setHideContent(true);
      navigate('/aboutme'); // Changer la route
    }, 500); // Durée de l'animation
  };

  // Réinitialiser l'animation après son exécution
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 500); // Durée de l'animation
      return () => clearTimeout(timer);
    }
  }, [animate]);

  // Gestionnaire d'événements de clavier
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ' || event.key === 'Enter') {
        handleClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Nettoyer l'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Le tableau vide signifie que cet effet s'exécute une seule fois après le montage

  return (
    <Indexcontainer className={animate ? 'animate' : ''} hideContent={hideContent}>
      <Text>Hey, Je suis Chris Ngabala</Text>
      <br/>
      <Text>Je suis un développeur Web Fullstack</Text>
      <br/>
      <Button onClick={handleClick}>START</Button>
    </Indexcontainer>
  );
}

export default Index;
