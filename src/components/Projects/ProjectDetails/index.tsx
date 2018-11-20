import * as React from 'react'
import styled from '../../../configs/styled-components'

interface  ProjectDetailsProps {
    id: number
};

const ProjectDetails = (props: any) => {
    const id = props.match.params.id;

    const Project = styled.div`
    > .card {
        border-radius: 10px
    }
    > .card .card-action:last-child {
        border-radius: 0 0 10px 10px;
    }
    `;

  return (
    <Project className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam delectus ducimus voluptatibus voluptates officia accusamus facilis, tenetur ratione odio placeat sint omnis mollitia temporibus. Accusamus neque beatae perferendis autem!</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Sean Aguinaga</div>
                <div>September 2nd, 2am</div>
            </div>
        </div>
    </Project>
  )
}

export default ProjectDetails

