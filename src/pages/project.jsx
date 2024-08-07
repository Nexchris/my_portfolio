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
  animation: fadeIn 5s;
  ${props => props.isFadingOut && animationStyles};
  /* Vous pouvez également ajouter d'autres animations ici si nécessaire */
    height: 110vh; /* Assurez-vous que le Body occupe toute la hauteur de la fenêtre */


`;

const Container = styled.div`
  color: white;
  display: flex;
  font-family: cursive;
  flex-direction: column;
  width: 100vw;
  text-align: left;
  position: relative;
  @media (max-width: 1000px) {
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
      margin: 0;
  }

  @media (min-width: 501) and (max-width:1199) {
       font-size: 6rem;
  }

     @media (min-width: 1200px) and (max-width:1400px) {
       font-size: 6rem;
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
  @media (max-width: 1199px) {
    display: none;
  }
    @media (min-width: 1200px) and (max-width:1600px) {
  }
`;

const ProjectContainer = styled.div`
  background-color: white;
  width: 50vw;
  height: 25vh;
  position: absolute;
  top: 5%;
  left: 40%;
  text-align: center;
  @media (max-width: 1199px) {
    transform: translate(-40%, 70%);
    width: 100vw;
  }
      @media (min-width: 1200px) and (max-width:1600px) {
       left:45%;
  }
`;

const ProjectFlex = styled.div`
display: flex;
height: auto;
`;

const ProjectTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15vh;
  @media (max-width: 500px) {
    margin: 0;
  }
    @media (min-width: 501px) and (max-width:1199px) {
    margin:0;
  }
     @media (min-width: 1200px) and (max-width:1400px) {
     margin-left:5vh;
  }
`;

const ProjectImage = styled.img`
  width: -webkit-fill-available;
  height: 45vh;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  @media (max-width: 600px) {
    width: -webkit-fill-available;
    height: 30vh;
  }
      @media (min-width: 1200px) and (max-width:1400px) {
       height:40vh;
  }
`;

const ProjectContent = styled.div`
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-size: 2vh;
  color: white;
  margin-top: 2vh;
  text-align: center;
    @media (max-width: 500px) {
        transform: translate(27%, 0%);
        width:65vw;
  }
`;

const IndexButton = styled.button`
  animation: fadeIn 2s;
  border-radius: 5vh;
  border: none;
  background-color: white;
  font-size: 2rem;
  padding: 1rem 2rem;
      margin-right: 3vw;
  color: black;
  font-family: "Bebas Neue", sans-serif;
  transition: opacity 0.3s;
  cursor: pointer;
  margin-top: 2vh;
  &:hover {
    opacity: 0.8;
  }
     @media (max-width: 500px) {
   font-size: 1.5rem;    
        margin-bottom: 3vh;
  }
        @media (min-width: 501px) and (max-width:1200px) {
     margin-bottom: 10vh;
  }
        
`;

const A = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: inherit;
    text-decoration: none;
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

const Navflex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  position: absolute;
  top: 45rem;
  left: 55rem;
  @media (max-width: 1199px) {
    display: none;
  }
`;

const NavButton = styled.div`
  border-radius: 50%;
  border: none;
  font-size: 2rem;
  padding: 1rem;
  color: white;
  margin: 0 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

function Project() {
  const navigate = useNavigate();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [animationName, setAnimationName] = useState('');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  const projects = [
    { id: 'BAM', title: 'La Boite à Momes', image: BAM, content1: t('project.section1.content1'), content2: t('project.section1.content2'), button: t('project.button1'), button0: t('project.button0'), link: 'https://www.boitamomes.fr/' },
    { id: 'Webdoc', title: 'Webdoc Interactif', image: Webdoc, content1: t('project.section2.content1'), content2: t('project.section2.content2'), button: t('project.button2'), button0: t('project.button0'), link: 'https://github.com/Nexchris/projetfinaljudo' },
    { id: 'Records', title: 'Records On Shelf', image: Records, content1: t('project.section3.content1'), content2: t('project.section3.content2'), button: t('project.button3'), button0: t('project.button0'), link: 'https://github.com/Nexchris/records' }
  ];

  const handleLeft = useCallback(() => {
    setAnimationName('backOutRight'); // Assurez-vous que cette animation est définie dans animate.css ou votre CSS
    setIsFadingOut(true);
    setTimeout(() => {
      navigate('/skills');
    }, 1000);
  }, [navigate]);

  const handleRight = useCallback(() => {
    setAnimationName('fadeOut'); // Assurez-vous que cette animation est définie dans animate.css ou votre CSS
    setIsFadingOut(true);
    setTimeout(() => {
      navigate('/contact');
    }, 1000);
  }, [navigate]);

  const handleSpace = useCallback((event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      handleRight();
    }
  }, [handleRight]);

  window.addEventListener('keydown', handleSpace);

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
              <IndexButton>
                <A onClick={handleRight}>{project.button0}</A>
              </IndexButton>
            </ProjectContainer>
          ) : null
        ))}
        <Navflex>
        <NavButton onClick={handleLeft}>◀︎</NavButton>
        <NavButton onClick={handleRight}>▶︎</NavButton>
        </Navflex>
      </ProjectFlex>
    </Body>
  );
}

export default Project;
