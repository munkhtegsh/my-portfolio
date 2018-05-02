import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';
import { device } from '../utils/device';
import HomePage from '../pages/index';
import About from '../pages/about';
import Skills from '../pages/skills';
import Projects from '../pages/projects';
import Contact from '../pages/contact';

const Home = styled.div`
  margin: 0 auto; 
  maxWidth: 100%; 
  minWidth: 30%; 
  backgroundColor: #fafafa;
  float: left;
`

const Header = styled.div`
  flexWrap: wrap;
  position: fixed;
  right: 0;
  width: 60%;
  background: white;
  ;
  
  @media (max-width: 65em) {  
    background-color: red;
    display: none;
    max-width: 100%;
    float: left;
    padding-right: 3rem;
  }
`;

const RightSide = styled.div`
  @media ${device.laptop} {  
    max-width: 60%;
    float: right;
    padding: 3rem;
    margin-bottom: 1px;
    overflow-y: scroll;
    height: 100vh 
  }
`

export default ({ children }) =>
<Home>
  <Header >
  {/*
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{ display: `inline` }}>SCOTT</h3>
    </Link>
    <ul style={{ listStyle: `none`,  marginBottom: `0`, float: 'right'}}>
      <Link to="/" style={{ display: `inline-block`, marginRight: `1rem` }}>HOME</Link>
      <Link to="/about/" style={{ display: `inline-block`, marginRight: `1rem` }}>ABOUT</Link>
      <Link to="/skills/" style={{ display: `inline-block`, marginRight: `1rem` }}>SKILLS</Link>
      <Link to="/projects" style={{ display: `inline-block`, marginRight: `1rem` }}>PROJECTS</Link>
      <Link to="/contact/" style={{ display: `inline-block`, marginRight: `1rem` }}>CONTACT</Link>
    </ul>
      */}

  </Header>
  {/* {children()} */}
  <HomePage />
  <RightSide>
    <About />
    <Skills />
    <Projects />
    <Contact />
  </RightSide>
</Home>





// <Navbar>
// <NavItem eventKey={1} href="#">
//   Link
// </NavItem>
// </Navbar>



// import Navbar  from 'react-bootstrap/lib/Navbar';
// import NavItem  from 'react-bootstrap/lib/NavItem';


// import ButtonToolbar  from 'react-bootstrap/lib/Button';
// import Button  from 'react-bootstrap/lib/Button';

// import 'bootstrap/less/bootstrap.less'
// import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
// import { Alert } from 'reactstrap';

// const ListLink = props =>
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>
//       {props.children}
//     </Link>
//   </li>

// -> "@media (min-width: ${size.laptop})" -> "@media (min-width: 1024px)"