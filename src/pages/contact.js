import React, {Component} from "react";
import styled from "styled-components";
import SubmitButton from './submitButton';
import axios from 'axios';
// import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'


const ContactContainer = styled.div`
  padding: 1rem;
  padding-top: 2.5rem
`
const Name = styled.input`
  padding: 0.5em;
  width: 47%;
  outline: none;
`;

const Email= styled.input`
  padding: 0.5em;
  width: 47%;
  outline: none
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
`
const Text = styled.textarea`
  width: 100%;
  height: 10rem;
  margin-top: 1rem;
  outline: none;
  padding: 0.5rem;
  font-size: 0.8rem;
  border: #E0E0E0
  1px solid
`
const Wrapper = (props) => {
  return (
    <div>
      <FlexContainer>  
        <Name type="text" placeholder={props.name} name="name" onChange={(e) => props.handleInput(e, props.name)} /> 
        <Email type="text" placeholder={props.email} name="email" onChange={(e) => props.handleInput(e, props.email)} />
      </FlexContainer>
      <Text name="text" onChange={(e) => props.handleInput(e, props.text)} />       
      <SubmitButton onClick={() => props.submit()}/>
    </div>
  ) 
}

const Submit = styled.button`
  width: 15%;
  margin-top: 0.5rem;
  outline: none;
`

class Contact extends Component {
  constructor() {
    super();
    this.state = {
        name: '',
        email: '',
        text: ''
    }
  }

  handleInput(e, name) {
    this.setState({
      [name]: e.target.value
    })
  }

  submit() {
    axios.post('/contact', this.state);
  }
  render() {
    return (
    <ContactContainer>
      <h4 style={{ borderTop: '1px solid green', paddingTop: '2rem', fontSize: '1.2rem'}}> Contact Info:</h4>
      <h4>If you have any questions, please don't hesitate to contact me!</h4>
      <Wrapper 
        name="name" 
        email="email"
        text="text" 
        handleInput={(e, name) => this.handleInput(e, name)}
        submit={() => this.submit()}
      />
    </ContactContainer>
    )
  }
};

export default Contact;

//handleInput={(e, name) => this.handleInput(e, name)}
