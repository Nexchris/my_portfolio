import React from 'react';
import styled from 'styled-components';
import 'animate.css';
import Gmail from '../images/gmail.webp';
import Linkedin from '../images/linkedin.png';

const Container = styled.div`
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  width: 100vw;
  text-align: center;
`;

const Title = styled.div`
  color: white;
  margin: 0;
  font-size: 8rem;
  margin-top: 5vh;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

const Text = styled.div`
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: bold;
  font-size:2vw;
`;


const LinkedinBar = styled.div`
background-color: #007BB5;
 font-family: "Unbounded", sans-serif;
color: black;
width:20vw;
height:10vh;
`
const LinkedinIcon = styled.img`
`

const GmailIcon = styled.img`
width:13vw;
`
const Barcontainer = styled.div`
display:flex;
`

function Contact(params) {
    return(
        <>
        <Container>
<Title>Me Contacter</Title>
<Text>Mon Portflio vous interesse ?</Text>
<Text>Contactez moi sur</Text>
<Barcontainer>
<GmailIcon src={Gmail}/>
<LinkedinBar>
<LinkedinIcon src={Linkedin}/>
</LinkedinBar>
</Barcontainer>
</Container>
</>
    );
    
}

export default Contact