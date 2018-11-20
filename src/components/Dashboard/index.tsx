import * as React from "react"
import Notifications from './Notifications'
import ProjectList from '../Projects/ProjectList'
import styled from "../../configs/styled-components"
import { connect } from 'react-redux'

class Dashboard extends React.Component<any, any> {
  render() {
    console.log(this.props)

    const { projects } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard)