import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Index from './IndexPage';
import { useTranslation } from 'react-i18next';
import { MainContainer, ScrollContainer, ScrollableContainer, ScrollButton, ContentContainer, Storytelling, Title, Content, StorytellingList2, Title2, StorytellingList, Content2, Button, Navflex, NavButton} from '../code/composant/AboutComposant';

// Autres composants stylés...

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
  const [startX, setStartX] = useState(0);
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
    if (event.key === 'Enter') {
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

  // Gestion du swipe
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX); // Enregistre la position initiale du toucher
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX; // Position finale
    const deltaX = endX - startX; // Différence entre début et fin du mouvement
    const threshold = 200; // Seuil pour déclencher le swipe

    if (deltaX > threshold) {
      handleRight(); // Swipe à droite -> page précédente
    } else if (deltaX < -threshold) {
    }
  };

  return (
    <>
      {!showIndex && (
        <MainContainer
          animate={animate}
          hideContent={hideContent}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd} // Ajouté ici pour la gestion du swipe
        >
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
