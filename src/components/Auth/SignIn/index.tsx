import * as React from "react";
import styled from "../../../configs/styled-components";

interface SignInProps {
  email: string;
  password: string;
}

interface SignInState {
  email: string;
  password: string;
}

class SignIn extends React.Component<any, any> {
  state = {
    email: "",
    password: ""
  };
  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const SignInForm = styled.div`
      margin-top: 60px;
      > form {
        padding: 20px;
        border-radius: 10px;
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
      <SignInForm className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange} type="email" id="email" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} type="password" id="password" />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Log In</button>
          </div>
        </form>
      </SignInForm>
    );
  }
}

export default SignIn;
