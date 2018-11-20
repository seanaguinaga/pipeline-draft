import * as React from 'react'
import ProjectSummary from '../ProjectSummary'
import styled from '../../../configs/styled-components'

interface Project {
    id: number,
    title: string,
    content: string
}

const ProjectList = ({projects}: any) => {
    console.log({projects})
    return (
        <div>
            { projects && projects.map((project: any) => {
                return (
                    <ProjectSummary project={project} key={project.id} />
                )
            })}
        </div>
    )
}

export default ProjectList