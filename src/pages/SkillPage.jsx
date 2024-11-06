import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import { useTranslation } from 'react-i18next';
import * as SkillsImages from '../images/skill';
import CV from '../images/cv/CV.png';
import CV2 from '../images/cv/cvpdf.pdf';
import { Container, Title, Pageflex, CVContainer, CVImage, CVButtonflex, CVShowButton, CVDownolaodButton, Skillflex, Skilltext, Navflex, IconsContainer, Icon, SkillInput, NavButton} from '../code/composant/SkillComposant'

function Skills() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [animationName, setAnimationName] = useState('fadeIn');
  const [startX, setStartX] = useState(0);

  // State pour les icônes survolées
  const [hoveredIcon1, setHoveredIcon1] = useState('');
  const [hoveredIcon2, setHoveredIcon2] = useState('');
  const [hoveredIcon3, setHoveredIcon3] = useState('');

  // Mémorisation de handleRight avec useCallback
  const handleRight = useCallback(() => {
    setAnimationName('fadeIn');
    setIsFadingOut(true);
    setTimeout(() => {
      navigate('/project');
    }, 1000);
  }, [navigate]);

  // Mémorisation de handleLeft avec useCallback
  const handleLeft = useCallback(() => {
    setAnimationName('fadeOut');
    setIsFadingOut(true);
    setTimeout(() => {
      navigate('/aboutme');
    }, 1000);
  }, [navigate]);

  // Mémorisation de handleTouchStart avec useCallback
  const handleTouchStart = useCallback((e) => {
    setStartX(e.touches[0].clientX); // Enregistre la position initiale du toucher
  }, []); // Cette fonction ne dépend de rien

  // Mémorisation de handleTouchEnd avec useCallback
  const handleTouchEnd = useCallback((e) => {
    const endX = e.changedTouches[0].clientX; // Position finale
    const deltaX = endX - startX; // Différence entre début et fin du mouvement
    const threshold = 325; // Seuil pour déclencher le swipe

    if (deltaX > threshold) {
      handleRight(); // Swipe à droite -> page suivante
    } else if (deltaX < -threshold) {
      handleLeft(); // Swipe à gauche -> page précédente (optionnel si vous le souhaitez)
    }
  }, [startX, handleRight, handleLeft]); // Dépendances: startX, handleRight, handleLeft

  const handleSpace = useCallback((event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      handleRight(); // Gère les touches espace et entrée
    }
  }, [handleRight]);

  // Effet pour gérer les événements de clavier et de touch
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handleLeft(); // Flèche gauche
      } else if (event.key === 'ArrowRight') {
        handleRight(); // Flèche droite
      }
    };

    // Ajout des événements
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('keydown', handleSpace);

    return () => {
      // Nettoyage des événements
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleSpace);
    };
  }, [handleLeft, handleRight, handleSpace, handleTouchStart, handleTouchEnd]); // Dépendances de l'effet

  // Fonction pour afficher le CV dans un nouvel onglet
  const handleShowCV = () => {
    window.open(CV2, '_blank');
  };

  // Fonction pour télécharger le CV
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CV2;
    link.download = 'Chris Ngabala - CV.pdf'; // Nom du fichier téléchargé
    link.click();
  };

  return (
    <Container isFadingOut={isFadingOut} animationName={animationName}>
      <Title>{t('skills.title')}</Title>

      <Pageflex>
  <CVContainer>
    <CVImage src={CV} onClick={handleShowCV} alt="CV Image" />
    <CVButtonflex>
      <CVShowButton onClick={handleShowCV}>{t('skills.ShowCV')}</CVShowButton>
      <CVDownolaodButton onClick={handleDownloadCV}>{t('skills.DownloadCV')}</CVDownolaodButton>
    </CVButtonflex>
  </CVContainer>

  <Skillflex>
      <Skilltext>{t('skills.front')}</Skilltext>
      <IconsContainer>
        {[{ src: SkillsImages.HTML, name: "HTML / HTML5" }, { src: SkillsImages.CSS, name: "CSS" }, { src: SkillsImages.JS, name: "JavaScript" },
          { src: SkillsImages.Jquery, name: "Jquery" }, { src: SkillsImages.Typescript, name: "TypeScript" }, { src: SkillsImages.ReactIcon, name: "React" },
          { src: SkillsImages.ReactNative, name: "React Native" }].map((icon, index) => (
            <Icon
              key={index}
              src={icon.src}
              alt="Skill Icon"
              onMouseEnter={() => setHoveredIcon1(icon.name)}
              onMouseLeave={() => setHoveredIcon1('')}
            />
        ))}
      </IconsContainer>
      <SkillInput type="text" value={hoveredIcon1 ? `${hoveredIcon1}` : ''} readOnly />

      <Skilltext>{t('skills.back')}</Skilltext>
      <IconsContainer>
        {[{ src: SkillsImages.PHP, name: "PHP" }, { src: SkillsImages.NodeJS, name: "NodeJS" }, { src: SkillsImages.Express, name: "Express.js" },  { src: SkillsImages.MYSQL, name: "MySQL" },
          { src: SkillsImages.Python, name: "Python" }, { src: SkillsImages.Symfony, name: "Symfony" }, { src: SkillsImages.MongoDB, name: "MongoDB" }, { src: SkillsImages.Firebase, name: "Firebase" }].map((icon, index) => (
            <Icon
              key={index}
              src={icon.src}
              alt="Skill Icon"
              onMouseEnter={() => setHoveredIcon2(icon.name)}
              onMouseLeave={() => setHoveredIcon2('')}
            />
        ))}
      </IconsContainer>
      <SkillInput type="text" value={hoveredIcon2 ? `${hoveredIcon2}` : ''} readOnly />

      <Skilltext>{t('skills.cms')}</Skilltext>
      <IconsContainer>
        {[{ src: SkillsImages.Wordpress, name: "Wordpress" }, { src: SkillsImages.Jimdo, name: "Jimdo" }, { src: SkillsImages.Git, name: "Git" }, { src: SkillsImages.Github, name: "GitHub" }, { src: SkillsImages.Figma, name: "Figma" }].map((icon, index) => (
          <Icon
            key={index}
            src={icon.src}
            alt="Skill Icon"
            onMouseEnter={() => setHoveredIcon3(icon.name)}
            onMouseLeave={() => setHoveredIcon3('')}
          />
        ))}
      </IconsContainer>
      <SkillInput type="text" value={hoveredIcon3 ? `${hoveredIcon3}` : ''} readOnly />
    </Skillflex>
</Pageflex>


      <Navflex>
        <NavButton onClick={handleLeft}>◀︎</NavButton>
        <NavButton onClick={handleRight}>▶︎</NavButton>
      </Navflex>
    </Container>
  );
}

export default Skills;
