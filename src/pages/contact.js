import React, {Component} from "react";
import styled from "styled-components";
import SubmitButton from './submitButton';
import axios from 'axios';
import swal from 'sweetalert';
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
  float: right;
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
  console.log(props.value.email);
  return (
    <div>
      <FlexContainer>
        <form style={{width: '100%'}} onSubmit={(e) => props.submit(e)}>
          <Email value={props.value.email} placeholder={props.email} name="email" onChange={(e) => props.handleInput(e, props.email)} />
          <Name value={props.value.name} placeholder={props.name} name="name" onChange={(e) => props.handleInput(e, props.name)} />
          <Text value={props.value.text} placeholder="Your message" name="message" onChange={(e) => props.handleInput(e, props.text)} /> 
          <SubmitButton type="submit" />
        </form>
      </FlexContainer>
     </div>
  ) 
}

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

  submit(e) {
    swal("Your email successfully sent!", "I will get back to you shortly!", "success");
    e.preventDefault()
    axios.post('/contact', this.state);
    this.setState({name: '', email: '', text: ''});
  }

  render() {
    return (
    <ContactContainer>
      <h4 style={{ borderTop: '1px solid green', paddingTop: '2rem', fontSize: '1.2rem'}}> Contact Info:</h4>
      <h4>If you have any questions, please don't hesitate to contact me!</h4>
      <Wrapper
        value={this.state} 
        name="name" 
        email="email"
        text="text" 
        handleInput={(e, name) => this.handleInput(e, name)}
        submit={(e) => this.submit(e)}
      />
    </ContactContainer>
    )
  }
};

export default Contact;

//handleInput={(e, name) => this.handleInput(e, name)}
