import React, { useState, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import { useTranslation } from 'react-i18next'; 
import emailjs from 'emailjs-com';
import Linkedinlogo from '../images/linkedin.png';
import BeatLoader from 'react-spinners/BeatLoader';

const animationStyles = css`
  animation: ${props => props.animationName} 1s;
`;

const Container = styled.div`
  animation: fadeIn 2s;
  ${props => props.isFadingOut && animationStyles};
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.div`
  color: white;
  margin: 0;
  font-size: 5rem;
  margin-top: 5vh;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

const Text = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  padding-top: 1vh;
  font-size: 2vw;
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

const Button = styled.a`
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.5vw;
  color: white;
  background-color: #0073b1;
  padding: 10px 20px;
  margin: 5px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 155, 171, 0.8);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 500px;
  margin-top: 2rem;
`;

const Input = styled.input`
  font-family: "Unbounded", sans-serif;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  font-family: "Unbounded", sans-serif;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
  resize: none;
`;

const SubmitButton = styled.button`
  font-family: "Unbounded", sans-serif;
  font-weight: bold;
  font-size: 1.5vw;
  color: white;
  background-color: black;
  padding: 10px 100px;
  margin-top: 20px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
    background-color: white;
    color: black;
  }
`;

const Image = styled.img`
  width: 50%;
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

const Navflex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Sendmessage = styled.div`
  position: absolute;
  animation: fadeIn 1s;
  top: 25%;
  font-family: "Unbounded", sans-serif;
  font-size: 4rem;
`;

const SuccessMessage = styled.div`
  position: absolute;
  top: 25%;
  font-family: "Unbounded", sans-serif;
  font-size: 4rem;
`;

const SuccessButton = styled(SubmitButton)`
  background-color: white;
  color: black;
  margin-top: 20px;
`;

function Contact() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [animationName, setAnimationName] = useState('fadeIn');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleLeft = useCallback(() => {
    setAnimationName('fadeOut');
    setIsFadingOut(true);
    setTimeout(() => {
      navigate('/project');
    }, 1000); // Attendre la fin de l'animation (1s)
  }, [navigate]);

  const handleRight = useCallback(() => {
    setAnimationName('backOutLeft');
    setIsFadingOut(true);
    setTimeout(() => {
      navigate('/');
    }, 1000); // Attendre la fin de l'animation (1s)
  }, [navigate]);

  const handleSpace = useCallback((event) => {
    if (event.key === ' ' || event.key === 'Space') {
      handleRight();
    }
  }, [handleRight]);
  
  window.addEventListener('keydown', handleSpace);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handleLeft();
      } else if (event.key === 'ArrowRight') {
        handleRight();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Nettoyage de l'écouteur d'événements
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleLeft, handleRight]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsSent(false);

    emailjs.sendForm(
      'service_3jb5bxd', 
      'template_9pqmfdc',
      e.target,
      '-GY0uB4wYt1pgYCrm'
    ).then(
      (result) => {
        console.log(result.text);
        setIsSending(false);
        setIsSent(true);
      },
      (error) => {
        console.log(error.text);
        setIsSending(false);
      }
    );
  };

  const handleReturnToForm = () => {
    setIsSent(false);
  };

  return (
    <Container isFadingOut={isFadingOut} animationName={animationName}>
      <Title>{t('contact.title')}</Title>
      
      {!isSending && !isSent && (
        <Form onSubmit={sendEmail}>
          <Input type="text" placeholder={t('contact.name')} name="from_name" required />
          <Input type="email" placeholder={t('contact.email')} name="from_email" required />
          <Textarea placeholder={t('contact.message')} name="message" required rows="5" />
          <SubmitButton type="submit">{t('contact.submit')}</SubmitButton>
          <Text>{t('contact.text')}</Text>
          <Button href="https://www.linkedin.com/in/benjamin-hinfray-272278208" target="_blank" rel="noopener noreferrer">
            <Image src={Linkedinlogo} alt="LinkedIn" />
          </Button>
        </Form>
      )}
  
      {isSending && (
        <Sendmessage>
          <BeatLoader color="#ffffff" size={85} />
          <p>Message en cours d'envoi...</p>
        </Sendmessage>
      )}
  
      {isSent && (
        <SuccessMessage>
          <p>Le message a été bien envoyé.</p>
          <SuccessButton onClick={handleReturnToForm}>Retour</SuccessButton>
        </SuccessMessage>
      )}
  
      {!isSending && !isSent && (
        <Navflex>
          <NavButton onClick={handleLeft}>&larr;</NavButton>
          <NavButton onClick={handleRight}>&rarr;</NavButton>
        </Navflex>
      )}
    </Container>
  );
}

export default Contact;
