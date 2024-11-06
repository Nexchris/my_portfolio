import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import { useTranslation } from 'react-i18next';
import Tipimage from '../images/ui/handleft.png'
import { Indexcontainer, IndexTitle, IndexButton, Tip, Tipmobile, Tipimg } from '../code/composant/IndexComposant'


function Index() {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const [hideContent, setHideContent] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1920);
  const navigate = useNavigate();
  
  const [startX, setStartX] = useState(0);

  // Fonction mémorisée avec useCallback
  const handleRight = useCallback(() => {
    setIsHovered(true);
    setAnimate(true);
    setTimeout(() => {
      setHideContent(true);
      navigate('/aboutme');
    }, 500);
  }, [navigate]);

  // Effet pour contrôler l'animation
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
        setIsHovered(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  // Gestion du swipe (start et end)
  const handleTouchStart = useCallback((e) => {
    setStartX(e.touches[0].clientX); // Enregistre la position initiale du toucher
  }, []); // Cette fonction ne dépend de rien

  const handleTouchEnd = useCallback((e) => {
    const endX = e.changedTouches[0].clientX; // Position finale
    const deltaX = endX - startX; // Différence entre début et fin du mouvement
    const threshold = 50; // Seuil pour déclencher le swipe

    if (deltaX > threshold) {
      handleRight(); // Seulement swipe vers la droite
    }
  }, [startX, handleRight]); // Dépend de startX et handleRight

  // Mise à jour de l'état isMobile lors du redimensionnement
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1920);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Gestion des événements de clavier et de swipe
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        handleRight(); // Seulement flèche droite
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleRight, handleTouchStart, handleTouchEnd]); // Inclure handleTouchStart et handleTouchEnd ici

  return (
    <Indexcontainer className={animate ? 'animate' : ''} hideContent={hideContent}>
      <IndexTitle>{t('index.name')}</IndexTitle>
      <br />
      <IndexTitle>{t('index.title')}</IndexTitle>
      <br />
      <IndexButton 
        onClick={handleRight}
        isHovered={isHovered} 
      >
        {t('index.button')}
      </IndexButton>
      <Tip isMobile={isMobile}>{t('index.tip')}</Tip>
      <Tipmobile isMobile={isMobile}>{t('index.tipmobile')} <br /><Tipimg src={Tipimage}/></Tipmobile>
    </Indexcontainer>
  );
}

export default Index;
