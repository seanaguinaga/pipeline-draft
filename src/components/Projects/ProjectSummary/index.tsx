import * as React from 'react'
import styled from '../../../configs/styled-components'

const ProjectSummary = ({project}: any) => {
    const Project = styled.div`
    > div {
        border-radius: 10px
    }
    `;
    return (
        <Project className="project list section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by Sean Aguinaga</p>
                    <p className="grey-text">September 4th, 2am</p>
                </div>
            </div>
        </Project>
    )
}

export default ProjectSummary