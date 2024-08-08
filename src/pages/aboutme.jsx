import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Index from './index';
import 'animate.css';
import { useTranslation } from 'react-i18next';

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
  overflow-y: ${(props) => (props.isMobile ? 'auto' : 'hidden')};
  padding: 1rem;
  margin-bottom: 2rem;
  touch-action: pan-y;

  @media (max-width: 1600px) {
    overflow: auto;
  }
`;

const Button = styled.button`
  animation: fadeIn 2s;
  border-radius: 5vh;
  border: none;
  background-color: white;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem 2rem;
  color: black;
  font-family: "Bebas Neue", sans-serif;
  transition: opacity 0.3s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 35%);
  display: none;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1024px) {
    display: block;
     position: relative;
  }
    @media (min-width: 750px) and (max-width: 1024px) {
    font-size: 3rem;
        padding: 1rem 5rem;
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

const ScrollContainer = styled.div`
  position: fixed;
  right: 10em;
  top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1199px) {
    display: none;
  }

   @media (min-width: 1200px) and (max-width: 1600px)  {
    right: 3em;
    top: 27%;
  }
`;

const ScrollButton = styled.div`
  background: transparent;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: "Unbounded", sans-serif;
  font-size: 1.2rem;
  margin: 2.5rem 0;
  opacity: 1;

  &:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
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
    font-size: 1.3rem;
  }

  @media (min-width: 501px) and (max-width: 1650px) {
    font-size: 1.7rem;
  }
`;

const StorytellingList = styled(Storytelling)`
  margin-bottom: 30vh;
    @media (max-width: 1200px) {
     margin-bottom: 15vh;
  }
`;

const StorytellingList2 = styled(Storytelling)`
  margin-bottom: 30vh;
  font-size: 3rem;
    @media (max-width: 1200px) {
     margin-bottom: 15vh;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 8rem;
  margin-top: 5vh;
  margin-bottom: 10vh;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 399px) {
    font-size: 5rem;
    margin-top: 5vh;
    margin-bottom: 2vh;
  }

  @media (min-width: 401px) and (max-width: 500px) {
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
  font-size: 6rem;
  margin-bottom: 5vh;

  @media (max-width: 500px) {
    font-size: 4rem;
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

  const handleSpace = useCallback((event) => {
    if ( event.key === 'Enter') {
      handleRight();
    }
  }, [handleRight]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleSpace);
    window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 768));

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleSpace);
      window.removeEventListener('resize', () => setIsMobile(window.innerWidth <= 768));
    };
  }, [handleKeyDown, handleSpace]);

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
                  <Button onClick={handleRight}>{t('aboutme.section4.button')}</Button>
                </Content2>
              </StorytellingList>
            </ContentContainer>
          </ScrollableContainer>

          <Navflex>
            <NavButton onClick={handleLeft}>◀︎</NavButton>
            <NavButton onClick={handleRight}>▶︎</NavButton>
          </Navflex>

          <ScrollContainer>
            <ScrollButton onClick={() => scrollToSection('section1')}>■ {t('aboutme.scroll1')}</ScrollButton>
            <ScrollButton onClick={() => scrollToSection('section2')}>■ {t('aboutme.scroll2')}</ScrollButton>
            <ScrollButton onClick={() => scrollToSection('section3')}>■ {t('aboutme.scroll3')}</ScrollButton>
            <ScrollButton onClick={() => scrollToSection('section4')}>■ {t('aboutme.scroll4')}</ScrollButton>
          </ScrollContainer>
        </MainContainer>
      )}
      {showIndex && <Index />}
    </>
  );
}

export default Aboutme;
