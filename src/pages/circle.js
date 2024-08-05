import React from 'react';
import styled, { keyframes } from 'styled-components';

// Définition des keyframes pour l'animation
const pulseAnimation = (radius) => keyframes`
  0% {
    r: ${radius};
  }
  50% {
    r: ${radius + 250}; /* Valeur maximale spécifique pour chaque cercle */
  }
  100% {
    r: ${radius};
  }
`;

// Styles pour les cercles avec animation
const Circle = styled.circle`
  stroke: gray;
  stroke-width: 2;
  fill: none;
  opacity: 0.7;
  animation: ${props => pulseAnimation(props.radius)} 5s infinite;
`;

const Container = styled.div`
position:fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: white;
`;

const Svg = styled.svg`
  width: 100vw;
  height: 100vh;
`;



function Circles() {
  return (
    <Container>
      <Svg>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <Circle cx="50%" cy="50%" r="50" filter="url(#glow)" radius={50} />
        <Circle cx="50%" cy="50%" r="100" filter="url(#glow)" radius={100} />
        <Circle cx="50%" cy="50%" r="150" filter="url(#glow)" radius={150} />
        <Circle cx="50%" cy="50%" r="200" filter="url(#glow)" radius={200} />
        <Circle cx="50%" cy="50%" r="250" filter="url(#glow)" radius={250} />
      </Svg>
    </Container>
  );
}

export default Circles;
