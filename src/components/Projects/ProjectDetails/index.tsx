import * as React from 'react'
import styled from '../../../configs/styled-components'

interface  ProjectDetailsProps {
    id: number
};

const ProjectDetails = (props: any) => {
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
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
    </div>
  )
}

export default ProjectDetails

