import * as React from 'react'
import {Project} from '../core/types'

interface Props {
  project: Project
}

export default class ProjectComponent extends React.Component<Props> {
  render(): JSX.Element {
    const project = this.props.project
    return (
      <div className="mt-5">
        <h4 className="mb-2">
          {project.title} -{' '}
          <a className="link" href={project.url}>
            {project.url?.replace('https://', '')}
          </a>
        </h4>
        <div>{project.description}</div>
        <div>
          Customer:{' '}
          <a className="link" href={project.customer.url}>
            {project.customer?.name}
          </a>
        </div>
        {project.links?.length > 0 && (
          <div>
            Links:{' '}
            {project.links?.map(link => (
              <a key={link.url} className="link mr-4" href={link.url}>
                {link.title}
              </a>
            ))}
          </div>
        )}
      </div>
    )
  }
}
