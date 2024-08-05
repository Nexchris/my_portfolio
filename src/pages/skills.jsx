import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la navigation
import 'animate.css';

import HTML from '../images/html.webp';
import CSS from '../images/css.png';
import JS from '../images/javascript.webp';
import Figma from '../images/figma.png';
import ReactIcon from '../images/react.png';
import ReactNative from '../images/reactnative.png';
import NodeJS from '../images/nodejs.svg';
import Symfony from '../images/symfony.png';
import MYSQL from '../images/mysql.svg';
import Firebase from '../images/firebase.svg';

const Container = styled.div`
animation: zoomIn 1s;
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

const Title = styled.div`
  color: white;
  margin: 0;
  font-size: 8rem;
  margin-top: 5vh;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  margin-top: 3vh;
  margin-bottom: 3vh;
`;

const SectionTitle = styled.h2`
  margin: 1rem 0;
  font-size: 2rem;
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: bold;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Icon = styled.img`
  width: 10%;
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

const icons = [
  { src: HTML, alt: "HTML" },
  { src: CSS, alt: "CSS" },
  { src: JS, alt: "JavaScript" },
  { src: Figma, alt: "Figma" },
  { src: ReactIcon, alt: "React" },
  { src: ReactNative, alt: "React Native" },
  { src: NodeJS, alt: "Node.js" },
  { src: Symfony, alt: "Symfony" },
  { src: MYSQL, alt: "MySQL" },
  { src: Firebase, alt: "Firebase" }
];

function Skills() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => {
        if (prevIndex < icons.length - 1) {
          return prevIndex + 1;
        }
        clearInterval(interval);
        return prevIndex;
      });
    }, 300); // Changer d'icône toutes les 500ms

    return () => clearInterval(interval);
  }, []);

  const handleLeft = () => {
    navigate('/aboutme'); // Utilisation de navigate pour la navigation
  };

  return (
    <Container>
      <Title>Compétences</Title>
      <Section>
        <SectionTitle>Mes Compétences Front-End</SectionTitle>
        <IconContainer>
          {icons.map((icon, index) => (
            <Icon
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              className={`animate__animated ${index <= currentIconIndex ? 'animate__zoomIn' : 'animate__fadeOut'}`}
              style={{ opacity: index <= currentIconIndex ? 1 : 0 }}
            />
          ))}
        </IconContainer>
      </Section>

      <Section>
        <SectionTitle>Mes Compétences Back-End</SectionTitle>
        <IconContainer>
          {icons.slice(icons.length - 3).map((icon, index) => (
            <Icon
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              className={`animate__animated ${index + icons.length - 3 <= currentIconIndex ? 'animate__zoomIn' : 'animate__fadeOut'}`}
              style={{ opacity: index + icons.length - 3 <= currentIconIndex ? 1 : 0 }}
            />
          ))}
        </IconContainer>
      </Section>

      <Navflex>
        <NavButton onClick={handleLeft}>&larr;</NavButton>
      </Navflex>
    </Container>
  );
}

export default Skills;
