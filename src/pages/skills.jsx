import React from 'react';
import styled from 'styled-components';


import HTML from '../images/html.webp';
import CSS from '../images/css.png';
import JS from '../images/javascript.webp';
import Expo from '../images/expo.png';
import Figma from '../images/figma.png';
import ReactIcon from '../images/react.png';
import ReactNative from '../images/reactnative.png';
import NodeJS from '../images/nodejs.svg';

import Symfony from '../images/symfony.png';
import MYSQL from '../images/mysql.svg';
import Firebase from '../images/firebase.svg';

const Container = styled.div`
color:white;
  display: flex;
  font-family: cursive;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
  text-align: center;
`;

const Title = styled.div`
color:white;
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
  width: 80vw;  /* Ajuster la largeur selon vos besoins */
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
  flex-wrap: wrap; /* Permet aux icônes de passer à la ligne suivante si nécessaire */
  justify-content: center;
`;

const Icon = styled.img`
  width: 10%;  /* Largeur des images définie ici */
  margin: 10px; /* Espacement entre les icônes */
`;

// Styles pour le bouton de navigation gauche et droite
const Navflex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

// Bouton de navigation
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
    return (
        <Container>
            <Title>Compétences</Title>
            <Section>
                <SectionTitle>Mes Compétences Front-End</SectionTitle>
                <IconContainer>
                    <Icon src={HTML} alt="HTML" />
                    <Icon src={CSS} alt="CSS" />
                    <Icon src={JS} alt="JavaScript" />
                    <Icon src={Figma} alt="Figma" />
                    <Icon src={ReactIcon} alt="React" />
                    <Icon src={ReactNative} alt="React Native" />
                    <Icon src={NodeJS} alt="Node.js" />
                </IconContainer>
            </Section>
            <Section>
                <SectionTitle>Mes Compétences Back-End</SectionTitle>
                <IconContainer>
                    <Icon src={Symfony} alt="Symfony" />
                    <Icon src={MYSQL} alt="MySQL" />
                    <Icon src={Firebase} alt="Firebase" />
                </IconContainer>
            </Section>

            <Navflex>
            <NavButton>&larr;</NavButton> {/* Flèche gauche */}
            <NavButton>&rarr;</NavButton> {/* Flèche droite */}
          </Navflex>
        </Container>
    );
}

export default Skills;
