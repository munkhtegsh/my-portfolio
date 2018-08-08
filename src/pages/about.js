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
    <Content> Munkhtegsh Munkhbat is a multi-disciplinary technologist and Product Manager living in San Francisco, California. 
    I currently work as a freelancer and bring value to the projects by building, testing and deploying scalable, software products and UI features. 
    My passion is creating apps that helps people by solving their everyday problems. </Content>
    <Title> Experience: </Title>
    <Content style={{borderBottom: `1px solid green`, paddingBottom: `2.5rem`}}> 
    I have more than 5 years of Product Manager experience in abroad, plus extensive Full-Stack programming experience in development. 
    As a developer, I'm constantly learning new tools and applying them into my own projects. 
    Coding is my passion, I enjoy solving problems and I love building web and mobile apps. </Content>
  </About>
); 