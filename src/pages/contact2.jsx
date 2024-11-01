import React, { useState, useCallback, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import BeatLoader from 'react-spinners/BeatLoader';
import Linkedinlogo from '../images/linkedin.png';
import Mail from '../images/mail.png';
import Call from '../images/call.png';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const Container = styled.div`
  animation: ${props => (props.isFadingOut ? fadeOut : fadeIn)} 1s;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  text-align: center;
  overflow: auto;

   @media (max-width: 768px) {
    padding: 15px;
            padding-left: 0px;
  }
`;

// Reste des composants styled identiques ...

function Contact() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Position initiale du touch
  const [startX, setStartX] = useState(0);

  const handleLeft = useCallback(() => {
    setIsFadingOut(true);
    setTimeout(() => navigate('/project'), 1000);
  }, [navigate]);

  const handleRight = useCallback(() => {
    setIsFadingOut(true);
    setTimeout(() => navigate('/'), 1000);
  }, [navigate]);

  // Détecter le swipe en ajoutant des écouteurs de mouvements
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;

    // Seuil pour distinguer un swipe horizontal significatif
    const threshold = 50;

    if (deltaX > threshold) {
      handleRight();
    } else if (deltaX < -threshold) {
      handleLeft();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') handleLeft();
      else if (event.key === 'ArrowRight') handleRight();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleLeft, handleRight]);

  useEffect(() => {
    // Ajouter les écouteurs pour le swipe
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [startX, handleLeft, handleRight]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('');
    setIsSuccess(false);

    emailjs.sendForm('service_3jb5bxd', 'template_9pqmfdc', e.target, '-GY0uB4wYt1pgYCrm')
      .then(
        () => {
          setIsSending(false);
          setStatusMessage('Message envoyé avec succès !');
          setIsSuccess(true);
        },
        () => {
          setIsSending(false);
          setStatusMessage('Erreur lors de l’envoi. Veuillez réessayer.');
          setIsSuccess(false);
        }
      );
  };

  return (
    <Container isFadingOut={isFadingOut}>
      <Title>{t('contact.title')}</Title>
      <Form onSubmit={sendEmail}>
        <Input type="text" placeholder={t('contact.name')} name="from_name" required />
        <Input type="email" placeholder={t('contact.email')} name="from_email" required />
        <Textarea placeholder={t('contact.message')} name="message" required rows="5" />
        <SubmitButton type="submit" disabled={isSending}>
          {isSending ? <BeatLoader color="#ffffff" size={10} /> : t('contact.submit')}
        </SubmitButton>
      </Form>
      {statusMessage && <StatusMessage success={isSuccess}>{statusMessage}</StatusMessage>}
      <ContactOptions>
        <ContactButton href="tel:0766694351" target="_blank" bgColor="0A66C2" title="Téléphone">
          <Icon src={Call} alt="Téléphone" />
        </ContactButton>
        <ContactButton href="mailto:ngabalachris@gmail.com" bgColor="0A66C2" target="_blank" title="Mail">
          <Icon src={Mail} alt="Email" />
        </ContactButton>
        <ContactButton href="https://www.linkedin.com/in/chris-ngabala-347b48252/" bgColor="0A66C2" target="_blank" title="LinkedIn">
          <Icon src={Linkedinlogo} alt="LinkedIn" />
        </ContactButton>
      </ContactOptions>
    </Container>
  );
}

export default Contact;
