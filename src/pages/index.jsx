import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import { useTranslation } from 'react-i18next';

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
  position: absolute;
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

const IndexTitle = styled.h1`
  margin: 0;
  font-size: 4rem;
  font-family: "Unbounded", sans-serif;
  color: white;
  width: 55vw;
  animation: animate__bounceIn 2s;

  @media (max-width: 499px) {
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

const IndexButton = styled.button`
  animation: animate__fadeIn 2s;
  border-radius: 5vh;
  border: none;
  background-color: ${(props) => (props.isHovered ? 'black' : 'white')};
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem 2rem;
  color: ${(props) => (props.isHovered ? 'white' : 'black')};
  font-family: "Bebas Neue", sans-serif;
  transition: background-color 0.3s, transform 0.2s;
  transform: ${(props) => (props.isHovered ? 'scale(1.2)' : 'scale(1)')};

  &:hover {
    background-color: black;
    color: white;
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Tip = styled.div`
  animation: animate__fadeIn 5s;
  margin: 0;
  position: absolute;
  top: 80%;
  font-size: 2rem;
  font-family: "Unbounded", sans-serif;
  color: white;
  width: 100vw;

  @media (max-width: 1919px) {
    display: none;
  }
`;

function Index() {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const [hideContent, setHideContent] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // État pour gérer l'effet d'hover sur le bouton
  const navigate = useNavigate();

  const handleRight = useCallback(() => {
    setIsHovered(true); // Active l'effet d'hover
    setAnimate(true); // Active l'animation générale
    setTimeout(() => {
      setHideContent(true);
      navigate('/aboutme');
    }, 500); 
  }, [navigate]);

  const handleLeft = useCallback(() => {
    setAnimate(true);
    setTimeout(() => {
      setHideContent(true);
      navigate('/contact');
    }, 500); 
  }, [navigate]);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
        setIsHovered(false); // Désactive l'effet de hover après l'animation
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handleLeft();
      } else if (event.key === 'ArrowRight') {
        handleRight();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleLeft, handleRight]);

  return (
    <Indexcontainer className={animate ? 'animate' : ''} hideContent={hideContent}>
      <IndexTitle>{t('index.name')}</IndexTitle>
      <br />
      <IndexTitle>{t('index.title')}</IndexTitle>
      <br />
      <IndexButton 
        onClick={handleRight} 
        isHovered={isHovered} 
      >
        {t('index.button')}
      </IndexButton>
      <Tip>{t('index.tip')}</Tip>
    </Indexcontainer>
  );
}

export default Index;
