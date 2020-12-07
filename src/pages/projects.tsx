import * as React from 'react'
import ProjectComponent from '../components/project.component'
import {LayoutComponent} from '../components/layout.component'
import {projects} from '../data/projects'

interface Props {}
interface State {}

export default class Projects extends React.Component<Props, State> {
  render(): JSX.Element {
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
}
