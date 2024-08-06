import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'animate.css';
import BAM from "../images/bam.png";
import Webdoc from "../images/webdoc.png";
import Records from "../images/records.png";

const animationStyles = css`
  animation: ${props => props.animationName} 1s;
`;

const Body = styled.div`
  ${props => props.isFadingOut && animationStyles};
  animation: backInRight 0.5s;
`
const Container = styled.div`
  color: white;
  display: flex;
  font-family: cursive;
  flex-direction: column;
  width: 100vw;
  text-align: left;
  position: relative;
`;

const Title = styled.div`
  color: white;
  margin: 0;
  font-size: 8rem;
  margin-left: 5vw;
  margin-top: 5vh;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 500px) {
    font-size: 4rem;
  }
`;

const Projectitle = styled.div`
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-size: 4vh;
  color:white;
  font-weight:bold;
  cursor: pointer;
`;

const Projectcontainer = styled.div`
animation: fadeIn 3s;
  background-color: white;
  width: 50vw;
  height: 25vh;
  position: absolute;
  top: 21%;
  left: 40%;
`;

const Projectflex = styled.div`
  display: flex;
`;

const Projecttitlecontainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15vh;
`;

const Projectimage = styled.img`
  width: -webkit-fill-available;
  height: 45vh;
`;

const Projectcontent = styled.div`
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-size: 2vh;
  color: white;
  margin-top: 2vh;
  text-align: center;
`;

const IndexButton = styled.button`
  animation: fadeIn 2s;
  border-radius: 5vh;
  border: none;
  background-color: black;
  font-size: 2rem;
  padding: 1rem 2rem;
  color: white;
  font-family: "Bebas Neue", sans-serif;
  transition: opacity 0.3s;
  margin-left: 20vw;
  margin-top: 2vh;
  &:hover {
    opacity: 0.8;
  }
`;

function Project() {
  const navigate = useNavigate();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [animationName, setAnimationName] = useState('fadeIn');
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useTranslation();

  const handleLeft = useCallback(() => {
    setAnimationName('backOutRight');
    setIsFadingOut(true);
    setTimeout(() => {
      navigate('/skills');
    }, 1000);
  }, [navigate]);

  const handleRight = useCallback(() => {
    setAnimationName('fadeOutRightBig');
    setIsFadingOut(true);
    setTimeout(() => {
      navigate('/contact');
    }, 1000);
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

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleLeft, handleRight]);

  return (
    <>
    <Body>
      <Container isFadingOut={isFadingOut} animationName={animationName}>
        <Title>{t('project.title')}</Title>
      </Container>

      <Projectflex>
        <Projecttitlecontainer>
          <Projectitle onClick={() => setSelectedProject('BAM')}>La Boite à Momes</Projectitle>
          <Projectitle onClick={() => setSelectedProject('Webdoc')}>Webdoc Interactif</Projectitle>
          <Projectitle onClick={() => setSelectedProject('Records')}>Records On Shelf</Projectitle>
        </Projecttitlecontainer>
        {selectedProject === 'BAM' && (
          <Projectcontainer>
            <Projectimage src={BAM} alt="" />
            <Projectcontent>Langages utilisés : Jimdo(CMS), HTML, CSS, Javascript</Projectcontent>
            <br />
            <Projectcontent>J'ai eu la fonction de developpeur web Front-End pour but de la refonte du site, j'ai pris en charge la nouvelle conception du site via le CMS Jimdo et personnaliser via des widgets Javascripts interactifs.</Projectcontent>
            <IndexButton>Voir le Site</IndexButton>
          </Projectcontainer>
        )}
        {selectedProject === 'Webdoc' && (
          <Projectcontainer>
            <Projectimage src={Webdoc} alt="" />
            <Projectcontent>Langages utilisés : HTML, CSS, Javascript, Firebase, React, TypeScript</Projectcontent>
            <br />
            <Projectcontent>Pour ce projet de groupe, l'objectif était de réaliser un webdocumentaire interactif basé sur une maquette dédiée à l'événement des Jeux Olympiques. Le site intègre des animations créées avec React et utilise Firebase pour la gestion de la base de données.</Projectcontent>
            <IndexButton>Lien Github</IndexButton>
          </Projectcontainer>
        )}
        {selectedProject === 'Records' && (
          <Projectcontainer>
            <Projectimage src={Records} alt="" />
            <Projectcontent>Langages utilisés : CSS, Javascript, React, Syfmony, SQLite</Projectcontent>
            <br />
            <Projectcontent>Pour ce projet scolaire individuel, l'objectif était de développer un site permettant à l'utilisateur de définir son nom et de créer des vinyles, en modifer, les supprimer et les catégoriser. Le projet est divisé en deux parties : une interface utilisateur en React et un back-end en Symfony, reliés par des API RESTful, avec SQLite comme base de données.</Projectcontent>
            <IndexButton>Lien Github</IndexButton>
          </Projectcontainer>
        )}
      </Projectflex>
      </Body>
    </>
  );
}

export default Project;
