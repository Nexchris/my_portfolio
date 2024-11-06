import styled, { keyframes } from 'styled-components';
import 'animate.css';

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
  @media (max-width: 1600px) {
    margin-top: 1.5vh;
  }
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
    overflow-x:hidden;
    height:auto;
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
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
     @media (min-width: 601px) and (max-width:1600px) {
    margin-bottom: 0;
  }

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
     @media (min-width: 300px ) and (max-width: 1200px) { 
      margin-bottom: 0;
  }
`;

const Content = styled.div`
  font-size: 4rem;
  font-weight: 300;


   @media (min-width: 200px ) and (max-width: 600px) { 
    font-size: x-large;
  }

   @media (min-width: 601px) and (max-width:1600px) {
    font-size: x-large;
  }

`;

const Content2 = styled.div`
  font-size: 2.1rem;
  font-weight: 300;

   @media (min-width: 100px ) and (max-width: 600px) { 
    font-size: x-large;
  }

   @media (min-width: 601px) and (max-width:1600px) {
    font-size: medium;
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
    font-size: 3rem;
    margin-top: 5vh;
    margin-bottom: 2vh;
  }

  @media (min-width: 400px) and (max-width:600px) {
    font-size: xxx-large;
  }

 @media (min-width: 601px) and (max-width:1023px) {
    font-size: x-large;
  }

`;

const Title2 = styled(Title)`
  font-size: 6rem;
  margin-bottom: 5vh;

    @media (max-width: 399px) {
    font-size: 3rem;
    margin-top: 5vh;
    margin-bottom: 2vh;
  }

  @media (min-width: 400px) and (max-width:600px) {
    font-size: xxx-large;
  }

     @media (min-width: 601px) and (max-width:1600px) {
    font-size: x-large;
  }
`;


export { MainContainer, ScrollContainer, ScrollableContainer, ScrollButton, ContentContainer, Storytelling, Title, Content, StorytellingList2, Title2, StorytellingList, Content2, Button, Navflex, NavButton}