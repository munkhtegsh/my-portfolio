import React from "react";
import styled from "styled-components";
import bgImage from "../images/background.png";
import myImg from '../images/myImg.png';
import FontAwesome from 'react-fontawesome'
import { device } from '../utils/device';
// import faStyles from 'font-awesome/css/font-awesome.css'

const Container = styled.div`
  width: 100%;
  text-align: center;
  height: 100vh;
  background: url(${bgImage}) bottom center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;


  @media ${device.laptop} {  
    max-width: 40%;
    margin: 0;
    float: left;
    border: 3px solid #73AD21;
  }
`;

const Box = styled.div`
  width: 100%;
`

const ProfileImg = styled.div`
  margin: 0 auto;
  width: 6rem;
  height: 6rem;
  background-color: white;
  border-radius: 50%;
  background: url(${myImg});
  background-size: cover;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

`
const Name = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1.2rem;
  color: #E0E0E0


  ;
`
const Identity = styled.p`
 color: black;
 font-size: 1.1rem;
 margin-bottom: 0.5rem;
 color: #212121;
`

const IconWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: center;
  color: black;
  font-size: 1rem;
  color: #212121
  ;
`

const Anchor = styled.a`
  text-decoration: none;
`

const Icon = styled.i`
  margin: 4rem 0.5rem 0rem 0.5rem;;
`
const Icons = props => (
    <Icon className={props.name} />
)

export default () => (
  <Container>
    <Box>
      <ProfileImg /> 
      <Name> MUNKHTEGSH MUNKHBAT </Name>
      <Identity> Full Stack Javascript Developert </Identity>
      <Identity> Design Enthusiast </Identity>
      <Identity> Traveler </Identity>
        
      <IconWrapper>
         <a  href="https://www.github.com/munkhtegsh/" >
          <Icons name="fab fa-github fa-lg" />
         </a>

         <a href="https://www.twitter.com/munkhtegsh">
          <Icons name="fab fa-twitter fa-lg" />
         </a>

         <a href="https://www.facebook.com/munkhtegsh.m">
           <Icons name="fab fa-facebook fa-lg" />
         </a>

         <a href="https://www.linkedin.com/in/munkhtegsh/">
          <Icons name="fab fa-linkedin fa-lg" />
         </a>

      </IconWrapper>
    </Box>
  </Container>
);