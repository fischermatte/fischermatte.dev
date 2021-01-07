import React, {BaseSyntheticEvent, useState} from 'react'
import {Project} from '../core/shared/project.types'
import {periodText} from '../core/client/period.utils'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import dynamic from 'next/dynamic'

const GalleryDialog = dynamic(() => import('../components/gallery-dialog'))

interface Props {
  project: Project
}

const ProjectComponent: React.FC<Props> = props => {
  const {project} = props
  const period = periodText(project.period)
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = (e: BaseSyntheticEvent): void => {
    e.preventDefault()
    setModalOpen(true)
  }

  const closeModal = (e: BaseSyntheticEvent): void => {
    e.preventDefault()
    setModalOpen(false)
  }
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
      <p>
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
        {project.images && (
          <div className="mt-2">
            <a
              role="button"
              className="link underline"
              tabIndex={0}
              onClick={e => openModal(e)}
              onKeyDown={e => {
                if (e.key === 'Enter') openModal(e)
              }}
            >
              Screenshots
            </a>
            {modalOpen && <GalleryDialog images={project.images} onClose={closeModal} />}
          </div>
        )}
      </p>
    </div>
  )
}
export default ProjectComponent
