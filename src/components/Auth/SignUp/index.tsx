import * as React from "react";
import styled from "../../../configs/styled-components";

interface SignUpProps {
  email: string;
  password: string;
}

interface SignUpState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

class SignUp extends React.Component<any, any> {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  handleChange = (e: any): void => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const SignUpForm = styled.div`
      margin-top: 60px;
      > form {
        padding: 20px;
        border-radius: 10px;
      }
      > form
        > div
        > input[type="text"]:not(.browser-default):focus:not([read-only]) {
        border-bottom: 1px solid #ec407a;
        box-shadow: 0 1px 0 0 #ec407a;
      }
      > form
        > div
        > input[type="email"]:not(.browser-default):focus:not([read-only]) {
        border-bottom: 1px solid #ec407a;
        box-shadow: 0 1px 0 0 #ec407a;
      }
      > form
        > div
        > input[type="password"]:not(.browser-default):focus:not([read-only]) {
        border-bottom: 1px solid #ec407a;
        box-shadow: 0 1px 0 0 #ec407a;
      }
    `;
    return (
      <SignUpForm className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input onChange={this.handleChange} type="text" id="firstName" />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input onChange={this.handleChange} type="text" id="lastName" />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange} type="email" id="email" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} type="password" id="password" />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </SignUpForm>
    );
  }
}

export default SignUp;
