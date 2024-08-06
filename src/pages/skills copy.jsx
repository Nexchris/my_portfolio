import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
import ReactNative from '../images/reactnative.png';
import Symfony from '../images/symfony.png';
import Firebase from '../images/firebase.svg';
const Container = styled.div`
animation: fadeIn 1s;
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

const Flexcontainer = styled.div`
display: flex;
`

const LeftContainer = styled.div`
width:40vw;
height:60vh;
background-color:blue;
`

const RightContainer = styled.div`
width:40vw;
height:60vh;
background-color:red;
`
const Case = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 20vw;
  border: 1px solid white;
`;

const Casetitle = styled.h1`
margin: 0;
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-size: 3vh;
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
  width: 20%;
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

const CaseContainer = styled.div`
  display: flex;
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
      <Flexcontainer>
      <LeftContainer>
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

        </LeftContainer>
      <RightContainer />
      </Flexcontainer>
      <Navflex>
        <NavButton onClick={handleLeft}>&larr;</NavButton>
      </Navflex>
    </Container>
  );
}

export default Skills;
