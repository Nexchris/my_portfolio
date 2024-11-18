import styled, { css } from 'styled-components';
import 'animate.css';

// Animation styles
const animationStyles = css`
  animation: ${props => props.animationName} 1s;
`;

const Container = styled.div`
  animation: fadeIn 2s;
  ${props => props.isFadingOut && animationStyles};
  color: white;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
  text-align: center;
  position: relative;

  @media (min-width: 300px) and (max-width: 1600px) {
    font-size: 1.5rem;
    overflow: scroll;
    height: 80vh;
  }
`;

const CVContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 2rem;
  padding-top: 0;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    padding: 0;
  }

   @media (min-width: 601px) and (max-width:1023px) {
    width: auto;
  }
`;

const IconsContainer = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  width: auto;

  @media (max-width: 499px) {
    display: block;
            width: 55vw;
  }

`;

const Title = styled.div`
  color: white;
  font-size: 4rem;
  font-family: "Bebas Neue", sans-serif;

  @media (max-width: 500px) {
    font-size: xxx-large;
    margin-bottom: 2vh;
  }

    @media (max-width: 399px) {
    font-size: xx-large;
    margin-bottom: 2vh;
  }
`;

const CVImage = styled.img`
  width: 40%;
  height: auto;
  cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  &:hover{
  transform: scale(1.5);
  }
   @media (min-width: 601px) and (max-width:1023px) {
    width: 20%;
  }
`;

const Icon = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 0.5rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }

  @media (max-width: 599px) {
    width: 2rem;
    height: 2rem;
  }

 @media (min-width: 600px) and (max-width:1023px) {
    width: 3rem;
    height: 3rem;
  }


`;

const Navflex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  position: absolute;
  top: 44rem;
  left: 55rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavButton = styled.div`
  cursor: pointer;
  border-radius: 50%;
  font-size: 2rem;
  padding: 1rem;
  color: white;
  margin: 0 1rem;

  &:hover {
    opacity: 0.8;
  }
`;

const Pageflex = styled.div`
  display: flex;

  @media (min-width: 300px) and (max-width: 1200px) {
    display: block;
  }
`;

const Skillflex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Skilltext = styled.h1`
font-family: 'Kanit';
    font-weight: 600;
  font-size: 1.5rem;
      @media (max-width: 499px) {
          font-size: x-large;
          width:20rem;
  }
`;

const SkillInput = styled.input`
  border-radius: 1vw;
  width: 20vw;
  height: 3vh;
  margin: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
font-family: 'Kanit';
    font-weight: 500;

  @media (max-width: 500px) {
    width: -webkit-fill-available;
  }

   @media (min-width: 600px) and (max-width:1023px) {
    height: 10vh;
    width: auto;
  }
`;

const CVShowButton = styled.button`
  border-radius: 50px; /* Bouton arrondi */
  padding: 0.5rem 1.5rem;
  width: auto;
  font-size: 1.5rem;
font-family: 'Kanit';
    font-weight: 500;
  color: black;
  background-color: white; /* Bleu modéré pour le fond */
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: black; /* Bleu foncé au survol */
    color: white;
    transform: scale(1.05); /* Légère mise en relief au survol */
  }

  &:active {
    transform: scale(0.95); /* Effet de clic */
  }

  margin: 1rem;
`;

const CVDownolaodButton = styled(CVShowButton)`
  @media (max-width: 1200px) {
    display: none;
  }
`;

const CVButtonflex = styled.div`
  @media (min-width: 300px) and (max-width: 500px) {
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
  }
`;

export { Container, Title, Pageflex, CVContainer, CVImage, CVButtonflex, CVShowButton, CVDownolaodButton, Skillflex, Skilltext, IconsContainer, Icon, SkillInput, NavButton, Navflex }