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

      @media (min-width: 601px) and (max-width:1600px) {
      height: 90vh;
  }
         
`


const Title = styled.h1`
  font-size: 5rem;
  margin-top: 5vh;
  margin-bottom: 0;
  font-family: "Bebas Neue", sans-serif;
  color: white;
  font-weight:400;


  @media (min-width: 601px) and (max-width:1600px) {
    font-size: xxx-large;
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
   @media (min-width: 299px) and (max-width: 600px) {
      margin-top: 0rem;
  }
       @media (min-width: 601px) and (max-width:1600px) {
    margin-top: 1rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
 font-family: "Kanit";
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

   @media (min-width: 601px) and (max-width:1600px){
       width: -webkit-fill-available;
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
 font-family: "Kanit";
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

  @media (min-width: 601px) and (max-width:1299px) {
    height: 20rem;
  }
`;

const SubmitButton = styled.button`
  width: 50%;
  padding: 12px;
  margin-top: 20px;
   outline: none;
  background: transparent;
    border: 1px solid #ddd;
  font-family: "Kanit";
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
 font-family: "Kanit";
  color: ${props => (props.success ? 'white' : 'red')};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactOptions = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;

  @media (min-width: 299px) and (max-width: 400px) {
    gap: 10px;
        margin: 0;
  }

   @media (min-width: 401px) and (max-width:600px) {
    gap: 0;
  }

     @media (min-width: 601px) and (max-width:1600px) {
    gap: 0;
    margin-top: 1rem;
    margin-bottom: 2rem;
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
         @media (min-width: 299px) and (max-width: 400px){
           width: 3rem;
        height: 3rem;
         }

  @media (min-width: 601px) and (max-width:1600px){
   width: 50%;
  height: 50%;
  }

`;
;

export {Container, Title, Form, Input, Textarea, SubmitButton, StatusMessage, ContactOptions, ContactButton, Icon}