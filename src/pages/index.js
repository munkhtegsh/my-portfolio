import React from "react";
import styled from "styled-components";
import bgImage from "../images/background.png";
import myImg from '../images/myImg.png';
import { device } from '../utils/device';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import github from '@fortawesome/fontawesome-free-brands/faGithub'
import twitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import facebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import linkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import heart from '@fortawesome/fontawesome-free-solid/faHeart'

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
  width: 8rem;
  height: 8rem;
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
 font-weight: bold;
`

const IconWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 1rem;
  color: #212121
  margin-top: 2rem;
  ;
`
const Anchor = styled.a`
  text-decoration: none;
`

const Icon = styled.a`
  margin: 4rem 0.5rem 0rem 0.5rem;;
`
const Icons = props => (
    <Icon className={props.name} />
)

const Loved = styled.span`
  margin: 1rem;
  font-size: 0.7rem; 
  display: block;

`

export default () => (
  <Container>
    <Box>
      <ProfileImg /> 
      <Name> MUNKHTEGSH MUNKHBAT </Name>
      <Identity> Full-Stack Javascript Developer </Identity>
      <Identity> Design Enthusiast </Identity>
      <Identity> Traveler </Identity>

      <IconWrapper>
          <Icon href="https://www.twitter.com/munkhtegsh"><FontAwesomeIcon icon={twitter} size="lg" /></Icon>
          <Icon href="https://www.github.com/munkhtegsh/" ><FontAwesomeIcon icon={github} size="lg" /></Icon>
          <Icon href="https://www.facebook.com/munkhtegsh.m"><FontAwesomeIcon icon={facebook}  size="lg"/></Icon>
          <Icon href="https://www.linkedin.com/in/munkhtegsh/"><FontAwesomeIcon icon={linkedin} size="lg" /></Icon>
      </IconWrapper>
      <Loved> Crafted with &#9829;
        using <a href="https://www.gatsbyjs.org" >GatsbyJS </a>
      </Loved>

    </Box>
  </Container>
);


// <FontAwesome
// className="super-crazy-colors"
// name="rocket"
// size="2x"
// spin
// style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
// />




// <a >
// <Icon href="https://www.twitter.com/munkhtegsh"><FontAwesomeIcon icon={twitter} size="lg" /></Icon>
// </a>

// <a  href="https://www.github.com/munkhtegsh/" >
// <Icon><FontAwesomeIcon icon={github} size="lg" /></Icon>
// </a>


// <a href="https://www.facebook.com/munkhtegsh.m">
// <Icon><FontAwesomeIcon icon={facebook}  size="lg"/></Icon>
// </a>

// <a href="https://www.linkedin.com/in/munkhtegsh/">
// <Icon><FontAwesomeIcon icon={linkedin} size="lg" /></Icon>
// </a>