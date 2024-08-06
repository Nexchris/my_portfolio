import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la navigation
import Index from './index';
import 'animate.css';
import { useTranslation } from 'react-i18next'; // Importer le hook useTranslation




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
  color: white;
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
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1.7rem;
    
  }
  @media (min-width: 501px) and (max-width: 1650px) {
    font-size: 3rem;
  }
`;

const Content2 = styled.div`
  font-size: 2.1rem;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
  @media (min-width: 501px) and (max-width: 1650px) {
    font-size: 1.7rem;
  }
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
   margin-bottom: 10vh;
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
    margin-bottom: 5vh;
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


// Fonction pour remplacer les sauts de ligne par <br />
const formatContent = (text) => {
  return text.split('\n').map((str, index) => (
    <React.Fragment key={index}>
      {str}
      <br />
    </React.Fragment>
  ));
};




function Aboutme() {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const [showIndex, setShowIndex] = useState(false);
  const [hideContent, setHideContent] = useState(false);
  const [currentSection, setCurrentSection] = useState('section1');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

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
      navigate('/');
    }, 200);
  }, [navigate]);

  const handleRight = useCallback(() => {
    setAnimate(true);
    setTimeout(() => {
      setHideContent(true);
      navigate('/skills');
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
                <Title>{t('aboutme.title')}</Title>
                <Content>
                  {formatContent(t('aboutme.section1.intro'))}
                </Content>
              </Storytelling>
            </ContentContainer>

            <ContentContainer id="section2">
              <StorytellingList2>
                <Title2>{t('aboutme.section2.title')}</Title2>
                <Content2>
                  {formatContent(t('aboutme.section2.content'))}
                </Content2>
              </StorytellingList2>
            </ContentContainer>

            <ContentContainer id="section3">
              <StorytellingList>
                <Title2>{t('aboutme.section3.title')}</Title2>
                <Content2>
                  {formatContent(t('aboutme.section3.content'))}
                </Content2>
              </StorytellingList>
            </ContentContainer>

            <ContentContainer id="section4">
              <StorytellingList>
                <Title2>{t('aboutme.section4.title')}</Title2>
                <Content2>
                  {formatContent(t('aboutme.section4.content'))}
                </Content2>
              </StorytellingList>
            </ContentContainer>
          </ScrollableContainer>

          <Navflex>
            <NavButton onClick={handleLeft}>&larr;</NavButton>
            <NavButton onClick={handleRight}>&rarr;</NavButton>
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