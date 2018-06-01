import React from "react";
import styled from "styled-components";
// import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'


const Contact = styled.div`
  padding: 1rem;
  padding-top: 2.5remxw

`

export default () => (
  <Contact>
    <h4 style={{ borderTop: '1px solid green', paddingTop: '2rem', fontSize: '1.2rem'}}> Contact Info:</h4>
    <h4>If you have any questions, please don't hesitate to contact me!</h4>
    <p>
      <a href="mailto:munkhtegsh.m@gmail.com">munkhtegsh.m@gmail.com</a>
    </p>
  </Contact>
);
