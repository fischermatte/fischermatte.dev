import * as React from 'react'
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
        {project.title}
        {project.url && (
          <span>
            {' '}
            <a href={project.url} target="_blank" rel="noreferrer" aria-label={'Link to ' + project.title}>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </span>
        )}
        {/*{project.url && (*/}
        {/*  <span>*/}
        {/*    {' '}*/}
        {/*    <a className="link" href={project.url} target="_blank">*/}
        {/*      {project.url?.replace('https://', '')}*/}
        {/*    </a>*/}
        {/*  </span>*/}
        {/*)}*/}{' '}
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
      {/*{project.description && <div className="">{project.description}</div>}*/}
      {/*{project.links?.length > 0 && (*/}
      {/*  <div className="">*/}
      {/*    Links:{' '}*/}
      {/*    {project.links?.map(link => (*/}
      {/*      <a key={link.url} className="link mr-4" href={link.url} target="_blank">*/}
      {/*        {link.title}*/}
      {/*      </a>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  )
}
export default ProjectComponent
