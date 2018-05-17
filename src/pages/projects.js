import React from "react";
import styled from 'styled-components';
import recipystHome from '../images/app/recipyst.gif';
import { device } from '../utils/device';

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

  @media (min-width: 350px) {  
    max-width: 100%;
  }

  @media ${device.laptop} {  
    max-width: 60%;
    float: left;
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

  @media (min-width: 400px) {  
    max-width: 100%;
  }

  @media ${device.laptop} {  
    max-width: 35%;
  }
`
const Project = props => (
  <ProjectWrapper>
    <Subtitle> {props.name} </Subtitle>
    <Tools> {props.tools} </Tools>
    <Description> {props.details}</Description>
    <ScreenShot src={props.landingPage} alt="" />
  </ProjectWrapper>
);

export default () => (
  <Projects>
    <Title> Projects that I've worked {String.fromCharCode(58) }{String.fromCharCode(41) } </Title>
    <Project name="RECIPYST" 
    tools="React | Redux | Underscore | Material-UI | Sass | Node | Express | Massive | PostgreSQL | Socket.io | S3 | Chart.JS | Auth0 | Edamam API" 
    details="This award-winning app is powered by Edamam API, which allows users to search from over 200,000 food recipes from top Spanish and American cooking sites and blogs. 
    The purpose of the app is to help people to make a weekly meal plan, keep track of their food nutrition data, as well as providing a grocery plan. 
    If users like the recipes they found, they can save it in the favorite inventory. 
    I used Socket.IO for implementing the chat feature. So users can chat with other users, but also they can share their favorite food with each others. 
    Another one feature is users are able to implement their own recipes and upload the images through S3. Users can watch recipe videos using Youtube API."
    landingPage={recipystHome} /> 
  </Projects>
);