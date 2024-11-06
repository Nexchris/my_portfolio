import styled, { keyframes } from 'styled-components';
import 'animate.css';

const zoomOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.5);
    opacity: 0;
  }
`;

const Indexcontainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 99vh;
  width: 100vw;
  top: 1%;
  text-align: center;
  transition: transform 1s, opacity 1s;
  opacity: ${(props) => (props.hideContent ? 0 : 1)};
  visibility: ${(props) => (props.hideContent ? 'hidden' : 'visible')};
  overflow: hidden;

  &.animate {
    animation: ${zoomOut} 0.5s forwards;
  }

    @media (max-width: 500px) {
    position: relative;
    height:100vh;
  }

  @media (min-width:501px) and (max-width: 1200px) {
    position: relative;
    height:85vh;
  }

   @media (min-width:767px) {
    position: relative;
    height:100vh;
  }
`;

const IndexTitle = styled.h1`
  margin: 0;
  font-size: 4rem;
  font-family: "Unbounded", sans-serif;
  color: white;
  width: 55vw;
  animation: animate__bounceIn 2s;


    @media (min-width: 100px ) and (max-width: 400px) { 
    font-size: large;
    width: 90vw;
  }

  @media (min-width: 401px)  and (max-width:600px) { 
    font-size: x-large;
    width: 90vw;
  }

    @media (min-width: 601px) and (max-width:1023px) {
    font-size: medium;
  }

  @media (min-width: 1024px) and (max-width:1600px) {
    font-size: xxx-large;
  }

    @media (min-width:767px) and (max-width: 1200px) {
       font-size: xx-large;
  }
`;

const IndexButton = styled.button`
  animation: animate__fadeIn 2s;
  border-radius: 5vh;
  border: none;
  background-color: ${(props) => (props.isHovered ? 'black' : 'white')};
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem 1rem;
  color: ${(props) => (props.isHovered ? 'white' : 'black')};
  font-family: "Bebas Neue", sans-serif;
  transition: background-color 0.3s, transform 0.2s;
  transform: ${(props) => (props.isHovered ? 'scale(1.2)' : 'scale(1)')};
  outline: none;
  background: transparent;
    border: 1px solid #ddd;
    color: white;
        font-family: "Zen Dots";

  &:hover {
    color: white;
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.95);
  }

   @media (max-width: 499px) {
    font-size: x-large;
  }

    @media (min-width: 500px) and (max-width:1023px) {
    font-size: medium;
  }

   @media (min-width:767px) and (max-width: 1200px) {
                font-size: xx-large;
    }
  

    @media (min-width: 100px) and (max-width: 400px) { 
    font-size: smaller;
  }
`;

const Tip = styled.div`
  animation: animate__fadeIn 5s;
  margin: 0;
  position: absolute;
  top: 80%;
  font-size: 2rem;
  color: white;
  width: 100vw;
  display: ${(props) => (props.isMobile ? 'none' : 'block')}; 
      font-family: "Zen Dots";
`;

const Tipmobile = styled.div`
  animation: animate__fadeIn 5s;
  margin: 0;
  position: absolute;
  top: 80%;
  font-size: 1rem;
  width: 70vw;
  color: white;
  display: ${(props) => (props.isMobile ? 'block' : 'none')}; 
  font-family: "Zen Dots";
  

  @media (max-width: 1600px) {
  display: block;
    position: relative;
    top: 0%;
    margin-top: 5vh;
    margin-bottom: 10vh;

  }
  
      
`;

const Tipimg = styled.img`
   width: 4rem;
    @media (min-width: 500px) and (max-width:1000px) {
    display: none;
  }
    
`

export { Indexcontainer, IndexTitle, IndexButton, Tip, Tipmobile, Tipimg };
