import React from 'react'
import {Project} from '../shared/project.types'
import {periodText} from '../shared/period.utils'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

interface Props {
  project: Project
}

const ProjectComponent: React.FC<Props> = props => {
  const {project} = props
  const period = periodText(project.period)
  return (
    <div>
      <h2>
        {!project.url && <span>{project.title}</span>}
        {project.url && (
          <span>
            <a href={project.url} target="_blank" rel="noreferrer" aria-label={'Link to ' + project.title}>
              {project.title} <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </span>
        )}
      </h2>
      {project.customer && (
        <div className="text-base opacity-90 mb-3">
          {period}
          {' | '}
          <a className="link" href={project.customer.url} target="_blank" rel="noreferrer">
            {project.customer?.name}
          </a>
        </div>
      )}
      {project.tags && (
        <div className="text-sm opacity-60">
          {project.tags?.map(tag => (
            <span key={tag}>
              {'#'}
              {tag}{' '}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
export default ProjectComponent
