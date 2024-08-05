import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la navigation
import Index from './index';
import 'animate.css';

// Animation fadeOutLeft
const fadeOut = keyframes`
from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Animation zoomIn
const zoomIn = keyframes`
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const MainContainer = styled.div`
  animation: ${props => props.animate ? fadeOut : zoomIn} 0.5s forwards;
  color: black;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  width: 100vw;
  text-align: center;
  opacity: ${(props) => (props.hideContent ? 0 : 1)};
  visibility: ${(props) => (props.hideContent ? 'hidden' : 'visible')};
`;

const ScrollableContainer = styled.div`
  width: 60vw;
  height: 80vh;
  overflow-y: ${(props) => (props.isMobile ? 'auto' : 'hidden')}; /* Défilement libre pour mobile */
  padding: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  touch-action: pan-y;
  @media (min-width: 501px) and (max-width: 1650px) {
    width: 70vw;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
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

const ScrollContainer = styled.div`
  position: fixed;
  right: 1rem;
  top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScrollButton = styled.button`
  background: black;
  color: white;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0.5rem 0;

  &:hover {
    opacity: 0.8;
  }
`;

const Storytelling = styled.div`
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: bold;
  margin-bottom: 5rem;
`;

const Content = styled.div`
  font-size: 4rem;
  @media (max-width: 500px) {
    font-size: 1.7rem;
    font-weight: 500;
  }
  @media (min-width: 501px) and (max-width: 1650px) {
    font-size: 3rem;
  }
`;

const Content2 = styled.div`
  font-size: 2.1rem;
  @media (max-width: 500px) {
    font-size: 1rem;
    font-weight: 500;
  }
  @media (min-width: 501px) and (max-width: 1650px) {
    font-size: 1.7rem;
  }
`;

const Li = styled.li`
  text-decoration: none;
`;

const StorytellingList = styled(Storytelling)`
  margin-bottom: 30vh;
`;

const StorytellingList2 = styled(Storytelling)`
  margin-bottom: 30vh;
  font-size: 3rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 8rem;
  margin-top: 5vh;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 500px) {
    font-size: 5rem;
    margin-top: 5vh;
    margin-bottom: 2vh;
  }
  @media (min-width: 501px) and (max-width: 1650px) {
    font-size: 5rem;
    margin-bottom: 5vh;
  }
`;

const Title2 = styled(Title)`
  margin: 0;
  font-size: 6rem;
  @media (max-width: 500px) {
    font-size: 3.5rem;
    margin-bottom: 2vh;
  }
  @media (min-width: 501px) and (max-width: 1650px) {
    font-size: 5rem;
  }
`;

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

function Aboutme() {
  const [animate, setAnimate] = useState(false);
  const [showIndex, setShowIndex] = useState(false);
  const [hideContent, setHideContent] = useState(false);
  const [currentSection, setCurrentSection] = useState('section1'); // Section actuelle
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate(); // Hook pour la navigation

  // Utilisez useMemo pour mémoriser les sections
  const sections = useMemo(() => ['section1', 'section2', 'section3', 'section4'], []);

  const scrollToNextSection = useCallback(() => {
    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = Math.min(sections.length - 1, currentIndex + 1);
    const nextSection = sections[nextIndex];
    setCurrentSection(nextSection);
    scrollToSection(nextSection);
  }, [currentSection, sections]);

  const scrollToPreviousSection = useCallback(() => {
    const currentIndex = sections.indexOf(currentSection);
    const previousIndex = Math.max(0, currentIndex - 1);
    const previousSection = sections[previousIndex];
    setCurrentSection(previousSection);
    scrollToSection(previousSection);
  }, [currentSection, sections]);

  const handleLeft = useCallback(() => {
    setAnimate(true);

    setTimeout(() => {
      setShowIndex(true);
      setHideContent(true);
      navigate('/'); // Naviguer vers la route d'accueil
    }, 200);
  }, [navigate]);

  const handleRight = useCallback(() => {
    setAnimate(true);

    setTimeout(() => {
      setHideContent(true); // Masquer le contenu actuel
      navigate('/skills'); // Naviguer vers la route /skills
    }, 200);
  }, [navigate]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      scrollToPreviousSection();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      scrollToNextSection();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      handleLeft();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      handleRight();
    }
  }, [scrollToPreviousSection, scrollToNextSection, handleLeft, handleRight]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 768));

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', () => setIsMobile(window.innerWidth <= 768));
    };
  }, [handleKeyDown]);

 

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <>
      {!showIndex && (
        <MainContainer animate={animate} hideContent={hideContent}>
          <ScrollableContainer isMobile={isMobile}>
            <ContentContainer id="section1">
              <Storytelling>
                <Title>A propos de moi</Title>
                <Content>
                  Bonjour, je m'appelle Chris Ngabala et je suis développeur Fullstack passionné par le développement web.
                </Content>
              </Storytelling>
            </ContentContainer>

            <ContentContainer id="section2">
              <StorytellingList2>
                <Title2>Mon Parcours</Title2> <br />
                <Content2>
                  Mon parcours a débuté à l'école Multimédia, où j'ai acquis une solide formation en programmation et en développement web. <br /> <br />
                  Durant ma première année, j'ai appris les bases fondamentales du code, ce qui m'a permis de construire une fondation solide en HTML, CSS et JavaScript. <br /> <br />
                  Cette base m'a ensuite préparé à aborder des sujets plus complexes et avancés au cours de ma deuxième année.
                </Content2>
              </StorytellingList2>
            </ContentContainer>

            <ContentContainer id="section3">
              <StorytellingList>
                <Title2>Ma Formation</Title2> <br />
                <Content2>
                  En deuxième année, j'ai considérablement élargi mes compétences en explorant une variété de technologies et de frameworks, me permettant de développer des projets plus complexes :<br />
                  <ul>
                    <Li>Back-End : PHP, MySQL, Symfony et SQLite pour le développement backend et avec aussi sans serveur comme Firebase.</Li> <br />
                    <Li>Front-End : React/Native, TypeScript, Node.js pour le développement frontend.</Li>
                  </ul>
                </Content2>
              </StorytellingList>
            </ContentContainer>

            <ContentContainer id="section4">
              <StorytellingList>
                <Title2>Objectifs et aspirations</Title2>
                <Content2>
                  Actuellement, je suis en quête d'une alternance pour le mois de septembre 2024, (1 semaine à l’école/ 3 semaine en entreprise ) en vue de ma troisième année scolaire à Yutopia. <br /> <br />
                  Je suis particulièrement intéressé par les opportunités qui me permettront de travailler sur des projets innovants et stimulants <br /> tout en continuant à développer mes compétences en tant que développeur Fullstack.
                </Content2>
              </StorytellingList>
            </ContentContainer>
          </ScrollableContainer>

          <Navflex>
            <NavButton onClick={handleLeft}>&larr;</NavButton> {/* Flèche gauche */}
            <NavButton onClick={handleRight}>&rarr;</NavButton> {/* Flèche droite */}
          </Navflex>

          <ScrollContainer>
            <ScrollButton onClick={() => scrollToSection('section1')}>1</ScrollButton>
            <ScrollButton onClick={() => scrollToSection('section2')}>2</ScrollButton>
            <ScrollButton onClick={() => scrollToSection('section3')}>3</ScrollButton>
            <ScrollButton onClick={() => scrollToSection('section4')}>4</ScrollButton>
          </ScrollContainer>
        </MainContainer>
      )}
      {showIndex && <Index />}
    </>
  );
}

export default Aboutme;
