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
`;

const Container = styled.div`
  color: white;
  display: flex;
  font-family: cursive;
  flex-direction: column;
  width: 100vw;
  text-align: left;
  position: relative;
  @media (max-width: 500px) {
    text-align: center;
  }
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

const ProjectTitle = styled.div`
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-size: 4vh;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  margin-bottom: 2vh;
  &:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const ProjectContainer = styled.div`
  animation: fadeIn 3s;
  background-color: white;
  width: 50vw;
  height: 25vh;
  position: absolute;
  top: 21%;
  left: 40%;
  text-align: center;
  @media (max-width: 500px) {
    position: static;
    width: 100vw;
  }
`;

const ProjectFlex = styled.div`
  display: flex;
`;

const ProjectTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15vh;
  @media (max-width: 500px) {
    margin: 0;
  }
`;

const ProjectImage = styled.img`
  width: -webkit-fill-available;
  height: 45vh;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  @media (max-width: 500px) {
    width: -webkit-fill-available;
     height: 30vh;
  }
`;

const ProjectContent = styled.div`
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
  background-color: white;
  font-size: 2rem;
  padding: 1rem 2rem;
  color: black;
  font-family: "Bebas Neue", sans-serif;
  transition: opacity 0.3s;
  cursor: pointer;
  margin-top: 2vh;
  &:hover {
    opacity: 0.8;
  }
`;

const A = styled.a`
  color: inherit;  /* Utilise la couleur du texte parent */
  text-decoration: none;  /* Enlève le soulignement */
  &:hover {
    color: inherit;  /* Assure que la couleur reste la même lors du survol */
    text-decoration: none;  /* Assure que le soulignement reste enlevé lors du survol */
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;

const ProjectNumber = styled.div`
  font-size: 2rem;
  color: white;
    font-family: "Unbounded", sans-serif;
  margin: 0 1rem;
      margin-bottom: 2vh;
`;

function Project() {
  const navigate = useNavigate();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [animationName, setAnimationName] = useState('fadeIn');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  const projects = [
    { id: 'BAM', title: 'La Boite à Momes', image: BAM, content1: t('project.section1.content1'), content2: t('project.section1.content2'), button: t('project.button1'), link: 'https://www.boitamomes.fr/' },
    { id: 'Webdoc', title: 'Webdoc Interactif', image: Webdoc, content1: t('project.section2.content1'), content2: t('project.section2.content2'), button: t('project.button2'), link: 'https://github.com/Nexchris/projetfinaljudo' },
    { id: 'Records', title: 'Records On Shelf', image: Records, content1: t('project.section3.content1'), content2: t('project.section3.content2'), button: t('project.button3'), link: 'https://github.com/Nexchris/records' }
  ];

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

  const handleNextProject = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePreviousProject = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <Body isFadingOut={isFadingOut} animationName={animationName}>
      <Container>
        <Title>{t('project.title')}</Title>
        {isMobile && (
          <NavigationContainer>
            <ArrowButton onClick={handlePreviousProject}>&lt;</ArrowButton>
            <ProjectNumber>{`Projet ${selectedProjectIndex + 1}`}</ProjectNumber>
            <ArrowButton onClick={handleNextProject}>&gt;</ArrowButton>
          </NavigationContainer>
        )}
      </Container>

      <ProjectFlex>
        <ProjectTitleContainer>
          {projects.map((project, index) => (
            <ProjectTitle key={project.id} onClick={() => setSelectedProjectIndex(index)}>
              {project.title}
            </ProjectTitle>
          ))}
        </ProjectTitleContainer>
        {projects.map((project, index) => (
          (isMobile && selectedProjectIndex === index) || (!isMobile && selectedProjectIndex === index) ? (
            <ProjectContainer key={project.id}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>{project.content1}</ProjectContent>
              <br />
              <ProjectContent>{project.content2}</ProjectContent>
              <IndexButton>
                <A href={project.link}>{project.button}</A>
              </IndexButton>
            </ProjectContainer>
          ) : null
        ))}
      </ProjectFlex>
    </Body>
  );
}

export default Project;
