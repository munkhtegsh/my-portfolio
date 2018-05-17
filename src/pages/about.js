import React from "react";
import styled from 'styled-components';
import { device } from '../utils/device';

const About = styled.div`
  padding: 1rem 1rem 0 1rem;

`
const Greeting = styled.h4`
  font-size: 1.2rem;
`
const Title = styled.h5`
  margin-bottom: 0.7rem;
`
const Content = styled.p`


`
export default () => (
  <About>
    <Greeting> GREETINGS! I am Munkhtegsh Munkhbat. </Greeting>
    <Title> A little bit about me: </Title>
    <Content> I’m originally from Mongolia and moved to SF in 2013 to finish my MBA. 
    However, the city opened my mind to new things and with the motivation of a Netflix TV series called "Person of Interest," I started my coding journey. 
    I decided to focus on creating apps that helps people by solving their everyday problems. </Content>
    <Title> Developer: </Title>
    <Content style={{borderBottom: `1px solid green`, paddingBottom: `2.5rem`}}> 
    I have extensive programming experience and I'm comfortable with front-end and back-end development. 
    As a developer, I'm constantly learning new tools and applying them into my own projects. 
    Coding is my passion, I enjoy solving problems and I love building web and mobile apps. </Content>
  </About>
);  