import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import { useTranslation } from 'react-i18next';

import HTML from '../images/html.webp';
import CSS from '../images/css.png';
import JS from '../images/javascript.webp';
import NodeJS from '../images/nodejs.svg';
import Typescript from "../images/typescript.png";
import Jquery from "../images/jquery.webp";
import Wordpress from '../images/wordpress.png';
import Figma from '../images/figma.png';
import PHP from '../images/php.png';
import Python from '../images/python.jpg';
import MYSQL from '../images/mysql.png';
import ReactIcon from '../images/react.png';
import ReactNative from '../images/reactnative.png'
import Symfony from '../images/symfony.png';
import Firebase from '../images/firebase.png';
import Git from '../images/git.png'
import Github from '../images/github.png';
import Jimdo from '../images/jimdo.png';
import CV from '../images/CV.png';

// Animation styles
const animationStyles = css`
  animation: ${props => props.animationName} 1s;
`;

const Container = styled.div`
  animation: fadeIn 2s;
  ${props => props.isFadingOut && animationStyles};
  color: white;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
  text-align: center;
  position: relative;
   @media (min-width: 300px) and (max-width: 500px) {
       font-size: 1.5rem;
  }
`
;

const CVContainer = styled.div`
display: flex;
flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 2rem;
  padding-top: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
     @media (min-width: 300px) and (max-width: 500px) {
       padding: 0;
  }
`;

const IconsContainer = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.div`
  color: white;
  font-size: 4rem;
  font-family: "Bebas Neue", sans-serif;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

const CVImage = styled.img`
  width: 40%;
  height: auto;
`;

const Icon = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 0.5rem;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const Navflex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  position: absolute;
  top:44rem;
  left: 55rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavButton = styled.div`
  cursor: pointer;
  border-radius: 50%;
  font-size: 2rem;
  padding: 1rem;
  color: white;
  margin: 0 1rem;
  &:hover {
    opacity: 0.8;
  }
`;

const Button = styled.button`
  animation: fadeIn 2s;
  border-radius: 5vh;
  border: none;
  background-color: white;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem 2rem;
  color: black;
  font-family: "Bebas Neue", sans-serif;
  transition: opacity 0.3s;
  display: none;
  @media (max-width: 1024px) {
  }
`;

const Pageflex = styled.div`
  display: flex;
   @media (min-width: 300px) and (max-width: 500px) {
     display: block;
  }
`;


const Skillflex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Skilltext = styled.h1`
  font-family: "Unbounded", sans-serif;
  font-size:1.5rem;
`
const SkillInput = styled.input`
border-radius: 1vw;
    width: 20vw;
    height: 3vh;
    margin:1rem;
    text-align: center;
    font-size: 1rem;
    font-weight:bold;
      font-family: "Unbounded", sans-serif;
`

const CVButton = styled.button`
  border-radius: 50px; /* Bouton arrondi */
  padding: 0.5rem 1.5rem;
  width:auto;
  font-size: 1.5rem;
  font-family: "Bebas Neue", sans-serif;
  color: black;
  background-color: white; /* Bleu modéré pour le fond */
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  
  &:hover {
    background-color: black; /* Bleu foncé au survol */
    color: white;
    transform: scale(1.05); /* Légère mise en relief au survol */
  }

  &:active {
    transform: scale(0.95); /* Effet de clic */
  }
  margin: 1rem;
`;

const CVButtonflex = styled.div`
 @media (min-width: 300px) and (max-width: 500px) {
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
  }
