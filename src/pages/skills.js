import React from "react";
import styled from 'styled-components';
import javascript from '../images/icons/javascript.svg';
import react from '../images/icons/react.svg';
import redux from '../images/icons/redux.svg';
import node from '../images/icons/node.png';
import express from '../images/icons/express.png';
import socket from '../images/icons/socket.svg';
import jest from '../images/icons/jest.svg';
import restful from '../images/icons/restful.svg';
import postgresql from '../images/icons/postgresql.svg';
import massive from '../images/icons/database.png';
import mocha from '../images/icons/mocha.svg';
import chai from '../images/icons/chai.png';
import auth0 from '../images/icons/badge.png';
import git from '../images/icons/git.svg';
import html5 from '../images/icons/html5.svg';
import css3 from '../images/icons/css3-color.svg';
import sass from '../images/icons/sass.png';
import material from '../images/icons/material-ui.svg';
import vue from '../images/icons/vue.png';
import gatsby from '../images/icons/gatsby.png';



const Skills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;

`;

const IconWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0.5rem;
  
`
const Icon = styled.img`
  width: 4rem;
  height: 4rem;
  margin: 0;
`
const Name = styled.p`
  margin: 0;
`

const Icons = props => (
  <IconWrapper>
    <Icon src={props.icon} alt="" />
    <Name> {props.name} </Name>
  </IconWrapper>
)

export default () => (
  <div>
    <Skills >
       <h4 style={{width: '100%', fontSize: '1.2rem'}}> MY SKILLS </h4>
      <Icons icon={javascript} name="javascript"/>
      <Icons icon={react} name="react"/>
      
      <Icons icon={vue} name="vue"/>
      <Icons icon={gatsby} name="gatsby"/>
 
      <Icons icon={redux} name="redux"/>
      <Icons icon={node} name="node"/>
      <Icons icon={express} name="express"/>
      <Icons icon={massive} name="massive"/>
      <Icons icon={auth0} name="auth0"/>
      <Icons icon={postgresql} name="postgres"/>
      <Icons icon={socket} name="socket.io"/>
      <Icons icon={jest} name="jest"/>
      <Icons icon={chai} name="chai"/>
      <Icons icon={mocha} name="mocha"/>
      <Icons icon={restful} name="restful"/>
      <Icons icon={git} name="git"/>
      <Icons icon={html5} name="html5"/>
      <Icons icon={css3} name="css3"/>
      <Icons icon={sass} name="sass"/>


      <Icons icon={material} name="material" />
    </Skills>
  </div>  
);
