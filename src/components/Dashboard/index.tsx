import * as React from "react";
import Notifications from './Notifications';
import ProjectList from '../Projects/ProjectList'
import styled from "../../configs/styled-components";

class Dashboard extends React.Component<any, any> {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard