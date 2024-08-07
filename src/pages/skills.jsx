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
import MYSQL from '../images/mysql.svg';
import ReactIcon from '../images/react.png';
import Symfony from '../images/symfony.png';
import Firebase from '../images/firebase.png';

const animationStyles = css`
  animation: ${props => props.animationName} 1s;
`;

const Container = styled.div`
  animation: fadeIn 2s;
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
    margin: 10px 0; // Ajouter de l'espace entre les éléments en mode mobile
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


const NavButton = styled.div`
  cursor: pointer;
  border-radius: 50%;
  border: none;

  font-size: 2rem;
  padding: 1rem;
  color: white;
  margin: 0 1rem;

  &:hover {
    opacity: 0.8;
  }
`;
const Navflex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
   @media (max-width: 1024px) {
    display:none;
  }
`;

const Allcasecontainer = styled.div`
  @media (max-width: 500px) {
    overflow-y: scroll; // Permettre le défilement vertical
    height: 60vh; // Hauteur de la zone de défilement
  }
`;

const CaseContainer = styled.div`
  display: flex;

  @media (max-width: 500px) {
    display: block;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 35%);
  display: none;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;

function Skills() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [animationName, setAnimationName] = useState('fadeIn');

  const handleLeft = useCallback(() => {
    setAnimationName('fadeOut');
    setIsFadingOut(true);
    setTimeout(() => {
      navigate('/aboutme');
    }, 1000); // Attendre la fin de l'animation (1s)
  }, [navigate]);

  const handleRight = useCallback(() => {
    setAnimationName('backOutLeft');
    setIsFadingOut(true);
    setTimeout(() => {
      navigate('/project');
    }, 500); // Attendre la fin de l'animation (1s)
  }, [navigate]);


 

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
  }, [handleLeft, handleRight]);

  return (
    <Container isFadingOut={isFadingOut} animationName={animationName}>
      <Title>{t('skills.title')}</Title>
      <Allcasecontainer>
        <CaseContainer>
          <Case>
            <Icon src={HTML}></Icon>
            <Casetitle>HTML5</Casetitle>
          </Case>

          <Case>
            <Icon src={CSS}></Icon>
            <Casetitle>CSS</Casetitle>
          </Case>
        </CaseContainer>
        <CaseContainer>
          <Case>
            <Icon src={JS}></Icon>
            <Casetitle>JavaScript</Casetitle>
          </Case>

          <Case>
            <Icon src={NodeJS}></Icon>
            <Casetitle>NodeJS</Casetitle>
          </Case>
        </CaseContainer>
        <CaseContainer>
          <Case>
            <Icon src={Typescript}></Icon>
            <Casetitle>TypeScript</Casetitle>
          </Case>

          <Case>
            <Icon src={Jquery}></Icon>
            <Casetitle>Jquery</Casetitle>
          </Case>
        </CaseContainer>
        <CaseContainer>
          <Case>
            <Icon src={Wordpress}></Icon>
            <Casetitle>WordPress</Casetitle>
          </Case>

          <Case>
            <Icon src={Figma}></Icon>
            <Casetitle>Figma</Casetitle>
          </Case>
        </CaseContainer>
        <CaseContainer>
          <Case>
            <Icon src={ReactIcon}></Icon>
            <Casetitle>React</Casetitle>
          </Case>

          <Case>
            <Icon src={ReactIcon}></Icon>
            <Casetitle>React Native</Casetitle>
          </Case>
        </CaseContainer>
        <CaseContainer>
          <Case>
            <Icon src={PHP}></Icon>
            <Casetitle>PHP</Casetitle>
          </Case>

          <Case>
            <Icon src={MYSQL}></Icon>
            <Casetitle>MySQL</Casetitle>
          </Case>
        </CaseContainer>
        <CaseContainer>
          <Case>
            <Icon src={Symfony}></Icon>
            <Casetitle>Symfony</Casetitle>
          </Case>

          <Case>
            <Icon src={Firebase}></Icon>
            <Casetitle>Firebase</Casetitle>
          </Case>
        </CaseContainer>
      </Allcasecontainer>
      <Button onClick={handleRight}>{t('skills.project')}</Button>
      <Navflex>
      <NavButton onClick={handleLeft}>◀︎</NavButton>
      <NavButton onClick={handleRight}>▶︎</NavButton>
      </Navflex>
    </Container>
  );
}

export default Skills;
