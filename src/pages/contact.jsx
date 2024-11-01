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

const Title = styled.h1`
  font-size: 5rem;
  margin-top: 5vh;
  margin-bottom: 0;
  font-family: "Bebas Neue", sans-serif;
  color: white;
  font-weight:400;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 500px;
  margin-top: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  font-family: "Unbounded", sans-serif;
  outline: none;
  background: transparent;
  color: white;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0073b1;
  }

  &::placeholder {
    color: #aaa;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.9rem;
    width: fit-content;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
  outline: none;
  background: transparent;
  color: white;
  font-family: "Unbounded", sans-serif;
  transition: border-color 0.3s;
  

  &:focus {
    border-color: #0073b1;
  }

  &::placeholder {
    color: #aaa;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    width: fit-content;
    padding: 1rem;

  }
`;

const SubmitButton = styled.button`
  width: 50%;
  padding: 12px;
  margin-top: 20px;
   outline: none;
  background: transparent;
  font-family: "Unbounded", sans-serif;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
    border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
transition: transform 0.3s ease;
   &:hover {
    color: white;
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 1rem;
  }
`;

const StatusMessage = styled.div`
  margin-top: 2rem;
  font-size: 1.2rem;
  font-family: "Unbounded", sans-serif;
  color: ${props => (props.success ? 'white' : 'red')};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactOptions = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.bgColor || '#0073b1'};
  color: #fff;
  text-decoration: none;
  overflow: hidden;
  transition: transform 0.3s ease;
   transform: scale(1.2);

  &:hover {
    transform: scale(1.8);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

const Icon = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
`;

function Contact() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLeft = useCallback(() => {
    setIsFadingOut(true);
    setTimeout(() => navigate('/project'), 1000);
  }, [navigate]);

  const handleRight = useCallback(() => {
    setIsFadingOut(true);
    setTimeout(() => navigate('/'), 1000);
  }, [navigate]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') handleLeft();
      else if (event.key === 'ArrowRight') handleRight();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleLeft, handleRight]);

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
        <ContactButton href="tel:+1234567890" target="_blank" bgColor="0A66C2" title="Téléphone">
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
