import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import BeatLoader from 'react-spinners/BeatLoader';
import Mail from '../images/contact/mail.png';
import Linkedinlogo from '../images/contact/linkedin.png';
import Call from '../images/contact/call.png';
import Git from "../images/contact/github.png";
import {Container, Title, Form, Input, Textarea, SubmitButton, StatusMessage, ContactOptions, ContactButton, Icon} from '../code/composant/ContactComposant'

// Reste des composants styled identiques ...


function Contact() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleLeft = useCallback(() => {
    setIsFadingOut(true);
    setTimeout(() => navigate('/project'), 1000);
  }, [navigate]);

  const handleRight = useCallback(() => {
    setIsFadingOut(true);
    setTimeout(() => navigate('/'), 1000);
  }, [navigate]);

  // Mémoriser handleTouchStart avec useCallback
  const handleTouchStart = useCallback((e) => {
    setStartX(e.touches[0].clientX);
  }, []);  // handleTouchStart ne dépend de rien d'autre

  // handleTouchEnd avec useCallback
  const handleTouchEnd = useCallback(
    (e) => {
      const endX = e.changedTouches[0].clientX;
      const deltaX = endX - startX;
      const threshold = 200;

      if (deltaX > threshold) {
        handleRight();
      } else if (deltaX < -threshold) {
        handleLeft();
      }
    },
    [startX, handleLeft, handleRight]  // Les dépendances incluent startX, handleLeft, et handleRight
  );

  // Gestion des événements au clavier (flèches gauche/droite)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') handleLeft();
      else if (event.key === 'ArrowRight') handleRight();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleLeft, handleRight]);

  // Gestion des événements tactiles (swipe gauche/droite)
  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchEnd]);  // Assurez-vous d'inclure handleTouchStart et handleTouchEnd

  // Fonction pour envoyer un e-mail
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('');
    setIsSuccess(false);

    emailjs
      .sendForm('service_3jb5bxd', 'template_9pqmfdc', e.target, '-GY0uB4wYt1pgYCrm')
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
        <ContactButton href="https://github.com/Nexchris?tab=repositories" bgColor="0A66C2" target="_blank" title="LinkedIn">
          <Icon src={Git} alt="Github" />
        </ContactButton>
      </ContactOptions>
    </Container>
  );
}

export default Contact;
