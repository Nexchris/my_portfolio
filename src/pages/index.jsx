import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
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
  color: white;
  width: 55vw;

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

const Button = styled.button`
  cursor: pointer;
  border-radius: 5vh;
  border: none;
  background-color: black;
  font-size: 2rem;
  padding: 1rem 2rem;
  color: white;
  font-family: "Bebas Neue", sans-serif;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

function Index() {
  const [animate, setAnimate] = useState(false);
  const [hideContent, setHideContent] = useState(false);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setAnimate(true);
    setTimeout(() => {
      setHideContent(true);
      navigate('/aboutme');
    }, 500); // Assurez-vous que cette durée est égale à la durée de l'animation
  }, [navigate]);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 500); // Assurez-vous que cette durée est égale à la durée de l'animation
      return () => clearTimeout(timer);
    }
  }, [animate]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ' || event.key === 'Enter') {
        handleClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClick]);

  return (
    <Indexcontainer className={animate ? 'animate' : ''} hideContent={hideContent}>
      <Text>Hey, Je suis Chris Ngabala</Text>
      <br />
      <Text>Je suis un développeur Web Fullstack</Text>
      <br />
      <Button onClick={handleClick}>START</Button>
    </Indexcontainer>
  );
}

export default Index;
