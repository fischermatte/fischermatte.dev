import React from 'react'
import LayoutComponent from '../components/layout.component'
import ProjectComponent from '../components/project.component'
import {projects} from '../../content/projects'

interface Props {}

const Projects: React.FC<Props> = () => {
  return (
    <LayoutComponent>
      <h1>Projects</h1>
      <div className="space-y-14">
        {projects.map(project => (
          <ProjectComponent key={project.title} project={project} />
        ))}
      </div>
    </LayoutComponent>
  )
}

export default Projects
