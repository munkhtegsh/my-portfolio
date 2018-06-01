import React from "react";
import styled from 'styled-components';
import recipystHome from '../images/app/recipyst.gif';
import { device } from '../utils/device';
import Iframe from 'react-iframe';

const Projects = styled.div`
  padding: 1rem;
`;
const Title = styled.h4`
  border-top: 1px solid green;
  padding-top: 2.5rem;
  font-size: 1.2rem;
`;

const Subtitle = styled.h4`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Tools = styled.p`
  font-size: 1rem;
`;

const ProjectWrapper = styled.div`

`;

const Description = styled.p`
  max-width: 60%;
  margin-bottom: 1rem;
  @media (min-width: 350px) {  
    max-width: 100%;
  }

  @media ${device.laptop} {  
    display: inline-block;
    max-width: 60%;
    margin: 0;
    padding: 0;
  }
`

const Description2 = styled.p`
  max-width: 60%;
  @media (min-width: 350px) {  
    max-width: 100%;
  }

  @media ${device.laptop} {  
    display: inline-block;
    max-width: 100%;
    margin: 0;
    padding: 0;
  }
`

const ScreenShot = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 60%;
  height: auto;
  border: 0.9px solid black; 
  margin-top: 40px;

  @media (min-width: 350px) {  
    max-width: 100%;
  }

  @media ${device.laptop} {  
    display: absolute;
    max-width: 35%;
    margin: 0;
    padding: 0;
    float: right;
  }
`

const MainContainer = styled.div`
  display: relative;
`

const Line = styled.div`
  width: 100%;
  border-bottom: 1px dotted black;
  margin-top: 0.1rem;
`

const Project = props => (
  <ProjectWrapper>
    <Subtitle> {props.name} </Subtitle>
    <Tools> {props.tools} </Tools>
    <MainContainer>
      <Description> {props.details}</Description>
      <ScreenShot src={props.landingPage} alt="" />
    </MainContainer>
  </ProjectWrapper>
);

const GroupProject = props => (
  <ProjectWrapper>
    <Subtitle> {props.name} </Subtitle>
    <Tools> {props.tools} </Tools>
    <MainContainer>
      <Description2> {props.details}</Description2>
      <iframe width="100%" height="350" src="https://www.youtube.com/embed/IyicOAG-leE" 
      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
      </iframe>
    </MainContainer>
  </ProjectWrapper>
);

export default () => (
  <Projects>
    <Title> My Projects </Title>
    <GroupProject name="VShoppify" 
    tools="React | Redux | ES6 | Aframe | Watson-Conversation | Twilio | Parallax | Material-UI | Styled-Component | Node | Express | Massive | PostgreSQL | Socket.io | Auth0 | Nodemailer" 
    details="I really wanted to change the online shopping and came with the idea that brings Virtual Reality feeling for the users. I introduced my idea to my colleagues, they decided to create this awesome website with me. 
    I successfully lead my team and managed their everyday tasks. The purpose of our website is to bring a Virtual Reality feeling to our clients when they are shopping online. 
    Our chatbot Goo will handle their inquiries about clothes suggestion and delivery informations. The clients can also contact with her through SMS (415-980-5012)"
    >

    </GroupProject>

    <Line />

    <Project name="Recipyst" 
    tools="React | Redux | Underscore | Material-UI | Sass | Node | Express | Massive | PostgreSQL | Socket.io | S3 | Chart.JS | Auth0 | Edamam API" 
    details="This award-winning app is powered by Edamam API, which allows users to search from over 200,000 food recipes from top Spanish and American cooking sites and blogs. 
    The purpose of the app is to help people to make a weekly meal plan, keep track of their food nutrition data, as well as providing a grocery plan. 
    If users like the recipes they found, they can save it in the favorite inventory. 
    I used Socket.IO for implementing the chat feature. So users can chat with other users, but also they can share their favorite food with each others. 
    Another one feature is users are able to implement their own recipes and upload the images through S3. Users can watch recipe videos using Youtube API."
    landingPage={recipystHome} /> 
  </Projects>
);

// <Title> Projects that I've worked {String.fromCharCode(58) }{String.fromCharCode(41) } </Title>