`


function Skills() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [animationName, setAnimationName] = useState('fadeIn');

  // State for the hovered icon name
  const [hoveredIcon1, setHoveredIcon1] = useState('');
  const [hoveredIcon2, setHoveredIcon2] = useState('');
  const [hoveredIcon3, setHoveredIcon3] = useState('');

  const handleLeft = useCallback(() => {
    setAnimationName('fadeOut');
    setIsFadingOut(true);
    setTimeout(() => {
      navigate('/aboutme');
    }, 1000);
  }, [navigate]);

  const handleRight = useCallback(() => {
    setAnimationName('backOutLeft');
    setIsFadingOut(true);
    setTimeout(() => {
      navigate('/project');
    }, 500);
  }, [navigate]);

  const handleSpace = useCallback((event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      handleRight();
    }
  }, [handleRight]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handleLeft();
      } else if (event.key === 'ArrowRight') {
        handleRight();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleSpace);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleSpace);
    };
  }, [handleLeft, handleRight, handleSpace]);

   // Fonction pour afficher le CV dans un nouvel onglet
   const handleShowCV = () => {
    window.open(CV, '_blank');
  };

  // Fonction pour télécharger le CV
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Mon_CV.png'; // Nom du fichier téléchargé
    link.click();
  };

  return (
    <Container isFadingOut={isFadingOut} animationName={animationName}>
      <Title>{t('skills.title')}</Title>

      <Pageflex>
      <CVContainer>
        <CVImage src={CV} alt="CV Image" />
        <CVButtonflex>
        <CVButton onClick={handleShowCV}>Afficher le CV</CVButton>
        <CVButton onClick={handleDownloadCV}>Télécharger le fichier</CVButton>
        <Button onClick={handleRight}>{t('skills.project')}</Button>
        </CVButtonflex>
      </CVContainer>

        <Skillflex>
          <Skilltext>Mes Compétences - Front-End</Skilltext>
          <IconsContainer>
            {[{src: HTML, name: 'HTML - Avancé'}, {src: CSS, name: 'CSS - Avancé'}, {src: JS, name: 'JavaScript - Intermédiaire'}, 
              {src: Jquery, name: 'jQuery - Notions'}, {src: Typescript, name: 'TypeScript - Intermédiaire'}, {src: ReactIcon, name: 'React - Avancé'}, 
              {src: ReactNative, name: 'React Native - Avancé'}].map((icon, index) => (
              <Icon 
                key={index} 
                src={icon.src} 
                alt="Skill Icon" 
                onMouseEnter={() => setHoveredIcon1(icon.name)}
                onMouseLeave={() => setHoveredIcon1('')}
              />
            ))}
          </IconsContainer>
          <SkillInput type="text" value={hoveredIcon1 ? `${hoveredIcon1}` : ''} readOnly />

          <Skilltext>Mes Compétences - Back-End</Skilltext>
          <IconsContainer>
            {[{src: PHP, name: 'PHP - Intermédiaire'}, {src: NodeJS, name: 'NodeJS - Notions '}, {src: MYSQL, name: 'MySQL - Intermédiaire'}, 
              {src: Python, name: 'Python - Notions'}, {src: Symfony, name: 'Symfony - Intermédiaire'}, {src: Firebase, name: 'Firebase - Avancé '}].map((icon, index) => (
              <Icon 
                key={index} 
                src={icon.src} 
                alt="Skill Icon" 
                onMouseEnter={() => setHoveredIcon2(icon.name)}
                onMouseLeave={() => setHoveredIcon2('')}
              />
            ))}
          </IconsContainer>
          <SkillInput type="text" value={hoveredIcon2 ? `${hoveredIcon2}` : ''} readOnly />

          <Skilltext>Mes CMS et Outils</Skilltext>
          <IconsContainer>
            {[{src: Wordpress, name: 'Wordpress - Intermédiaire'}, {src: Git, name: 'Git - Intermédiaire'}, {src: Github, name: 'Github - Intermédiaire'}, {src: Figma, name: 'Figma - Avancé'}].map((icon, index) => (
              <Icon 
                key={index} 
                src={icon.src} 
                alt="Skill Icon" 
                onMouseEnter={() => setHoveredIcon3(icon.name)}
                onMouseLeave={() => setHoveredIcon3('')}
              />
            ))}
          </IconsContainer>
          <SkillInput type="text" value={hoveredIcon3? `${hoveredIcon3}` : ''} readOnly />
        </Skillflex>
      </Pageflex>

      <Navflex>
        <NavButton onClick={handleLeft}>◀︎</NavButton>
        <NavButton onClick={handleRight}>▶︎</NavButton>
      </Navflex>
    </Container>
  );
}

export default Skills;
