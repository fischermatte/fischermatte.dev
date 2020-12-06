import * as React from 'react'
import {GetStaticProps} from 'next'
import ProjectComponent from '../components/project.component'
import {Project} from '../shared/project.types'
import {LayoutComponent} from '../components/layout.component'

interface Props {
  projects: Project[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const m = await import('./api/projects')
  return {props: {projects: m.projects}}
}

export default class Projects extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <LayoutComponent>
        <h1>Projects</h1>
        <div className="space-y-14">
          {this.props.projects.map(project => (
            <ProjectComponent key={project.title} project={project} />
          ))}
        </div>
      </LayoutComponent>
    )
  }
}
