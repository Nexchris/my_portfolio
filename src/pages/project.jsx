import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la navigation
import 'animate.css';

import HTML from '../images/html.webp';
import CSS from '../images/css.png';
import JS from '../images/javascript.webp';
import NodeJS from '../images/nodejs.svg';
import Typescript from "../images/typescript.png";
import Jquery from "../images/jquery.webp";
import Wordpress from '../images/wordpress.png';
import Figma from '../images/figma.png';
import PHP from '../images/php.png';
import MYSQL from '../images/mysql.svg';
import ReactIcon from '../images/react.png';
import Symfony from '../images/symfony.png';
import Firebase from '../images/firebase.png';

const animationStyles = css`
  animation: ${props => props.animationName} 1s;
`;

const Container = styled.div`
animation: backInRight 0.5s;
  ${props => props.isFadingOut && animationStyles};
  color: white;
  display: flex;
  font-family: cursive;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
  text-align: center;
  position: relative;
`;

const LeftContainer = styled.div`
  width: 40vw;
  height: 60vh;
  background-color: blue;
`;

const Case = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 20vw;
  height: 8vh;
  border: 1px solid white;

  @media (max-width: 500px) {
    width: 70vw;
  }
`;

const Casetitle = styled.h1`
  margin: 0;
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-size: 3vh;

  @media (max-width: 500px) {
    font-size: 3vh;
  }
`;

const Title = styled.div`
  color: white;
  margin: 0;
  font-size: 8rem;
  margin-top: 5vh;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 500px) {
    font-size: 4rem;
  }
`;

const Icon = styled.img`
  width: 15%;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const Navflex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Allcasecontainer = styled.div`
  @media (max-width: 500px) {
    height: 1vh;
  }
`;

const CaseContainer = styled.div`
  display: flex;

  @media (max-width: 500px) {
    display: block;
  }
`;

const NavButton = styled.button`
  cursor: pointer;
  border-radius: 50%;
  border: none;
  background-color: black;
  font-size: 2rem;
  padding: 1rem;
  color: white;
  margin: 0 1rem;

  &:hover {
    opacity: 0.8;
  }
`;

function Skills() {
  const navigate = useNavigate();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [animationName, setAnimationName] = useState('fadeIn');

  const handleLeft = () => {
    setAnimationName('backOutRight');
    setIsFadingOut(true);
    setTimeout(() => {
      navigate('/skills');
    }, 1000); // Attendre la fin de l'animation (1s)
  };

  const handleRight = () => {
    setAnimationName('fadeOutRightBig');
    setIsFadingOut(true);
    setTimeout(() => {
      navigate('/contact');
    }, 1000); // Attendre la fin de l'animation (1s)
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handleLeft();
      } else if (event.key === 'ArrowRight') {
        handleRight();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Nettoyage de l'écouteur d'événements
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Container isFadingOut={isFadingOut} animationName={animationName}>
      <Title>Mes Projets</Title>
     
    </Container>
  );
}

export default Skills;
