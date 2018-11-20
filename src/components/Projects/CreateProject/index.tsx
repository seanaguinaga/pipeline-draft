import * as React from "react";
import styled from "../../../configs/styled-components";

interface CreateProjectProps {
  title: string;
  content: string;
}

interface CreateProjectState {
  title: string;
  content: string;
}

class CreateProject extends React.Component<any, any> {
  state = {
    title: "",
    content: ""
  };
  handleChange = (e: any) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.content
    });
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const CreateProjectForm = styled.div`
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
      > form > div > textarea.materialize-textarea:focus {
        border-bottom: 1px solid #ec407a;
        box-shadow: 0 1px 0 0 #ec407a;
      }
    `;
    return (
      <CreateProjectForm className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input onChange={this.handleChange} type="text" id="title" />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              onChange={this.handleChange}
              id="content"
              className="materialize-textarea"
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </CreateProjectForm>
    );
  }
}

export default CreateProject;
