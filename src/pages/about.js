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
    <Greeting> GREETINGS! I am MUNKHTEGSH MUNKHBAT. </Greeting>

    <Title> A little bit about me: </Title>
    <Content> I’m originally from Mongolia and moved to SF in 2013 to finish my MBA. However,  the city changed my mind, specially after I watched Person of Interest TV series on Netflix, I decided to create an app that helps people and solves their problems. </Content>
    <Title> Developer: </Title>
    <Content style={{  borderBottom: `1px solid green`, paddingBottom: `2.5rem`}}> I have extensive programming experience and I'm comfortable with developing frontend and backend. As an developer I constantly learning new technologies quick and apply them into my own projects. I love coding, solving problems and enjoy building web and mobile apps. </Content>
    
  </About>
);  