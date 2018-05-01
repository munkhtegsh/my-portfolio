import React from "react";
import styled from 'styled-components';
import recipystHome from '../images/app/recipyst.gif';

const Projects = styled.div`
  padding: 1rem;
  border-bottom: 1px solid green;
`;
const Title = styled.h4`
  font-size: 1.2rem;
`;

const Subtitle = styled.h4`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Tools = styled.p`
  font-size: 0.7rem;
`;

const ProjectWrapper = styled.div`

`;

const Description = styled.p`
 
`

const ScreenShot = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  width: 60%;
  height: auto;
  border: 0.9px solid black; 
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
    <Title>Projects that I've worked :)</Title>
    <Project name="Recipyst" 
    tools="React | Redux | Underscore | Material-UI | Sass | Node | Express | Massive | PostgreSQL | Socket.io | S3 | Chart.JS | Auth0 | Edamam API" 
    details="This award-winning tool is powered by Edamam API, which allows users to search from over 200,000 food recipes from top Spanish and American cooking sites and blogs. The purpose of the app is to help people to make a weekly meal plan and keep track of their food nutrient data. Users also be able to create their own recipe and upload the images through S3. They also can save their favorite food in the app inventory, but also can share food recipes with one another through Socket.IO."
    landingPage={recipystHome} />

  </Projects>
);