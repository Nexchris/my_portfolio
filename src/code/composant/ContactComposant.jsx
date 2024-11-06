import styled, { keyframes } from 'styled-components';
import 'animate.css';

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
         
`


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
    border: 1px solid #ddd;
  font-family: "Unbounded", sans-serif;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
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
        margin-top: 2rem;
  }
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
    width: 10rem;
    height: 10rem;
  border-radius: 50%;
  background-color: ${props => props.bgColor || '#0073b1'};
  color: #fff;
  text-decoration: none;
  overflow: hidden;
  transition: transform 0.3s ease;
   transform: scale(0.8);

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
            width: 5rem;
        height: 5rem;
  }
`;

const Icon = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
   @media (max-width: 768px) {
            width: 4rem;
        height: 4rem;

  }

`;
;

export {Container, Title, Form, Input, Textarea, SubmitButton, StatusMessage, ContactOptions, ContactButton, Icon}