import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard'
import styled from '../src/configs/styled-components'
import Navbar from './components/Layout/Navbar'
import CreateProject from './components/Projects/CreateProject'
import ProjectDetails from './components/Projects/ProjectDetails'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'

class App extends Component {
  
  render() {
    const Container = styled.div`
    height: 100vh;
    background-color: #BAD8EB;
  `;
    return (
      <BrowserRouter>
        <Container>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/createproject' component={CreateProject} />
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
